"use client";

import { useEffect, useRef, useState } from "react";

// Scroll-reveal wrapper.
//
// Deliberate design decision: the hidden state is applied by JS *after* mount,
// never in the server-rendered HTML. If JS fails, is blocked, or hasn't hydrated
// yet, the content is simply visible. The common alternative — shipping
// `opacity-0` in the HTML and removing it with JS — makes the entire page
// invisible to anyone whose JS breaks, and to some crawlers.
//
// Also no-ops entirely under prefers-reduced-motion.
export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false); // JS is running: safe to hide
  const [shown, setShown] = useState(false);
  const [useNative, setUseNative] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Check if the browser supports native CSS scroll-driven animations
    const nativeSupport = CSS.supports(
      "(animation-timeline: view()) and (animation-range: entry)"
    );

    // If native is supported and we don't have a time-based stagger delay,
    // we can skip JS observation entirely and let CSS handle the reveal!
    if (nativeSupport && delay === 0 && !prefersReduced) {
      return; 
    }

    setUseNative(false);

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      return; // leave content visible, never animate
    }

    const el = ref.current;
    if (!el) return;

    // If it's already on screen at mount, don't hide it just to fade it back in.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      setShown(true);
      setArmed(true);
      return;
    }

    setArmed(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  if (useNative) {
    // If JS hasn't run yet, useNative is true by default.
    // On unsupported browsers, the `@supports` CSS won't apply, so it stays visible (fail-safe).
    // If it has a delay, JS will kick in, set useNative=false, and use the JS fallback.
    return (
      <div ref={ref} className={`reveal-native ${className}`}>
        {children}
      </div>
    );
  }

  const state = !armed || shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3";

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${state} ${className}`}
    >
      {children}
    </div>
  );
}
