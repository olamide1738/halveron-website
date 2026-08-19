"use client";

// Bold, eye-catching hero background with large animated gradient orbs,
// a strong mesh overlay, and floating geometric accents.

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* 1. Large animated cobalt orb — top right, slow drift */}
      <div
        className="absolute -top-[10%] -right-[5%] h-[800px] w-[800px] rounded-full animate-hero-float"
        style={{
          background: "radial-gradient(circle, rgba(47,107,255,0.25) 0%, rgba(47,107,255,0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* 2. Warm gold orb — bottom left, counter-drift */}
      <div
        className="absolute -bottom-[20%] -left-[15%] h-[700px] w-[700px] rounded-full animate-hero-float-reverse"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.20) 0%, rgba(212,168,83,0.06) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* 3. Violet accent orb — center-left, gentle pulse */}
      <div
        className="absolute top-[20%] left-[25%] h-[500px] w-[500px] rounded-full animate-hero-pulse"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.04) 45%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* 4. Small intense cobalt spark — mid-right */}
      <div
        className="absolute top-[40%] right-[12%] h-[250px] w-[250px] rounded-full animate-hero-pulse-delayed"
        style={{
          background: "radial-gradient(circle, rgba(47,107,255,0.30) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      {/* 5. Mesh grid overlay — architectural precision */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(47,107,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(47,107,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* 6. Fine dot grid on top of mesh */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #2F6BFF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 7. Diagonal golden accent lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.06] dark:opacity-[0.04]" preserveAspectRatio="none">
        <line x1="60%" y1="0" x2="100%" y2="80%" stroke="#D4A853" strokeWidth="0.5" />
        <line x1="70%" y1="0" x2="100%" y2="60%" stroke="#D4A853" strokeWidth="0.5" />
        <line x1="0%" y1="70%" x2="40%" y2="100%" stroke="#2F6BFF" strokeWidth="0.5" />
      </svg>

      {/* 8. Top-right geometric corner bracket — bold */}
      <svg
        className="absolute top-8 right-8 h-36 w-36 text-[#D4A853] opacity-[0.12] dark:opacity-[0.08] md:h-48 md:w-48"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
      >
        <path d="M120 0 L120 50 L70 50" />
        <circle cx="120" cy="50" r="2" fill="currentColor" />
        <circle cx="70" cy="50" r="2" fill="currentColor" />
        <path d="M110 0 L110 40 L70 40" strokeDasharray="4 4" opacity="0.5" />
      </svg>

      {/* 9. Bottom-left geometric bracket — bold */}
      <svg
        className="absolute bottom-8 left-8 h-32 w-32 text-[#2F6BFF] opacity-[0.10] dark:opacity-[0.08] md:h-44 md:w-44"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
      >
        <path d="M0 120 L0 70 L50 70" />
        <circle cx="0" cy="70" r="2" fill="currentColor" />
        <circle cx="50" cy="70" r="2" fill="currentColor" />
        <path d="M10 120 L10 80 L50 80" strokeDasharray="4 4" opacity="0.5" />
      </svg>

      {/* 10. Animated floating ring — decorative */}
      <div
        className="absolute top-[15%] right-[20%] h-40 w-40 rounded-full border border-[#2F6BFF]/10 dark:border-[#2F6BFF]/15 animate-hero-ring md:h-56 md:w-56"
      />

      {/* 11. Second floating ring — offset */}
      <div
        className="absolute bottom-[25%] left-[15%] h-28 w-28 rounded-full border border-[#D4A853]/10 dark:border-[#D4A853]/12 animate-hero-ring-reverse md:h-40 md:w-40"
      />

      {/* 12. Bottom gradient horizon line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 5%, #D4A853 25%, #2F6BFF 50%, #D4A853 75%, transparent 95%)",
          opacity: 0.15,
        }}
      />

      {/* 13. Top vignette — adds depth */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background: "linear-gradient(180deg, rgba(254,250,247,0.6) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-40 hidden dark:block"
        style={{
          background: "linear-gradient(180deg, rgba(11,15,23,0.6) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
