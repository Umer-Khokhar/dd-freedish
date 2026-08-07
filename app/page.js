"use client";
import { useMemo } from "react";
import Hero from "../components/Hero";
import ContentRail from "../components/ContentRail";
import OttCard from "../components/OttCard";
import { useDataFile } from "../components/useDataFile";

const CATEGORIES = [
  "In entertainment",
  "In movies",
  "In sports",
  "In kids cartoon",
  "In documentory",
  "24x7 animation exclusive",
  "In punjabi",
  "pk news",
  "pk sports",
  "pk entertainment",
  "All sports",
  "VIP - Cricket Live",
];

export default function Home() {
  const { data: channels, loading: loadingChannels } = useDataFile("/channels.js", "channels");

  const channelsByCategory = useMemo(() => {
    const map = {};
    for (const cat of CATEGORIES) {
      map[cat] = channels.filter((c) => c.category === cat);
    }
    return map;
  }, [channels]);

  return (
    <div className="min-h-screen selection:bg-fuchsia-500/30">
      <Hero />

      <div id="categories" className="max-w-[1500px] mx-auto pb-20">
        {loadingChannels ? (
          <div className="px-4 md:px-8 py-20 text-center">
            <p className="text-[var(--muted)] text-sm font-semibold">Loading channels...</p>
          </div>
        ) : (
          CATEGORIES.map((cat) => {
            const catChannels = channelsByCategory[cat];
            if (!catChannels || catChannels.length === 0) return null;
            return (
              <ContentRail
                key={cat}
                id={cat}
                title={cat}
                subtitle={`${catChannels.length} channels`}
              >
                {catChannels.map((c, i) => (
                  <OttCard
                    key={c.id}
                    href={`/watch/${c.id}`}
                    logo={c.logo}
                    title={c.name}
                    subtitle={c.category}
                    badge="Live"
                    isLive
                    index={i}
                    variant="channel"
                    size="large"
                  />
                ))}
              </ContentRail>
            );
          })
        )}
      </div>
    </div>
  );
}
