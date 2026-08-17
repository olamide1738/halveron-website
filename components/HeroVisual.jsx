"use client";

import { useState } from "react";

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState("design"); // 'design' | 'code' | 'performance'

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Ambient Backlight Behind Card */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-r from-cobalt/30 via-cobalt-light/20 to-sky-400/20 blur-2xl opacity-75 animate-glow-pulse"
        aria-hidden="true"
      />

      {/* Main Liquid Glass Showcase Card */}
      <div className="relative rounded-3xl border border-white/20 bg-[#161E2E]/90 p-6 md:p-8 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-all duration-300">
        {/* Card Header with Browser Dots & Interactive Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-sm" />
            <span className="ml-2 font-mono text-[11px] text-[#8C98B3]">halveron.studio/live</span>
          </div>

          {/* Tab Selector */}
          <div className="flex rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("design")}
              className={`rounded-lg px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all ${
                activeTab === "design"
                  ? "bg-cobalt text-white shadow-md shadow-cobalt/30"
                  : "text-[#8C98B3] hover:text-white"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`rounded-lg px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all ${
                activeTab === "code"
                  ? "bg-cobalt text-white shadow-md shadow-cobalt/30"
                  : "text-[#8C98B3] hover:text-white"
              }`}
            >
              Code
            </button>
            <button
              onClick={() => setActiveTab("performance")}
              className={`rounded-lg px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all ${
                activeTab === "performance"
                  ? "bg-cobalt text-white shadow-md shadow-cobalt/30"
                  : "text-[#8C98B3] hover:text-white"
              }`}
            >
              Metrics
            </button>
          </div>
        </div>

        {/* Tab 1: Design System & UI View */}
        {activeTab === "design" && (
          <div className="mt-6 space-y-4 animate-riseIn">
            {/* Live Component Banner */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cobalt/25 via-white/5 to-cobalt-light/20 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cobalt-light font-semibold">
                  UI / UX Design System
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Preview
                </span>
              </div>
              <h4 className="h-display mt-2 text-lg font-bold text-white">
                Bespoke Digital Experience
              </h4>
              <p className="mt-1 text-xs text-[#B9C1D0] leading-relaxed">
                Atomic Figma design tokens synced directly to production Next.js & Tailwind components.
              </p>
            </div>

            {/* Design Tokens Color Palette Specimen */}
            <div className="grid grid-cols-4 gap-2">
              <div className="rounded-xl border border-white/10 bg-[#2F6BFF]/30 p-2.5 text-center">
                <div className="mx-auto h-5 w-5 rounded-md bg-[#2F6BFF] shadow-xs" />
                <span className="mt-1.5 block font-mono text-[9px] text-[#B9C1D0]">Cobalt</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#7FA4FF]/20 p-2.5 text-center">
                <div className="mx-auto h-5 w-5 rounded-md bg-[#7FA4FF] shadow-xs" />
                <span className="mt-1.5 block font-mono text-[9px] text-[#B9C1D0]">Cobalt Light</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#161E2E] p-2.5 text-center">
                <div className="mx-auto h-5 w-5 rounded-md bg-[#0E131F] border border-white/20 shadow-xs" />
                <span className="mt-1.5 block font-mono text-[9px] text-[#B9C1D0]">Ink Dark</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-emerald-500/20 p-2.5 text-center">
                <div className="mx-auto h-5 w-5 rounded-md bg-emerald-500 shadow-xs" />
                <span className="mt-1.5 block font-mono text-[9px] text-[#B9C1D0]">Success</span>
              </div>
            </div>

            {/* Interactive Mock Specimen Strip */}
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cobalt/20 text-cobalt-light font-mono text-xs font-bold">
                  H
                </div>
                <div>
                  <div className="h-display text-xs font-semibold text-white">Halveron Glass Spec</div>
                  <div className="font-mono text-[10px] text-[#8C98B3]">240+ Components & Tokens</div>
                </div>
              </div>
              <span className="rounded-lg bg-cobalt/20 border border-cobalt/40 px-2.5 py-1 font-mono text-[10px] font-semibold text-cobalt-light">
                Figma v2.4
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Clean Code & Architecture View */}
        {activeTab === "code" && (
          <div className="mt-6 font-mono text-[12px] leading-relaxed text-[#B9C1D0] space-y-2 animate-riseIn">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 font-mono">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] text-[#8C98B3]">
                <span>App.tsx (Next.js 14 App Router)</span>
                <span className="text-emerald-400">TypeScript strict</span>
              </div>
              <pre className="mt-3 overflow-x-auto text-[11px] leading-5 text-[#E2E8F0]">
                <code>
                  <span className="text-pink-400">export async function</span>{" "}
                  <span className="text-yellow-300">ProductExperience</span>() &#123;{"\n"}
                  {"  "}
                  <span className="text-pink-400">const</span> studio ={" "}
                  <span className="text-cyan-300">await</span> getHalveronEngine();{"\n"}
                  {"  "}
                  <span className="text-pink-400">return</span> ({"\n"}
                  {"    "}&lt;<span className="text-blue-400">StudioSuite</span>{"\n"}
                  {"      "}theme=<span className="text-emerald-300">&quot;liquid-glass&quot;</span>{"\n"}
                  {"      "}delivery=<span className="text-emerald-300">&quot;senior-only&quot;</span>{"\n"}
                  {"      "}ownership=<span className="text-emerald-300">&quot;100% IP transfer&quot;</span>{"\n"}
                  {"    "}/&gt;{"\n"}
                  {"  "});{"\n"}
                  &#125;
                </code>
              </pre>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-[11px]">
              <span className="text-[#8C98B3]">Stack: Next.js · TypeScript · Tailwind · Node</span>
              <span className="text-cobalt-light font-semibold">Ready to Ship</span>
            </div>
          </div>
        )}

        {/* Tab 3: Performance & Core Web Vitals View */}
        {activeTab === "performance" && (
          <div className="mt-6 space-y-4 animate-riseIn">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-emerald-500/10 p-4 text-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                  Lighthouse Score
                </span>
                <div className="h-display mt-1 text-3xl font-bold text-emerald-400">100/100</div>
                <span className="font-mono text-[10px] text-[#B9C1D0]">Performance & SEO</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-cobalt/15 p-4 text-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-cobalt-light font-semibold">
                  Largest Contentful Paint
                </span>
                <div className="h-display mt-1 text-3xl font-bold text-white">0.4s</div>
                <span className="font-mono text-[10px] text-[#B9C1D0]">Sub-second loading</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#8C98B3]">Cumulative Layout Shift (CLS)</span>
                <span className="font-bold text-emerald-400">0.00 (Zero Shift)</span>
              </div>
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#8C98B3]">Interaction to Next Paint (INP)</span>
                <span className="font-bold text-emerald-400">32ms (Instant)</span>
              </div>
              <div className="flex justify-between font-mono text-xs">
                <span className="text-[#8C98B3]">WCAG Accessibility</span>
                <span className="font-bold text-emerald-400">Level AA Compliant</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Satellite Badge 1: 9-Week Delivery */}
      <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-[#161E2E]/95 px-4 py-3 shadow-2xl backdrop-blur-xl animate-fluid-blob">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt/20 text-cobalt-light">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
        <div>
          <div className="h-display text-xs font-bold text-white">Rapid Studio Sprints</div>
          <div className="font-mono text-[10px] text-[#8C98B3]">Week 1 live staging access</div>
        </div>
      </div>

      {/* Floating Satellite Badge 2: 100% IP Transfer */}
      <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-[#161E2E]/95 px-4 py-3 shadow-2xl backdrop-blur-xl animate-fluid-blob-slow">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div>
          <div className="h-display text-xs font-bold text-white">100% IP Ownership</div>
          <div className="font-mono text-[10px] text-emerald-400 font-semibold">Signed in contract</div>
        </div>
      </div>
    </div>
  );
}
