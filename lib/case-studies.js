// Rich data model for Halveron client case studies inspired by Octave Agency

export const caseStudies = [
  {
    id: "arabella-project",
    slug: "arabella-project",
    title: "Arabella Project",
    client: "Arabella Developments",
    industry: "Architecture & Living",
    service: "Brand Identity, Web Design & Digital Experience",
    year: "2025",
    tagline: "Bespoke digital presence and immersive visual identity for contemporary architectural living",
    summary:
      "A comprehensive brand overhaul and bespoke digital experience crafted to showcase visionary architectural residences, engaging discerning clients with refined visual storytelling and seamless inquiries.",
    accentColor: "#2F6BFF",
    image: "/work/arabella.jpg",
    metrics: [
      { label: "Private Inquiries", value: "+185%" },
      { label: "Session Duration", value: "3.8m" },
      { label: "Conversion Rate", value: "+140%" },
      { label: "Core Web Vitals", value: "100 / 100" },
    ],
    challenge:
      "Arabella Project needed an elevated digital showcase that matched the immaculate craft, sustainable materials, and spatial elegance of their architectural developments.",
    solution:
      "We engineered an editorial, visual-first digital platform featuring fluid transitions, interactive residence showcases, curated typography, and discreet private inquiry pathways.",
    deliverables: [
      "Custom Editorial Web Platform in Next.js",
      "Interactive Architectural Residence Showcase",
      "Complete Brand Guidelines & Visual Identity",
      "Private Client Booking & Inquiry System",
      "Sub-second Page Speeds & 99+ Core Web Vitals",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    testimonial: {
      quote:
        "Halveron elevated our brand into a league of its own. The digital experience communicates the timeless sophistication of our architecture to clients worldwide.",
      author: "Arabella Development Team",
      role: "Creative Director, Arabella Project",
    },
  },
  {
    id: "potters-design",
    slug: "potters-design",
    title: "Potters Design",
    client: "Potters Design Studio",
    industry: "Artisanal Studio & E-Commerce",
    service: "Web Design, E-Commerce & Brand Strategy",
    year: "2025",
    tagline: "Curated e-commerce storefront and digital portfolio for bespoke ceramics and interior objects",
    summary:
      "An elegant e-commerce experience and portfolio engineered to showcase handmade interior objects, bespoke ceramics, and artisanal craft with frictionless global purchasing.",
    accentColor: "#10B981",
    image: "/work/potters.jpg",
    metrics: [
      { label: "E-Commerce Sales", value: "+210%" },
      { label: "Checkout Rate", value: "96%" },
      { label: "Mobile Page Load", value: "0.4s" },
      { label: "Customer Retention", value: "74%" },
    ],
    challenge:
      "Potters Design required a digital home that honored the tactile, organic quality of their physical design pieces while providing a seamless, modern online purchasing flow.",
    solution:
      "We crafted an organic, minimalist digital storefront combining editorial product photography, curated studio collections, custom Stripe checkouts, and effortless catalogue management.",
    deliverables: [
      "Bespoke Online Storefront & Studio Showcase",
      "Curated Product Configurator & Micro-Interactions",
      "Seamless Stripe & Apple Pay Checkout Integration",
      "Inventory Management & Automated Order Fulfillment",
      "Search Engine Optimization for High-Value Design Queries",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Shopify API", "Stripe", "Vercel"],
    testimonial: {
      quote:
        "Working with Halveron was effortless. They captured our tactile aesthetic beautifully, and our online store revenues doubled in the very first month.",
      author: "Marcus Potter",
      role: "Founder & Lead Designer, Potters Design",
    },
  },
  {
    id: "building-design-workshop",
    slug: "building-design-workshop",
    title: "Building Design Workshop",
    client: "Building Design Workshop Ltd",
    industry: "Commercial Architecture",
    service: "Full-Stack Web Development & Interactive Portfolio",
    year: "2024",
    tagline: "High-performance interactive portfolio and masterplanning project directory",
    summary:
      "A structural, typography-driven digital platform engineered for an award-winning architectural workshop, highlighting large-scale commercial and civic masterplanning projects.",
    accentColor: "#6366F1",
    image: "/work/bdw.jpg",
    metrics: [
      { label: "Enterprise RFPs", value: "+125%" },
      { label: "Portfolio Views", value: "+190%" },
      { label: "Bounce Reduction", value: "-45%" },
      { label: "PageSpeed Score", value: "99 / 100" },
    ],
    challenge:
      "Building Design Workshop needed to organize decades of large-scale civic and commercial architectural projects into an intuitive, responsive archive for institutional clients and developers.",
    solution:
      "We engineered a clean, grid-based architectural index with categorized project filters, high-resolution drawing viewers, dynamic blueprints, and direct project inquiry capabilities.",
    deliverables: [
      "Custom Architectural Archive & Filter System",
      "Interactive Masterplanning Blueprint Viewer",
      "Client Portal for Project Briefs & RFP Downloads",
      "Fast-loading Full-bleed Gallery Optimization",
      "Enterprise Hosting & Automated Global CDN",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel Edge"],
    testimonial: {
      quote:
        "Halveron delivered an architectural masterpiece in digital form. Our portfolio now commands the authority and rigor that our commercial clients expect.",
      author: "David Vance",
      role: "Principal Architect, Building Design Workshop",
    },
  },
];
