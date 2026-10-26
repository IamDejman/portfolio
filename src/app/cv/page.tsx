import type { Metadata } from "next";
import CvPreview from "@/components/CvPreview";
import { ArrowRight } from "@/components/icons";
import { siteConfig } from "@/data/content";
import Split from "@/components/motion/Split";
import { enter } from "@/components/motion/order";
export const metadata: Metadata = {
  title: "CV",
  description:
    "The CV of Ayodeji Eluwande, AI product engineer in Berlin. Preview it here or download the PDF.",
};
export default function CvPage() {
  return (
    <div>
      <header className="cv-heading section-shell">
        <Split as="h1" enter>
          Curriculum
          <br />
          <em>vitae.</em>
        </Split>
        <div className="cv-actions" data-enter style={enter(3)}>
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
