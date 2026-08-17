"use client";

import { useState } from "react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

const showcaseProjects = [
  {
    id: "web-design",
    name: "Aura Luxury",
    tagline: "Custom Luxury Online Storefront",
    metric: "+180% More Sales",
    accent: "Web Design & Online Store",
    description:
      "An elegant, easy-to-use online store designed to showcase high-end products and make shopping seamless on phones and computers.",
    highlights: ["Custom Visual Design", "Mobile-First Layout", "Fast & Secure Checkout"],
    mockupType: "design",
  },
  {
    id: "saas-ui",
    name: "Apex Analytics",
    tagline: "Customer Dashboard & Software Portal",
    metric: "40% Faster Onboarding",
    accent: "Web App & Dashboard",
    description:
      "A clean, modern web portal that helps users easily view their business data, manage accounts, and navigate complex tools effortlessly.",
    highlights: ["Simple Visual Charts", "Easy User Navigation", "Dark & Light Mode"],
    mockupType: "dashboard",
  },
  {
    id: "branding",
    name: "Kola & Co",
    tagline: "Complete Brand Identity & Website",
    metric: "Featured Brand Redesign",
    accent: "Brand & Web Design",
    description:
      "A full brand makeover — memorable logo, cohesive colors, professional typography, and a modern marketing website built to win customer trust.",
    highlights: ["Distinctive Logo Package", "Custom Website Design", "Google Search Setup"],
    mockupType: "branding",
  },
];

export function FeaturedShowcase() {
  const [activeTab, setActiveTab] = useState(showcaseProjects[0]);

  return (
    <Section paper className="relative overflow-hidden py-24">
      {/* Dynamic Moving Ambient Glow Canvas */}
      <div
        className="pointer-events-none absolute -left-20 top-6 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-cobalt/35 via-cobalt/20 to-sky-400/25 blur-3xl animate-glow-wander-1"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-6 h-[520px] w-[520px] rounded-full bg-gradient-to-bl from-cobalt-light/35 via-indigo-500/25 to-cobalt/20 blur-3xl animate-glow-wander-2"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-sky-400/20 via-cobalt/25 to-indigo-400/20 blur-3xl animate-glow-wander-3"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/2 h-[350px] w-[350px] rounded-full bg-cobalt/20 dark:bg-cobalt-light/20 blur-3xl animate-glow-pulse"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Work"
            title="Design crafted to engage and convert."
            lead="Explore real examples of custom websites, online stores, and brand systems we've created and launched."
          />

          {/* Interactive Liquid Glass Tabs */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/80 dark:border-white/15 bg-white/70 dark:bg-white/10 p-2 backdrop-blur-xl shadow-sm">
            {showcaseProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p)}
                className={`rounded-xl px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                  activeTab.id === p.id
                    ? "bg-cobalt text-white shadow-md shadow-cobalt/25"
                    : "text-slate dark:text-[#B9C1D0] hover:bg-white/80 dark:hover:bg-white/20 hover:text-ink dark:hover:text-white"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Display Card */}
        <div className="mt-10">
          <Reveal key={activeTab.id}>
            <div className="glass-card-light grid gap-8 rounded-3xl p-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:p-12">
              {/* Left Column: Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="glass-pill">{activeTab.accent}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {activeTab.metric}
                    </span>
                  </div>

                  <h3 className="h-display mt-5 text-2xl font-bold text-ink dark:text-white md:text-3xl">
                    {activeTab.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cobalt dark:text-cobalt-light">
                    {activeTab.tagline}
                  </p>

                  <p className="mt-4 text-base text-slate dark:text-[#B9C1D0] leading-relaxed">
                    {activeTab.description}
                  </p>

                  <div className="mt-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute dark:text-[#8C98B3]">
                      What We Delivered
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {activeTab.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-lg border border-line/80 dark:border-white/15 bg-white/90 dark:bg-white/10 px-3 py-1.5 font-mono text-xs text-slate dark:text-[#B9C1D0] shadow-2xs"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-line/60">
                  <Button href="/work" variant="glassCobalt">
                    View project details
                  </Button>
                </div>
              </div>

              {/* Right Column: Interactive Mockup */}
              <div className="glass-card-dark relative overflow-hidden rounded-2xl border border-white/20 p-6 shadow-2xl">
                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/70" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/70" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="font-mono text-[11px] text-[#8C98B3]">
                    {activeTab.name.toLowerCase().replace(/\s+/g, "")}.design
                  </span>
                  <div className="h-3 w-3 opacity-0" />
                </div>

                {/* Web Design Layout Canvas */}
                <div className="mt-6 space-y-4">
                  {/* Hero Banner Mockup */}
                  <div className="rounded-xl border border-white/10 bg-gradient-to-r from-cobalt/20 via-white/5 to-cobalt-light/20 p-5 backdrop-blur-md">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cobalt-light">
                      Modern Website Layout
                    </span>
                    <h4 className="h-display mt-2 text-lg font-bold text-white">
                      Built to Convert Visitors
                    </h4>
                    <p className="mt-1 text-xs text-[#B9C1D0]">
                      Fast loading, clean typography & seamless mobile layout.
                    </p>
                  </div>

                  {/* Design Cards Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <span className="block font-mono text-[10px] uppercase text-mute">
                        Visual Design
                      </span>
                      <span className="h-display mt-1 block text-sm font-semibold text-white">
                        100% Custom
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <span className="block font-mono text-[10px] uppercase text-mute">
                        Page Load Speed
                      </span>
                      <span className="h-display mt-1 block text-sm font-semibold text-emerald-400">
                        Under 1 Second
                      </span>
                    </div>
                  </div>

                  {/* Interactive Layout Strip */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-white">
                        Color & Button Styling
                      </span>
                      <span className="h-2 w-2 rounded-full bg-cobalt animate-pulse" />
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-8 flex-1 rounded-lg bg-cobalt/40 border border-cobalt/60" />
                      <div className="h-8 flex-1 rounded-lg bg-white/10 border border-white/20" />
                      <div className="h-8 flex-1 rounded-lg bg-cobalt-light/30 border border-cobalt-light/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
