import { Section, Eyebrow, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { TeamGrid } from "../../components/TeamGrid";
import { ComparisonSection } from "../../components/ComparisonSection";
import { Reveal } from "../../components/Reveal";
import { differentiators } from "../../lib/site";

export const metadata = {
  title: "About Us — Halveron Digital Product Studio",
  description:
    "Halveron is a full-service digital product studio. We unite strategy, UI/UX design, mobile apps, SaaS engineering, and brand systems under one roof.",
};

const companyValues = [
  {
    title: "Clear & Specific",
    tagline: "No confusing jargon",
    description: "Clear timelines, transparent fixed pricing, and honest advice — no hand-waving or confusing agency buzzwords.",
  },
  {
    title: "High Standards",
    tagline: "Uncompromising quality",
    description: "We build digital products that look beautiful, load fast, and work reliably for your real customers.",
  },
  {
    title: "Friendly & Human",
    tagline: "Direct & approachable",
    description: "Direct communication with the actual creators building your project, with regular updates in plain English.",
  },
];

export default function AboutPage() {
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
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-cobalt-light/15 blur-3xl animate-fluid-blob-slow"
          aria-hidden="true"
        />

        <div className="container-hal relative z-10">
          <div className="max-w-3xl">
            <Eyebrow className="text-cobalt-light">About Halveron</Eyebrow>
            <h1 className="h-display mt-4 text-4xl leading-[1.08] text-white md:text-6xl lg:text-7xl font-bold tracking-tight">
              We turn your ideas into{" "}
              <span className="bg-gradient-to-r from-white via-cobalt-light to-white bg-clip-text text-transparent">
                finished, working products.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#B9C1D0] md:text-xl leading-relaxed">
              Halveron is a full-service digital product studio. We unite strategy, visual design, mobile apps, websites, and branding — taking you from a napkin sketch to a successful launch.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE HALVERON STORY BENTO GRID */}
      <Section paper className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Why We Exist"
          title="One roof, one accountable team."
          lead="Great business ideas shouldn't get lost between disconnected freelancers and slow development agencies."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal delay={0}>
            <div className="glass-card-light flex h-full flex-col justify-between rounded-3xl p-8 transition-all duration-300">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10 font-mono text-sm font-bold text-red-500">
                  01
                </span>
                <h3 className="h-display mt-5 text-xl font-bold text-ink dark:text-white">
                  The Disconnected Vendor Problem
                </h3>
                <p className="mt-3 text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                  Most projects get split between a freelance designer, an offshore coder, and a branding agency. Details get lost in translation, quality drops, and nobody takes full responsibility.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="glass-card-light border-2 border-cobalt shadow-lg shadow-cobalt/10 flex h-full flex-col justify-between rounded-3xl p-8 transition-all duration-300">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cobalt/10 font-mono text-sm font-bold text-cobalt dark:text-cobalt-light">
                  02
                </span>
                <h3 className="h-display mt-5 text-xl font-bold text-ink dark:text-white">
                  The All-in-One Studio Solution
                </h3>
                <p className="mt-3 text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                  Halveron handles everything together: planning, visual design, custom development, testing, and launch. One friendly point of contact, one shared schedule, and senior accountability.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="glass-card-light flex h-full flex-col justify-between rounded-3xl p-8 transition-all duration-300">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 font-mono text-sm font-bold text-emerald-500">
                  03
                </span>
                <h3 className="h-display mt-5 text-xl font-bold text-ink dark:text-white">
                  Global Quality & Great Value
                </h3>
                <p className="mt-3 text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                  Based in Lagos (UTC+1), we provide seamless real-time communication with Europe, the UK, and US mornings — offering world-class design at up to 50% better value.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. CORE PRINCIPLES */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Principles we don't compromise on."
          lead="Building products requires discipline, clear communication, and unyielding code quality."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, idx) => (
            <Reveal key={d.title} delay={idx * 80}>
              <div className="glass-card-light flex h-full flex-col justify-between rounded-3xl p-7 transition-all duration-300">
                <div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cobalt/10 font-mono text-xs font-bold text-cobalt dark:text-cobalt-light">
                    0{idx + 1}
                  </div>
                  <h3 className="h-display mt-4 text-lg font-bold text-ink dark:text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. VALUES STRIP */}
      <Section paper className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="How We Operate"
          title="Precise, confident, human."
          lead="The way we communicate is the way we work — clear over clever, specific over vague."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {companyValues.map((v, idx) => (
            <Reveal key={v.title} delay={idx * 90}>
              <div className="glass-card-light rounded-3xl p-8 transition-all duration-300">
                <span className="glass-pill">{v.tagline}</span>
                <h3 className="h-display mt-4 text-2xl font-bold text-ink dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. TEAM GRID */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Who You'll Work With"
          title="The senior team, not the pitch team."
          lead="You meet the engineers and designers who do the work at kickoff, and they stay on your product."
        />
        <div className="mt-12">
          <TeamGrid />
        </div>
      </Section>

      {/* 6. COMPARISON MATRIX */}
      <ComparisonSection />

      {/* 7. CTA BANNER */}
      <CTASection title="Let's build something worth owning." />
    </>
  );
}
