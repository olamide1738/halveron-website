import { services } from "../lib/site";

// Scrolling keyword band — the Ritovex "Web Design · UI/UX · …" marquee, in
// Halveron's voice. Pure CSS animation (see .marquee-track in globals.css),
// paused entirely under prefers-reduced-motion, and aria-hidden because it is
// decorative: the same capabilities are listed as real text elsewhere.
//
// The list is duplicated once so the track can translate a full -50% and loop
// seamlessly. Word count comes from `services`, so it stays in sync with what
// we actually offer.
const words = services.map((s) => s.title);

export function Marquee() {
  const loop = [...words, ...words];

  return (
    <div
      className="group relative flex overflow-hidden border-y border-ink-line bg-ink py-6 text-white"
      aria-hidden="true"
    >
      {/* soft edge fades so words appear and vanish rather than clipping */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

      <ul className="marquee-track flex shrink-0 items-center gap-0 whitespace-nowrap">
        {loop.map((word, i) => (
          <li key={i} className="flex items-center">
            <span className="h-display px-8 text-2xl text-[#B9C1D0] md:text-3xl">
              {word}
            </span>
            <span className="h-2 w-2.5 rounded-sm bg-cobalt" />
          </li>
        ))}
      </ul>
    </div>
  );
}
