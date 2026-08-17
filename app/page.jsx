import Link from "next/link";
import { Button } from "../components/Button";
import { Section, Eyebrow, GapDivider, SectionHeading } from "../components/Section";
import { CTASection } from "../components/CTASection";
import { ClientLogos } from "../components/ClientLogos";
import { Testimonials } from "../components/Testimonials";
import { StatBand } from "../components/StatBand";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { PageLoader } from "../components/PageLoader";
import { TeamSection } from "../components/TeamSection";
import { FeaturedShowcase } from "../components/FeaturedShowcase";
import { TechToolkit } from "../components/TechToolkit";
import { ComparisonSection } from "../components/ComparisonSection";
import {
  services,
  process,
  engagementModels,
  workSlots,
  techStack,
  promises,
  faqs,
  site,
} from "../lib/site";

export default function HomePage() {
  return (
    <>
      <PageLoader />

      {/* 1. HERO SECTION WITH LIQUID GLASS — WEB DESIGN AGENCY POSITIONING */}
      <section className="relative overflow-hidden bg-ink text-white py-28 md:py-36">
        {/* Layered Liquid Background Orbs */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-[450px] w-[450px] rounded-full bg-cobalt/25 blur-3xl animate-fluid-blob"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-cobalt-light/20 blur-3xl animate-fluid-blob-slow"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-dotgrid-dark opacity-60"
          aria-hidden="true"
        />

        <div className="container-hal relative z-10">
          <div className="max-w-3xl">
            <h1 className="h-display mt-4 text-4xl leading-[1.08] text-white md:text-6xl lg:text-7xl font-bold tracking-tight">
              Bring your idea to us —{" "}
              <span className="bg-gradient-to-r from-white via-cobalt-light to-white bg-clip-text text-transparent">
                we design & build
              </span>{" "}
              everything for you.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#B9C1D0] md:text-xl leading-relaxed">
              One accountable team taking you from concept to shipped product. Web design, mobile apps, SaaS engineering, and brand systems — engineered under one roof.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={site.bookingUrl} external variant="glassCobalt" className="group">
                Book a discovery call
              </Button>
              <Button href="/work" variant="glassDark" className="group">
                See our work
              </Button>
            </div>

            <div className="mt-14">
              <GapDivider />
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-[#8C98B3]">
              Web Design · Mobile Apps · SaaS Engineering · Branding · MVP Builds
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY (CLIENT LOGOS) */}
      <Section paper className="relative overflow-hidden">
        <ClientLogos title="Trusted by brands & visionary companies" />
      </Section>

      {/* 3. WHO WE ARE & STAT BAND */}
      <Section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-cobalt/10 blur-3xl animate-fluid-blob"
          aria-hidden="true"
        />
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Who we are"
            title="A dedicated web design agency crafting digital experiences that win."
            lead="Halveron is a Lagos-based web design studio partnering with ambitious brands worldwide. Strategy, UI/UX, branding, and front-end development under one roof — delivering exceptional design without vendor friction."
          />
          <div className="mt-6">
            <Button href="/about" variant="glass" className="group">
              More about Halveron
            </Button>
          </div>
        </div>
      </Section>

      {/* 4. FEATURED DESIGN SHOWCASE */}
      <FeaturedShowcase />

      {/* 5. PROMISES (CONTRACT DESIGN COMMITMENTS) */}
      <section className="relative overflow-hidden bg-ink text-white py-24 md:py-32">
        <div
          className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-cobalt/20 blur-3xl animate-fluid-blob"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-dotgrid-dark opacity-60"
          aria-hidden="true"
        />
        <div className="container-hal relative z-10">
          <SectionHeading
            dark
            eyebrow="What you can hold us to"
            title="Design commitments, not sales pitch."
            lead="Every one of these promises is something we put into our contract. Specifics you can verify beat superlatives you can't."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 90}>
                <div className="glass-card-dark flex h-full flex-col justify-between rounded-2xl p-7">
                  <div>
                    <span className="font-display text-4xl font-bold tracking-tight text-cobalt-light drop-shadow-sm">
                      {p.stat}
                    </span>
                    <h3 className="h-display mt-4 text-base font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-[#B9C1D0] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TEAM & LEADERSHIP */}
      <TeamSection />

      {/* 7. WEB DESIGN SERVICES & STACK */}
      <Section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cobalt/10 blur-3xl animate-fluid-blob"
          aria-hidden="true"
        />
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Capabilities"
            title="Full-service web design & digital craft."
            lead="Everything it takes to elevate your digital presence — from initial Figma wireframes to production front-end code."
          />
          <Button href="/services" variant="glass" className="group shrink-0">
            Explore all services
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.slug} delay={idx * 60}>
              <Link
                href={`/services#${s.slug}`}
                className="glass-card-light group flex h-full flex-col justify-between rounded-2xl p-7 transition-all"
              >
                <div>
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/80 bg-white/90 text-cobalt shadow-sm transition-all group-hover:bg-cobalt group-hover:text-white">
                    <Icon name={s.slug} className="h-5 w-5" />
                  </span>
                  <h3 className="h-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">{s.summary}</p>
                </div>
                <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Design & Dev Toolkit Bento Grid */}
        <div className="mt-20 border-t border-line/60 pt-16">
          <TechToolkit />
        </div>
      </Section>

      {/* 8. SELECTED WORK / CASE STUDIES */}
      <Section paper className="relative overflow-hidden">
        <div className="relative">
          <SectionHeading
            eyebrow="Design Portfolio"
            title="Selected web design projects."
            lead="A sample of web designs and digital platforms we've delivered for clients worldwide."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {workSlots.map((w, idx) => (
              <Reveal key={w.label} delay={idx * 90}>
                <div
                  className={`glass-card-light group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl p-7 ${
                    w.result ? "" : "border-dashed opacity-80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center opacity-40" aria-hidden="true">
                      <span className="h-[3px] w-8 rounded-sm bg-ink/20" />
                      <span className="mx-1 h-2.5 w-3.5 rounded-sm bg-cobalt/60" />
                      <span className="h-[3px] w-8 rounded-sm bg-ink/20" />
                    </div>
                    {w.industry && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
                        {w.industry}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt">
                      {w.result ? w.year : w.label}
                    </span>
                    <h3 className="h-display mt-2 text-xl font-bold text-ink">{w.sector}</h3>
                    <p className="mt-1 text-sm text-mute">{w.type}</p>
                    {w.summary && (
                      <p className="mt-3 text-sm text-slate">{w.summary}</p>
                    )}
                    {w.result ? (
                      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-cobalt/20 bg-cobalt/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cobalt backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                        {w.result}
                      </p>
                    ) : (
                      <p className="mt-4 inline-flex rounded-full bg-white/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
                        Design case study in progress
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. DESIGN PROCESS */}
      <Section className="relative overflow-hidden">
        <SectionHeading
          eyebrow="Our Design Process"
          title="A measured path — every step visible."
          lead="From initial wireframes to interactive Figma prototypes and production deployment, you always know where your project stands."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 80}>
              <div className="glass-card-light h-full rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl font-display text-sm font-bold text-white shadow-sm ${
                        i === 0 ? "bg-cobalt" : "bg-ink"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mute">
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="h-display mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-slate leading-relaxed">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Testimonials
        eyebrow="Client Words"
        title="What clients say about our web designs."
      />

      {/* 9. WHY HALVERON VS ALTERNATIVES COMPARISON MATRIX */}
      <ComparisonSection />

      {/* 10. ENGAGEMENT MODELS */}
      <Section paper className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-cobalt/10 blur-3xl animate-fluid-blob"
          aria-hidden="true"
        />
        <SectionHeading
          eyebrow="Ways to work with us"
          title="Three ways to engage our design team."
          lead="Most web design partnerships start with a discovery sprint and expand into full custom builds."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((m, idx) => (
            <Reveal key={m.name} delay={idx * 90}>
              <div
                className={`glass-card-light flex h-full flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  m.featured ? "border-2 border-cobalt shadow-lg shadow-cobalt/10" : ""
                }`}
              >
                <div>
                  {m.featured && (
                    <span className="glass-pill mb-4 inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cobalt animate-pulse" />
                      Most common
                    </span>
                  )}
                  <h3 className="h-display text-xl font-bold text-ink dark:text-white">
                    {m.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-sm font-bold text-cobalt dark:text-cobalt-light">
                    {m.price}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate dark:text-[#B9C1D0]">
                    {m.forWhom}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {m.includes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-slate dark:text-[#B9C1D0]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-cobalt" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button
                    href={site.bookingUrl}
                    external
                    variant={m.featured ? "primary" : "glass"}
                    className="w-full"
                  >
                    Select model
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 11. FAQ & CTA FOOTER */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>Before you ask</Eyebrow>
            <h2 className="h-display text-3xl leading-tight font-bold md:text-4xl">
              Questions we hear a lot.
            </h2>
            <p className="mt-4 text-[15px] text-slate">
              Ready to discuss your web design project? A discovery call is the fastest way to get started.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="glass" className="group">
                Ask us directly
              </Button>
            </div>
          </div>

          <div className="divide-y divide-line border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg text-left [&::-webkit-details-marker]:hidden">
                  <span className="h-display text-lg font-semibold text-ink">{f.q}</span>
                  <FaqChevron />
                </summary>
                <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-slate">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Ready for a website that defines your brand?"
        lead="Tell us what you're building. We'll show you how we'd design and craft your web experience."
      />
    </>
  );
}

function FaqChevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-mute transition-transform duration-200 group-open:-rotate-180"
    >
      <path
        d="M4.5 7l4.5 4.5L13.5 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
