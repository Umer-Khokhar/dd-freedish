'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import mpegts from 'mpegts.js';

// ISO 639-2 language codes → display names for audio track selection
const LANG_NAMES = {
  hin: 'Hindi', eng: 'English', jpn: 'Japanese', tam: 'Tamil', tel: 'Telugu',
  kan: 'Kannada', mal: 'Malayalam', mar: 'Marathi', ben: 'Bengali', guj: 'Gujarati',
  pan: 'Punjabi', urd: 'Urdu', spa: 'Spanish', fra: 'French', fre: 'French',
  ger: 'German', deu: 'German', kor: 'Korean', chi: 'Chinese', zho: 'Chinese',
  ara: 'Arabic', por: 'Portuguese', rus: 'Russian', ind: 'Indonesian', tha: 'Thai',
  vie: 'Vietnamese', tur: 'Turkish', ita: 'Italian', dut: 'Dutch', nld: 'Dutch',
  pol: 'Polish', sve: 'Swedish', dan: 'Danish', nor: 'Norwegian', fin: 'Finnish',
  ell: 'Greek', heb: 'Hebrew', ces: 'Czech', hun: 'Hungarian', rum: 'Romanian',
  ukr: 'Ukrainian', cat: 'Catalan', fil: 'Filipino', tgl: 'Tagalog',
};

// Best-effort display label for an audio track: prefer the ISO code mapping,
// then a language name inside the track title (e.g. "vegamovies.in (English)").
const getAudioLabel = (track) => {
  const lang = (track.language || '').toLowerCase();
  if (LANG_NAMES[lang]) return LANG_NAMES[lang];

  const title = (track.title || '').toLowerCase();
  const paren = title.match(/\(([^)]+)\)/);
  if (paren) {
    const word = paren[1].trim();
    const found = Object.values(LANG_NAMES).find(n => n.toLowerCase() === word);
    if (found) return found;
  }
  if (lang) return lang.toUpperCase();
  if (track.title) return track.title;
  return `Audio ${track.index + 1}`;
};

