"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import OttCard from "./OttCard";
import { useDataFile } from "./useDataFile";

const MAX_PER_GROUP = 6;

const groupSeries = (episodes) => {
  const map = new Map();
  for (const ep of episodes) {
    const key = ep.series || ep.name;
    if (!key) continue;
    if (!map.has(key)) {
      map.set(key, { ...ep, episodeCount: 0, episodes: [] });
    }
    const entry = map.get(key);
    entry.episodeCount += 1;
    entry.episodes.push(ep);
  }
  return Array.from(map.values());
};

const groupLabel = {
  channels: "Live TV",
  movies: "Movies",
  series: "Series",
};

const itemHref = (kind, item) => {
  if (kind === "channels") return `/watch/${item.id}`;
  if (kind === "movies") return `/movies/${item.id}`;
  if (kind === "series") return `/series/${item.id}`;
  return "#";
};

export default function SearchModal({ open, onClose }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  const { data: channelsRaw } = useDataFile("/channels.js", "channels");
  const { data: moviesRaw } = useDataFile("/movies.js", "movies");
  const { data: seriesRaw } = useDataFile("/series.js", "series");

  const series = useMemo(() => groupSeries(seriesRaw), [seriesRaw]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        channels: channelsRaw.slice(0, MAX_PER_GROUP),
        movies: moviesRaw.slice(0, MAX_PER_GROUP),
        series: series.slice(0, MAX_PER_GROUP),
      };
    }
    const match = (text) => (text || "").toLowerCase().includes(q);
    return {
      channels: channelsRaw.filter((c) => match(c.name) || match(c.category)).slice(0, MAX_PER_GROUP),
      movies: moviesRaw
        .filter((m) => match(m.title) || match(m.name) || (m.year && String(m.year).includes(q)))
        .slice(0, MAX_PER_GROUP),
      series: series
        .filter((s) => match(s.series) || match(s.name) || match(s.category))
        .slice(0, MAX_PER_GROUP),
    };
  }, [query, channelsRaw, moviesRaw, series]);

  const totalCount =
    results.channels.length + results.movies.length + results.series.length;

  // Reset query + focus when opening
  useEffect(() => {
    if (open) {
      setQuery("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Lock body scroll + ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const handleSelect = (kind, item) => {
    router.push(itemHref(kind, item));
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in" />

      {/* Panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 h-14 border-b border-[var(--border)]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--muted)] shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search channels, movies, and series…"
            className="flex-1 bg-transparent text-sm font-semibold focus:outline-none placeholder:text-[var(--muted)]"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-[10px] font-black text-[var(--muted)] uppercase">
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[65vh] overflow-y-auto">
          {totalCount === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-[var(--muted)] font-semibold">
                No results for &ldquo;{query}&rdquo;.
              </p>
              <p className="text-xs text-[var(--muted)] mt-2">
                Try a different keyword.
              </p>
            </div>
          ) : (
            <div className="p-5 space-y-6">
              {(["channels", "movies", "series"]).map((kind) => {
                const items = results[kind];
                if (items.length === 0) return null;
                return (
                  <section key={kind}>
                    <header className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-black uppercase tracking-widest text-[var(--muted)] flex items-center gap-2">
                        <span className="w-1 h-4 rounded-full bg-brand-gradient inline-block" />
                        {groupLabel[kind]}
                        <span className="text-[var(--muted)]/60 normal-case font-semibold tracking-normal">
                          · {items.length}
                        </span>
                      </h3>
                    </header>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                      {items.map((item, i) => (
                        <div
                          key={item.id}
                          onClick={() => handleSelect(kind, item)}
                          className="cursor-pointer"
                        >
                          <OttCard
                            href={itemHref(kind, item)}
                            logo={item.logo}
                            title={
                              kind === "series"
                                ? item.series || item.name
                                : kind === "movies"
                                ? item.title || item.name
                                : item.name
                            }
                            subtitle={
                              kind === "channels"
                                ? item.category?.replace(/^(IN|PK|UK|US|AR)[^\w]*/i, "").replace(/[^\w]*LIVE$/i, "").trim()
                                : kind === "movies"
                                ? item.year ? `${item.year}` : "Movie"
                                : `${item.episodeCount} EP`
                            }
                            badge={
                              kind === "channels"
                                ? "Live"
                                : kind === "movies"
                                ? item.year ? String(item.year) : "Movie"
                                : `${item.episodeCount} EP`
                            }
                            isLive={kind === "channels"}
                            index={i}
                            variant={kind === "channels" ? "channel" : "poster"}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 h-11 border-t border-[var(--border)] bg-[var(--surface-2)]/50 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
          <span>{totalCount} result{totalCount === 1 ? "" : "s"}</span>
          <span>Ultra DISHTV · Search</span>
        </div>
      </div>
    </div>
  );
}