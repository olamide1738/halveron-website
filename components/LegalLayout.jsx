import { Eyebrow } from "./Section";
import { legal } from "../lib/site";

export function LegalLayout({ eyebrow, title, intro, children }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FEFAF7] dark:bg-[#0B0F17] text-[#111111] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#111111]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2F6BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="serif-display mt-8 text-5xl leading-[1.04] tracking-tight md:text-7xl font-normal text-[#111111] dark:text-white">
              {title}
            </h1>

            {intro && (
              <p className="mt-6 max-w-2xl text-lg text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                {intro}
              </p>
            )}

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-[#2F6BFF] font-semibold">
              Last updated {legal.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FEFAF7] dark:bg-[#0B0F17] py-16 md:py-24">
        <div className="container-hal">
          <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] max-w-4xl p-8 md:p-12 space-y-10 shadow-sm">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function Clause({ title, children }) {
  return (
    <section className="border-b border-[#111111]/10 dark:border-white/10 pb-8 last:border-0 last:pb-0">
      <h2 className="serif-display text-2xl md:text-3xl font-normal text-[#111111] dark:text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-[#555555] dark:text-[#CCCCCC]">
        {children}
      </div>
    </section>
  );
}

export function ClauseList({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed text-[#555555] dark:text-[#CCCCCC]">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F6BFF]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
