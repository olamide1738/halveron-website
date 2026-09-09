import Link from "next/link";
import { Section, SectionHeading } from "../../components/Section";
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
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#0F172A]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
              <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
              <span>Full-Spectrum Digital Services</span>
            </div>

            <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] dark:text-white">
              Everything it takes to{" "}
              <span className="text-[#2F6BFF]">design, build &amp; scale</span> your digital product.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Six focused disciplines, one accountable team of senior makers. Engage us for a single service sprint or take your vision all the way from idea to market.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES DETAILED LIST */}
      <Section className="relative overflow-hidden py-24">
        <div className="space-y-8">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <article
                id={s.slug}
                className="agency-card p-8 md:p-12 shadow-card"
              >
                <div className="grid gap-10 lg:grid-cols-[1.1fr_1.3fr] lg:items-start">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                      <span className="font-mono text-sm font-bold text-[#2F6BFF]">
                        0{i + 1}
                      </span>
                      <span className="tag-pill">
                        Full Discipline
                      </span>
                    </div>

                    <h2 className="heading-display mt-6 text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white">
                      {s.title}
                    </h2>

                    <p className="mt-4 text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                      {s.summary}
                    </p>

                    <div className="mt-8">
                      <a
                        href={site.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-button"
                      >
                        <span>Inquire This Service</span>
                        <span className="text-[#2F6BFF]">↗</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-bold">
                        Deliverables &amp; Inclusions
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 rounded-xl border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 text-sm text-[#334155] dark:text-[#CBD5E1]"
                        >
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#2F6BFF]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. TECH TOOLKIT */}
      <Section paper className="py-20">
        <SectionHeading
          eyebrow="Our Technology Stack"
          title="Engineered with modern, proven developer tools."
          lead="We select standard, battle-tested tools with active ecosystems, fast load times, and low maintenance overhead."
        />
        <div className="mt-12">
          <TechToolkit />
        </div>
      </Section>

      {/* 4. COMPARISON MATRIX */}
      <ComparisonSection />

      {/* 5. CTA */}
      <CTASection
        title="Need one of these services for your company?"
        lead="Book a free 20-minute discovery call to discuss your exact timeline and scope."
      />
    </>
  );
}
