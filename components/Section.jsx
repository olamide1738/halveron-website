// Layout primitives shared across every page with full dark mode support.

export function Section({
  children,
  dark = false,
  paper = false,
  className = "",
  id,
}) {
  const bg = dark
    ? "bg-[#070A10] dark:bg-[#07090D] text-white"
    : paper
    ? "bg-[#F4F4F8] dark:bg-[#0E131F] text-[#0F172A] dark:text-[#F1F5F9] transition-colors duration-300"
    : "bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-[#F1F5F9] transition-colors duration-300";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="container-hal py-20 md:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 mb-4 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F6BFF] ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] animate-pulse" />
      <span>{children}</span>
    </div>
  );
}

export function GapDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-[1px] w-12 bg-[#0F172A]/20 dark:bg-white/20" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
      <span className="h-[1px] w-12 bg-[#0F172A]/20 dark:bg-white/20" />
    </div>
  );
}

export function SectionHeading({ eyebrow, title, lead, dark = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`heading-display mt-2 text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-4xl md:text-5xl ${
          dark ? "text-white" : "text-[#0F172A] dark:text-white"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            dark ? "text-[#CBD5E1]" : "text-[#64748B] dark:text-[#94A3B8]"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
