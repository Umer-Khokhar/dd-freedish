"use client";
import { useRef, useState, useEffect } from "react";

/**
 * Renders children only when the element enters the viewport (with margin).
 * Uses Intersection Observer for zero-cost visibility detection.
 */
export default function LazyRender({ children, rootMargin = "400px" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  if (!visible) {
    return <div ref={ref} className="w-full aspect-[215/240] rounded-xl bg-[var(--surface)]" />;
  }

  return <>{children}</>;
}
