"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, SectionHeading } from "./Section";
import { services, process, site } from "../lib/site";

// Clean vector icons for each core capability
const serviceIcons = {
  "web-design": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "web-development": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "brand-identity": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  ecommerce: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  seo: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <polyline points="11 8 11 12 14 14" />
    </svg>
  ),
  "hosting-support": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
};

// Associated technical stack tags for each service
const serviceTech = {
  "web-design": ["Figma Systems", "Interactive Prototyping", "Design Tokens", "Wireframing", "WCAG 2.1 AA", "Conversion Funnels"],
  "web-development": ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "REST & GraphQL APIs", "Core Web Vitals 99+"],
  "brand-identity": ["Vector Logo Suite", "Color Palettes", "Typography Scales", "Brand Guidelines", "Social Assets", "Stationery"],
  ecommerce: ["Shopify Storefront API", "Stripe Checkout", "Product Configurator", "Inventory Sync", "Apple Pay / 1-Click", "Tax Automation"],
  seo: ["Technical Audits", "Schema.org Markup", "Keyword Architecture", "Core Web Vitals", "Speed Audits", "Google Search Console"],
  "hosting-support": ["Vercel & AWS Cloud", "Global Edge CDN", "Automated Daily Backups", "99.9% Uptime SLA", "Proactive Security", "Monthly Retainers"],
};

// Partnership engagement models
const engagementModels = [
  {
    tier: "01",
    title: "Fixed-Scope Project",
    tag: "Most Popular",
    tagline: "Ideal for new builds, complete redesigns, and brand launches.",
    description: "A clearly defined project scope delivered against guaranteed milestones and transparent fixed pricing with zero hidden surprises.",
    features: [
      "Dedicated creative director & lead engineer",
      "Interactive Figma prototypes & design system",
      "Clean Next.js & React production build",
      "Quality assurance & multi-device testing",
      "Full IP ownership & zero vendor lock-in",
    ],
    cta: "Start a Project Brief",
    href: "/contact?model=fixed",
  },
  {
    tier: "02",
    title: "Dedicated Studio Retainer",
    tag: "Ongoing Partnership",
    tagline: "Continuous design iteration, development, and CRO experiments.",
    description: "An agile, ongoing monthly partnership giving your internal team on-demand access to senior design and full-stack engineering expertise.",
    features: [
      "Guaranteed weekly sprint capacity",
      "Rapid feature turnaround & A/B testing",
      "Continuous speed & SEO monitoring",
      "Direct Slack/Teams channel with makers",
      "Flexible rollover hours & monthly roadmap",
    ],
    cta: "Inquire About Retainers",
    href: "/contact?model=retainer",
  },
  {
    tier: "03",
    title: "Audit & Speed Sprint",
    tag: "High-Impact Sprint",
    tagline: "2-week focused technical SEO and Core Web Vitals optimization.",
    description: "A deep-dive technical audit and engineering sprint designed to identify conversion bottlenecks, boost Google rankings, and reduce load times.",
    features: [
      "Comprehensive Core Web Vitals audit",
      "Technical on-page & schema markup review",
      "Mobile UX & checkout friction analysis",
      "Actionable engineering fixes applied directly",
      "Before/after performance benchmark report",
    ],
    cta: "Book Performance Sprint",
    href: "/contact?model=audit",
  },
];

