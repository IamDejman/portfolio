import type { CSSProperties } from "react";
import Split from "@/components/motion/Split";
import type { System } from "@/data/content";

/* The engineering view of a case study: the path a request takes through
   the system, what sits underneath it and the decisions that shaped it.
   Built from text, not an image, so it reads in order and reflows; the rail
   draws and the steps arrive in sequence as it scrolls into view. */
export default function SystemMap({ system }: { system: System }) {
  return (
    <section className="system-map" aria-labelledby="system-title">
      <div className="section-shell">
        <div className="section-intro">
          <Split id="system-title">
            Under
            <br />
            the hood.
          </Split>
          <p data-reveal="rise">{system.summary}</p>
        </div>
        <ol
          className="system-track"
          data-reveal="flow"
          style={{ "--steps": system.steps.length } as CSSProperties}
        >
          {system.steps.map((step, i) => (
            <li key={step.name} style={{ "--step": i } as CSSProperties}>
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.name}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
        <p className="system-foundation" data-reveal="rise rule">
          <strong>Underneath.</strong> {system.foundation}
        </p>
        <h3 className="system-decisions-title" data-reveal="rise">
          Decisions that shaped it
        </h3>
        <div className="system-decisions">
          {system.decisions.map((decision) => (
            <article key={decision.title} data-reveal="rise rule">
              <h4>{decision.title}</h4>
              <p>{decision.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
