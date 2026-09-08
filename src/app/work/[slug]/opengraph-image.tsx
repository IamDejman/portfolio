import { socialImage } from "@/lib/social-image";
import { caseStudies } from "@/data/content";
export const alt = "A project by Ayodeji Eluwande";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  return socialImage(
    cs?.title ?? "Selected work",
    cs?.role ?? "Product judgment. Agent workflows. Systems that run.",
  );
}
