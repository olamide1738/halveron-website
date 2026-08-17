"use client";

import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const comparisonRows = [
  {
    feature: "Start Date & Kickoff",
    halveron: "1–2 Weeks",
    halveronSub: "Fast start with no endless waiting",
    agency: "4–8 Weeks (Slow bureaucracy)",
    inHouse: "3–6 Months (Long hiring process)",
  },
  {
    feature: "Who Builds Your Project",
    halveron: "Experienced Experts Only",
    halveronSub: "The creators you meet do the actual work",
    agency: "Passed to Junior Trainees",
    inHouse: "Hard to Vet & Hire Talent",
  },
  {
    feature: "Everything You Need",
    halveron: "All-in-One Team",
    halveronSub: "Design, development, branding & launch",
    agency: "Only One Specialty",
    inHouse: "Requires Hiring 4+ Specialists",
  },
  {
    feature: "Ownership of Files & Code",
    halveron: "100% Legally Yours",
    halveronSub: "All designs, code & accounts are yours",
    agency: "Tricky Licensing & Extra Fees",
    inHouse: "100% Yours",
  },
  {
    feature: "Seeing Your Progress",
    halveron: "Live From Week 1",
    halveronSub: "Test your project as it comes to life",
    agency: "Kept secret until the end",
    inHouse: "Slow internal reviews",
  },
  {
    feature: "Cost & Value",
    halveron: "Up to 50% Better Value",
    halveronSub: "World-class quality with clear fixed pricing",
    agency: "Heavy Agency Markups",
    inHouse: "Expensive Salaries & Office Overhead",
  },
];

export function ComparisonSection() {
  return (
    <Section paper className="relative overflow-hidden py-24">
      {/* Background Glow Blobs */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-cobalt/10 blur-3xl animate-fluid-blob"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cobalt-light/15 blur-3xl animate-fluid-blob-slow"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Why Halveron"
          title="How we compare to traditional alternatives."
          lead="A transparent look at how building with Halveron compares to traditional slow agencies and expensive in-house hiring."
        />

        <div className="mt-14 overflow-x-auto pb-4">
          <div className="min-w-[720px]">
            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1.3fr_1fr_1fr] items-center gap-4 rounded-2xl border border-line/80 dark:border-white/10 bg-white/40 dark:bg-white/5 p-4 backdrop-blur-xl font-mono text-xs uppercase tracking-[0.14em]">
              <div className="text-mute dark:text-[#8C98B3]">Comparison Feature</div>
              <div className="flex items-center gap-2 text-cobalt dark:text-cobalt-light font-bold">
                <span className="h-2 w-2 rounded-full bg-cobalt animate-pulse" />
                Halveron Studio
              </div>
              <div className="text-slate dark:text-[#B9C1D0]">Traditional Agency</div>
              <div className="text-slate dark:text-[#B9C1D0]">In-House Team</div>
            </div>

            {/* Table Rows */}
            <div className="mt-3 space-y-3">
              {comparisonRows.map((row, idx) => (
                <Reveal key={row.feature} delay={idx * 60}>
                  <div className="grid grid-cols-[1.2fr_1.3fr_1fr_1fr] items-center gap-4 rounded-2xl border border-white/80 dark:border-white/10 bg-white/70 dark:bg-[#161E2E]/70 p-5 backdrop-blur-xl shadow-2xs transition-all duration-300 hover:border-cobalt/30 hover:shadow-md">
                    {/* Feature Name */}
                    <div>
                      <h4 className="h-display text-sm font-bold text-ink dark:text-white">
                        {row.feature}
                      </h4>
                    </div>

                    {/* Halveron Column (Highlighted) */}
                    <div className="rounded-xl border border-cobalt/30 bg-cobalt/10 dark:bg-cobalt/20 p-3 backdrop-blur-md">
                      <span className="h-display block text-sm font-bold text-cobalt dark:text-cobalt-light">
                        ✓ {row.halveron}
                      </span>
                      <span className="mt-0.5 block font-mono text-[10px] text-slate dark:text-[#B9C1D0]">
                        {row.halveronSub}
                      </span>
                    </div>

                    {/* Traditional Agency */}
                    <div>
                      <span className="text-sm font-medium text-slate dark:text-[#B9C1D0]">
                        {row.agency}
                      </span>
                    </div>

                    {/* In-House Team */}
                    <div>
                      <span className="text-sm font-medium text-slate dark:text-[#B9C1D0]">
                        {row.inHouse}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
