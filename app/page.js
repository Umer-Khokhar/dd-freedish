"use client";
import Hero from "../components/Hero";
import ContentRail from "../components/ContentRail";
import OttCard from "../components/OttCard";
import { useDataFile } from "../components/useDataFile";

const formatCategory = (cat) => {
  if (!cat || cat === "All") return "All";
  return cat
    .replace(/^(IN|PK|UK|US|AR)[^\w]*/i, "")
    .replace(/[^\w]*LIVE$/i, "")
    .trim();
};

// Group flat series episodes by their `series` title so each show
// appears once as a card with an episode count.
const groupSeries = (episodes) => {
  const map = new Map();
  for (const ep of episodes) {
    const key = ep.series || ep.name;
    if (!map.has(key)) {
      map.set(key, { ...ep, episodeCount: 0, episodes: [] });
    }
    const entry = map.get(key);
    entry.episodeCount += 1;
    entry.episodes.push(ep);
  }
  return Array.from(map.values());
};

export default function Home() {
  const { data: channels, loading: loadingChannels } = useDataFile("/channels.js", "channels");
  const { data: seriesEps, loading: loadingSeries } = useDataFile("/series.js", "series");
  const { data: movies, loading: loadingMovies } = useDataFile("/movies.js", "movies");

  const series = groupSeries(seriesEps);

  const loading = loadingChannels || loadingSeries || loadingMovies;

  return (
    <div className="min-h-screen selection:bg-fuchsia-500/30">
      {/* Hero */}
      <Hero items={channels} />

      {/* Content Rails */}
      <div className="max-w-[1500px] mx-auto pb-20">
        {loading ? (
          <div className="px-4 md:px-8 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="skeleton-shimmer aspect-[2/3] rounded-2xl" />
            ))}
          </div>
        ) : (
          <>
            {/* Live Kids Channels */}
            <ContentRail
              id="live"
              title="Live Kids Channels"
              subtitle={`${channels.length} live channels`}
            >
              {channels.map((c, i) => (
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
            </ContentRail>

            {/* Hindi Anime & Animated Series */}
            <ContentRail
              id="series"
              title="Hindi Anime & Animated Series"
              subtitle={`${series.length} series · ${seriesEps.length} episodes`}
            >
              {series.map((s, i) => (
                <OttCard
                  key={s.id}
                  href={`/series/${s.id}`}
                  logo={s.logo}
                  title={s.series || s.name}
                  subtitle={`${s.episodeCount} episodes`}
                  badge={`${s.episodeCount} EP`}
                  index={i}
                />
              ))}
            </ContentRail>

            {/* Hindi Animated Movies */}
            <ContentRail
              id="movies"
              title="Hindi Animated Movies"
              subtitle={`${movies.length} movies`}
            >
              {movies.map((m, i) => (
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
            </ContentRail>
          </>
        )}
      </div>
    </div>
  );
}
