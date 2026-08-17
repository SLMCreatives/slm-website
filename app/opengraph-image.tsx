import { ImageResponse } from "next/og";

export const alt = "SLM Creatives — Honest digital marketing for founders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141210",
          color: "#faf7f2",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700 }}>
          SLM<span style={{ color: "#f4622e" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 20, fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
            <span>We create</span>
            <span style={{ color: "#f4622e" }}>stories</span>
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
            for brands.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#b9b2a8", maxWidth: 820 }}>
            Honest, simple, effective digital marketing for founders and family
            businesses in Malaysia.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#b9b2a8" }}>
          Brand · Marketing Technology · Social
        </div>
      </div>
    ),
    size,
  );
}
