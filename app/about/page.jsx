import Link from "next/link";
import { Section, Eyebrow, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { TeamGrid } from "../../components/TeamGrid";
import { ComparisonSection } from "../../components/ComparisonSection";
import { Reveal } from "../../components/Reveal";
import { differentiators, site } from "../../lib/site";

export const metadata = {
  title: "About Us — Halveron Digital Product Studio",
  description:
    "Halveron is a full-service digital product studio. We unite strategy, UI/UX design, mobile apps, SaaS engineering, and brand systems under one roof.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FEFAF7] dark:bg-[#0E1117] text-[#111111] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#111111]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF512F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF512F]" />
              <span>03 / About Halveron Studio</span>
            </div>

            <h1 className="serif-display mt-8 text-5xl leading-[1.04] tracking-tight md:text-7xl lg:text-8xl text-[#111111] dark:text-white">
              We turn your ideas into{" "}
              <span className="serif-italic text-[#FF512F]">finished, working</span> products.
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl font-light text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
              Halveron is an independent digital product studio and agency. We unite strategy, visual design, mobile apps, websites, and branding under one roof — taking you from napkin sketch to a successful market launch.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE HALVERON STORY BENTO GRID */}
      <Section paper className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Why We Exist"
          title="One roof, one accountable studio."
          lead="Great business ideas shouldn't get lost between disconnected freelancers and slow development agencies."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal delay={0}>
            <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#161922] p-8 flex h-full flex-col justify-between shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-[#FF512F]">
                  01 / The Challenge
                </span>
                <h3 className="serif-display mt-5 text-2xl font-normal text-[#111111] dark:text-white">
                  The Disconnected Vendor Problem
                </h3>
                <p className="mt-4 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                  Most projects get split between a freelance designer, an offshore coder, and a separate branding agency. Details get lost in translation, quality drops, and nobody takes full responsibility.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="rounded-md border border-[#FF512F] bg-white dark:bg-[#161922] p-8 flex h-full flex-col justify-between shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-[#FF512F]">
                  02 / The Solution
                </span>
                <h3 className="serif-display mt-5 text-2xl font-normal text-[#111111] dark:text-white">
                  The All-in-One Studio Model
                </h3>
                <p className="mt-4 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                  Halveron handles everything together: planning, visual design, custom development, testing, and launch. One friendly point of contact, one shared schedule, and senior accountability.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#161922] p-8 flex h-full flex-col justify-between shadow-sm">
              <div>
                <span className="font-mono text-xs font-bold text-[#FF512F]">
                  03 / The Advantage
                </span>
                <h3 className="serif-display mt-5 text-2xl font-normal text-[#111111] dark:text-white">
                  Global Quality &amp; Great Value
                </h3>
                <p className="mt-4 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                  Based in Lagos (UTC+1), we provide seamless real-time communication with Europe, the UK, and US mornings — offering world-class design at up to 50% better value.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. CORE PRINCIPLES */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Principles we don't compromise on."
          lead="Building products requires discipline, clear communication, and unyielding code quality."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, idx) => (
            <Reveal key={d.title} delay={idx * 60}>
              <div className="swiss-card flex h-full flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#FF512F]">
                    0{idx + 1}
                  </span>
                  <h3 className="serif-display mt-4 text-2xl font-normal text-[#111111] dark:text-white">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>


      {/* 5. TEAM GRID */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Who You'll Work With"
          title="The senior team, not the pitch team."
          lead="You meet the engineers and designers who do the work at kickoff, and they stay on your product."
        />
        <div className="mt-12">
          <TeamGrid />
        </div>
      </Section>

      {/* 6. COMPARISON MATRIX */}
      <ComparisonSection />

      {/* 7. CTA BANNER */}
      <CTASection title="Let's build something worth owning." />
    </>
  );
}
