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
              className={`rounded-full px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                isActive
                  ? "bg-cobalt text-white shadow-md shadow-cobalt/25 scale-105"
                  : "glass-card-light text-slate dark:text-[#B9C1D0] hover:border-cobalt/40 hover:text-ink dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Visual Work Projects Grid */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {filteredWork.map((w, idx) => (
          <Reveal key={w.label} delay={idx * 80}>
            <article className="glass-card-light group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-500 hover:border-cobalt/50 hover:shadow-2xl hover:-translate-y-1">
              <div>
                {/* Visual Project UI Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/80 dark:border-white/10 bg-ink shadow-lg">
                  {/* Browser Chrome Header */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#161E2E]/90 px-4 py-2.5 backdrop-blur-md">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="truncate rounded-md bg-white/10 px-3 py-0.5 font-mono text-[10px] text-white/60">
                      halveron.com/work/{w.sector.toLowerCase().replace(/\s+/g, "-")}
                    </div>
                    <span className="font-mono text-[10px] text-cobalt-light font-bold">
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
                      className="object-cover object-top pt-8 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center pt-8 font-display text-2xl font-bold text-white/40">
                      {w.sector}
                    </div>
                  )}

                  {/* Top Industry & Metric Badges Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2">
                    <span className="glass-pill-dark font-mono text-xs text-white backdrop-blur-md bg-black/60 border-white/20">
                      {w.industry}
                    </span>
                    {w.result && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-3.5 py-1.5 font-mono text-xs font-bold text-white shadow-md backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        {w.result}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Copy Details */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-cobalt dark:text-cobalt-light">
                      {w.type}
                    </span>
                    <span className="font-mono text-xs text-mute dark:text-[#8C98B3]">
                      {w.label}
                    </span>
                  </div>

                  <h3 className="h-display mt-2 text-2xl font-bold text-ink dark:text-white group-hover:text-cobalt transition-colors">
                    {w.sector}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate dark:text-[#B9C1D0] leading-relaxed">
                    {w.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  {w.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {w.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-line/60 dark:border-white/10 bg-white/50 dark:bg-white/5 px-2.5 py-1 font-mono text-[11px] font-medium text-slate dark:text-[#B9C1D0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Interactive Inspect Button */}
              <div className="mt-6">
                <button
                  onClick={() => setSelectedProject(w)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-line/80 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-ink dark:text-white transition-all duration-300 hover:border-cobalt hover:bg-cobalt hover:text-white"
                >
                  Inspect Case Study Details →
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-white dark:bg-[#161E2E] p-8 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-paper dark:bg-white/10 font-bold text-ink dark:text-white hover:bg-cobalt hover:text-white transition-colors"
            >
              ✕
            </button>

            <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-cobalt dark:text-cobalt-light">
              {selectedProject.industry} · {selectedProject.year}
            </span>
            <h3 className="h-display mt-2 text-3xl font-bold text-ink dark:text-white">
              {selectedProject.sector}
            </h3>
            <p className="mt-1 font-mono text-sm font-semibold text-slate dark:text-[#B9C1D0]">
              {selectedProject.type}
            </p>

            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-ink">
              <Image
                src={selectedProject.image}
                alt={selectedProject.sector}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate dark:text-[#B9C1D0]">
              <p className="font-bold text-ink dark:text-white">
                Core Deliverables & Results:
              </p>
              <p>{selectedProject.summary}</p>
              {selectedProject.result && (
                <div className="inline-flex items-center gap-2 rounded-xl bg-cobalt/10 dark:bg-cobalt/20 border border-cobalt/30 px-4 py-2 font-mono text-xs font-bold text-cobalt dark:text-cobalt-light">
                  Key Metric: {selectedProject.result}
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-2xl bg-cobalt px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
