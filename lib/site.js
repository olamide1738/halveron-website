// Single source of truth for site copy, nav, and contact details.
// Swap the placeholder contact/booking values here and the whole site updates.

export const site = {
  name: "Halveron",
  tagline: "Bring your idea to us — strategy, design, and engineering under one roof.",
  description:
    "Halveron is a full-service digital product studio and agency. We design, build, and scale websites, mobile apps, SaaS platforms, and brand identities — taking your idea from concept to shipped product.",
  url: "https://halveron.com", // TODO: replace with real domain
  email: "hello@halveron.com", // TODO: replace with real inbox
  phone: "+234 000 000 0000", // TODO: replace with real number
  whatsapp: "https://wa.me/234000000000", // TODO: replace
  bookingUrl: "https://cal.com/halveron/discovery", // TODO: replace with real Cal.com/Calendly link
  location: "Lagos, Nigeria · working UTC+1",

  // Analytics. Leave empty to disable completely — no script is loaded and the
  // cookie notice never appears. Set to your Plausible domain to switch on.
  analyticsDomain: "", // TODO: e.g. "halveron.com"

  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/company/halveron" },
    { label: "X", href: "https://x.com/halveron" },
    { label: "GitHub", href: "https://github.com/halveron" },
    { label: "Dribbble", href: "https://dribbble.com/halveron" },
  ],
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Registered-entity details used by the privacy policy and terms pages.
// These appear verbatim in legal copy — get them right before publishing.
export const legal = {
  entityName: "Halveron Ltd", // TODO: exact registered company name
  registrationNumber: "RC 0000000", // TODO: CAC registration number
  registeredAddress: "Lagos, Nigeria", // TODO: full registered address
  jurisdiction: "the Federal Republic of Nigeria",
  privacyContact: "privacy@halveron.com", // TODO: real privacy inbox
  // Date the current versions of /privacy and /terms took effect.
  lastUpdated: "4 August 2026",
};

