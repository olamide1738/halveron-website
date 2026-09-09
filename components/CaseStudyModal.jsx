"use client";

import { useEffect } from "react";
import { site } from "../lib/site";

export function CaseStudyModal({ study, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!study) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#0F172A]/10 dark:border-white/15 bg-[#FAFAFC] dark:bg-[#0B0F17] text-[#0F172A] dark:text-white p-6 sm:p-10 shadow-2xl z-10">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#0F172A]/10 dark:border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="tag-pill text-[#2F6BFF] border-[#2F6BFF]/30 bg-[#2F6BFF]/10 font-bold">
              {study.industry}
            </span>
            <span className="font-mono text-xs text-[#64748B]">
              {study.year} · Case Study
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study modal"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0F172A]/15 dark:border-white/20 hover:border-[#2F6BFF] dark:hover:border-[#2F6BFF] bg-transparent font-mono text-[#0F172A] dark:text-white transition-colors cursor-pointer"
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
            className="heading-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#0F172A] dark:text-white"
          >
            {study.title}
          </h2>
          <p className="mt-3 font-sans text-sm sm:text-base font-bold text-[#2F6BFF]">
            {study.tagline}
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-3xl">
            {study.summary}
          </p>
        </div>

        {/* Quantifiable Results Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-[#0F172A]/10 dark:border-white/10 py-6">
          {study.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-[#0F172A]/10 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4 text-center shadow-sm"
            >
              <span className="font-display block text-2xl sm:text-3xl font-extrabold text-[#2F6BFF]">
                {m.value}
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative Deep Dive: Challenge & Solution */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#121826] p-6 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-rose-500 font-bold">
              01 / The Challenge
            </span>
            <p className="mt-3 text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div className="rounded-2xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#121826] p-6 shadow-sm">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-500 font-bold">
              02 / The Solution
            </span>
            <p className="mt-3 text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Deliverables & Technology Stack */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-bold block mb-3">
              Included Deliverables
            </span>
            <ul className="space-y-2">
              {study.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 font-sans text-xs text-[#334155] dark:text-[#CBD5E1]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-bold block mb-3">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-white/5 px-3.5 py-1 font-sans text-xs text-[#334155] dark:text-[#CBD5E1]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Client Quote */}
        {study.quote && (
          <div className="mt-10 rounded-2xl border border-[#2F6BFF]/30 bg-[#2F6BFF]/5 dark:bg-[#2F6BFF]/10 p-6 md:p-8">
            <p className="text-base sm:text-lg italic text-[#0F172A] dark:text-white leading-relaxed">
              &ldquo;{study.quote.text}&rdquo;
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-[#2F6BFF]/20 pt-4">
              <span className="heading-display font-bold text-sm text-[#0F172A] dark:text-white">
                {study.quote.author}
              </span>
              <span className="font-sans text-xs text-[#64748B] dark:text-[#CBD5E1]">
                {study.quote.role}
              </span>
            </div>
          </div>
        )}

        {/* Footer CTA inside Modal */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#0F172A]/10 dark:border-white/10 pt-6">
          <span className="font-sans text-xs text-[#64748B]">
            Need a similar website or portal built for your business?
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#0F172A]/15 dark:border-white/20 font-sans text-xs font-semibold hover:border-[#2F6BFF] transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button-solid text-xs py-2.5 px-6"
            >
              Start a Project ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
