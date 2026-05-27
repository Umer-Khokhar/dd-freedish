"use client";
import { useState, useEffect, use, useRef, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useTheme } from "../../../components/ThemeProvider";

const CustomVideoPlayer = dynamic(() => import("../../../components/VideoPlayer"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-black flex items-center justify-center dark:bg-black">
      <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const formatCategory = (cat) => {
  if (!cat || cat === "All") return "All";
  return cat.replace(/^(IN|PK)[^\w]*/i, "").replace(/[^\w]*LIVE$/i, "").trim();
};

const getProxiedLogo = (url) => {
  if (!url) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("https://")) return url;
  return `/api/image?url=${encodeURIComponent(url)}`;
};

export default function WatchPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const topRef = useRef(null);
  const backButtonRef = useRef(null);
  
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState(null);
  const [viewerCount] = useState(() => Math.floor(Math.random() * 5000) + 1000);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    fetch("/channels.js")
      .then((res) => res.text())
      .then((text) => {
        try {
          const getChannels = new Function(`${text}\nreturn channels;`);
          const parsed = getChannels();
          if (Array.isArray(parsed)) {
            setChannels(parsed);
            const found = parsed.find((c) => c.id === id);
            if (found) {
              setChannel(found);
            }
          }
        } catch (err) {
          console.error("Error parsing channels:", err);
        }
      })
      .catch(console.error);
  }, [id]);

  // Handle Remote / Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Common TV Remote "Back" keys: Back, Escape, Backspace (sometimes)
      if (e.key === "Backspace" || e.key === "Escape" || e.key === "BrowserBack") {
        e.preventDefault();
        router.push("/");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  // Reliable scroll to top when channel changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      // Focus back button for TV accessibility on first load
      if (backButtonRef.current) backButtonRef.current.focus();
    }, 10);
    return () => clearTimeout(timer);
  }, [id]);

  // Preserved related channels (Same category, unfiltered)
  const relatedChannels = useMemo(() => {
    if (!channel || channels.length === 0) return [];
    return channels.filter((c) => c.category === channel.category && c.id !== id);
  }, [channels, channel, id]);

  return (
    <div ref={topRef} className="min-h-screen bg-slate-50 dark:bg-[#0a0a0f] text-slate-900 dark:text-white selection:bg-orange-500/30">
      {/* Cinematic Ambient Background (dark mode only) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-40">
        <div className="absolute top-0 left-1/4 w-1/2 h-96 bg-orange-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-96 bg-orange-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <main className="relative z-10 max-w-[1400px] mx-auto px-6 py-8 pt-28">
        {/* Amazing Back Button Section */}
        <div className="mb-8 flex items-center justify-between animate-fade-in-up">
          <Link 
            href="/" 
            ref={backButtonRef}
            className="group flex items-center gap-4 px-5 py-2.5 rounded-2xl transition-all duration-300 transform hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/5 hover:border-orange-400 dark:hover:border-orange-500/30 shadow-sm"
          >
            <div className="bg-orange-100 dark:bg-orange-500/20 p-2 rounded-xl backdrop-blur-sm group-hover:bg-orange-500 text-orange-500 group-hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-orange-400 transition-colors">Return to</span>
              <span className="text-sm font-black tracking-wide text-slate-900 dark:text-white">Browse</span>
            </div>
          </Link>

          {/* Live status indicator */}
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
             <span className="text-[11px] uppercase tracking-widest font-black text-red-500">Live Broadcast</span>
          </div>
        </div>

        {/* Large Player Section */}
        <div className="mb-14 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="rounded-3xl overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white dark:bg-[#12121a]/80 backdrop-blur-xl border border-slate-200 dark:border-white/5 relative">
            {/* Top Glow Edge (dark only) */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 dark:opacity-50" />

            {/* Player */}
            <div className="w-full aspect-video bg-black relative z-10 shadow-2xl">
              <CustomVideoPlayer url={channel?.url} channelName={channel?.name} />
            </div>

            {/* Channel Info Below Player */}
            {channel && (
              <div className="p-6 md:p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 dark:from-orange-500/5 to-transparent pointer-events-none" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
                  
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md p-4">
                    {channel.logo && !logoError ? (
                      <img src={getProxiedLogo(channel.logo)} alt={channel.name} onError={() => setLogoError(true)} className="w-full h-full object-contain drop-shadow-md dark:drop-shadow-xl" />
                    ) : (
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">{channel.name.charAt(0)}</span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-orange-100 dark:bg-orange-500/20 border border-orange-200 dark:border-orange-500/30 text-orange-600 dark:text-orange-400">
                        {formatCategory(channel.category)}
                      </span>
                      <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300">
                        1080p FHD
                      </span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-2 truncate text-slate-900 dark:text-white">{channel.name}</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Currently broadcasting live on Ultra DISHTV.</p>
                  </div>

                  <div className="text-right shrink-0 hidden md:block">
                    <div className="text-4xl font-black tabular-nums tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-800 dark:from-white to-slate-400 dark:to-slate-500">{viewerCount.toLocaleString()}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500 mt-1">Watching Now</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Channels List (Always Related Channels) */}
        {relatedChannels.length > 0 && (
          <div className="pb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl md:text-3xl font-black mb-8 flex items-center gap-4 text-slate-900 dark:text-white tracking-tight">
              <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
              More from <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">{formatCategory(channel?.category)}</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
              {relatedChannels.map((c, idx) => (
                <Link
                  key={c.id}
                  href={`/watch/${c.id}`}
                  scroll={false}
                  className="group block rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/5 shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] hover:border-orange-400 dark:hover:border-orange-500/50 transition-all duration-500 overflow-hidden relative"
                  style={{ animationDelay: `${Math.min(idx * 30, 500)}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 dark:from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                  
                  <div className="aspect-video flex items-center justify-center bg-slate-50 dark:bg-[#0a0a0f]/80 relative overflow-hidden z-10 border-b border-slate-100 dark:border-white/5">
                    {c.logo ? (
                      <img src={getProxiedLogo(c.logo)} alt={c.name} className="w-full h-full object-contain p-4 drop-shadow-md dark:drop-shadow-xl filter group-hover:scale-110 transition-all duration-700" />
                    ) : (
                      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600 group-hover:scale-110 transition-transform duration-500">{c.name.charAt(0)}</div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.6)] transform scale-50 group-hover:scale-100 transition-transform duration-500">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 text-center relative z-10">
                    <h3 className="font-black text-sm text-slate-900 dark:text-white truncate group-hover:text-orange-500 transition-colors mb-1">{c.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{formatCategory(c.category)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
