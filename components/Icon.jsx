// Line-style icon set — a single stroke weight, currentColor, 24×24 grid, so
// every icon shares the same visual language and inherits text colour. Keyed by
// service slug and industry key; `Icon` looks the name up and falls back to a
// neutral mark so a missing key never breaks the layout.

const common = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const paths = {
  // --- services ---
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  "ui-ux": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
    </>
  ),
  saas: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
      <circle cx="8" cy="7" r="0.6" fill="currentColor" />
      <circle cx="8" cy="12" r="0.6" fill="currentColor" />
      <circle cx="8" cy="17" r="0.6" fill="currentColor" />
    </>
  ),
  mvp: (
    <>
      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9 2.6.9-5.5-4-3.9 5.5-.8z" transform="translate(0 -1)" />
    </>
  ),
  branding: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16 16l5 5" />
    </>
  ),
  maintenance: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2z" />
    </>
  ),

  // --- industries ---
  fintech: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <circle cx="8" cy="14" r="1.3" />
    </>
  ),
  health: (
    <>
      <path d="M20.5 6.5a4.6 4.6 0 0 0-8-2 4.6 4.6 0 0 0-8 3c0 5 8 9.5 8 9.5s8-4.5 8-9.5c0-.3 0-.7-.1-1z" transform="translate(0 -0.5) scale(0.95) translate(0.6 0.9)" />
    </>
  ),
  commerce: (
    <>
      <path d="M5 7h15l-1.5 9H6.5L5 7zM5 7l-.7-3H2" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </>
  ),
  logistics: (
    <>
      <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
      <circle cx="7" cy="17" r="1.5" />
      <circle cx="17" cy="17" r="1.5" />
    </>
  ),
  saasIndustry: (
    <>
      <path d="M6 16a4 4 0 0 1 .5-8 5 5 0 0 1 9.5 1.5A3.5 3.5 0 0 1 17 16z" />
    </>
  ),
  media: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10 9l5 3-5 3z" />
    </>
  ),
};

const fallback = <circle cx="12" cy="12" r="8" />;

export function Icon({ name, className = "" }) {
  return (
    <svg {...common} className={className}>
      {paths[name] ?? fallback}
    </svg>
  );
}
