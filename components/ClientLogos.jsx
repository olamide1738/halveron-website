import { clients } from "../lib/site";
import { GapMotif } from "./PlaceholderCard";

// Clean line-style icons for client brand placeholders
const clientIcons = {
  Paystream: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ),
  "Northwind Labs": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  "Meridian Health": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "Kola & Co": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Vantage: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  "Orbit Retail": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
    </svg>
  ),
};

export function ClientLogos({ title = "Trusted by brands & visionary companies" }) {
  if (clients.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-[#111111]/20 dark:border-white/15 bg-white/40 dark:bg-white/5 px-8 py-10">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <GapMotif />
            <p className="mt-4 max-w-xl text-sm text-[#555555] dark:text-[#CCCCCC]">
              We name clients here once engagements complete and we have their permission — not before.
            </p>
          </div>
          <span className="shrink-0 tag-pill">
            First engagements underway
          </span>
        </div>
      </div>
    );
  }

  // Duplicate list for infinite smooth marquee
  const marqueeList = [...clients, ...clients];

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#2F6BFF]">
          {title}
        </h2>
        <span className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#777777] dark:text-[#AAAAAA]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
          Active Engagements
        </span>
      </div>

      {/* Infinite Swiss Marquee */}
      <div className="group relative mt-6 overflow-hidden rounded-md border border-[#111111]/15 dark:border-white/10 bg-white/50 dark:bg-white/5 py-4 shadow-2xs">
        {/* Left & Right Fade Gradients matching section background */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#F7F2EB] dark:from-[#12151D] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#F7F2EB] dark:from-[#12151D] to-transparent" />

        <div className="marquee-track flex w-max gap-4">
          {marqueeList.map((c, idx) => (
            <div
              key={`${c.name}-${idx}`}
              className="flex items-center gap-3.5 rounded-xs border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#121826] px-5 py-3 shadow-2xs transition-all duration-200 hover:border-[#2F6BFF]/40 shrink-0"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-[#2F6BFF]/10 text-[#2F6BFF]">
                {clientIcons[c.name] ?? (
                  <span className="font-mono font-bold text-xs">
                    {c.name.substring(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <h4 className="serif-display text-base font-normal text-[#111111] dark:text-white leading-tight">
                  {c.name}
                </h4>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#777777] dark:text-[#AAAAAA]">
                  {c.scope || c.industry}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
