"use client";
import { useState } from "react";
import { ArrowRight } from "@/components/icons";
const stages = [
  {
    name: "Explorer",
    artifact: "Scratchpad",
    title: "Find what the guide needs.",
    description:
      "The Explorer works through the imported material. The scratchpad keeps useful facts and unresolved questions visible before the guide is written.",
    lines: [
      "Product handbook: the fictional Atlas team owns the customer workspace.",
      "Release guide: every change needs a reviewer and a rollback note.",
      "Support notes: ask in the team channel before escalating an unfamiliar issue.",
      "Open question: who approves production access? The sources do not say.",
    ],
    decision:
      "Keep the missing answer visible. Don’t turn an information gap into a confident instruction.",
  },
  {
    name: "Synthesizer",
    artifact: "Outline",
    title: "Turn findings into a path.",
    description:
      "The Synthesizer organizes the findings into a structure the next stage can use. Separating the outline from the final prose makes that structure inspectable.",
    lines: [
      "Welcome: what Atlas owns and who it serves.",
      "Day one: understand the workspace and meet the team.",
      "First contribution: review a small change and write a rollback note.",
      "When you get stuck: use the team channel; confirm the access approver.",
    ],
    decision:
      "Resolve the shape of the document before polishing its language.",
  },
  {
    name: "Writer",
    artifact: "Guide excerpt",
    title: "Write from what is known.",
    description:
      "The Writer produces the guide from the organized material. The resulting document still needs a human reader to check that it is useful, accurate and appropriate to share.",
    lines: [
      "Welcome to Atlas. Your team looks after the customer workspace.",
      "Start by reading the product handbook, then walk through a small change with a teammate.",
      "Before your first release, ask for a reviewer and prepare a rollback note.",
      "Production access: confirm the approver with your team. This is not specified in the supplied material.",
    ],
    decision:
      "A useful guide can acknowledge uncertainty without making the reader start from scratch.",
  },
];
export default function OnboardingWalkthrough() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <section
      className="agent-walkthrough section-shell"
      aria-labelledby="agent-title"
    >
      <div className="section-intro">
        <h2 id="agent-title">
          Open the
          <br />
          intermediate work.
        </h2>
        <p>
          Three stages. Three inspectable artifacts.
          <br />
          <span className="example-note">
            Authored synthetic example · not a recorded agent run
          </span>
        </p>
      </div>
      <div className="agent-stage-buttons" aria-label="Agent stages">
        {stages.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <span>{s.name}</span>
            <small>{s.artifact}</small>
            <ArrowRight size={20} />
          </button>
        ))}
      </div>
      <div className="agent-stage-view" aria-live="polite">
        <div>
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
          <p className="mechanism-decision">{stage.decision}</p>
        </div>
        <article className="source-artifact">
          <header>
            <span>{stage.artifact}</span>
            <span>Atlas / fictional team</span>
          </header>
          <ol>
            {stage.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>
        </article>
      </div>
      <details className="source-details">
        <summary>View the synthetic source material</summary>
        <div>
          <p>
            <strong>Product handbook.</strong> Atlas owns the customer
            workspace. New teammates begin by reading the handbook and meeting
            the team.
          </p>
          <p>
            <strong>Release guide.</strong> Changes require a reviewer and a
            rollback note before release.
          </p>
          <p>
            <strong>Support notes.</strong> Ask in the team channel before
            escalating an unfamiliar issue. No production-access approver is
            named in these example sources.
          </p>
        </div>
      </details>
      <p className="mechanism-footnote">
        This illustration follows the implemented Explorer → Synthesizer →
        Writer structure. Imported material, hybrid retrieval and sensitivity
        filtering are implemented; direct Slack, Notion and GitHub connectors
        remain planned.
      </p>
    </section>
  );
}
