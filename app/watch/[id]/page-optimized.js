"use client";
import { useState, useEffect, use, useRef, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useTheme } from "../../../components/ThemeProvider";

const CustomVideoPlayer = dynamic(
  () => import("../../../components/VideoPlayer"),
  { ssr: false, loading: () => <div className="w-full aspect-video bg-black" /> }
);

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
  const playerRef = useRef(null);
  const backButtonRef = useRef(null);
  
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState(null);

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
            if (found) setChannel(found);
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
      if (playerRef.current) {
        playerRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      if (backButtonRef.current) backButtonRef.current.focus();
    }, 10);
    return () => clearTimeout(timer);
  }, [id]);

  // Preserved related channels (Same category, unfiltered)
  const sidebarChannels = useMemo(() => {
    if (!channel || channels.length === 0) return [];
    return channels.filter((c) => c.category === channel.category && c.id !== id);
  }, [channels, channel, id]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      {/* Main Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Video Player Area */}
        <div className={`flex-1 flex flex-col min-h-0 lg:border-r transition-colors duration-300 ${isDark ? 'lg:border-white/10' : 'lg:border-slate-300'}`} ref={playerRef}>
          
          {/* Amazing Back Button Bar */}
          <div className={`h-16 flex items-center px-4 border-b transition-colors z-50 ${isDark ? 'bg-black border-white/10' : 'bg-slate-100 border-slate-300'}`}>
            <Link
              href="/"
              ref={backButtonRef}
              className={`
                group flex items-center gap-3 px-5 py-2 rounded-xl transition-all duration-300
                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500
                ${isDark 
                  ? 'bg-orange-500 text-white shadow-[0_4px_15px_rgba(249,115,22,0.4)]' 
                  : 'bg-orange-500 text-white shadow-[0_4px_12px_rgba(249,115,22,0.3)]'}
              `}
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-bold text-sm">Return to Menu</span>
            </Link>
          </div>

          <div className="flex-1 bg-black">
            <CustomVideoPlayer url={channel?.url} channelName={channel?.name} />
          </div>

          {/* Mobile Info */}
          {channel && (
            <div className={`p-4 border-t lg:hidden transition-colors duration-300 ${isDark ? 'bg-black border-white/10' : 'bg-slate-50 border-slate-300'}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {channel.logo ? (
                    <img src={getProxiedLogo(channel.logo)} alt={channel.name} className="w-full h-full object-contain p-1" />
                  ) : (
                    <span className="text-2xl font-black text-white">{channel.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h2 className="font-bold text-base">{channel.name}</h2>
                  <p className={`text-xs ${isDark ? 'text-white/50' : 'text-slate-500'}`}>{channel.category}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Channel List Sidebar */}
        <div className={`w-full lg:w-64 xl:w-80 border-t lg:border-t-0 lg:border-l flex flex-col min-h-0 transition-colors duration-300 ${isDark ? 'bg-black border-white/10' : 'bg-white border-slate-300'}`}>
          <div className={`p-5 border-b font-black text-xs uppercase tracking-widest ${isDark ? 'text-white/40 border-white/10' : 'text-slate-400 border-slate-200'}`}>
            More from Category
          </div>

          {/* Channel List */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {sidebarChannels.map((c) => (
              <Link
                key={c.id}
                href={`/watch/${c.id}`}
                scroll={false}
                className={`flex items-center gap-4 px-4 py-4 border-b transition-colors group focus-visible:outline-none focus-visible:bg-orange-500/10 ${isDark ? 'border-white/5 hover:bg-white/5' : 'border-slate-100 hover:bg-slate-50'}`}
              >
                <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden flex-shrink-0 border ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  {c.logo ? (
                    <img src={getProxiedLogo(c.logo)} alt={c.name} className="w-full h-full object-contain p-1" />
                  ) : (
                    <span className="text-base font-bold text-orange-500">{c.name.charAt(0)}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <div className={`font-bold text-sm truncate transition-colors ${isDark ? 'text-white group-hover:text-orange-400' : 'text-slate-900 group-hover:text-orange-600'}`}>{c.name}</div>
                  <div className={`text-[11px] font-medium ${isDark ? 'text-white/30' : 'text-slate-400'}`}>{c.category.replace(/^(IN|PK)[^\w]*/i, "").replace(/[^\w]*LIVE$/i, "")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
