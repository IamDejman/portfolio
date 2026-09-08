import { socialImage } from "@/lib/social-image";
export const alt =
  "Ayodeji Eluwande — Ideas are only the beginning. AI product manager and builder in Berlin.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  return socialImage(
    "Ideas are only the beginning.",
    "AI product manager & builder. Berlin, Germany.",
  );
}
