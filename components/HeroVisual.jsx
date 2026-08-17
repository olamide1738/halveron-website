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
              className={`rounded-lg px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
                activeTab === "design"
                  ? "bg-cobalt text-white shadow-md shadow-cobalt/30"
                  : "text-[#8C98B3] hover:text-white"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`rounded-lg px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
                activeTab === "features"
                  ? "bg-cobalt text-white shadow-md shadow-cobalt/30"
                  : "text-[#8C98B3] hover:text-white"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`rounded-lg px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all ${
                activeTab === "results"
                  ? "bg-cobalt text-white shadow-md shadow-cobalt/30"
                  : "text-[#8C98B3] hover:text-white"
              }`}
            >
              Results
            </button>
          </div>
        </div>

        {/* Tab 1: Design Preview */}
        {activeTab === "design" && (
          <div className="mt-6 space-y-4 animate-riseIn">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cobalt/25 via-white/5 to-cobalt-light/20 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cobalt-light font-semibold">
                  Custom Look & Feel
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Mobile & Desktop
                </span>
              </div>
              <h4 className="h-display mt-2 text-lg font-bold text-white">
                Modern, Tailored Design
              </h4>
              <p className="mt-1 text-xs text-[#B9C1D0] leading-relaxed">
                Custom visual styling made specifically for your brand — easy to navigate and built to build trust.
              </p>
            </div>

            {/* Visual Color Harmony Strip */}
            <div className="grid grid-cols-4 gap-2">
              <div className="rounded-xl border border-white/10 bg-[#2F6BFF]/30 p-2.5 text-center">
                <div className="mx-auto h-5 w-5 rounded-md bg-[#2F6BFF] shadow-xs" />
                <span className="mt-1.5 block font-mono text-[10px] text-[#B9C1D0]">Primary</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#7FA4FF]/20 p-2.5 text-center">
                <div className="mx-auto h-5 w-5 rounded-md bg-[#7FA4FF] shadow-xs" />
                <span className="mt-1.5 block font-mono text-[10px] text-[#B9C1D0]">Accent</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#161E2E] p-2.5 text-center">
                <div className="mx-auto h-5 w-5 rounded-md bg-[#0E131F] border border-white/20 shadow-xs" />
                <span className="mt-1.5 block font-mono text-[10px] text-[#B9C1D0]">Dark Theme</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-emerald-500/20 p-2.5 text-center">
                <div className="mx-auto h-5 w-5 rounded-md bg-emerald-500 shadow-xs" />
                <span className="mt-1.5 block font-mono text-[10px] text-[#B9C1D0]">Buttons</span>
              </div>
            </div>

            {/* Specimen Strip */}
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cobalt/20 text-cobalt-light font-mono text-xs font-bold">
                  ✓
                </div>
                <div>
                  <div className="h-display text-xs font-semibold text-white">Interactive Prototype</div>
                  <div className="font-mono text-[10px] text-[#8C98B3]">Click & test before we build</div>
                </div>
              </div>
              <span className="rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-300">
                Approved
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Easy Features */}
        {activeTab === "features" && (
          <div className="mt-6 space-y-3 animate-riseIn">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cobalt/20 text-cobalt-light text-sm">
                  💳
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">Online Payments & Billing</div>
                  <div className="text-[10px] text-[#8C98B3]">Accept credit cards, Apple Pay & bank transfers</div>
                </div>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 font-semibold">Automatic</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">
                  👤
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">Customer Logins & Portals</div>
                  <div className="text-[10px] text-[#8C98B3]">Easy accounts and order history for clients</div>
                </div>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 font-semibold">Secure</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 text-sm">
                  📊
                </span>
                <div>
                  <div className="text-xs font-semibold text-white">Simple Business Dashboard</div>
                  <div className="text-[10px] text-[#8C98B3]">Track your sales, signups, and customer growth</div>
                </div>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 font-semibold">Real-time</span>
            </div>
          </div>
        )}

        {/* Tab 3: Real Business Results */}
        {activeTab === "results" && (
          <div className="mt-6 space-y-4 animate-riseIn">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-emerald-500/10 p-4 text-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                  Page Load Speed
                </span>
                <div className="h-display mt-1 text-3xl font-bold text-emerald-400">&lt; 1 sec</div>
                <span className="font-mono text-[10px] text-[#B9C1D0]">Instant loading</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-cobalt/15 p-4 text-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-cobalt-light font-semibold">
                  Google Search Ready
                </span>
                <div className="h-display mt-1 text-3xl font-bold text-white">100%</div>
                <span className="font-mono text-[10px] text-[#B9C1D0]">Optimized to be found</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#8C98B3]">Mobile Phone Compatibility</span>
                <span className="font-bold text-emerald-400">100% Responsive</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#8C98B3]">Uptime & Reliability</span>
                <span className="font-bold text-emerald-400">99.9% Always Online</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#8C98B3]">Easy Content Updates</span>
                <span className="font-bold text-emerald-400">Simple Admin Panel</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Satellite Badge 1: Fast Delivery */}
      <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-[#161E2E]/95 px-4 py-3 shadow-2xl backdrop-blur-xl animate-fluid-blob">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cobalt/20 text-cobalt-light">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
        <div>
          <div className="h-display text-xs font-bold text-white">Fast Turnaround</div>
          <div className="font-mono text-[10px] text-[#8C98B3]">Live preview from week one</div>
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
          <div className="h-display text-xs font-bold text-white">100% Yours</div>
          <div className="font-mono text-[10px] text-emerald-400 font-semibold">You own all files & accounts</div>
        </div>
      </div>
    </div>
  );
}
