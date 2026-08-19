"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { workSlots } from "../lib/site";

const CATEGORIES = ["All Work", "Finance", "Software", "E-Commerce", "Logistics"];

export function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredWork =
    activeCategory === "All Work"
      ? workSlots
      : workSlots.filter(
          (w) => w.industry.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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
        {filteredWork.map((w, idx) => (
          <Reveal key={w.label} delay={idx * 60}>
            <article className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[#2F6BFF]/60">
              <div>
                {/* Visual Project Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-[#111111]/20 dark:border-white/10 bg-[#0B0F17]">
                  {/* Browser Chrome Header */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0B0F17]/90 px-4 py-2 backdrop-blur-md">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="truncate font-mono text-[10px] text-white/50">
                      halveron.studio/case/{w.sector.toLowerCase().replace(/\s+/g, "-")}
                    </div>
                    <span className="font-mono text-[10px] text-[#2F6BFF] font-bold">
                      {w.year}
                    </span>
                  </div>

                  {/* UI Image Showcase */}
                  {w.image ? (
                    <Image
                      src={w.image}
                      alt={`${w.sector} UI preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top pt-7 transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center pt-8 serif-display text-2xl text-white/40">
                      {w.sector}
                    </div>
                  )}

                  {/* Industry & Metric Badge */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2">
                    <span className="tag-pill bg-black/75 text-white border-white/20">
                      {w.industry}
                    </span>
                    {w.result && (
                      <span className="tag-pill bg-[#2F6BFF] text-white border-[#2F6BFF] font-bold">
                        {w.result}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Copy Details */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
                      {w.type}
                    </span>
                    <span className="font-mono text-xs text-[#888888]">
                      {w.label}
                    </span>
                  </div>

                  <h3 className="serif-display mt-3 text-3xl font-normal text-[#111111] dark:text-white">
                    {w.sector}
                  </h3>

                  <p className="mt-3 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                    {w.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  {w.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {w.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-xs border border-[#111111]/10 dark:border-white/10 bg-[#FEFAF7] dark:bg-white/5 px-2.5 py-1 font-mono text-[11px] text-[#444444] dark:text-[#CCCCCC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Interactive Inspect Button */}
              <div className="mt-8 pt-4 border-t border-[#111111]/10 dark:border-white/10">
                <button
                  onClick={() => setSelectedProject(w)}
                  className="link-button w-full text-center"
                >
                  Inspect Case Study Details ↗
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-md border border-[#111111]/20 dark:border-white/20 bg-[#FEFAF7] dark:bg-[#121826] p-8 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 flex h-8 w-8 items-center justify-center rounded-xs border border-[#111111]/20 dark:border-white/20 font-mono text-sm font-bold text-[#111111] dark:text-white hover:bg-[#2F6BFF] hover:text-white hover:border-[#2F6BFF] transition-colors"
            >
              ✕
            </button>

            <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#2F6BFF]">
              {selectedProject.industry} · {selectedProject.year}
            </span>
            <h3 className="serif-display mt-2 text-4xl font-normal text-[#111111] dark:text-white">
              {selectedProject.sector}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#666666] dark:text-[#AAAAAA]">
              {selectedProject.type}
            </p>

            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xs border border-[#111111]/20 dark:border-white/10 bg-[#0B0F17]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.sector}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
              <p className="font-mono text-xs uppercase tracking-wider text-[#111111] dark:text-white font-bold">
                Project Summary &amp; Results:
              </p>
              <p>{selectedProject.summary}</p>
              {selectedProject.result && (
                <div className="inline-flex items-center gap-2 rounded-xs bg-[#2F6BFF]/10 border border-[#2F6BFF]/30 px-4 py-2 font-mono text-xs font-bold text-[#2F6BFF]">
                  Key Result: {selectedProject.result}
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="link-button-solid"
              >
                Close Case Study ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
