"use client";
import { useState } from "react";
import Link from "next/link";

const getProxiedLogo = (url) => {
  if (!url) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("https://")) return url;
  return `/api/image?url=${encodeURIComponent(url)}`;
};

/**
 * A single OTT poster card. Used for live channels, series, and movies.
 *
 * Props:
 *   href     - link target
 *   logo     - poster/logo URL
 *   title    - main label
 *   subtitle - secondary label (category / year / episode count)
 *   badge    - optional badge text (e.g. "LIVE", "S1 E5")
 *   isLive   - show a pulsing live dot
 *   variant  - "channel" | "poster"  (default "poster")
 *               channel: square card, logo contained with padding (good for
 *                        channel logos which are usually wider than tall)
 *               poster:  2:3 card, image covers the area (good for
 *                        movie/series posters)
 */
export default function OttCard({
  href,
  logo,
  title,
  subtitle,
  badge,
  isLive = false,
  index = 0,
  variant = "poster",
}) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const logoSrc = getProxiedLogo(logo);

  const isChannel = variant === "channel";

  // Channel cards: smaller, square, logo padded inside.
  // Poster cards: wider, 2:3, image fills the area.
  const sizeClasses = isChannel
    ? "w-32 sm:w-36 md:w-40"
    : "w-40 sm:w-44 md:w-48";

  const aspectClasses = isChannel ? "aspect-square" : "aspect-[2/3]";
  const imgFit = isChannel ? "object-contain p-4" : "object-cover";

  return (
    <Link
      href={href}
      className={`ott-card group relative shrink-0 ${sizeClasses} rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-lg hover:shadow-2xl hover:shadow-fuchsia-500/10 hover:-translate-y-1.5 transition-all duration-300 snap-start`}
      style={{ animationDelay: `${Math.min(index * 40, 500)}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Poster / Logo area */}
      <div
        className={`w-full flex items-center justify-center bg-[var(--surface-2)] relative overflow-hidden ${aspectClasses}`}
      >
        {logoSrc && !imgError ? (
          <img
            src={logoSrc}
            alt={title}
            onError={() => setImgError(true)}
            loading="lazy"
            className={`w-full h-full ${imgFit} transition-transform duration-500 ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl font-black text-brand-gradient">
              {(title || "?").charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Play button on hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center shadow-[0_0_30px_rgba(217,70,239,0.6)] scale-90 group-hover:scale-100 transition-transform duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
            {isLive && (
              <span
                className="w-1.5 h-1.5 rounded-full live-pulse"
                style={{ background: "var(--live-dot)", boxShadow: "0 0 8px #22c55e" }}
              />
            )}
            <span className="text-[9px] font-black text-white uppercase tracking-widest">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-2.5 relative z-10">
        <h3 className="text-[12px] font-bold leading-tight truncate group-hover:text-fuchsia-500 transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[10px] font-semibold text-[var(--muted)] truncate mt-0.5 uppercase tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}
