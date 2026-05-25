"use client";
import { useState, useEffect, use, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const CustomVideoPlayer = dynamic(
  () => import("../../../components/VideoPlayer"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-[#0a0a0f] rounded-3xl flex items-center justify-center border border-slate-200 dark:border-white/5 shadow-2xl">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-[3px] border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
          <span className="text-orange-500/40 text-[11px] font-black uppercase tracking-[0.2em]">Stream Initializing</span>
        </div>
      </div>
    ),
  },
);

const formatCategory = (cat) => {
  if (!cat || cat === "All") return "All";
  return cat
    .replace(/^(IN|PK)[^\w]*/i, "")
    .replace(/[^\w]*LIVE$/i, "")
    .trim()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
};

const getProxiedLogo = (url) => {
  if (!url) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("https://")) return url;
  return `/api/image?url=${encodeURIComponent(url)}`;
};

const getCategoryIcon = (catName) => {
  const name = catName.toLowerCase();
  if (name.includes("all"))
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    );
  if (name.includes("sport") || name.includes("premier league") || name.includes("cricket") || name.includes("football"))
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M2 12h20" />
      </svg>
    );
  if (name.includes("movi") || name.includes("cinema") || name.includes("picture"))
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" />
      </svg>
    );
  if (name.includes("news"))
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" />
      </svg>
    );
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
};

