const path = require("path");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config();

const prisma = new PrismaClient();

const blogSeed = [
  {
    slug: "government-ai-assistant-delivery",
    title: "INNOVISION Delivers Enterprise AI Assistant for Government Operations",
    excerpt:
      "How our team reduced document retrieval time from hours to seconds with secure on-premise LLM workflows.",
    category: "Project Success",
    dateLabel: "Mar 10, 2026",
    readTime: "6 min read",
    image: "/portfolio/banner/government_document_AI.webp",
    featured: true,
    published: true,
    keywords: ["government", "document ai", "on-premise", "rag", "llm"],
    content: [
      {
        heading: "Context",
        text: "Government teams often depend on fragmented archives and manual retrieval procedures.",
      },
      {
        heading: "What We Built",
        text: "We implemented an on-premise assistant using OCR, retrieval pipelines, and domain-tuned LLM prompts.",
      },
    ],
    relatedLinks: [{ label: "Case Study", href: "/portfolio/government-document-ai-2" }],
  },
  {
    slug: "reliable-rag-pipelines-production",
    title: "Behind the Build: Designing Reliable RAG Pipelines for Production",
    excerpt:
      "Practical lessons from deploying retrieval systems with quality checks, latency targets, and governance.",
    category: "Engineering",
    dateLabel: "Mar 02, 2026",
    readTime: "7 min read",
    image: "/AI_Product.webp",
    featured: false,
    published: true,
    keywords: ["rag", "retrieval", "production", "latency", "governance"],
    content: [
      {
        heading: "Quality Controls First",
        text: "Production RAG systems need retrieval evaluation, citation checks, and fallback logic.",
      },
    ],
    relatedLinks: [{ label: "AI Products", href: "/solutions/ai-products-2" }],
  },
  {
    slug: "50-projects-milestone",
    title: "Company Milestone: 50+ AI Projects Delivered Across 12 Industries",
    excerpt:
      "A quick look at recent achievements and what this means for our next growth phase.",
    category: "Company News",
    dateLabel: "Feb 16, 2026",
    readTime: "4 min read",
    image: "/banner-aboutus.webp",
    featured: false,
    published: true,
    keywords: ["milestone", "company news", "projects", "achievement"],
    content: [
      {
        heading: "Milestone Snapshot",
        text: "INNOVISION has now delivered over 50 projects spanning enterprise AI and platform engineering.",
      },
    ],
    relatedLinks: [{ label: "About Us", href: "/about-us" }],
  },
  {
    slug: "edge-ai-vision-quality-control",
    title: "Edge AI Vision: Raising Quality Control Accuracy on Production Lines",
    excerpt:
      "How edge deployment reduced cloud dependency while keeping inspection speed stable in manufacturing.",
    category: "AI & LLM",
    dateLabel: "Jan 29, 2026",
    readTime: "6 min read",
    image: "/IndustrialAI.webp",
    featured: false,
    published: true,
    keywords: ["edge ai", "vision", "quality control", "factory"],
    content: [
      {
        heading: "Why Edge First",
        text: "For latency-sensitive inspection tasks, edge inference keeps response times consistent.",
      },
    ],
    relatedLinks: [{ label: "Industrial AI", href: "/solutions/coming-soon" }],
  },
  {
    slug: "llm-evaluation-framework-practical-guide",
    title: "Practical Guide: LLM Evaluation Framework for Product Teams",
    excerpt:
      "A simple but effective framework to measure quality, safety, and drift in LLM features.",
    category: "AI & LLM",
    dateLabel: "Dec 18, 2025",
    readTime: "7 min read",
    image: "/AI_Product.webp",
    featured: false,
    published: true,
    keywords: ["llm eval", "quality", "safety", "drift"],
    content: [
      {
        heading: "Metric Design",
        text: "Use task-specific scoring and weighted benchmarks aligned to business outcomes.",
      },
    ],
    relatedLinks: [{ label: "AI Products", href: "/solutions/ai-products-2" }],
  },
  {
    slug: "embedded-cloud-integration-patterns",
    title: "Embedded + Cloud Integration Patterns We Use in Client Delivery",
    excerpt:
      "Reliable design patterns for syncing device firmware workflows with cloud application layers.",
    category: "Engineering",
    dateLabel: "Dec 10, 2025",
    readTime: "6 min read",
    image: "/softwareAndFirmware.webp",
    featured: false,
    published: true,
    keywords: ["embedded", "cloud", "iot", "integration"],
    content: [
      {
        heading: "Event Contracts",
        text: "Define strict message schemas to stabilize communication between device and cloud services.",
      },
    ],
    relatedLinks: [
      { label: "Software & Firmware", href: "/solutions/software-firmware-development-2" },
    ],
  },
  {
    slug: "fintech-kyc-automation-results",
    title: "Fintech KYC Automation: Results from a Multi-stage AI Pipeline",
    excerpt:
      "From OCR to verification scoring, a breakdown of the architecture and business impact.",
    category: "Project Success",
    dateLabel: "Jan 03, 2026",
    readTime: "6 min read",
    image: "/portfolio/banner/fintech_verification_AI.webp",
    featured: false,
    published: true,
    keywords: ["fintech", "kyc", "ocr", "verification"],
    content: [
      {
        heading: "Architecture",
        text: "The pipeline combines OCR extraction, rule checks, and model-assisted review prioritization.",
      },
    ],
    relatedLinks: [{ label: "Case Study", href: "/portfolio/fintech-verification-ai" }],
  },
  {
    slug: "enterprise-rag-security-guidelines",
    title: "Security Guidelines for Enterprise RAG Deployments",
    excerpt:
      "Practical controls for data access, source grounding, and prompt governance in enterprise RAG.",
    category: "Engineering",
    dateLabel: "Jan 16, 2026",
    readTime: "6 min read",
    image: "/banner-aboutus.webp",
    featured: false,
    published: true,
    keywords: ["rag security", "enterprise ai", "governance", "access control"],
    content: [
      {
        heading: "Data Boundaries",
        text: "Restrict retrieval scope by role and context to prevent information overexposure.",
      },
    ],
    relatedLinks: [{ label: "AI Products", href: "/solutions/ai-products-2" }],
  },
  {
    slug: "event-ai-manufacturing-summit-2026",
    title: "Event Recap: AI Manufacturing Summit 2026",
    excerpt:
      "Key takeaways from expert sessions on vision AI, edge deployment, and factory modernization.",
    category: "Events",
    dateLabel: "Dec 26, 2025",
    readTime: "5 min read",
    image: "/IndustrialAI.webp",
    featured: false,
    published: true,
    keywords: ["event", "summit", "manufacturing", "edge"],
    content: [
      {
        heading: "Main Themes",
        text: "Teams focused on reliability, maintainability, and change management for industrial AI adoption.",
      },
    ],
    relatedLinks: [{ label: "Portfolio", href: "/portfolio" }],
  },
  {
    slug: "year-end-engineering-retrospective-2025",
    title: "Engineering Retrospective 2025: Delivery Lessons That Matter",
    excerpt:
      "A reflection on architecture, team process, and product quality practices from the past year.",
    category: "Company News",
    dateLabel: "Nov 27, 2025",
    readTime: "6 min read",
    image: "/banner-aboutus.webp",
    featured: false,
    published: true,
    keywords: ["retrospective", "engineering", "delivery", "team process"],
    content: [
      {
        heading: "What Worked",
        text: "Cross-functional sprint planning reduced handoff friction and improved predictability.",
      },
    ],
    relatedLinks: [{ label: "About Us", href: "/about-us" }],
  },
  {
    slug: "innovision-partnership-expansion-2026",
    title: "INNOVISION Expands Regional Partnership Network in 2026",
    excerpt:
      "A strategic update on ecosystem partnerships to accelerate delivery and support.",
    category: "Company News",
    dateLabel: "Jan 09, 2026",
    readTime: "4 min read",
    image: "/banner-aboutus.webp",
    featured: false,
    published: true,
    keywords: ["partnership", "company news", "ecosystem", "2026"],
    content: [
      {
        heading: "Partnership Scope",
        text: "The new network includes cloud, semiconductor, and implementation partners across regions.",
      },
    ],
    relatedLinks: [{ label: "About Us", href: "/about-us" }],
  },
];

