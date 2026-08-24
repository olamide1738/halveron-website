// Single source of truth for site copy, nav, and contact details.
// Swap the placeholder contact/booking values here and the whole site updates.

export const site = {
  name: "Halveron",
  tagline: "Bring your idea to us: strategy, design, and engineering under one roof.",
  description:
    "Halveron is a full-service digital product studio and agency. We design, build, and scale websites, mobile apps, SaaS platforms, and brand identities, taking your idea from concept to shipped product.",
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
  { label: "Journal", href: "/journal" },
  { label: "Open Source", href: "/open-source" },
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
      "Beautiful, fast websites that turn visitors into paying customers.",
    detail:
      "We design and build modern websites that look incredible on every phone, tablet, and computer. They load instantly, are easy for you to update, and make your business stand out from competitors.",
    deliverables: [
      "Custom website design crafted specifically for your brand",
      "Flawless display on mobile phones, tablets, and laptops",
      "Lightning-fast loading speeds so you never lose visitors",
      "Easy content editor so your team can change text and photos",
      "Google search optimization to help new customers discover you",
    ],
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    summary:
      "Smooth mobile apps for iPhone and Android that your customers will love using.",
    detail:
      "From your first idea to the official App Store launch, we create easy-to-use mobile apps with beautiful navigation, instant notifications, and reliable performance even on slow connections.",
    deliverables: [
      "Works smoothly on both Apple iPhones and Android devices",
      "Clean, user-friendly screens and simple navigation",
      "Instant push notifications to engage your customers",
      "Full setup and publishing on Apple App Store & Google Play",
      "Ongoing technical support and app updates after launch",
    ],
  },
  {
    slug: "saas",
    title: "Web Apps & Customer Portals",
    summary:
      "Custom online software with user accounts, automated billing, and dashboards.",
    detail:
      "Have an idea for an online tool, client portal, or software business? We build complete web platforms with customer signups, secure credit card payments, team permissions, and simple control panels.",
    deliverables: [
      "Secure customer accounts and password management",
      "Automated card payments, subscriptions, and receipts",
      "Clear admin dashboard to manage customers, orders, and data",
      "Visual charts and simple reports to track your business growth",
      "Bank-level data security and reliable daily backups",
    ],
  },
  {
    slug: "mvp",
    title: "Fast Product Launch (MVP)",
    summary:
      "Turn your product idea into a real, working product in weeks.",
    detail:
      "Don't waste months building features customers might not need. We help you focus on what matters most, build a working version in 6 to 10 weeks, and get you ready to demo, sell, and attract investors.",
    deliverables: [
      "Clear action plan focusing on the most valuable features",
      "Interactive clickable design you can test before code is written",
      "Fully working product ready for real customers to sign up and pay",
      "Secure customer signups and payment processing built-in",
      "Complete ownership: all code and accounts belong to you",
    ],
  },
  {
    slug: "branding",
    title: "Brand Identity & Logo Design",
    summary:
      "Distinctive logos, colors, and styling that make your business look world-class.",
    detail:
      "A great brand builds instant credibility. We create memorable logo marks, cohesive color schemes, modern typography, and complete visual guidelines so your business looks professional everywhere.",
    deliverables: [
      "Brand messaging strategy and memorable tagline",
      "Complete logo package for your website, social media, and print",
      "Curated color palette and font selections",
      "Simple visual guide showing how to use your brand anywhere",
      "Ready-to-use social media graphics and slide deck templates",
    ],
  },
  {
    slug: "ui-ux",
    title: "User Experience (UI/UX) Design",
    summary:
      "Intuitive screen design that makes your website or app effortless to use.",
    detail:
      "Great design makes complicated things feel simple. We map out how customers will use your app, design every screen with care, and test them so your users never feel lost or frustrated.",
    deliverables: [
      "Customer journey mapping to remove confusion and friction",
      "Interactive clickable prototypes you can test on your phone",
      "Complete library of design components (buttons, forms, cards)",
      "Ready-to-build specifications for developers",
      "Design review to increase user signups and sales",
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Strategy & Planning",
    duration: "1 to 2 weeks",
    body: "We sit down with you to understand your goals, your customers, and what needs to be built. We deliver a clear roadmap and a fixed quote with no hidden surprises.",
  },
  {
    step: "02",
    title: "Visual Design",
    duration: "2 to 4 weeks",
    body: "We design every screen and create an interactive prototype you can click through on your phone or laptop, so you see exactly how it works before any code is written.",
  },
  {
    step: "03",
    title: "Building & Development",
    duration: "4 to 12 weeks",
    body: "Our experienced team builds your product in two-week phases. You receive a private preview link so you can watch your project come together in real time.",
  },
  {
    step: "04",
    title: "Testing & Polishing",
    duration: "Continuous",
    body: "We test every button, form, and page across iPhones, Androids, Macs, and PCs to ensure everything runs smoothly, securely, and error-free.",
  },
  {
    step: "05",
    title: "Official Launch",
    duration: "1 week",
    body: "We connect your domain, set up analytics, submit mobile apps to the App Stores, and hand over all account logins and files directly to you.",
  },
  {
    step: "06",
    title: "Ongoing Care & Growth",
    duration: "Ongoing",
    body: "Need help after launch? We can stay on as your technical partner to add new features, keep everything running fast, and help your business grow.",
  },
];

