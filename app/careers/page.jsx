import { Section, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { Reveal } from "../../components/Reveal";
import { openings, site, whyChooseUs } from "../../lib/site";

export const metadata = {
  title: "Careers · Join Our Creative Digital Agency",
  description:
    "Join Halveron for web design and development roles, creating modern digital products for ambitious brands worldwide.",
};

export default function CareersPage() {
  const hasOpenings = openings && openings.length > 0;

  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#0F172A]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
              <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
              <span>Careers at Halveron</span>
            </div>

            <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] dark:text-white">
              Join a team building digital experiences that{" "}
              <span className="text-[#2F6BFF]">matter</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              We work with ambitious companies and visionary founders, creating bespoke websites, custom web applications, and brand identities with care, craft, and autonomy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OPEN ROLES */}
      <Section className="relative overflow-hidden py-24">
        <SectionHeading
          eyebrow="Open Roles"
          title={hasOpenings ? "Current Opportunities" : "No open roles right now."}
          lead={
            hasOpenings
              ? "Join our high-autonomy creative team shipping production web designs and custom applications for clients worldwide."
              : "We hire in focused bursts as client engagements expand. A speculative note with links to your shipped work or portfolio is always welcomed."
          }
        />

        <div className="mt-12">
          {hasOpenings ? (
            <div className="space-y-6">
              {openings.map((role, idx) => (
                <Reveal key={role.title} delay={idx * 80}>
                  <div className="agency-card p-8 md:flex md:items-center md:justify-between">
                    <div>
                      <span className="tag-pill">{[role.type, role.location].filter(Boolean).join(" · ")}</span>
                      <h3 className="heading-display mt-4 text-2xl font-bold text-[#0F172A] dark:text-white">
                        {role.title}
                      </h3>
                      {role.summary && (
                        <p className="mt-2 max-w-2xl text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                          {role.summary}
                        </p>
                      )}
                    </div>
                    <div className="mt-6 md:mt-0 shrink-0">
                      <a
                        href={`mailto:${site.email}?subject=Application: ${encodeURIComponent(role.title)}`}
                        className="link-button-solid text-xs py-2.5 px-6"
                      >
                        Apply Now ↗
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#0F172A]/15 dark:border-white/15 bg-white/40 dark:bg-white/5 p-12 text-center max-w-xl mx-auto">
              <h3 className="heading-display text-xl font-bold text-[#0F172A] dark:text-white">
                Send a speculative application
              </h3>
              <p className="mt-3 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Are you a skilled web designer, full-stack engineer, or SEO specialist? Email us with links to your live projects.
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${site.email}?subject=Speculative Application`}
                  className="link-button text-xs py-2.5 px-6"
                >
                  Send Portfolio to {site.email} ↗
                </a>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* 3. CTA */}
      <CTASection
        title="Ready to build something exceptional?"
        lead="Let's talk about your next project or career move. Contact our team today."
      />
    </>
  );
}
