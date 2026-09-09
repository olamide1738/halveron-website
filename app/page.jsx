import Link from "next/link";
import { Section, Eyebrow, SectionHeading } from "../components/Section";
import { CTASection } from "../components/CTASection";
import { ClientLogos } from "../components/ClientLogos";
import { Testimonials } from "../components/Testimonials";
import { Reveal } from "../components/Reveal";
import { PageLoader } from "../components/PageLoader";
import { FeaturedShowcase } from "../components/FeaturedShowcase";
import { TechToolkit } from "../components/TechToolkit";
import { ComparisonSection } from "../components/ComparisonSection";
import { HeroBackground } from "../components/HeroBackground";
import { HeroVisual } from "../components/HeroVisual";
import {
  services,
  process,
  engagementModels,
  promises,
  faqs,
  site,
} from "../lib/site";

// Custom SVG icons for services bento cards
const serviceIcons = {
  web: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  mobile: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
    </svg>
  ),
  saas: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  mvp: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  branding: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  "ui-ux": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20M12 2v20" />
      <rect x="5" y="5" width="14" height="14" rx="2" />
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            {/* Left Column: Bold Headline & Actions */}
            <div>
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
                <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
                <span>Bespoke Web Design &amp; Digital Product Studio</span>
              </div>

              {/* Bold Grotesque Headline */}
              <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[4rem] text-[#0F172A] dark:text-white">
                We design &amp; build{" "}
                <span className="text-[#2F6BFF]">exceptional digital products</span>{" "}
                that scale your business.
              </h1>

              {/* Lead Paragraph */}
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#475569] dark:text-[#94A3B8]">
                From bespoke high-converting websites and mobile applications to enterprise SaaS portals. One senior expert studio engineering products with speed, craft, and precision.
              </p>

              {/* Dual Action Pill Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button-solid text-sm py-3.5 px-7"
                >
                  <span>Start a Project</span>
                  <span className="text-white/80">↗</span>
                </a>
                <Link href="/work" className="link-button text-sm py-3.5 px-7">
                  <span>Explore Selected Work</span>
                  <span className="text-[#2F6BFF]">↓</span>
                </Link>
              </div>

              {/* Trust & Proof Ribbon */}
              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#0F172A]/10 dark:border-white/10 pt-6 font-mono text-xs text-[#64748B] dark:text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-[#2F6BFF]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-bold text-[#0F172A] dark:text-white">5.0 Star Rating</span>
                </div>
                <span>·</span>
                <div>
                  <span className="font-bold text-[#0F172A] dark:text-white">Senior Makers</span> Only
                </div>
                <span>·</span>
                <div>
                  <span className="font-bold text-[#0F172A] dark:text-white">Week 1</span> Live Staging
                </div>
                <span>·</span>
                <div>
                  <span className="font-bold text-[#0F172A] dark:text-white">100% IP</span> Yours
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Staging Card */}
            <div className="relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGOS MARQUEE */}
      <Section paper className="relative border-y border-[#0F172A]/10 dark:border-white/10 py-14">
        <ClientLogos title="Trusted by ambitious brands & visionary founders worldwide" />
      </Section>

      {/* 3. CORE SERVICES BENTO GRID (OCTAVE AGENCY "WHAT WE DO") */}
      <Section className="relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-spectrum digital product engineering."
            lead="Six core disciplines under one roof. We take your project from initial research and interactive design to custom code and live market launch."
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
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2F6BFF]/10 text-[#2F6BFF] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2F6BFF] group-hover:text-white">
                      {serviceIcons[s.slug] || serviceIcons.web}
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
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#2F6BFF] font-semibold">
                    <span>Key Inclusions:</span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-[#475569] dark:text-[#CBD5E1] line-clamp-1">
                    {s.deliverables.slice(0, 2).join(" · ")}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Dynamic Tech Toolkit */}
        <div className="mt-20 border-t border-[#0F172A]/10 dark:border-white/10 pt-16">
          <TechToolkit />
        </div>
      </Section>

      {/* 4. SELECTED WORK SHOWCASE */}
      <FeaturedShowcase />

      {/* 5. PROCESS ROADMAP */}
      <Section className="relative overflow-hidden">
        <SectionHeading
          eyebrow="Our Process"
          title="A transparent roadmap with every step visible."
          lead="From initial strategy and clickable prototypes to clean code development and live deployment, you always know what is happening."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 60}>
              <div className="agency-card flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-3">
                    <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                      STEP 0{i + 1}
                    </span>
                    <span className="tag-pill">
                      {p.duration}
                    </span>
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

      {/* 6. CONTRACT PROMISES & GUARANTEES */}
      <section className="relative overflow-hidden bg-[#070A10] text-white py-24 md:py-32">
        <div className="container-hal relative z-10">
          <SectionHeading
            dark
            eyebrow="Contract Guarantees"
            title="Real commitments written into our agreement."
            lead="Every one of these promises is legally bound into our client contract. Specific metrics you can verify beat vague marketing claims."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 70}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex h-full flex-col justify-between transition-all hover:border-[#2F6BFF]/60 hover:bg-white/[0.08]">
                  <div>
                    <span className="font-display text-4xl md:text-5xl font-extrabold text-[#2F6BFF]">
                      {p.stat}
                    </span>
                    <h3 className="heading-display mt-4 text-lg font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <Testimonials
        eyebrow="Client Testimonials"
        title="What founders & leaders say about working with us."
      />

      {/* 8. COMPARISON MATRIX */}
      <ComparisonSection />

      {/* 9. WAYS TO COLLABORATE */}
      <Section paper className="relative overflow-hidden">
        <SectionHeading
          eyebrow="Ways to Collaborate"
          title="Clear, transparent engagement models."
          lead="Whether you need a strategic planning sprint, a complete product build from concept to launch, or an ongoing team, we offer predictable fixed pricing."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((m, idx) => (
            <Reveal key={m.name} delay={idx * 80}>
              <div
                className={`rounded-2xl border p-8 flex h-full flex-col justify-between transition-all duration-300 ${
                  m.featured
                    ? "border-[#2F6BFF] bg-white dark:bg-[#121826] shadow-glow ring-1 ring-[#2F6BFF]"
                    : "border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#121826] shadow-card"
                }`}
              >
                <div>
                  {m.featured && (
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/40 bg-[#2F6BFF]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#2F6BFF]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] animate-pulse" />
                      Most Popular
                    </span>
                  )}

                  <h3 className="heading-display text-2xl font-bold text-[#0F172A] dark:text-white">
                    {m.name}
                  </h3>

                  <p className="mt-2 font-mono text-sm font-bold text-[#2F6BFF]">
                    {m.price}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#64748B] dark:text-[#94A3B8]">
                    {m.forWhom}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-[#0F172A]/10 dark:border-white/10 pt-6">
                    {m.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-mono text-xs text-[#334155] dark:text-[#CBD5E1]">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F6BFF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center block ${
                      m.featured ? "link-button-solid" : "link-button"
                    }`}
                  >
                    Select Model ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 10. FAQ SECTION */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>Common Inquiries</Eyebrow>
            <h2 className="heading-display mt-2 text-3xl font-extrabold leading-tight md:text-4xl text-[#0F172A] dark:text-white">
              Questions we hear often.
            </h2>
            <p className="mt-4 text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Have a specific question about your timeline or budget? A brief discovery call is the quickest way to get direct answers.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="link-button">
                Ask Us Directly ↗
              </Link>
            </div>
          </div>

          <div className="divide-y divide-[#0F172A]/10 dark:divide-white/10 border-t border-[#0F172A]/10 dark:border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
                  <span className="heading-display text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#2F6BFF] transition-colors">
                    {f.q}
                  </span>
                  <span className="font-mono text-lg text-[#2F6BFF] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-prose text-sm md:text-base leading-relaxed text-[#64748B] dark:text-[#94A3B8]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* 11. FINAL CTA */}
      <CTASection
        title="Ready to build a digital product that stands out?"
        lead="Tell us what you're planning. We'll share our honest feedback, timeline estimates, and exact fixed pricing."
      />
    </>
  );
}
