import { Section, Eyebrow, SectionHeading } from "../../components/Section";
import { ContactForm } from "../../components/ContactForm";
import { Reveal } from "../../components/Reveal";
import { site, faqs } from "../../lib/site";

export const metadata = {
  title: "Contact Us — Schedule a Discovery Call",
  description:
    "Book a discovery call with Halveron, or send us a brief. We reply within one business day with a scoped proposal.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. HERO BANNER & CONTACT FORM */}
      <section className="relative overflow-hidden bg-[#FEFAF7] dark:bg-[#0E1117] text-[#111111] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#111111]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF512F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF512F]" />
                <span>04 / Inquire Project</span>
              </div>

              <h1 className="serif-display mt-8 text-5xl leading-[1.04] tracking-tight md:text-7xl font-normal text-[#111111] dark:text-white">
                Tell us what you&apos;re{" "}
                <span className="serif-italic text-[#FF512F]">building.</span>
              </h1>

              <p className="mt-6 max-w-md text-base md:text-lg text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                The fastest way to start is a discovery call — 30 minutes to understand your requirements and give you honest advice on timeline, scope, and fixed pricing.
              </p>

              <div className="mt-8">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button-solid"
                >
                  Book a Discovery Call ↗
                </a>
              </div>

              {/* Direct Info List */}
              <div className="mt-12 space-y-4 border-t border-[#111111]/10 dark:border-white/10 pt-8 font-mono text-xs">
                <div className="flex items-baseline justify-between border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="text-[#888888] uppercase">Email</span>
                  <a
                    href={`mailto:${site.email}`}
                    className="line-btm-ani text-[#111111] dark:text-white font-bold hover:text-[#FF512F]"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="text-[#888888] uppercase">Studio Location</span>
                  <span className="text-[#111111] dark:text-white">{site.location}</span>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="text-[#888888] uppercase">Timezone</span>
                  <span className="text-[#111111] dark:text-white">UTC+1 · Full EU &amp; US Overlap</span>
                </div>

                <div className="flex items-baseline justify-between pb-1">
                  <span className="text-[#888888] uppercase">Response Time</span>
                  <span className="text-[#FF512F] font-bold">Within 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Interactive Brief Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 2. FREQUENTLY ASKED QUESTIONS */}
      <Section paper className="relative overflow-hidden py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>Before You Ask</Eyebrow>
            <h2 className="serif-display text-4xl leading-tight font-normal text-[#111111] dark:text-white md:text-5xl">
              Questions we hear often.
            </h2>
            <p className="mt-4 max-w-prose text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
              Everything you need to know about IP ownership, timelines, working across timezones, and project costs.
            </p>
          </div>

          <div className="divide-y divide-[#111111]/15 dark:divide-white/10 border-t border-[#111111]/15 dark:border-white/10">
            {faqs.map((f, idx) => (
              <Reveal key={f.q} delay={idx * 60}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl text-left [&::-webkit-details-marker]:hidden">
                    <span className="serif-display text-xl md:text-2xl font-normal text-[#111111] dark:text-white group-hover:text-[#FF512F] transition-colors">
                      {f.q}
                    </span>
                    <span className="font-mono text-xl text-[#FF512F] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-prose text-sm md:text-base leading-relaxed text-[#555555] dark:text-[#CCCCCC]">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