export const differentiators = [
  {
    title: "Experienced creators only",
    body: "You work directly with seasoned designers and engineers who build your product. No handing off your project to junior trainees.",
  },
  {
    title: "You own 100% of everything",
    body: "All designs, code, accounts, and intellectual property belong entirely to you in writing. You are never locked in or held hostage.",
  },
  {
    title: "Clear, transparent updates",
    body: "A private preview link from week one, regular demonstrations, and plain-English updates. You always know exactly what is happening.",
  },
  {
    title: "Everything under one roof",
    body: "Strategy, design, development, and launch all handled by one friendly team, so nothing gets lost between multiple separate vendors.",
  },
];

/* ---------------------------------------------------------------------------
   TECH STACK  (home + services)
--------------------------------------------------------------------------- */
export const techStack = [
  {
    group: "Web & Mobile",
    items: ["React", "Next.js", "Mobile Apps (iOS & Android)", "Tailwind CSS", "Interactive Web"],
  },
  {
    group: "Secure Back-end",
    items: ["Cloud Databases", "Secure APIs", "Automated Billing", "Fast Data Sync"],
  },
  {
    group: "Reliable Hosting",
    items: ["Vercel", "Amazon AWS", "High-Speed CDN", "Automated Backups"],
  },
  {
    group: "Design & Management",
    items: ["Figma Design", "Real-time Tracking", "Analytics & Insights", "Privacy-Friendly Stats"],
  },
];

/* ---------------------------------------------------------------------------
   PROMISES  (home page)
--------------------------------------------------------------------------- */
export const promises = [
  {
    stat: "Week 1",
    title: "A working preview from week one",
    body: "You can open and test your project in your browser from the very first week, with no mystery and no waiting months for a big reveal.",
  },
  {
    stat: "100%",
    title: "Full legal ownership in writing",
    body: "All code, custom designs, and accounts belong entirely to you on final payment. No lock-in, ever.",
  },
  {
    stat: "1 day",
    title: "Quick replies within 1 business day",
    body: "During your project, you get helpful, direct answers from our team within one working day, and usually much faster.",
  },
  {
    stat: "0",
    title: "Zero junior bait-and-switch",
    body: "The experienced team you meet at the start is the exact team creating your product. We do not pass your work to trainees.",
  },
];

/* ---------------------------------------------------------------------------
   INDUSTRIES  (home + services)
--------------------------------------------------------------------------- */
export const industries = [
  {
    icon: "fintech",
    name: "Finance & Payments",
    body: "Online payments, money transfers, and financial tools where security and trust are essential.",
  },
  {
    icon: "health",
    name: "Health & Wellness",
    body: "Patient booking, clinic portals, and wellness apps that are confidential and easy to use.",
  },
  {
    icon: "commerce",
    name: "Online Stores & Retail",
    body: "Fast e-commerce storefronts built to showcase your products and make checkout seamless.",
  },
  {
    icon: "saasIndustry",
    name: "Online Software & Services",
    body: "Customer web portals with membership accounts, subscription billing, and dashboards.",
  },
  {
    icon: "logistics",
    name: "Shipping & Operations",
    body: "Live package tracking, driver dispatch, and scheduling tools that replace messy paper forms.",
  },
  {
    icon: "media",
    name: "Education & Media",
    body: "Online courses, digital magazines, and video hubs that stay fast even under peak traffic.",
  },
];

export const engagementModels = [
  {
    name: "Planning & Strategy Sprint",
    price: "from $6,000",
    forWhom: "You have a product idea and want a clear roadmap, design, and fixed budget before building.",
    includes: [
      "1 to 2 weeks, fixed price",
      "Customer research, user flows, and technical blueprint",
      "Complete build plan with transparent pricing",
      "Yours to keep, with zero obligation to continue",
    ],
  },
  {
    name: "Complete Project Build",
    price: "from $25,000",
    forWhom: "Your scope is clear and you want a complete product designed, built, and launched for a fixed price.",
    includes: [
      "Full website, mobile app, or online platform launch",
      "Milestone-based payment schedule",
      "Regular demo calls and live preview access from week one",
      "Full handover and complete legal ownership transfer",
    ],
    featured: true,
  },
  {
    name: "Dedicated Monthly Partner",
    price: "from $8,000/mo",
    forWhom: "You want an ongoing design and engineering team to continuously improve and scale your product.",
    includes: [
      "Dedicated senior team with agreed monthly hours",
      "Flexible monthly priorities based on your business needs",
      "Continuous feature updates, speed improvements, and security monitoring",
      "Clear monthly summary report of everything accomplished",
    ],
  },
];

