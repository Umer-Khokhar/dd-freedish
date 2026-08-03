"use client";
import { useMemo, useState } from "react";
import OttCard from "../../components/OttCard";
import { useDataFile } from "../../components/useDataFile";

const decadeOf = (year) => {
  if (!year || !Number.isFinite(year)) return null;
  return `${Math.floor(year / 10) * 10}s`;
};

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "az", label: "A → Z" },
  { value: "za", label: "Z → A" },
];

export default function MoviesPage() {
  const { data: movies, loading } = useDataFile("/movies.js", "movies");
  const [query, setQuery] = useState("");
  const [activeDecade, setActiveDecade] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const decades = useMemo(() => {
    const set = new Set();
    for (const m of movies) {
      const d = decadeOf(m.year);
      if (d) set.add(d);
    }
    return ["All", ...Array.from(set).sort((a, b) => Number(b) - Number(a))];
  }, [movies]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = movies.filter((m) => {
      const decade = decadeOf(m.year);
      if (activeDecade !== "All" && decade !== activeDecade) return false;
      if (q) {
        const haystack = `${m.title || ""} ${m.name || ""} ${m.year || ""}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    return list.sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return (a.year || 0) - (b.year || 0);
        case "az":
          return (a.title || a.name || "").localeCompare(b.title || b.name || "");
        case "za":
          return (b.title || b.name || "").localeCompare(a.title || a.name || "");
        case "newest":
        default:
          return (b.year || 0) - (a.year || 0);
      }
    });
  }, [movies, query, activeDecade, sortBy]);

  return (
    <div className="min-h-screen selection:bg-fuchsia-500/30">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/10 via-transparent to-fuchsia-500/10" />
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 pt-12 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-500 text-xs font-black uppercase tracking-widest">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4h-4z" />
              </svg>
              Movies
            </span>
            <span className="text-[var(--muted)] text-sm font-semibold">
              {loading ? "Loading…" : `${movies.length} titles in your library`}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Hindi Animated <span className="text-brand-gradient">Movies</span>
          </h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Hand-picked animated movies from Hindi cinema. Filter by decade, sort your way, and press play.
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
                placeholder="Search by title…"
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
          {decades.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDecade(d)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeDecade === d
                  ? "bg-brand-gradient text-white shadow-lg shadow-fuchsia-500/20"
                  : "bg-[var(--surface-2)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-fuchsia-500/40"
              }`}
            >
              {d}
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
              No movies match your filters.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveDecade("All");
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm font-bold hover:border-fuchsia-500/40 transition-colors"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-[var(--muted)] mb-4 font-semibold">
              Showing {filtered.length} of {movies.length} movies
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((m, i) => (
                <OttCard
                  key={m.id}
                  href={`/movies/${m.id}`}
                  logo={m.logo}
                  title={m.title || m.name}
                  subtitle={m.year ? `Movie · ${m.year}` : "Movie"}
                  badge={m.year ? String(m.year) : "Movie"}
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