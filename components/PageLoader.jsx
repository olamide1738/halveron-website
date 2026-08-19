"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Unmount completely from React tree after CSS animation finishes
    const timer = setTimeout(() => {
      setShow(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink animate-pageLoaderFadeOut pointer-events-none motion-reduce:hidden"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Measured Gap Animation Motif */}
        <div className="relative flex h-12 w-64 items-center justify-center">
          {/* Left Bar */}
          <div className="h-2 rounded-xs bg-white animate-gapLeftBar" />

          {/* Central Cobalt Block */}
          <div className="z-10 h-3 w-4 rounded-xs bg-cobalt animate-gapCobalt" />

          {/* Right Bar */}
          <div className="h-2 rounded-xs bg-white animate-gapRightBar" />
        </div>

        {/* Brand wordmark reveal */}
        <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#7FA4FF] animate-wordmarkFadeIn">
          HALVERON
        </span>
      </div>
    </div>
  );
}
