import Link from "next/link";
import { Button } from "../components/Button";
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
import {
  services,
  process,
  engagementModels,
  promises,
  faqs,
  site,
} from "../lib/site";

export default function HomePage() {
  return (
    <>
      <PageLoader />

      {/* 1. HERO SECTION IN SWISS EDITORIAL STYLE */}
      <section className="relative overflow-hidden bg-[#FEFAF7] dark:bg-[#0B0F17] text-[#111111] dark:text-white pt-24 pb-28 md:pt-36 md:pb-40 transition-colors duration-300">
        <HeroBackground />
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            {/* Top Swiss Tag */}
            <div className="inline-flex items-center gap-2 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#111111] dark:text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] animate-pulse" />
              <span>01 / Digital Product Studio &amp; Web Agency</span>
            </div>

            {/* Giant Editorial Serif Headline */}
            <h1 className="serif-display mt-8 text-5xl leading-[1.04] tracking-tight md:text-7xl lg:text-8xl text-[#111111] dark:text-white">
              Bring your idea to us,{" "}
              <span className="serif-italic text-[#2F6BFF]">we design &amp; build</span>{" "}
              everything for you.
            </h1>

            {/* Indented Editorial Lead Paragraph */}
            <p className="mt-8 max-w-2xl text-lg md:text-xl font-light text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
              One accountable senior studio taking you from initial concept to market launch. Custom websites, mobile apps, software portals, and brand systems, engineered with Swiss precision under one roof.
            </p>

            {/* Discipline Pill Tags */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Web Design", "Mobile Apps", "Software Portals", "Brand Identity", "Fast MVP Launches"].map(
                (tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Swiss 3D Shadow-Pop Actions */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button-solid"
              >
                Inquire Project <span className="text-white">↗</span>
              </a>
              <Link href="/work" className="link-button">
                Explore Selected Work ↓
              </Link>
            </div>

            {/* Architectural Trust Strip */}
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#111111]/15 dark:border-white/10 pt-8 font-mono text-xs text-[#666666] dark:text-[#AAAAAA]">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-[#2F6BFF]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-[#111111] dark:text-white">5.0 Client Rating</span>
              </div>
              <span>·</span>
              <div>
                <span className="font-bold text-[#111111] dark:text-white">Seasoned Practitioners</span> Only
              </div>
              <span>·</span>
              <div>
                <span className="font-bold text-[#111111] dark:text-white">Week 1</span> Live Staging Preview
              </div>
              <span>·</span>
              <div>
                <span className="font-bold text-[#111111] dark:text-white">100% IP</span> &amp; Code Ownership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGOS */}
      <Section paper className="relative border-y border-[#111111]/10 dark:border-white/10 py-16">
        <ClientLogos title="Trusted by ambitious brands & visionary founders worldwide" />
      </Section>

      {/* 3. CORE SERVICES */}
      <Section className="relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Disciplines"
            title="Everything it takes to design, build & launch."
            lead="Six core disciplines, one friendly expert studio. Work with us on a single project or take your idea all the way to market."
          />
          <Link href="/services" className="link-button shrink-0">
            View All Services ↗
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.slug} delay={idx * 50}>
              <Link
                href={`/services#${s.slug}`}
                className="swiss-card group flex h-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-4">
                    <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888] group-hover:text-[#2F6BFF] transition-colors">
                      Explore ↗
                    </span>
                  </div>

                  <h3 className="serif-display mt-6 text-2xl font-normal text-[#111111] dark:text-white group-hover:text-[#2F6BFF] transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                    {s.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#111111]/10 dark:border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
                    Deliverables
                  </span>
                  <p className="mt-1 font-mono text-xs text-[#333333] dark:text-[#AAAAAA] line-clamp-1">
                    {s.deliverables.slice(0, 2).join(" · ")}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Tech & Design Toolkit Strip */}
        <div className="mt-20 border-t border-[#111111]/10 dark:border-white/10 pt-16">
          <TechToolkit />
        </div>
      </Section>

      {/* 4. SELECTED WORK SHOWCASE */}
      <FeaturedShowcase />

      {/* 5. PROCESS SECTION */}
      <Section className="relative overflow-hidden">
        <SectionHeading
          eyebrow="Our Working Process"
          title="A transparent roadmap with every step visible."
          lead="From initial strategy and Figma wireframes to code development and official launch, you always know what is happening."
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

      {/* 6. CONTRACT PROMISES & GUARANTEES */}
      <section className="relative overflow-hidden bg-[#111111] text-white py-24 md:py-32">
        <div className="container-hal relative z-10">
          <SectionHeading
            dark
            eyebrow="Contract Guarantees"
            title="Real commitments written into our agreement."
            lead="Every one of these promises is legally bound into our client contract. Specific metrics you can verify beat vague marketing superlatives."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 70}>
                <div className="rounded-md border border-white/15 bg-white/5 p-8 flex h-full flex-col justify-between transition-all hover:border-[#2F6BFF]/60">
                  <div>
                    <span className="serif-display text-4xl md:text-5xl font-bold text-[#2F6BFF]">
                      {p.stat}
                    </span>
                    <h3 className="serif-display mt-4 text-xl font-normal text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#CCCCCC] leading-relaxed">
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

      {/* 9. ENGAGEMENT MODELS */}
      <Section paper className="relative overflow-hidden">
        <SectionHeading
          eyebrow="Ways to Collaborate"
          title="Clear, transparent engagement models."
          lead="Whether you need a dedicated sprint team or a complete product build from concept to launch, we offer predictable fixed pricing."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((m, idx) => (
            <Reveal key={m.name} delay={idx * 80}>
              <div
                className={`rounded-md border p-8 flex h-full flex-col justify-between transition-all duration-300 ${
                  m.featured
                    ? "border-[#2F6BFF] bg-white dark:bg-[#121826] shadow-xl"
                    : "border-[#111111]/15 dark:border-white/10 bg-white/70 dark:bg-[#121826]"
                }`}
              >
                <div>
                  {m.featured && (
                    <span className="mb-4 inline-flex items-center gap-2 rounded-xs border border-[#2F6BFF]/40 bg-[#2F6BFF]/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#2F6BFF]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] animate-pulse" />
                      Most Popular
                    </span>
                  )}

                  <h3 className="serif-display text-3xl font-normal text-[#111111] dark:text-white">
                    {m.name}
                  </h3>

                  <p className="mt-2 font-mono text-sm font-bold text-[#2F6BFF]">
                    {m.price}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#555555] dark:text-[#CCCCCC]">
                    {m.forWhom}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-[#111111]/10 dark:border-white/10 pt-6">
                    {m.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-mono text-xs text-[#444444] dark:text-[#CCCCCC]">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F6BFF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center ${
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
            <h2 className="serif-display text-4xl leading-tight font-normal md:text-5xl">
              Questions we hear often.
            </h2>
            <p className="mt-4 text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
              Have a specific question about your timeline or budget? A brief discovery call is the quickest way to get direct answers.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="link-button">
                Ask Us Directly ↗
              </Link>
            </div>
          </div>

          <div className="divide-y divide-[#111111]/15 dark:divide-white/10 border-t border-[#111111]/15 dark:border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
                  <span className="serif-display text-xl md:text-2xl font-normal text-[#111111] dark:text-white group-hover:text-[#2F6BFF] transition-colors">
                    {f.q}
                  </span>
                  <span className="font-mono text-xl text-[#2F6BFF] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-prose text-sm md:text-base leading-relaxed text-[#555555] dark:text-[#CCCCCC]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* 11. FINAL EDITORIAL CTA */}
      <CTASection
        title="Ready to build a digital product that stands out?"
        lead="Tell us what you're planning. We'll share our honest feedback, timeline estimates, and exact fixed pricing."
      />
    </>
  );
}
