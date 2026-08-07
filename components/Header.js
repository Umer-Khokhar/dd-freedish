"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/live", label: "All Channels" },
    { href: "/#categories", label: "Categories" },
  ];

  const isActive = (href) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname?.startsWith(href + "/");
  };

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-lg shadow-black/20"
            : "bg-[var(--bg)]/60 backdrop-blur-xl border-b border-[var(--border)]/50"
        }`}
      >
        <div className="w-full max-w-[1500px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <h1 className="text-xl font-black tracking-tight leading-none">
              <span className="text-brand-gradient">Stream</span>za
            </h1>
          </Link>

          {/* Nav Links - right aligned */}
          <div className="flex items-center gap-1 ml-auto">
            <nav className="hidden md:flex items-center gap-1 mr-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                    isActive(l.href)
                      ? "text-white bg-white/10"
                      : "text-[var(--muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              title="Search (⌘K)"
              className="flex items-center gap-2 h-9 px-3 rounded-lg bg-white/5 border border-white/10 text-[var(--muted)] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="hidden lg:inline text-xs font-semibold">Search</span>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-bold text-[var(--muted)]">⌘K</kbd>
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[var(--muted)] hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl">
            <div className="max-w-[1500px] mx-auto px-4 py-2 flex flex-col">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    isActive(l.href)
                      ? "text-white bg-white/10"
                      : "text-[var(--muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                className="text-left px-4 py-3 rounded-lg text-sm font-semibold text-[var(--muted)] hover:text-white hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                Search
              </button>
            </div>
          </nav>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
