import { Section, SectionHeading } from "./Section";
import { PlaceholderCard } from "./PlaceholderCard";
import { testimonials } from "../lib/site";

// Client quotes. Renders real testimonials when `testimonials` has entries,
// and honest "not yet" slots while it is empty — never invented quotes.
export function Testimonials({
  eyebrow = "Client words",
  title = "What it's like to work with us.",
  lead,
  paper = false,
  limit,
}) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  const hasReal = items.length > 0;

  return (
    <Section paper={paper}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        lead={
          lead ??
          (hasReal
            ? undefined
            : "We're early, and we'd rather show you nothing than show you something invented. Our first clients' words will land here — attributed, and with their permission.")
        }
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hasReal
          ? items.map((t) => <QuoteCard key={`${t.name}-${t.company}`} {...t} />)
          : [1, 2, 3].map((n) => (
              <PlaceholderCard
                key={n}
                label={`Client quote ${String(n).padStart(2, "0")}`}
                pill="Awaiting first case study"
                className="min-h-[16rem]"
              />
            ))}
      </div>
    </Section>
  );
}

function QuoteCard({ quote, name, role, company, service }) {
  return (
    <figure className="glass-card-light flex flex-col rounded-2xl p-7">
      <Quotemark />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate dark:text-[#B9C1D0]">
        {quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-line/60 dark:border-white/10 pt-4">
        <span className="h-display block text-[15px] font-semibold text-ink dark:text-white">{name}</span>
        <span className="mt-0.5 block text-sm text-mute dark:text-[#8C98B3]">
          {role}
          {role && company ? ", " : ""}
          {company}
        </span>
        {service && (
          <span className="glass-pill mt-3">
            {service}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

function Quotemark() {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true">
      <path
        d="M8.4 0v3.7c-1.5.4-2.6 1.1-3.3 2-.7 1-1.1 2.2-1.1 3.7h4.4V18H0V9.9C0 6.8.7 4.4 2.2 2.8 3.6 1.2 5.7.3 8.4 0Zm13.6 0v3.7c-1.5.4-2.6 1.1-3.3 2-.7 1-1.1 2.2-1.1 3.7H22V18h-8.4V9.9c0-3.1.7-5.5 2.2-7.1C17.2 1.2 19.3.3 22 0Z"
        fill="#2F6BFF"
        fillOpacity="0.85"
      />
    </svg>
  );
}
