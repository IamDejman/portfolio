export const siteConfig = {
  name: "Ayodeji",
  fullName: "Ayodeji Eluwande",
  title: "Ayodeji Eluwande - AI Product Engineer",
  description:
    "AI product engineer in Berlin. Explore assessment systems, agent workflows and commerce platforms, from product decisions to working software.",
  url: "https://ayodejieluwande.vercel.app",
  email: "ayodejieluwande@gmail.com",
  linkedin: "https://linkedin.com/in/ayodejieluwande",
  twitter: "https://x.com/aeluwande",
  github: "https://github.com/IamDejman",
  cv: "/Ayodeji_Eluwande_CV.pdf",
  timezone: "Central European Time",
  // A scheduling page (for example Cal.com) for a 20-minute call. The
  // booking actions stay hidden while this is empty.
  booking: "",
  // Right-to-work status for roles in Germany and the EU, shown under Open
  // to on Contact when set.
  workAuthorization: "",
};

export const currentRoles = [
  {
    title: "Lead AI Product Manager, Operations",
    org: "Skilladder AI",
    period: "May 2025 - Present",
  },
];

export const toolGroups = [
  {
    label: "AI build",
    tools: ["Claude Code", "Cursor", "Codex", "Gemini"],
  },
  {
    label: "Ship & run",
    tools: ["Next.js", "Spring Boot", "Supabase", "Vercel", "Railway", "AWS"],
  },
  {
    label: "Product ops",
    tools: ["Linear", "Figma", "Miro", "Postman", "SQL"],
  },
];

export const pastRoles = [
  {
    title: "Product Manager",
    org: "Tellerpoint",
    period: "May 2024 - Feb 2026",
  },
  {
    title: "Product Manager, Consultancy",
    org: "Devlabs Africa Limited",
    period: "May 2024 - May 2025",
  },
  {
    title: "Product Manager",
    org: "Switch Recycling",
    period: "Sep 2022 - May 2024",
  },
  {
    title: "Associate Product Manager, Training Programme",
    org: "Treford",
    period: "May 2022 - Jul 2022",
  },
];

// Product roles before the builds, one line each on the Work page.
export const earlierRoles = [
  {
    name: "Carbin Africa",
    role: "Product Manager, Consultancy",
    org: "Devlabs Africa",
    period: "May 2024 - May 2025",
    summary:
      "Product strategy for an automotive marketplace's dealer inventory workflows. Carbin was named #1 on Tech Cabal's 25 Startups to Watch in 2025.",
  },
  {
    name: "GPS",
    role: "Product Manager, Consultancy",
    org: "Devlabs Africa",
    period: "May 2024 - May 2025",
    summary: "Real-time tracking and automated dispatch for its delivery platform.",
  },
  {
    name: "Switch Recycling",
    role: "Product Manager",
    org: "Switch Recycling",
    period: "Sep 2022 - May 2024",
    summary:
      "Raised user engagement by 15% with improvements to the waste collection Request feature.",
  },
  {
    name: "BetaCare",
    role: "Associate Product Manager, Training Programme",
    org: "Treford",
    period: "May 2022 - Jul 2022",
    summary:
      "An electronic health record concept, prototype and roadmap, selected as the programme's top solution.",
  },
];

export type BuiltProject = {
  title: string;
  url?: string;
  caseStudy?: string;
  image?: string;
  // The products I built myself, shown first on the Work page.
  featured?: boolean;
  description: string;
  tech: string[];
  highlight: string;
};

