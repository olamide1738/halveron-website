import { Section, Eyebrow, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { Reveal } from "../../components/Reveal";
import { openings, site, differentiators } from "../../lib/site";

export const metadata = {
  title: "Careers · Senior Product Engineering & Design Roles",
  description:
    "Join Halveron for senior product engineering and UI/UX design roles based in Lagos, working with founders and companies worldwide.",
};

export default function CareersPage() {
  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FEFAF7] dark:bg-[#0B0F17] text-[#111111] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#111111]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2F6BFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
              <span>05 / Careers &amp; Open Roles</span>
            </div>

            <h1 className="serif-display mt-8 text-5xl leading-[1.04] tracking-tight md:text-7xl lg:text-8xl text-[#111111] dark:text-white">
              Join a team building products that{" "}
              <span className="serif-italic text-[#2F6BFF]">matter.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl font-light text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
              We work directly with founders and ambitious companies worldwide, creating modern websites and mobile apps with genuine care, autonomy, and craft.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OPEN ROLES */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Open Roles"
          title={openings.length > 0 ? "Where we need senior practitioners." : "No open roles right now."}
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
                  <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-8 shadow-sm transition-all duration-300 md:flex md:items-center md:justify-between hover:border-[#2F6BFF]/50">
                    <div>
                      <span className="tag-pill">{[role.type, role.location].filter(Boolean).join(" · ")}</span>
                      <h3 className="serif-display mt-4 text-3xl font-normal text-[#111111] dark:text-white">
                        {role.title}
                      </h3>
                      {role.summary && (
                        <p className="mt-3 max-w-2xl text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                          {role.summary}
                        </p>
                      )}
                    </div>
                    <div className="mt-6 md:mt-0">
                      <a
                        href={`mailto:${site.email}?subject=${encodeURIComponent(
                          `Application: ${role.title}`,
                        )}`}
                        className="link-button-solid shrink-0"
                      >
                        Apply for role ↗
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-8 md:p-12 text-center shadow-sm">
              <h3 className="serif-display text-3xl font-normal text-[#111111] dark:text-white">
                Send a speculative application
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                Tell us what you&apos;ve built. Links to live repositories, shipped products, or Figma systems say more than a resume.
              </p>
              <div className="mt-8">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    "Speculative application",
                  )}`}
                  className="link-button-solid"
                >
                  Email us your work ↗
                </a>
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
          lead="These aren't marketing promises, they describe how the team actually operates day to day."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, idx) => (
            <Reveal key={d.title} delay={idx * 80}>
              <div className="swiss-card flex h-full flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                    0{idx + 1}
                  </span>
                  <h3 className="serif-display mt-4 text-2xl font-normal text-[#111111] dark:text-white">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
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
