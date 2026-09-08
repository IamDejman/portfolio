import ProjectLogo from "@/components/ProjectLogo";
import Link from "next/link";
import EngineHero from "@/components/engine/EngineHero";
import AssessmentWalkthrough from "@/components/engine/AssessmentWalkthrough";
import { ArrowRight } from "@/components/icons";
import { siteConfig } from "@/data/content";
export default function HomePage() {
  return (
    <div className="possibility-home">
      <EngineHero />
      <section id="selected-work" className="selected-work section-shell">
        <div className="section-intro">
          <h2>
            Less theory.
            <br />
            More <em>working.</em>
          </h2>
          <p className="selected-work-intro">
            <span>Product judgment. Agent workflows. Systems that run.</span>
            <span>Three different problems, taken beyond the idea.</span>
          </p>
        </div>
        <Link
          href="/work/skilladder"
          className="featured-project project-yellow"
        >
          <div className="project-heading">
            <h3><ProjectLogo project="skilladder" dark /></h3>
            <ArrowRight size={38} />
          </div>
          <div className="project-body">
            <p>
              Make skills
              <br />
              visible.
            </p>
            <div className="project-explainer">
              <p>
                From assessment design to rubric-based grading, review and
                delivery. An AI product built around real hiring workflows.
              </p>
              <span>Product leadership & hands-on development</span>
            </div>
          </div>
          <div className="project-foot">
            <span>Assessments / AI / Operations</span>
            <span>Explore the system</span>
          </div>
        </Link>
        <div className="project-pair">
          <Link
            href="/work/orderflow"
            className="featured-project project-blue"
          >
            <div className="project-heading">
              <h3><ProjectLogo project="orderflow" dark={false} /></h3>
              <ArrowRight size={30} />
            </div>
            <div className="branch-art" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p className="project-statement">
              One core.
              <br />
              Many businesses.
            </p>
            <p className="project-summary">
              WhatsApp commerce, payments and recovery, built on a shared
              platform.
            </p>
            <div className="project-foot">
              <span>Commerce infrastructure</span>
              <span>Explore</span>
            </div>
          </Link>
          <Link
            href="/work/onboarding-engine"
            className="featured-project project-white"
          >
            <div className="project-heading">
              <h3>Onboarding Engine</h3>
              <ArrowRight size={30} />
            </div>
            <div className="agent-art" aria-hidden="true">
              <span>Explore</span>
              <span>Synthesize</span>
              <span>Write</span>
            </div>
            <p className="project-statement">
              Scattered knowledge.
              <br />
              Connected.
            </p>
            <p className="project-summary">
              An agent workflow with intermediate artifacts you can inspect.
            </p>
            <div className="project-foot">
              <span>Agent orchestration</span>
              <span>Explore</span>
            </div>
          </Link>
        </div>
      </section>
      <AssessmentWalkthrough />
      <section className="experiments section-shell">
        <div className="section-intro">
          <h2>
            Curiosity has
            <br />
            side effects.
          </h2>
          <p>
            Other worlds I’m building.
            <br />
            Different questions. The same impulse to make.
          </p>
        </div>
        <div className="experiment-list">
          <a
            href="https://footballadder.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Football Ladder</h3>
            <p>A football career, from the boardroom to the world game.</p>
            <span>Early-access site</span>
            <ArrowRight />
          </a>
          <a
            href="https://osundecides.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Osun Decides</h3>
            <p>Source records, validation and public election information.</p>
            <span>Live website</span>
            <ArrowRight />
          </a>
          <a
            href="https://github.com/IamDejman/hotel-california"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Hotel California</h3>
            <p>
              A browser-agent experiment with scoring and replay infrastructure.
            </p>
            <span>Prototype source</span>
            <ArrowRight />
          </a>
          <Link href="/work">
            <h3>The wider collection</h3>
            <p>Client work, product leadership and more experiments.</p>
            <span>Explore all work</span>
            <ArrowRight />
          </Link>
        </div>
      </section>
      <section className="home-close section-shell">
        <p>Have a problem worth building for?</p>
        <a href={`mailto:${siteConfig.email}`}>
          Let’s make
          <br />
          it <em>happen.</em>
          <ArrowRight size={64} />
        </a>
        <div>
          <span>Ayodeji Eluwande · Berlin</span>
          <Link href="/about">
            A little about me <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