export const builtProjects: BuiltProject[] = [
  {
    title: "Skilladder Assessment Platform",
    image: "/work/skilladder.jpg",
    featured: true,
    caseStudy: "skilladder",
    url: "https://assessments.skilladder.ai",
    description:
      "Multi-tenant AI assessment platform with a creator studio, AI grading, proctoring and anti-fraud telemetry, a job board and employer talent matching. About 109,000 completed attempts from roughly 48,000 candidates.",
    tech: ["React", "Vite", "Supabase", "Railway"],
    highlight: "Primary engineer",
  },
  {
    title: "Orderflow",
    image: "/work/orderflow.jpg",
    featured: true,
    caseStudy: "orderflow",
    url: "https://app.tryorderflow.com",
    description:
      "Conversational commerce on WhatsApp: food ordering and table booking, event ticketing, electricity vending and vehicle paper renewal, all on one shared engine. Payments, settlement, a printer and scanner fleet, and a Next.js merchant dashboard.",
    tech: ["Kotlin", "Spring Boot", "Next.js", "WhatsApp Flow API"],
    highlight: "Sole engineer, Kotlin and Spring Boot",
  },
  {
    title: "GRWTEE",
    image: "/work/grwtee.jpg",
    featured: true,
    url: "https://grwtee.com",
    description:
      "Personal styling iOS app with a digital wardrobe, AI virtual try-on, lookbooks, and an outfit calendar. Expo and React Native client, Next.js API on Vercel, Supabase auth and storage with row level security, shipped through TestFlight.",
    tech: ["React Native", "Expo", "Next.js", "Supabase"],
    highlight: "iOS app on TestFlight",
  },
  {
    title: "Banyan Claims",
    image: "/work/banyan-claims.jpg",
    featured: true,
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
    featured: true,
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

// The engineering view of a case study. Every line restates something the
// case study or CV already establishes; it adds no new claims.
export type System = {
  summary: string;
  steps: { name: string; detail: string }[];
  foundation: string;
  decisions: { title: string; body: string }[];
};

// Every case study tells its story in the same order: the problem, what was
// built, the stack, one hard bug or tradeoff, the result, and where to see
// it working. The case study page renders these fields in that order.
export type CaseStudy = {
  slug: string;
  title: string;
  org: string;
  role: string;
  period: string;
  summary: string;
  url?: string;
  metrics: { value: string; label: string }[];
  problem: string[];
  built: string[];
  // A product role delivers what a team builds.
  builtHeading?: string;
  stack?: string[];
  challenge?: { kind: "bug" | "tradeoff"; title: string; paragraphs: string[] };
  result: string[];
  repo?: string;
  recording?: string;
  system?: System;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "skilladder",
    title: "Skilladder Assessment Platform",
    org: "Skilladder AI",
    role: "Lead AI Product Manager, Operations",
    period: "May 2025 - Present",
    summary:
      "From a spreadsheet workflow to an AI assessment platform with about 109,000 completed attempts from roughly 48,000 candidates. I lead product and am its primary engineer.",
    url: "https://assessments.skilladder.ai",
    metrics: [
      { value: "~109,000", label: "Completed attempts" },
      { value: "~48,000", label: "Candidates" },
      { value: "128", label: "Backend services monitored" },
      { value: "85%", label: "Faster deployment" },
    ],
    problem: [
      "Skilladder runs skills assessments for hiring across Africa. When I joined, assessments ran on spreadsheets and manual coordination. Every engagement needed hands-on setup, results took real effort to compile, and nothing about the process could absorb a national programme.",
    ],
    built: [
      "A multi-tenant assessment platform, with me as its primary engineer. It covers a creator studio, AI assessment generation, grading of open-ended answers with retrieval over proprietary data, and proctoring with anti-fraud telemetry. For Nigeria's 3MTT programme I built the full delivery pipeline: the test-taking flow, proctoring, three synchronized grading engines and job matching.",
      "Around that core sit a job board that imports jobs from PDFs, with a person reviewing each import, employer talent matching, and a client API with more than 60 endpoints and webhooks, shaped with two customer design partners.",
      "When candidates were dropping off, I investigated and shipped an accessibility rebuild in three days, improving screen-reader support, keyboard navigation and use on low-end Android phones. Read-aloud questions with Nigerian accent voices and extended time enforced on the server sit alongside it.",
      "Underneath, monitoring wraps all 128 backend services with automatic error classification and an admin triage dashboard, and the platform moved behind Cloudflare without disrupting email deliverability.",
    ],
    stack: ["React", "Vite", "Supabase", "Railway", "Cloudflare", "Claude Haiku"],
    challenge: {
      kind: "bug",
      title: "Email lost during 3MTT",
      paragraphs: [
        "During Nigeria's 3MTT programme, results and notifications went out one email at a time, and some never arrived. At national scale, a send that fails once and is forgotten is a candidate who never hears back.",
        "I rebuilt sending as a durable queue. Each email is written to the database first and sent by workers from there, so a failed send is retried instead of lost, and delivery no longer depends on a single attempt.",
      ],
    },
    result: [
      "The platform became the company's primary product. It has served 32+ enterprise clients, including Cowrywise, ALX, Honeywell Group and Kuda, and six of them are recurring clients. Across the platform there have been about 109,000 completed attempts from roughly 48,000 candidates.",
      "Deployment time fell by 85% against the prototype process. AI grading, rolled out through two weeks of shadow testing with confidence scores and one-click human override, cut grading turnaround from days to hours, and moving it from Claude Sonnet to Claude Haiku cut its cost from about $30 to $8 a week.",
      "After the accessibility rebuild, completion improved and a client recovered candidates it had lost.",
    ],
    system: {
      summary:
        "How a candidate's answer becomes a result an employer can use. The AI grades, a reviewer can always overrule it, and delivery is built not to drop results.",
      steps: [
        {
          name: "Take the assessment",
          detail:
            "A test-taking flow with proctoring and anti-fraud telemetry, read-aloud questions and extended time enforced on the server.",
        },
        {
          name: "Bring in context",
          detail:
            "The question, the rubric and source material retrieved from proprietary data, so the grader judges against defined criteria.",
        },
        {
          name: "Grade with AI",
          detail:
            "Rubric-linked scores with a rationale that can be checked against the answer. The 3MTT programme ran three synchronized grading engines.",
        },
        {
          name: "Keep a person in the loop",
          detail:
            "Every result carries a confidence score, and a reviewer can override any grade with one click.",
        },
        {
          name: "Deliver",
          detail:
            "A client API with more than 60 endpoints and webhooks, reports with byte-exact legacy parity, and email sent from a durable queue.",
        },
      ],
      foundation:
        "Monitoring across 128 backend services with automatic error classification and an admin triage dashboard, with the platform behind Cloudflare.",
      decisions: [
        {
          title: "Earn trust before automating",
          body: "AI grading ran in shadow for two weeks before it graded on its own. Confidence scores and one-click override keep a person in control, and grading turnaround fell from days to hours.",
        },
        {
          title: "Pay for the model the task needs",
          body: "Grading moved from Claude Sonnet to Claude Haiku, cutting its cost from about $30 to $8 a week. Confidence scores and one-click override stayed in place, so a person can still catch a grade that looks wrong.",
        },
        {
          title: "Treat fairness as a feature",
          body: "Read-aloud assessments with Nigerian accent voices, extended time enforced on the server rather than in the browser, and a mobile fix that restored fair retakes for 1,300+ affected candidates.",
        },
        {
          title: "Design the API with its users",
          body: "I shaped the assessment API around triggering assessments, retrieving results and webhooks, built the first endpoints, and iterated on them with two customer design partners.",
        },
      ],
    },
  },
  {
    slug: "orderflow",
    title: "Orderflow",
    org: "Independent build",
    role: "Founder-engineer",
    period: "Apr 2026 - Present",
    summary:
      "Conversational commerce on WhatsApp, with live payments, settlement and a hardware fleet. I am the sole engineer, on Kotlin and Spring Boot, and it went from first commit to daily production traffic in under five months.",
    url: "https://app.tryorderflow.com",
    metrics: [
      { value: "3", label: "Business verticals in production" },
      { value: "2", label: "Payment providers integrated" },
      { value: "<5 mo", label: "First commit to production traffic" },
      { value: "1", label: "Engineer, end to end" },
    ],
    problem: [
      "Several businesses on one engine: food ordering and table booking, event ticketing, prepaid electricity and vehicle paper renewal, all sold and paid for inside WhatsApp, with real money moving every day. The hard part of a system like that is not taking a payment. It is knowing, at every moment, what state the money is in.",
    ],
    built: [
      "A commerce platform on the Meta Cloud API and WhatsApp Flows, which I build and run as the sole engineer. Food and retail ordering with catalogues synced to Meta, in-chat checkout, loyalty tiers and a tax engine. Event ticketing with pass images and QR check-in at the door on hardware scanners, using signed, audited codes. Prepaid electricity vending and vehicle paper renewal with NIN and BVN identity verification.",
      "Payments run through Rubies and Squad behind one provider interface, with dedicated virtual accounts and instant bank-transfer reconciliation. Settlement is calculated from ledger entries, grouped by day cycle, with audit trails and a capped processing fee, and a payout status checker never marks an unknown payout as failed.",
      "Receipt printers and QR scanners run over MQTT with HTTP fallback, station-based routing and stale-job resweeps. Merchants work in a Next.js dashboard with a 12-step guided onboarding, role-based access that fails closed on both front end and back end, and TOTP challenges for admins.",
    ],
    stack: [
      "Kotlin",
      "Spring Boot",
      "Next.js",
      "Meta Cloud API",
      "WhatsApp Flows",
      "MQTT",
      "Rubies",
      "Squad",
    ],
    challenge: {
      kind: "bug",
      title: "One word in a webhook",
      paragraphs: [
        "A payment Rubies had confirmed did not register as successful. The cause was a single word: one side of the integration said “SUCCESS” and the other said “Successful”.",
        "I fixed the match, then added HMAC signature verification, so a webhook only changes an order when its signature shows it came from Rubies.",
      ],
    },
    result: [
      "Three verticals in production, built by one engineer from first commit to daily production traffic in under five months. Real money moves through Rubies and Squad every day, every payout can be traced to the ledger entries behind it, and database migrations ship without downtime.",
    ],
    system: {
      summary:
        "One shared core runs several businesses on WhatsApp, with payments, settlement and hardware as part of the same system.",
      steps: [
        {
          name: "Customer on WhatsApp",
          detail:
            "Orders, tickets, electricity and vehicle paper renewals, through the Meta Cloud API and WhatsApp Flows.",
        },
        {
          name: "Shared core",
          detail:
            "A Kotlin and Spring Boot backend routes each request to its business workflow, with catalogues synced to Meta, loyalty tiers and a tax engine.",
        },
        {
          name: "Payments",
          detail:
            "Rubies and Squad behind one provider interface, with dedicated virtual accounts, instant bank transfer reconciliation and signed webhooks.",
        },
        {
          name: "Ledger and settlement",
          detail:
            "Settlement calculated from ledger entries, grouped by day cycle, with audit trails and a capped processing fee.",
        },
        {
          name: "Fulfilment",
          detail:
            "Receipt printers and QR door scanners over MQTT with HTTP fallback, station-based routing and stale-job resweeps.",
        },
      ],
      foundation:
        "A Next.js merchant dashboard with a 12-step guided onboarding, role-based access shared by front end and back end that fails closed, TOTP challenges for admins, and branches that deploy develop to staging and main to production.",
      decisions: [
        {
          title: "One payment path for every business",
          body: "Providers plug in behind clean interfaces, so food orders, tickets and vending all share one payment layer.",
        },
        {
          title: "Settle from the ledger",
          body: "Payouts are calculated from ledger entries and kept with audit trails, so each one can be traced to the transactions behind it.",
        },
        {
          title: "Never guess the state of money",
          body: "An order stays pending until its payment is reconciled, and the payout status checker never marks an unknown payout as failed. An unknown payout stays open until the provider confirms what happened, because one marked failed by mistake could be paid twice.",
        },
        {
          title: "Fail closed",
          body: "Access control is shared by the dashboard and the API and denies by default. Queries are scoped to the tenant, every webhook carries an HMAC signature that is verified, vending has amount gates, and secrets never appear in API responses.",
        },
      ],
    },
  },
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
    problem: [
      "An onboarding guide needs to connect scattered knowledge into a useful path for a new teammate. Generating a polished document is only part of the task: the workflow should also make it possible to inspect what was found and how the guide took shape.",
    ],
    built: [
      "An agent workflow in three stages. Explorer, Synthesizer and Writer divide discovery, structure and document creation, and each leaves an intermediate artifact (a scratchpad, an outline and the final document), so the process can be inspected before the output is treated as complete.",
      "Retrieval combines BM25 keyword matching with embeddings, and sensitivity filtering controls what material enters the workflow.",
    ],
    challenge: {
      kind: "tradeoff",
      title: "Imported material before live connectors",
      paragraphs: [
        "The workflow runs on imported material and an included synthetic corpus rather than live connectors, so it can be demonstrated without exposing private workplace documents. Direct Slack, Notion and GitHub connectors remain planned work, and this case study does not present them as built.",
      ],
    },
    result: [
      "A working prototype of agent orchestration around a defined job, with the intermediate state that makes a multi-stage workflow easier to understand and debug.",
    ],
  },
  {
    slug: "tellerpoint",
    title: "Tellerpoint",
    org: "Tellerpoint",
    role: "Product Manager",
    period: "May 2024 - Feb 2026",
    summary:
      "Product delivery for UnionDirect, Union Bank of Nigeria's agency banking platform, alongside Tellerpoint's Collections apps for revenue collection and Tellerpoint Mini.",
    metrics: [
      { value: "16", label: "Security findings closed with Union Bank" },
      { value: "2", label: "Products shipped end to end" },
    ],
    problem: [
      "Agency banking lets a bank serve customers through agents, in places its branches do not reach. UnionDirect is Union Bank of Nigeria's agency banking platform, spanning agent mobile apps, a terminal app and an admin dashboard. The work had to meet a bank's security and compliance bar without stalling the roadmap.",
    ],
    builtHeading: "What I delivered",
    built: [
      "I managed product delivery for UnionDirect across its agent mobile apps, terminal app and admin dashboard, without writing the code myself. I also owned the Collections mobile and web apps, which handle revenue collection, and took Tellerpoint Mini from concept to delivery.",
      "I ran the lifecycle through weekly syncs and sprint rituals. Interviews with agents and institutions fed straight into prioritised feature work, and I coordinated PCI DSS attestation documentation and NDPA compliance work alongside delivery.",
    ],
    challenge: {
      kind: "tradeoff",
      title: "Security fixes against a quarterly plan",
      paragraphs: [
        "Sixteen vulnerability findings had to be triaged and closed with Union Bank's information security team, without derailing the delivery planned for the quarter. I partnered with that team to close all sixteen while the quarter's delivery stayed on track.",
      ],
    },
    result: [
      "All sixteen findings were closed with quarterly delivery on track. Collections shipped as both mobile and web apps, Tellerpoint Mini went from concept to delivery, and the interview-driven roadmap measurably improved feature adoption across the agent network.",
    ],
  },
];

