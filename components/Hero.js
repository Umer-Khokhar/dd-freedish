"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-[75vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_banner.png" 
          alt="Premium Live TV" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105 animate-slow-zoom" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start justify-center">
        <div className="animate-fade-in-up">
          <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-500 text-xs font-black tracking-widest uppercase mb-4 inline-block shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            Now Streaming
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4 leading-tight drop-shadow-2xl">
            Ultimate Live TV<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-none">Experience.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 font-medium leading-relaxed drop-shadow-lg">
            Watch thousands of premium live channels, movies, and sports directly in your browser. 
            No buffering, crystal clear quality, and a cinematic interface.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                document.getElementById('channel-grid-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold rounded-2xl text-lg transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:-translate-y-1 flex items-center gap-3 group"
            >
              Start Watching
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white font-bold rounded-2xl text-lg transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
              Browse Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
