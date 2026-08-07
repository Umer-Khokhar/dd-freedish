"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import OttCard from "./OttCard";
import { useDataFile } from "./useDataFile";

const MAX_PER_GROUP = 6;

const groupLabel = {
  channels: "Live TV",
};

const itemHref = (kind, item) => {
  if (kind === "channels") return `/watch/${item.id}`;
  return "#";
};

export default function SearchModal({ open, onClose }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  const { data: channelsRaw } = useDataFile("/channels.js", "channels");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        channels: channelsRaw.slice(0, MAX_PER_GROUP),
      };
    }
    const match = (text) => (text || "").toLowerCase().includes(q);
    return {
      channels: channelsRaw.filter((c) => match(c.name) || match(c.category)).slice(0, MAX_PER_GROUP),
    };
  }, [query, channelsRaw]);

  const totalCount = results.channels.length;

  useEffect(() => {
    if (open) {
      setQuery("");
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const handleSelect = (kind, item) => {
    router.push(itemHref(kind, item));
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-3 px-5 h-14 border-b border-[var(--border)]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--muted)] shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search channels..."
            className="flex-1 bg-transparent text-sm font-semibold focus:outline-none placeholder:text-[var(--muted)]"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-[10px] font-black text-[var(--muted)] uppercase">
            Esc
          </kbd>
        </div>

        <div className="max-h-[65vh] overflow-y-auto">
          {totalCount === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-[var(--muted)] font-semibold">
                No results for &ldquo;{query}&rdquo;.
              </p>
              <p className="text-xs text-[var(--muted)] mt-2">
                Try a different keyword.
              </p>
            </div>
          ) : (
            <div className="p-5 space-y-6">
              {(["channels"]).map((kind) => {
                const items = results[kind];
                if (items.length === 0) return null;
                return (
                  <section key={kind}>
                    <header className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-black uppercase tracking-widest text-[var(--muted)] flex items-center gap-2">
                        <span className="w-1 h-4 rounded-full bg-brand-gradient inline-block" />
                        {groupLabel[kind]}
                        <span className="text-[var(--muted)]/60 normal-case font-semibold tracking-normal">
                          · {items.length}
                        </span>
                      </h3>
                    </header>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                      {items.map((item, i) => (
                        <div
                          key={item.id}
                          onClick={() => handleSelect(kind, item)}
                          className="cursor-pointer"
                        >
                          <OttCard
                            href={itemHref(kind, item)}
                            logo={item.logo}
                            title={item.name}
                            subtitle={item.category?.replace(/^(IN|PK|UK|US|AR)[^\w]*/i, "").replace(/[^\w]*LIVE$/i, "").trim()}
                            badge="Live"
                            isLive
                            index={i}
                            variant="channel"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-5 h-11 border-t border-[var(--border)] bg-[var(--surface-2)]/50 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
          <span>{totalCount} result{totalCount === 1 ? "" : "s"}</span>
          <span>Streamza · Search</span>
        </div>
      </div>
    </div>
  );
}
