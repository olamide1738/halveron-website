// Rich data model for Halveron client case studies inspired by Octave Agency

export const caseStudies = [
  {
    id: "arabella-project",
    slug: "arabella-project",
    title: "Arabella",
    client: "Arabella Bio-Architecture",
    industry: "Bio-Architecture & Living Walls",
    service: "Brand Identity, Web Design & Digital Platform",
    year: "2025",
    tagline: "Integrated vertical gardens, architectural living walls & corporate facades",
    summary:
      "Pioneering sustainable bio-architectural living walls, native planting, and bespoke stone masonry for financial headquarters and prestige corporate estates.",
    accentColor: "#16A34A",
    image: "/work/arabella.jpg",
    metrics: [
      { label: "Corporate RFQs", value: "+185%" },
      { label: "Session Duration", value: "3.8m" },
      { label: "Lead Conversion", value: "+140%" },
      { label: "Core Web Vitals", value: "100 / 100" },
    ],
    challenge:
      "Arabella needed an elevated digital flagship to present complex sustainable bio-architecture, living facade engineering, and commercial stone masonry to corporate developers and enterprise architects.",
    solution:
      "We engineered an editorial, visual-first digital platform with high-definition living wall case studies, native planting indexes, and interactive consultation pathways.",
    deliverables: [
      "Custom Bio-Architecture Web Platform in Next.js",
      "Interactive Living Wall & Facades Directory",
      "Complete Brand Guidelines & Vector Identity",
      "Corporate Consultation & RFQ Engine",
      "Sub-second Page Speeds & 99+ Core Web Vitals",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    testimonial: {
      quote:
        "Halveron elevated our brand into a league of its own. The digital experience communicates the precision and ecological impact of our living architecture perfectly.",
      author: "Arabella Leadership Team",
      role: "Director of Bio-Architecture, Arabella",
    },
  },
  {
    id: "potters-design",
    slug: "potters-design",
    title: "Potters Design",
    client: "Potters Design",
    industry: "Luxury Fashion & Couture",
    service: "Web Design, E-Commerce & Brand Strategy",
    year: "2025",
    tagline: "Reimagining African elegance with structural silhouettes & textile artistry",
    summary:
      "A luxury digital flagship and e-commerce experience crafted for a premier fashion house, featuring curated collections, structural corsetry, and seamless online shopping.",
    accentColor: "#EAB308",
    image: "/work/potters.png",
    metrics: [
      { label: "Global Dress Sales", value: "+210%" },
      { label: "Checkout Completion", value: "96%" },
      { label: "Mobile Page Load", value: "0.4s" },
      { label: "Customer Retention", value: "74%" },
    ],
    challenge:
      "Potters Design required a high-fashion digital presence that honored meticulous corsetry, structural silhouettes, and indigenous textile artistry with a frictionless global checkout experience.",
    solution:
      "We crafted a luxury e-commerce experience combining editorial runway photography, curated lookbooks, multi-currency Stripe checkouts, and effortless catalogue management.",
    deliverables: [
      "Bespoke Luxury E-Commerce Storefront in Next.js",
      "Signature Collection Lookbook & Dress Catalog",
      "Seamless Stripe & Apple Pay Checkout Integration",
      "Inventory Automation & Global Order Fulfillment",
      "Search Engine Optimization for High-Fashion Queries",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Shopify API", "Stripe", "Vercel"],
    testimonial: {
      quote:
        "Working with Halveron was effortless. They captured the couture elegance of our designs with total precision, and our international sales surged immediately upon launch.",
      author: "Creative Director",
      role: "Founder & Head of Design, Potters Design",
    },
  },
  {
    id: "building-design-workshop",
    slug: "building-design-workshop",
    title: "Building Design Workshop",
    client: "Building Design Workshop",
    industry: "Architecture & Landscape",
    service: "Full-Stack Web Development & Architectural Archive",
    year: "2024",
    tagline: "Rooted in place, shaped by culture, landscape, and Nigerian climate",
    summary:
      "A culturally rooted architectural portfolio engineered for an acclaimed practice, highlighting buildings that emerge from their landscape, climate, and community.",
    accentColor: "#C084FC",
    image: "/work/bdw.png",
    metrics: [
      { label: "Civic RFP Submissions", value: "+125%" },
      { label: "Project Views", value: "+190%" },
      { label: "Bounce Reduction", value: "-45%" },
      { label: "PageSpeed Score", value: "99 / 100" },
    ],
    challenge:
      "Building Design Workshop needed to showcase architectural masterplanning that honors cultural heritage, Nigerian climatic responsiveness, and spatial community impact in an intuitive archive.",
    solution:
      "We engineered a clean, grid-based architectural index with categorized project filters, high-resolution drawing viewers, dynamic blueprints, and direct project inquiry capabilities.",
    deliverables: [
      "Culturally Rooted Architectural Web Portal",
      "Civic & Commercial Project Directory",
      "Interactive Drawing & Blueprint Archive",
      "High-Definition Full-Bleed Photography Viewer",
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
  {
    id: "terancez",
    slug: "terancez",
    title: "Terancez",
    client: "Terancez Atelier",
    industry: "Archival Streetwear & Fashion",
    service: "Brand Flagship, E-Commerce & Drop Architecture",
    year: "2025",
    tagline: "Independent archival streetwear house founded and based in Lagos, Nigeria",
    summary:
      "A high-octane brutalist digital flagship and drop platform engineered for Lagos-based archival label Terancez. Built to handle sudden viral drop surges, numbered non-repeatable garment runs, interactive campaign lookbooks, and sub-second Paystack checkout.",
    accentColor: "#F97316",
    image: "/work/terancez.jpg",
    metrics: [
      { label: "Drop Sell-Out Speed", value: "< 12m" },
      { label: "Global Diaspora Traffic", value: "+210%" },
      { label: "Mobile Checkout Time", value: "1.2s" },
      { label: "Core Web Vitals", value: "100 / 100" },
    ],
    challenge:
      "Terancez required an unapologetic, brutalist digital presence capable of conveying their Lagos archival streetwear aesthetic while handling viral drop traffic surges without downtime or cart latency.",
    solution:
      "We engineered an ultra-fast, minimalist storefront with dynamic collection filtering, full-bleed campaign photography, instant sizing guides, and automated Paystack checkout integration.",
    deliverables: [
      "High-Performance Archival Drop Platform",
      "Interactive Campaign Lookbook Viewer",
      "Numbered Garment Inventory Engine",
      "Frictionless Mobile-First Checkout Flow",
      "Automated Global Edge & CDN Deployment",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Paystack API", "Vercel"],
    testimonial: {
      quote:
        "Halveron captured our exact brutalist identity. The drop launched flawlessly under massive traffic, and every piece in Drop 01 sold out within minutes.",
      author: "Creative Director",
      role: "Founder, Terancez",
    },
  },
  {
    id: "dcloset",
    slug: "dcloset",
    title: "D’Closet",
    client: "D’Closet Haute Couture & Archive",
    industry: "African Haute Couture & Luxury Archive",
    service: "Luxury E-Commerce, Brand Experience & Archival Catalog",
    year: "2025",
    tagline: "Contemporary African Haute Couture & Designer Archive",
    summary:
      "A refined digital flagship celebrating authentic African craftsmanship, modern Adire and Aso-Oke couture, and certified pre-owned international designer timepieces and footwear with seamless multi-currency checkout.",
    accentColor: "#D4AF37",
    image: "/work/dcloset.jpg",
    metrics: [
      { label: "Online Sales Growth", value: "+195%" },
      { label: "Mobile Checkout", value: "96%" },
      { label: "Mobile Load Speed", value: "0.4s" },
      { label: "Customer Retention", value: "82%" },
    ],
    challenge:
      "D’Closet needed a digital storefront that reflected the prestige of bespoke African couture while effortlessly integrating verified international designer consignments with transparent authenticity verification.",
    solution:
      "We designed and developed an editorial e-commerce platform featuring high-definition textile galleries, bespoke order inquiries, designer archive authenticity badges, and effortless mobile purchasing.",
    deliverables: [
      "Editorial Luxury Storefront & Archive",
      "Bespoke Couture & Consignment Filtering",
      "Authenticity Verification & Detail Modals",
      "Multi-Currency Payment Integration",
      "Mobile Speed & SEO Optimization",
    ],
    stack: ["React", "Tailwind CSS", "Next.js", "Paystack API", "Vercel"],
    testimonial: {
      quote:
        "Halveron understood our vision for contemporary African luxury. The platform gives our bespoke pieces and archival collections the international spotlight they deserve.",
      author: "Creative Director",
      role: "Head of Atelier, D’Closet",
    },
  },
];
