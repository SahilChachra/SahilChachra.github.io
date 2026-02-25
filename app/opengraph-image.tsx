import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Sahil Chachra — Founding AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* URL label */}
        <div
          style={{
            color: "#3f3f46",
            fontSize: 16,
            letterSpacing: 8,
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          sahilchachra.github.io
        </div>

        {/* Name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 80,
            fontWeight: 800,
            letterSpacing: -3,
            textAlign: "center",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Sahil Chachra
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 30,
            fontStyle: "italic",
            textAlign: "center",
            marginBottom: 52,
          }}
        >
          &ldquo;Architecting Intelligence, From the Ground Up.&rdquo;
        </div>

        {/* Role + availability */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              background: "#10b981",
            }}
          />
          <div
            style={{
              color: "#71717a",
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Founding AI Engineer · Available for AI Consulting
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
