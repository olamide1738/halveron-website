import Link from "next/link";

// Brand button with full dark mode support across all variants.
const styles = {
  base: "relative inline-flex items-center justify-center gap-2 rounded-sm font-mono text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF512F] cursor-pointer",
  size: "px-7 py-3.5",
  sizeSm: "px-4 py-2 text-[11px]",
  variants: {
    primary:
      "border border-[#FF512F] bg-[#FF512F] text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111] dark:hover:shadow-[3px_3px_0px_white]",
    dark: "border border-[#111111] dark:border-white/40 bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#FF512F]",
    ghost:
      "border border-[#111111]/40 dark:border-white/30 text-[#111111] dark:text-white bg-transparent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111] dark:hover:shadow-[3px_3px_0px_#FF512F]",
    light:
      "border border-[#111111] bg-white text-[#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#FF512F]",
    lightGhost:
      "border border-white/40 text-white bg-transparent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#FF512F]",
    glass:
      "border border-[#111111] dark:border-white/30 text-[#111111] dark:text-white bg-transparent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111] dark:hover:shadow-[3px_3px_0px_#FF512F]",
    glassDark:
      "border border-white/30 text-white bg-white/5 backdrop-blur-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#FF512F]",
    glassCobalt:
      "border border-[#FF512F] bg-[#FF512F] text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111] dark:hover:shadow-[3px_3px_0px_white]",
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
