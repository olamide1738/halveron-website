import { Section, SectionHeading } from "./Section";
import { testimonials } from "../lib/site";

export function Testimonials({
  eyebrow = "Client Feedback",
  title = "What founders & leaders say about working with us.",
  lead = "Real words from the founders, CTOs, and product leaders we've engineered software and websites for.",
  paper = false,
  limit,
}) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <Section paper={paper}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        lead={lead}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <QuoteCard key={`${t.name}-${t.company}`} {...t} />
        ))}
      </div>
    </Section>
  );
}

function QuoteCard({ quote, name, role, company, service }) {
  return (
    <figure className="agency-card flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#2F6BFF]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <Quotemark />
        </div>

        <blockquote className="mt-5 text-sm sm:text-base leading-relaxed text-[#475569] dark:text-[#CBD5E1]">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>

      <figcaption className="mt-8 border-t border-[#0F172A]/10 dark:border-white/10 pt-5">
        <span className="heading-display block text-base font-bold text-[#0F172A] dark:text-white">
          {name}
        </span>
        <span className="mt-0.5 block font-sans text-xs text-[#64748B] dark:text-[#94A3B8]">
          {role}{role && company ? " · " : ""}{company}
        </span>
        {service && (
          <span className="tag-pill mt-3 text-[#2F6BFF] border-[#2F6BFF]/30 bg-[#2F6BFF]/10 font-bold">
            {service}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

function Quotemark() {
  return (
    <svg width="20" height="16" viewBox="0 0 22 18" fill="none" aria-hidden="true">
      <path
        d="M8.4 0v3.7c-1.5.4-2.6 1.1-3.3 2-.7 1-1.1 2.2-1.1 3.7h4.4V18H0V9.9C0 6.8.7 4.4 2.2 2.8 3.6 1.2 5.7.3 8.4 0Zm13.6 0v3.7c-1.5.4-2.6 1.1-3.3 2-.7 1-1.1 2.2-1.1 3.7H22V18h-8.4V9.9c0-3.1.7-5.5 2.2-7.1C17.2 1.2 19.3.3 22 0Z"
        fill="#2F6BFF"
        fillOpacity="0.8"
      />
    </svg>
  );
}
