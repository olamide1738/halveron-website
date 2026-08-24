"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      const pct = Math.min((scrollTop / docHeight) * 100, 100);
      setProgress(pct);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-[3px] transition-[width] duration-75 ease-out pointer-events-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #2F6BFF 0%, #7FA4FF 50%, #2F6BFF 100%)",
        boxShadow: progress > 0 ? "0 0 10px rgba(47,107,255,0.6)" : "none",
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
