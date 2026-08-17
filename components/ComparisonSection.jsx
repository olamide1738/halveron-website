"use client";

import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const comparisonRows = [
  {
    feature: "Time to Kickoff",
    halveron: "1–2 Weeks",
    halveronSub: "Fast discovery & sprint allocation",
    agency: "4–8 Weeks",
    inHouse: "3–6 Months",
  },
  {
    feature: "Team Seniority",
    halveron: "100% Senior Only",
    halveronSub: "The kickoff team writes your code",
    agency: "Junior Bait-and-Switch",
    inHouse: "Variable Hiring Quality",
  },
  {
    feature: "Capability Scope",
    halveron: "Full-Service Studio",
    halveronSub: "Web, Mobile, SaaS & Branding",
    agency: "Single Specialty",
    inHouse: "Requires Multiple Hires",
  },
  {
    feature: "Code & IP Ownership",
    halveron: "100% In Writing",
    halveronSub: "Complete IP transfer on payment",
    agency: "Complex Licensing",
    inHouse: "Full Ownership",
  },
  {
    feature: "Staging & Visibility",
    halveron: "Live From Week 1",
    halveronSub: "Weekly demos & open staging URL",
    agency: "Big Reveal at End",
    inHouse: "Internal Reviews",
  },
  {
    feature: "Cost Efficiency",
    halveron: "~50% Advantage",
    halveronSub: "Lagos timezone + global talent",
    agency: "High Agency Markups",
    inHouse: "Heavy Payroll & Overhead",
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
