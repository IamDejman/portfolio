import { ImageResponse } from "next/og";

export async function socialImage(title: string, subtitle: string) {
  const text = `${title}${subtitle}Ayodeji Eluwandeayodejieluwande.vercel.app`;
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Unbounded:wght@500&text=${encodeURIComponent(text)}`,
    )
  ).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
  );
  if (!resource) throw new Error("Could not resolve social image font");
  const response = await fetch(resource[1]);
  if (!response.ok) throw new Error("Could not load social image font");
  const data = await response.arrayBuffer();
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#101211",
        color: "#f2f3ea",
        padding: "58px 65px",
        fontFamily: "Unbounded",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", fontSize: 22 }}>Ayodeji Eluwande</div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: 70,
          top: 75,
          width: 250,
          height: 390,
          border: "4px solid #def749",
          borderRadius: "50%",
          transform: "rotate(28deg)",
          opacity: 0.7,
        }}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: 75,
          top: 110,
          width: 230,
          height: 350,
          border: "15px solid #3853ff",
          borderRadius: "50%",
          transform: "rotate(-35deg)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 890 }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 35 ? 65 : 80,
            lineHeight: 1.12,
            letterSpacing: "-.03em",
            color: "#def749",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 23,
            lineHeight: 1.5,
            marginTop: 25,
            maxWidth: 780,
            color: "#c3c8bd",
          }}
        >
          {subtitle}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 15, color: "#a3ab9d" }}>
        ayodejieluwande.vercel.app
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Unbounded", data, style: "normal", weight: 500 }],
    },
  );
}
