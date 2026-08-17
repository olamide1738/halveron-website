import { Section, SectionHeading } from "./Section";
import { stats } from "../lib/site";

// Credibility stat band. Reads from `stats` in lib/site.js so the numbers live
// with the rest of the copy rather than being buried in page markup.
export function StatBand({
  eyebrow = "Lagos → Global",
  title = "A rare combination of talent, timezone, and value.",
}) {
  return (
    <Section dark className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cobalt/20 blur-3xl animate-fluid-blob"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <SectionHeading dark eyebrow={eyebrow} title={title} />
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="glass-card-dark rounded-2xl p-8 flex flex-col justify-between">
              <dt className="font-display text-5xl font-bold tracking-tight text-cobalt-light drop-shadow-sm">
                {s.value}
              </dt>
              <dd className="mt-4 text-base text-[#B9C1D0] leading-relaxed">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
