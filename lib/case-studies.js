// Rich data model for Halveron client case studies inspired by Octave Agency

export const caseStudies = [
  {
    id: "lensology",
    slug: "lensology",
    title: "Lensology",
    client: "Lensology Ltd",
    industry: "Eyewear & Optical",
    service: "Brand Identity, Web Design & E-Commerce",
    year: "2025",
    tagline: "Bespoke digital storefront for the UK's leading online glasses reglazing experts",
    summary:
      "A complete brand overhaul and bespoke e-commerce platform designed to streamline lens reglazing orders, educate customers, and elevate optical craftsmanship online.",
    accentColor: "#2F6BFF",
    metrics: [
      { label: "Online Sales Conversion", value: "+164%" },
      { label: "Mobile Page Load", value: "0.5s" },
      { label: "Checkout Completion", value: "94%" },
      { label: "Customer Rating", value: "4.9 / 5" },
    ],
    challenge:
      "Lensology needed to simplify an inherently technical optical ordering process. Their previous website was difficult to navigate on mobile devices, resulting in customer drop-off during the prescription selection step.",
    solution:
      "We engineered a bespoke, intuitive ordering wizard that guides users through frame and lens options in seconds. Paired with elevated photography and custom branding, the new site delivers effortless purchasing and premium brand authority.",
    deliverables: [
      "Custom E-Commerce Storefront in Next.js",
      "Prescription & Lens Selection Configurator",
      "Complete Visual Brand Identity & Logo Suite",
      "Seamless Stripe & PayPal Checkout Integration",
      "Core Web Vitals Optimization (100 Mobile Score)",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Shopify API", "Stripe", "Vercel"],
    testimonial: {
      quote:
        "Halveron transformed our online presence completely. The new website is visually stunning, remarkably fast, and our sales increased immediately upon launch.",
      author: "Neil Skeats",
      role: "Managing Director, Lensology",
    },
  },
  {
    id: "snapcell",
    slug: "snapcell",
    title: "Snapcell",
    client: "Snapcell Inc",
    industry: "Automotive SaaS",
    service: "Web Design, Development & Media Suite",
    year: "2025",
    tagline: "Dynamic SaaS website and video demonstration portal for global car dealerships",
    summary:
      "A high-performing product marketing website and interactive media suite engineered to drive demo requests for an international automotive video software provider.",
    accentColor: "#10B981",
    metrics: [
      { label: "Demo Bookings", value: "+82%" },
      { label: "Average Session Duration", value: "+2.4m" },
      { label: "Global Dealer Signups", value: "1,200+" },
      { label: "PageSpeed Score", value: "99 / 100" },
    ],
    challenge:
      "Snapcell required a modern, dynamic web presence that could clearly communicate complex software features and video messaging tools to automotive dealership executives worldwide.",
    solution:
      "We designed and developed an interactive, content-rich marketing site featuring video embeds, interactive feature tours, ROI calculators, and friction-free lead capture funnels.",
    deliverables: [
      "Interactive Product Marketing Website",
      "Dealership ROI Calculator Component",
      "Media Suite & Video Presentation Showcase",
      "Automated CRM Lead Routing Integration",
      "Multi-region Content Localization",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "HubSpot API", "Vercel"],
    testimonial: {
      quote:
        "Working with Halveron was seamless from start to finish. Their team understood our technical product immediately and delivered an experience that continues to win us enterprise contracts.",
      author: "Brent Sanders",
      role: "CEO, Snapcell",
    },
  },
  {
    id: "bc-training",
    slug: "bc-training",
    title: "BC Training",
    client: "BC Training International",
    industry: "Education & Training",
    service: "Bespoke Portal & Web Development",
    year: "2024",
    tagline: "Global training portal and course booking platform for business continuity leaders",
    summary:
      "A bespoke digital platform enabling business leaders across 40+ countries to browse, book, and complete certified corporate continuity courses online.",
    accentColor: "#8B5CF6",
    metrics: [
      { label: "Course Enrollments", value: "+115%" },
      { label: "Mobile Traffic Share", value: "62%" },
      { label: "Admin Booking Time", value: "-70%" },
      { label: "Global Reach", value: "45 Countries" },
    ],
    challenge:
      "BC Training relied on manual email processes and an outdated brochure site to manage course bookings, resulting in heavy administrative overhead and slow customer confirmations.",
    solution:
      "We built a custom course management and booking platform with automated calendar scheduling, live seat availability, instant digital certification, and corporate invoicing.",
    deliverables: [
      "Bespoke Course Booking Platform & Portal",
      "Automated Calendar Scheduling & Availability Engine",
      "Corporate Invoicing & Payment Integration",
      "Student Dashboard & Certificate Verification",
      "Search Engine Optimization & Migration",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API"],
    testimonial: {
      quote:
        "The attention to detail, modern design sensibility, and technical competence are second to none. They delivered our bespoke portal on time and on budget.",
      author: "Claire Pearson",
      role: "Operations Director, BC Training",
    },
  },
  {
    id: "indigofitness",
    slug: "indigofitness",
    title: "IndigoFitness",
    client: "IndigoFitness Ltd",
    industry: "Fitness & Equipment",
    service: "Web Design, Product Showcase & Brochure",
    year: "2024",
    tagline: "Premium gym equipment showcase and bespoke space design configurator",
    summary:
      "A sleek, high-impact digital experience showcasing commercial training spaces, custom manufactured gym equipment, and interactive 3D facility planning.",
    accentColor: "#F59E0B",
    metrics: [
      { label: "Commercial Inquiries", value: "+95%" },
      { label: "Brochure Downloads", value: "8,500+" },
      { label: "Bounce Rate Reduction", value: "-38%" },
      { label: "Average Page Load", value: "0.7s" },
    ],
    challenge:
      "IndigoFitness needed a digital flagship that matched the precision engineering and craftsmanship of their physical fitness equipment and gym installations.",
    solution:
      "We designed an immersive, media-forward website with full-bleed project case studies, high-definition equipment galleries, downloadable specification sheets, and project request workflows.",
    deliverables: [
      "High-Impact Commercial Equipment Showcase",
      "Gym Facility Case Study Directory",
      "Interactive Brochure Download Engine",
      "Lead Capture & Space Planning Form",
      "Comprehensive Digital Brand Refresh",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Headless CMS"],
    testimonial: {
      quote:
        "Halveron captured our aesthetic vision with total precision. The site gives our clients the confidence to commission multi-million pound fitness installations.",
      author: "Robert Smith",
      role: "Commercial Director, IndigoFitness",
    },
  },
];