const portfolioSeed = [
  {
    slug: "real-estate-ai-assistant",
    title: "Real Estate AI Assistant",
    metric: "-35% review time",
    summary:
      "LLM + RAG combined with document intelligence to verify and classify real-estate records faster.",
    category: "AI Products",
    image: "/portfolio/banner/real_estate_AI_assistant.webp",
    route: "/portfolio/real-estate-ai-assistant",
    tags: ["LLM", "RAG", "Real Estate"],
    featured: true,
    published: true,
    sortOrder: 1,
  },
  {
    slug: "high-traffic-web-platform",
    title: "High-traffic Web Platform",
    metric: "<300ms latency",
    summary:
      "Scalable web platform handling 1,000+ concurrent users with real-time synchronization.",
    category: "Software & Firmware Development",
    image: "/portfolio/banner/high_traffic_web_platform.webp",
    route: "/portfolio/high-traffic-web-platform",
    tags: ["WebSockets", "Cloud", "Scale"],
    featured: false,
    published: true,
    sortOrder: 2,
  },
  {
    slug: "fintech-verification-ai",
    title: "Fintech Verification AI",
    metric: "95%+ accuracy",
    summary:
      "Document AI pipeline for fintech verification with OCR, classification, and quality checks.",
    category: "AI Products",
    image: "/portfolio/banner/fintech_verification_AI.webp",
    route: "/portfolio/fintech-verification-ai",
    tags: ["Computer Vision", "OCR", "Fintech"],
    featured: false,
    published: true,
    sortOrder: 3,
  },
  {
    slug: "government-document-ai-2",
    title: "Government Document AI",
    metric: "60% faster processing",
    summary:
      "Secure LLM-powered retrieval and summarization workflow for government document archives.",
    category: "AI Products",
    image: "/portfolio/banner/government_document_AI.webp",
    route: "/portfolio/government-document-ai-2",
    tags: ["NLP", "Document AI", "Gov Tech"],
    featured: false,
    published: true,
    sortOrder: 4,
  },
  {
    slug: "marketing-content-assistant-2",
    title: "Marketing Content Assistant",
    metric: "3x content output",
    summary:
      "AI content workspace helping teams create campaign assets faster with consistent quality.",
    category: "AI Products",
    image: "/portfolio/banner/marketing_content_assistant.webp",
    route: "/portfolio/marketing-content-assistant-2",
    tags: ["Content Gen", "Automation", "Marketing"],
    featured: false,
    published: true,
    sortOrder: 5,
  },
];

