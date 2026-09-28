import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b1220",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="44" height="44" viewBox="0 0 32 32">
            <rect x="3" y="3" width="6" height="26" rx="1" fill="#ffffff" />
            <rect x="23" y="3" width="6" height="26" rx="1" fill="#ffffff" />
            <path d="M3 3h6l20 21v5h-6L3 8V3z" fill="#2dd4bf" />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 600 }}>{site.shortName}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {site.tagline}
          </div>
          <div style={{ fontSize: 28, color: "#9aa8bd", maxWidth: 900 }}>
            Accounting and fintech systems, AI applications, automation, and
            the backend infrastructure behind them.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
