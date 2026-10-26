import { socialImage } from "@/lib/social-image";
import { notes } from "@/data/notes";
export const alt = "A note by Ayodeji Eluwande";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  return socialImage(note?.title ?? "Notes from the build", "A note by Ayodeji Eluwande");
}
