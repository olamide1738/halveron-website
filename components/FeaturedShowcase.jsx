"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Section, SectionHeading } from "./Section";
import { caseStudies } from "../lib/case-studies";
import { CaseStudyModal } from "./CaseStudyModal";

export function FeaturedShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalStudy, setModalStudy] = useState(null);

  // Touch swipe handling
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  const total = caseStudies.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Auto-play interval with pause-on-hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <Section paper className="relative py-24">
      <div className="relative z-10">
        {/* Section Header with Tabs & Controls */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured client projects."
            lead="Explore recent examples of bespoke websites, digital portals, and e-commerce stores we've engineered for our clients."
          />

          {/* Navigation Controls: Tabs & Arrows */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Octave Rounded Tabs */}
            <div className="flex flex-wrap gap-1.5 rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-1.5 backdrop-blur-md">
              {caseStudies.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`rounded-full px-4 py-2 font-sans text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    currentIndex === idx
                      ? "bg-[#2F6BFF] text-white shadow-xs"
                      : "text-[#64748B] dark:text-[#CBD5E1] hover:text-[#0F172A] dark:hover:text-white"
                  }`}
                >
                  0{idx + 1} {p.title}
                </button>
              ))}
            </div>

            {/* Slider Arrow Controls */}
            <div className="flex items-center gap-1 rounded-full border border-[#0F172A]/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-1.5 backdrop-blur-md">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#0F172A] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <span className="font-mono text-xs px-2 font-bold text-[#64748B] dark:text-[#94A3B8]">
                0{currentIndex + 1} / 0{total}
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#0F172A] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Slider Container with Outside Navigation Arrows */}
        <div className="relative mt-12">
          {/* Inner Carousel Track Box */}
          <div
            className="overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
          {/* Slides Carousel Track */}
          <div
            className="flex transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="w-full shrink-0 min-w-full"
              >
                <div className="rounded-3xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#121826] grid gap-8 p-8 lg:grid-cols-[1.1fr_1.3fr] lg:items-center lg:p-12 shadow-card dark:shadow-card-dark transition-all duration-300">
                  {/* Left Column: Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="tag-pill">{study.industry}</span>
                        {study.metrics[0] && (
                          <span className="tag-pill text-[#2F6BFF] border-[#2F6BFF]/30 font-bold bg-[#2F6BFF]/10">
                            {study.metrics[0].label}: {study.metrics[0].value}
                          </span>
                        )}
                        <span className="font-mono text-xs text-[#64748B] dark:text-[#94A3B8]">
                          {study.year}
                        </span>
                      </div>

                      <h3 className="heading-display mt-6 text-3xl font-extrabold text-[#0F172A] dark:text-white md:text-4xl">
                        {study.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm font-bold text-[#2F6BFF]">
                        {study.tagline}
                      </p>

                      <p className="mt-4 text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                        {study.summary}
                      </p>

                      <div className="mt-8">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
                          Included In This Project
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {study.deliverables.slice(0, 3).map((h) => (
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
                        onClick={() => setModalStudy(study)}
                        className="link-button-solid"
                      >
                        View Project Details ↗
                      </button>
                      <Link href="/work" className="link-button">
                        All Projects ↓
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Interactive Browser Frame with Real Project Image */}
                  <div
                    onClick={() => setModalStudy(study)}
                    className="relative overflow-hidden rounded-2xl border border-[#0F172A]/15 dark:border-white/15 bg-[#0B0F17] shadow-xl text-white cursor-pointer group transition-all duration-500 hover:shadow-glow hover:border-[#2F6BFF]/50"
                  >
                    {/* Browser Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#0B0F17]/95 px-5 py-3 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="font-mono text-[11px] text-[#94A3B8]">
                        halveron.com/work/{study.slug}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                        {study.year}
                      </span>
                    </div>

                    {/* Real Project Visual Mockup */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101623]">
                      <img
                        src={study.image}
                        alt={`${study.title} Website Showcase`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/85 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />

                      {/* Floating Key Outcome Tag */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                        {study.metrics[0] && (
                          <span className="tag-pill bg-[#0B0F17]/90 text-white border-white/20 backdrop-blur-md text-xs font-bold">
                            <span className="text-[#2F6BFF] font-black mr-1">✦</span>
                            {study.metrics[0].label}: {study.metrics[0].value}
                          </span>
                        )}
                        <span className="tag-pill bg-[#2F6BFF] text-white border-[#2F6BFF] text-xs font-bold shadow-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <span>View Study</span>
                          <span>↗</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows OUTSIDE the box */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous project"
          className="hidden md:flex absolute -left-5 lg:-left-7 xl:-left-14 2xl:-left-16 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-[#0F172A]/10 dark:border-white/15 bg-white dark:bg-[#121826] text-[#0F172A] dark:text-white shadow-xl hover:scale-110 hover:border-[#2F6BFF] hover:text-[#2F6BFF] hover:shadow-glow transition-all cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project"
          className="hidden md:flex absolute -right-5 lg:-right-7 xl:-right-14 2xl:-right-16 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-[#0F172A]/10 dark:border-white/15 bg-white dark:bg-[#121826] text-[#0F172A] dark:text-white shadow-xl hover:scale-110 hover:border-[#2F6BFF] hover:text-[#2F6BFF] hover:shadow-glow transition-all cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

        {/* Slide Indicator Dots & Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Slide to project ${study.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#2F6BFF]"
                  : "w-2.5 bg-[#0F172A]/20 dark:bg-white/20 hover:bg-[#0F172A]/40 dark:hover:bg-white/40"
              }`}
            />
          ))}
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
