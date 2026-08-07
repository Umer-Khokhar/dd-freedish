"use client";
import { useRef, useCallback } from "react";

export default function ContentRail({ id, title, subtitle, children }) {
  const scrollerRef = useRef(null);

  const scrollBy = useCallback((dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  }, []);

  return (
    <section id={id} className="relative py-6 scroll-mt-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-3 px-4 md:px-8">
        <div>
          <h2 className="text-base md:text-lg font-black tracking-tight flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-brand-gradient inline-block" />
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-[var(--muted)] mt-0.5 pl-3">{subtitle}</p>
          )}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[var(--muted)] hover:text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[var(--muted)] hover:text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Rail */}
      <div
        ref={scrollerRef}
        className="flex gap-3 overflow-x-auto no-scrollbar px-4 md:px-8 pb-2 snap-x snap-mandatory scroll-smooth will-change-scroll"
      >
        {children}
      </div>
    </section>
  );
}
