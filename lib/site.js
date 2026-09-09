// Single source of truth for site copy, navigation, services, and contact details.

export const site = {
  name: "Halveron",
  tagline: "We create visually stunning, user-friendly, and high-performing websites that elevate your brand.",
  description:
    "Halveron is a creative digital agency specializing in bespoke web design, custom web development, brand identity, and digital solutions engineered to achieve your business goals.",
  url: "https://halveron.com",
  email: "hello@halveron.com",
  phone: "+234 800 000 0000",
  bookingUrl: "https://cal.com/halveron/discovery",
  location: "Lagos, Nigeria · Serving Clients Globally (UTC+1)",
  hours: "Mon – Fri: 9am – 6pm WAT",
  analyticsDomain: "",

  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/company/halveron" },
    { label: "X", href: "https://x.com/halveron" },
    { label: "GitHub", href: "https://github.com/halveron" },
    { label: "Dribbble", href: "https://dribbble.com/halveron" },
  ],
};

// Streamlined Agency Navigation matching Octave Agency
export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const legal = {
  entityName: "Halveron Agency Ltd",
  registrationNumber: "RC 1892044",
  registeredAddress: "Lagos, Nigeria",
  jurisdiction: "the Federal Republic of Nigeria",
  privacyContact: "privacy@halveron.com",
  lastUpdated: "9 September 2026",
};

