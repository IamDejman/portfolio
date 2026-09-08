"use client";
import { useState } from "react";
import { ArrowRight } from "@/components/icons";
const stages = [
  {
    name: "Context",
    title: "Start with the evidence.",
    description:
      "An answer only makes sense against the question, the rubric and the relevant source material. Retrieval brings that context into the assessment workflow.",
    input:
      "A candidate explains how they would investigate a drop in customer retention.",
    output: "Question + submitted answer + rubric + retrieved context",
    decision:
      "Give the grader the criteria it needs before asking it for a judgment.",
  },
  {
    name: "Grading",
    title: "Make the judgment inspectable.",
    description:
      "Rubric-based grading gives the assessment a defined frame. The useful output is a score with supporting reasoning that can be checked against the answer.",
    input:
      "Look for a clear hypothesis, an investigation plan and a way to measure the result.",
    output: "Rubric-linked evaluation and supporting rationale",
    decision:
      "Separate the assessment criteria from the model’s general impression.",
  },
  {
    name: "Review",
    title: "Keep room for a second look.",
    description:
      "Evaluation and review help expose where an automated result needs closer attention. A small evaluation baseline is a starting point, not proof of universal accuracy.",
    input:
      "Does the rationale actually refer to evidence in the candidate’s answer?",
    output: "An inspectable result and a path to review",
    decision:
      "Treat evaluation as continuing product work, not a one-time accuracy claim.",
  },
  {
    name: "Delivery",
    title: "A result needs to arrive.",
    description:
      "The surrounding product matters too: participant flows, reliable delivery and useful reporting turn a grading mechanism into an assessment service.",
    input:
      "An assessment has been completed and its result is ready to be used.",
    output: "A result that fits the employer’s workflow",
    decision:
      "Build the operational path around the AI, including failure and recovery.",
  },
];
export default function AssessmentWalkthrough() {
  const [active, setActive] = useState(0);
  const step = stages[active];
  return (
    <section
      className="assessment-walkthrough"
      aria-labelledby="walkthrough-title"
    >
      <div className="walkthrough-heading">
        <h2 id="walkthrough-title">
          Inside an
          <br />
          assessment.
        </h2>
        <p>
          Explore the mechanism behind Skilladder.
          <br />
          <span>Illustrative walkthrough · synthetic example</span>
        </p>
      </div>
      <div className="stage-selector" aria-label="Assessment stages">
        {stages.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <span>{i + 1}</span>
            {s.name}
            {i < 3 && <ArrowRight size={17} />}
          </button>
        ))}
      </div>
      <div className="stage-content" aria-live="polite">
        <div className="stage-explanation">
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <p className="stage-decision">{step.decision}</p>
        </div>
        <div className="stage-artifact">
          <div className="artifact-input">
            <span>Example input</span>
            <p>{step.input}</p>
          </div>
          <div className="artifact-connector">
            <svg
              width="24"
              height="35"
              viewBox="0 0 24 35"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 0v32m-7-7 7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="artifact-output">
            <span>{step.name} output</span>
            <p>{step.output}</p>
          </div>
        </div>
      </div>
      <div className="walkthrough-bottom">
        <p>
          A model of the workflow, not a live grading run or a candidate record.
        </p>
        <button
          type="button"
          onClick={() => setActive((active + 1) % stages.length)}
        >
          {active === 3 ? "Back to context" : "Next stage"}
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}
