import Link from "next/link";
import { Section, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { TeamGrid } from "../../components/TeamGrid";
import { Reveal } from "../../components/Reveal";
import { whyChooseUs, site } from "../../lib/site";

export const metadata = {
  title: "About Us · Creative Digital & Web Design Agency",
  description:
    "Halveron is a creative digital agency specializing in bespoke web design, custom development, and brand identities that achieve business goals.",
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
              <span>About Halveron Agency</span>
            </div>

            <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] dark:text-white">
              We are a creative agency dedicated to{" "}
              <span className="text-[#2F6BFF]">digital craft and business results</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              We believe a well-designed website is more than just an online presence — it is a powerful driver for your commercial success. We partner with ambitious brands to create digital experiences that truly stand out.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE HALVERON PHILOSOPHY BENTO */}
      <Section paper className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Our Approach"
          title="Contemporary design meets high-performance engineering."
          lead="We combine aesthetic elegance with technical precision to build digital solutions that captivate visitors and deliver measurable growth."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Reveal delay={0}>
            <div className="agency-card flex h-full flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                  01 / Client-Centric Focus
                </span>
                <h3 className="heading-display mt-4 text-xl font-bold text-[#0F172A] dark:text-white">
                  Tailored to Your Goals
                </h3>
                <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  We don't believe in one-size-fits-all solutions. Every website and digital asset we build is custom-designed around your unique market positioning, target audience, and business objectives.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="agency-card flex h-full flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                  02 / Mobile-Led &amp; Accessible
                </span>
                <h3 className="heading-display mt-4 text-xl font-bold text-[#0F172A] dark:text-white">
                  Flawless on Every Screen
                </h3>
                <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  With over 60% of modern web traffic happening on smartphones, we design with a mobile-first mindset. Your site delivers seamless interaction, crisp typography, and instant load speeds everywhere.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="agency-card flex h-full flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                  03 / End-to-End Partnership
                </span>
                <h3 className="heading-display mt-4 text-xl font-bold text-[#0F172A] dark:text-white">
                  From Concept to Long-Term Care
                </h3>
                <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  We guide you through every phase: from brand discovery and interactive prototyping to development, launch, SEO optimization, and ongoing managed hosting and technical support.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. WHY CHOOSE US */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What sets Halveron apart."
          lead="Four fundamental pillars that define our working relationships with founders and marketing directors worldwide."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w, idx) => (
            <Reveal key={w.title} delay={idx * 60}>
              <div className="agency-card flex h-full flex-col justify-between">
                <div>
                  <span className="font-display text-3xl font-extrabold text-[#2F6BFF]">
                    0{idx + 1}
                  </span>
                  <h3 className="heading-display mt-4 text-lg font-bold text-[#0F172A] dark:text-white">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. TEAM LEADERSHIP */}
      <Section paper className="py-24">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the team behind Halveron."
          lead="Senior creative designers, full-stack engineers, and digital strategists with a proven track record."
        />
        <div className="mt-14">
          <TeamGrid />
        </div>
      </Section>

      {/* 5. CTA */}
      <CTASection
        title="Want to work with our team?"
        lead="Contact us today for a free discovery conversation and let's explore how we can help your brand grow."
      />
    </>
  );
}
