"use client";
import { useRef } from "react";

/**
 * A horizontal scrolling rail with left/right arrow controls,
 * OTT-style. `children` are the cards.
 */
export default function ContentRail({ id, title, subtitle, children }) {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id={id} className="relative py-8 scroll-mt-24">
      {/* Header */}
      <div className="flex items-end justify-between mb-4 px-4 md:px-8">
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-6 rounded-full bg-brand-gradient inline-block" />
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-[var(--muted)] mt-1 pl-4">{subtitle}</p>
          )}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--muted)] hover:text-fuchsia-500 hover:border-fuchsia-500/40 flex items-center justify-center transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--muted)] hover:text-fuchsia-500 hover:border-fuchsia-500/40 flex items-center justify-center transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Rail */}
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto no-scrollbar px-4 md:px-8 pb-4 snap-x snap-mandatory"
      >
        {children}
      </div>
    </section>
  );
}
