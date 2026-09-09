/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Halveron Brand Palette
        "brand-bg": "#FAFAFC",
        "brand-dark": "#0B0F17",
        "brand-card-light": "#FFFFFF",
        "brand-card-dark": "#121826",
        "brand-key": "#2F6BFF",
        "brand-key-hover": "#1E54E6",
        "brand-text": "#0F172A",
        "brand-muted": "#64748B",
        "brand-border": "#E2E8F0",
        "brand-border-dark": "#1E293B",
        // Signature Tokens
        ink: "#0B0F17",
        slate: "#64748B",
        paper: "#FAFAFC",
        cobalt: "#2F6BFF",
        "cobalt-light": "#5B8EFF",
        "cobalt-dark": "#1E54E6",
        line: "#E2E8F0",
        mute: "#94A3B8",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        body: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(47, 107, 255, 0.3)",
        "glow-lg": "0 0 50px -10px rgba(47, 107, 255, 0.4)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        "card-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        riseIn: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
      animation: {
        riseIn: "riseIn .5s cubic-bezier(.16,1,.3,1) forwards",
        fadeIn: "fadeIn .4s ease-out forwards",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
