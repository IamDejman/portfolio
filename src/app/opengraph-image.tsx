import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/content";

export const alt = "Ayodeji Eluwande, AI Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TEXT =
  "AEAyodeji Eluwande I write the PRD. I ship the code. AI Product Manager · Berlin, Germany ayodejieluwande.vercel.app";

async function loadInstrumentSerif() {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Instrument+Serif&text=${encodeURIComponent(TEXT)}`
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

export default async function Image() {
  const fontData = await loadInstrumentSerif();

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
        <div style={{ display: "flex", fontSize: 64, letterSpacing: "-0.1em" }}>
          AE
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, letterSpacing: "-0.02em" }}>
            Ayodeji Eluwande
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              color: "#6B6B6B",
              marginTop: 16,
            }}
          >
            I write the PRD. I ship the code.
          </div>
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
          <div style={{ display: "flex" }}>
            AI Product Manager · Berlin, Germany
          </div>
          <div style={{ display: "flex" }}>
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
