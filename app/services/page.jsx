import Link from "next/link";
import { Section, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { Reveal } from "../../components/Reveal";
import { services, process, whyChooseUs, site } from "../../lib/site";

export const metadata = {
  title: "Services · Bespoke Web Design, Development, Branding & SEO",
  description:
    "Explore our core digital agency services: bespoke web design, custom web development, brand identity, e-commerce solutions, and SEO.",
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
              Bespoke digital solutions crafted to{" "}
              <span className="text-[#2F6BFF]">grow your business</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              We provide end-to-end web design, custom development, brand identity, e-commerce, and digital marketing services that turn your vision into high-performing reality.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES DETAILED CARDS */}
      <Section className="relative overflow-hidden py-24">
        <div className="space-y-10">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <article
                id={s.slug}
                className="agency-card p-8 md:p-12 shadow-card"
              >
                <div className="grid gap-10 lg:grid-cols-[1.15fr_1.25fr] lg:items-start">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                      <span className="font-mono text-sm font-bold text-[#2F6BFF]">
                        0{i + 1}
                      </span>
                      <span className="tag-pill">
                        Core Service
                      </span>
                    </div>

                    <h2 className="heading-display mt-6 text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white">
                      {s.title}
                    </h2>

                    <p className="mt-4 text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                      {s.detail}
                    </p>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="link-button"
                      >
                        <span>Inquire About This Service</span>
                        <span className="text-[#2F6BFF]">↗</span>
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-bold">
                        What We Deliver
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

      {/* 3. OUR WORKING PROCESS */}
      <Section paper className="py-24">
        <SectionHeading
          eyebrow="Our Process"
          title="How we bring your project to life."
          lead="A streamlined, collaborative process that ensures your project is delivered on schedule, on budget, and to the highest standard."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, idx) => (
            <Reveal key={p.step} delay={idx * 60}>
              <div className="agency-card flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-3">
                    <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                      STEP {p.step}
                    </span>
                    <span className="tag-pill">{p.duration}</span>
                  </div>

                  <h3 className="heading-display mt-5 text-xl font-bold text-[#0F172A] dark:text-white">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. WHY CHOOSE US */}
      <Section className="py-24">
        <SectionHeading
          eyebrow="The Halveron Difference"
          title="Why companies choose to partner with us."
          lead="We combine design excellence, technical rigor, and personal client care to deliver outstanding digital outcomes."
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

      {/* 5. CTA */}
      <CTASection
        title="Ready to discuss your project requirements?"
        lead="Contact our friendly team today for a free discovery consultation and tailored quotation."
      />
    </>
  );
}
