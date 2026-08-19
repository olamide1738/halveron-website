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
        // Swiss fahrenheit.ch inspired palette
        "swiss-bg": "#FEFAF7",
        "swiss-dark": "#0E1117",
        "swiss-card-dark": "#161922",
        "swiss-key": "#FF512F",
        "swiss-key-hover": "#E04020",
        "swiss-text": "#111111",
        "swiss-muted": "#666666",
        "swiss-line": "#E2DED9",
        "swiss-line-dark": "#262933",
        // Legacy fallbacks
        ink: "#111111",
        slate: "#333333",
        paper: "#FEFAF7",
        cobalt: "#FF512F",
        "cobalt-light": "#FF7558",
        line: "#E2DED9",
        mute: "#777777",
      },
      fontFamily: {
        serif: ["Instrument Serif", "Newsreader", "Playfair Display", "Georgia", "serif"],
        display: ["Instrument Serif", "Newsreader", "Playfair Display", "Georgia", "serif"],
        body: ["Plus Jakarta Sans", "Inter", "Helvetica Neue", "sans-serif"],
        sans: ["Plus Jakarta Sans", "Inter", "Helvetica Neue", "sans-serif"],
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
