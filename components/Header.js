"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="w-full max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0 relative bg-white border border-slate-200 dark:border-slate-800">
            <Image
              src="/logo.png"
              alt="DD FreeDish Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div>
            <h1 className="text-[22px] font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Ultra <span className="text-orange-500">DISHTV</span>
            </h1>
            <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none mt-0.5">
              Live Television
            </p>
          </div>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-[#15151f] border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-orange-500 hover:border-orange-500 dark:hover:text-orange-500 dark:hover:border-orange-500 hover:shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {theme === "dark" ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
