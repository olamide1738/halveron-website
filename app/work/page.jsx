import { Section } from "../../components/Section";
import { WorkGrid } from "../../components/WorkGrid";
import { CTASection } from "../../components/CTASection";

export const metadata = {
  title: "Our Work · Case Studies & Client Projects",
  description:
    "Explore our portfolio of bespoke web designs, custom e-commerce stores, and digital product platforms shipped for leading brands.",
};

export default function WorkPage() {
  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#0F172A]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
              <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
              <span>Portfolio &amp; Client Case Studies</span>
            </div>

            <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] dark:text-white">
              Selected Projects &amp;{" "}
              <span className="text-[#2F6BFF]">Case Studies</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Explore our portfolio of bespoke websites, custom e-commerce stores, and digital platforms engineered to elevate brands and drive commercial growth.
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
        title="Have a project you'd like to discuss?"
        lead="Let's build something exceptional for your brand. Contact our team today."
      />
    </>
  );
}
