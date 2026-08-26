import { ImageResponse } from "next/og";
import { caseStudies, siteConfig } from "@/data/content";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

async function loadInstrumentSerif(text: string) {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Instrument+Serif&text=${encodeURIComponent(text)}`
    )
  ).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );
  if (!resource) throw new Error("Failed to resolve font URL");
  const response = await fetch(resource[1]);
  if (!response.ok) throw new Error("Failed to load font data");
  return response.arrayBuffer();
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  const title = cs?.title ?? "Case study";
  const metric = cs?.metrics[0];
  const text = `Case study ${title} ${metric ? metric.value + " " + metric.label : ""} ${siteConfig.fullName} ${siteConfig.url.replace("https://", "")}0123456789#%+·`;
  const fontData = await loadInstrumentSerif(text);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAFAF8",
          color: "#1A1A18",
          padding: "72px 80px",
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#17604A" }}>
          Case study
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, letterSpacing: "-0.02em" }}>
            {title}
          </div>
          {metric && (
            <div
              style={{
                display: "flex",
                fontSize: 40,
                color: "#6B6B6B",
                marginTop: 16,
              }}
            >
              {metric.value} · {metric.label}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #E8E8E4",
            paddingTop: 28,
            fontSize: 28,
            color: "#6B6B6B",
          }}
        >
          <div style={{ display: "flex" }}>{siteConfig.fullName}</div>
          <div style={{ display: "flex" }}>
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: fontData, style: "normal", weight: 400 },
      ],
    }
  );
}