export default function WatchPage({ params }) {
  const { id } = use(params);
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [imgError, setImgError] = useState(false);

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
              const savedCategory = localStorage.getItem("selectedCategory");
              setSelectedCategory(savedCategory || found.category);
            }
          }
        } catch (err) {
          console.error("Error parsing channels:", err);
        }
      });
  }, [id]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // TV Remote Navigation for WatchPage
  useEffect(() => {
    const handleTVNavigation = (e) => {
      const active = document.activeElement;
      if (!active || active.tagName === 'INPUT') return;

      const sidebarItems = Array.from(document.querySelectorAll('.guide-item, .cat-pill, .return-home, .search-guide'));
      const currentIndex = sidebarItems.indexOf(active);

      if (currentIndex === -1 && ['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(e.key.toLowerCase())) {
        sidebarItems[0]?.focus();
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'arrowdown':
          if (currentIndex < sidebarItems.length - 1) {
            e.preventDefault();
            sidebarItems[currentIndex + 1].focus();
          }
          break;
        case 'arrowup':
          if (currentIndex > 0) {
            e.preventDefault();
            sidebarItems[currentIndex - 1].focus();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleTVNavigation);
    return () => window.removeEventListener('keydown', handleTVNavigation);
  }, []);

  const categories = ["All", ...new Set(channels.map((c) => c.category))];

  const filteredChannels = channels.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === "All" || c.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const logoSrc = getProxiedLogo(channel?.logo);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pb-12 pt-4 md:pt-6">
        
        {/* Tata Play Style Header */}
        <header className="flex items-center justify-between mb-6">
           <Link
             href="/"
             className="return-home group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-orange-500 transition-all duration-300"
           >
             <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                </svg>
             </div>
             <span className="text-[13px] font-black uppercase tracking-tight group-hover:text-orange-500 transition-colors">Return Home</span>
           </Link>

           <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 text-[11px] font-black text-slate-500 dark:text-white/40 uppercase tracking-[0.2em]">
                 Live Tuner Active
              </div>
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-xl">
                 <span className="w-2 h-2 rounded-full bg-orange-500 live-pulse" />
                 <span className="text-orange-500 text-[12px] font-bold uppercase tracking-wider">Stream Active</span>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cinema Player Section (Left) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            <div className="relative group rounded-[24px] md:rounded-[32px] overflow-hidden bg-black shadow-2xl border border-slate-200 dark:border-white/5">
               <CustomVideoPlayer url={channel?.url} channelName={channel?.name} />
            </div>

            {/* Integrated Tata Metadata Bar */}
            {channel && (
              <div className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden p-3 shadow-sm shrink-0 transition-transform hover:scale-105">
                    {logoSrc && !imgError ? (
                      <img src={logoSrc} alt={channel.name} onError={() => setImgError(true)} className="max-w-full max-h-full object-contain filter dark:brightness-110" />
                    ) : (
                      <span className="text-[32px] font-black text-orange-500">
                        {channel.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-[24px] md:text-[36px] font-black tracking-tight leading-none mb-3 truncate">
                      {channel.name}
                    </h1>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-bold text-orange-500 uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-500/20">
                        {formatCategory(channel.category)}
                      </span>
                      <span className="text-slate-400 dark:text-white/30 text-[11px] font-bold uppercase tracking-widest">• 1080P Native Stream</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 border-t border-slate-200 dark:border-white/5 md:border-none pt-4 md:pt-0">
                   <div className="flex flex-col items-end">
                      <span className="text-[24px] font-black leading-none text-slate-900 dark:text-white">{Math.floor(Math.random() * 800) + 200}</span>
                      <span className="text-[9px] font-black text-slate-400 dark:text-white/30 tracking-widest uppercase mt-1">Watching Now</span>
                   </div>
                   <button className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-orange-500 hover:bg-orange-500/10 transition-all group">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:scale-110 transition-transform">
                         <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" />
                      </svg>
                   </button>
                </div>
              </div>
            )}
          </div>

          {/* Tata Play Style Channel Guide (Right) */}
          <div className="lg:col-span-4 xl:col-span-3 h-[calc(100vh-120px)] sticky top-6">
             <div className="h-full flex flex-col rounded-[24px] md:rounded-[32px] bg-slate-50 dark:bg-[#0c0c14] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden">
                
                {/* Guide Header */}
                <div className="p-6 pb-4 border-b border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.02]">
                   <h2 className="text-[18px] font-black tracking-tight uppercase leading-none mb-6">Channel Guide</h2>
                   
                   {/* Compact Search */}
                   <div className="relative mb-6">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Search channels..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-guide w-full pl-9 pr-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl text-[13px] font-bold focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400 dark:placeholder:text-white/20"
                      />
                   </div>

                   {/* Premium Category Dropdown (Tata Play Style) */}
                   <div className="relative mb-6" ref={dropdownRef}>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="cat-pill w-full flex items-center justify-between gap-3 px-4 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl text-[13px] font-black uppercase tracking-widest text-slate-600 dark:text-white/60 hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-sm"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="text-orange-500">{getCategoryIcon(selectedCategory)}</span>
                          <span className="truncate">{formatCategory(selectedCategory)}</span>
                        </div>
                        <svg className={`w-3.5 h-3.5 text-slate-400 dark:text-white/20 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 p-1.5 bg-white dark:bg-[#1a1a24] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl z-50 max-h-[320px] overflow-y-auto animate-slide-down custom-scrollbar ring-1 ring-black/5 dark:ring-white/5">
                          {categories.map((cat) => {
                            const isActive = selectedCategory === cat;
                            return (
                              <button
                                key={cat}
                                onClick={() => {
                                  setSelectedCategory(cat);
                                  localStorage.setItem("selectedCategory", cat);
                                  setIsDropdownOpen(false);
                                }}
                                className={`
                                  w-full flex items-center gap-3 px-3 py-3 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all
                                  ${isActive 
                                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                                    : "text-slate-500 dark:text-white/40 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                                  }
                                `}
                              >
                                <span className={isActive ? "text-white" : "text-orange-500"}>
                                  {getCategoryIcon(cat)}
                                </span>
                                <span className="truncate">{formatCategory(cat)}</span>
                                {isActive && (
                                  <svg className="w-3.5 h-3.5 ml-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                   </div>
                </div>

                {/* Tuner List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                  {filteredChannels.length === 0 ? (
                     <div className="flex flex-col items-center justify-center h-40 opacity-20">
                        <p className="text-[10px] font-black uppercase tracking-widest">No Matches</p>
                     </div>
                  ) : (
                    filteredChannels.map((c) => {
                      const isActive = c.id === id;
                      return (
                        <Link
                          key={c.id}
                          href={`/watch/${c.id}`}
                          className={`
                            guide-item group flex items-center gap-4 p-3 rounded-2xl border transition-all duration-300
                            ${isActive 
                               ? "bg-white dark:bg-white/10 border-orange-500/40 shadow-xl scale-[1.02]" 
                               : "bg-transparent border-transparent hover:bg-white/5 hover:border-slate-200 dark:hover:border-white/5"
                            }
                          `}
                        >
                          <div className={`
                             w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden p-2 transition-all
                             ${isActive ? "bg-orange-500 shadow-lg" : "bg-slate-100 dark:bg-white/5 shadow-sm"}
                          `}>
                            {c.logo ? (
                               <img src={getProxiedLogo(c.logo)} alt={c.name} className={`w-full h-full object-contain filter ${isActive ? "brightness-100 invert" : "brightness-110"}`} />
                            ) : (
                               <div className={`w-full h-full rounded-lg flex items-center justify-center text-[16px] font-black ${isActive ? "text-white" : "text-orange-500/40 bg-white/5"}`}>
                                 {c.name.charAt(0)}
                               </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                             <h4 className={`text-[13px] font-black truncate transition-colors ${isActive ? "text-orange-500" : "text-slate-700 dark:text-white/80 group-hover:text-orange-500"}`}>
                                {c.name}
                             </h4>
                             <div className="flex items-center gap-1.5 mt-1">
                                {isActive ? (
                                   <div className="flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 live-pulse" />
                                      <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Now Playing</span>
                                   </div>
                                ) : (
                                   <span className="text-[9px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-tight">{formatCategory(c.category)}</span>
                                )}
                              </div>
                          </div>
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-orange-500 transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                <polyline points="9 18 15 12 9 6" />
                             </svg>
                          </div>
                        </Link>
                      );
                    })
                  )}
                </div>

                <div className="p-5 text-center bg-slate-100/50 dark:bg-white/[0.02] border-t border-slate-200 dark:border-white/5">
                   <span className="text-[10px] font-black text-slate-400 dark:text-white/10 uppercase tracking-[0.4em]">Ultra DISHTV GUIDE</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.2);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(249, 115, 22, 0.4); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
