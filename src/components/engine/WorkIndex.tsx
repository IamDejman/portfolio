import Link from "next/link";
import Image from "next/image";
import { builtProjects } from "@/data/content";
import { ArrowRight } from "@/components/icons";
import Split from "@/components/motion/Split";
// The builds the Work page does not lead with: client sites, independent
// tools and experiments.
const others = builtProjects.filter((p) => !p.featured);
export default function WorkIndex() {
  return (
    <section
      className="work-index section-shell"
      aria-labelledby="index-heading"
    >
      <div className="index-heading">
        <Split id="index-heading">Other builds and experiments.</Split>
      </div>
      <p className="index-note" data-reveal="rise">
        Client sites, independent tools and experiments, some still in
        progress.
      </p>
      <div className="work-index-list">
        {others.map((p) => (
          <article key={p.title} data-reveal="rise rule">
            <div className="index-project-name">
              <h3>{p.title}</h3>
              <span>{p.highlight}</span>
              {p.image && (
                <Image
                  className="index-thumb"
                  src={p.image}
                  alt=""
                  width={480}
                  height={300}
                  sizes="(max-width: 700px) 88vw, 240px"
                />
              )}
            </div>
            <p>{p.description}</p>
            <div className="index-project-tools">
              <span>{p.tech.slice(0, 3).join(" / ")}</span>
              {p.caseStudy ? (
                <Link href={`/work/${p.caseStudy}`}>
                  Case study
                  <ArrowRight size={17} />
                </Link>
              ) : (
                p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="visit-project"
                    data-track-label={p.title}
                    aria-label={`Visit ${p.title}`}
                  >
                    Visit
                    <ArrowRight size={17} />
                  </a>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
