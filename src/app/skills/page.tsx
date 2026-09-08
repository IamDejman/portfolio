import type { Metadata } from "next";
import Link from "next/link";
import { skills, toolGroups, howIWork } from "@/data/content";
import { ArrowRight } from "@/components/icons";
export const metadata: Metadata = {
  title: "Skills",
  description:
    "Product judgment, agent workflows and engineering practice, connected to real work.",
};
const evidence = [
  {
    title: "Turn ambiguity into a product.",
    description:
      "Research, prioritisation and delivery across the people who need to make a product work.",
    link: "/work/tellerpoint",
    name: "Tellerpoint",
  },
  {
    title: "Design the workflow around the AI.",
    description:
      "Retrieval, intermediate artifacts and reviewable outputs that make a multi-stage process easier to inspect.",
    link: "/work/onboarding-engine",
    name: "Onboarding Engine",
  },
  {
    title: "Build beyond the happy path.",
    description:
      "Payment integrations, recovery and operational workflows that keep the product useful after launch.",
    link: "/work/orderflow",
    name: "Orderflow",
  },
];
export default function SkillsPage() {
  return (
    <div>
      <header className="route-heading section-shell">
        <h1>
          Judgment.
          <br />
          Then <em>execution.</em>
        </h1>
        <p>
          I connect product discovery, technical implementation and the
          operational work around them. Each capability is more useful when it
          has somewhere real to show up.
        </p>
      </header>
      <section
        className="capability-evidence section-shell"
        aria-label="Capabilities in practice"
      >
        {evidence.map((e) => (
          <article key={e.title}>
            <h2>{e.title}</h2>
            <div>
              <p>{e.description}</p>
              <Link href={e.link}>
                See it in {e.name}
                <ArrowRight size={18} />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="capability-detail section-shell">
        <h2>The working toolkit.</h2>
        <div>
          {Object.entries(skills).map(([category, items]) => (
            <section key={category}>
              <h3>{category}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
      <section className="working-method section-shell">
        <h2>
          From the conversation
          <br />
          to the commit.
        </h2>
        <p>{howIWork}</p>
        <div className="tool-groups">
          {toolGroups.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.tools.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
