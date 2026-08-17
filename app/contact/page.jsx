import { Section, Eyebrow } from "../../components/Section";
import { Button } from "../../components/Button";
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow className="text-cobalt-light">Contact Studio</Eyebrow>
              <h1 className="h-display max-w-md text-4xl leading-[1.08] text-white md:text-6xl font-bold tracking-tight">
                Tell us what you&apos;re{" "}
                <span className="bg-gradient-to-r from-white via-cobalt-light to-white bg-clip-text text-transparent">
                  building.
                </span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-[#B9C1D0] leading-relaxed">
                The fastest way to start is a discovery call — 30 minutes to understand the problem and tell you honestly how we&apos;d approach it.
              </p>
              <div className="mt-8">
                <Button
                  href={site.bookingUrl}
                  external
                  variant="glassCobalt"
                  className="group shadow-lg"
                >
                  Book a discovery call
                </Button>
              </div>

              {/* Direct Info List */}
              <div className="mt-12 space-y-4 border-t border-ink-line/80 pt-8">
                <ContactRow label="Email">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-white hover:text-cobalt-light font-medium transition-colors"
                  >
                    {site.email}
                  </a>
                </ContactRow>
                <ContactRow label="WhatsApp">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cobalt-light font-medium transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                </ContactRow>
                <ContactRow label="Based in">
                  <span className="text-[#B9C1D0]">{site.location}</span>
                </ContactRow>
                <ContactRow label="Response">
                  <span className="text-[#B9C1D0]">Within one business day</span>
                </ContactRow>
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
            <h2 className="h-display text-3xl leading-tight font-bold text-ink dark:text-white md:text-4xl">
              Questions we hear a lot.
            </h2>
            <p className="mt-4 max-w-prose text-base text-slate dark:text-[#B9C1D0] leading-relaxed">
              Everything you need to know about IP ownership, timelines, working across timezones, and project costs.
            </p>
          </div>

          <div className="divide-y divide-line/60 dark:divide-white/10 border-t border-line/60 dark:border-white/10">
            {faqs.map((f, idx) => (
              <Reveal key={f.q} delay={idx * 60}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt [&::-webkit-details-marker]:hidden">
                    <span className="h-display text-lg font-bold text-ink dark:text-white group-hover:text-cobalt transition-colors">
                      {f.q}
                    </span>
                    <Chevron />
                  </summary>
                  <p className="mt-4 max-w-prose text-base leading-relaxed text-slate dark:text-[#B9C1D0]">
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

function Chevron() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-cobalt transition-transform duration-200 group-open:-rotate-180"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactRow({ label, children }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8C98B3]">
        {label}
      </span>
      <span className="text-[15px]">{children}</span>
    </div>
  );
}
