"use client";
import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import OttCard from "./OttCard";
import { useDataFile } from "./useDataFile";

const CustomVideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full" style={{ animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  ),
});

const getProxiedLogo = (url) => {
  if (!url) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("https://")) return url;
  return `/api/image?url=${encodeURIComponent(url)}`;
};

export default function WatchView({ id }) {
  const router = useRouter();
  const topRef = useRef(null);

  const [item, setItem] = useState(null);
  const [logoError, setLogoError] = useState(false);
  const { data: allChannels } = useDataFile("/channels.js", "channels");

  useEffect(() => {
    let cancelled = false;
    fetch("/channels.js")
      .then((res) => res.text())
      .then((text) => {
        if (cancelled) return;
        try {
          const getItems = new Function(`${text}\nreturn channels;`);
          const parsed = getItems();
          if (Array.isArray(parsed)) {
            const found = parsed.find((c) => c.id === id);
            if (found) setItem(found);
          }
        } catch (err) {
          console.error("Error parsing:", err);
        }
      })
      .catch(console.error);
    return () => { cancelled = true; };
  }, [id]);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      if (topRef.current) topRef.current.scrollIntoView({ behavior: "auto", block: "start" });
    }, 10);
    return () => clearTimeout(timer);
  }, [id]);

  const relatedChannels = useMemo(() => {
    if (!item?.category || !allChannels.length) return [];
    return allChannels
      .filter((c) => c.category === item.category && c.id !== item.id)
      .slice(0, 12);
  }, [item, allChannels]);

  return (
    <div ref={topRef} className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Full-width player */}
      <div className="w-full bg-black">
        <CustomVideoPlayer url={item?.url} channelName={item?.name} type="channel" />
      </div>

      {/* Channel info */}
      {item && (
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 py-8">
          <div className="flex items-start gap-6 mb-8">
            {/* Back button */}
            <Link
              href="/"
              className="shrink-0 mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--muted)] hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
              </svg>
            </Link>

            {/* Logo */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden bg-[var(--surface)] border border-[var(--border)] p-5">
              {item.logo && !logoError ? (
                <img
                  src={getProxiedLogo(item.logo)}
                  alt={item.name}
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-6xl font-black text-brand-gradient">
                  {(item.name || "?").charAt(0)}
                </span>
              )}
            </div>

            {/* Name + category */}
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500 text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white live-pulse" />
                  LIVE
                </span>
                <span className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                {item.name}
              </h1>
              <p className="text-[var(--muted)] text-sm mt-2">
                Streaming live on Streamza
              </p>
            </div>
          </div>

          {/* Related channels */}
          {relatedChannels.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 rounded-full bg-brand-gradient" />
                <h2 className="text-lg font-bold">More in {item.category}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {relatedChannels.map((c, i) => (
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
                    size="medium"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
