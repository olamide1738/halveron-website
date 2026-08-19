import Link from "next/link";
import { Section, Eyebrow, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { TechToolkit } from "../../components/TechToolkit";
import { ComparisonSection } from "../../components/ComparisonSection";
import { Reveal } from "../../components/Reveal";
import { services, process, site } from "../../lib/site";

export const metadata = {
  title: "Services · Web Design, Mobile Apps, SaaS & MVP Builds",
  description:
    "Custom web design, mobile apps, SaaS engineering, fast MVP launches, and branding systems, engineered under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FEFAF7] dark:bg-[#0B0F17] text-[#111111] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#111111]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2F6BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
              <span>01 / Core Services &amp; Capabilities</span>
            </div>

            <h1 className="serif-display mt-8 text-5xl leading-[1.04] tracking-tight md:text-7xl lg:text-8xl text-[#111111] dark:text-white">
              Everything it takes to{" "}
              <span className="serif-italic text-[#2F6BFF]">design, build</span> &amp; launch your product.
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl font-light text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
              Six focused disciplines, one accountable team of senior creators. Engage us for a single service sprint or take your vision all the way from idea to scale.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <Section className="relative overflow-hidden py-24">
        <div className="space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <article
                id={s.slug}
                className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-8 md:p-12 shadow-sm transition-all duration-300 hover:border-[#2F6BFF]/50"
              >
                <div className="grid gap-10 lg:grid-cols-[1.1fr_1.3fr] lg:items-start">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-4">
                      <span className="font-mono text-sm font-bold text-[#2F6BFF]">
                        0{i + 1}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                        Full Discipline
                      </span>
                    </div>

                    <h2 className="serif-display mt-6 text-3xl md:text-4xl font-normal text-[#111111] dark:text-white">
                      {s.title}
                    </h2>

                    <p className="mt-4 text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                      {s.summary}
                    </p>

                    <div className="mt-8">
                      <a
                        href={site.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-button"
                      >
                        Inquire This Service ↗
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="border-b border-[#111111]/10 dark:border-white/10 pb-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#888888]">
                        Approach &amp; Detail
                      </span>
                    </div>

                    <p className="mt-6 text-sm md:text-base text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
                      {s.detail}
                    </p>

                    <div className="mt-8">
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#888888]">
                        Key Deliverables
                      </span>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {s.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 rounded-xs border border-[#111111]/10 dark:border-white/10 bg-[#FEFAF7] dark:bg-white/5 px-3.5 py-2.5 font-mono text-xs text-[#111111] dark:text-white"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F6BFF]" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. TOOLKIT */}
      <Section paper className="border-t border-[#111111]/10 dark:border-white/10">
        <TechToolkit />
      </Section>

      {/* 4. PROCESS */}
      <Section className="relative overflow-hidden">
        <SectionHeading
          eyebrow="Our Process"
          title="From first idea to official launch."
          lead="We run an agile, transparent development schedule with open staging previews from week one."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 60}>
              <div className="swiss-card flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-3">
                    <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                      STEP 0{i + 1}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888]">
                      {p.duration}
                    </span>
                  </div>

                  <h3 className="serif-display mt-5 text-2xl font-normal text-[#111111] dark:text-white">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. COMPARISON */}
      <ComparisonSection />

      {/* 6. CTA */}
      <CTASection
        title="Ready to discuss your project scope?"
        lead="Book a short 20-minute discovery call to review requirements, feasibility, and transparent fixed pricing."
      />
    </>
  );
}
