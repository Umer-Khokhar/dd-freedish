'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import mpegts from 'mpegts.js';

export default function CustomVideoPlayer({ url, channelName }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('auto');
  const [showAspectMenu, setShowAspectMenu] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const aspectRatios = [
    { label: 'Auto', value: 'auto' },
    { label: '16:9', value: '16/9' },
    { label: '4:3', value: '4/3' },
    { label: '21:9', value: '21/9' },
    { label: 'Fill', value: 'fill' },
  ];

  // Initialize mpegts player
  useEffect(() => {
    if (!url || !videoRef.current) return;
    setError(null);
    setIsLoading(true);

    const proxyUrl = `/api/stream?url=${encodeURIComponent(url)}`;

    if (mpegts.getFeatureList().mseLivePlayback) {
      const player = mpegts.createPlayer({
        type: 'mpegts',
        isLive: true,
        url: proxyUrl,
      });

      player.attachMediaElement(videoRef.current);
      player.load();

      const playPromise = player.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.warn('Autoplay prevented', e));
      }

      playerRef.current = player;

      player.on(mpegts.Events.ERROR, (errorType, errorDetail, errorInfo) => {
        console.error('mpegts error:', errorType, errorDetail, errorInfo);
        setError(`Stream Error: ${errorDetail}`);
        setIsLoading(false);
      });

      return () => {
        player.destroy();
        playerRef.current = null;
      };
    } else {
      setError('MPEG-TS playback is not supported in this browser.');
      setIsLoading(false);
    }
  }, [url]);

  // Video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => { setIsPlaying(true); setIsLoading(false); };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsLoading(true);
    const onCanPlay = () => setIsLoading(false);
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('volumechange', onVolumeChange);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('volumechange', onVolumeChange);
    };
  }, []);

  // Fullscreen change listener
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  // Auto-hide controls
  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    clearTimeout(controlsTimerRef.current);
    if (isPlaying) {
      controlsTimerRef.current = setTimeout(() => setShowControls(false), 3000);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) setShowControls(true);
    else resetControlsTimer();
  }, [isPlaying, resetControlsTimer]);

  // Controls
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const val = parseFloat(e.target.value);
    video.volume = val;
    video.muted = val === 0;
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const getVideoStyle = () => {
    if (aspectRatio === 'fill') return { width: '100%', height: '100%', objectFit: 'cover' };
    if (aspectRatio === 'auto') return { width: '100%', height: '100%', objectFit: 'contain' };
    return { width: '100%', height: '100%', objectFit: 'contain', aspectRatio: aspectRatio };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={resetControlsTimer}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onClick={(e) => {
        if (e.target === videoRef.current || e.target.dataset.clickarea === 'true') {
          togglePlay();
        }
      }}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: isFullscreen ? undefined : '16/9',
        height: isFullscreen ? '100vh' : undefined,
        background: '#000',
        borderRadius: isFullscreen ? '0' : '20px',
        overflow: 'hidden',
        boxShadow: isFullscreen ? 'none' : '0 20px 60px rgba(0,0,0,0.3)',
        cursor: showControls ? 'default' : 'none',
      }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={getVideoStyle()}
      />

      {/* Click area overlay */}
      <div data-clickarea="true" style={{
        position: 'absolute', inset: 0, zIndex: 1,
        display: showControls || !isPlaying ? 'block' : 'block',
      }} />

      {/* Loading Spinner */}
      {isLoading && !error && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.4)',
        }}>
          <div style={{
            width: '48px', height: '48px',
            border: '3px solid rgba(255,255,255,0.2)',
            borderTopColor: 'var(--accent-primary)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5" style={{ marginBottom: '16px' }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={{ color: '#ef4444', fontSize: '16px', fontWeight: 600 }}>{error}</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '8px' }}>Try refreshing or select another channel</p>
        </div>
      )}

      {/* No URL State */}
      {!url && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px', fontWeight: 600, marginTop: '16px' }}>
            Select a channel to start watching
          </p>
        </div>
      )}

      {/* Top Bar - Channel Name */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
          padding: '16px 20px',
          opacity: showControls ? 1 : 0,
          transform: showControls ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.3s ease',
          pointerEvents: showControls ? 'auto' : 'none',
        }}
        className="player-top-gradient"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            background: 'rgba(239, 68, 68, 0.9)', padding: '3px 10px', borderRadius: '6px',
            fontSize: '11px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} className="live-pulse" />
            Live
          </span>
          <span style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>{channelName || 'DD FreeDish'}</span>
        </div>
      </div>

      {/* Bottom Controls */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20,
          padding: '0 20px 16px',
          opacity: showControls ? 1 : 0,
          transform: showControls ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.3s ease',
          pointerEvents: showControls ? 'auto' : 'none',
        }}
        className="player-controls-gradient"
        onClick={e => e.stopPropagation()}
      >
        {/* Progress Bar */}
        <div className="progress-bar-container" style={{ marginBottom: '12px' }}>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: '100%' }} />
          </div>
        </div>

        {/* Controls Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Left Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Play/Pause */}
            <PlayerButton onClick={togglePlay} label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <polygon points="6 3 20 12 6 21" />
                </svg>
              )}
            </PlayerButton>

            {/* Volume */}
            <PlayerButton onClick={toggleMute} label={isMuted ? 'Unmute' : 'Mute'}>
              {isMuted || volume === 0 ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : volume < 0.5 ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </PlayerButton>

            <input
              type="range"
              className="volume-slider"
              min="0" max="1" step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              style={{ marginLeft: '-4px' }}
            />

            {/* Time */}
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 500, marginLeft: '8px', fontVariantNumeric: 'tabular-nums' }}>
              {formatTime(currentTime)}
            </span>
          </div>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {/* Aspect Ratio */}
            <div style={{ position: 'relative' }}>
              <PlayerButton
                onClick={() => setShowAspectMenu(!showAspectMenu)}
                label="Aspect Ratio"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </PlayerButton>

              {showAspectMenu && (
                <div
                  className="animate-slide-down"
                  style={{
                    position: 'absolute', bottom: '48px', right: 0,
                    background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)',
                    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
                    padding: '6px', minWidth: '130px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Aspect Ratio
                  </div>
                  {aspectRatios.map(ar => (
                    <button
                      key={ar.value}
                      onClick={() => { setAspectRatio(ar.value); setShowAspectMenu(false); }}
                      style={{
                        display: 'block', width: '100%', padding: '8px 10px', textAlign: 'left',
                        background: aspectRatio === ar.value ? 'var(--accent-primary)' : 'transparent',
                        color: '#fff', fontSize: '13px', fontWeight: 500, border: 'none', borderRadius: '8px',
                        cursor: 'pointer', transition: 'background 0.15s ease',
                      }}
                      onMouseEnter={e => { if (aspectRatio !== ar.value) e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                      onMouseLeave={e => { if (aspectRatio !== ar.value) e.target.style.background = 'transparent'; }}
                    >
                      {ar.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fullscreen */}
            <PlayerButton onClick={toggleFullscreen} label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
              {isFullscreen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              )}
            </PlayerButton>
          </div>
        </div>
      </div>

      {/* Center Play Button (when paused) */}
      {!isPlaying && !isLoading && !error && url && (
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 15,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'rgba(249, 115, 22, 0.9)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)',
            animation: 'fadeInUp 0.2s ease-out',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '3px' }}>
              <polygon points="6 3 20 12 6 21" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function PlayerButton({ onClick, label, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      style={{
        width: '40px', height: '40px', borderRadius: '10px',
        border: 'none', background: 'transparent', color: '#fff',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.15s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--player-control-hover)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      {children}
    </button>
  );
}
