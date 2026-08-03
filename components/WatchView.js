"use client";
import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const CustomVideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-fuchsia-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const getProxiedLogo = (url) => {
  if (!url) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("https://")) return url;
  return `/api/image?url=${encodeURIComponent(url)}`;
};

const formatCategory = (cat) => {
  if (!cat || cat === "All") return "All";
  return cat
    .replace(/^(IN|PK|UK|US|AR)[^\w]*/i, "")
    .replace(/[^\w]*LIVE$/i, "")
    .trim();
};

// `type` is one of: "channel", "series", "movie"
export default function WatchView({ type, id }) {
  const router = useRouter();
  const topRef = useRef(null);
  const backButtonRef = useRef(null);

  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const [logoError, setLogoError] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [viewerCount] = useState(() => Math.floor(Math.random() * 5000) + 1000);

  // Resolve file + varname inside the effect so the dep array size is
  // constant across renders (React 19 requires this).
  useEffect(() => {
    let cancelled = false;
    const config = {
      channel: { file: "/channels.js", varName: "channels" },
      series:  { file: "/series.js",   varName: "series"   },
      movie:   { file: "/movies.js",   varName: "movies"   },
    }[type] || { file: "/channels.js", varName: "channels" };

    fetch(config.file)
      .then((res) => res.text())
      .then((text) => {
        if (cancelled) return;
        try {
          const getItems = new Function(`${text}\nreturn ${config.varName};`);
          const parsed = getItems();
          if (Array.isArray(parsed)) {
            setItems(parsed);
            const found = parsed.find((c) => c.id === id);
            if (found) setItem(found);
          }
        } catch (err) {
          console.error("Error parsing:", err);
        }
      })
      .catch(console.error);

    return () => {
      cancelled = true;
    };
  }, [id, type]);

  // For series, collect all episodes of the same show.
  const episodes = useMemo(() => {
    if (type !== "series" || !item) return [];
    return items.filter((e) => (e.series || e.name) === (item.series || item.name));
  }, [items, item, type]);

  // Unique seasons sorted, with "Specials" (null) at the end
  const seasons = useMemo(() => {
    const seasonSet = new Set();
    for (const ep of episodes) {
      if (ep.season != null) seasonSet.add(ep.season);
    }
    return Array.from(seasonSet).sort((a, b) => a - b);
  }, [episodes]);

  const hasSeasons = seasons.length > 1;

  // Episodes for the currently selected season (or all if no season selector needed)
  const visibleEpisodes = useMemo(() => {
    if (!hasSeasons) return episodes;
    if (selectedSeason == null) return episodes;
    return episodes.filter((ep) => ep.season === selectedSeason);
  }, [episodes, selectedSeason, hasSeasons]);

  const activeEpisode = selectedEpisode || item;

  // Auto-select the season of the currently playing episode
  useEffect(() => {
    if (hasSeasons && activeEpisode?.season != null && selectedSeason === null) {
      setSelectedSeason(activeEpisode.season);
    }
  }, [activeEpisode, hasSeasons, selectedSeason]);

  // When user picks a new episode, sync the season tab if needed
  useEffect(() => {
    if (hasSeasons && selectedEpisode?.season != null) {
      setSelectedSeason(selectedEpisode.season);
    }
  }, [selectedEpisode, hasSeasons]);

  // Remote / keyboard back
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

  // Scroll to top on change
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      if (topRef.current) topRef.current.scrollIntoView({ behavior: "auto", block: "start" });
      if (backButtonRef.current) backButtonRef.current.focus();
    }, 10);
    return () => clearTimeout(timer);
  }, [id, type]);

  const isLive = type === "channel";
  const displayName =
    type === "movie" ? item?.title || item?.name : activeEpisode?.name || item?.name;
  const displayCategory = item?.category || "";

  // Back-link target
  const backHref =
    type === "series" ? "/#series" : type === "movie" ? "/#movies" : "/#live";

  return (
    <div
      ref={topRef}
      className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-fuchsia-500/30"
    >
      {/* Ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-40">
        <div className="absolute top-0 left-1/4 w-1/2 h-96 bg-fuchsia-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-96 bg-orange-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <main className="relative z-10 max-w-[1500px] mx-auto px-4 md:px-8 py-8 pt-24">
        {/* Back button */}
        <div className="mb-8 flex items-center justify-between animate-fade-in-up">
          <Link
            href={backHref}
            ref={backButtonRef}
            className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-300 hover:-translate-x-1 bg-[var(--surface)] hover:bg-[var(--surface-2)] border border-[var(--border)] shadow-sm"
          >
            <div className="bg-brand-gradient p-2 rounded-xl text-white transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--muted)]">Return to</span>
              <span className="text-sm font-black tracking-wide">Browse</span>
            </div>
          </Link>

          {isLive && (
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              <span className="text-[11px] uppercase tracking-widest font-black text-red-500">
                Live Broadcast
              </span>
            </div>
          )}
        </div>

        {/* Player */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-[var(--surface)] border border-[var(--border)] relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
            <div className="w-full aspect-video bg-black relative z-10">
              <CustomVideoPlayer url={activeEpisode?.url} channelName={activeEpisode?.name} type={type} />
            </div>

            {item && (
              <div className="p-6 md:p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent pointer-events-none" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden shadow-lg bg-[var(--surface-2)] border border-[var(--border)] p-4">
                    {item.logo && !logoError ? (
                      <img
                        src={getProxiedLogo(item.logo)}
                        alt={item.name}
                        onError={() => setLogoError(true)}
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    ) : (
                      <span className="text-5xl font-black text-brand-gradient">
                        {(item.name || "?").charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-brand-gradient text-white">
                        {formatCategory(displayCategory)}
                      </span>
                      {type === "movie" && item?.year && (
                        <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-[var(--surface-2)] border border-[var(--border)] text-[var(--muted)]">
                          {item.year}
                        </span>
                      )}
                      {type === "series" && (
                        <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-[var(--surface-2)] border border-[var(--border)] text-[var(--muted)]">
                          {seasons.length > 0 ? `${seasons.length} Season${seasons.length > 1 ? "s" : ""} · ` : ""}{episodes.length} Episodes
                        </span>
                      )}
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-2 truncate">
                      {displayName}
                    </h1>
                    <p className="text-[var(--muted)] text-sm font-medium">
                      {isLive
                        ? "Currently broadcasting live on Ultra DISHTV."
                        : type === "series"
                        ? "Hindi animated / anime series."
                        : "Hindi animated movie."}
                    </p>
                  </div>

                  <div className="text-right shrink-0 hidden md:block">
                    <div className="text-4xl font-black tabular-nums tracking-tighter text-brand-gradient">
                      {viewerCount.toLocaleString()}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] mt-1">
                      Watching Now
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Series episode list */}
        {type === "series" && episodes.length > 0 && (
          <div className="pb-20 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {/* Season tabs */}
            {hasSeasons && (
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-black mb-4 flex items-center gap-4">
                  <span className="w-1.5 h-6 rounded-full bg-brand-gradient inline-block" />
                  Seasons
                </h2>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  <button
                    onClick={() => setSelectedSeason(null)}
                    className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                      selectedSeason === null
                        ? "bg-brand-gradient text-white border-transparent shadow-lg shadow-fuchsia-500/20"
                        : "bg-[var(--surface)] border-[var(--border)] text-[var(--muted)] hover:border-fuchsia-500/40 hover:text-[var(--text)]"
                    }`}
                  >
                    All ({episodes.length})
                  </button>
                  {seasons.map((s) => {
                    const count = episodes.filter((ep) => ep.season === s).length;
                    return (
                      <button
                        key={s}
                        onClick={() => setSelectedSeason(s)}
                        className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                          selectedSeason === s
                            ? "bg-brand-gradient text-white border-transparent shadow-lg shadow-fuchsia-500/20"
                            : "bg-[var(--surface)] border-[var(--border)] text-[var(--muted)] hover:border-fuchsia-500/40 hover:text-[var(--text)]"
                        }`}
                      >
                        Season {s} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Episode list */}
            <h2 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-4">
              <span className="w-1.5 h-6 rounded-full bg-brand-gradient inline-block" />
              {hasSeasons && selectedSeason != null
                ? `Season ${selectedSeason} Episodes`
                : "Episodes"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {visibleEpisodes.map((ep, i) => (
                <button
                  key={ep.id}
                  onClick={() => {
                    setSelectedEpisode(ep);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 text-left ${
                    activeEpisode?.id === ep.id
                      ? "bg-brand-gradient text-white border-transparent shadow-lg shadow-fuchsia-500/20"
                      : "bg-[var(--surface)] border-[var(--border)] hover:border-fuchsia-500/40 hover:-translate-y-0.5"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black ${
                      activeEpisode?.id === ep.id
                        ? "bg-white/20 text-white"
                        : "bg-[var(--surface-2)] text-[var(--muted)]"
                    }`}
                  >
                    {ep.episode ? `E${ep.episode}` : i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">{ep.name}</p>
                    {!hasSeasons && ep.season && (
                      <p className="text-xs text-[var(--muted)] mt-0.5">Season {ep.season}</p>
                    )}
                  </div>
                  <svg
                    className={`w-5 h-5 shrink-0 ${activeEpisode?.id === ep.id ? "text-white" : "text-[var(--muted)]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
