"use client";
import { useState } from "react";
import Link from "next/link";

const getProxiedLogo = (url) => {
  if (!url) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("https://")) return url;
  return `/api/image?url=${encodeURIComponent(url)}`;
};

export default function OttCard({
  href,
  logo,
  title,
  subtitle,
  badge,
  isLive = false,
  index = 0,
  variant = "channel",
  size = "default",
}) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const logoSrc = getProxiedLogo(logo);

  const sizeClasses = size === "large"
    ? "w-[180px] sm:w-[200px] md:w-[220px]"
    : size === "medium"
    ? "w-[180px] sm:w-[195px] md:w-[215px]"
    : "w-[150px] sm:w-[165px] md:w-[180px]";

  return (
    <Link
      href={href}
      className={`ott-card group relative shrink-0 ${sizeClasses} rounded-2xl overflow-hidden snap-start transition-all duration-300 ${
        hovered
          ? "shadow-[0_8px_32px_rgba(139,92,246,0.25)] border border-white/[0.15] -translate-y-1"
          : "border border-white/[0.08] hover:border-white/[0.12]"
      }`}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Inner glow on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
        hovered ? "opacity-100" : "opacity-0"
      }`} style={{
        background: "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 60%)",
      }} />

      {/* Square logo area */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        {logoSrc && !imgError ? (
          <img
            src={logoSrc}
            alt={title}
            onError={() => setImgError(true)}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-contain p-4 transition-transform duration-500 ease-out ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />
        ) : (
          <span className="text-4xl font-black text-brand-gradient">
            {(title || "?").charAt(0).toUpperCase()}
          </span>
        )}

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />

        {/* Play button */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <div className="w-11 h-11 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 4px 20px rgba(139,92,246,0.3)",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="ml-0.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded-md z-10" style={{
            background: "linear-gradient(135deg, rgba(239,68,68,0.8) 0%, rgba(220,38,38,0.6) 100%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 2px 8px rgba(239,68,68,0.4)",
          }}>
            {isLive && (
              <span className="w-1.5 h-1.5 rounded-full live-pulse" style={{ background: "#fff", boxShadow: "0 0 6px #fff" }} />
            )}
            <span className="text-[9px] font-bold text-white uppercase tracking-wider">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Title - its own space below logo */}
      <div className="px-2.5 py-2.5 text-center" style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.06) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <h3 className="text-[11px] font-bold leading-tight truncate text-white/90 group-hover:text-fuchsia-300 transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
