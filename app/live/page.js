"use client";
import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import OttCard from "../../components/OttCard";
import { useDataFile } from "../../components/useDataFile";

const CHUNK_SIZE = 20;

const CATEGORY_ICONS = {
  "All": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
  "24x7 animation exclusive": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>,
  "All sports": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
  "In documentory": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /></svg>,
  "In entertainment": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  "In kids cartoon": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>,
  "In movies": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /></svg>,
  "In punjabi": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>,
  "In sports": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>,
  "VIP - Cricket Live": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
  "pk entertainment": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>,
  "pk news": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /></svg>,
  "pk sports": <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>,
};

function CategoryDropdown({ categories, active, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const activeIcon = CATEGORY_ICONS[active] || CATEGORY_ICONS["All"];
  const activeLabel = active === "All" ? "All Categories" : active;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-10 px-4 flex items-center gap-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-sm font-semibold text-[var(--text)] hover:border-fuchsia-500/40 transition-colors cursor-pointer"
      >
        <span className="text-[var(--muted)]">{activeIcon}</span>
        <span className="max-w-[140px] truncate">{activeLabel}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`text-[var(--muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-56 max-h-80 overflow-y-auto rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl shadow-black/40 z-50 py-1">
          {categories.map((cat) => {
            const icon = CATEGORY_ICONS[cat] || CATEGORY_ICONS["All"];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => { onChange(cat); setOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium transition-colors text-left ${
                  isActive ? "bg-fuchsia-500/15 text-fuchsia-300" : "text-[var(--muted)] hover:bg-white/5 hover:text-[var(--text)]"
                }`}
              >
                <span className={isActive ? "text-fuchsia-400" : "text-[var(--muted)]"}>{icon}</span>
                <span className="truncate">{cat === "All" ? "All Categories" : cat}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function LiveTVPage() {
  const { data: channels, loading } = useDataFile("/channels.js", "channels");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(CHUNK_SIZE);
  const sentinelRef = useRef(null);

  const categories = useMemo(() => {
    const set = new Set();
    for (const c of channels) {
      if (c.category) set.add(c.category);
    }
    return ["All", ...Array.from(set).sort()];
  }, [channels]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return channels.filter((c) => {
      if (activeCategory !== "All" && c.category !== activeCategory) return false;
      if (q && !(c.name || "").toLowerCase().includes(q)) return false;
      return true;
    });
  }, [channels, query, activeCategory]);

  const visibleChannels = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const hasMore = visibleCount < filtered.length;

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(CHUNK_SIZE);
  }, [query, activeCategory]);

  // Infinite scroll observer
  useEffect(() => {
    if (!hasMore || loading) return;
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => prev + CHUNK_SIZE);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  return (
    <div className="min-h-screen selection:bg-fuchsia-500/30">
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 pt-24 pb-8">
        {/* Search + Filter */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search channels..."
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-sm font-semibold focus:outline-none focus:border-fuchsia-500/50 transition-colors"
            />
          </div>
          <CategoryDropdown categories={categories} active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Count */}
        {!loading && (
          <p className="text-xs text-[var(--muted)] mb-4 font-semibold uppercase tracking-wider">
            {filtered.length} channel{filtered.length !== 1 ? "s" : ""}
          </p>
        )}

        {/* Grid */}
        {loading ? (
          <div className="py-20 text-center">
            <p className="text-[var(--muted)] text-sm font-semibold">Loading channels...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-[var(--muted)] text-lg font-semibold">No channels match your filters.</p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="mt-4 px-5 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-sm font-bold hover:border-fuchsia-500/40 transition-colors"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {visibleChannels.map((c) => (
                <OttCard
                  key={c.id}
                  href={`/watch/${c.id}`}
                  logo={c.logo}
                  title={c.name}
                  subtitle={c.category}
                  badge="Live"
                  isLive
                  variant="channel"
                  size="medium"
                />
              ))}
            </div>

            {/* Sentinel for infinite scroll */}
            {hasMore && (
              <div ref={sentinelRef} className="py-8 text-center">
                <p className="text-[var(--muted)] text-xs font-semibold">Loading more...</p>
              </div>
            )}

            {!hasMore && filtered.length > CHUNK_SIZE && (
              <div className="py-8 text-center">
                <p className="text-[var(--muted)] text-xs font-semibold">All {filtered.length} channels loaded</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
