"use client";
import { track } from "@vercel/analytics";
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import Split from "@/components/motion/Split";
import { motionOn } from "@/components/motion/state";
import {
  graderCriteria,
  graderLimits,
  graderQuestion,
  graderSamples,
  type GradeResult,
} from "@/data/grader";

type Run =
  | { status: "idle" }
  | { status: "grading" }
  | { status: "done"; result: GradeResult }
  | { status: "error"; message: string };

const unreachable = "The grader could not be reached. Try again in a moment.";

/* A real grading run beside the illustrative walkthrough: an answer goes to
   /api/grade and comes back scored per criterion, with the quote behind each
   score. The section appears only once the API says it can grade, and a
   visitor can override any score, as a reviewer would. */
export default function LiveGrader() {
  const [available, setAvailable] = useState(false);
  const [answer, setAnswer] = useState("");
  const [run, setRun] = useState<Run>({ status: "idle" });
  const [overrides, setOverrides] = useState<Record<string, number>>({});
  const [attempt, setAttempt] = useState(0);
  const request = useRef<AbortController | null>(null);
  const outcome = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/grade", { cache: "no-store", signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => setAvailable(data?.available === true))
      .catch(() => {});
    return () => {
      controller.abort();
      request.current?.abort();
    };
  }, []);

  // The section renders after the page's reveals were set up; ask for its
  // own to be armed before it paints.
  useLayoutEffect(() => {
    if (available) document.dispatchEvent(new Event("motion:content"));
  }, [available]);

  useEffect(() => {
    if (run.status !== "done") return;
    const box = outcome.current?.getBoundingClientRect();
    if (box && box.top > innerHeight - 120) {
      outcome.current?.scrollIntoView({ behavior: motionOn() ? "smooth" : "auto", block: "start" });
    }
  }, [run]);

  if (!available) return null;

  const grade = async (event: FormEvent) => {
    event.preventDefault();
    const text = answer.trim();
    if (text.length < graderLimits.min) {
      setRun({ status: "error", message: "Write at least a couple of sentences so there is something to grade." });
      return;
    }
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    setRun({ status: "grading" });
    setOverrides({});
    const used = graderSamples.find((sample) => sample.text === text)?.label ?? "Own answer";
    try {
      const response = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: text }),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.criteria) {
        setRun({ status: "error", message: data?.error ?? unreachable });
        track("grader", { outcome: "error", answer: used });
        return;
      }
      setRun({ status: "done", result: data });
      setAttempt((n) => n + 1);
      track("grader", { outcome: data.needsReview ? "flagged" : "graded", answer: used });
    } catch (error) {
      if ((error as Error).name === "AbortError") return;
      setRun({ status: "error", message: unreachable });
    }
  };

  const grading = run.status === "grading";
  const result = run.status === "done" ? run.result : null;
  const scoreOf = (c: GradeResult["criteria"][number]) => overrides[c.id] ?? c.score;
  const changed = result?.criteria.some((c) => scoreOf(c) !== c.score);

  return (
    <section className="live-grader" aria-labelledby="grader-title">
      <div className="section-shell">
        <div className="section-intro">
          <Split id="grader-title">
            Grade an
            <br />
            answer, live.
          </Split>
          <p data-reveal="rise">
            The walkthrough above is a model. This is a real grading run:
            Claude scores your answer against the rubric and quotes the words
            behind each score, so you can check its judgment.
            <span>Live demo · question and rubric written for this site · nothing is stored</span>
          </p>
        </div>

        <div className="grader-body">
          <div className="grader-brief" data-reveal="rise rule">
            <span className="grader-label">Question</span>
            <p className="grader-question">{graderQuestion}</p>
            <span className="grader-label">Graded on</span>
            <ol className="grader-criteria-list">
              {graderCriteria.map((c) => (
                <li key={c.id}>
                  <span>
                    <strong>{c.name}.</strong> {c.look}
                  </span>
                </li>
              ))}
            </ol>
            <details className="grader-rubric">
              <summary>What each score means</summary>
              <dl>
                {graderCriteria.map((c) => (
                  <div key={c.id}>
                    <dt>{c.name}</dt>
                    <dd>
                      <ol start={0}>
                        {c.levels.map((level) => (
                          <li key={level}>{level}</li>
                        ))}
                      </ol>
                    </dd>
                  </div>
                ))}
              </dl>
            </details>
          </div>

          <form className="grader-form" onSubmit={grade} data-reveal="rise">
            <div className="grader-field">
              <label htmlFor={`${id}-answer`}>Your answer</label>
              <span aria-hidden="true">
                {answer.length} / {graderLimits.max}
              </span>
            </div>
            <textarea
              id={`${id}-answer`}
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              maxLength={graderLimits.max}
              rows={8}
              placeholder="How would you find out why retention fell?"
              aria-describedby={`${id}-note`}
            />
            <div className="grader-samples" role="group" aria-label="Fill in an example answer">
              {graderSamples.map((sample) => (
                <button
                  key={sample.label}
                  type="button"
                  onClick={() => setAnswer(sample.text)}
                >
                  {sample.label}
                </button>
              ))}
            </div>
            <div className="grader-submit">
              <button type="submit" className="btn btn-primary" disabled={grading}>
                {grading ? "Grading…" : "Grade the answer"}
                <ArrowRight size={17} />
              </button>
              <p id={`${id}-note`}>
                Answers go to Anthropic’s API to be graded and are not stored
                here. Please leave out personal details.{" "}
                <Link href="/privacy">Privacy</Link>
              </p>
            </div>
            {grading && <span className="grader-progress" aria-hidden="true" />}
          </form>
        </div>

        <div className="grader-result" aria-live="polite" aria-busy={grading}>
          {grading && <p className="grader-status">Grading against three criteria…</p>}
          {run.status === "error" && <p className="grader-error">{run.message}</p>}
          {result && (
            <div className="grader-outcome" key={attempt} ref={outcome}>
              <div className="grader-summary">
                <p className="grader-total">
                  <strong>{result.criteria.reduce((sum, c) => sum + scoreOf(c), 0)}</strong>
                  <span>
                    out of {result.max}
                    {changed && " · changed by you"}
                  </span>
                </p>
                <dl>
                  <div>
                    <dt>Confidence</dt>
                    <dd data-level={result.confidence}>{result.confidence}</dd>
                  </div>
                  <div>
                    <dt>Review</dt>
                    <dd>{result.needsReview ? "Flagged for a person" : "Not needed"}</dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{result.seconds.toFixed(1)} s</dd>
                  </div>
                </dl>
              </div>
              {result.needsReview && (
                <div className="grader-flag">
                  <strong>Flagged for review.</strong>
                  <ul>
                    {result.reviewReasons.map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                </div>
              )}
              <ol className="grader-criteria">
                {result.criteria.map((c, i) => {
                  const score = scoreOf(c);
                  return (
                    <li key={c.id} style={{ "--i": i } as CSSProperties}>
                      <h3>{c.name}</h3>
                      <fieldset className="grader-score">
                        <legend className="sr-only">{c.name} score</legend>
                        {[0, 1, 2, 3].map((n) => (
                          <label key={n} data-filled={(n > 0 && n <= score) || undefined}>
                            <input
                              type="radio"
                              name={`${id}-${c.id}`}
                              value={n}
                              checked={score === n}
                              onChange={() => setOverrides((all) => ({ ...all, [c.id]: n }))}
                            />
                            <span>{n}</span>
                          </label>
                        ))}
                      </fieldset>
                      {c.evidence ? (
                        <blockquote data-found={c.evidenceFound || undefined}>
                          <p>{c.evidence}</p>
                          {!c.evidenceFound && <span>Not found in the answer</span>}
                        </blockquote>
                      ) : (
                        <p className="grader-no-evidence">Nothing in the answer addresses this.</p>
                      )}
                      <p className="grader-explanation">{c.explanation}</p>
                      {score !== c.score && (
                        <button
                          type="button"
                          onClick={() =>
                            setOverrides((all) => {
                              const next = { ...all };
                              delete next[c.id];
                              return next;
                            })
                          }
                        >
                          Restore the grader’s {c.score}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ol>
              <p className="grader-overall">
                <strong>Summary.</strong> {result.summary}
              </p>
              <p className="grader-override">
                Disagree with a score? Choose another one. A reviewer’s
                override is one click, and yours stays on this page.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
