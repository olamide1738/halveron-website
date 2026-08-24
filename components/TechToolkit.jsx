"use client";

import { useState } from "react";
import { SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { sound } from "../lib/sound";

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
      <path d="M21.3 8.7 8.7 21.3c-1 1-2.6 1-3.6 0l-1.4-1.4c-1-1-1-2.6 0-3.6L16.3 3.7c1-1 2.6-1 3.6 0l1.4 1.4c1 1 1 2.6 0 3.6z" />
      <line x1="10" y1="10" x2="12" y2="12" />
      <line x1="14" y1="6" x2="16" y2="8" />
    </svg>
  ),
  sparkle: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  ),
  palette: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
    </svg>
  ),
  cloud: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
    </svg>
  ),
  database: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  server: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  lock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
  ai: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" />
      <path d="M18 14v1a6 6 0 0 1-12 0v-1" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
};

const techCategories = [
  {
    id: "frontend",
    title: "Web & Mobile Frontend",
    count: "6 tools",
    description: "Responsive layouts, mobile app builds, and instant page transitions.",
    tools: [
      { name: "React", tag: "Interactive UI", iconKey: "react" },
      { name: "Next.js", tag: "Speed & Google SEO", iconKey: "next" },
      { name: "TypeScript", tag: "Bug-Free Code", iconKey: "typescript" },
      { name: "Tailwind CSS", tag: "Modern Styling", iconKey: "tailwind" },
      { name: "React Native", tag: "iOS & Android", iconKey: "mobile" },
      { name: "Three.js / Canvas", tag: "3D & Motion", iconKey: "sparkle" },
    ],
  },
  {
    id: "backend",
    title: "Secure Back-End & APIs",
    count: "6 tools",
    description: "Automated billing, customer accounts, and protected databases.",
    tools: [
      { name: "Node.js", tag: "Fast Server Engine", iconKey: "server" },
      { name: "PostgreSQL", tag: "Secure Database", iconKey: "database" },
      { name: "Stripe API", tag: "Global Payments", iconKey: "lock" },
      { name: "Redis", tag: "Instant Data Cache", iconKey: "zap" },
      { name: "REST & WebSockets", tag: "Real-Time Sync", iconKey: "server" },
      { name: "OpenAI / Claude APIs", tag: "AI Integration", iconKey: "ai" },
    ],
  },
  {
    id: "design",
    title: "Design Systems & UI/UX",
    count: "5 tools",
    description: "Clickable prototypes, visual design tokens, and user research.",
    tools: [
      { name: "Figma", tag: "Collaborative Design", iconKey: "figma" },
      { name: "Design Tokens", tag: "Reusable Styling", iconKey: "palette" },
      { name: "Storybook", tag: "Component Library", iconKey: "book" },
      { name: "Wireframing", tag: "User Journey Maps", iconKey: "ruler" },
      { name: "Framer Motion", tag: "Fluid Animations", iconKey: "sparkle" },
    ],
  },
  {
    id: "cloud",
    title: "Reliable Cloud Hosting & CI/CD",
    count: "5 tools",
    description: "99.99% uptime, global CDN distribution, and automated checks.",
    tools: [
      { name: "Vercel", tag: "Global Edge Network", iconKey: "next" },
      { name: "AWS", tag: "Secure Cloud Storage", iconKey: "cloud" },
      { name: "Docker", tag: "Reliable Containers", iconKey: "container" },
      { name: "GitHub Actions", tag: "Automated Checks", iconKey: "gear" },
      { name: "Cloudflare", tag: "Security & Shield", iconKey: "shield" },
    ],
  },
];

export function TechToolkit() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = techCategories
    .filter((c) => activeCategory === "all" || c.id === activeCategory)
    .map((c) => {
      if (!searchQuery.trim()) return c;
      const q = searchQuery.toLowerCase();
      const filteredTools = c.tools.filter(
        (t) => t.name.toLowerCase().includes(q) || t.tag.toLowerCase().includes(q)
      );
      return { ...c, tools: filteredTools };
    })
    .filter((c) => c.tools.length > 0);

  return (
    <div className="relative">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Our Trusted Stack"
          title="Industry-standard technology for reliable results."
          lead="We select the world's most trusted frameworks, cloud infrastructure, and modern design tools to ensure your product is fast, secure, and maintainable."
        />

        {/* Dynamic Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 rounded-xs border border-[#111111]/20 dark:border-white/15 bg-white/60 dark:bg-white/5 p-1.5 backdrop-blur-sm shrink-0">
          <button
            type="button"
            onClick={() => {
              sound.playHover();
              setActiveCategory("all");
            }}
            className={`rounded-xs px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-all duration-150 cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#2F6BFF] text-white shadow-sm"
                : "text-[#444444] dark:text-[#CCCCCC] hover:text-[#111111] dark:hover:text-white"
            }`}
          >
            All Stack
          </button>
          {techCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                sound.playHover();
                setActiveCategory(c.id);
              }}
              className={`rounded-xs px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-all duration-150 cursor-pointer ${
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

      {/* Real-time Stack Search Bar */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="relative max-w-sm w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools (e.g. Next.js, Stripe, Figma)..."
            className="w-full rounded-xs border border-[#111111]/20 dark:border-white/15 bg-white/40 dark:bg-white/5 px-4 py-2.5 pl-9 font-mono text-xs text-[#111111] dark:text-white placeholder:text-[#888888] focus:border-[#2F6BFF] focus:outline-none transition-colors"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888] text-xs">
            🔍
          </span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-[#888888] hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        <span className="font-mono text-xs text-[#888888] hidden sm:block">
          {techCategories.reduce((acc, c) => acc + c.tools.length, 0)} Verified Technologies
        </span>
      </div>

      {/* Swiss Bento Grid Layout */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat, idx) => (
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
                  <span className="tag-pill">{cat.tools.length} active</span>
                </div>

                <p className="mt-4 text-sm text-[#555555] dark:text-[#CCCCCC] leading-relaxed">
                  {cat.description}
                </p>

                {/* Interactive Tool Cards */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {cat.tools.map((tool) => (
                    <div
                      key={tool.name}
                      onMouseEnter={() => sound.playHover()}
                      className="flex flex-col justify-between rounded-xs border border-[#111111]/10 dark:border-white/10 bg-[#FEFAF7] dark:bg-white/5 p-3.5 transition-all duration-150 hover:border-[#2F6BFF]/50 hover:shadow-xs group cursor-default"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[#2F6BFF] transition-transform duration-200 group-hover:scale-110">
                          {toolIcons[tool.iconKey] || toolIcons.react}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BFF]/40 group-hover:bg-[#2F6BFF]" />
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
          ))
        ) : (
          <div className="col-span-2 rounded-md border border-dashed border-[#111111]/20 dark:border-white/20 p-12 text-center font-mono text-xs text-[#888888]">
            No matching tools found for &ldquo;{searchQuery}&rdquo;. Try another term.
          </div>
        )}
      </div>
    </div>
  );
}