const solutionsSeed = [
  {
    slug: "ai-products",
    title: "AI Products",
    desc: "A suite of AI products that automates analysis, Q&A, and real-time decision making.",
    image: "/AI_Product.webp",
    route: "/solutions/ai-products-2",
    category: "Artificial Intelligence",
    metric: "50+ deployments",
    accent: "from-cyan-500 to-sky-500",
    icon: "Sparkles",
    features: ["Predictive Analytics", "Natural Language Processing", "Real-time Q&A"],
    published: true,
    sortOrder: 1,
  },
  {
    slug: "industrial-ai-automation",
    title: "Industrial AI & Automation",
    desc: "End-to-end industrial AI solutions for computer vision inspection and factory integration.",
    image: "/IndustrialAI.webp",
    route: "/solutions/coming-soon",
    category: "Industrial Automation",
    metric: "<120ms inference",
    accent: "from-blue-500 to-indigo-500",
    icon: "Cpu",
    features: ["Defect Detection", "Predictive Maintenance", "IoT Integration"],
    published: true,
    sortOrder: 2,
  },
  {
    slug: "software-firmware-development",
    title: "Software & Firmware Development",
    desc: "Expert software engineering and embedded system development for enterprise-grade products.",
    image: "/softwareAndFirmware.webp",
    route: "/solutions/software-firmware-development-2",
    category: "Software Development",
    metric: "99.9% reliability",
    accent: "from-teal-500 to-cyan-500",
    icon: "Layers",
    features: ["Custom Web/App", "Embedded C/C++", "Cloud Architecture"],
    published: true,
    sortOrder: 3,
  },
  {
    slug: "vision-qa-assistant",
    title: "Vision QA Assistant",
    desc: "Automated visual QA workflows for rapid defect detection and quality tracing.",
    image: "/IndustrialAI.webp",
    route: "/solutions/coming-soon",
    category: "Computer Vision",
    metric: "98% detection precision",
    accent: "from-emerald-500 to-teal-500",
    icon: "ScanSearch",
    features: ["Image Classification", "Defect Highlighting", "Shift Reports"],
    published: true,
    sortOrder: 4,
  },
  {
    slug: "enterprise-rag-knowledge-hub",
    title: "Enterprise RAG Knowledge Hub",
    desc: "Unified retrieval hub for company knowledge with citations, governance, and role-based access.",
    image: "/AI_Product.webp",
    route: "/solutions/ai-products-2",
    category: "Knowledge Systems",
    metric: "70% faster lookup",
    accent: "from-fuchsia-500 to-pink-500",
    icon: "Database",
    features: ["Source Grounding", "Access Control", "Prompt Governance"],
    published: true,
    sortOrder: 5,
  },
];

async function seedBlogs() {
  for (const item of blogSeed) {
    await prisma.blogPost.upsert({
      where: { slug: item.slug },
      update: item,
      create: item,
    });
  }
}

async function seedPortfolio() {
  for (const item of portfolioSeed) {
    await prisma.portfolioItem.upsert({
      where: { slug: item.slug },
      update: item,
      create: item,
    });
  }
}

async function seedSolutions() {
  for (const item of solutionsSeed) {
    await prisma.solutionItem.upsert({
      where: { slug: item.slug },
      update: item,
      create: item,
    });
  }
}

async function main() {
  await seedBlogs();
  await seedPortfolio();
  await seedSolutions();
  // eslint-disable-next-line no-console
  console.log("Seed completed: blogs, portfolio, solutions");
}

main()
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
