"use client";

import { useEffect, useState } from "react";
import { sound } from "../lib/sound";

export function SoundToggle() {
  const [muted, setMuted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    sound.init();
    setMuted(sound.isMuted());
  }, []);

  const toggle = () => {
    const next = !muted;
    setMuted(next);
    sound.setMuted(next);
    if (!next) {
      sound.playClick();
    }
  };

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xs border border-[#111111]/20 dark:border-white/20 bg-transparent" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={muted ? "Enable audio effects" : "Mute audio effects"}
      title={muted ? "Enable audio effects" : "Mute audio effects"}
      className="group relative flex h-9 w-9 items-center justify-center rounded-xs border border-[#111111]/20 dark:border-white/20 hover:border-[#2F6BFF] dark:hover:border-[#2F6BFF] bg-transparent text-[#111111] dark:text-white transition-all duration-150 cursor-pointer"
    >
      {muted ? (
        /* Muted Speaker Icon */
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#888888]"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        /* Active Speaker Icon with Soundwaves */
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#2F6BFF] transition-transform duration-200 group-hover:scale-110"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      )}
    </button>
  );
}
