"use client";
import Link from "next/link";

/**
 * Cinematic hero spotlight with a rotating featured item.
 * `items` is an array of { id, name, logo, category, url }.
 */
export default function Hero({ items }) {
  const featured = items[0];

  return (
    <div className="relative w-full h-[70vh] min-h-[520px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={featured?.logo || "/hero_banner.png"}
          alt={featured?.name || "Featured"}
          className="w-full h-full object-cover opacity-50 mix-blend-screen scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
        {/* Ambient glows */}
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-fuchsia-600/20 blur-[120px] rounded-full animate-float-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full animate-float-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 md:px-8 pb-16">
        {featured && (
          <div className="max-w-2xl animate-fade-in-up">
            <span className="px-3 py-1 rounded-full bg-brand-gradient text-white text-xs font-black tracking-widest uppercase mb-4 inline-block shadow-[0_0_20px_rgba(217,70,239,0.5)]">
              Now Streaming
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3 leading-tight drop-shadow-2xl">
              {featured.name}
            </h1>
            <p className="text-base md:text-lg text-[var(--muted)] max-w-xl mb-6 font-medium leading-relaxed">
              {featured.category}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/watch/${featured.id}`}
                className="px-7 py-3.5 bg-brand-gradient hover:opacity-90 text-white font-bold rounded-2xl text-base transition-all duration-300 shadow-[0_0_30px_rgba(217,70,239,0.4)] hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] hover:-translate-y-0.5 flex items-center gap-3 group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch Now
              </Link>
              <a
                href="#live"
                className="px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white font-bold rounded-2xl text-base transition-all duration-300 hover:border-white/20 hover:-translate-y-0.5"
              >
                Browse Content
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