// Mirrors the CV's technical and product skills groups.
export const skills = {
  Development: [
    "TypeScript",
    "React and Next.js",
    "Node.js",
    "Kotlin and Spring Boot",
    "Python",
    "SQL",
  ],
  "Data and integrations": [
    "PostgreSQL",
    "Supabase",
    "MySQL",
    "REST APIs and webhooks",
    "MQTT",
  ],
  "Applied AI": [
    "Retrieval-augmented generation",
    "Vector databases",
    "AI grading",
    "Human review",
    "Claude Code, Codex and Cursor",
  ],
  "Product delivery": [
    "Customer discovery",
    "API design",
    "Enterprise implementation",
    "Accessibility",
    "Linear, Figma and Postman",
  ],
};

// Recommendations, quoted with permission. The About section that shows
// them stays hidden while this is empty.
export const testimonials: { quote: string; name: string; role: string }[] = [];

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
  "My week splits between product work and building. I run sprints in Linear, conduct user research, and keep stakeholders aligned on what ships next. Then I build it myself, with TypeScript and Next.js on the front end and Kotlin, Node.js or Python behind it, working alongside AI tools like Claude Code, Cursor, Codex, and Gemini. I'm the engineer who can sit with users, hold the room with execs, and ship the product end to end.";

export const openTo = [
  "Full-time AI Product Engineer roles",
  "Freelance projects",
  "Consulting & fractional PM engagements",
  "Speaking & mentoring",
];
