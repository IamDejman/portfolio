import type { Metadata } from "next";
import CvPreview from "@/components/CvPreview";
import { ArrowRight } from "@/components/icons";
import { siteConfig } from "@/data/content";
export const metadata: Metadata = {
  title: "CV",
  description:
    "The CV of Ayodeji Eluwande, AI product manager and builder in Berlin. Preview it here or download the PDF.",
};
export default function CvPage() {
  return (
    <div>
      <header className="cv-heading section-shell">
        <h1>
          Curriculum
          <br />
          <em>vitae.</em>
        </h1>
        <div className="cv-actions">
          <a href={siteConfig.cv} download="Ayodeji_Eluwande_CV.pdf">
            Download PDF
            <ArrowRight size={22} />
          </a>
          <a href={siteConfig.cv} target="_blank" rel="noopener noreferrer">
            Open in a new tab
          </a>
        </div>
      </header>
      <section className="cv-body section-shell" aria-label="CV preview">
        <CvPreview src={siteConfig.cv} />
      </section>
    </div>
  );
}
