// Short technical notes. Each one restates decisions and outcomes already
// established in the case studies and CV, with the reasoning behind them.
export type Note = {
  slug: string;
  title: string;
  summary: string;
  published: string;
  related: { label: string; href: string };
  sections: { heading?: string; paragraphs: string[] }[];
};

export const notes: Note[] = [
  {
    slug: "letting-ai-grade-carefully",
    title: "Letting AI grade, carefully",
    summary:
      "How AI grading at Skilladder earned its place. Rubrics first, two weeks in shadow, confidence scores and a one-click override.",
    published: "2026-10-26",
    related: { label: "Skilladder case study", href: "/work/skilladder" },
    sections: [
      {
        paragraphs: [
          "Skilladder runs skills assessments for hiring across Africa, and grading open-ended answers used to take days. A model can produce a score quickly. The harder question was whether employers, candidates and our own team could trust that score enough to act on it.",
        ],
      },
      {
        heading: "Start with the rubric",
        paragraphs: [
          "An answer only makes sense against the question, the rubric and the material it refers to. So the grader never judges an answer on its own. It receives the question, the candidate's answer, the rubric and source material retrieved for that question, and it returns a rubric-linked score with a rationale a person can check against the answer.",
          "Separating the criteria from the model's general impression is most of the work. A rationale that cites the answer is something a reviewer can verify. A bare number is not.",
        ],
      },
      {
        heading: "Two weeks in shadow",
        paragraphs: [
          "Before AI grading counted, it ran in shadow for two weeks, grading alongside the existing process so its results could be compared before anything reached a candidate or an employer.",
          "Shadow testing is slower than switching a model on. It also turns trust into something you can look at, instead of something you argue about.",
        ],
      },
      {
        heading: "Confidence, and a way back",
        paragraphs: [
          "Every result carries a confidence score, and a reviewer can override any grade with one click. The override matters as much as the model. When a reviewer disagrees, correcting the result is quick, so people stay in the decision instead of working around it.",
          "Together, those choices took grading turnaround from days to hours.",
        ],
      },
      {
        heading: "Evaluation keeps going",
        paragraphs: [
          "A small evaluation baseline is a starting point, not proof of universal accuracy. Rubrics change, questions change and candidates answer in ways nobody planned for, so evaluation stays part of the product work instead of a box ticked at launch.",
          "If I had to keep one rule from this, it would be to build the path back to a person before you need it.",
        ],
      },
    ],
  },
  {
    slug: "pending-is-not-paid",
    title: "Pending is not paid",
    summary:
      "Building Orderflow's payment layer. One interface for every provider, settlement from the ledger and a hard line between pending and paid.",
    published: "2026-10-26",
    related: { label: "Orderflow case study", href: "/work/orderflow" },
    sections: [
      {
        paragraphs: [
          "Orderflow runs food orders, event tickets and utility payments through one shared engine on WhatsApp, and real money moves through it every day. The difficult part of the payment layer was not taking a payment. It was knowing, at every moment, what state the money was actually in.",
        ],
      },
      {
        heading: "One interface, several providers",
        paragraphs: [
          "Payment providers plug in behind clean interfaces. Rubies and Squad sit behind the same contract, with dedicated virtual accounts and instant bank transfer reconciliation, so food orders, tickets and vending all share one payment path.",
        ],
      },
      {
        heading: "Pending is not paid",
        paragraphs: [
          "A missing provider confirmation is not a completed transaction. Until a payment is confirmed and reconciled, the order stays pending and nothing is fulfilled. A ticket is not issued and electricity is not vended on the strength of a payment screen.",
          "The merchant needs an order they can rely on, not just a successful payment screen.",
        ],
      },
      {
        heading: "Settle from the ledger",
        paragraphs: [
          "Settlement is calculated from ledger entries, grouped by day cycle, with audit trails and a capped processing fee. When a merchant asks why a payout is what it is, the answer is the list of entries behind it.",
        ],
      },
      {
        heading: "Change without stopping",
        paragraphs: [
          "A payment platform does not get a quiet hour for maintenance. Database migrations ship without downtime, the develop branch deploys to staging and main deploys to production, and every change is verified before it moves.",
          "Most of the work in a payment system is deciding what you are allowed to believe. The rest follows from that.",
        ],
      },
    ],
  },
  {
    slug: "reliability-nobody-asks-for",
    title: "The reliability work nobody asks for",
    summary:
      "Keeping Skilladder dependable for a cohort of more than 85,000 candidates. Durable queues, monitoring across 128 services and a careful move behind Cloudflare.",
    published: "2026-10-26",
    related: { label: "Skilladder case study", href: "/work/skilladder" },
    sections: [
      {
        paragraphs: [
          "When Skilladder's assessment platform took on a national talent programme, with a cohort of more than 85,000 candidates, the work that mattered most was the work nobody asks for in a demo.",
        ],
      },
      {
        heading: "Queues, not hope",
        paragraphs: [
          "Results and notifications used to go out email by email, and that was fragile. I replaced it with durable, database-backed queues and workers, so delivery no longer depends on a single send succeeding.",
        ],
      },
      {
        heading: "Every failure in one place",
        paragraphs: [
          "I wrapped all 128 backend services in an in-house monitoring stack with automatic error classification and an admin triage dashboard. Classifying errors means a spike arrives as one problem with a name, not hundreds of log lines.",
        ],
      },
      {
        heading: "Moving without breaking delivery",
        paragraphs: [
          "Moving the platform behind Cloudflare had to happen without disrupting email deliverability. A change like that, done carelessly, can push results into spam folders just when candidates are waiting for them.",
        ],
      },
      {
        heading: "Fairness is reliability too",
        paragraphs: [
          "A platform is not dependable if it fails particular candidates. A mobile fix restored fair retakes for 1,300+ affected candidates, read-aloud assessments use Nigerian accent voices, and extended time accommodations are enforced on the server so they hold on any device.",
          "None of this shows up in a screenshot. All of it shows up when a national cohort relies on the platform.",
        ],
      },
    ],
  },
];

export const noteDate = (note: Note) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(note.published));

export const readingMinutes = (note: Note) => {
  const words = note.sections
    .flatMap((section) => [section.heading ?? "", ...section.paragraphs])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
};
