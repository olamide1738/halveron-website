import { Eyebrow } from "./Section";
import { legal } from "../lib/site";

export function LegalLayout({ eyebrow, title, intro, children }) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-dotgrid-dark opacity-60"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 glow-cobalt"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-cobalt/20 blur-3xl animate-fluid-blob"
          aria-hidden="true"
        />

        <div className="container-hal relative z-10">
          <Eyebrow className="text-cobalt-light">{eyebrow}</Eyebrow>
          <h1 className="h-display mt-3 text-4xl leading-[1.1] text-white md:text-5xl font-bold">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg text-[#B9C1D0] leading-relaxed">{intro}</p>
          )}
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-cobalt dark:text-cobalt-light font-semibold">
            Last updated {legal.lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-paper dark:bg-[#0E131F] py-16 md:py-24">
        <div className="container-hal">
          <div className="glass-card-light max-w-4xl rounded-3xl p-8 md:p-12 space-y-10">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function Clause({ title, children }) {
  return (
    <section className="border-b border-line/60 dark:border-white/10 pb-8 last:border-0 last:pb-0">
      <h2 className="h-display text-2xl font-bold text-ink dark:text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-slate dark:text-[#B9C1D0]">
        {children}
      </div>
    </section>
  );
}

export function ClauseList({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed text-slate dark:text-[#B9C1D0]">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt dark:bg-cobalt-light" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