// Core Digital Agency Services matching Octave Agency
export const services = [
  {
    slug: "web-design",
    title: "Web Design",
    summary:
      "Visually stunning, bespoke web designs tailored to reflect your brand identity and captivate your audience.",
    detail:
      "We design bespoke, responsive websites that combine aesthetic excellence with intuitive user experience. Every layout is crafted from the ground up to tell your story, engage visitors, and turn traffic into loyal customers.",
    deliverables: [
      "Bespoke UI/UX design tailored to your brand",
      "Fully responsive across all devices and screen sizes",
      "Interactive prototypes and wireframes in Figma",
      "Conversion-focused layouts and user journeys",
      "Design systems and style guides for consistency",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Custom, high-performing web solutions engineered with modern code, security, and lightning-fast speed.",
    detail:
      "Our development team transforms creative designs into robust, secure, and blazing-fast digital platforms. Built on modern Next.js and full-stack architectures, your site delivers instant page loads and seamless functionality.",
    deliverables: [
      "Clean, modern code built with Next.js and React",
      "Easy-to-use content management systems (CMS)",
      "Lightning-fast load speeds with 99+ Core Web Vitals",
      "Seamless third-party API and database integrations",
      "Cross-browser testing and bank-level security",
    ],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity & Graphic Design",
    summary:
      "Memorable logos, color palettes, and visual branding that make your business instantly recognizable.",
    detail:
      "A strong brand builds immediate trust. We craft distinctive logo marks, curated typography, vibrant color palettes, and cohesive graphic assets that position your business as an industry leader.",
    deliverables: [
      "Primary and secondary logo suites with vector assets",
      "Brand color palette and typography hierarchy",
      "Comprehensive brand guidelines and usage rules",
      "Digital stationery, social media kits, and slide decks",
      "Marketing collateral and visual asset libraries",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    summary:
      "High-converting online stores engineered for smooth purchasing, secure checkouts, and effortless management.",
    detail:
      "We build feature-rich e-commerce platforms designed to maximize sales. From custom product catalogues and intuitive search to frictionless one-click checkouts and automated inventory management.",
    deliverables: [
      "Custom online storefronts optimized for conversions",
      "Secure global payment gateway integrations (Stripe, Apple Pay)",
      "Automated inventory, tax, and shipping management",
      "Customer account portals and order tracking",
      "Optimized mobile checkout flows with minimal friction",
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    summary:
      "Boost your search visibility, outrank competitors, and attract consistent streams of qualified organic traffic.",
    detail:
      "A stunning website needs to be discovered. We implement comprehensive on-page, technical, and structural SEO best practices to ensure your website ranks prominently on Google for high-intent search terms.",
    deliverables: [
      "In-depth keyword research and competitor analysis",
      "Technical SEO auditing, schema markup, and sitemaps",
      "On-page meta tags, content structure, and alt text",
      "Mobile speed optimization and Core Web Vitals enhancement",
      "Analytics tracking and organic performance reporting",
    ],
  },
  {
    slug: "hosting-support",
    title: "Hosting, Support & Maintenance",
    summary:
      "Reliable, high-speed cloud hosting and ongoing technical care to keep your digital assets running smoothly.",
    detail:
      "Launch day is just the beginning. We provide managed high-speed cloud hosting, daily automated backups, security monitoring, and proactive updates so your website remains fast, secure, and trouble-free.",
    deliverables: [
      "High-speed cloud hosting with global CDN distribution",
      "24/7 uptime monitoring and automated daily backups",
      "Regular software, plugin, and security updates",
      "Dedicated technical support and ongoing bug fixes",
      "Continuous performance and speed optimization",
    ],
  },
];

// Clean 4-step Agency Process
export const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    duration: "Week 1",
    body: "We dive deep into your business objectives, target audience, and competitive landscape to establish a clear project blueprint and technical roadmap.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    duration: "Weeks 2 – 3",
    body: "We craft bespoke visual concepts, interactive prototypes, and user flows in Figma, refining every screen until it perfectly embodies your brand.",
  },
  {
    step: "03",
    title: "Development & Testing",
    duration: "Weeks 4 – 7",
    body: "Our developers engineer clean, responsive code with live staging previews. We rigorously test speed, responsiveness, and security across all devices.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    duration: "Week 8+",
    body: "We handle domain configuration, SEO verification, and launch deployment, followed by dedicated training, hosting, and ongoing technical support.",
  },
];

// Why Choose Us / Value Proposition
export const whyChooseUs = [
  {
    title: "Bespoke Craftsmanship",
    body: "No generic templates or cookie-cutter themes. Every digital experience we build is custom-tailored to your unique business objectives.",
  },
  {
    title: "Speed & Performance",
    body: "We engineer lightning-fast websites with 99+ Core Web Vitals scores that keep visitors engaged and boost search engine rankings.",
  },
  {
    title: "Transparent Process",
    body: "Direct communication with experienced makers, live staging previews from week one, and fixed pricing with zero hidden surprises.",
  },
  {
    title: "Long-Term Partnership",
    body: "From initial launch to ongoing maintenance, security updates, and digital marketing, we are committed to your long-term success.",
  },
];

// Partner Client Logos
export const clients = [
  { name: "Lensology", industry: "Eyewear & Optical", scope: "Brand & E-Commerce" },
  { name: "Snapcell", industry: "Automotive SaaS", scope: "Web Design & Media" },
  { name: "BC Training", industry: "Education & Training", scope: "Bespoke Portal & Web" },
  { name: "IndigoFitness", industry: "Fitness & Equipment", scope: "Web Design & Brochure" },
  { name: "Paystream", industry: "Fintech & Payments", scope: "SaaS & Web App" },
  { name: "Orbit Retail", industry: "Omnichannel Retail", scope: "Brand & Platform" },
];

// Client Testimonials
export const testimonials = [
  {
    quote:
      "Halveron transformed our online presence completely. The new website is visually stunning, remarkably fast, and our lead conversion rate increased by over 140% within the first two months.",
    name: "Neil Skeats",
    role: "Managing Director",
    company: "Lensology",
    service: "Web Design & Development",
  },
  {
    quote:
      "Working with Halveron was seamless from start to finish. Their team understood our technical product immediately and delivered an automotive media suite that our global clients love using.",
    name: "Brent Sanders",
    role: "CEO",
    company: "Snapcell",
    service: "SaaS Website & Media Suite",
  },
  {
    quote:
      "The attention to detail, modern design sensibility, and technical competence are second to none. They delivered our bespoke training portal on time, on budget, and exceeding expectations.",
    name: "Claire Pearson",
    role: "Operations Director",
    company: "BC Training",
    service: "Portal & Brand Identity",
  },
];

// Frequently Asked Questions
export const faqs = [
  {
    q: "How long does a typical website project take?",
    a: "Most bespoke website projects take between 4 to 8 weeks from initial discovery to final launch, depending on the complexity, page count, and custom functionality required.",
  },
  {
    q: "Will my website be mobile-friendly and fast?",
    a: "Absolutely. Every website we build is fully responsive, optimized for all screen sizes, and engineered for lightning-fast load times with near-perfect Google PageSpeed scores.",
  },
  {
    q: "Can I easily update the content myself after launch?",
    a: "Yes. We integrate user-friendly content management systems that allow your team to easily edit text, update images, add blog posts, or manage products without touching code.",
  },
  {
    q: "Do you provide ongoing hosting and technical support?",
    a: "Yes, we offer fully managed cloud hosting, daily automated backups, proactive security monitoring, and regular updates to ensure your website remains fast and secure.",
  },
  {
    q: "How do we get started?",
    a: "Simply reach out via our contact form or book a free 20-minute discovery call. We'll discuss your requirements, timeline, and provide a clear, fixed-price proposal.",
  },
];

// Agency Leadership Team
export const team = [
  {
    name: "Tunde Bakare",
    role: "Founder & Creative Director",
    bio: "Over a decade of experience leading visual design systems and digital products for high-growth brands.",
  },
  {
    name: "David Adeleke",
    role: "Lead Web Developer",
    bio: "Full-stack engineer specializing in high-performance Next.js architectures and custom e-commerce integrations.",
  },
  {
    name: "Elena Rostova",
    role: "Head of UI/UX Design",
    bio: "Product designer focused on mobile-first interaction patterns, user research, and seamless customer funnels.",
  },
  {
    name: "Marcus Vance",
    role: "SEO & Performance Strategist",
    bio: "Search strategist driving technical SEO audits, Core Web Vitals optimization, and organic growth.",
  },
];

// Open Career Roles
export const openings = [];

// Value Differentiators
export const differentiators = whyChooseUs;

