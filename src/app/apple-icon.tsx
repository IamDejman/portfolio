import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Renders the favicon mark at iOS home-screen size. The background fills the
// SVG's rounded corners because iOS applies its own mask.
export default async function AppleIcon() {
  const svg = await readFile(join(process.cwd(), "src/app/icon.svg"), "utf8");
  const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#101211" }}>
        <img src={src} width={180} height={180} alt="" />
      </div>
    ),
    size,
  );
}
