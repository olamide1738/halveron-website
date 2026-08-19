"use client";

// Luxurious, clean hero background with soft gradient orbs, a fine architectural
// grid, and subtle golden accent lines. All CSS-driven — zero runtime JS cost.

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* 1. Soft radial gradient orbs — layered for depth */}
      {/* Top-right cobalt glow */}
      <div
        className="absolute -top-[20%] -right-[10%] h-[700px] w-[700px] rounded-full opacity-[0.07] dark:opacity-[0.12] blur-[120px]"
        style={{ background: "radial-gradient(circle, #2F6BFF 0%, transparent 70%)" }}
      />
      {/* Bottom-left warm golden glow */}
      <div
        className="absolute -bottom-[15%] -left-[10%] h-[600px] w-[600px] rounded-full opacity-[0.05] dark:opacity-[0.08] blur-[100px]"
        style={{ background: "radial-gradient(circle, #D4A853 0%, transparent 70%)" }}
      />
      {/* Center subtle violet wash */}
      <div
        className="absolute top-[30%] left-[40%] h-[500px] w-[500px] rounded-full opacity-[0.04] dark:opacity-[0.06] blur-[140px]"
        style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
      />

      {/* 2. Fine architectural dot grid — Swiss precision */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #111111 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 3. Subtle golden accent line — top-right diagonal */}
      <div
        className="absolute -top-px right-[15%] h-[1px] w-[280px] opacity-[0.15] dark:opacity-[0.10]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #D4A853 40%, #D4A853 60%, transparent 100%)",
          transform: "rotate(-12deg)",
          transformOrigin: "right center",
        }}
      />

      {/* 4. Fine vertical rule — editorial column marker */}
      <div
        className="absolute top-[10%] right-[28%] h-[60%] w-px opacity-[0.04] dark:opacity-[0.06]"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #2F6BFF 30%, #2F6BFF 70%, transparent 100%)",
        }}
      />

      {/* 5. Corner geometric accent — top-right elegant bracket */}
      <svg
        className="absolute top-12 right-12 h-24 w-24 text-[#D4A853] opacity-[0.08] dark:opacity-[0.06] md:h-32 md:w-32"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M120 0 L120 40 L80 40" />
        <path d="M120 0 L120 0" />
        <circle cx="120" cy="40" r="1.5" fill="currentColor" />
      </svg>

      {/* 6. Bottom-left geometric accent — mirrored bracket */}
      <svg
        className="absolute bottom-12 left-12 h-20 w-20 text-[#2F6BFF] opacity-[0.06] dark:opacity-[0.05] md:h-28 md:w-28"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M0 120 L0 80 L40 80" />
        <circle cx="0" cy="80" r="1.5" fill="currentColor" />
      </svg>

      {/* 7. Subtle horizontal rule — bottom section divider with fade */}
      <div
        className="absolute bottom-0 left-[10%] right-[10%] h-px opacity-[0.06] dark:opacity-[0.08]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #D4A853 20%, #2F6BFF 50%, #D4A853 80%, transparent 100%)",
        }}
      />
    </div>
  );
}
