"use client";
import ProjectLogo from "@/components/ProjectLogo";

import { useState } from "react";
import Link from "next/link";
import Sculpture from "./Sculpture";
import { ArrowRight } from "@/components/icons";

const worlds = [
  {
    name: "Skilladder",
    idea: "Make ability visible.",
    description:
      "Assessment systems that connect answers, evidence and hiring decisions.",
    href: "/work/skilladder",
    shape: "Assessments",
  },
  {
    name: "Orderflow",
    idea: "One conversation. Many possibilities.",
    description:
      "A shared commerce engine for orders, tickets and everyday services on WhatsApp.",
    href: "/work/orderflow",
    shape: "Commerce",
  },
  {
    name: "Onboarding Engine",
    idea: "Give knowledge somewhere to go.",
    description:
      "Three agent stages turn scattered source material into an inspectable guide.",
    href: "/work/onboarding-engine",
    shape: "Agent workflows",
  },
];

export default function EngineHero() {
  const [active, setActive] = useState(0);
  const world = worlds[active];
  return (
    <section className="engine-hero" aria-labelledby="hero-heading">
      <div className="hero-composition">
        <h1 id="hero-heading">
          Ideas are
          <br />
          only the
          <br />
          <span>beginning.</span>
        </h1>
        <div className="hero-intro">
          <p>
            I’m Ayodeji, an AI product manager and builder in Berlin. I turn
            ambiguous problems into working AI products.
          </p>
          <a href="#selected-work" className="action-link">
            Explore the work <ArrowRight size={21} />
          </a>
        </div>
        <div className="sculpture-stage">
          <div className="sculpture-fallback" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <Sculpture active={active} paused={false} />
          <span className="structure-caption">The possibility engine</span>
        </div>
      </div>
      <div className="world-controls">
        <div className="world-picker" aria-label="Explore a project">
          {worlds.map((item, i) => (
            <button
              type="button"
              key={item.name}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={
                active === i ? "world-choice is-active" : "world-choice"
              }
            >
              {i < 2 ? <ProjectLogo project={i === 0 ? "skilladder" : "orderflow"} /> : <><span className="world-mark" aria-hidden="true" />{item.name}</>}
              <span className="world-kind">{item.shape}</span>
            </button>
          ))}
        </div>
        <div className="world-description" aria-live="polite">
          <p>
            <strong>{world.idea}</strong> {world.description}
          </p>
          <Link href={world.href} aria-label={`Explore ${world.name}`}>
            <ArrowRight size={25} />
          </Link>
        </div>
      </div>
    </section>
  );
}
