// The Halveron mark — rounded graphite tile, negative-space H, cobalt "closing gap" block.
// Reused across header, footer, and favicons. Responds to dark mode automatically.

export function Logomark({ size = 40, reversed = false, withTick = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="0"
        y="0"
        width="72"
        height="72"
        rx="17"
        className={reversed ? "fill-white" : "fill-ink dark:fill-white"}
      />
      <rect
        x="24"
        y="18"
        width="9"
        height="36"
        rx="2.5"
        className={reversed ? "fill-ink" : "fill-white dark:fill-ink"}
      />
      <rect
        x="41"
        y="18"
        width="9"
        height="36"
        rx="2.5"
        className={reversed ? "fill-ink" : "fill-white dark:fill-ink"}
      />
      <rect x="33" y="31" width="8" height="10" rx="2" fill="#2F6BFF" />
      {withTick && size >= 32 && (
        <rect
          x="36"
          y="28"
          width="2.4"
          height="16"
          rx="1.2"
          className={reversed ? "fill-white" : "fill-ink dark:fill-white"}
        />
      )}
    </svg>
  );
}

export function Logo({ reversed = false, size = 40 }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Logomark size={size} reversed={reversed} />
      <span
        className={`font-display text-[19px] font-bold tracking-[2px] ${
          reversed ? "text-white" : "text-ink dark:text-white"
        }`}
      >
        HALVERON
      </span>
    </span>
  );
}
