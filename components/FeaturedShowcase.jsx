"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { caseStudies } from "../lib/case-studies";
import { CaseStudyModal } from "./CaseStudyModal";
import { sound } from "../lib/sound";

export function FeaturedShowcase() {
  const [activeTab, setActiveTab] = useState(caseStudies[0]);
  const [modalStudy, setModalStudy] = useState(null);

  const handleTabChange = (study) => {
    sound.playHover();
    setActiveTab(study);
  };

  const handleOpenModal = (study) => {
    sound.playClick();
    setModalStudy(study);
  };

  return (
    <Section paper className="relative overflow-hidden py-24">
      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Design & engineering crafted for impact."
            lead="Explore real examples of custom websites, online stores, and brand systems we've created and launched."
          />

          {/* Swiss Minimal Tabs */}
          <div className="flex flex-wrap gap-2 rounded-xs border border-[#111111]/20 dark:border-white/15 bg-white/40 dark:bg-white/5 p-1.5 backdrop-blur-md shrink-0">
            {caseStudies.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handleTabChange(p)}
                className={`rounded-xs px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-all duration-150 cursor-pointer ${
                  activeTab.id === p.id
                    ? "bg-[#2F6BFF] text-white shadow-sm"
                    : "text-[#444444] dark:text-[#CCCCCC] hover:text-[#111111] dark:hover:text-white"
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
            <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] grid gap-8 p-8 lg:grid-cols-[1.1fr_1.3fr] lg:items-center lg:p-12 shadow-sm transition-all duration-300">
              {/* Left Column: Editorial Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="tag-pill">{activeTab.industry}</span>
                    {activeTab.metrics[0] && (
                      <span className="tag-pill text-[#2F6BFF] border-[#2F6BFF]/40 font-bold bg-[#2F6BFF]/5">
                        {activeTab.metrics[0].label}: {activeTab.metrics[0].value}
                      </span>
                    )}
                    <span className="font-mono text-xs text-[#888888]">
                      {activeTab.year}
                    </span>
                  </div>

                  <h3 className="serif-display mt-6 text-4xl font-normal text-[#111111] dark:text-white md:text-5xl">
                    {activeTab.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#2F6BFF]">
                    {activeTab.tagline}
                  </p>

                  <p className="mt-5 text-base text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                    {activeTab.summary}
                  </p>

                  <div className="mt-8">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#888888]">
                      Deliverables Included
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {activeTab.deliverables.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="rounded-xs border border-[#111111]/15 dark:border-white/15 bg-[#FEFAF7] dark:bg-white/5 px-3 py-1.5 font-mono text-xs text-[#333333] dark:text-[#CCCCCC]"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[#111111]/10 dark:border-white/10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(activeTab)}
                    className="link-button-solid"
                  >
                    Inspect Full Case Study ↗
                  </button>
                  <Link href="/work" className="link-button">
                    All Case Studies ↓
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Browser Frame */}
              <div
                onClick={() => handleOpenModal(activeTab)}
                className="relative overflow-hidden rounded-xs border border-[#111111]/20 dark:border-white/15 bg-[#0B0F17] p-6 shadow-xl text-white cursor-pointer group"
              >
                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-[#888888]">
                    halveron.studio/case/{activeTab.slug}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                    {activeTab.year}
                  </span>
                </div>

                {/* Content Frame with interactive feel */}
                <div className="mt-6 space-y-4">
                  <div
                    className="rounded-xs border border-white/15 p-6 backdrop-blur-md transition-all duration-300 group-hover:scale-[1.02]"
                    style={{
                      background: `radial-gradient(circle at 70% 30%, ${activeTab.accentColor}25 0%, rgba(255,255,255,0.03) 70%)`,
                    }}
                  >
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest font-bold"
                      style={{ color: activeTab.accentColor }}
                    >
                      Bespoke Architecture
                    </span>
                    <h4 className="serif-display mt-2 text-2xl font-normal text-white">
                      {activeTab.service}
                    </h4>
                    <p className="mt-2 text-xs text-[#AAAAAA] leading-relaxed">
                      Fluid responsive layout, instant page transitions, and pixel-level craft.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xs border border-white/15 bg-white/5 p-4">
                      <span className="block font-mono text-[10px] uppercase text-[#888888]">
                        Top Key Result
                      </span>
                      <span className="serif-display mt-1 block text-lg font-normal text-white">
                        {activeTab.metrics[0]?.value || "100% Bespoke"}
                      </span>
                    </div>
                    <div className="rounded-xs border border-white/15 bg-white/5 p-4">
                      <span className="block font-mono text-[10px] uppercase text-[#888888]">
                        Average Performance
                      </span>
                      <span className="serif-display mt-1 block text-lg font-normal text-[#2F6BFF]">
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
