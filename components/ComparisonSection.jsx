"use client";

import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const comparisonRows = [
  {
    feature: "Start Date & Kickoff",
    halveron: "1 to 2 Weeks",
    halveronSub: "Fast start with no endless waiting",
    agency: "4 to 8 Weeks (Slow bureaucracy)",
    inHouse: "3 to 6 Months (Long hiring process)",
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
      <div className="relative z-10">
        <SectionHeading
          eyebrow="Why Halveron"
          title="How we compare to traditional alternatives."
          lead="A transparent look at how building with Halveron compares to traditional slow agencies and expensive in-house hiring."
        />

        <div className="mt-14 overflow-x-auto pb-4">
          <div className="min-w-[720px]">
            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1.3fr_1fr_1fr] items-center gap-4 rounded-xs border border-[#111111]/20 dark:border-white/15 bg-white/60 dark:bg-white/5 p-4 font-mono text-xs uppercase tracking-[0.14em]">
              <div className="text-[#777777]">Feature</div>
              <div className="flex items-center gap-2 text-[#2F6BFF] font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]" />
                Halveron Studio
              </div>
              <div className="text-[#555555] dark:text-[#CCCCCC]">Traditional Agency</div>
              <div className="text-[#555555] dark:text-[#CCCCCC]">In-House Team</div>
            </div>

            {/* Table Rows */}
            <div className="mt-3 space-y-2">
              {comparisonRows.map((row, idx) => (
                <Reveal key={row.feature} delay={idx * 50}>
                  <div className="grid grid-cols-[1.2fr_1.3fr_1fr_1fr] items-center gap-4 rounded-xs border border-[#111111]/10 dark:border-white/10 bg-white dark:bg-[#121826] p-5 shadow-2xs transition-all duration-200 hover:border-[#2F6BFF]/40">
                    {/* Feature Name */}
                    <div>
                      <h4 className="serif-display text-lg font-normal text-[#111111] dark:text-white">
                        {row.feature}
                      </h4>
                    </div>

                    {/* Halveron Column (Highlighted) */}
                    <div className="rounded-xs border border-[#2F6BFF]/30 bg-[#2F6BFF]/5 dark:bg-[#2F6BFF]/10 p-3">
                      <span className="serif-display block text-lg font-bold text-[#2F6BFF]">
                        ✓ {row.halveron}
                      </span>
                      <span className="mt-0.5 block font-mono text-[11px] text-[#666666] dark:text-[#AAAAAA]">
                        {row.halveronSub}
                      </span>
                    </div>

                    {/* Traditional Agency */}
                    <div>
                      <span className="font-mono text-xs text-[#666666] dark:text-[#AAAAAA]">
                        {row.agency}
                      </span>
                    </div>

                    {/* In-House Team */}
                    <div>
                      <span className="font-mono text-xs text-[#666666] dark:text-[#AAAAAA]">
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
