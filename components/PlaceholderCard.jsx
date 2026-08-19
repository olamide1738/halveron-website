// Shared empty-state primitives with full dark mode support.

export function GapMotif({ className = "" }) {
  return (
    <div className={`flex items-center gap-1.5 opacity-60 ${className}`} aria-hidden="true">
      <span className="h-[2px] w-6 bg-[#111111]/30 dark:bg-white/30" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
      <span className="h-[2px] w-6 bg-[#111111]/30 dark:bg-white/30" />
    </div>
  );
}

export function PlaceholderCard({
  label,
  title,
  meta,
  pill,
  className = "",
  children,
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-md border border-dashed border-[#111111]/20 dark:border-white/15 bg-white/40 dark:bg-white/5 p-7 ${className}`}
    >
      <GapMotif />
      <div className="mt-8">
        {label && (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#2F6BFF]">
            {label}
          </span>
        )}
        {title && (
          <p className="serif-display mt-2 text-xl font-normal text-[#111111] dark:text-white">{title}</p>
        )}
        {meta && <p className="mt-1 font-mono text-xs text-[#777777] dark:text-[#AAAAAA]">{meta}</p>}
        {children}
        {pill && (
          <p className="mt-4 tag-pill">
            {pill}
          </p>
        )}
      </div>
    </div>
  );
}
