import { Section, Eyebrow, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { Button } from "../../components/Button";
import { Reveal } from "../../components/Reveal";
import { openings, site, differentiators } from "../../lib/site";

export const metadata = {
  title: "Careers — Senior Product Engineering & Design Roles",
  description:
    "Join Halveron — senior product engineering and UI/UX design roles based in Lagos, working with founders and companies worldwide.",
};

export default function CareersPage() {
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
            <Eyebrow className="text-cobalt-light">Careers at Halveron</Eyebrow>
            <h1 className="h-display mt-4 text-4xl leading-[1.08] text-white md:text-6xl lg:text-7xl font-bold tracking-tight">
              Join a team building products that{" "}
              <span className="bg-gradient-to-r from-white via-cobalt-light to-white bg-clip-text text-transparent">
                matter.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#B9C1D0] md:text-xl leading-relaxed">
              We work directly with founders and ambitious companies worldwide, creating modern websites and mobile apps with genuine care, autonomy, and craft.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OPEN ROLES */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Open Roles"
          title={openings.length > 0 ? "Where we need senior people." : "No open roles right now."}
          lead={
            openings.length > 0
              ? "Join a high-autonomy studio team shipping production React, Next.js, and Node products for clients in the US, Europe, and Africa."
              : "We hire in focused bursts as client engagements expand. A speculative note with links to your shipped code or Figma designs is always read by a principal engineer."
          }
        />

        <div className="mt-12">
          {openings.length > 0 ? (
            <div className="space-y-6">
              {openings.map((role, idx) => (
                <Reveal key={role.title} delay={idx * 80}>
                  <div className="glass-card-light group flex flex-col gap-6 rounded-3xl p-8 transition-all duration-300 md:flex-row md:items-center md:justify-between hover:border-cobalt/40">
                    <div>
                      <span className="glass-pill">{[role.type, role.location].filter(Boolean).join(" · ")}</span>
                      <h3 className="h-display mt-4 text-2xl font-bold text-ink dark:text-white group-hover:text-cobalt transition-colors">
                        {role.title}
                      </h3>
                      {role.summary && (
                        <p className="mt-3 max-w-2xl text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                          {role.summary}
                        </p>
                      )}
                    </div>
                    <Button
                      href={`mailto:${site.email}?subject=${encodeURIComponent(
                        `Application — ${role.title}`,
                      )}`}
                      variant="primary"
                      className="shrink-0 shadow-md"
                    >
                      Apply for role →
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="glass-card-light rounded-3xl p-8 md:p-12 text-center">
              <h3 className="h-display text-2xl font-bold text-ink dark:text-white">
                Send a speculative application
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base text-slate dark:text-[#B9C1D0] leading-relaxed">
                Tell us what you&apos;ve built. Links to live repositories, shipped products, or Figma systems say more than a resume.
              </p>
              <div className="mt-6">
                <Button
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    "Speculative application",
                  )}`}
                  variant="primary"
                  className="shadow-lg"
                >
                  Email us your work →
                </Button>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* 3. CULTURE & DIFFERENTIATORS */}
      <Section paper className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Studio Culture"
          title="The principles we sell, applied internally."
          lead="These aren't marketing promises — they describe how the team actually operates day to day."
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

      <CTASection
        title="Not actively looking, but curious?"
        lead="We'd still love to connect. A short note now beats a rush when we open a role."
      />
    </>
  );
}
