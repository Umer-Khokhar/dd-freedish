"use client";
import { useMemo, useState } from "react";
import OttCard from "../../components/OttCard";
import { useDataFile } from "../../components/useDataFile";

const groupSeries = (episodes) => {
  const map = new Map();
  for (const ep of episodes) {
    const key = ep.series || ep.name;
    if (!key) continue;
    if (!map.has(key)) {
      map.set(key, { ...ep, episodeCount: 0, episodes: [], seasons: new Set() });
    }
    const entry = map.get(key);
    entry.episodeCount += 1;
    entry.episodes.push(ep);
    if (ep.season) entry.seasons.add(ep.season);
  }
  for (const v of map.values()) {
    v.seasonCount = v.seasons.size;
    delete v.seasons;
  }
  return Array.from(map.values());
};

const sortOptions = [
  { value: "episodes", label: "Most episodes" },
  { value: "az", label: "A → Z" },
  { value: "za", label: "Z → A" },
];

export default function SeriesPage() {
  const { data: episodes, loading } = useDataFile("/series.js", "series");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("episodes");

  const series = useMemo(() => groupSeries(episodes), [episodes]);

  const categories = useMemo(() => {
    const set = new Set();
    for (const s of series) {
      if (s.category) set.add(s.category);
    }
    return ["All", ...Array.from(set).sort()];
  }, [series]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = series.filter((s) => {
      if (activeCategory !== "All" && s.category !== activeCategory) return false;
      if (q) {
        const haystack = `${s.series || s.name || ""} ${s.category || ""}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    return list.sort((a, b) => {
      switch (sortBy) {
        case "az":
          return (a.series || a.name || "").localeCompare(b.series || b.name || "");
        case "za":
          return (b.series || b.name || "").localeCompare(a.series || a.name || "");
        case "episodes":
        default:
          return (b.episodeCount || 0) - (a.episodeCount || 0);
      }
    });
  }, [series, query, activeCategory, sortBy]);

  const totalEpisodes = useMemo(
    () => series.reduce((sum, s) => sum + (s.episodeCount || 0), 0),
    [series]
  );

  return (
    <div className="min-h-screen selection:bg-fuchsia-500/30">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10" />
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 pt-12 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-500 text-xs font-black uppercase tracking-widest">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              Series
            </span>
            <span className="text-[var(--muted)] text-sm font-semibold">
              {loading
                ? "Loading…"
                : `${series.length} shows · ${totalEpisodes} episodes`}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Anime & Animated <span className="text-brand-gradient">Series</span>
          </h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Binge Hindi anime and animated shows, organised by series. Pick a show to see every episode.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 max-w-md">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search shows…"
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm font-semibold focus:outline-none focus:border-fuchsia-500/50 transition-colors"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-11 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm font-semibold focus:outline-none focus:border-fuchsia-500/50 transition-colors cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <div className="max-w-[1500px] mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-brand-gradient text-white shadow-lg shadow-fuchsia-500/20"
                  : "bg-[var(--surface-2)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-fuchsia-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="skeleton-shimmer aspect-[2/3] rounded-2xl" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-[var(--muted)] text-lg font-semibold">
              No shows match your filters.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm font-bold hover:border-fuchsia-500/40 transition-colors"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-[var(--muted)] mb-4 font-semibold">
              Showing {filtered.length} of {series.length} shows
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((s, i) => (
                <OttCard
                  key={s.id}
                  href={`/series/${s.id}`}
                  logo={s.logo}
                  title={s.series || s.name}
                  subtitle={`${s.episodeCount} episode${s.episodeCount === 1 ? "" : "s"}${
                    s.seasonCount > 1 ? ` · ${s.seasonCount} seasons` : ""
                  }`}
                  badge={`${s.episodeCount} EP`}
                  index={i}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}