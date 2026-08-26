export const siteConfig = {
  name: "Ayodeji",
  fullName: "Ayodeji Eluwande",
  title: "Ayodeji Eluwande - AI Product Manager",
  description:
    "AI Product Manager who ships. 5+ years across FinTech, HRTech, EdTech, and marketplaces. I write the PRD and the production code: 13 live products built with Next.js, React, and AI tooling. Based in Berlin, Germany.",
  url: "https://ayodejieluwande.vercel.app",
  email: "ayodejieluwande@gmail.com",
  phone: "+491791556146",
  availability: "Open to roles · 2026",
  linkedin: "https://linkedin.com/in/ayodejieluwande",
  twitter: "https://x.com/aeluwande",
  github: "https://github.com/IamDejman",
  cv: "/Ayodeji_Eluwande_CV.pdf",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Skills", href: "/skills" },
  // { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "5+", label: "Years in Product" },
  { value: "8", label: "Products Managed" },
  { value: "13", label: "Sites & Apps Built" },
];

export const currentRoles = [
  {
    title: "Lead AI Product Manager - Operations",
    org: "Skilladder AI",
    period: "May 2025 – Present",
  },
];

export const proofCards = [
  {
    metric: "85%",
    title: "Faster assessment deployment",
    description:
      "Took Skilladder's AI assessment platform from prototype to primary product: weeks to 24 hours, 6 enterprise clients, an 85,000+ candidate national cohort.",
    href: "/work/skilladder",
    cta: "Read the case study",
  },
  {
    metric: "13",
    title: "Live products, built end to end",
    description:
      "Platforms, WhatsApp commerce, PWAs, and client sites. PRD to production code with Next.js, React, Kotlin, and AI-assisted development.",
    href: "/work",
    cta: "See the builds",
  },
  {
    metric: "#1",
    title: "Tech Cabal's 25 Startups to Watch",
    description:
      "Drove product strategy for Carbin Africa, an automotive marketplace, to the top of Tech Cabal's 2025 list through inventory and adoption wins.",
    href: "/work",
    cta: "See managed products",
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
  { title: "Product Manager", org: "Tellerpoint", period: "May 2024 – Feb 2026" },
  { title: "Product Manager", org: "Devlabs Africa Limited", period: "May 2024 – May 2025" },
  { title: "Product Manager", org: "Switch Recycling", period: "Sep 2022 – May 2024" },
  { title: "Associate Product Manager", org: "Treford", period: "May 2022 – Jul 2022" },
];

type Project = {
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
      "Building the future of skills-based hiring across Africa through AI-powered talent workflows and verified skills assessments. Took the assessment platform from prototype to primary product, cutting deployment time by 85%, while leading product strategy from planning to retrospective with AI tools including Cursor and Claude Code.",
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
      "Drove product strategy and roadmap for Carbin Africa, an automotive marketplace platform. Optimised dealer inventory management and increased platform adoption, helping achieve #1 on Tech Cabal's \"25 Startups to Watch in 2025\".",
    tags: ["Automotive", "Marketplace", "Strategy", "Growth"],
    highlight: "#1 on Tech Cabal's 25 to Watch",
    caseStudy: "carbin",
  },
  {
    title: "GPS Delivery Platform",
    client: "Devlabs Africa",
    role: "Product Manager",
    description:
      "Delivered GPS's integrated delivery ecosystem through real-time tracking and automated dispatch features, creating a seamless logistics experience.",
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

type BuiltProject = {
  title: string;
  url?: string;
  image?: string;
  flagship?: boolean;
  description: string;
  tech: string[];
  highlight: string;
};

export const builtProjects: BuiltProject[] = [
  {
    title: "Skilladder Assessment Platform",
    image: "/work/skilladder.png",
    flagship: true,
    url: "https://assessments.skilladder.ai",
    description:
      "Multi-tenant skills assessment platform with a creator studio, proctoring and anti-fraud telemetry, a job board, and employer talent matching. Built a durable email pipeline and a 60+ endpoint client API, deployed for a national talent cohort of 85,000+ candidates.",
    tech: ["React", "Vite", "Supabase", "Railway"],
    highlight: "85,000+ candidate cohort",
  },
  {
    title: "Autopapers NG",
    description:
      "WhatsApp-native vehicle paper renewal. Drivers check document status by plate number, pay, and get renewals processed, with automated reminders and thermal-printer work orders for operators. Built on a shared WhatsApp Flow commerce engine.",
    tech: ["Kotlin", "Spring Boot", "WhatsApp Flow API", "Paystack"],
    highlight: "Live on WhatsApp",
  },
  {
    title: "Vendflow",
    description:
      "WhatsApp-native electricity vending. Customers buy prepaid power and settle postpaid bills directly in chat through integrated bill-pay rails, with instant token delivery. Shares the WhatsApp Flow engine behind Autopapers.",
    tech: ["Kotlin", "Spring Boot", "WhatsApp Flow API", "Paystack"],
    highlight: "Live bill payments",
  },
  {
    title: "Orderflow",
    image: "/work/orderflow.png",
    flagship: true,
    url: "https://app.tryorderflow.com",
    description:
      "Conversational food ordering and table booking over WhatsApp. Menu browsing, item customization, checkout, and kitchen receipt printing, all inside a single WhatsApp Flow with a Next.js operator dashboard.",
    tech: ["Kotlin", "Spring Boot", "Next.js", "WhatsApp Flow API"],
    highlight: "Order & book in chat",
  },
  {
    title: "CVERSE",
    image: "/work/cverse.png",
    url: "https://demirti.com",
    description:
      "Cohort-based learning management platform with automated weekly content unlocking, assignment submission and grading, class recordings, and progress analytics for course delivery.",
    tech: ["Next.js", "PostgreSQL", "Vercel"],
    highlight: "Cohort-based LMS",
  },
  {
    title: "Harvesters Workers System",
    url: "https://attendance.hiccgbagada.com",
    image: "/work/hicc-attendance.png",
    description:
      "Church workforce administration platform with multi-tier role-based access, department and team management, bulk email campaigns with delivery tracking, attendance history, and Excel/CSV import-export.",
    tech: ["React", "Supabase", "AWS Amplify"],
    highlight: "Multi-role admin platform",
  },
  {
    title: "Workers Meeting",
    description:
      "Offline-first PWA for tracking church meeting attendance in the field. Real-time entry by team, directorate-level summaries, and admin reporting, built to keep working without a connection.",
    tech: ["React", "TypeScript", "Vite", "Supabase"],
    highlight: "Offline-first PWA",
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
    title: "Vrena Law",
    image: "/work/vrena-law.png",
    url: "https://vrenalaw.com",
    description:
      "Professional legal services website for a Nigerian law firm. Modern design with animated sections, service showcases, and consultation booking interface.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    highlight: "Live client project",
  },
  {
    title: "GRWTEE",
    image: "/work/grwtee.png",
    flagship: true,
    url: "https://grwtee.com",
    description:
      "Luxury personal styling service platform with booking functionality, service catalog, and portfolio gallery. Built with a refined, editorial aesthetic.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    highlight: "End-to-end styling platform",
  },
  {
    title: "Banyan Claims",
    image: "/work/banyan-claims.png",
    url: "https://banyanclaims.com",
    description:
      "Claims management platform built for streamlined processing and client engagement.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    highlight: "Client platform",
  },
  {
    title: "HICC Gbagada Attendance",
    description:
      "Church attendance tracking web application for Harvesters International Christian Centre, Gbagada. Digital check-in system replacing manual processes.",
    tech: ["React", "JavaScript", "Web App"],
    highlight: "Community tool in active use",
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
    slug: "skilladder",
    title: "Skilladder Assessment Platform",
    org: "Skilladder AI",
    role: "Lead AI Product Manager - Operations",
    period: "May 2025 – Present",
    summary:
      "From a spreadsheet workflow to a multi-tenant assessment platform serving a national talent cohort of 85,000+ candidates.",
    url: "https://assessments.skilladder.ai",
    metrics: [
      { value: "85,000+", label: "Candidates assessed" },
      { value: "6", label: "Recurring enterprise clients" },
      { value: "85%", label: "Faster deployment" },
      { value: "60+", label: "Client API endpoints" },
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
          "A multi-tenant assessment platform with a creator studio for authoring assessments, AI scoring, proctoring with anti-fraud telemetry, and participant management. Around the core sit a job board, employer talent matching, a durable email pipeline, and a client API with more than 60 endpoints.",
          "I owned the full lifecycle. Research, requirements, and design, then hands-on development with Cursor and Claude Code, followed by continuous iteration with clients in production.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "The platform became the company's primary product. Deployment time dropped by 85% against the prototype process, and the platform now serves 6 recurring enterprise clients. Its largest single engagement was a national talent programme that assessed a cohort of more than 85,000 candidates.",
          "Beyond the product itself, I manage OKR setting across the product organisation, aligning a cross-functional team around measurable quarterly outcomes.",
        ],
      },
    ],
  },
  {
    slug: "carbin",
    title: "Carbin Africa",
    org: "Devlabs Africa",
    role: "Product Manager",
    period: "May 2024 – May 2025",
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
          "Carbin Africa is an automotive marketplace connecting car dealers with buyers. The core problem was supply-side: dealer inventory was fragmented and stale, which eroded buyer trust and repeat usage. As the consultancy PM, I owned product strategy and the roadmap.",
        ],
      },
      {
        heading: "Key decisions",
        paragraphs: [
          "We prioritised dealer inventory management before demand-side growth: a marketplace with unreliable listings loses both sides. I drove the inventory workflow redesign so dealers could keep listings accurate with minimal effort, and sequenced adoption work around that foundation.",
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
    period: "May 2024 – Feb 2026",
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
          "Tellerpoint is an agency banking platform: it gives financial institutions the rails to deliver services in communities banks do not reach. I owned the Collections Mobile and Web Apps and later delivered Tellerpoint Mini end to end.",
        ],
      },
      {
        heading: "How I worked",
        paragraphs: [
          "I ran the full lifecycle: strategy, roadmap, and delivery through agile sprints with weekly syncs. Extensive user interviews with agents and institutions fed directly into prioritised feature work, and cross-functional coordination kept engineering, operations, and partner institutions aligned.",
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
    "AI-Assisted Development (Cursor, Claude Code, Lovable, Replit)",
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
  { name: "Product Academy Series 2023", org: "McKinsey Academy", year: "2023" },
  { name: "Product Led Growth Micro-Certification (PLGC)", org: "Product School", year: "2022" },
  { name: "Product Management Certification", org: "Treford", year: "2022" },
  { name: "Technical Product Management Certification", org: "LinkedIn Learning", year: "2022" },
  { name: "Building a Product Roadmap Certification", org: "LinkedIn Learning", year: "2022" },
];

export const education = {
  degree: "Bachelor of Laws",
  school: "Lagos State University",
  period: "Dec 2013 – Sep 2018",
};

export const howIWork =
  "My week splits between product work and building. I run sprints in Linear, conduct user research, and keep stakeholders aligned on what ships next. When something needs to exist quickly, I build it myself with Next.js, React, and Tailwind CSS, working alongside AI tools like Cursor, Claude Code, Lovable, and Replit. I'm the PM who can sit with engineers, hold the room with execs, and ship the MVP myself if needed.";

export const blogPosts = [
  {
    title: "Translating Chaos Into Structure",
    tag: "Product Thinking",
    excerpt:
      "How I approach complex, high-stakes product situations - and why the first draft of clarity is always messy.",
    status: "Coming Soon",
    slug: "translating-chaos-into-structure",
  },
  {
    title: "Building for Agent Networks in Nigeria",
    tag: "Fintech",
    excerpt:
      "Lessons from deploying agency banking platforms where infrastructure is scarce and trust is everything.",
    status: "Coming Soon",
    slug: "building-for-agent-networks",
  },
  {
    title: "Why I Built an Assessment Engine from Scratch",
    tag: "Building",
    excerpt:
      "The Skilladder story - from Google Sheets to a multi-tenant AI platform, and what I learned along the way.",
    status: "Coming Soon",
    slug: "assessment-engine-from-scratch",
  },
];

export const openTo = [
  "Full-time PM or prompt engineering roles",
  "Freelance projects",
  "Consulting & fractional PM engagements",
  "Speaking & mentoring",
];
