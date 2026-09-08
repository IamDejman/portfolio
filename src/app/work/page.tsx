import ProjectLogo from "@/components/ProjectLogo";
import type { Metadata } from "next";
import Link from "next/link";
import WorkIndex from "@/components/engine/WorkIndex";
import { ArrowRight } from "@/components/icons";
export const metadata: Metadata = {
  title: "Work",
  description:
    "Assessment systems, commerce infrastructure, agent workflows and product leadership. Explore the work of Ayodeji Eluwande.",
};
export default function WorkPage() {
  return (
    <div>
      <header className="route-heading section-shell">
        <h1>
          Ideas,
          <br />
          <em>made real.</em>
        </h1>
        <p>
          Sometimes the work is a product strategy. Sometimes it’s the system
          itself. Here’s what happens when I connect the two.
        </p>
      </header>
      <section
        className="work-leads section-shell"
        aria-label="Featured case studies"
      >
        <Link href="/work/skilladder" className="work-lead lead-assess">
          <div>
            <h2><ProjectLogo project="skilladder" dark /></h2>
            <p>From answers to useful evidence.</p>
          </div>
          <span>
            Assessment systems
            <ArrowRight size={30} />
          </span>
          <div className="lead-mechanism" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </Link>
        <Link href="/work/orderflow" className="work-lead lead-commerce">
          <div>
            <h2><ProjectLogo project="orderflow" dark={false} /></h2>
            <p>One platform. Several business workflows.</p>
          </div>
          <span>
            Commerce infrastructure
            <ArrowRight size={30} />
          </span>
          <div className="lead-mechanism" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </Link>
        <Link href="/work/onboarding-engine" className="work-lead lead-agents">
          <div>
            <h2>Onboarding Engine</h2>
            <p>Explore. Synthesize. Write. Inspect.</p>
          </div>
          <span>
            Agent orchestration
            <ArrowRight size={30} />
          </span>
          <div className="lead-mechanism" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </Link>
      </section>
      <WorkIndex />
    </div>
  );
}
