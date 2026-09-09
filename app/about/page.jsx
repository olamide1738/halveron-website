import Link from "next/link";
import { Section, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { TeamGrid } from "../../components/TeamGrid";
import { ComparisonSection } from "../../components/ComparisonSection";
import { Reveal } from "../../components/Reveal";
import { differentiators, site } from "../../lib/site";

export const metadata = {
  title: "About Us · Halveron Digital Product Studio",
  description:
    "Halveron is a full-service digital product studio. We unite strategy, UI/UX design, mobile apps, SaaS engineering, and brand systems under one roof.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#0F172A]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
              <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
              <span>About Halveron Studio</span>
            </div>

            <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] dark:text-white">
              We turn your ideas into{" "}
              <span className="text-[#2F6BFF]">high-performing, finished</span> digital products.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Halveron is an independent digital product studio and agency. We unite strategy, visual design, mobile apps, custom websites, and branding under one roof, taking you from napkin sketch to a successful market launch.
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
            <div className="agency-card flex h-full flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                  01 / The Challenge
                </span>
                <h3 className="heading-display mt-4 text-xl font-bold text-[#0F172A] dark:text-white">
                  The Disconnected Vendor Problem
                </h3>
                <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  Most projects get split between a freelance designer, an offshore coder, and a separate branding agency. Details get lost in translation, quality drops, and nobody takes full responsibility.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="agency-card flex h-full flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                  02 / The Halveron Solution
                </span>
                <h3 className="heading-display mt-4 text-xl font-bold text-[#0F172A] dark:text-white">
                  United Senior Makers
                </h3>
                <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  We united senior brand designers, product strategists, and full-stack software engineers under one roof. You speak directly to the creators building your product.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="agency-card flex h-full flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                  03 / The Commercial Result
                </span>
                <h3 className="heading-display mt-4 text-xl font-bold text-[#0F172A] dark:text-white">
                  Fast, Beautiful &amp; High-Converting
                </h3>
                <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  Products launched in weeks instead of quarters, with 99+ speed scores, high conversion rates, and 100% intellectual property ownership from day one.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. CORE PRINCIPLES */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Our Principles"
          title="How we operate every single day."
          lead="Four fundamental operating tenets that guide every design file, line of code, and client interaction."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, idx) => (
            <Reveal key={d.title} delay={idx * 60}>
              <div className="agency-card flex h-full flex-col justify-between">
                <div>
                  <span className="font-display text-3xl font-extrabold text-[#2F6BFF]">
                    0{idx + 1}
                  </span>
                  <h3 className="heading-display mt-4 text-lg font-bold text-[#0F172A] dark:text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. COMPARISON MATRIX */}
      <ComparisonSection />

      {/* 5. TEAM */}
      <Section paper className="py-24">
        <SectionHeading
          eyebrow="Studio Leadership"
          title="The practitioners behind your product."
          lead="Direct access to experienced makers with backgrounds in high-growth startups and global product agencies."
        />
        <div className="mt-14">
          <TeamGrid />
        </div>
      </Section>

      {/* 6. CTA */}
      <CTASection
        title="Ready to discuss your project?"
        lead="Book a free 20-minute strategy call with our principal engineer."
      />
    </>
  );
}
