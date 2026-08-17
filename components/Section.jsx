// Layout primitives shared across every page with full dark mode support.

export function Section({
  children,
  dark = false,
  paper = false,
  className = "",
  id,
}) {
  const bg = dark
    ? "bg-ink text-white"
    : paper
    ? "bg-paper dark:bg-[#121826] text-slate dark:text-[#B9C1D0] transition-colors duration-300"
    : "bg-white dark:bg-[#0E131F] text-slate dark:text-[#B9C1D0] transition-colors duration-300";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="container-hal py-20 md:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }) {
  return <p className={`eyebrow mb-4 ${className}`}>{children}</p>;
}

// The signature motif: two bars with a cobalt block closing the gap between them.
export function GapDivider({ className = "", animate = true }) {
  return (
    <div
      className={`flex items-center ${className}`}
      aria-hidden="true"
    >
      <span className="h-[3px] w-16 rounded-sm bg-ink/20 dark:bg-white/20" />
      <span
        className={`mx-1.5 h-3 w-4 rounded-sm bg-cobalt ${
          animate ? "origin-left animate-gapClose" : ""
        }`}
      />
      <span className="h-[3px] w-16 rounded-sm bg-ink/20 dark:bg-white/20" />
    </div>
  );
}

// Section heading block: eyebrow + display headline + optional lead paragraph.
export function SectionHeading({ eyebrow, title, lead, dark = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`h-display text-3xl leading-tight md:text-4xl ${
          dark ? "text-white" : "text-ink dark:text-white"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-lg ${dark ? "text-[#B9C1D0]" : "text-slate dark:text-[#B9C1D0]"}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
