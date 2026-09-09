"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { caseStudies } from "../lib/case-studies";
import { CaseStudyModal } from "./CaseStudyModal";

export function FeaturedShowcase() {
  const [activeTab, setActiveTab] = useState(caseStudies[0]);
  const [modalStudy, setModalStudy] = useState(null);

  const handleTabChange = (study) => {
    setActiveTab(study);
  };

  const handleOpenModal = (study) => {
    setModalStudy(study);
  };

  return (
    <Section paper className="relative overflow-hidden py-24">
      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured client projects."
            lead="Explore recent examples of bespoke websites, digital portals, and e-commerce stores we've engineered for our clients."
          />

          {/* Octave Rounded Tabs */}
          <div className="flex flex-wrap gap-1.5 rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-1.5 backdrop-blur-md shrink-0">
            {caseStudies.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handleTabChange(p)}
                className={`rounded-full px-4 py-2 font-sans text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab.id === p.id
                    ? "bg-[#2F6BFF] text-white shadow-xs"
                    : "text-[#64748B] dark:text-[#CBD5E1] hover:text-[#0F172A] dark:hover:text-white"
                }`}
              >
                0{idx + 1} {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Display Card */}
        <div className="mt-12">
          <Reveal key={activeTab.id}>
            <div className="rounded-3xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#121826] grid gap-8 p-8 lg:grid-cols-[1.1fr_1.3fr] lg:items-center lg:p-12 shadow-card dark:shadow-card-dark transition-all duration-300">
              {/* Left Column: Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="tag-pill">{activeTab.industry}</span>
                    {activeTab.metrics[0] && (
                      <span className="tag-pill text-[#2F6BFF] border-[#2F6BFF]/30 font-bold bg-[#2F6BFF]/10">
                        {activeTab.metrics[0].label}: {activeTab.metrics[0].value}
                      </span>
                    )}
                    <span className="font-mono text-xs text-[#64748B] dark:text-[#94A3B8]">
                      {activeTab.year}
                    </span>
                  </div>

                  <h3 className="heading-display mt-6 text-3xl font-extrabold text-[#0F172A] dark:text-white md:text-4xl">
                    {activeTab.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm font-bold text-[#2F6BFF]">
                    {activeTab.tagline}
                  </p>

                  <p className="mt-4 text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {activeTab.summary}
                  </p>

                  <div className="mt-8">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
                      Included In This Project
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {activeTab.deliverables.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-[#FAFAFC] dark:bg-white/5 px-3.5 py-1 font-sans text-xs font-medium text-[#334155] dark:text-[#CBD5E1]"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[#0F172A]/10 dark:border-white/10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(activeTab)}
                    className="link-button-solid"
                  >
                    View Project Details ↗
                  </button>
                  <Link href="/work" className="link-button">
                    All Projects ↓
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Browser Frame */}
              <div
                onClick={() => handleOpenModal(activeTab)}
                className="relative overflow-hidden rounded-2xl border border-[#0F172A]/15 dark:border-white/15 bg-[#0B0F17] p-6 shadow-xl text-white cursor-pointer group"
              >
                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-[#94A3B8]">
                    halveron.com/work/{activeTab.slug}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                    {activeTab.year}
                  </span>
                </div>

                {/* Content Frame */}
                <div className="mt-6 space-y-4">
                  <div
                    className="rounded-xl border border-white/10 p-6 backdrop-blur-md transition-all duration-300 group-hover:scale-[1.02]"
                    style={{
                      background: `radial-gradient(circle at 70% 30%, ${activeTab.accentColor}25 0%, rgba(255,255,255,0.03) 70%)`,
                    }}
                  >
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest font-bold"
                      style={{ color: activeTab.accentColor }}
                    >
                      Bespoke Digital Build
                    </span>
                    <h4 className="heading-display mt-2 text-2xl font-bold text-white">
                      {activeTab.service}
                    </h4>
                    <p className="mt-2 text-xs text-[#CBD5E1] leading-relaxed">
                      Fluid responsive layout, instant page transitions, and pixel-level craft.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <span className="block font-mono text-[10px] uppercase text-[#94A3B8]">
                        Top Key Result
                      </span>
                      <span className="heading-display mt-1 block text-lg font-bold text-white">
                        {activeTab.metrics[0]?.value || "100% Bespoke"}
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <span className="block font-mono text-[10px] uppercase text-[#94A3B8]">
                        Performance
                      </span>
                      <span className="heading-display mt-1 block text-lg font-bold text-[#2F6BFF]">
                        {activeTab.metrics[1]?.value || "< 0.8s"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Case Study Modal */}
      {modalStudy && (
        <CaseStudyModal
          study={modalStudy}
          onClose={() => setModalStudy(null)}
        />
      )}
    </Section>
  );
}