// Curated tech stack ecosystem
const techEcosystem = [
  {
    category: "Design & Prototyping",
    items: ["Figma", "Design Tokens", "Wireframing", "WCAG Accessibility", "Adobe Suite"],
  },
  {
    category: "Frontend & Web Engineering",
    items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
  },
  {
    category: "Commerce & Integrations",
    items: ["Shopify Storefront API", "Stripe Connect", "PayPal", "Apple Pay", "REST APIs", "GraphQL"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Vercel Edge", "AWS Cloud", "Cloudflare CDN", "GitHub CI/CD", "Automated Backups", "SSL/TLS"],
  },
];

// Services-specific FAQs
const servicesFaqs = [
  {
    q: "Who owns the code and intellectual property after completion?",
    a: "You own 100% of all code, assets, design files, and intellectual property. Upon project completion, all repositories, Figma files, and production credentials are completely transferred to your organization with zero vendor lock-in.",
  },
  {
    q: "Can our internal team easily update text and images after launch?",
    a: "Yes. Every website we build is configured with a modern, user-friendly Content Management System (CMS) tailored to your operational workflows, so anyone on your team can edit content without touching code.",
  },
  {
    q: "Do you build with off-the-shelf templates or bespoke code?",
    a: "Every project we deliver is 100% bespoke. We do not use cookie-cutter templates, pre-made themes, or bloated page builders. Your digital platform is custom-designed and engineered specifically for your brand.",
  },
  {
    q: "What does post-launch hosting and ongoing maintenance include?",
    a: "Our managed hosting and support packages include global CDN distribution, 24/7 uptime monitoring, automated daily backups, regular security patches, and direct access to our technical team for continuous updates.",
  },
];

export function ServicesView() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.slug === activeFilter);

  const scrollToService = (slug) => {
    setActiveFilter(slug);
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#0F172A]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] animate-pulse" />
              <span>Full-Spectrum Digital Studio</span>
            </div>

            <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] dark:text-white">
              Capabilities engineered for{" "}
              <span className="text-[#2F6BFF]">measurable growth</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#475569] dark:text-[#94A3B8] leading-relaxed">
              We engineer high-performance web platforms, distinctive brand identities, and conversion-focused digital systems designed to turn traffic into lasting commercial advantage.
            </p>

            {/* Quick Value Metrics Ribbon */}
            <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs text-[#334155] dark:text-[#CBD5E1]">
              <div className="flex items-center gap-2 rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2">
                <span className="text-[#2F6BFF] font-bold">✓</span>
                <span>99+ Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2">
                <span className="text-[#2F6BFF] font-bold">✓</span>
                <span>100% Bespoke Code</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2">
                <span className="text-[#2F6BFF] font-bold">✓</span>
                <span>Complete IP Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY QUICK-NAV PILL BAR */}
      <div className="sticky top-[68px] z-30 border-b border-[#0F172A]/10 dark:border-white/10 bg-white/80 dark:bg-[#0B0F17]/80 backdrop-blur-xl py-3.5 transition-all">
        <div className="container-hal flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <span className="hidden lg:inline-block font-mono text-xs font-bold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] shrink-0">
            Jump to Service:
          </span>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#2F6BFF] text-white shadow-xs"
                  : "text-[#64748B] dark:text-[#CBD5E1] hover:text-[#0F172A] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              All Services ({services.length})
            </button>
            {services.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => scrollToService(s.slug)}
                className={`rounded-full px-3.5 py-1.5 font-sans text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === s.slug
                    ? "bg-[#2F6BFF] text-white shadow-xs"
                    : "text-[#64748B] dark:text-[#CBD5E1] hover:text-[#0F172A] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#2F6BFF] hover:underline shrink-0"
          >
            <span>Request Quote</span>
            <span>↗</span>
          </Link>
        </div>
      </div>

      {/* 3. RESTRUCTURED SERVICES BENTO SHOWCASE */}
      <Section className="relative py-20 md:py-28">
        <div className="space-y-12">
          {filteredServices.map((s, idx) => (
            <article
              key={s.slug}
              id={s.slug}
              className="rounded-3xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#101623] p-8 md:p-12 shadow-card dark:shadow-card-dark transition-all duration-300 scroll-mt-28"
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_1.3fr] lg:items-start">
                {/* Left Column: Core Description & Highlights */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2F6BFF]/10 text-[#2F6BFF]">
                        {serviceIcons[s.slug] || serviceIcons["web-design"]}
                      </div>
                      <span className="font-mono text-sm font-bold text-[#2F6BFF]">
                        0{idx + 1}
                      </span>
                    </div>
                    <span className="tag-pill">Core Capability</span>
                  </div>

                  <h2 className="heading-display mt-6 text-2xl md:text-3xl font-bold text-[#0F172A] dark:text-white">
                    {s.title}
                  </h2>

                  <p className="mt-2.5 font-sans text-sm font-bold text-[#2F6BFF]">
                    {s.summary}
                  </p>

                  <p className="mt-4 text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {s.detail}
                  </p>

                  {/* Technical Tooling & Tags */}
                  <div className="mt-6">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-2.5">
                      Tooling &amp; Standards
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {(serviceTech[s.slug] || []).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-[#FAFAFC] dark:bg-white/5 px-3 py-1 font-mono text-[11px] font-medium text-[#475569] dark:text-[#CBD5E1]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#0F172A]/10 dark:border-white/10 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/contact?service=${s.slug}`}
                      className="link-button-solid text-xs py-3 px-6"
                    >
                      <span>Inquire About {s.title}</span>
                      <span className="text-white/80">↗</span>
                    </Link>
                    <Link
                      href="/work"
                      className="link-button text-xs py-3 px-6"
                    >
                      <span>Related Case Studies</span>
                      <span className="text-[#2F6BFF]">↓</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Deliverables Checklist */}
                <div className="rounded-2xl border border-[#0F172A]/10 dark:border-white/10 bg-[#FAFAFC] dark:bg-white/5 p-6 md:p-8">
                  <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-white">
                      Included Deliverables &amp; Outcomes
                    </span>
                    <span className="font-mono text-xs text-[#2F6BFF] font-bold">
                      {s.deliverables.length} Key Outputs
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-sm text-[#334155] dark:text-[#CBD5E1]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2F6BFF]/15 text-[#2F6BFF] mt-0.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="leading-snug">{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Guaranteed Quality Tag */}
                  <div className="mt-8 rounded-xl border border-[#2F6BFF]/20 bg-[#2F6BFF]/5 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2F6BFF]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
                      <span>Direct Maker Communication</span>
                    </div>
                    <p className="mt-1 text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                      You will collaborate directly with our lead designers and engineers throughout the engagement. No account managers or communication silos.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 4. TECHNICAL ECOSYSTEM & TOOLS */}
      <Section paper className="py-24 border-y border-[#0F172A]/10 dark:border-white/10">
        <SectionHeading
          eyebrow="Our Tech Stack"
          title="Engineered with modern, future-proof technologies."
          lead="We deliberately choose modern, high-performance tooling that delivers instant page transitions, bank-level security, and effortless scalability."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techEcosystem.map((tech) => (
            <div
              key={tech.category}
              className="agency-card flex flex-col justify-between"
            >
              <div>
                <h3 className="heading-display text-lg font-bold text-[#0F172A] dark:text-white border-b border-[#0F172A]/10 dark:border-white/10 pb-3">
                  {tech.category}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {tech.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-sans text-sm text-[#475569] dark:text-[#CBD5E1]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. ENGAGEMENT PARTNERSHIP MODELS */}
      <Section className="py-24">
        <SectionHeading
          eyebrow="Partnership Models"
          title="Transparent ways to collaborate with us."
          lead="Whether you need a full turnkey website launch, continuous sprint retainers, or a targeted performance audit, we provide flexible engagement structures."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 ${
                model.tag === "Most Popular"
                  ? "border-[#2F6BFF] bg-white dark:bg-[#101623] shadow-glow"
                  : "border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#101623] shadow-card dark:shadow-card-dark"
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                  <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                    TIER {model.tier}
                  </span>
                  <span className="tag-pill">{model.tag}</span>
                </div>

                <h3 className="heading-display mt-6 text-2xl font-bold text-[#0F172A] dark:text-white">
                  {model.title}
                </h3>

                <p className="mt-2 text-xs font-bold text-[#2F6BFF]">
                  {model.tagline}
                </p>

                <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {model.description}
                </p>

                <div className="mt-6 pt-6 border-t border-[#0F172A]/10 dark:border-white/10">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] mb-3">
                    What&apos;s Included
                  </span>
                  <ul className="space-y-2.5">
                    {model.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-xs text-[#334155] dark:text-[#CBD5E1]"
                      >
                        <span className="text-[#2F6BFF] font-bold mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0F172A]/10 dark:border-white/10">
                <Link
                  href={model.href}
                  className={
                    model.tag === "Most Popular"
                      ? "link-button-solid w-full text-center block text-xs py-3"
                      : "link-button w-full text-center block text-xs py-3"
                  }
                >
                  {model.cta} ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. OUR 4-STEP WORKING BLUEPRINT */}
      <Section paper className="py-24 border-t border-[#0F172A]/10 dark:border-white/10">
        <SectionHeading
          eyebrow="Delivery Blueprint"
          title="How we bring your digital project to life."
          lead="A streamlined, collaborative four-stage process that ensures high creative standards, technical precision, and on-time delivery."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div
              key={p.step}
              className="agency-card flex h-full flex-col justify-between"
            >
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
          ))}
        </div>
      </Section>

      {/* 7. SERVICES FAQ ACCORDION */}
      <Section className="py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF] mb-4">
              <span>Services FAQ</span>
            </div>
            <h2 className="heading-display text-3xl font-extrabold leading-tight sm:text-4xl text-[#0F172A] dark:text-white">
              Questions about our services.
            </h2>
            <p className="mt-4 text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Have specific questions regarding intellectual property, handoff, or timeline planning?
            </p>
            <div className="mt-8">
              <Link href="/contact" className="link-button">
                <span>Talk With Our Team</span>
                <span className="text-[#2F6BFF]">↗</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {servicesFaqs.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={f.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#2F6BFF]/50 bg-white dark:bg-[#121826] shadow-md"
                      : "border-[#0F172A]/10 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:border-[#0F172A]/20 dark:hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left cursor-pointer transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="heading-display text-base sm:text-lg font-bold text-[#0F172A] dark:text-white">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#2F6BFF] bg-[#2F6BFF] text-white rotate-45"
                          : "border-[#0F172A]/15 dark:border-white/15 text-[#64748B] dark:text-[#94A3B8] hover:border-[#2F6BFF] hover:text-[#2F6BFF]"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 animate-fadeIn">
                      <div className="border-t border-[#0F172A]/10 dark:border-white/10 pt-4">
                        <p className="text-sm sm:text-base leading-relaxed text-[#64748B] dark:text-[#94A3B8]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
