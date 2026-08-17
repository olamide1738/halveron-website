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
        // Locked Halveron palette — see Brand Guidelines v1.0
        ink: "#161E2E",
        slate: "#2E3A52",
        paper: "#F3F5F8",
        cobalt: "#2F6BFF",
        line: "#E2E6EC",
        mute: "#6B7488",
        // dark-surface helpers used on inverted sections
        "ink-soft": "#1d263b",
        "ink-line": "#2c3854",
        "cobalt-light": "#7FA4FF",
      },
      fontFamily: {
        display: ["Outfit", "system-ui", "-apple-system", "sans-serif"],
        body: ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        gapClose: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
        riseIn: {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pageLoaderFadeOut: {
          "0%, 65%": { opacity: "1", visibility: "visible" },
          "100%": { opacity: "0", visibility: "hidden" },
        },
        gapLeftBar: {
          "0%": { width: "4rem", transform: "translateX(-1.5rem)" },
          "100%": { width: "5rem", transform: "translateX(0.75rem)" },
        },
        gapRightBar: {
          "0%": { width: "4rem", transform: "translateX(1.5rem)" },
          "100%": { width: "5rem", transform: "translateX(-0.75rem)" },
        },
        gapCobalt: {
          "0%": { transform: "scale(0.75)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wordmarkFadeIn: {
          "0%, 25%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        gapClose: "gapClose .7s cubic-bezier(.22,1,.36,1) forwards",
        riseIn: "riseIn .6s cubic-bezier(.22,1,.36,1) forwards",
        pageLoaderFadeOut: "pageLoaderFadeOut 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        gapLeftBar: "gapLeftBar 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        gapRightBar: "gapRightBar 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        gapCobalt: "gapCobalt 0.5s ease-out forwards",
        wordmarkFadeIn: "wordmarkFadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
