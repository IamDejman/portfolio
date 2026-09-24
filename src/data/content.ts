export const siteConfig = {
  name: "Ayodeji",
  fullName: "Ayodeji Eluwande",
  title: "Ayodeji Eluwande - AI Product Manager",
  description:
    "AI product manager and builder in Berlin. Explore assessment systems, agent workflows and commerce platforms, from product decisions to working software.",
  url: "https://ayodejieluwande.vercel.app",
  email: "ayodejieluwande@gmail.com",
  linkedin: "https://linkedin.com/in/ayodejieluwande",
  twitter: "https://x.com/aeluwande",
  github: "https://github.com/IamDejman",
  cv: "/Ayodeji_Eluwande_CV.pdf",
};

export const currentRoles = [
  {
    title: "Lead AI Product Manager - Operations",
    org: "Skilladder AI",
    period: "May 2025 - Present",
  },
];

export const toolGroups = [
  {
    label: "Product ops",
    tools: ["Linear", "Figma", "Miro", "Postman", "SQL"],
  },
  {
    label: "AI build",
    tools: ["Cursor", "Claude Code", "Codex", "Gemini"],
  },
  {
    label: "Ship & run",
    tools: ["Next.js", "Supabase", "Vercel", "Railway", "AWS"],
  },
];

export const pastRoles = [
  {
    title: "Product Manager",
    org: "Tellerpoint",
    period: "May 2024 - Apr 2026",
  },
  {
    title: "Product Manager",
    org: "Devlabs Africa Limited",
    period: "May 2024 - May 2025",
  },
  {
    title: "Product Manager",
    org: "Switch Recycling",
    period: "Sep 2022 - May 2024",
  },
  {
    title: "Associate Product Manager",
    org: "Treford",
    period: "May 2022 - Jul 2022",
  },
];

export type Project = {
  title: string;
  client: string;
  role: string;
  description: string;
  tags: string[];
  highlight: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    title: "Skilladder AI",
    client: "Skilladder AI",
    role: "Lead AI Product Manager - Operations",
    description:
      "Skilladder runs verified skills assessments for hiring across Africa. I took the assessment platform from prototype to primary product, cutting deployment time by 85%, while leading product strategy from planning to retrospective with AI tools including Cursor, Claude Code, and Codex.",
    tags: ["HRTech", "AI", "Assessment", "Hiring"],
    highlight: "Cut deployment time by 85%",
    caseStudy: "skilladder",
  },
  {
    title: "Tellerpoint Collections & Mini",
    client: "Tellerpoint",
    role: "Product Manager",
    description:
      "Led product strategy and development lifecycle of Collection's Mobile and Web App, plus the Tellerpoint Mini. Conducted extensive user interviews that improved product features and implemented agile practices through weekly syncs and scrum rituals.",
    tags: ["Fintech", "Agency Banking", "Mobile", "Agile"],
    highlight: "End-to-end product lifecycle",
    caseStudy: "tellerpoint",
  },
  {
    title: "Carbin Africa",
    client: "Devlabs Africa",
    role: "Product Manager",
    description:
      'Drove product strategy and roadmap for Carbin Africa, an automotive marketplace platform. Optimised dealer inventory management and increased platform adoption, helping achieve #1 on Tech Cabal\'s "25 Startups to Watch in 2025".',
    tags: ["Automotive", "Marketplace", "Strategy", "Growth"],
    highlight: "#1 on Tech Cabal's 25 to Watch",
    caseStudy: "carbin",
  },
  {
    title: "GPS Delivery Platform",
    client: "Devlabs Africa",
    role: "Product Manager",
    description:
      "Delivered GPS's integrated delivery ecosystem with real-time tracking and automated dispatch features.",
    tags: ["Logistics", "Delivery", "Real-time", "Automation"],
    highlight: "Real-time tracking & dispatch",
  },
  {
    title: "Switch Recycling",
    client: "Switch Recycling",
    role: "Product Manager",
    description:
      "Boosted user engagement by 15% through UX enhancements to the Request feature. Partnered with cross-functional teams to deliver a waste management app through analysed user data and market trends. Created training materials that improved adoption and reduced support queries.",
    tags: ["WasteTech", "Mobile App", "UX", "Fintech"],
    highlight: "15% user engagement boost",
  },
  {
    title: "BetaCare",
    client: "Treford",
    role: "Associate Product Manager",
    description:
      "Pitched and developed BetaCare, an electronic health record product selected as the top solution for its scalability and viability in reducing administrative overhead for healthcare providers. Developed comprehensive product strategy including user personas, business models, and product roadmap.",
    tags: ["HealthTech", "EHR", "Strategy", "Prototyping"],
    highlight: "Selected as top solution",
  },
];