export const workSlots = [
  {
    label: "Case study 01",
    sector: "Fintream",
    type: "Consumer Mobile App & Payment Portal",
    industry: "Finance",
    image: "/work/fintream.jpg",
    summary:
      "An easy mobile app for sending and receiving money, paired with a simple business dashboard to manage transactions.",
    result: "Launched to App Store in 9 weeks",
    year: "2025",
    tags: ["Mobile App", "iPhone & Android", "Card Payments", "Custom Design"],
  },
  {
    label: "Case study 02",
    sector: "Northwind Labs",
    type: "Business Management Platform",
    industry: "Software",
    image: "/work/northwind.jpg",
    summary:
      "An online tool that helps business owners track their sales, manage team members, and automate monthly customer subscriptions.",
    result: "40% faster customer onboarding",
    year: "2025",
    tags: ["Web Portal", "Customer Accounts", "Automated Subscriptions", "Analytics"],
  },
  {
    label: "Case study 03",
    sector: "Orbit Retail",
    type: "Modern Online Store & Brand Identity",
    industry: "E-commerce",
    image: "/work/orbit.jpg",
    summary:
      "A fast online storefront and complete brand makeover, from logo design to custom product pages that drive sales.",
    result: "2.1× increase in customer sales",
    year: "2024",
    tags: ["Online Store", "Logo & Branding", "Super Fast Checkout", "Mobile Friendly"],
  },
  {
    label: "Case study 04",
    sector: "Vantage",
    type: "Live Delivery & Tracking Tool",
    industry: "Logistics",
    image: "/work/vantage.jpg",
    summary:
      "A real-time map and driver dispatch tool that replaced paper spreadsheets and phone calls for a delivery company.",
    result: "Saved 6 hours per week for dispatchers",
    year: "2024",
    tags: ["Live Map Tracking", "Instant Updates", "Driver Dispatch", "Easy Portal"],
  },
];

export const faqs = [
  {
    q: "How quickly can we get started?",
    a: "We can usually begin within one to two weeks. If you have a specific launch date in mind, it's best to get in touch early so we can reserve your dedicated team.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do, 100%. Once final payment is made, all code, custom designs, graphics, and account logins belong entirely to you in writing. You are never locked in.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes! Most of our clients are based in North America, Europe, and the UK. Our Lagos time zone (UTC+1) gives us a full working-day overlap with Europe and an easy morning overlap with the US East Coast.",
  },
  {
    q: "How much does a project cost?",
    a: "Strategic planning sprints start at $6,000, complete project builds start at $25,000, and ongoing monthly partnerships start at $8,000 per month. We provide a clear, itemized proposal so you know exactly what is included.",
  },
  {
    q: "What happens after our product is launched?",
    a: "You can take the finished product in-house. We provide full documentation, video walkthroughs, and account logins, or keep us on a monthly retainer to add new features and keep everything running smoothly.",
  },
];

/* ---------------------------------------------------------------------------
   TRUST & PROOF
--------------------------------------------------------------------------- */

// Testimonials
export const testimonials = [
  {
    quote:
      "Halveron shipped our MVP in nine weeks and it held up when we hit the front page. The staging URL from week one meant there were no surprises because we watched it come together.",
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

export const clients = [
  { name: "Paystream", industry: "Fintech & Payments", scope: "SaaS & Web App" },
  { name: "Northwind Labs", industry: "AI & Infrastructure", scope: "Design System & Web" },
  { name: "Meridian Health", industry: "HealthTech", scope: "iOS & Android App" },
  { name: "Kola & Co", industry: "E-Commerce & Luxury", scope: "Bespoke Web Design" },
  { name: "Vantage", industry: "B2B Enterprise", scope: "Product Engineering" },
  { name: "Orbit Retail", industry: "Omnichannel Retail", scope: "Brand & Platform" },
];

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

export const stats = [
  {
    value: "~50%",
    label: "Cost-to-quality advantage versus comparable US and EU studios.",
  },
  {
    value: "UTC+1",
    label:
      "A full overlap with the European workday and US mornings for real-time, high-touch collaboration.",
  },
  {
    value: "Senior-only",
    label:
      "Experienced people on your product from day one with no junior bait-and-switch.",
  },
];

