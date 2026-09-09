import { Section, SectionHeading } from "../../components/Section";
import { ContactForm } from "../../components/ContactForm";
import { Reveal } from "../../components/Reveal";
import { site, faqs } from "../../lib/site";

export const metadata = {
  title: "Contact Us · Schedule a Discovery Call",
  description:
    "Book a discovery call with Halveron, or send us a brief. We reply within one business day with a scoped proposal.",
};

export default function ContactPage() {
  return (
    <>
      {/* 1. HERO BANNER & CONTACT FORM */}
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#0F172A]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
                <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
                <span>Start a Project</span>
              </div>

              <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl text-[#0F172A] dark:text-white">
                Tell us what you&apos;re{" "}
                <span className="text-[#2F6BFF]">building.</span>
              </h1>

              <p className="mt-6 max-w-md text-base md:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                The fastest way to start is a discovery call. It takes 20 minutes to understand your goals and give you honest advice on timeline, scope, and fixed pricing.
              </p>

              <div className="mt-8">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button-solid text-sm py-3 px-6"
                >
                  <span>Book a Discovery Call</span>
                  <span className="text-white/80">↗</span>
                </a>
              </div>

              {/* Direct Info List */}
              <div className="mt-12 space-y-4 border-t border-[#0F172A]/10 dark:border-white/10 pt-8 font-mono text-xs">
                <div className="flex items-baseline justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-3">
                  <span className="text-[#64748B] uppercase">Email</span>
                  <a
                    href={`mailto:${site.email}`}
                    className="line-btm-ani text-[#0F172A] dark:text-white font-bold hover:text-[#2F6BFF]"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-3">
                  <span className="text-[#64748B] uppercase">Studio Location</span>
                  <span className="text-[#0F172A] dark:text-white">{site.location}</span>
                </div>

                <div className="flex items-baseline justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-3">
                  <span className="text-[#64748B] uppercase">Working Hours</span>
                  <span className="text-[#0F172A] dark:text-white">{site.hours}</span>
                </div>

                <div className="flex items-baseline justify-between pb-3">
                  <span className="text-[#64748B] uppercase">Response Time</span>
                  <span className="text-[#2F6BFF] font-bold">&lt; 24 business hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Brief Form */}
            <div>
              <div className="mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF]">
                  Or Send Us a Detailed Brief
                </span>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQ SECTION */}
      <Section paper className="py-24">
        <SectionHeading
          eyebrow="Before You Reach Out"
          title="Common questions about kickoff &amp; pricing."
          lead="Answers to the questions founders ask us most before our first call."
        />

        <div className="mt-14 divide-y divide-[#0F172A]/10 dark:divide-white/10 border-t border-[#0F172A]/10 dark:border-white/10">
          {faqs.slice(0, 4).map((f) => (
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
      </Section>
    </>
  );
}