export default function CustomVideoPlayer({ url, channelName, type = 'channel' }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimerRef = useRef(null);
  const progressRef = useRef(null);
  const seekDragging = useRef(false);
  const seekTimeRef = useRef(0);
  const pendingSeekRef = useRef(0);
  const streamOffsetRef = useRef(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('auto');
  const [showAspectMenu, setShowAspectMenu] = useState(false);
  const [quality, setQuality] = useState('Auto');
  const [activeResolution, setActiveResolution] = useState('');
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [retryKey, setRetryKey] = useState(0);
  const [showForceReload, setShowForceReload] = useState(false);
  const [hoverTime, setHoverTime] = useState(null);
  const [seekTrigger, setSeekTrigger] = useState(0);
  const [mediaDuration, setMediaDuration] = useState(0);
  const [seekPreview, setSeekPreview] = useState(null);
  const [audioState, setAudioState] = useState({ url: null, audioTracks: [], audioIndex: null, showAudioMenu: false });
  const { audioTracks, audioIndex, showAudioMenu } = audioState;
  const loadingTimeoutRef = useRef(null);
  const forceReloadTimerRef = useRef(null);

  const isVod = type === 'movie' || type === 'series';
  const isLive = !isVod;

  const aspectRatios = [
    { label: 'Default', value: 'auto' },
    { label: 'Fit', value: 'fit' },
    { label: 'Fill', value: 'fill' },
  ];

  // Auto-hide controls
  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    clearTimeout(controlsTimerRef.current);
    if (isPlaying) {
      controlsTimerRef.current = setTimeout(() => setShowControls(false), 3000);
    }
  }, [isPlaying]);

  const handleReload = useCallback(() => {
    setRetryKey(prev => prev + 1);
    setError(null);
    setIsLoading(true);
    setShowForceReload(false);
  }, []);

  // When the media URL changes (new episode / movie), reset audio selection so
  // a stale track choice from a previous file never gets passed to the proxy.
  // This is React's documented render-time state adjustment pattern.
  if (audioState.url !== url) {
    setAudioState({ url, audioTracks: [], audioIndex: null, showAudioMenu: false });
  }

  // Probe media duration + audio tracks for VOD content
  useEffect(() => {
    if (!isVod || !url) return;
    let cancelled = false;
    const probeUrl = `/api/stream?url=${encodeURIComponent(url)}&probe=1`;
    fetch(probeUrl)
      .then(r => r.json())
      .then(data => {
        if (cancelled || audioState.url !== url) return;
        if (data.duration > 0) {
          setMediaDuration(data.duration);
        }
        if (Array.isArray(data.audioTracks) && data.audioTracks.length > 1) {
          // Keep audioIndex null (= auto / ffmpeg default track) until the user
          // explicitly selects a language. This avoids tearing down and re-buffering
          // the just-started stream merely to pass `audio=N` for the default track.
          // The label/highlight already fall back to the isDefault track.
          setAudioState(s => ({ ...s, url, audioTracks: data.audioTracks }));
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [url, isVod, audioState.url]);

  // Initialize mpegts player
  useEffect(() => {
    if (!url || !videoRef.current) return;
    setError(null);
    setIsLoading(true);
    setShowForceReload(false);

    // Determine the start position:
    // - If we're seeking, use the seek target
    // - Otherwise (initial load / quality change / retry), preserve currentTime
    //   so a quality switch resumes where you were instead of jumping to 0.
    const seekPos = seekTimeRef.current;
    const isSeek = seekPos > 0;
    const startTime = isSeek ? seekPos : Math.floor(currentTime);
    if (!isSeek && currentTime > 0) {
      setCurrentTime(currentTime);
    } else if (!isSeek) {
      setDuration(0);
      setCurrentTime(0);
    } else {
      setCurrentTime(seekPos);
    }

    // Clear any existing timers
    if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
    if (forceReloadTimerRef.current) clearTimeout(forceReloadTimerRef.current);

    // Show "Force Reload" button after 6 seconds of loading
    forceReloadTimerRef.current = setTimeout(() => {
      if (!isPlaying && !error) {
        setShowForceReload(true);
      }
    }, 6000);

    // Guard: If we don't get ANY data within 9 seconds, the source is definitely broken
    loadingTimeoutRef.current = setTimeout(() => {
      if (!error && !isPlaying) {
        setError('Source Offline: The channel is not sending any data.');
        setIsLoading(false);
      }
    }, 9000);

    const isHD = channelName ? (channelName.toLowerCase().includes('hd') || channelName.toLowerCase().includes('4k')) : false;

    // "Auto" logic — for VOD, pick medium quality; for live, pick based on bandwidth
    let requestedQuality = quality;
    if (quality === 'Auto') {
      if (isVod) {
        requestedQuality = 'medium'; // medium = balanced 576p-like
      } else if (typeof navigator !== 'undefined' && navigator.connection && navigator.connection.downlink) {
        const mbps = navigator.connection.downlink;
        if (mbps >= 6 && isHD) requestedQuality = '1080p';
        else if (mbps >= 3.5 && isHD) requestedQuality = '720p';
        else if (mbps >= 2.5 && !isHD) requestedQuality = '576p';
        else if (mbps >= 1.8) requestedQuality = '480p';
        else if (mbps >= 1.0) requestedQuality = '360p';
        else requestedQuality = '240p';
      } else {
        requestedQuality = isHD ? '1080p' : '576p';
      }
    }
    setActiveResolution(requestedQuality);

    seekTimeRef.current = 0;
    streamOffsetRef.current = startTime;

    const audioParam = audioIndex !== null ? `&audio=${audioIndex}` : '';
    const proxyUrl = `/api/stream?url=${encodeURIComponent(url)}&quality=${requestedQuality}&isHD=${isHD}&startTime=${startTime}${audioParam}&retry=${retryKey}`;

    if (mpegts.getFeatureList().mseLivePlayback) {
      const player = mpegts.createPlayer({
        type: 'mpegts',
        isLive: isLive,
        url: proxyUrl,
        enableStashBuffer: isVod,       // buffer more for VOD to support seeking
        stashInitialSize: isVod ? 384 : 128,
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

        // If it's a network error, it might be our pre-validation error
        if (errorType === mpegts.ErrorTypes.NETWORK_ERROR) {
          setError(`Stream Unavailable: The server could not connect to this channel.`);
        } else {
          setError(`Playback Error: ${errorDetail || 'The stream payload is invalid or corrupted.'}`);
        }
        setIsLoading(false);
      });

      player.on(mpegts.Events.STATISTICS_INFO, (stats) => {
        // If we get statistics but no actual speed, it might be a silent stall
        if (stats.speed === 0 && !isPlaying && !error) {
           // We could potentially trigger a timeout here if speed remains 0
        }
      });

      player.on(mpegts.Events.METADATA_ARRIVED, () => {
        setIsLoading(false);
        setShowForceReload(false);
        if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
        if (forceReloadTimerRef.current) clearTimeout(forceReloadTimerRef.current);
      });

      return () => {
        // Capture the last video frame BEFORE destroying the player so the screen
        // doesn't go black while the new stream is being initialized.
        try {
          const video = videoRef.current;
          if (video && video.videoWidth > 0 && video.readyState >= 2) {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0);
            setSeekPreview(canvas.toDataURL('image/jpeg', 0.7));
          }
        } catch (e) { /* canvas may taint for cross-origin; ignore */ }

        if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
        if (forceReloadTimerRef.current) clearTimeout(forceReloadTimerRef.current);
        player.destroy();
        playerRef.current = null;
      };
    } else {
      setError('MPEG-TS playback is not supported in this browser.');
      setIsLoading(false);
    }
  }, [url, quality, channelName, retryKey, seekTrigger, audioIndex, isVod, isLive]);

  // Video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
      setError(null);
      setShowForceReload(false);
      setSeekPreview(null);
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
      if (forceReloadTimerRef.current) clearTimeout(forceReloadTimerRef.current);
    };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsLoading(true);
    const onCanPlay = () => {
      setIsLoading(false);
      setSeekPreview(null);
    };
    const onLoadedData = () => setSeekPreview(null);
    const onPlaying = () => setSeekPreview(null);
    const onTimeUpdate = () => {
      if (!seekDragging.current) {
        setCurrentTime(streamOffsetRef.current + video.currentTime);
      }
      if (isVod && video.duration && isFinite(video.duration)) {
        setDuration(video.duration);
      }
      // Safety net: any time the new stream updates the playhead,
      // the old captured frame should already be gone.
      setSeekPreview(prev => prev === null ? prev : null);
    };
    const onVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('loadeddata', onLoadedData);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('volumechange', onVolumeChange);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('loadeddata', onLoadedData);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('volumechange', onVolumeChange);
    };
  }, [isVod]);

  // Fullscreen change listener
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  // Keyboard and Remote accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement.tagName === 'INPUT') return;
      const video = videoRef.current;
      const container = containerRef.current;
      if (!video) return;

      // Show controls on any remote activity
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'enter', ' '].includes(e.key.toLowerCase())) {
        resetControlsTimer();
      }

      switch(e.key.toLowerCase()) {
        case ' ':
        case 'enter':
          if (document.activeElement === video || document.activeElement === container || document.activeElement.tagName === 'BODY') {
            e.preventDefault();
            if (video.paused) video.play().catch(()=>{});
            else video.pause();
          }
          break;
        case 'f':
          e.preventDefault();
          if (!document.fullscreenElement && container) {
            container.requestFullscreen().catch(()=>{});
          } else if (document.fullscreenElement) {
            document.exitFullscreen().catch(()=>{});
          }
          break;
        case 'm':
          e.preventDefault();
          video.muted = !video.muted;
          break;
        case 'arrowleft':
          if (isVod && !seekDragging.current) {
            e.preventDefault();
            video.currentTime = Math.max(0, video.currentTime - 10);
          }
          break;
        case 'arrowright':
          if (isVod && !seekDragging.current) {
            e.preventDefault();
            video.currentTime = Math.min(video.duration || 0, video.currentTime + 10);
          }
          break;
        case 'arrowup':
          if (document.activeElement.tagName !== 'BUTTON' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            video.volume = Math.min(1, video.volume + 0.1);
            video.muted = false;
          }
          break;
        case 'arrowdown':
          if (document.activeElement.tagName !== 'BUTTON' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            video.volume = Math.max(0, video.volume - 0.1);
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resetControlsTimer, isVod]);

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

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

    if (!document.fullscreenElement) {
      try {
        await container.requestFullscreen();
        if (isMobile && screen.orientation && screen.orientation.lock) {
          screen.orientation.lock('landscape').catch(() => {});
        }
      } catch (e) {}
    } else {
      try {
        if (isMobile && screen.orientation && screen.orientation.unlock) {
          screen.orientation.unlock();
        }
        await document.exitFullscreen();
      } catch (e) {}
    }
  };

  const formatTime = (sec) => {
    if (!sec || !isFinite(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // ── VOD progress bar seeking ──
  const handleProgressMouseMove = (e) => {
    if (!isVod || !effectiveDuration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setHoverTime(ratio * effectiveDuration);
  };

  const handleProgressMouseDown = (e) => {
    if (!isVod || !effectiveDuration) return;
    seekDragging.current = true;

    let hasMoved = false;

    const onMove = (ev) => {
      hasMoved = true;
      const rect = progressRef.current.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
      const targetTime = ratio * effectiveDuration;
      pendingSeekRef.current = targetTime;
      setCurrentTime(targetTime);
    };

    const onUp = (ev) => {
      seekDragging.current = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);

      if (hasMoved) {
        const finalTime = pendingSeekRef.current;
        pendingSeekRef.current = 0;
        seekTimeRef.current = finalTime;
        setSeekTrigger(prev => prev + 1);
      } else {
        const clientX = ev.clientX !== undefined ? ev.clientX : ev.changedTouches?.[0]?.clientX;
        if (clientX !== undefined) {
          const rect = progressRef.current.getBoundingClientRect();
          const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          const targetTime = ratio * effectiveDuration;
          seekTimeRef.current = targetTime;
          setSeekTrigger(prev => prev + 1);
          setCurrentTime(targetTime);
        }
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  };

  const getVideoStyle = () => {
    const centered = {
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
    };
    if (aspectRatio === 'fill') return { ...centered, width: '100%', height: '100%', objectFit: 'cover' };
    if (aspectRatio === 'fit') return { ...centered, width: '100%', height: '100%', objectFit: 'fill' };
    if (aspectRatio === 'auto') return { ...centered, width: '100%', height: '100%', objectFit: 'contain' };
    return {
      ...centered,
      maxWidth: '100%',
      maxHeight: '100%',
      aspectRatio: aspectRatio,
      objectFit: 'cover',
    };
  };

  const isHDChannel = channelName ? (channelName.toLowerCase().includes('hd') || channelName.toLowerCase().includes('4k')) : false;

  // Qualities: live TV gets resolution tiers, VOD gets Low/Medium/High
  const availableQualities = isLive
    ? (isHDChannel
        ? ['Auto', '1080p', '720p', '480p', '360p', '240p', '144p']
        : ['Auto', '576p', '480p', '360p', '240p', '144p'])
    : ['Auto', 'Low (360p)', 'Medium', 'High (Original)'];

  // Currently active audio track: explicit selection, else the ffmpeg default
  const activeAudio = audioTracks.find(t =>
    audioIndex !== null ? t.index === audioIndex : t.isDefault
  ) || audioTracks[0];
  const activeAudioLabel = activeAudio ? getAudioLabel(activeAudio) : '';

  const handleAudioSelect = (idx) => {
    setAudioState(s => ({ ...s, audioIndex: idx, showAudioMenu: false }));
  };

  // ── Quality label display ──
  const qualityDisplayLabel = (() => {
    if (quality === 'Auto') return isVod ? `Auto (Medium)` : `Auto (${activeResolution})`;
    if (quality === 'low' || quality === 'Low (360p)') return 'Low (360p)';
    if (quality === 'medium' || quality === 'Medium') return 'Medium';
    if (quality === 'high' || quality === 'High (Original)') return 'High (Original)';
    return quality;
  })();

  // Handle quality selection — map VOD labels to API param values
  const handleQualitySelect = (q) => {
    if (q === 'Low (360p)') setQuality('low');
    else if (q === 'Medium') setQuality('medium');
    else if (q === 'High (Original)') setQuality('high');
    else setQuality(q);
    setShowQualityMenu(false);
  };

  // Progress bar fill fraction
  const effectiveDuration = isVod && mediaDuration > 0 ? mediaDuration : duration;
  const progressFraction = isVod && effectiveDuration > 0 ? (currentTime / effectiveDuration) * 100 : 100;

  return (
    <div
      ref={containerRef}
      tabIndex="0"
      onMouseMove={resetControlsTimer}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onClick={(e) => {
        if (e.target === videoRef.current || e.target.dataset.clickarea === 'true') {
          const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
          if (isTouch) {
            if (!showControls) {
              setShowControls(true);
              resetControlsTimer();
            } else {
              setShowControls(false);
            }
          } else {
            togglePlay();
          }
        }
      }}
      onFocus={resetControlsTimer}
      style={{
        position: 'relative',
        width: '100%',
        height: isFullscreen ? '100vh' : undefined,
        background: '#000',
        overflow: 'hidden',
        boxShadow: isFullscreen ? 'none' : '0 20px 60px rgba(0,0,0,0.3)',
        cursor: showControls ? 'default' : 'none',
        outline: 'none',
      }}
      className={`${isFullscreen ? 'rounded-none' : 'rounded-[16px] sm:rounded-[20px]'} ${!isFullscreen ? 'aspect-[4/3] sm:aspect-video' : ''} player-focus-target`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={getVideoStyle()}
      />

      {/* Last-frame preview so screen doesn't go black during seek/quality reload */}
      {seekPreview && (
        <img
          src={seekPreview}
          alt=""
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%', height: '100%',
            objectFit: 'contain',
            zIndex: 2, pointerEvents: 'none',
          }}
        />
      )}

      <div data-clickarea="true" style={{
        position: 'absolute', inset: 0, zIndex: 1,
        display: showControls || !isPlaying ? 'block' : 'block',
      }} />

      {/* Loading Spinner & Force Reload */}
      {isLoading && !error && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.4)', gap: '20px'
        }}>
          <div style={{
            width: '48px', height: '48px',
            border: '3px solid rgba(255,255,255,0.2)',
            borderTopColor: 'var(--accent-primary)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />

          {showForceReload && (
            <button
              onClick={(e) => { e.stopPropagation(); handleReload(); }}
              style={{
                padding: '10px 20px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.1)', color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)', fontSize: '12px', fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s ease',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              Stream taking too long? Click to Reload
            </button>
          )}
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
          textAlign: 'center', padding: '20px',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5" style={{ marginBottom: '16px' }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={{ color: '#ef4444', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{error}</p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '24px', maxWidth: '300px' }}>
            The stream may be temporarily unavailable or your connection is unstable.
          </p>
          <button
            onClick={(e) => { e.stopPropagation(); handleReload(); }}
            style={{
              padding: '12px 24px', borderRadius: '12px',
              background: 'var(--accent-primary, #f97316)', color: '#fff',
              border: 'none', fontSize: '14px', fontWeight: 700,
              cursor: 'pointer', transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Reload Stream
          </button>
        </div>
      )}

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

      {/* Top bar: Live badge (live only) + title */}
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
          {isLive && (
            <span style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'rgba(239, 68, 68, 0.9)', padding: '3px 10px', borderRadius: '6px',
              fontSize: '11px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} className="live-pulse" />
              Live
            </span>
          )}
          {isVod && (
            <span style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'rgba(249,115,22,0.9)', padding: '3px 10px', borderRadius: '6px',
              fontSize: '11px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              {type === 'movie' ? 'Movie' : 'Series'}
            </span>
          )}
          <span style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>{channelName || 'DD FreeDish'}</span>
        </div>
      </div>

      {/* ── Bottom area: unified gradient wrapping seek bar + controls (YouTube style) ── */}
        <div
          className="player-controls-gradient"
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20,
            paddingTop: '14px',
            opacity: showControls ? 1 : 0,
            transform: showControls ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.3s ease',
            pointerEvents: showControls ? 'auto' : 'none',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Seek bar at top of gradient area (always visible while container is shown) */}
          <div
            ref={progressRef}
            className="progress-bar-container"
            style={{
              padding: '0 20px 8px',
              cursor: isVod ? 'pointer' : 'default',
            }}
            onMouseMove={(e) => { handleProgressMouseMove(e); resetControlsTimer(); }}
            onMouseLeave={() => setHoverTime(null)}
            onMouseDown={handleProgressMouseDown}
          >
            {/* Hover tooltip */}
            {isVod && hoverTime !== null && (
              <div style={{
                position: 'absolute', bottom: '100%', left: `${(hoverTime / effectiveDuration) * 100}%`,
                transform: 'translateX(-50%)',
                background: 'rgba(0,0,0,0.8)', color: '#fff', fontSize: '11px', fontWeight: 600,
                padding: '2px 6px', borderRadius: '4px', marginBottom: '6px', pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}>
                {formatTime(hoverTime)}
              </div>
            )}
            <div className="progress-bar-track">
              {isVod && effectiveDuration > 0 && (
                <div className="progress-bar-buffered" style={{
                  position: 'absolute', top: 0, left: 0, height: '100%',
                  width: '100%', background: 'rgba(255,255,255,0.15)', borderRadius: 'inherit',
                }} />
              )}
              <div
                className="progress-bar-fill"
                style={{ width: `${progressFraction}%` }}
              />
              {isVod && effectiveDuration > 0 && (
                <div
                  className="progress-bar-thumb"
                  style={{ left: `${progressFraction}%` }}
                />
              )}
            </div>
          </div>

          {/* Controls below the seek bar */}
          <div style={{
            padding: '6px 20px 16px',
          }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
              className="volume-slider hidden sm:block"
              min="0" max="1" step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              style={{ marginLeft: '-4px' }}
            />

            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 500, marginLeft: '8px', fontVariantNumeric: 'tabular-nums' }}>
              {isVod ? `${formatTime(currentTime)} / ${formatTime(effectiveDuration)}` : formatTime(currentTime)}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {/* Audio / Language selector (VOD with multiple audio tracks) */}
            {audioTracks.length > 1 && (
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => { setAudioState(s => ({ ...s, showAudioMenu: !s.showAudioMenu })); setShowQualityMenu(false); setShowAspectMenu(false); }}
                  title="Audio Language"
                  style={{
                    height: '40px', padding: '0 10px', borderRadius: '10px',
                    border: 'none', background: 'transparent', color: '#fff',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--player-control-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 9h8" /><path d="M8 13h5" />
                  </svg>
                  <span className={isFullscreen ? 'inline' : 'hidden sm:inline'} style={{ fontSize: '13px', fontWeight: 600 }}>
                    {activeAudioLabel}
                  </span>
                </button>

                {showAudioMenu && (
                  <div
                    className="animate-slide-down"
                    style={{
                      position: 'absolute', bottom: '48px', right: 0,
                      background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)',
                      borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
                      padding: '6px', minWidth: '150px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                      maxHeight: '280px', overflowY: 'auto',
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Audio Language
                    </div>
                    {audioTracks.map(t => {
                      const isActive = t.index === (audioIndex !== null ? audioIndex : (activeAudio?.index));
                      return (
                        <button
                          key={t.index}
                          onClick={() => handleAudioSelect(t.index)}
                          style={{
                            display: 'block', width: '100%', padding: '8px 10px', textAlign: 'left',
                            background: isActive ? 'var(--accent-primary)' : 'transparent',
                            color: '#fff', fontSize: '13px', fontWeight: 500, border: 'none', borderRadius: '8px',
                            cursor: 'pointer', transition: 'background 0.15s ease',
                          }}
                          onMouseEnter={e => { if (!isActive) e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                          onMouseLeave={e => { if (!isActive) e.target.style.background = 'transparent'; }}
                        >
                          {getAudioLabel(t)}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            <div style={{ position: 'relative' }}>
              <button
                onClick={() => { setShowQualityMenu(!showQualityMenu); setShowAspectMenu(false); setAudioState(s => ({ ...s, showAudioMenu: false })); }}
                title="Quality Settings"
                style={{
                  height: '40px', padding: '0 10px', borderRadius: '10px',
                  border: 'none', background: 'transparent', color: '#fff',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--player-control-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                {activeResolution && (
                  <span className={isFullscreen ? 'inline' : 'hidden sm:inline'} style={{ fontSize: '13px', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
                    {qualityDisplayLabel}
                  </span>
                )}
              </button>

              {showQualityMenu && (
                <div
                  className="animate-slide-down"
                  style={{
                    position: 'absolute', bottom: '48px', right: 0,
                    background: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)',
                    borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
                    padding: '6px', minWidth: '140px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <div style={{ padding: '6px 10px', fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Quality
                  </div>
                  {availableQualities.map(q => {
                    const isActive = (() => {
                      if (q === 'Low (360p)') return quality === 'low';
                      if (q === 'Medium') return quality === 'medium';
                      if (q === 'High (Original)') return quality === 'high';
                      return quality === q;
                    })();
                    return (
                      <button
                        key={q}
                        onClick={() => handleQualitySelect(q)}
                        style={{
                          display: 'block', width: '100%', padding: '8px 10px', textAlign: 'left',
                          background: isActive ? 'var(--accent-primary)' : 'transparent',
                          color: '#fff', fontSize: '13px', fontWeight: 500, border: 'none', borderRadius: '8px',
                          cursor: 'pointer', transition: 'background 0.15s ease',
                        }}
                        onMouseEnter={e => { if (!isActive) e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                        onMouseLeave={e => { if (!isActive) e.target.style.background = 'transparent'; }}
                      >
                        {q}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div style={{ position: 'relative' }}>
              <PlayerButton
                onClick={() => { setShowAspectMenu(!showAspectMenu); setShowQualityMenu(false); setAudioState(s => ({ ...s, showAudioMenu: false })); }}
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
      </div>

      {/* Center play button (when paused) */}
      {!isPlaying && !isLoading && !error && url && (
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 15,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div
            onClick={(e) => { e.stopPropagation(); togglePlay(); }}
            style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'rgba(249, 115, 22, 0.9)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)',
              animation: 'fadeInUp 0.2s ease-out',
              pointerEvents: 'auto', cursor: 'pointer'
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
