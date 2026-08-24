"use client";

import { useEffect } from "react";
import { sound } from "../lib/sound";
import { site } from "../lib/site";

export function CaseStudyModal({ study, onClose }) {
  useEffect(() => {
    if (!study) return;

    sound.playOpen();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        sound.playClick();
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-riseIn"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={() => {
          sound.playClick();
          onClose();
        }}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-md border border-[#111111]/20 dark:border-white/15 bg-[#FEFAF7] dark:bg-[#0E131F] text-[#111111] dark:text-white p-6 sm:p-10 md:p-12 shadow-2xl z-10 transition-all">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="tag-pill text-[#2F6BFF] border-[#2F6BFF]/40 bg-[#2F6BFF]/5 font-bold">
              {study.industry}
            </span>
            <span className="font-mono text-xs text-[#888888]">
              {study.year} · Case Study
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Close case study modal"
            className="flex h-9 w-9 items-center justify-center rounded-xs border border-[#111111]/20 dark:border-white/20 hover:border-[#2F6BFF] dark:hover:border-[#2F6BFF] bg-transparent font-mono text-[#111111] dark:text-white transition-colors cursor-pointer"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Hero Title & Lead */}
        <div className="mt-8">
          <h2
            id="case-study-title"
            className="serif-display text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-[#111111] dark:text-white"
          >
            {study.title}
          </h2>
          <p className="mt-3 font-mono text-sm sm:text-base font-semibold text-[#2F6BFF]">
            {study.tagline}
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#555555] dark:text-[#CCCCCC] leading-relaxed max-w-3xl">
            {study.summary}
          </p>
        </div>

        {/* Quantifiable Results Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-[#111111]/10 dark:border-white/10 py-6">
          {study.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xs border border-[#111111]/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4 text-center"
            >
              <span className="serif-display block text-2xl sm:text-3xl font-bold text-[#2F6BFF]">
                {m.value}
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-[#777777] dark:text-[#AAAAAA]">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative Deep Dive: Challenge & Solution */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xs border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-6 shadow-2xs">
            <span className="font-mono text-xs uppercase tracking-widest text-rose-500 font-bold">
              01 / The Challenge
            </span>
            <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div className="rounded-xs border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-6 shadow-2xs">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-500 font-bold">
              02 / The Strategic Solution
            </span>
            <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Key Deliverables & Tech Stack */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Deliverables */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#888888] block mb-3">
              Deliverables Shipped
            </span>
            <ul className="space-y-2">
              {study.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xs border border-[#111111]/10 dark:border-white/10 bg-white/40 dark:bg-white/5 px-3 py-2 font-mono text-xs text-[#333333] dark:text-[#CCCCCC]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack & Palette */}
          <div className="space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#888888] block mb-3">
                Technologies Utilized
              </span>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((t) => (
                  <span
                    key={t}
                    className="tag-pill bg-[#2F6BFF]/5 border-[#2F6BFF]/30 text-[#111111] dark:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#888888] block mb-3">
                Color Harmonization
              </span>
              <div className="grid grid-cols-4 gap-2">
                {study.palette.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-xs border border-[#111111]/15 dark:border-white/15 p-2 text-center bg-white/40 dark:bg-white/5"
                  >
                    <div
                      className="mx-auto h-5 w-5 rounded-2xs shadow-2xs border border-white/20"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="mt-1 block font-mono text-[9px] text-[#888888]">
                      {c.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonial Callout */}
        {study.testimonial && (
          <div className="mt-10 rounded-xs border border-[#2F6BFF]/30 bg-[#2F6BFF]/5 dark:bg-[#2F6BFF]/10 p-6 md:p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#2F6BFF] font-bold">
              Client Feedback
            </span>
            <blockquote className="serif-display mt-3 text-xl sm:text-2xl font-normal italic text-[#111111] dark:text-white leading-relaxed">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-4 font-mono text-xs text-[#555555] dark:text-[#AAAAAA]">
              <span className="font-bold text-[#111111] dark:text-white">
                {study.testimonial.author}
              </span>{" "}
              · {study.testimonial.role}
            </div>
          </div>
        )}

        {/* Bottom Booking CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#111111]/10 dark:border-white/10 pt-6">
          <div className="font-mono text-xs text-[#777777]">
            Want similar impact for your product?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`${site.bookingUrl}?project=${study.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button-solid w-full sm:w-auto text-center"
            >
              Discuss a Similar Project ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
