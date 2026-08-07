"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/hero-images/cpl.jpg",
    title: "CPL T20 LIVE",
    subtitle: "Caribbean Premier League 2026",
    description: "Watch all matches live exclusively on Streamza",
    href: "/live",
    badge: "LIVE SPORTS",
  },
  {
    image: "/hero-images/hundred.jpg",
    title: "THE HUNDRED",
    subtitle: "Men's & Women's Competition 2026",
    description: "21st Jul - 16th Aug • Every ball live",
    href: "/live",
    badge: "CRICKET",
  },
  {
    image: "/hero_banner.png",
    title: "STREAMZA",
    subtitle: "Live TV • Sports • Entertainment",
    description: "Your world of live entertainment. Every channel. One place.",
    href: "/live",
    badge: "NEW",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel container */}
      <div className="relative w-full h-[50vh] min-h-[400px] md:h-[65vh] md:min-h-[500px] lg:h-[75vh] lg:min-h-[550px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              i === current
                ? "opacity-100 z-10 scale-100"
                : i === (current - 1 + slides.length) % slides.length
                ? "opacity-0 z-0 scale-105 -translate-x-full"
                : "opacity-0 z-0 scale-105 translate-x-full"
            }`}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Content overlay - always visible */}
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="w-full max-w-[1500px] mx-auto px-4 md:px-8 pb-12 md:pb-16 lg:pb-20">
            {/* Badge */}
            <span className="inline-block px-3 py-1 mb-3 text-[10px] md:text-xs font-black uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md">
              {slides[current].badge}
            </span>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-2 leading-none">
              {slides[current].title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white/80 mb-1">
              {slides[current].subtitle}
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-white/60 mb-6 max-w-xl">
              {slides[current].description}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <Link
                href={slides[current].href}
                className="px-8 py-3.5 bg-white text-black font-bold rounded-lg text-sm md:text-base hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                WATCH NOW
              </Link>
              <Link
                href="/live"
                className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg text-sm md:text-base hover:bg-white/20 transition-all duration-300"
              >
                Browse Channels
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
