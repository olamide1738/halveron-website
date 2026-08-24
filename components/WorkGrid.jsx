"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { caseStudies } from "../lib/case-studies";
import { CaseStudyModal } from "./CaseStudyModal";
import { sound } from "../lib/sound";

const CATEGORIES = ["All Work", "Fintech & Payments", "Software & AI", "E-Commerce & Retail", "Logistics & Transport"];

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filteredStudies =
    activeCategory === "All Work"
      ? caseStudies
      : caseStudies.filter((s) => s.industry === activeCategory);

  const handleOpenStudy = (study) => {
    sound.playClick();
    setSelectedStudy(study);
  };

  return (
    <div>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                sound.playHover();
                setActiveCategory(cat);
              }}
              className={`rounded-xs px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#2F6BFF] text-white shadow-sm"
                  : "border border-[#111111]/20 dark:border-white/20 text-[#444444] dark:text-[#CCCCCC] hover:border-[#111111] dark:hover:border-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Visual Work Projects Grid */}
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {filteredStudies.map((study, idx) => (
          <Reveal key={study.id} delay={idx * 60}>
            <article className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[#2F6BFF]/60 group">
              <div>
                {/* Visual Project Frame */}
                <div
                  onClick={() => handleOpenStudy(study)}
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-[#111111]/20 dark:border-white/10 bg-[#0B0F17] cursor-pointer"
                >
                  {/* Browser Chrome Header */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0B0F17]/90 px-4 py-2 backdrop-blur-md">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="truncate font-mono text-[10px] text-white/50">
                      halveron.studio/case/{study.slug}
                    </div>
                    <span className="font-mono text-[10px] text-[#2F6BFF] font-bold">
                      {study.year}
                    </span>
                  </div>

                  {/* Aesthetic Abstract Visual Graphic Preview */}
                  <div
                    className="flex h-full w-full items-center justify-center p-8 pt-12 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${study.accentColor}30 0%, #0B0F17 80%)`,
                    }}
                  >
                    <div className="text-center">
                      <div className="serif-display text-4xl sm:text-5xl font-bold text-white">
                        {study.title}
                      </div>
                      <div className="mt-2 font-mono text-xs uppercase tracking-widest text-[#B9C1D0]">
                        {study.service}
                      </div>
                    </div>
                  </div>

                  {/* Industry & Metric Badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2">
                    <span className="tag-pill bg-black/75 text-white border-white/20">
                      {study.industry}
                    </span>
                    {study.metrics[0] && (
                      <span className="tag-pill bg-[#2F6BFF] text-white border-[#2F6BFF] font-bold">
                        {study.metrics[0].label}: {study.metrics[0].value}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Copy Details */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
                      {study.service}
                    </span>
                    <span className="font-mono text-xs text-[#888888]">
                      Case 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="serif-display mt-3 text-3xl font-normal text-[#111111] dark:text-white">
                    {study.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.stack.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xs border border-[#111111]/10 dark:border-white/10 bg-[#FEFAF7] dark:bg-white/5 px-2.5 py-1 font-mono text-[11px] text-[#444444] dark:text-[#CCCCCC]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Inspect Button */}
              <div className="mt-8 pt-4 border-t border-[#111111]/10 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => handleOpenStudy(study)}
                  className="link-button w-full text-center"
                >
                  Inspect Case Study Details ↗
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Interactive Case Study Modal */}
      {selectedStudy && (
        <CaseStudyModal
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}
    </div>
  );
}
