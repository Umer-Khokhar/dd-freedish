"use client";
import { useMemo, useState } from "react";
import OttCard from "../../components/OttCard";
import { useDataFile } from "../../components/useDataFile";

const formatCategory = (cat) => {
  if (!cat || cat === "All") return "All";
  return cat
    .replace(/^(IN|PK|UK|US|AR)[^\w]*/i, "")
    .replace(/[^\w]*LIVE$/i, "")
    .trim();
};

const countryFromCategory = (cat) => {
  const m = (cat || "").match(/^(IN|PK|UK|US|AR)/i);
  return m ? m[1].toUpperCase() : null;
};

export default function LiveTVPage() {
  const { data: channels, loading } = useDataFile("/channels.js", "channels");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCountry, setActiveCountry] = useState("All");

  const categories = useMemo(() => {
    const set = new Set();
    for (const c of channels) {
      const cat = formatCategory(c.category);
      if (cat) set.add(cat);
    }
    return ["All", ...Array.from(set).sort()];
  }, [channels]);

  const countries = useMemo(() => {
    const set = new Set();
    for (const c of channels) {
      const country = countryFromCategory(c.category);
      if (country) set.add(country);
    }
    return ["All", ...Array.from(set).sort()];
  }, [channels]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return channels.filter((c) => {
      const cat = formatCategory(c.category);
      const country = countryFromCategory(c.category);
      if (activeCategory !== "All" && cat !== activeCategory) return false;
      if (activeCountry !== "All" && country !== activeCountry) return false;
      if (q && !(c.name || "").toLowerCase().includes(q)) return false;
      return true;
    });
  }, [channels, query, activeCategory, activeCountry]);

  return (
    <div className="min-h-screen selection:bg-fuchsia-500/30">
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-orange-500/10" />
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 pt-12 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-500 text-xs font-black uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-red-500 live-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              Live
            </span>
            <span className="text-[var(--muted)] text-sm font-semibold">
              {loading ? "Loading…" : `${channels.length} channels streaming now`}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Live <span className="text-brand-gradient">TV</span>
          </h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            Browse every live kids channel in one place. Filter by country or category, then jump straight into the stream.
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
                placeholder="Search channels…"
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm font-semibold focus:outline-none focus:border-fuchsia-500/50 transition-colors"
              />
            </div>
            <select
              value={activeCountry}
              onChange={(e) => setActiveCountry(e.target.value)}
              className="h-11 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm font-semibold focus:outline-none focus:border-fuchsia-500/50 transition-colors cursor-pointer"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All countries" : c}
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
              <div key={i} className="skeleton-shimmer aspect-square rounded-2xl" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-[var(--muted)] text-lg font-semibold">
              No channels match your filters.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
                setActiveCountry("All");
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-sm font-bold hover:border-fuchsia-500/40 transition-colors"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-[var(--muted)] mb-4 font-semibold">
              Showing {filtered.length} of {channels.length} channels
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((c, i) => (
                <OttCard
                  key={c.id}
                  href={`/watch/${c.id}`}
                  logo={c.logo}
                  title={c.name}
                  subtitle={formatCategory(c.category)}
                  badge="Live"
                  isLive
                  index={i}
                  variant="channel"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}