export type BuiltProject = {
  title: string;
  url?: string;
  caseStudy?: string;
  image?: string;
  flagship?: boolean;
  description: string;
  tech: string[];
  highlight: string;
};

export const builtProjects: BuiltProject[] = [
  {
    title: "Skilladder Assessment Platform",
    image: "/work/skilladder.jpg",
    flagship: true,
    caseStudy: "skilladder",
    url: "https://assessments.skilladder.ai",
    description:
      "Multi-tenant skills assessment platform with a creator studio, proctoring and anti-fraud telemetry, a job board, and employer talent matching. Built a durable email pipeline and a 60+ endpoint client API, deployed for a national talent cohort of 85,000+ candidates.",
    tech: ["React", "Vite", "Supabase", "Railway"],
    highlight: "85,000+ candidate cohort",
  },
  {
    title: "Orderflow",
    image: "/work/orderflow.jpg",
    flagship: true,
    caseStudy: "orderflow",
    url: "https://app.tryorderflow.com",
    description:
      "Conversational commerce on WhatsApp: food ordering and table booking, event ticketing, electricity vending and vehicle paper renewal, all on one shared engine. Payments, settlement, a printer and scanner fleet, and a Next.js merchant dashboard.",
    tech: ["Kotlin", "Spring Boot", "Next.js", "WhatsApp Flow API"],
    highlight: "3 verticals in production",
  },
  {
    title: "GRWTEE",
    image: "/work/grwtee.jpg",
    flagship: true,
    url: "https://grwtee.com",
    description:
      "Personal styling iOS app with a digital wardrobe, AI virtual try-on, lookbooks, and an outfit calendar. Expo and React Native client, Next.js API on Vercel, Supabase auth and storage with row level security, shipped through TestFlight.",
    tech: ["React Native", "Expo", "Next.js", "Supabase"],
    highlight: "AI styling app on iOS",
  },
  {
    title: "Banyan Claims",
    image: "/work/banyan-claims.jpg",
    url: "https://banyanclaims.com",
    description:
      "Public website and customer claims portal for a claims support consultancy, built end to end. Typed API contract, strict Content Security Policy, accessibility fixes, and a full V2 design revision.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    highlight: "Client platform",
  },
  {
    title: "Harvesters Workers System",
    url: "https://attendance.hiccgbagada.com",
    image: "/work/hicc-attendance.jpg",
    description:
      "Workforce platform for a large church organization. Profiles, departments, role-based access with Row Level Security, a bulk SMS and email engine with dual gateways and cost estimation, training with automated certificates, and event registration at scale.",
    tech: ["React", "Supabase", "TanStack Query", "SendGrid"],
    highlight: "Multi-role admin platform",
  },
  {
    title: "CVERSE",
    image: "/work/cverse.jpg",
    url: "https://demirti.com",
    description:
      "Cohort-based learning management platform with automated weekly content unlocking, assignment submission and grading, class recordings, and progress analytics for course delivery.",
    tech: ["Next.js", "PostgreSQL", "Vercel"],
    highlight: "Cohort-based LMS",
  },
  {
    title: "Vrena Law",
    image: "/work/vrena-law.jpg",
    url: "https://vrenalaw.com",
    description:
      "Professional legal services website for a Nigerian law firm. Modern design with animated sections, service showcases, and consultation booking interface.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    highlight: "Live client project",
  },
  {
    title: "Football Ladder",
    url: "https://footballadder.com/",
    description:
      "Football career simulation with a generated world, club finances and deterministic actors. Run a club from the boardroom and build a career through the wider football system. The AWS-hosted public site offers early access.",
    tech: ["TypeScript", "PostgreSQL", "Node.js", "AWS"],
    highlight: "Football career simulation",
  },
  {
    title: "Osun Decides",
    url: "https://osundecides.vercel.app",
    description:
      "Election-information tooling that connects source records, arithmetic validation, uncertainty flags and append-only corrections. A project about making evidence and its limitations visible.",
    tech: ["Python", "Data validation", "Web publishing"],
    highlight: "Evidence engineering",
  },
  {
    title: "Message Logistics",
    description:
      "Last-mile logistics platform coordinating deliveries across origin, recipient, and destination-hub stages with real-time routing and dispatch tracking.",
    tech: ["React", "TypeScript", "Railway"],
    highlight: "In beta testing",
  },
  {
    title: "Free CV Review",
    description:
      "Tool that gives job seekers structured, automated feedback on their CVs, surfacing gaps and improvements to strengthen applications.",
    tech: ["Next.js", "TypeScript", "AI"],
    highlight: "In development",
  },
  {
    title: "Hotel California",
    url: "https://github.com/IamDejman/hotel-california",
    description:
      "A browser-agent experiment with a bounded Claude tool loop, pattern logging, scoring and replay infrastructure. The source is available; a completed recorded run is not presented here.",
    tech: ["TypeScript", "Claude", "Browser automation"],
    highlight: "Prototype · source available",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  org: string;
  role: string;
  period: string;
  summary: string;
  url?: string;
  metrics: { value: string; label: string }[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "onboarding-engine",
    title: "Onboarding Engine",
    org: "Independent build",
    role: "Product design and development",
    period: "Prototype",
    summary:
      "An inspectable agent workflow that turns source material into an onboarding guide, with retrieval, intermediate artifacts and sensitivity filtering.",
    metrics: [
      { value: "3", label: "Agent stages" },
      { value: "Hybrid", label: "Keyword and embedding retrieval" },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "An onboarding guide needs to connect scattered knowledge into a useful path for a new teammate. Generating a polished document is only part of the task: the workflow should also make it possible to inspect what was found and how the guide took shape.",
        ],
      },
      {
        heading: "The mechanism",
        paragraphs: [
          "The Explorer, Synthesizer and Writer stages divide discovery, structure and document creation. Intermediate artifacts include a scratchpad, an outline and a final document, so the process can be inspected before treating the output as complete.",
          "Retrieval combines BM25 keyword matching with embeddings. Sensitivity filtering helps control what material enters the workflow. The included synthetic corpus supports demonstrations without exposing private workplace documents.",
        ],
      },
      {
        heading: "What this demonstrates",
        paragraphs: [
          "The project is an example of agent orchestration around a defined job, including the intermediate state that makes a multi-stage workflow easier to understand and debug.",
          "Direct Slack, Notion and GitHub connectors remain planned work. The existing workflow uses imported material; this case study does not present those future connectors as completed integrations.",
        ],
      },
    ],
  },
  {
    slug: "skilladder",
    title: "Skilladder Assessment Platform",
    org: "Skilladder AI",
    role: "Lead AI Product Manager - Operations",
    period: "May 2025 - Present",
    summary:
      "From a spreadsheet workflow to a multi-tenant assessment platform serving a national talent cohort of 85,000+ candidates.",
    url: "https://assessments.skilladder.ai",
    metrics: [
      { value: "85,000+", label: "Candidates assessed" },
      { value: "128", label: "Backend services built & monitored" },
      { value: "85%", label: "Faster deployment" },
      { value: "6", label: "Recurring enterprise clients" },
    ],
    sections: [
      {
        heading: "The starting point",
        paragraphs: [
          "Skilladder runs skills assessments for hiring across Africa. When I joined, the assessment workflow lived in spreadsheets and manual coordination. Every engagement needed hands-on setup, results took real effort to compile, and nothing about the process could absorb a national cohort.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "A multi-tenant assessment platform with a creator studio, AI scoring, proctoring with anti-fraud telemetry, and participant management. Around the core sit a job board, employer talent matching, and a client API with more than 60 endpoints. For the 3MTT x NJFP government program I built the full delivery pipeline, covering the test taking flow, proctoring, three synchronized grading engines, and job matching at national scale.",
          "Reliability work came with it. I replaced fragile per message email sending with durable database-backed queues and workers, designed an in-house monitoring stack wrapping all 128 backend services with automatic error classification and an admin triage dashboard, and moved the platform behind Cloudflare without disrupting email deliverability.",
          "Fairness shipped as a feature. Read aloud assessments with Nigerian accent voices, server enforced extended time accommodations, and a mobile fix that restored fair retakes for 1,300+ affected candidates.",
          "I owned the full lifecycle. Research, requirements, and design, then hands on development with Cursor, Claude Code, and Codex, iterating with clients in production.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "The platform became the company's primary product. Deployment time dropped by 85% against the prototype process. It has served 32 enterprise clients in total, including 6 recurring clients, with banks and multinationals requiring byte-exact legacy report parity. Its largest single engagement was a national talent programme that assessed a cohort of more than 85,000 candidates. New assessment product lines (Route and Skill Index) shipped under my lead, from scoring bands and retake sittings to the pricing model behind them.",
          "Beyond the product itself, I manage OKR setting across the product organisation, aligning a cross-functional team around measurable quarterly outcomes.",
        ],
      },
    ],
  },
  {
    slug: "orderflow",
    title: "Orderflow",
    org: "Independent build",
    role: "Founder-engineer",
    period: "Apr 2026 - Present",
    summary:
      "A production commerce platform on WhatsApp covering payments, settlement, a hardware fleet, a merchant dashboard, and infrastructure. Built solo, from first commit to daily production traffic in under five months.",
    url: "https://app.tryorderflow.com",
    metrics: [
      { value: "3", label: "Business verticals in production" },
      { value: "4", label: "Payment providers integrated" },
      { value: "<5 mo", label: "First commit to production traffic" },
      { value: "1", label: "Engineer, end to end" },
    ],
    sections: [
      {
        heading: "The platform",
        paragraphs: [
          "Orderflow is conversational commerce on the Meta Cloud API and WhatsApp Flows, running three verticals in production. Food and retail ordering with catalogues synced to Meta, in chat checkout, loyalty tiers, and a tax engine. Event ticketing with pass images and QR door check in on hardware scanners with signed, audited codes. Prepaid electricity vending and vehicle papers renewal with NIN and BVN identity verification.",
        ],
      },
      {
        heading: "Payments and money",
        paragraphs: [
          "A pluggable payment layer behind clean provider interfaces runs real money in production. Four Nigerian providers (Rubies, Squad, Tellerpoint, Paga) with dedicated virtual accounts and instant bank transfer reconciliation, plus a ledger derived settlement engine with day cycle grouping, audit trails, and a capped processing fee model. Live incidents, including a Flyway out of order migration outage, ended in post mortems and permanent guardrails.",
        ],
      },
      {
        heading: "Hardware and operations",
        paragraphs: [
          "A production fleet of thermal receipt printers and QR scanners runs over MQTT with HTTP fallback. Station based routing, stale job resweeps, and custom receipt rendering to thermal bitmaps. Merchants operate through a Next.js dashboard with a 12 step guided onboarding, fail closed RBAC shared between frontend and backend, and TOTP device challenges for admin access.",
          "Security is the default. Tenant scoped queries everywhere, signature verification on every webhook, amount gates on vending, and secrets that never appear in API responses. Develop auto deploys staging, main auto deploys production, and every change is verified before it moves.",
        ],
      },
    ],
  },
  {
    slug: "carbin",
    title: "Carbin Africa",
    org: "Devlabs Africa",
    role: "Product Manager",
    period: "May 2024 - May 2025",
    summary:
      "Product strategy and roadmap for an automotive marketplace, from dealer inventory pain to #1 on Tech Cabal's 25 Startups to Watch in 2025.",
    metrics: [
      { value: "#1", label: "Tech Cabal's 25 Startups to Watch 2025" },
      { value: "2-sided", label: "Dealer and buyer marketplace" },
    ],
    sections: [
      {
        heading: "The starting point",
        paragraphs: [
          "Carbin Africa is an automotive marketplace connecting car dealers with buyers. The core problem was on the supply side. Dealer inventory was fragmented and stale, which eroded buyer trust and repeat usage. As the consultancy PM, I owned product strategy and the roadmap.",
        ],
      },
      {
        heading: "Key decisions",
        paragraphs: [
          "We prioritised dealer inventory management before demand side growth, because a marketplace with unreliable listings loses both sides. I drove the inventory workflow redesign so dealers could keep listings accurate with minimal effort, and sequenced adoption work around that foundation.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "Platform adoption grew on both sides of the marketplace, and Carbin Africa was named #1 on Tech Cabal's 25 Startups to Watch in 2025.",
        ],
      },
    ],
  },
  {
    slug: "tellerpoint",
    title: "Tellerpoint Collections & Mini",
    org: "Tellerpoint",
    role: "Product Manager",
    period: "May 2024 - Apr 2026",
    summary:
      "Full product lifecycle for agency banking tools that let financial institutions serve underserved communities.",
    metrics: [
      { value: "2", label: "Products shipped end to end" },
      { value: "Weekly", label: "Sprint and research cadence" },
    ],
    sections: [
      {
        heading: "The starting point",
        paragraphs: [
          "Tellerpoint is an agency banking platform. It gives financial institutions the rails to deliver services in communities banks do not reach. I owned the Collections Mobile and Web Apps and later delivered Tellerpoint Mini end to end.",
        ],
      },
      {
        heading: "How I worked",
        paragraphs: [
          "I ran the full lifecycle. Strategy, roadmap, and delivery through agile sprints with weekly syncs. Extensive user interviews with agents and institutions fed directly into prioritised feature work, and cross-functional coordination kept engineering, operations, and partner institutions aligned.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "Collections shipped as both mobile and web apps, Tellerpoint Mini went from concept to delivery under my ownership, and the interview-driven roadmap measurably improved feature adoption across the agent network.",
        ],
      },
    ],
  },
];

