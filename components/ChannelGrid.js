"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const formatCategory = (cat) => {
  if (cat === "All") return cat;
  return cat
    .replace(/^(IN|PK)[^\w]*/i, "")
    .replace(/[^\w]*LIVE$/i, "")
    .trim()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
};

const getCategoryIcon = (catName) => {
  const name = catName.toLowerCase();
  if (name === "all")
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    );
  if (
    name.includes("sport") ||
    name.includes("premier league") ||
    name.includes("cricket") ||
    name.includes("football")
  )
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20" />
        <path d="M2 12h20" />
      </svg>
    );
  if (
    name.includes("movi") ||
    name.includes("cinema") ||
    name.includes("picture")
  )
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    );
  if (name.includes("news"))
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    );
  if (name.includes("music") || name.includes("song") || name.includes("audio"))
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    );
  if (
    name.includes("kid") ||
    name.includes("cartoon") ||
    name.includes("child")
  )
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    );
  if (
    name.includes("devotion") ||
    name.includes("religion") ||
    name.includes("spirit") ||
    name.includes("bhakti") ||
    name.includes("darshan")
  )
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20" />
        <path d="M8 6h8" />
      </svg>
    );
  if (
    name.includes("entertainment") ||
    name.includes("general") ||
    name.includes("tv")
  )
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </svg>
    );
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
};

export default function ChannelGrid() {
  const [channels, setChannels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const searchInputRef = useRef(null);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("/channels.js")
      .then((res) => res.text())
      .then((text) => {
        try {
          const getChannels = new Function(`${text}\nreturn channels;`);
          const parsed = getChannels();
          if (Array.isArray(parsed)) setChannels(parsed);
        } catch (err) {
          console.error("Error parsing channels:", err);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching channels:", err);
        setLoading(false);
      });
  }, []);

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

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = ["All", ...new Set(channels.map((c) => c.category))];

  const filtered = channels.filter((c) => {
    const matchSearch = c.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  if (loading) {
    return (
      <div className="w-full max-w-[1400px] mx-auto p-6 md:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="skeleton-shimmer h-[220px] rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto p-6 md:p-8">
      {/* Search and Filters Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        {/* Modern Search Bar */}
        <div className="relative w-full md:max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-slate-400 transition-colors group-focus-within:text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search channels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-11 pr-12 py-3.5 bg-white dark:bg-[#15151f] border border-slate-200 dark:border-slate-800 rounded-2xl text-[15px] text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-50 dark:bg-[#0a0a0f] border border-slate-200 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              <span className="text-[12px]">⌘</span>K
            </kbd>
          </div>
        </div>

        {/* Premium Category Dropdown */}
        <div className="relative w-full md:w-[280px] z-20" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between gap-3 px-5 py-3.5 bg-white dark:bg-[#15151f] border border-slate-200 dark:border-slate-800 rounded-2xl text-[15px] font-bold text-slate-900 dark:text-white shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="text-orange-500 shrink-0">
                {getCategoryIcon(formatCategory(selectedCategory))}
              </span>
              <span className="truncate">{formatCategory(selectedCategory)}</span>
            </div>
            <svg
              className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white dark:bg-[#15151f] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl max-h-[320px] overflow-y-auto animate-slide-down custom-scrollbar origin-top">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const formattedName = formatCategory(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 text-[14px] font-semibold rounded-xl transition-all duration-200
                      ${isActive 
                        ? "bg-orange-500/10 text-orange-500" 
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1a1a24] hover:text-slate-900 dark:hover:text-white"
                      }
                    `}
                  >
                    <span className={isActive ? "text-orange-500" : "text-slate-400 dark:text-slate-500"}>
                      {getCategoryIcon(formattedName)}
                    </span>
                    <span className="truncate">{formattedName}</span>
                    {isActive && (
                      <svg className="w-4 h-4 ml-auto text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
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

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          {selectedCategory === "All"
            ? "Discover Channels"
            : formatCategory(selectedCategory)}
        </h2>
        <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[13px] font-bold">
          {filtered.length} Channels
        </span>
      </div>

      {/* Channel Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="w-20 h-20 bg-white dark:bg-[#15151f] rounded-3xl flex items-center justify-center shadow-lg mb-6 border border-slate-200 dark:border-slate-800">
            <svg
              className="w-10 h-10 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            No channels found
          </h3>
          <p className="text-[15px] text-slate-500 dark:text-slate-400 max-w-md">
            We couldn't find any channels matching "{searchQuery}" in this
            category. Try adjusting your search.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-6 px-6 py-2.5 bg-white dark:bg-[#15151f] hover:bg-slate-50 dark:hover:bg-[#1a1a24] border border-slate-200 dark:border-slate-800 rounded-xl text-[14px] font-semibold text-slate-900 dark:text-white transition-all shadow-sm"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {filtered.map((channel, idx) => (
            <ChannelCard key={channel.id} channel={channel} index={idx} />
          ))}
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, black 90%, transparent 100%);
        }
      `}</style>
    </div>
  );
}

function ChannelCard({ channel, index }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  const logoSrc =
    channel.logo &&
    !channel.logo.startsWith("data:image/jpeg;base64") &&
    !imgError
      ? channel.logo
      : null;

  return (
    <Link
      href={`/watch/${channel.id}`}
      className="channel-card group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#15151f] shadow-sm hover:shadow-md hover:border-orange-500/30 transition-all duration-300 overflow-hidden"
      style={{
        animationDelay: `${Math.min(index * 30, 600)}ms`,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo Area */}
      <div className="h-[140px] flex items-center justify-center bg-slate-50 dark:bg-[#0a0a0f] relative overflow-hidden p-4">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt={channel.name}
            onError={() => setImgError(true)}
            className={`w-full h-full object-contain transition-transform duration-500 ${hovered ? "scale-110" : "scale-100"}`}
            loading="lazy"
          />
        ) : (
          <div
            className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-white text-[28px] font-black"
            style={{ background: "var(--accent-gradient)" }}
          >
            {channel.name.replace(/^(IN:|PK:)\s*/i, "").charAt(0)}
          </div>
        )}

        {/* Live Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
          <span
            className="w-1.5 h-1.5 rounded-full live-pulse"
            style={{ background: "var(--live-dot)" }}
          />
          <span className="text-[9px] font-bold text-white uppercase tracking-wider">
            Live
          </span>
        </div>

        {/* Hover Overlay Play Button */}
        <div
          className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-12 h-12 rounded-full bg-orange-500/90 backdrop-blur flex items-center justify-center shadow-lg transform transition-transform duration-300 scale-90 group-hover:scale-100">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
              className="ml-1"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Channel Info */}
      <div className="p-4 border-t text-center border-slate-200 dark:border-slate-800 bg-white dark:bg-[#15151f]">
        <h3 className="text-[15px] font-bold text-slate-900 dark:text-white leading-tight truncate mb-1.5">
          {channel.name}
        </h3>
        <div className="flex items-center justify-center gap-1.5 text-[12px] font-semibold text-slate-500 dark:text-slate-400 truncate">
          <span className="text-orange-500 shrink-0">{getCategoryIcon(formatCategory(channel.category))}</span>
          <span className="truncate">{formatCategory(channel.category)}</span>
        </div>
      </div>
    </Link>
  );
}
