"use client";

import { useState, useEffect } from "react";
import { sound } from "../lib/sound";
import { site } from "../lib/site";

const DECK_SLIDES = [
  {
    num: "01",
    eyebrow: "Halveron Digital Product Studio",
    title: "Capabilities Deck 2026",
    subtitle: "Strategy, Design & Full-Stack Product Engineering",
    points: [
      "Full-service studio based in Lagos, working globally (UTC+1)",
      "Senior creators only: zero junior hand-offs or outsourcing",
      "Live staging preview from week one of every engagement",
      "100% written code and intellectual property ownership",
    ],
  },
  {
    num: "02",
    eyebrow: "Our Core Philosophy",
    title: "Closing the Gap from Idea to Shipped Market Product",
    subtitle: "Why visionary founders choose Halveron",
    points: [
      "Speed without compromise: 6 to 10 week MVP launches",
      "Architectural Swiss precision with high-converting editorial design",
      "Continuous direct communication with principal makers",
      "Transparent fixed pricing and milestone accountability",
    ],
  },
  {
    num: "03",
    eyebrow: "Discipline 01 & 02",
    title: "Web Design & Mobile Applications",
    subtitle: "Bespoke digital touchpoints that convert",
    points: [
      "Custom Next.js 14 websites with 99+ Google PageSpeed audits",
      "Native-feel React Native mobile apps for iOS & Android",
      "Headless CMS integration for effortless client editing",
      "Interactive 3D, WebGL, and fluid micro-animations",
    ],
  },
  {
    num: "04",
    eyebrow: "Discipline 03 & 04",
    title: "SaaS Portals & Fast MVP Launches",
    subtitle: "Turn complex workflows into delightful software",
    points: [
      "Multi-tenant customer portals with role permissions (RBAC)",
      "Automated Stripe, Apple Pay, and local payment gateways",
      "Real-time WebSocket analytics and interactive dashboards",
      "Production-ready backend architecture with automated CI/CD",
    ],
  },
  {
    num: "05",
    eyebrow: "Discipline 05 & 06",
    title: "Brand Systems & UI/UX Strategy",
    subtitle: "World-class visual distinction and effortless usability",
    points: [
      "Comprehensive logo suites, vector assets, and typography systems",
      "Color harmonization palettes tailored for high emotional trust",
      "Figma component libraries and developer design tokens",
      "Customer journey mapping and conversion rate optimization",
    ],
  },
  {
    num: "06",
    eyebrow: "Production Process",
    title: "Six-Step Transparent Roadmap",
    subtitle: "Open staging preview from week one",
    points: [
      "Step 01: Strategy & Architecture Blueprint (1–2 weeks)",
      "Step 02: Visual UI/UX & Interactive Figma Prototype (2–4 weeks)",
      "Step 03: Engineering & Bi-Weekly Milestone Sprints (4–12 weeks)",
      "Step 04: Cross-Device QA Testing & Security Audits (Continuous)",
      "Step 05: Official Launch & Domain Handover (1 week)",
      "Step 06: Ongoing Growth Partnership & Care (Retainer)",
    ],
  },
  {
    num: "07",
    eyebrow: "Verified Impact",
    title: "Client Case Studies & Track Record",
    subtitle: "Real numbers from shipped products",
    points: [
      "Paystream (Fintech): +148% Checkout Conversion, $4.2M+ processed",
      "Northwind Labs (SaaS): 3.2× Faster Onboarding, 99.99% Uptime",
      "Kola & Co (Luxury E-Com): +210% Sales Growth, 98/100 PageSpeed",
      "Vantage (Logistics): 6 hrs/wk saved for fleet dispatchers",
    ],
  },
  {
    num: "08",
    eyebrow: "Collaboration Models",
    title: "Predictable, Transparent Pricing",
    subtitle: "Fixed scopes with zero hidden extras",
    points: [
      "Strategy & Planning Sprint: from $6,000 (1–2 weeks fixed)",
      "Complete Product Build: from $25,000 (milestone-based)",
      "Dedicated Studio Retainer: from $8,000/month (high agility)",
      "All engagements include 30-day post-launch warranty",
    ],
  },
];

