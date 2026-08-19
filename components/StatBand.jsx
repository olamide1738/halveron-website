import { Section, SectionHeading } from "./Section";
import { stats } from "../lib/site";

export function StatBand({
  eyebrow = "Lagos → Global",
  title = "A rare combination of talent, timezone, and value.",
}) {
  return (
    <Section dark className="relative overflow-hidden">
      <div className="relative z-10">
        <SectionHeading dark eyebrow={eyebrow} title={title} />
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="rounded-md border border-white/15 bg-white/5 p-8 flex flex-col justify-between">
              <dt className="serif-display text-5xl font-bold tracking-tight text-[#2F6BFF]">
                {s.value}
              </dt>
              <dd className="mt-4 font-mono text-xs uppercase tracking-wider text-[#CCCCCC] leading-relaxed">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
