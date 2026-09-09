"use client";

import { useState } from "react";
import { Section, SectionHeading } from "../../components/Section";
import { CTASection } from "../../components/CTASection";
import { Reveal } from "../../components/Reveal";
import { openSourceRepos } from "../../lib/opensource";
import { sound } from "../../lib/sound";

export default function OpenSourcePage() {
  // Tool 1: Contrast Checker State
  const [fgColor, setFgColor] = useState("#2F6BFF");
  const [bgColor, setBgColor] = useState("#FFFFFF");

  // Tool 2: Fluid Typography State
  const [minFontSize, setMinFontSize] = useState(16);
  const [maxFontSize, setMaxFontSize] = useState(24);
  const [minViewport, setMinViewport] = useState(375);
  const [maxViewport, setMaxViewport] = useState(1280);
  const [copiedClamp, setCopiedClamp] = useState(false);

  // Calculate contrast ratio helper
  const getLuminance = (hex) => {
    const cleanHex = hex.replace("#", "");
    if (cleanHex.length !== 6) return 0.5;
    const r = parseInt(cleanHex.substr(0, 2), 16) / 255;
    const g = parseInt(cleanHex.substr(2, 2), 16) / 255;
    const b = parseInt(cleanHex.substr(4, 2), 16) / 255;
    const a = [r, g, b].map((v) =>
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const lum1 = getLuminance(fgColor);
  const lum2 = getLuminance(bgColor);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  const contrastRatio = ((brightest + 0.05) / (darkest + 0.05)).toFixed(2);
  const passesAA = contrastRatio >= 4.5;
  const passesAAA = contrastRatio >= 7.0;

  // Calculate clamp() CSS string
  const slope = (maxFontSize - minFontSize) / (maxViewport - minViewport);
  const yAxisIntersection = -minViewport * slope + minFontSize;
  const clampString = `clamp(${minFontSize}px, ${(yAxisIntersection).toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${maxFontSize}px)`;

  const handleCopyClamp = () => {
    sound.playSuccess();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`font-size: ${clampString};`);
      setCopiedClamp(true);
      setTimeout(() => setCopiedClamp(false), 2000);
    }
  };

  return (
    <>
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white pt-24 pb-20 md:pt-36 md:pb-28 border-b border-[#0F172A]/10 dark:border-white/10 transition-colors duration-300">
        <div className="container-hal relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
              <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
              <span>Community &amp; Open Source</span>
            </div>

            <h1 className="heading-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] dark:text-white">
              Open source tools,{" "}
              <span className="text-[#2F6BFF]">libraries &amp; utilities.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              We believe in giving back to the craft. Explore our public design tokens, developer libraries, and free interactive browser utilities.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REPOSITORIES GRID */}
      <Section className="py-20">
        <SectionHeading
          eyebrow="Public Repositories"
          title="Open-source packages engineered by Halveron."
          lead="Free, MIT-licensed developer tools maintained by our core engineering team."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {openSourceRepos.map((repo, idx) => (
            <Reveal key={repo.name} delay={idx * 70}>
              <div className="agency-card flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                    <span className="font-mono text-sm font-bold text-[#0F172A] dark:text-white group-hover:text-[#2F6BFF] transition-colors">
                      {repo.name}
                    </span>
                    <span className="tag-pill">{repo.license}</span>
                  </div>

                  <p className="mt-4 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {repo.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-[#FAFAFC] dark:bg-white/5 px-3 py-1 font-sans text-xs text-[#475569] dark:text-[#CBD5E1]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#0F172A]/10 dark:border-white/10 flex items-center justify-between font-sans text-xs text-[#64748B]">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span>{repo.stars}</span>
                    </span>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="font-bold text-[#2F6BFF] hover:underline"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. INTERACTIVE DEVELOPER MINI TOOLS */}
      <Section paper className="py-24">
        <SectionHeading
          eyebrow="Free Interactive Utilities"
          title="Micro-tools built for modern web designers & engineers."
          lead="Calculate accessible color contrast ratios and generate mathematical CSS fluid typography scales in real time."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Tool 1: WCAG Color Contrast Checker */}
          <Reveal>
            <div className="agency-card shadow-card">
              <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#2F6BFF] font-bold">
                  Tool 01 / WCAG Contrast Checker
                </span>
                <span className="tag-pill">Real-Time</span>
              </div>

              {/* Color Inputs */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-[#64748B] block mb-2 font-bold uppercase">
                    Foreground Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="h-10 w-10 rounded-xl border border-[#0F172A]/20 cursor-pointer bg-transparent"
                    />
                    <input
                      type="text"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="w-full rounded-xl border border-[#0F172A]/15 dark:border-white/15 bg-white/50 dark:bg-white/5 px-3 py-2 font-mono text-xs text-[#0F172A] dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-[#64748B] block mb-2 font-bold uppercase">
                    Background Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="h-10 w-10 rounded-xl border border-[#0F172A]/20 cursor-pointer bg-transparent"
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-full rounded-xl border border-[#0F172A]/15 dark:border-white/15 bg-white/50 dark:bg-white/5 px-3 py-2 font-mono text-xs text-[#0F172A] dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Live Specimen Preview */}
              <div
                className="mt-6 rounded-2xl p-6 border text-center transition-colors shadow-inner"
                style={{ backgroundColor: bgColor, color: fgColor, borderColor: "rgba(0,0,0,0.1)" }}
              >
                <div className="heading-display text-2xl sm:text-3xl font-bold">
                  Halveron Studio Typography
                </div>
                <p className="mt-1 text-xs font-mono">
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>

              {/* Contrast Score & Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#0F172A]/10 dark:border-white/10 pt-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#64748B] block">
                    Contrast Ratio
                  </span>
                  <span className="heading-display text-3xl font-extrabold text-[#0F172A] dark:text-white">
                    {contrastRatio} : 1
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold ${
                      passesAA
                        ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/30"
                        : "bg-rose-500/20 text-rose-500 border border-rose-500/30"
                    }`}
                  >
                    {passesAA ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <span>WCAG AA: {passesAA ? "PASS" : "FAIL"}</span>
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold ${
                      passesAAA
                        ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/30"
                        : "bg-rose-500/20 text-rose-500 border border-rose-500/30"
                    }`}
                  >
                    {passesAAA ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <span>WCAG AAA: {passesAAA ? "PASS" : "FAIL"}</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Tool 2: Fluid Typography Scale Calculator */}
          <Reveal delay={100}>
            <div className="agency-card shadow-card">
              <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#2F6BFF] font-bold">
                  Tool 02 / Fluid CSS Clamp() Generator
                </span>
                <span className="tag-pill">CSS Utility</span>
              </div>

              {/* Slider Controls */}
              <div className="mt-6 space-y-4 font-sans text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#64748B] block mb-1">
                      Min Font Size: <span className="font-bold text-[#0F172A] dark:text-white">{minFontSize}px</span>
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="32"
                      value={minFontSize}
                      onChange={(e) => setMinFontSize(Number(e.target.value))}
                      className="w-full cursor-pointer accent-[#2F6BFF]"
                    />
                  </div>
                  <div>
                    <label className="text-[#64748B] block mb-1">
                      Max Font Size: <span className="font-bold text-[#0F172A] dark:text-white">{maxFontSize}px</span>
                    </label>
                    <input
                      type="range"
                      min="24"
                      max="72"
                      value={maxFontSize}
                      onChange={(e) => setMaxFontSize(Number(e.target.value))}
                      className="w-full cursor-pointer accent-[#2F6BFF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#64748B] block mb-1">
                      Min Viewport: <span className="font-bold text-[#0F172A] dark:text-white">{minViewport}px</span>
                    </label>
                    <input
                      type="range"
                      min="320"
                      max="600"
                      step="5"
                      value={minViewport}
                      onChange={(e) => setMinViewport(Number(e.target.value))}
                      className="w-full cursor-pointer accent-[#2F6BFF]"
                    />
                  </div>
                  <div>
                    <label className="text-[#64748B] block mb-1">
                      Max Viewport: <span className="font-bold text-[#0F172A] dark:text-white">{maxViewport}px</span>
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="1920"
                      step="10"
                      value={maxViewport}
                      onChange={(e) => setMaxViewport(Number(e.target.value))}
                      className="w-full cursor-pointer accent-[#2F6BFF]"
                    />
                  </div>
                </div>
              </div>

              {/* Generated CSS Clamp Output */}
              <div className="mt-6 rounded-xl bg-[#0E131F] p-4 text-white font-mono text-xs border border-white/10 relative overflow-x-auto">
                <span className="text-[#94A3B8] block text-[10px] uppercase mb-1">
                  Generated CSS Output:
                </span>
                <code className="text-[#7FA4FF]">font-size: {clampString};</code>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleCopyClamp}
                  className="link-button-solid inline-flex items-center gap-2 text-xs py-2 px-5"
                >
                  {copiedClamp ? (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <span>Copy CSS Clamp Snippet ↗</span>
                  )}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. CTA */}
      <CTASection
        title="Want custom tools engineered for your business?"
        lead="We build bespoke calculators, customer web portals, and public developer tools."
      />
    </>
  );
}
