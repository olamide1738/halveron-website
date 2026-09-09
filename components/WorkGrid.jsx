"use client";

import { useState } from "react";
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
      <div className="flex flex-wrap items-center justify-center gap-2">
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
              className={`rounded-full px-5 py-2.5 font-sans text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#2F6BFF] text-white shadow-xs"
                  : "border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-[#475569] dark:text-[#CBD5E1] hover:border-[#2F6BFF]"
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
            <article className="agency-card flex flex-col justify-between group">
              <div>
                {/* Visual Project Frame */}
                <div
                  onClick={() => handleOpenStudy(study)}
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#0F172A]/10 dark:border-white/10 bg-[#0B0F17] cursor-pointer"
                >
                  {/* Browser Chrome Header */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0B0F17]/90 px-4 py-2.5 backdrop-blur-md">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="truncate font-mono text-[10px] text-white/50">
                      halveron.studio/case/{study.slug}
                    </div>
                    <span className="font-mono text-[10px] text-[#2F6BFF] font-bold">
                      {study.year}
                    </span>
                  </div>

                  {/* Aesthetic Visual Preview */}
                  <div
                    className="flex h-full w-full items-center justify-center p-8 pt-12 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${study.accentColor}30 0%, #0B0F17 80%)`,
                    }}
                  >
                    <div className="text-center">
                      <div className="heading-display text-3xl sm:text-4xl font-extrabold text-white">
                        {study.title}
                      </div>
                      <div className="mt-2 font-mono text-xs uppercase tracking-wider text-[#CBD5E1]">
                        {study.service}
                      </div>
                    </div>
                  </div>

                  {/* Industry & Metric Badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2">
                    <span className="tag-pill bg-black/80 text-white border-white/20">
                      {study.industry}
                    </span>
                    {study.metrics[0] && (
                      <span className="tag-pill bg-[#2F6BFF] text-white border-[#2F6BFF] font-bold">
                        {study.metrics[0].label}: {study.metrics[0].value}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2F6BFF]">
                      {study.service}
                    </span>
                    <span className="font-mono text-xs text-[#64748B]">
                      Case 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="heading-display mt-3 text-2xl font-bold text-[#0F172A] dark:text-white">
                    {study.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.stack.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-[#FAFAFC] dark:bg-white/5 px-3 py-1 font-sans text-xs text-[#475569] dark:text-[#CBD5E1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-[#0F172A]/10 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => handleOpenStudy(study)}
                  className="link-button w-full text-center"
                >
                  <span>Inspect Case Study Details</span>
                  <span className="text-[#2F6BFF]">↗</span>
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