export function CapabilitiesDeckModal({ isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    sound.playOpen();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        sound.playClick();
        onClose();
      } else if (e.key === "ArrowRight" || e.key === " ") {
        sound.playHover();
        setCurrentSlide((s) => (s + 1) % DECK_SLIDES.length);
      } else if (e.key === "ArrowLeft") {
        sound.playHover();
        setCurrentSlide((s) => (s - 1 + DECK_SLIDES.length) % DECK_SLIDES.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slide = DECK_SLIDES[currentSlide];

  const handleDownload = () => {
    sound.playSuccess();
    setDownloadSuccess(true);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="deck-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-riseIn"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
        onClick={() => {
          sound.playClick();
          onClose();
        }}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-md border border-[#111111]/20 dark:border-white/15 bg-[#FEFAF7] dark:bg-[#0E131F] text-[#111111] dark:text-white p-6 sm:p-10 shadow-2xl z-10 flex flex-col justify-between">
        {/* Top Deck Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#2F6BFF] uppercase tracking-wider">
              Halveron Studio Deck
            </span>
            <span className="font-mono text-xs text-[#888888]">
              Slide {slide.num} of {String(DECK_SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xs border border-[#111111]/20 dark:border-white/20 px-3 py-1 font-mono text-xs font-bold hover:border-[#2F6BFF] transition-colors cursor-pointer"
            >
              <span>📄</span>
              <span>{downloadSuccess ? "Preparing PDF…" : "Download PDF ↗"}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              aria-label="Close capabilities deck"
              className="flex h-8 w-8 items-center justify-center rounded-xs border border-[#111111]/20 dark:border-white/20 hover:border-[#2F6BFF] bg-transparent text-sm font-mono transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Slide Content Box */}
        <div className="my-8 py-4 animate-riseIn key={slide.num}">
          <div className="inline-flex items-center gap-2 rounded-xs border border-[#2F6BFF]/30 bg-[#2F6BFF]/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#2F6BFF] font-bold">
            <span>●</span>
            <span>{slide.eyebrow}</span>
          </div>

          <h2
            id="deck-title"
            className="serif-display mt-6 text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#111111] dark:text-white"
          >
            {slide.title}
          </h2>

          <p className="mt-2 font-mono text-xs sm:text-sm text-[#777777] dark:text-[#AAAAAA] uppercase tracking-wider">
            {slide.subtitle}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {slide.points.map((pt, idx) => (
              <div
                key={pt}
                className="flex items-start gap-3 rounded-xs border border-[#111111]/10 dark:border-white/10 bg-white/50 dark:bg-white/5 p-4"
              >
                <span className="font-mono text-xs font-bold text-[#2F6BFF] shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <p className="font-mono text-xs sm:text-sm text-[#444444] dark:text-[#CCCCCC] leading-relaxed">
                  {pt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Slide Controller & Booking Action */}
        <div className="border-t border-[#111111]/10 dark:border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Slide dots */}
          <div className="flex items-center gap-1.5">
            {DECK_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  sound.playHover();
                  setCurrentSlide(idx);
                }}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  currentSlide === idx
                    ? "w-7 bg-[#2F6BFF]"
                    : "w-2 bg-[#111111]/20 dark:bg-white/20 hover:bg-[#2F6BFF]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next / Call Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                sound.playHover();
                setCurrentSlide((s) => (s - 1 + DECK_SLIDES.length) % DECK_SLIDES.length);
              }}
              className="px-3.5 py-1.5 rounded-xs border border-[#111111]/20 dark:border-white/20 font-mono text-xs hover:border-[#2F6BFF] transition-colors cursor-pointer"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => {
                sound.playHover();
                setCurrentSlide((s) => (s + 1) % DECK_SLIDES.length);
              }}
              className="px-3.5 py-1.5 rounded-xs border border-[#111111]/20 dark:border-white/20 font-mono text-xs hover:border-[#2F6BFF] transition-colors cursor-pointer"
            >
              Next →
            </button>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button-solid text-xs py-2 px-4"
            >
              Book Discovery ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
