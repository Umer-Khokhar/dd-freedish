import { NextResponse } from 'next/server';
import { spawn } from 'child_process';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl || !String(targetUrl).startsWith("http")) {
    return new NextResponse('Invalid stream URL', { status: 400 });
  }

  try {
    // We use FFmpeg to intercept the stream and transcode it to Progressive H.264 on-the-fly.
    // This solves BOTH the Interlaced H.264 (576i) issue AND the HEVC (H.265) HD channel issue,
    // as Chrome's MSE doesn't support either out of the box.
    const ffmpegArgs = [
      '-user_agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:151.0) Gecko/20100101 Firefox/151.0',
      '-i', targetUrl,
      // Video transcoding:
      '-c:v', 'libx264',
      '-preset', 'ultrafast',       // Minimize CPU usage
      '-tune', 'zerolatency',       // Minimize latency for live streams
      '-vf', 'yadif',               // Hardware-agnostic Deinterlacing filter
      '-b:v', '1500k',              // Reasonable bitrate
      // Audio transcoding:
      '-c:a', 'aac',
      '-b:a', '128k',
      // Muxing to MPEG-TS stdout:
      '-f', 'mpegts',
      'pipe:1'
    ];

    const ffmpeg = spawn('ffmpeg', ffmpegArgs);

    // If the client disconnects (closes tab or changes channel), we must kill FFmpeg immediately
    req.signal.addEventListener('abort', () => {
      ffmpeg.kill('SIGKILL');
    });

    const readable = new ReadableStream({
      start(controller) {
        ffmpeg.stdout.on('data', (chunk) => {
          controller.enqueue(chunk);
        });

        ffmpeg.on('close', () => {
          controller.close();
        });

        ffmpeg.on('error', (err) => {
          console.error('FFmpeg error:', err);
          controller.error(err);
        });
      },
      cancel() {
        ffmpeg.kill('SIGKILL');
      }
    });

    const headers = new Headers();
    headers.set("Content-Type", "video/mp2t");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Cache-Control", "no-cache");
    headers.set("Connection", "keep-alive");

    return new NextResponse(readable, {
      status: 200,
      headers
    });
  } catch (err) {
    console.error(err);
    return new NextResponse("Proxy error", { status: 500 });
  }
}
