// Rich data model for Halveron client case studies

export const caseStudies = [
  {
    id: "paystream",
    slug: "paystream",
    title: "Paystream",
    client: "Paystream Technologies Ltd",
    industry: "Fintech & Payments",
    service: "MVP Build & Full-Stack Web Platform",
    year: "2025",
    tagline: "Instant multi-currency checkout & virtual accounts for modern African businesses",
    summary:
      "A fast, modern fintech platform enabling businesses to create dedicated virtual accounts, receive international card payments, and settle instantly in local currencies.",
    accentColor: "#2F6BFF",
    metrics: [
      { label: "Checkout Conversion", value: "+148%" },
      { label: "Average Page Load", value: "0.6s" },
      { label: "Transactions Processed", value: "$4.2M+" },
      { label: "Time to First MVP", value: "8 Weeks" },
    ],
    challenge:
      "Paystream needed to replace a slow legacy payment gateway with a frictionless checkout experience. The onboarding flow suffered from high drop-off rates, and merchants lacked real-time visibility into their settlement status.",
    solution:
      "We engineered a bespoke Next.js web application with Tailwind CSS, integrated secure Stripe and Paystack webhooks, designed an intuitive self-service merchant portal, and established an end-to-end design system in Figma.",
    deliverables: [
      "Custom UI/UX Design System in Figma",
      "Next.js 14 Web Application & Merchant Portal",
      "Multi-Currency Virtual Accounts Engine",
      "Automated PDF Invoicing & Webhook Infrastructure",
      "High-Converting Landing Page with 99.9% Uptime",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API", "Vercel"],
    palette: [
      { name: "Cobalt Primary", hex: "#2F6BFF" },
      { name: "Deep Ink", hex: "#0E131F" },
      { name: "Emerald Success", hex: "#10B981" },
      { name: "Warm Off-White", hex: "#FEFAF7" },
    ],
    testimonial: {
      quote:
        "Halveron shipped our MVP in eight weeks and it held up flawlessly when we hit the front page. The staging preview from week one meant there were zero surprises.",
      author: "Amara Okafor",
      role: "Founder & CEO, Paystream",
    },
  },
  {
    id: "northwind",
    slug: "northwind",
    title: "Northwind Labs",
    client: "Northwind Infrastructure Inc",
    industry: "Software & AI",
    service: "SaaS Portal & Design System",
    year: "2025",
    tagline: "Real-time AI infrastructure monitoring and cluster management portal",
    summary:
      "An enterprise-grade customer control panel that visualizes compute utilization, automates GPU cluster scaling, and manages granular API access keys.",
    accentColor: "#8B5CF6",
    metrics: [
      { label: "Onboarding Speed", value: "3.2× Faster" },
      { label: "API Query Latency", value: "<40ms" },
      { label: "Active Engineering Teams", value: "180+" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
    challenge:
      "Northwind's developer customers were overwhelmed by dense command-line tools and lacked a graphical dashboard to view compute workloads, query costs, and server health.",
    solution:
      "We crafted a dark-mode first, keyboard-accessible SaaS portal featuring high-performance data grids, live WebSocket metrics streaming, and a unified component library.",
    deliverables: [
      "Full Design System & Component Library",
      "Interactive Real-Time Analytics Dashboard",
      "Role-Based Access Control (RBAC) & Team Management",
      "Automated Usage-Based Stripe Invoicing",
      "Comprehensive Developer API Documentation",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "WebSockets", "Go", "Redis", "Docker"],
    palette: [
      { name: "Violet Accent", hex: "#8B5CF6" },
      { name: "Obsidian Slate", hex: "#0B0F17" },
      { name: "Sky Cyan", hex: "#38BDF8" },
      { name: "Pure White", hex: "#FFFFFF" },
    ],
    testimonial: {
      quote:
        "The rare studio that pushes back constructively on scope. They trimmed unnecessary complexity and delivered a rock-solid dashboard weeks ahead of schedule.",
      author: "Daniel Meyer",
      role: "Head of Product, Northwind Labs",
    },
  },
  {
    id: "kola",
    slug: "kola",
    title: "Kola & Co",
    client: "Kola & Co Luxury Goods",
    industry: "E-Commerce & Retail",
    service: "Brand Identity & Flagship Store",
    year: "2024",
    tagline: "Flagship digital storefront and editorial brand identity for artisan leather goods",
    summary:
      "A high-converting, luxury e-commerce experience celebrating craftsmanship with bespoke typography, smooth page transitions, and an instant checkout flow.",
    accentColor: "#D4A853",
    metrics: [
      { label: "Sales Growth", value: "+210%" },
      { label: "Cart Abandonment", value: "-34%" },
      { label: "Mobile Share of Orders", value: "78%" },
      { label: "Google PageSpeed Score", value: "98/100" },
    ],
    challenge:
      "The brand's existing template store failed to communicate its premium craftsmanship, resulting in high bounce rates and subpar mobile checkout conversions.",
    solution:
      "We rebuilt the brand identity from the ground up: custom wordmark, editorial serif typography, warm paper palettes, and a lightning-fast headless Shopify storefront.",
    deliverables: [
      "Complete Brand Identity & Logo Suite",
      "Headless E-Commerce Storefront",
      "Mobile-Optimized 1-Click Checkout",
      "Product Storytelling & Lookbook Layouts",
      "Automated Inventory & Courier Integration",
    ],
    stack: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Framer Motion", "Vercel Edge"],
    palette: [
      { name: "Artisan Gold", hex: "#D4A853" },
      { name: "Espresso Brown", hex: "#1C140D" },
      { name: "Warm Linen", hex: "#FAF6F0" },
      { name: "Charcoal Ink", hex: "#111111" },
    ],
    testimonial: {
      quote:
        "Our customers immediately noticed the difference. The site feels like a physical luxury boutique, and our mobile conversion doubled in the first month.",
      author: "Adeola Kolawole",
      role: "Creative Director & Founder, Kola & Co",
    },
  },
  {
    id: "vantage",
    slug: "vantage",
    title: "Vantage Logistics",
    client: "Vantage Freight Network",
    industry: "Logistics & Transport",
    service: "Live Fleet Dispatch & Tracking Portal",
    year: "2024",
    tagline: "Live dispatch mapping and route optimization for cross-border fleet operations",
    summary:
      "A real-time dispatch dashboard and mobile driver tool that replaced manual WhatsApp coordination and spreadsheet tracking with automated GPS fleet routes.",
    accentColor: "#10B981",
    metrics: [
      { label: "Dispatcher Time Saved", value: "6 hrs/wk" },
      { label: "On-Time Deliveries", value: "99.2%" },
      { label: "Active Fleet Vehicles", value: "350+" },
      { label: "Paperwork Eliminated", value: "100%" },
    ],
    challenge:
      "Dispatchers spent hours each day calling drivers to confirm delivery statuses, creating delays, misrouted shipments, and frustrated corporate clients.",
    solution:
      "We built a real-time web map dispatch interface combined with a streamlined mobile web app for drivers to scan waybills, update route checkpoints, and collect digital signatures.",
    deliverables: [
      "Interactive Live Map Dispatch Dashboard",
      "Driver Mobile Checkpoint Web App",
      "Automated SMS & Email Client Delivery Alerts",
      "Digital Proof-of-Delivery Signature Capture",
      "Fleet Performance Analytics Reports",
    ],
    stack: ["React", "Mapbox GL", "Node.js", "Tailwind CSS", "PostgreSQL", "Socket.io"],
    palette: [
      { name: "Fleet Emerald", hex: "#10B981" },
      { name: "Deep Navy", hex: "#0A1128" },
      { name: "Amber Alert", hex: "#F59E0B" },
      { name: "Clean Slate", hex: "#F1F5F9" },
    ],
    testimonial: {
      quote:
        "The dispatch tool paid for itself within the first quarter. Our operations team can handle three times the fleet volume with zero added headcount.",
      author: "Emeka Nwosu",
      role: "Operations Director, Vantage Logistics",
    },
  },
];
