import Link from "next/link";
import { Section, SectionHeading } from "../components/Section";
import { CTASection } from "../components/CTASection";
import { ClientLogos } from "../components/ClientLogos";
import { Testimonials } from "../components/Testimonials";
import { Reveal } from "../components/Reveal";
import { PageLoader } from "../components/PageLoader";
import { FeaturedShowcase } from "../components/FeaturedShowcase";
import { FAQSection } from "../components/FAQSection";
import { HeroBackground } from "../components/HeroBackground";
import { HeroVisual } from "../components/HeroVisual";
import {
  services,
  process,
  whyChooseUs,
  faqs,
  site,
} from "../lib/site";

// Clean SVG icons for the 6 core services
const serviceIcons = {
  "web-design": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "web-development": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "brand-identity": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  ecommerce: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  seo: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <polyline points="11 8 11 12 14 14" />
    </svg>
  ),
  "hosting-support": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <>
      <PageLoader />

      {/* 1. HERO SECTION (OCTAVE AGENCY STYLE) */}
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-24 md:pt-36 md:pb-36 transition-colors duration-300">
        <HeroBackground />

        <div className="container-hal relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            {/* Left Column: Bold Headline & Actions */}
            <div>
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
                <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
                <span>Creative Digital &amp; Web Design Agency</span>
              </div>

              {/* Bold Headline */}
              <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[4rem] text-[#0F172A] dark:text-white">
                We create visually stunning,{" "}
                <span className="text-[#2F6BFF]">high-performing websites</span>{" "}
                that elevate your brand.
              </h1>

              {/* Subheading */}
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#475569] dark:text-[#94A3B8]">
                Halveron is a full-service creative digital agency. We specialize in bespoke web design, custom web development, brand identity, and e-commerce solutions engineered to achieve your business goals.
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="link-button-solid text-sm py-3.5 px-7"
                >
                  <span>Start Your Project</span>
                  <span className="text-white/80">↗</span>
                </Link>
                <Link href="/work" className="link-button text-sm py-3.5 px-7">
                  <span>View Our Work</span>
                  <span className="text-[#2F6BFF]">↓</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Showcase Frame */}
            <div className="relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGOS MARQUEE (FULL WIDTH) */}
      <section className="relative w-full border-y border-[#0F172A]/10 dark:border-white/10 bg-[#F4F4F8] dark:bg-[#0E131F] py-12 md:py-16 overflow-hidden transition-colors duration-300">
        <ClientLogos title="Trusted by ambitious brands & visionary companies" />
      </section>

      {/* 3. ABOUT STATEMENT BANNER */}
      <section className="py-20 md:py-28 border-b border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#0E131F]">
        <div className="container-hal max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF] mb-6">
            <span>About Halveron Agency</span>
          </div>
          <h2 className="heading-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] text-[#0F172A] dark:text-white">
            We believe that a well-designed website is more than just an online presence — it is a{" "}
            <span className="text-[#2F6BFF]">powerful driver for your business growth</span>.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Combining contemporary design, intuitive user experience, and robust engineering to create websites and digital assets that captivate audiences and deliver measurable commercial results.
          </p>
          <div className="mt-8">
            <Link href="/about" className="link-button">
              <span>Read More About Us</span>
              <span className="text-[#2F6BFF]">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES GRID (OCTAVE AGENCY "WHAT WE DO") */}
      <Section className="relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="What we do best."
            lead="From bespoke website design and full-stack development to brand identity and organic SEO, we provide complete digital solutions under one roof."
          />
          <Link href="/services" className="link-button shrink-0">
            View All Services ↗
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.slug} delay={idx * 60}>
              <Link
                href={`/services#${s.slug}`}
                className="agency-card group flex h-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F6BFF]/10 text-[#2F6BFF] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2F6BFF] group-hover:text-white">
                      {serviceIcons[s.slug] || serviceIcons["web-design"]}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#2F6BFF] group-hover:translate-x-0.5 transition-transform">
                      0{idx + 1} ↗
                    </span>
                  </div>

                  <h3 className="heading-display mt-5 text-xl font-bold text-[#0F172A] dark:text-white group-hover:text-[#2F6BFF] transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {s.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0F172A]/10 dark:border-white/10">
                  <span className="font-mono text-xs font-bold text-[#2F6BFF] group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. FEATURED WORK / PORTFOLIO SHOWCASE */}
      <FeaturedShowcase />

      {/* 6. WHY CHOOSE US / OUR APPROACH */}
      <Section paper className="relative overflow-hidden">
        <SectionHeading
          eyebrow="Why Work With Us"
          title="Designed for performance, engineered for results."
          lead="We combine creativity with technical precision to deliver websites that exceed expectations and drive sustainable business growth."
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

      {/* 7. CLIENT TESTIMONIALS */}
      <Testimonials
        eyebrow="Client Reviews"
        title="What our clients say about us."
        lead="Read honest feedback from the business leaders, founders, and directors who trust us with their digital presence."
      />

      {/* 8. FAQ SECTION */}
      <FAQSection />

      {/* 9. FINAL CTA */}
      <CTASection
        title="Ready to elevate your brand online?"
        lead="Contact our friendly team today for a free discovery call and quote tailored to your business."
      />
    </>
  );
}
