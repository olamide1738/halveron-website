"use client";

import { useState } from "react";
import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

// Line-style SVG icons for tools
const toolIcons = {
  react: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  next: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 20 2 20" />
    </svg>
  ),
  typescript: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  tailwind: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6 1 2.4 1.8C13.9 12.1 15.6 13.8 19 13.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-1-2.4-1.8C17.1 7.7 15.4 6 12 6z" />
    </svg>
  ),
  mobile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
    </svg>
  ),
  zap: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  figma: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  ),
  book: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  ruler: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.3 15.3l-7.6 7.6a2 2 0 0 1-2.8 0l-9.6-9.6a2 2 0 0 1 0-2.8l7.6-7.6a2 2 0 0 1 2.8 0l9.6 9.6a2 2 0 0 1 0 2.8z" />
      <line x1="8.5" y1="5.5" x2="11.5" y2="8.5" />
      <line x1="12.5" y1="9.5" x2="15.5" y2="12.5" />
    </svg>
  ),
  chart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  server: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2.5" />
      <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2.5" />
    </svg>
  ),
  terminal: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  database: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  graphql: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <circle cx="4" cy="18" r="2" />
      <circle cx="20" cy="18" r="2" />
      <line x1="12" y1="6" x2="4" y2="16" />
      <line x1="12" y1="6" x2="20" y2="16" />
      <line x1="6" y1="18" x2="18" y2="18" />
    </svg>
  ),
  refresh: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6" />
      <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    </svg>
  ),
  cloud: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  container: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  ),
  gear: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  cube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
};

const techCategories = [
  {
    id: "frontend",
    title: "Web & Mobile Design",
    count: "6 tools",
    description: "Fast loading speeds, smooth animations, and clean layouts that work on any screen.",
    accent: "from-blue-500/20 to-cobalt/30",
    tools: [
      { name: "React", tag: "Modern Web Apps", iconKey: "react" },
      { name: "Next.js", tag: "Instant Page Loads", iconKey: "next" },
      { name: "TypeScript", tag: "Error-Free Code", iconKey: "typescript" },
      { name: "Tailwind CSS", tag: "Custom Styling", iconKey: "tailwind" },
      { name: "React Native", tag: "iPhone & Android", iconKey: "mobile" },
      { name: "Flutter", tag: "Mobile Framework", iconKey: "zap" },
    ],
  },
  {
    id: "design",
    title: "Design & Experience",
    count: "5 tools",
    description: "Clickable prototypes, custom logos, and clear interfaces designed for real people.",
    accent: "from-purple-500/20 to-cobalt/30",
    tools: [
      { name: "Figma", tag: "Interactive Prototypes", iconKey: "figma" },
      { name: "Storybook", tag: "Design Library", iconKey: "book" },
      { name: "Linear", tag: "Project Schedule", iconKey: "ruler" },
      { name: "PostHog", tag: "Customer Insights", iconKey: "chart" },
      { name: "Plausible", tag: "Visitor Analytics", iconKey: "chart" },
    ],
  },
  {
    id: "backend",
    title: "Secure Data & Accounts",
    count: "6 tools",
    description: "Safe customer logins, automated payments, and reliable cloud databases.",
    accent: "from-emerald-500/20 to-cobalt/30",
    tools: [
      { name: "Node.js", tag: "Fast Server Engine", iconKey: "server" },
      { name: "Python", tag: "Automation & Data", iconKey: "terminal" },
      { name: "PostgreSQL", tag: "Secure Database", iconKey: "database" },
      { name: "Redis", tag: "Instant Data Cache", iconKey: "zap" },
      { name: "GraphQL", tag: "Smart Data Loading", iconKey: "graphql" },
      { name: "REST APIs", tag: "Payment Sync", iconKey: "refresh" },
    ],
  },
  {
    id: "cloud",
    title: "Reliable Cloud Hosting",
    count: "6 tools",
    description: "99.9% uptime, global speed networks, and automated daily backups.",
    accent: "from-amber-500/20 to-cobalt/30",
    tools: [
      { name: "Vercel", tag: "Global Speed Network", iconKey: "next" },
      { name: "AWS", tag: "Secure Cloud Storage", iconKey: "cloud" },
      { name: "Docker", tag: "Reliable Containers", iconKey: "container" },
      { name: "GitHub Actions", tag: "Automated Checks", iconKey: "gear" },
      { name: "Cloudflare", tag: "Security & Shield", iconKey: "shield" },
      { name: "Terraform", tag: "Cloud Setup", iconKey: "cube" },
    ],
  },
];

export function TechToolkit() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? techCategories
      : techCategories.filter((c) => c.id === activeCategory);

  return (
    <div className="relative">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Our Trusted Tools"
          title="Industry-standard technology for reliable results."
          lead="We use the world's most trusted design tools and modern software to ensure your website or app is fast, secure, and easy to maintain."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 rounded-xs border border-[#111111]/20 dark:border-white/15 bg-white/60 dark:bg-white/5 p-1.5 backdrop-blur-sm shrink-0">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-xs px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-all duration-150 ${
              activeCategory === "all"
                ? "bg-[#2F6BFF] text-white shadow-sm"
                : "text-[#444444] dark:text-[#CCCCCC] hover:text-[#111111] dark:hover:text-white"
            }`}
          >
            All Tools
          </button>
          {techCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`rounded-xs px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-all duration-150 ${
                activeCategory === c.id
                  ? "bg-[#2F6BFF] text-white shadow-sm"
                  : "text-[#444444] dark:text-[#CCCCCC] hover:text-[#111111] dark:hover:text-white"
              }`}
            >
              {c.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Swiss Bento Grid Layout */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {filteredCategories.map((cat, idx) => (
          <Reveal key={cat.id} delay={idx * 80}>
            <div className="rounded-md border border-[#111111]/15 dark:border-white/10 bg-white dark:bg-[#121826] p-8 shadow-sm transition-all duration-300 hover:border-[#2F6BFF]/40">
              <div className="flex items-center justify-between border-b border-[#111111]/10 dark:border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#2F6BFF]">
                    0{idx + 1}
                  </span>
                  <h3 className="serif-display text-2xl font-normal text-[#111111] dark:text-white">
                    {cat.title}
                  </h3>
                </div>
                <span className="tag-pill">{cat.count}</span>
              </div>

              <p className="mt-4 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                {cat.description}
              </p>

              {/* Interactive Tool Cards */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col justify-between rounded-xs border border-[#111111]/10 dark:border-white/10 bg-[#FEFAF7] dark:bg-white/5 p-3.5 transition-all duration-150 hover:border-[#2F6BFF]/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#2F6BFF]">
                        {toolIcons[tool.iconKey]}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]/40" />
                    </div>
                    <div className="mt-3">
                      <span className="font-mono text-xs font-bold text-[#111111] dark:text-white block">
                        {tool.name}
                      </span>
                      <span className="mt-0.5 block font-mono text-[10px] text-[#777777] dark:text-[#AAAAAA]">
                        {tool.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
