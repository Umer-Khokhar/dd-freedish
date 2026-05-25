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
    <div ref={topRef} className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gradient-to-b from-black via-slate-950 to-black text-white' : 'bg-gradient-to-b from-slate-100 via-white to-slate-100 text-slate-900'}`}>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Amazing Back Button Section */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/" 
            ref={backButtonRef}
            className={`
              group flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/50
              ${isDark 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_8px_25px_rgba(249,115,22,0.4)]' 
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_8px_20px_rgba(249,115,22,0.3)]'}
            `}
          >
            <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] uppercase tracking-widest font-black opacity-80">Return to</span>
              <span className="text-lg font-bold">Channels</span>
            </div>
          </Link>

          {/* Hidden status indicator for TV focus balance */}
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className={`text-[10px] uppercase tracking-tighter font-bold ${isDark ? 'text-white/40' : 'text-slate-400'}`}>Live</span>
          </div>
        </div>

        {/* Large Player Section */}
        <div className="mb-10">
          <div className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${isDark ? 'bg-black border border-white/10' : 'bg-white border border-slate-300'}`}>
            {/* Player */}
            <div className="w-full aspect-video bg-black">
              <CustomVideoPlayer url={channel?.url} channelName={channel?.name} />
            </div>

            {/* Channel Info Below Player */}
            {channel && (
              <div className={`p-8 border-t ${isDark ? 'bg-gradient-to-r from-black via-slate-950 to-black border-white/10' : 'bg-gradient-to-r from-slate-50 via-white to-slate-50 border-slate-300'}`}>
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden shadow-lg ${isDark ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30' : 'bg-orange-100 border border-orange-300'}`}>
                    {channel.logo && !logoError ? (
                      <img src={getProxiedLogo(channel.logo)} alt={channel.name} onError={() => setLogoError(true)} className="w-full h-full object-contain p-2" />
                    ) : (
                      <span className="text-4xl font-black text-orange-500">{channel.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h1 className={`text-2xl sm:text-4xl font-black tracking-tight mb-3 truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>{channel.name}</h1>
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider ${isDark ? 'bg-orange-500/20 border border-orange-500/40 text-orange-300' : 'bg-orange-100 border border-orange-300 text-orange-700'}`}>
                        {formatCategory(channel.category)}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white/60' : 'text-slate-600'}`}>1080p Ultra HD</span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-right shrink-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <div className="text-2xl sm:text-4xl font-black tabular-nums">{viewerCount.toLocaleString()}</div>
                    <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-slate-500'}`}>Watching Now</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Channels List (Always Related Channels) */}
        {relatedChannels.length > 0 && (
          <div className="pb-12">
            <h2 className={`text-2xl font-black mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <div className="w-1.5 h-8 bg-orange-500 rounded-full" />
              More from {formatCategory(channel?.category)}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {relatedChannels.map((c) => (
                <Link
                  key={c.id}
                  href={`/watch/${c.id}`}
                  scroll={false}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500 ${isDark ? 'bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20' : 'bg-slate-100 border border-slate-300 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-300/30'}`}
                >
                  <div className={`aspect-video flex items-center justify-center relative overflow-hidden transition-colors ${isDark ? 'bg-black' : 'bg-white'}`}>
                    {c.logo ? (
                      <img src={getProxiedLogo(c.logo)} alt={c.name} className="w-full h-full object-contain p-3 filter group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className={`text-4xl font-black transition-colors ${isDark ? 'text-orange-500/40 group-hover:text-orange-500' : 'text-orange-300 group-hover:text-orange-600'}`}>{c.name.charAt(0)}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h3 className={`font-bold text-sm truncate transition-colors ${isDark ? 'group-hover:text-orange-400 text-white' : 'group-hover:text-orange-700 text-slate-900'}`}>{c.name}</h3>
                    <p className={`text-[10px] font-bold uppercase tracking-wider mt-1 ${isDark ? 'text-white/40' : 'text-slate-500'}`}>{formatCategory(c.category)}</p>
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