export const skills = {
  "Product Management": [
    "Product Strategy & Roadmapping",
    "Product Vision & Planning",
    "Agile Methodologies",
    "Stakeholder Management",
    "UX Research & Discovery",
    "Product Lifecycle Management",
  ],
  "Building & Engineering": [
    "Next.js / React",
    "Tailwind CSS",
    "PostgreSQL / Prisma",
    "AI-Assisted Development (Cursor, Claude Code, Codex, Gemini)",
    "Vercel Deployment",
    "Prompt Engineering & Prototyping",
  ],
  Domain: [
    "Fintech & Agency Banking",
    "EdTech & Assessments",
    "Waste Management & CleanTech",
    "HealthTech",
    "Logistics & Delivery",
    "Automotive Marketplaces",
  ],
  Commercial: [
    "Go-to-Market Strategy",
    "Client Engagement",
    "Project Management",
    "Training & Enablement",
    "Data-driven Decision Making",
    "Prioritisation",
  ],
};

export const certifications = [
  {
    name: "Product Academy Series 2023",
    org: "McKinsey Academy",
    year: "2023",
  },
  {
    name: "Product Led Growth Micro-Certification (PLGC)",
    org: "Product School",
    year: "2022",
  },
  { name: "Product Management Certification", org: "Treford", year: "2022" },
  {
    name: "Technical Product Management Certification",
    org: "LinkedIn Learning",
    year: "2022",
  },
  {
    name: "Building a Product Roadmap Certification",
    org: "LinkedIn Learning",
    year: "2022",
  },
];

export const education = {
  degree: "Bachelor of Laws",
  school: "Lagos State University",
  period: "Dec 2013 - Sep 2018",
};

export const howIWork =
  "My week splits between product work and building. I run sprints in Linear, conduct user research, and keep stakeholders aligned on what ships next. When something needs to exist quickly, I build it myself with Next.js, React, and Tailwind CSS, working alongside AI tools like Cursor, Claude Code, Codex, and Gemini. I'm the PM who can sit with engineers, hold the room with execs, and ship the MVP myself if needed.";

export const openTo = [
  "Full-time Product Management, AI Operations, Forward Deployed & AI Engineering, or Product Engineer roles",
  "Freelance projects",
  "Consulting & fractional PM engagements",
  "Speaking & mentoring",
];
