import { useEffect, useRef } from "react";

/**
 * Adds the "in" class to an element once it scrolls into view, matching
 * the original page's .reveal / .reveal.in fade-up behavior.
 * Attach the returned ref to any element that has the "reveal" class.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
