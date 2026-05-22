'use client';
import { useEffect, useRef, useState } from 'react';
import mpegts from 'mpegts.js';

export default function VideoPlayer({ url }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url || !videoRef.current) return;
    setError(null);

    // Route through our Next.js API proxy
    const proxyUrl = `/api/stream?url=${encodeURIComponent(url)}`;

    if (mpegts.getFeatureList().mseLivePlayback) {
      // Create MPEG-TS player
      const player = mpegts.createPlayer({
        type: 'mpegts',
        isLive: true,
        url: proxyUrl,
      });

      player.attachMediaElement(videoRef.current);
      player.load();
      
      const playPromise = player.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.warn("Autoplay prevented or stream error", e);
        });
      }
      
      playerRef.current = player;

      player.on(mpegts.Events.ERROR, (errorType, errorDetail, errorInfo) => {
        console.error('mpegts error:', errorType, errorDetail, errorInfo);
        setError(`Stream Error: ${errorDetail}`);
      });

      return () => {
        player.destroy();
        playerRef.current = null;
      };
    } else {
      setError('MPEG-TS playback is not supported in this browser.');
    }
  }, [url]);

  return (
    <div className="relative w-full aspect-video bg-black/90 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 ring-1 ring-white/10">
      <video
        ref={videoRef}
        controls
        className="w-full h-full object-contain"
        autoPlay
        muted
      />
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-red-400 font-medium p-6 text-center backdrop-blur-sm">
          <svg className="w-12 h-12 mb-4 text-red-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {error}
        </div>
      )}
      {!url && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white/50">
          <svg className="w-16 h-16 mb-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-lg font-medium tracking-wide">Select a channel to start watching</span>
        </div>
      )}
    </div>
  );
}
