import { Section, Eyebrow, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { Icon } from "../../components/Icon";
import { TechToolkit } from "../../components/TechToolkit";
import { ComparisonSection } from "../../components/ComparisonSection";
import { Reveal } from "../../components/Reveal";
import { services, process } from "../../lib/site";

export const metadata = {
  title: "Services — Web, Mobile, SaaS, Branding & MVP Builds",
  description:
    "Web design, mobile apps, SaaS product engineering, MVP launches, branding systems, and UI/UX design — engineered under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-ink text-white py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-dotgrid-dark opacity-60"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 glow-cobalt"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-cobalt/20 blur-3xl animate-fluid-blob"
          aria-hidden="true"
        />

        <div className="container-hal relative z-10">
          <div className="max-w-3xl">
            <Eyebrow className="text-cobalt-light">What We Do</Eyebrow>
            <h1 className="h-display mt-4 text-4xl leading-[1.08] text-white md:text-6xl lg:text-7xl font-bold tracking-tight">
              Everything it takes to design, build, and{" "}
              <span className="bg-gradient-to-r from-white via-cobalt-light to-white bg-clip-text text-transparent">
                launch your product.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#B9C1D0] md:text-xl leading-relaxed">
              Six core services, one friendly expert team. Work with us on a single project or take your idea all the way from concept to market.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <Section className="relative overflow-hidden py-24">
        <div className="space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <article
                id={s.slug}
                className="glass-card-light group scroll-mt-28 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:border-cobalt/40"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 dark:border-white/15 bg-cobalt/10 dark:bg-cobalt/20 text-cobalt dark:text-cobalt-light">
                        <Icon name={s.slug} className="h-6 w-6" />
                      </span>
                      <span className="font-mono text-xs font-bold text-cobalt dark:text-cobalt-light">
                        0{i + 1}
                      </span>
                    </div>

                    <h2 className="h-display mt-5 text-2xl font-bold text-ink dark:text-white md:text-3xl group-hover:text-cobalt transition-colors">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-base text-slate dark:text-[#B9C1D0] leading-relaxed">
                      {s.summary}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                      {s.detail}
                    </p>
                    <div className="mt-6">
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute dark:text-[#8C98B3]">
                        Key Deliverables
                      </span>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {s.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 rounded-xl border border-white/80 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2 font-mono text-xs text-ink dark:text-white backdrop-blur-md"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                            {d}
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

      {/* 3. DESIGN & DEV TOOLKIT */}
      <Section paper className="relative overflow-hidden py-24">
        <TechToolkit />
      </Section>

      {/* 4. PROCESS RECAP */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="How Every Engagement Runs"
          title="The same measured path, whatever the service."
          lead="From a one-week discovery sprint to a multi-month build: scoped, visible, and accountable at every step."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 70}>
              <div className="glass-card-light flex h-full flex-col justify-between rounded-3xl p-7 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl font-mono text-xs font-bold ${
                        i === 0
                          ? "bg-cobalt text-white shadow-md shadow-cobalt/25"
                          : "bg-cobalt/10 dark:bg-cobalt/20 text-cobalt dark:text-cobalt-light"
                      }`}
                    >
                      {p.step}
                    </span>
                    <span className="glass-pill">{p.duration}</span>
                  </div>
                  <h3 className="h-display mt-5 text-lg font-bold text-ink dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. COMPARISON MATRIX */}
      <ComparisonSection />

      <CTASection
        title="Not sure which service you need?"
        lead="Start with a discovery sprint. We'll map the problem and give you a scoped, priced proposal — yours to keep, no obligation."
      />
    </>
  );
}
