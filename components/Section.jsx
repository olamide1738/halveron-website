// Layout primitives shared across every page with full dark mode support.

export function Section({
  children,
  dark = false,
  paper = false,
  className = "",
  id,
}) {
  const bg = dark
    ? "bg-[#111111] dark:bg-[#07090D] text-white"
    : paper
    ? "bg-[#F7F2EB] dark:bg-[#12151D] text-[#111111] dark:text-[#EDEDED] transition-colors duration-300"
    : "bg-[#FEFAF7] dark:bg-[#0E1117] text-[#111111] dark:text-[#EDEDED] transition-colors duration-300";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="container-hal py-20 md:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#2F6BFF] ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
      <span>{children}</span>
    </div>
  );
}

// The signature Halveron Swiss motif: crisp 1px rule with cobalt accent
export function GapDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-[1px] w-12 bg-[#111111]/30 dark:bg-white/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
      <span className="h-[1px] w-12 bg-[#111111]/30 dark:bg-white/30" />
    </div>
  );
}

// Section heading block: eyebrow + Swiss editorial display headline + lead paragraph.
export function SectionHeading({ eyebrow, title, lead, dark = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`serif-display text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl ${
          dark ? "text-white" : "text-[#111111] dark:text-white"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            dark ? "text-[#CCCCCC]" : "text-[#444444] dark:text-[#B9C1D0]"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