export const services = [
  {
    slug: "web",
    title: "Web Design & Development",
    summary:
      "Bespoke marketing sites, brand experiences, and platforms built for speed and conversion.",
    detail:
      "We design and build modern web experiences using Next.js and Tailwind CSS — combining high-end visual design with sub-second performance, Core Web Vitals optimization, and CMS flexibility.",
    deliverables: [
      "Custom web design & Figma prototypes",
      "Next.js front-end & CMS integration",
      "Core Web Vitals 100/100 performance",
      "WCAG AA accessibility & responsive layout",
      "SEO & analytics instrumentation",
    ],
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    summary:
      "iOS and Android apps designed for intuitive UX, offline resilience, and app store success.",
    detail:
      "From React Native cross-platform apps to native iOS/Android experiences, we build mobile products with fluid animations, push notifications, offline storage, and store submission.",
    deliverables: [
      "Cross-platform (React Native / Flutter) or native build",
      "Mobile UI/UX design & micro-interactions",
      "Offline-first data sync & push notifications",
      "App Store & Play Store publishing",
      "Crash monitoring & post-launch support",
    ],
  },
  {
    slug: "saas",
    title: "SaaS Product Engineering",
    summary:
      "Multi-tenant B2B web applications with subscriptions, roles, and admin dashboards.",
    detail:
      "We architect multi-tenant SaaS platforms from day one — handling authentication, subscription billing, role permissions, automated dunning, and operational admin tools.",
    deliverables: [
      "Multi-tenant app architecture & database design",
      "Stripe subscriptions, billing, & dunning",
      "Role-based access & admin control panel",
      "Product analytics & data visualization UI",
      "Security & load testing",
    ],
  },
  {
    slug: "mvp",
    title: "MVP Launchpad",
    summary:
      "Turn your idea into a market-ready, investor-grade product in weeks.",
    detail:
      "An MVP is about de-risking your idea. We scope ruthlessly to your core loop, ship a production-grade product in 6-10 weeks, and give you everything needed to demo, sell, and raise funding.",
    deliverables: [
      "Scope definition & feature prioritization",
      "High-fidelity UI/UX design & prototyping",
      "Core product loop development",
      "Auth, payments, & database setup",
      "Production deployment & IP handover",
    ],
  },
  {
    slug: "branding",
    title: "Branding & Visual Systems",
    summary:
      "Logos, visual identity, brand guidelines, and design systems that command authority.",
    detail:
      "We craft distinct visual brand identities — logo marks, typography rules, color palettes, and digital style guides — ensuring your brand looks cohesive across every surface.",
    deliverables: [
      "Brand positioning & messaging strategy",
      "Logo system & icon suites",
      "Typography & color hierarchy",
      "Digital brand guidelines document",
      "Launch & marketing asset kit",
    ],
  },
  {
    slug: "ui-ux",
    title: "UI/UX & Design Systems",
    summary:
      "User research, interactive prototypes, and reusable Figma design systems.",
    detail:
      "We design intuitive, conversion-focused user interfaces. You get a complete component library in Figma, tested user flows, and interactive prototypes before code is written.",
    deliverables: [
      "User research & information architecture",
      "Interactive clickable prototypes",
      "Figma design system & UI kit",
      "Developer handoff specs & tokens",
      "UX audit & conversion optimization",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery sprint",
    duration: "1–2 weeks",
    body: "A paid, standalone engagement. We interrogate the problem, map the users, agree what success means, and produce a scoped plan with real numbers. You keep everything even if you never hire us again.",
  },
  {
    step: "02",
    title: "Design",
    duration: "2–4 weeks",
    body: "Flows, then screens, then a component system. You review a clickable prototype — not a static deck — so the thing gets corrected before code makes it expensive.",
  },
  {
    step: "03",
    title: "Build",
    duration: "4–12 weeks",
    body: "Two-week sprints, a demo at the end of each, and a staging URL you can open at any time. Senior engineers only, so you are not funding someone's training.",
  },
  {
    step: "04",
    title: "Quality assurance",
    duration: "Continuous",
    body: "Automated tests plus structured manual QA across devices, alongside performance, accessibility, and security review. Bugs are found by us, not by your users.",
  },
  {
    step: "05",
    title: "Launch",
    duration: "1 week",
    body: "Deployment, monitoring, analytics, store submission, and a handover session with documentation. You get the keys to everything — repositories, accounts, infrastructure.",
  },
  {
    step: "06",
    title: "Scale",
    duration: "Ongoing",
    body: "Optional retainer: monitoring, iteration, and a monthly report against agreed targets. We keep improving the product instead of disappearing at launch.",
  },
];

export const differentiators = [
  {
    title: "Senior engineers only",
    body: "The people in your kickoff are the people writing your code. No bait-and-switch to juniors after the contract is signed.",
  },
  {
    title: "You own everything",
    body: "Code, designs, accounts, infrastructure. Ownership transfers to you in writing, and our whole team signs IP assignments so that promise actually holds.",
  },
  {
    title: "Transparent reporting",
    body: "A staging URL from week one, a demo every sprint, and a written monthly report. You never have to ask what we are working on.",
  },
  {
    title: "Strategy under the same roof",
    body: "Research, design, engineering, and growth in one team — so nothing gets lost in the handoffs between three separate vendors.",
  },
];

/* ---------------------------------------------------------------------------
   TECH STACK  (home + services)

   The tools we actually reach for. This is genuine capability information, not
   social proof — safe to show now. Keep it honest: only list things the team
   really works in, and prune anything that stops being true.
--------------------------------------------------------------------------- */
export const techStack = [
  {
    group: "Front-end",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Flutter"],
  },
  {
    group: "Back-end",
    items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST"],
  },
  {
    group: "Infrastructure",
    items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Cloudflare", "Terraform"],
  },
  {
    group: "Design & product",
    items: ["Figma", "Storybook", "Linear", "Sentry", "PostHog", "Plausible"],
  },
];

/* ---------------------------------------------------------------------------
   PROMISES  (home page)

   Concrete commitments we are prepared to put in a contract — not vibes. Each
   is something a prospect can hold us to, which is exactly why they reassure.
--------------------------------------------------------------------------- */
export const promises = [
  {
    stat: "Week 1",
    title: "A staging URL from week one",
    body: "You can open the product in a browser from the first sprint and watch it take shape — no black box, no big reveal at the end.",
  },
  {
    stat: "100%",
    title: "Full ownership, in writing",
    body: "Code, designs, and accounts are yours on final payment. Every person who touches the work has signed an IP assignment.",
  },
  {
    stat: "1 day",
    title: "One-business-day replies",
    body: "During an engagement you get a response to anything you raise within one working day — usually a lot sooner.",
  },
  {
    stat: "0",
    title: "Zero junior bait-and-switch",
    body: "The senior people you meet in the kickoff are the ones who build it. We don't quietly hand your product to trainees.",
  },
];

/* ---------------------------------------------------------------------------
   INDUSTRIES  (home + services)

   Sectors we're set up to work in. Genuine capability/positioning info — safe
   to show. The `icon` maps to a key in components/Icon.jsx.
--------------------------------------------------------------------------- */
export const industries = [
  {
    icon: "fintech",
    name: "Fintech",
    body: "Payments, lending, and compliance-heavy products where uptime and trust are non-negotiable.",
  },
  {
    icon: "health",
    name: "Health & wellness",
    body: "Patient-facing apps and clinical tooling, built privacy-first and genuinely accessible.",
  },
  {
    icon: "commerce",
    name: "E-commerce & retail",
    body: "Storefronts and marketplaces engineered for conversion and for scale on sale days.",
  },
  {
    icon: "saasIndustry",
    name: "SaaS & B2B",
    body: "Multi-tenant platforms with roles, billing, and analytics designed in from day one.",
  },
  {
    icon: "logistics",
    name: "Logistics & operations",
    body: "Dispatch, routing, and internal tooling that replaces spreadsheets and manual work.",
  },
  {
    icon: "media",
    name: "Media & education",
    body: "Content platforms and learning portals that stay fast under peak, exam-day load.",
  },
];

export const engagementModels = [
  {
    name: "Discovery sprint",
    price: "from $6,000",
    forWhom: "You know the problem but not the shape of the solution.",
    includes: [
      "1–2 weeks, fixed price",
      "Research, flows, and technical plan",
      "Scoped build proposal with real numbers",
      "Yours to keep, no obligation to continue",
    ],
  },
  {
    name: "Fixed-scope project",
    price: "from $25,000",
    forWhom: "The scope is clear and you want a defined price and date.",
    includes: [
      "MVP builds, sites, and app launches",
      "Milestone-based payment schedule",
      "Sprint demos and staging access",
      "Full handover and ownership transfer",
    ],
    featured: true,
  },
  {
    name: "Retained team",
    price: "from $8,000/mo",
    forWhom: "You need ongoing capacity, not a one-off delivery.",
    includes: [
      "Named senior team, agreed capacity",
      "Rolling roadmap, re-prioritised monthly",
      "Monitoring, updates, and improvement",
      "Monthly written report",
    ],
  },
];

// Work case studies.
// ⚠️ DEMO CONTENT — the projects, metrics, and results below are invented to
// show the portfolio populated. Replace each entry with a real case study
// before launch, or the numbers are fabrication. Remove the `result`/`summary`
// fields to fall back to the neutral "case study in progress" card.
export const workSlots = [
  {
    label: "Case study 01",
    sector: "Fintream",
    type: "Mobile App & Payments Platform",
    industry: "Fintech",
    image: "/work/fintream.jpg",
    summary:
      "A consumer payments app and internal operations dashboard, built and launched in one engagement.",
    result: "9 weeks to App Store launch",
    year: "2025",
    tags: ["React Native", "iOS & Android", "Stripe API", "Design System"],
  },
  {
    label: "Case study 02",
    sector: "Northwind Labs",
    type: "Multi-tenant SaaS Platform",
    industry: "SaaS",
    image: "/work/northwind.jpg",
    summary:
      "A B2B analytics platform with multi-tenancy, role permissions, and subscription billing designed in from day one.",
    result: "40% faster onboarding",
    year: "2025",
    tags: ["Next.js 14", "PostgreSQL", "Tailwind CSS", "Analytics Hub"],
  },
  {
    label: "Case study 03",
    sector: "Orbit Retail",
    type: "Storefront & Brand Identity",
    industry: "E-commerce",
    image: "/work/orbit.jpg",
    summary:
      "A headless storefront and a full brand system, from naming and logo design through launch assets.",
    result: "2.1× conversion at launch",
    year: "2024",
    tags: ["Headless Commerce", "Figma Token System", "Core Web Vitals 100/100"],
  },
  {
    label: "Case study 04",
    sector: "Vantage",
    type: "Operations & Dispatch Tooling",
    industry: "Logistics",
    image: "/work/vantage.jpg",
    summary:
      "Internal routing and live dispatch tooling that replaced a tangle of spreadsheets with real-time mapping.",
    result: "6 hrs/week saved per dispatcher",
    year: "2024",
    tags: ["Live Map Tracking", "WebSockets Sync", "Node.js", "Docker"],
  },
];

export const faqs = [
  {
    q: "How quickly can you start?",
    a: "Discovery sprints usually begin within one to two weeks of signing. Full build teams are scheduled a little further out, so it is worth talking early if you have a fixed launch date.",
  },
  {
    q: "Who owns the code and the IP?",
    a: "You do. Ownership of all custom deliverables transfers to you on full payment, in writing. Every employee and contractor at Halveron signs an IP assignment, so the chain of ownership is unbroken from the person who wrote the code to you.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes — most of our work is with clients in Europe and North America. Lagos sits in UTC+1, which gives us a full working-day overlap with Europe and a solid morning overlap with the US East Coast.",
  },
  {
    q: "What does a project cost?",
    a: "Discovery sprints start at $6,000, fixed-scope builds at $25,000, and retainers at $8,000 per month. We also quote in naira for Nigerian clients. Every proposal breaks down exactly what drives the number.",
  },
  {
    q: "What happens after launch?",
    a: "You can take the product in-house — we hand over documentation, repositories, and accounts — or keep us on a retainer for monitoring, updates, and continued iteration. Both are normal; neither is locked in.",
  },
];

/* ---------------------------------------------------------------------------
   TRUST & PROOF

   ⚠️⚠️  DEMO CONTENT — NOT REAL  ⚠️⚠️
   The entries below are SAMPLE data added to show the site fully populated.
   The people, companies, quotes, and logos are invented. You MUST replace or
   remove all of it before the site goes live — publishing invented testimonials
   or client names is misleading and a fast way to lose a diligent buyer.

   To go back to honest empty states, set any of these arrays to [] and the
   matching component reverts to its "not yet" placeholder automatically.
--------------------------------------------------------------------------- */

// DEMO — replace with real client quotes (with written permission for name + company).
// Shape: { quote, name, role, company, service? }
export const testimonials = [
  {
    quote:
      "Halveron shipped our MVP in nine weeks and it held up when we hit the front page. The staging URL from week one meant there were no surprises — we watched it come together.",
    name: "Amara Okafor",
    role: "Founder & CEO",
    company: "Paystream",
    service: "MVP build",
  },
  {
    quote:
      "The rare agency that pushes back. They cut a third of our planned scope and were right about every cut. We launched sooner and cleaner than we'd have managed ourselves.",
    name: "Daniel Meyer",
    role: "Head of Product",
    company: "Northwind Labs",
    service: "SaaS engineering",
  },
  {
    quote:
      "Senior people from day one, exactly as promised. No hand-off to juniors, no ghosting after launch. The monthly report is the clearest I've had from any vendor.",
    name: "Priya Raman",
    role: "CTO",
    company: "Meridian Health",
    service: "Mobile app",
  },
];

// DEMO — replace with clients you have permission to name publicly.
// Shape: { name, url? } — add `logo: "/logos/acme.svg"` once you have assets.
export const clients = [
  { name: "Paystream", industry: "Fintech & Payments", scope: "SaaS & Web App", symbol: "💳" },
  { name: "Northwind Labs", industry: "AI & Infrastructure", scope: "Design System & Web", symbol: "⚡" },
  { name: "Meridian Health", industry: "HealthTech", scope: "iOS & Android App", symbol: "🏥" },
  { name: "Kola & Co", industry: "E-Commerce & Luxury", scope: "Bespoke Web Design", symbol: "✨" },
  { name: "Vantage", industry: "B2B Enterprise", scope: "Product Engineering", symbol: "📊" },
  { name: "Orbit Retail", industry: "Omnichannel Retail", scope: "Brand & Platform", symbol: "🪐" },
];

// DEMO — replace with your real team. Avatars are generated as monograms from
// `name`, so no photography is needed to launch.
// Shape: { name, role, bio, links?: [{ label, href }] }
export const team = [
  {
    name: "Tunde Bakare",
    role: "Founder & Principal Engineer",
    avatar: "/team/tunde.jpg",
    bio: "Fifteen years building products across fintech and health. Writes code every week and sits in every kickoff.",
    links: [{ label: "LinkedIn", href: "#" }],
  },
  {
    name: "Sarah Adeyemi",
    role: "Design Lead",
    avatar: "/team/sarah.jpg",
    bio: "Leads research and interface design. Believes a component library beats a stack of pretty screens every time.",
    links: [{ label: "Dribbble", href: "#" }],
  },
  {
    name: "Michael Chen",
    role: "Engineering Lead",
    avatar: "/team/michael.jpg",
    bio: "Back-end and infrastructure. Keeps the boring foundations boring so the product can be interesting.",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    name: "Ngozi Eze",
    role: "Delivery & Growth",
    avatar: "/team/ngozi.jpg",
    bio: "Owns the weekly report and the post-launch roadmap. Your single point of contact when you need an answer fast.",
    links: [{ label: "LinkedIn", href: "#" }],
  },
];

// DEMO — replace with real open roles. Set to [] for the "no roles right now"
// state that still invites speculative applications.
// Shape: { title, type, location, summary }
export const openings = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time",
    location: "Lagos / Remote (UTC±3)",
    summary:
      "Ship production React and Node across client products. You'll own features end to end and mentor without managing.",
  },
  {
    title: "Product Designer",
    type: "Full-time",
    location: "Lagos / Remote (UTC±3)",
    summary:
      "Research, flows, and interface design that ships. You'll work next to engineering, not throw work over a wall.",
  },
];

/* ---------------------------------------------------------------------------
   CREDIBILITY STATS  (home page + about page)

   ⚠ The cost-advantage figure below was carried over from the original home
   page. It is currently an UNSOURCED claim. Before launch, either substantiate
   it — state the comparison basis — or soften it to something you can defend
   in a sales call. A precise-looking number invites exactly the scrutiny it
   cannot survive.
--------------------------------------------------------------------------- */
export const stats = [
  {
    value: "~50%",
    label: "Cost-to-quality advantage versus comparable US and EU studios.",
  },
  {
    value: "UTC+1",
    label:
      "A full overlap with the European workday and US mornings — real-time, not async-only.",
  },
  {
    value: "Senior-only",
    label:
      "Experienced people on your product from day one — no junior bait-and-switch.",
  },
];

