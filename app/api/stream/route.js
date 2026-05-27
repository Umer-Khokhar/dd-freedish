import { NextResponse } from 'next/server';
import { spawn } from 'child_process';

export const dynamic = 'force-dynamic';

// Increase the max duration for this route (Railway/Render have no hard limit,
// but this tells Next.js not to abort the response early).
export const maxDuration = 300; // 5 minutes

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');
  const qualityParam = (searchParams.get('quality') || 'medium').toLowerCase();
  const isHD = searchParams.get('isHD') === 'true';

  if (!targetUrl || !String(targetUrl).startsWith("http")) {
    return new NextResponse('Invalid stream URL', { status: 400 });
  }

  // Pre-validate the stream URL to catch 404/403/offline errors early
  try {
    const probe = await fetch(targetUrl, { 
      method: 'HEAD', 
      signal: AbortSignal.timeout(5000),
      headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:151.0) Gecko/20100101 Firefox/151.0' }
    });
    
    if (!probe.ok) {
      return new NextResponse(JSON.stringify({ 
        error: `Source Error: ${probe.status} ${probe.statusText}`,
        detail: "The stream provider is returning an error."
      }), { status: probe.status, headers: { 'Content-Type': 'application/json' } });
    }
  } catch (err) {
    // If HEAD fails, it might just be the server blocking it, we can continue or log
    console.warn('Pre-validation HEAD failed, continuing anyway:', err.message);
  }

  try {
    // Dynamic Bitrate and Resolution Scaling based on Quality
    // Use CRF (Constant Rate Factor) instead of forced high bitrates to keep the quality 
    // close to the actual stream without bloating the bitrate and causing buffering.
    let crf = '23'; // Default CRF for good quality
    let maxRate = ''; // Empty string means no maxrate padding
    let bufSize = '8000k';
    let scaleWidth = '1920';

    if (qualityParam === '1080p') { crf = '23'; maxRate = ''; bufSize = '16000k'; scaleWidth = '1920'; }
    else if (qualityParam === '720p') { crf = '25'; maxRate = '3000k'; bufSize = '6000k'; scaleWidth = '1280'; }
    else if (qualityParam === '576p') { crf = '23'; maxRate = ''; bufSize = '8000k'; scaleWidth = '1024'; }
    else if (qualityParam === '480p') { crf = '26'; maxRate = '1500k'; bufSize = '3000k'; scaleWidth = '854'; }
    else if (qualityParam === '360p') { crf = '28'; maxRate = '800k'; bufSize = '1600k'; scaleWidth = '640'; }
    else if (qualityParam === '240p') { crf = '30'; maxRate = '500k'; bufSize = '1000k'; scaleWidth = '426'; }
    else if (qualityParam === '144p') { crf = '32'; maxRate = '300k'; bufSize = '600k'; scaleWidth = '256'; }
    // Fallbacks
    else if (isHD) { crf = '23'; maxRate = ''; bufSize = '16000k'; scaleWidth = '1920'; }
    else { crf = '23'; maxRate = ''; bufSize = '8000k'; scaleWidth = '1024'; }

    // Always use transcoding with libx264 for Chrome compatibility
    const ffmpegArgs = [
      '-hide_banner',
      '-loglevel', 'error',
      '-user_agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:151.0) Gecko/20100101 Firefox/151.0',
      '-i', targetUrl,
      // Video transcoding:
      '-c:v', 'libx264',
      '-preset', 'veryfast',        // Better quality than ultrafast while still being fast for live streams
      '-tune', 'zerolatency',       // Minimize latency for live streams
      '-vf', `yadif,scale='min(${scaleWidth},iw)':-2`, // Deinterlace and dynamically scale
      '-crf', crf
    ];

    if (maxRate) {
      ffmpegArgs.push('-maxrate', maxRate, '-bufsize', bufSize);
    } else {
      // Just supply a buffer size for smoothing if no maxrate is strictly enforced
      ffmpegArgs.push('-bufsize', bufSize);
    }

    ffmpegArgs.push(
      '-threads', '2',              // Limit CPU threads so it doesn't crash Railway container
      // Audio transcoding:
      '-c:a', 'aac',
      '-b:a', '128k',
      // Muxing to MPEG-TS stdout:
      '-f', 'mpegts',
      'pipe:1'
    );

    const ffmpeg = spawn('ffmpeg', ffmpegArgs);

    // Log FFmpeg stderr for debugging (won't go to client)
    ffmpeg.stderr.on('data', (data) => {
      console.error('[FFmpeg]', data.toString());
    });

    // If the client disconnects (closes tab or changes channel), we must kill FFmpeg immediately
    req.signal.addEventListener('abort', () => {
      ffmpeg.kill('SIGKILL');
    });

    const readable = new ReadableStream({
      start(controller) {
        ffmpeg.stdout.on('data', (chunk) => {
          try {
            controller.enqueue(chunk);
          } catch (e) {
            // Controller may be closed if client disconnected
            ffmpeg.kill('SIGKILL');
          }
        });

        ffmpeg.on('close', () => {
          try {
            controller.close();
          } catch (e) {
            // Ignore if controller is already closed (e.g. client disconnected)
          }
        });

        ffmpeg.on('error', (err) => {
          console.error('FFmpeg process error:', err);
          try {
            controller.error(err);
          } catch (e) {
            // Ignore if already errored
          }
        });
      },
      cancel() {
        ffmpeg.kill('SIGKILL');
      }
    });

    const headers = new Headers();
    headers.set("Content-Type", "video/mp2t");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
    headers.set("Connection", "keep-alive");

    return new NextResponse(readable, {
      status: 200,
      headers
    });
  } catch (err) {
    console.error(err);
    return new NextResponse("Proxy error: " + err.message, { status: 500 });
  }
}
