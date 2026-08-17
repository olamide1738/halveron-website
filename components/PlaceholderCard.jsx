// Shared empty-state primitives with full dark mode support.

export function GapMotif({ className = "" }) {
  return (
    <div className={`flex items-center opacity-40 ${className}`} aria-hidden="true">
      <span className="h-[3px] w-8 rounded-sm bg-ink/20 dark:bg-white/20" />
      <span className="mx-1 h-2.5 w-3.5 rounded-sm bg-cobalt/60" />
      <span className="h-[3px] w-8 rounded-sm bg-ink/20 dark:bg-white/20" />
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
      className={`flex flex-col justify-between rounded-2xl border border-dashed border-line dark:border-white/15 bg-paper dark:bg-white/5 p-7 ${className}`}
    >
      <GapMotif />
      <div className="mt-8">
        {label && (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cobalt dark:text-cobalt-light">
            {label}
          </span>
        )}
        {title && (
          <p className="h-display mt-2 text-lg text-ink/70 dark:text-white/80">{title}</p>
        )}
        {meta && <p className="mt-1 text-sm text-mute dark:text-[#8C98B3]">{meta}</p>}
        {children}
        {pill && (
          <p className="mt-4 inline-flex rounded-full bg-white dark:bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mute dark:text-[#B9C1D0]">
            {pill}
          </p>
        )}
      </div>
    </div>
  );
}
