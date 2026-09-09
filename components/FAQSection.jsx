"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "./Section";
import { faqs } from "../lib/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <Section paper className="relative border-t border-[#0F172A]/10 dark:border-white/10 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6BFF]/30 bg-[#2F6BFF]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F6BFF] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF] animate-pulse" />
            <span>Got Questions?</span>
          </div>
          <h2 className="heading-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl text-[#0F172A] dark:text-white">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            Everything you need to know about working with Halveron, our bespoke design process, timelines, and ongoing support.
          </p>

          <div className="mt-8 rounded-2xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#121826] p-6 shadow-sm">
            <h3 className="heading-display text-base font-bold text-[#0F172A] dark:text-white">
              Have a different question?
            </h3>
            <p className="mt-1 text-sm text-[#64748B] dark:text-[#94A3B8]">
              We are always here to discuss your project requirements and technical needs.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="link-button-solid text-xs py-2.5 px-5">
                <span>Get in Touch</span>
                <span className="text-white/80">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#2F6BFF]/50 bg-white dark:bg-[#121826] shadow-md"
                    : "border-[#0F172A]/10 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:border-[#0F172A]/20 dark:hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isOpen ? "text-[#2F6BFF]" : "text-[#64748B] dark:text-[#94A3B8]"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="heading-display text-base sm:text-lg font-bold text-[#0F172A] dark:text-white">
                      {f.q}
                    </span>
                  </div>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#2F6BFF] bg-[#2F6BFF] text-white rotate-45"
                        : "border-[#0F172A]/15 dark:border-white/15 text-[#64748B] dark:text-[#94A3B8] hover:border-[#2F6BFF] hover:text-[#2F6BFF]"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn">
                    <div className="border-t border-[#0F172A]/10 dark:border-white/10 pt-4">
                      <p className="text-sm sm:text-base leading-relaxed text-[#64748B] dark:text-[#94A3B8]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
