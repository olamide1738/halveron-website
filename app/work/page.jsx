import { Section } from "../../components/Section";
import { WorkGrid } from "../../components/WorkGrid";
import { CTASection } from "../../components/CTASection";

export const metadata = {
  title: "Selected Work — Halveron Digital Product Studio",
  description:
    "Explore high-fidelity visual case studies of websites, mobile apps, and SaaS platforms shipped by Halveron.",
};

export default function WorkPage() {
  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FEFAF7] dark:bg-[#0B0F17] text-[#111111] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#111111]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2F6BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
              <span>02 / Selected Client Work</span>
            </div>

            <h1 className="serif-display mt-8 text-5xl leading-[1.04] tracking-tight md:text-7xl lg:text-8xl text-[#111111] dark:text-white">
              Selected Projects &amp;{" "}
              <span className="serif-italic text-[#2F6BFF]">Case Studies.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl font-light text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
              Explore real websites, mobile applications, and software portals designed and shipped with precision for visionary founders worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VISUAL PROJECTS GRID */}
      <Section className="relative overflow-hidden py-24">
        <WorkGrid />
      </Section>

      {/* 3. CTA */}
      <CTASection
        title="Have a project in mind?"
        lead="Let's build something your customers will love. Book a discovery call today."
      />
    </>
  );
}
