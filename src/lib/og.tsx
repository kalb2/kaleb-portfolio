import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };

const line = "2px solid #000";

async function markDataUrl() {
  const svg = await readFile(join(process.cwd(), "public", "kj-mark.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}

type OgCardInput = {
  /** Small label in the top bar. */
  label: string;
  /** Headline lines, rendered uppercase with a rule under each line. */
  lines: string[];
  /** Footer strip text. */
  footer: string;
};

/**
 * Branded 1200x630 card in the site style: black on white, bordered
 * 1fr / 3fr / 2fr grid, lined uppercase headline, KJ mark.
 */
export async function ogCard({ label, lines, footer }: OgCardInput) {
  const mark = await markDataUrl();
  const longest = Math.max(...lines.map((text) => text.length));
  const fontSize = longest > 10 ? 64 : 84;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          color: "#000",
          border: line,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 96,
            borderBottom: line,
            padding: "0 32px",
          }}
        >
          <div
            style={{
              fontSize: 56,
              letterSpacing: -2,
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {label}
          </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ display: "flex", width: 200, borderRight: line }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              width: 600,
              borderRight: line,
            }}
          >
            <div style={{ display: "flex", flex: 1, borderBottom: line }} />
            {lines.map((text, index) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  fontSize,
                  lineHeight: 1.15,
                  letterSpacing: -2,
                  textTransform: "uppercase",
                  borderBottom: index < lines.length - 1 ? line : "none",
                  padding: "0 12px",
                }}
              >
                {text}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mark} width={240} height={161} alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: 64,
            borderTop: line,
            padding: "0 32px",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {footer}
        </div>
      </div>
    ),
    ogSize,
  );
}
