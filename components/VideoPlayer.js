'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import mpegts from 'mpegts.js';

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
  const [quality, setQuality] = useState('Auto');
  const [activeResolution, setActiveResolution] = useState('');
  const [settingsView, setSettingsView] = useState('closed'); // closed | main | quality | aspect
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

  if (audioState.url !== url) {
    setAudioState({ url, audioTracks: [], audioIndex: null, showAudioMenu: false });
  }

  useEffect(() => {
    if (!isVod || !url) return;
    let cancelled = false;
    const probeUrl = `/api/stream?url=${encodeURIComponent(url)}&probe=1`;
    fetch(probeUrl)
      .then(r => r.json())
      .then(data => {
        if (cancelled || audioState.url !== url) return;
        if (data.duration > 0) setMediaDuration(data.duration);
        if (Array.isArray(data.audioTracks) && data.audioTracks.length > 1) {
          setAudioState(s => ({ ...s, url, audioTracks: data.audioTracks }));
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [url, isVod, audioState.url]);

  useEffect(() => {
    if (!url || !videoRef.current) return;
    setError(null);
    setIsLoading(true);
    setShowForceReload(false);

    const seekPos = seekTimeRef.current;
    const isSeek = seekPos > 0;
    const startTime = isSeek ? seekPos : Math.floor(currentTime);
    if (!isSeek && currentTime > 0) setCurrentTime(currentTime);
    else if (!isSeek) { setDuration(0); setCurrentTime(0); }
    else setCurrentTime(seekPos);

    if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
    if (forceReloadTimerRef.current) clearTimeout(forceReloadTimerRef.current);

    forceReloadTimerRef.current = setTimeout(() => {
      if (!isPlaying && !error) setShowForceReload(true);
    }, 6000);

    loadingTimeoutRef.current = setTimeout(() => {
      if (!error && !isPlaying) {
        setError('Source Offline: The channel is not sending any data.');
        setIsLoading(false);
      }
    }, 9000);

    const isHD = channelName ? (channelName.toLowerCase().includes('hd') || channelName.toLowerCase().includes('4k')) : false;

    let requestedQuality = quality;
    if (quality === 'Auto') {
      if (isVod) {
        requestedQuality = 'medium';
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
        enableStashBuffer: isVod,
        stashInitialSize: isVod ? 384 : 128,
      });

      player.attachMediaElement(videoRef.current);
      player.load();
      const playPromise = player.play();
      if (playPromise !== undefined) playPromise.catch(e => console.warn('Autoplay prevented', e));
      playerRef.current = player;

      player.on(mpegts.Events.ERROR, (errorType, errorDetail) => {
        if (errorType === mpegts.ErrorTypes.NETWORK_ERROR) {
          setError('Stream Unavailable: The server could not connect to this channel.');
        } else {
          setError(`Playback Error: ${errorDetail || 'The stream payload is invalid or corrupted.'}`);
        }
        setIsLoading(false);
      });

      player.on(mpegts.Events.METADATA_ARRIVED, () => {
        setIsLoading(false);
        setShowForceReload(false);
        if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
        if (forceReloadTimerRef.current) clearTimeout(forceReloadTimerRef.current);
      });

      return () => {
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
        } catch (e) {}
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
    const onCanPlay = () => { setIsLoading(false); setSeekPreview(null); };
    const onLoadedData = () => setSeekPreview(null);
    const onPlaying = () => setSeekPreview(null);
    const onTimeUpdate = () => {
      if (!seekDragging.current) setCurrentTime(streamOffsetRef.current + video.currentTime);
      if (isVod && video.duration && isFinite(video.duration)) setDuration(video.duration);
      setSeekPreview(prev => prev === null ? prev : null);
    };
    const onVolumeChange = () => { setVolume(video.volume); setIsMuted(video.muted); };
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

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement.tagName === 'INPUT') return;
      const video = videoRef.current;
      const container = containerRef.current;
      if (!video) return;
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
          if (!document.fullscreenElement && container) container.requestFullscreen().catch(()=>{});
          else if (document.fullscreenElement) document.exitFullscreen().catch(()=>{});
          break;
        case 'm':
          e.preventDefault();
          video.muted = !video.muted;
          break;
        case 'arrowleft':
          if (isVod && !seekDragging.current) { e.preventDefault(); video.currentTime = Math.max(0, video.currentTime - 10); }
          break;
        case 'arrowright':
          if (isVod && !seekDragging.current) { e.preventDefault(); video.currentTime = Math.min(video.duration || 0, video.currentTime + 10); }
          break;
        case 'arrowup':
          if (document.activeElement.tagName !== 'BUTTON' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault(); video.volume = Math.min(1, video.volume + 0.1); video.muted = false;
          }
          break;
        case 'arrowdown':
          if (document.activeElement.tagName !== 'BUTTON' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault(); video.volume = Math.max(0, video.volume - 0.1);
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
        if (isMobile && screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(() => {});
      } catch (e) {}
    } else {
      try {
        if (isMobile && screen.orientation && screen.orientation.unlock) screen.orientation.unlock();
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
        seekTimeRef.current = pendingSeekRef.current;
        pendingSeekRef.current = 0;
        setSeekTrigger(prev => prev + 1);
      } else {
        const clientX = ev.clientX !== undefined ? ev.clientX : ev.changedTouches?.[0]?.clientX;
        if (clientX !== undefined) {
          const rect = progressRef.current.getBoundingClientRect();
          const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          seekTimeRef.current = ratio * effectiveDuration;
          setSeekTrigger(prev => prev + 1);
          setCurrentTime(seekTimeRef.current);
        }
      }
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  };

  const getVideoStyle = () => {
    const centered = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
    if (aspectRatio === 'fill') return { ...centered, width: '100%', height: '100%', objectFit: 'cover' };
    if (aspectRatio === 'fit') return { ...centered, width: '100%', height: '100%', objectFit: 'fill' };
    return { ...centered, width: '100%', height: '100%', objectFit: 'contain' };
  };

  const isHDChannel = channelName ? (channelName.toLowerCase().includes('hd') || channelName.toLowerCase().includes('4k')) : false;

  const availableQualities = isLive
    ? (isHDChannel
        ? ['Auto', '1080p', '720p', '480p', '360p', '240p', '144p']
        : ['Auto', '576p', '480p', '360p', '240p', '144p'])
    : ['Auto', 'Low (360p)', 'Medium', 'High (Original)'];

  const activeAudio = audioTracks.find(t => audioIndex !== null ? t.index === audioIndex : t.isDefault) || audioTracks[0];
  const activeAudioLabel = activeAudio ? getAudioLabel(activeAudio) : '';

  const handleAudioSelect = (idx) => {
    setAudioState(s => ({ ...s, audioIndex: idx, showAudioMenu: false }));
  };

  const qualityDisplayLabel = (() => {
    if (quality === 'Auto') return isVod ? 'Auto (Medium)' : `Auto (${activeResolution})`;
    if (quality === 'low' || quality === 'Low (360p)') return 'Low';
    if (quality === 'medium' || quality === 'Medium') return 'Medium';
    if (quality === 'high' || quality === 'High (Original)') return 'High';
    return quality;
  })();

  const handleQualitySelect = (q) => {
    if (q === 'Low (360p)') setQuality('low');
    else if (q === 'Medium') setQuality('medium');
    else if (q === 'High (Original)') setQuality('high');
    else setQuality(q);
    setShowQualityMenu(false);
  };

  const effectiveDuration = isVod && mediaDuration > 0 ? mediaDuration : duration;
  const progressFraction = isVod && effectiveDuration > 0 ? (currentTime / effectiveDuration) * 100 : 100;

  const closeAllMenus = () => {
    setSettingsView('closed');
    setAudioState(s => ({ ...s, showAudioMenu: false }));
  };

  return (
    <div
      ref={containerRef}
      tabIndex="0"
      onMouseMove={resetControlsTimer}
      onMouseLeave={() => { if (isPlaying) setShowControls(false); closeAllMenus(); }}
      onClick={(e) => {
        if (e.target === videoRef.current || e.target.dataset.clickarea === 'true') {
          const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
          if (isTouch) {
            if (!showControls) { setShowControls(true); resetControlsTimer(); }
            else setShowControls(false);
          } else {
            togglePlay();
          }
        }
      }}
      onFocus={resetControlsTimer}
      style={{
        position: 'relative', width: '100%',
        height: isFullscreen ? '100vh' : '95vh',
        background: '#000', overflow: 'hidden',
        cursor: showControls ? 'default' : 'none', outline: 'none',
      }}
      className={`${isFullscreen ? 'rounded-none' : ''} player-focus-target`}
    >
      <video ref={videoRef} autoPlay muted playsInline style={getVideoStyle()} />

      {seekPreview && (
        <img src={seekPreview} alt="" style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)', width: '100%', height: '100%',
          objectFit: 'contain', zIndex: 2, pointerEvents: 'none',
        }} />
      )}

      <div data-clickarea="true" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

      {/* Loading */}
      {isLoading && !error && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.5)', gap: '16px'
        }}>
          <div style={{
            width: '40px', height: '40px',
            border: '3px solid rgba(255,255,255,0.15)',
            borderTopColor: '#e50914',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }} />
          {showForceReload && (
            <button
              onClick={(e) => { e.stopPropagation(); handleReload(); }}
              style={{
                padding: '8px 16px', borderRadius: '4px',
                background: 'rgba(255,255,255,0.1)', color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)', fontSize: '12px', fontWeight: 600,
                cursor: 'pointer', backdropFilter: 'blur(8px)',
              }}
            >
              Stream taking too long? Click to Reload
            </button>
          )}
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.9)', textAlign: 'center', padding: '20px',
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e50914" strokeWidth="1.5" style={{ marginBottom: '12px' }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={{ color: '#fff', fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>{error}</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '20px', maxWidth: '280px' }}>
            The stream may be temporarily unavailable or your connection is unstable.
          </p>
          <button
            onClick={(e) => { e.stopPropagation(); handleReload(); }}
            style={{
              padding: '10px 24px', borderRadius: '4px',
              background: '#e50914', color: '#fff',
              border: 'none', fontSize: '14px', fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Retry
          </button>
        </div>
      )}

      {/* No URL */}
      {!url && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: '#000',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', fontWeight: 500, marginTop: '12px' }}>
            Select a channel to start watching
          </p>
        </div>
      )}

      {/* Top bar */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
          padding: '12px 16px',
          opacity: showControls ? 1 : 0,
          transform: showControls ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          pointerEvents: showControls ? 'auto' : 'none',
        }}
        className="player-top-gradient"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isLive && (
            <span style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              background: '#e50914', padding: '2px 8px', borderRadius: '2px',
              fontSize: '10px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} className="live-pulse" />
              LIVE
            </span>
          )}
          {isVod && (
            <span style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              background: 'rgba(255,255,255,0.15)', padding: '2px 8px', borderRadius: '2px',
              fontSize: '10px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              {type === 'movie' ? 'MOVIE' : 'SERIES'}
            </span>
          )}
          <span style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>{channelName || 'Streamza'}</span>
        </div>
      </div>

      {/* Center play button */}
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
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'auto', cursor: 'pointer',
              transition: 'transform 0.15s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#000" style={{ marginLeft: '3px' }}>
              <polygon points="6 3 20 12 6 21" />
            </svg>
          </div>
        </div>
      )}

      {/* Bottom controls */}
      <div
        className="player-controls-gradient"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20,
          opacity: showControls ? 1 : 0,
          transform: showControls ? 'translateY(0)' : 'translateY(100%)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          pointerEvents: showControls ? 'auto' : 'none',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Progress bar */}
        <div
          ref={progressRef}
          className="progress-bar-container"
          onMouseMove={(e) => { handleProgressMouseMove(e); resetControlsTimer(); }}
          onMouseLeave={() => setHoverTime(null)}
          onMouseDown={handleProgressMouseDown}
        >
          {isVod && hoverTime !== null && (
            <div style={{
              position: 'absolute', bottom: '100%', left: `${(hoverTime / effectiveDuration) * 100}%`,
              transform: 'translateX(-50%)', background: '#000', color: '#fff',
              fontSize: '11px', fontWeight: 600, padding: '3px 6px', borderRadius: '2px',
              marginBottom: '6px', pointerEvents: 'none', whiteSpace: 'nowrap',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              {formatTime(hoverTime)}
            </div>
          )}
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progressFraction}%` }} />
          </div>
        </div>

        {/* Controls row */}
        <div className="nf-player-controls">
          <div className="nf-controls-left">
            {/* Play / Pause */}
            <button className="nf-btn" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Forward 10s */}
            {isVod && (
              <button className="nf-btn" onClick={() => { if (videoRef.current) videoRef.current.currentTime = Math.min(videoRef.current.duration || 0, videoRef.current.currentTime + 10); }} title="Forward 10s">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 4v6h-6" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
              </button>
            )}

            {/* Volume */}
            <div className="nf-volume-group">
              <button className="nf-btn" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
                {isMuted || volume === 0 ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>
              <div className="nf-volume-track">
                <div className="nf-volume-fill" style={{ width: `${isMuted ? 0 : volume * 100}%` }} />
                <input
                  type="range"
                  className="nf-volume-input"
                  min="0" max="1" step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>

            {/* Time */}
            <span className="nf-time">
              {isVod ? `${formatTime(currentTime)} / ${formatTime(effectiveDuration)}` : formatTime(currentTime)}
            </span>
          </div>

          <div className="nf-controls-right">
            {/* Audio */}
            {audioTracks.length > 1 && (
              <div style={{ position: 'relative' }}>
                <button
                  className="nf-btn"
                  onClick={() => { setAudioState(s => ({ ...s, showAudioMenu: !s.showAudioMenu })); setSettingsView('closed'); }}
                  title="Audio"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </button>
                {showAudioMenu && (
                  <div className="nf-menu-panel" onClick={e => e.stopPropagation()}>
                    <div className="nf-menu-label">Audio</div>
                    {audioTracks.map(t => {
                      const isActive = t.index === (audioIndex !== null ? audioIndex : (activeAudio?.index));
                      return (
                        <button key={t.index} onClick={() => handleAudioSelect(t.index)} className={`nf-menu-item ${isActive ? 'active' : ''}`}>
                          {getAudioLabel(t)}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Settings */}
            <div style={{ position: 'relative' }}>
              <button
                className="nf-btn"
                onClick={() => { setSettingsView(settingsView === 'closed' ? 'main' : 'closed'); setAudioState(s => ({ ...s, showAudioMenu: false })); }}
                title="Settings"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>

              {settingsView !== 'closed' && (
                <div className="nf-menu-panel" onClick={e => e.stopPropagation()}>
                  {settingsView === 'main' && (
                    <>
                      <div className="nf-menu-label">Settings</div>
                      <button className="nf-menu-item nf-menu-item-row" onClick={() => setSettingsView('quality')}>
                        <span>Quality</span>
                        <span className="nf-menu-item-value">{qualityDisplayLabel}</span>
                      </button>
                      <button className="nf-menu-item nf-menu-item-row" onClick={() => setSettingsView('aspect')}>
                        <span>Aspect Ratio</span>
                        <span className="nf-menu-item-value">{aspectRatios.find(a => a.value === aspectRatio)?.label || 'Default'}</span>
                      </button>
                    </>
                  )}

                  {settingsView === 'quality' && (
                    <>
                      <div className="nf-menu-header">
                        <button className="nf-menu-back" onClick={() => setSettingsView('main')}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <span className="nf-menu-title">Quality</span>
                      </div>
                      {availableQualities.map(q => {
                        const isActive = (() => {
                          if (q === 'Low (360p)') return quality === 'low';
                          if (q === 'Medium') return quality === 'medium';
                          if (q === 'High (Original)') return quality === 'high';
                          return quality === q;
                        })();
                        return (
                          <button key={q} onClick={() => handleQualitySelect(q)} className={`nf-menu-item ${isActive ? 'active' : ''}`}>
                            {isActive && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>}
                            {q}
                          </button>
                        );
                      })}
                    </>
                  )}

                  {settingsView === 'aspect' && (
                    <>
                      <div className="nf-menu-header">
                        <button className="nf-menu-back" onClick={() => setSettingsView('main')}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <span className="nf-menu-title">Aspect Ratio</span>
                      </div>
                      {aspectRatios.map(ar => (
                        <button key={ar.value} onClick={() => { setAspectRatio(ar.value); setSettingsView('main'); }} className={`nf-menu-item ${aspectRatio === ar.value ? 'active' : ''}`}>
                          {aspectRatio === ar.value && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8, flexShrink: 0 }}><path d="M20 6L9 17l-5-5" /></svg>}
                          {ar.label}
                        </button>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Fullscreen */}
            <button className="nf-btn" onClick={toggleFullscreen} title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
              {isFullscreen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
