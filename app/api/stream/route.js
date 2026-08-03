import { NextResponse } from 'next/server';
import { spawn, spawnSync } from 'child_process';

export const dynamic = 'force-dynamic';

// Increase the max duration for this route (Railway/Render have no hard limit,
// but this tells Next.js not to abort the response early).
export const maxDuration = 300; // 5 minutes

// Detect the best available software H.264 encoder at module init time.
// libx264 is preferred (CRF + preset support), libopenh264 is the fallback.
let H264_ENCODER = 'libx264';
let H264_HAS_CRF = true;
try {
  const enc = spawnSync('ffmpeg', ['-encoders'], { timeout: 5000 });
  const out = enc.stdout?.toString() || '';
  if (!out.includes('libx264') && out.includes('libopenh264')) {
    H264_ENCODER = 'libopenh264';
    H264_HAS_CRF = false;
    console.log('[stream] libx264 not found, using libopenh264 (no CRF)');
  }
} catch (e) {
  console.warn('[stream] Could not probe FFmpeg encoders, defaulting to libx264');
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  let targetUrl = searchParams.get('url');
  const qualityParam = (searchParams.get('quality') || 'medium').toLowerCase();
  const isHD = searchParams.get('isHD') === 'true';
  const startTime = parseFloat(searchParams.get('startTime') || '0');
  const probeOnly = searchParams.get('probe') === '1';
  const audioIndex = parseInt(searchParams.get('audio'), 10);
  const hasAudioSelect = Number.isInteger(audioIndex) && audioIndex >= 0;

  if (!targetUrl || !String(targetUrl).startsWith("http")) {
    return new NextResponse('Invalid stream URL', { status: 400 });
  }

  // Inject dynamic credentials from settings if placeholders exist
  if (targetUrl.includes('{USERNAME}') && targetUrl.includes('{PASSWORD}')) {
    try {
      const fs = require('fs');
      const path = require('path');
      const settingsPath = path.join(process.cwd(), 'data', 'settings.json');
      if (fs.existsSync(settingsPath)) {
        const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
        const urlObj = new URL(targetUrl);
        const providerHost = urlObj.host;

        if (settings.providers && settings.providers[providerHost]) {
          const { username, password } = settings.providers[providerHost];
          targetUrl = targetUrl.replace('{USERNAME}', username).replace('{PASSWORD}', password);
        }
      }
    } catch (err) {
      console.error('Error injecting credentials:', err);
    }
  }

  if (probeOnly) {
    try {
      const probeResult = await probeMedia(targetUrl);
      return NextResponse.json(probeResult);
    } catch (err) {
      console.warn('[probe] ffprobe failed:', err.message);
      return NextResponse.json({ duration: 0, audioTracks: [] });
    }
  }

  // Pre-validate the stream URL to catch 404/403/offline errors early
  try {
      const probe = await fetch(targetUrl, { 
      method: 'HEAD', 
      signal: AbortSignal.timeout(10000),
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
    let bitrate = '';     // target video bitrate (used when no CRF)
    let maxRate = '';     // maxrate padding (used with CRF or as ceiling with bitrate)
    let bufSize = '8000k';
    let scaleWidth = '1920';
    let crf = '';         // only used when H264_HAS_CRF is true
    let copyVideo = false; // stream-copy video without re-encoding (true original)

    if (qualityParam === '1080p') { crf = '23'; maxRate = ''; bufSize = '16000k'; scaleWidth = '1920'; bitrate = '5000k'; }
    else if (qualityParam === 'high') { copyVideo = true; bufSize = '30000k'; }
    else if (qualityParam === 'medium') { crf = '23'; maxRate = ''; bufSize = '8000k'; scaleWidth = '1024'; bitrate = '2500k'; }
    else if (qualityParam === 'low') { crf = '28'; maxRate = '800k'; bufSize = '1600k'; scaleWidth = '640'; bitrate = '600k'; }
    else if (qualityParam === '720p') { crf = '25'; maxRate = '3000k'; bufSize = '6000k'; scaleWidth = '1280'; bitrate = '2500k'; }
    else if (qualityParam === '576p') { crf = '23'; maxRate = ''; bufSize = '8000k'; scaleWidth = '1024'; bitrate = '2000k'; }
    else if (qualityParam === '480p') { crf = '26'; maxRate = '1500k'; bufSize = '3000k'; scaleWidth = '854'; bitrate = '1200k'; }
    else if (qualityParam === '360p') { crf = '28'; maxRate = '800k'; bufSize = '1600k'; scaleWidth = '640'; bitrate = '600k'; }
    else if (qualityParam === '240p') { crf = '30'; maxRate = '500k'; bufSize = '1000k'; scaleWidth = '426'; bitrate = '350k'; }
    else if (qualityParam === '144p') { crf = '32'; maxRate = '300k'; bufSize = '600k'; scaleWidth = '256'; bitrate = '200k'; }
    // Fallbacks
    else if (isHD) { crf = '23'; maxRate = ''; bufSize = '16000k'; scaleWidth = '1920'; bitrate = '5000k'; }
    else { crf = '23'; maxRate = ''; bufSize = '8000k'; scaleWidth = '1024'; bitrate = '2500k'; }

    // Always use transcoding for Chrome compatibility, unless copyVideo (high/original)
    // Added advanced flags to prevent mpegts.js SourceBuffer crashes (PTS/DTS errors)
    const ffmpegArgs = [
      '-hide_banner',
      '-loglevel', 'error',
      '-user_agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:151.0) Gecko/20100101 Firefox/151.0',
      '-fflags', '+genpts',         // Generate valid presentation timestamps
      '-reconnect', '1',            // Reconnect if stream drops
      '-reconnect_streamed', '1',
      '-reconnect_delay_max', '5',
      '-reconnect_on_network_error', '1',
      '-reconnect_on_http_error', '4xx,5xx',
      '-rw_timeout', '15000000',    // 15s read/write timeout in microseconds
      ...(startTime > 0 ? ['-ss', String(startTime)] : []),
      '-i', targetUrl,
      // Audio track selection: when a specific audio stream is requested we must
      // explicitly map video + that audio stream (adding any -map disables ffmpeg's
      // automatic stream selection for ALL stream types).
      ...(hasAudioSelect
        ? ['-map', '0:v:0', '-map', `0:a:${audioIndex}`]
        : []),
    ];

    if (copyVideo) {
      // "High (Original)" — stream-copy video as-is for true original quality.
      // Only audio is re-encoded to AAC for browser compatibility.
      ffmpegArgs.push(
        '-c:v', 'copy',
        '-c:a', 'aac',
        '-b:a', '128k',
        '-ac', '2',
        '-ar', '44100',
        '-af', 'aresample=async=1',
        '-f', 'mpegts',
        '-muxdelay', '0.1',
        'pipe:1'
      );
    } else {
      // Transcode video for Chrome MSE compatibility
      ffmpegArgs.push('-c:v', H264_ENCODER);

      if (H264_HAS_CRF) {
        // libx264 path: CRF-based quality with preset/tune
        ffmpegArgs.push(
          '-preset', 'veryfast',
          '-tune', 'zerolatency',
          '-crf', crf
        );
        if (maxRate) {
          ffmpegArgs.push('-maxrate', maxRate);
        }
      } else {
        // libopenh264 path: bitrate-based quality (no CRF support)
        ffmpegArgs.push(
          '-rc_mode', 'bitrate',
          '-b:v', bitrate
        );
        // Use 1.5x the quality's bitrate as a maxrate ceiling
        const maxrate = Math.round(parseInt(bitrate) * 1.5) + 'k';
        ffmpegArgs.push('-maxrate', maxrate);
      }

      ffmpegArgs.push(
        '-vf', scaleWidth ? `yadif,scale='min(${scaleWidth},iw)':-2` : 'yadif',
        '-g', '50',                   // Force keyframe every 2 seconds (crucial for MSE/SourceBuffer)
        '-keyint_min', '50',
        '-sc_threshold', '0',         // Strict GOP size
        '-r', '25',                   // Force constant frame rate to fix variable framerate crashes
        '-pix_fmt', 'yuv420p',        // Ensure widely supported pixel format
        // Always supply a buffer size for smoothing
        '-bufsize', bufSize,
        '-threads', '2',              // Limit CPU threads so it doesn't crash Railway container
        // Audio transcoding:
        '-c:a', 'aac',
        '-b:a', '128k',
        '-ac', '2',                   // Force stereo (5.1 audio can crash browser players)
        '-ar', '44100',               // Force standard sample rate
        '-af', 'aresample=async=1',   // Stretch/squeeze audio to maintain sync with video
        // Muxing to MPEG-TS stdout:
        '-f', 'mpegts',
        '-muxdelay', '0.1',           // Prevent TS muxing buffer underflows
        'pipe:1'
      );
    }

    const ffmpeg = spawn('ffmpeg', ffmpegArgs);

    // Collect stderr to detect early startup failures (DNS, 404, etc.)
    let ffmpegStderr = '';
    let ffmpegStartedProducing = false;

    ffmpeg.stderr.on('data', (data) => {
      const msg = data.toString();
      // "Stream ends prematurely" is non-fatal when reconnect is enabled — the source
      // server just closes the connection and ffmpeg reconnects. Demote to warn.
      if (msg.includes('Stream ends prematurely')) {
        console.warn('[FFmpeg]', msg.trim());
      } else {
        console.error('[FFmpeg]', msg);
      }
      ffmpegStderr += msg;
    });

    ffmpeg.stdout.once('data', () => {
      ffmpegStartedProducing = true;
    });

    // If the client disconnects (closes tab or changes channel), we must kill FFmpeg immediately
    req.signal.addEventListener('abort', () => {
      ffmpeg.kill('SIGKILL');
    });

    const readable = new ReadableStream({
      start(controller) {
        // Watch for early exit (startup failure): if FFmpeg exits without producing
        // any data, error the stream so the browser gets a clear failure instead of
        // a silent "no supported source".
        let earlyCloseTimer = setTimeout(() => {
          if (!ffmpegStartedProducing && ffmpeg.exitCode !== null) {
            // FFmpeg already exited without producing data
            const errMsg = ffmpegStderr.trim() || 'Unknown FFmpeg startup error';
            controller.error(new Error(errMsg));
          }
        }, 500);

        ffmpeg.stdout.on('data', (chunk) => {
          if (earlyCloseTimer) {
            clearTimeout(earlyCloseTimer);
            earlyCloseTimer = null;
          }
          try {
            controller.enqueue(chunk);
          } catch (e) {
            // Controller may be closed if client disconnected
            ffmpeg.kill('SIGKILL');
          }
        });

        ffmpeg.on('close', (code) => {
          if (earlyCloseTimer) {
            clearTimeout(earlyCloseTimer);
            earlyCloseTimer = null;
          }
          if (!ffmpegStartedProducing && code !== 0) {
            // Startup failure — FFmpeg exited before sending any data
            const errMsg = ffmpegStderr.trim() || `FFmpeg exited with code ${code}`;
            try {
              controller.error(new Error(errMsg));
            } catch (e) {
              // Ignore if already errored
            }
            return;
          }
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

function probeMedia(url) {
  return new Promise((resolve, reject) => {
    const proc = spawn('ffprobe', [
      '-v', 'error',
      '-show_entries',
      'format=duration:stream=index,codec_type,codec_name,width,height,r_frame_rate,channels:stream_tags=language,title:stream_disposition=default',
      '-of', 'json',
      '-user_agent', 'Mozilla/5.0 (X11; Linux x86_64; rv:151.0) Gecko/20100101 Firefox/151.0',
      url
    ], { timeout: 30000 });

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (d) => { stdout += d.toString(); });
    proc.stderr.on('data', (d) => { stderr += d.toString(); });

    proc.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(stderr.trim() || `ffprobe exited with code ${code}`));
        return;
      }
      try {
        const data = JSON.parse(stdout);
        const dur = parseFloat(data?.format?.duration);
        const streams = data?.streams || [];

        // Collect audio streams. `index` here is the ffprobe GLOBAL stream index
        // (e.g. 0=video, 1=audio#1, 2=audio#2) — ffmpeg's `-map 0:a:N` instead
        // expects the Nth AUDIO stream, so we renumber sequentially.
        let audioOrdinal = 0;
        const audioTracks = [];
        let videoInfo = null;
        for (const s of streams) {
          if (s.codec_type === 'video' && !videoInfo) {
            const fpsParts = (s.r_frame_rate || '0/1').split('/');
            const fps = fpsParts.length === 2 && parseInt(fpsParts[1]) > 0
              ? Math.round(parseInt(fpsParts[0]) / parseInt(fpsParts[1]))
              : 0;
            videoInfo = {
              codec: s.codec_name || '',
              width: s.width || 0,
              height: s.height || 0,
              fps,
            };
          }
          if (s.codec_type !== 'audio') continue;
          audioTracks.push({
            index: audioOrdinal++,          // index for -map 0:a:N
            streamIndex: s.index,           // global ffprobe index
            language: s.tags?.language || '',
            title: s.tags?.title || '',
            channels: s.channels || 2,
            isDefault: !!(s.disposition && s.disposition.default),
          });
        }

        resolve({
          duration: isFinite(dur) && dur > 0 ? dur : 0,
          video: videoInfo,
          audioTracks,
        });
      } catch (e) {
        reject(e);
      }
    });

    proc.on('error', reject);
  });
}
