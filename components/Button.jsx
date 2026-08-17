import Link from "next/link";

// Brand button with full dark mode support across all variants.
const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-lg font-body font-medium text-[15px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 dark:focus-visible:ring-offset-ink",
  size: "px-6 py-3",
  sizeSm: "px-4 py-2 text-[14px]",
  variants: {
    primary:
      "bg-cobalt text-white hover:bg-[#2559d9] shadow-md shadow-cobalt/20",
    dark: "bg-ink dark:bg-white text-white dark:text-ink hover:bg-slate dark:hover:bg-paper",
    ghost:
      "border border-line dark:border-white/20 text-ink dark:text-white hover:border-ink dark:hover:border-white hover:bg-paper dark:hover:bg-white/10",
    light:
      "bg-white dark:bg-white/10 text-ink dark:text-white hover:bg-paper dark:hover:bg-white/20",
    lightGhost:
      "border border-ink-line text-white hover:border-cobalt-light hover:text-cobalt-light",
    glass:
      "bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/90 dark:border-white/15 text-ink dark:text-white shadow-[0_4px_16px_rgba(22,30,46,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-white dark:hover:bg-white/20 hover:border-cobalt/40 dark:hover:border-cobalt-light/40 hover:shadow-[0_8px_24px_rgba(47,107,255,0.15)]",
    glassDark:
      "bg-[#161E2E]/60 backdrop-blur-md border border-white/15 text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-[#161E2E]/80 hover:border-cobalt-light/40 hover:text-white",
    glassCobalt:
      "bg-cobalt/90 backdrop-blur-md text-white border border-white/20 shadow-[0_8px_24px_rgba(47,107,255,0.25)] hover:bg-cobalt hover:shadow-[0_12px_32px_rgba(47,107,255,0.4)]",
  },
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  ...props
}) {
  const cls = `${styles.base} ${size === "sm" ? styles.sizeSm : styles.size} ${
    styles.variants[variant]
  } ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...props}
        >
          {children}
          <Arrow />
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...props}>
        {children}
        <Arrow />
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M2 8h10M8 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
