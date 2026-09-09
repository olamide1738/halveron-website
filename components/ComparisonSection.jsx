"use client";

import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const comparisonRows = [
  {
    feature: "Start Date & Kickoff",
    halveron: "1 to 2 Weeks",
    halveronSub: "Fast start with no endless bureaucracy",
    agency: "4 to 8 Weeks (Slow onboarding)",
    inHouse: "3 to 6 Months (Recruiting lag)",
  },
  {
    feature: "Who Builds Your Project",
    halveron: "Senior Makers Only",
    halveronSub: "Direct work with principal engineers",
    agency: "Passed to Junior Trainees",
    inHouse: "Hard to Vet & Maintain Talent",
  },
  {
    feature: "Full-Stack Capabilities",
    halveron: "All-in-One Studio",
    halveronSub: "Strategy, design, code & market launch",
    agency: "Single-Silo Specialists",
    inHouse: "Requires Hiring 4+ Specialists",
  },
  {
    feature: "Ownership of Code & IP",
    halveron: "100% Legally Yours",
    halveronSub: "All designs, code & accounts are yours",
    agency: "Tricky Licensing & Retainer Lock-in",
    inHouse: "100% Yours",
  },
  {
    feature: "Visibility on Progress",
    halveron: "Live From Week 1",
    halveronSub: "Open staging preview you can click & test",
    agency: "Kept Secret Until Final Reveal",
    inHouse: "Slow Internal Review Cycles",
  },
  {
    feature: "Cost & Commercial Value",
    halveron: "Predictable Fixed Pricing",
    halveronSub: "World-class quality with zero surprises",
    agency: "Heavy Overhead Markups",
    inHouse: "High Salaries & Equipment Overhead",
  },
];

export function ComparisonSection() {
  return (
    <Section paper className="relative overflow-hidden py-24">
      <div className="relative z-10">
        <SectionHeading
          eyebrow="Why Halveron"
          title="How we compare to traditional alternatives."
          lead="A transparent look at how engineering with Halveron compares to traditional slow agencies and expensive in-house hiring."
        />

        <div className="mt-14 overflow-x-auto pb-4">
          <div className="min-w-[760px]">
            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1.3fr_1fr_1fr] items-center gap-4 rounded-xl border border-[#0F172A]/10 dark:border-white/10 bg-white/80 dark:bg-white/5 p-4 font-sans text-xs font-bold uppercase tracking-wider text-[#475569] dark:text-[#94A3B8]">
              <div>Comparison Metric</div>
              <div className="flex items-center gap-2 text-[#2F6BFF]">
                <span className="h-2 w-2 rounded-full bg-[#2F6BFF] animate-pulse" />
                Halveron Studio
              </div>
              <div>Traditional Agency</div>
              <div>In-House Team</div>
            </div>

            {/* Table Rows */}
            <div className="mt-3 space-y-2.5">
              {comparisonRows.map((row, idx) => (
                <Reveal key={row.feature} delay={idx * 50}>
                  <div className="grid grid-cols-[1.2fr_1.3fr_1fr_1fr] items-center gap-4 rounded-xl border border-[#0F172A]/10 dark:border-white/10 bg-white dark:bg-[#121826] p-5 shadow-sm transition-all duration-200 hover:border-[#2F6BFF]/40">
                    {/* Feature Name */}
                    <div>
                      <h4 className="heading-display text-base font-bold text-[#0F172A] dark:text-white">
                        {row.feature}
                      </h4>
                    </div>

                    {/* Halveron Column (Highlighted) */}
                    <div className="rounded-lg border border-[#2F6BFF]/30 bg-[#2F6BFF]/5 dark:bg-[#2F6BFF]/10 p-3.5">
                      <span className="heading-display flex items-center gap-1.5 text-base font-bold text-[#2F6BFF]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{row.halveron}</span>
                      </span>
                      <span className="mt-0.5 block font-sans text-xs text-[#64748B] dark:text-[#94A3B8]">
                        {row.halveronSub}
                      </span>
                    </div>

                    {/* Traditional Agency */}
                    <div>
                      <span className="font-sans text-xs text-[#64748B] dark:text-[#94A3B8]">
                        {row.agency}
                      </span>
                    </div>

                    {/* In-House Team */}
                    <div>
                      <span className="font-sans text-xs text-[#64748B] dark:text-[#94A3B8]">
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
