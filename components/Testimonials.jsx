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
            : "We're early, and we'd rather show you nothing than show you something invented. Our first clients' words will land here, attributed, and with their permission.")
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
    <figure className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] flex flex-col justify-between p-8 shadow-sm transition-all duration-300 hover:border-[#2F6BFF]/50">
      <div>
        <Quotemark />
        <blockquote className="mt-5 text-base leading-relaxed text-[#444444] dark:text-[#CCCCCC]">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-8 border-t border-[#111111]/10 dark:border-white/10 pt-5">
        <span className="serif-display block text-lg font-normal text-[#111111] dark:text-white">
          {name}
        </span>
        <span className="mt-0.5 block font-mono text-xs text-[#777777] dark:text-[#AAAAAA]">
          {role}
          {role && company ? ", " : ""}
          {company}
        </span>
        {service && (
          <span className="tag-pill mt-3">
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
