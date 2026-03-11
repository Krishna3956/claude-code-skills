import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

const QUIZ_COLORS: Record<string, { accent: string; bg: string }> = {
  chatgpt: { accent: "#10A37F", bg: "#F7F7F8" },
  figma: { accent: "#A259FF", bg: "#F5F0FF" },
  cursor: { accent: "#6366F1", bg: "#F0F0FF" },
  notion: { accent: "#000000", bg: "#FFFFFF" },
  "claude-code": { accent: "#D97757", bg: "#FAFAF8" },
  hubspot: { accent: "#FF7A59", bg: "#FFF5F2" },
  windsurf: { accent: "#00C8FF", bg: "#F0FBFF" },
  slack: { accent: "#4A154B", bg: "#F9F5F9" },
  canva: { accent: "#00C4CC", bg: "#F0FDFE" },
  vercel: { accent: "#000000", bg: "#FAFAFA" },
  gemini: { accent: "#4285F4", bg: "#F0F4FF" },
  loom: { accent: "#625DF5", bg: "#F3F2FF" },
  docker: { accent: "#2496ED", bg: "#F0F8FF" },
  perplexity: { accent: "#20808D", bg: "#F0FAFB" },
  airtable: { accent: "#18BFFF", bg: "#F0FAFF" },
  replit: { accent: "#F26207", bg: "#FFF5F0" },
  midjourney: { accent: "#000000", bg: "#FFFFFF" },
  zapier: { accent: "#FF4F00", bg: "#FFF5F0" },
  bolt: { accent: "#6C5CE7", bg: "#F3F0FF" },
  linear: { accent: "#5E6AD2", bg: "#F0F1FF" },
  "github-copilot": { accent: "#000000", bg: "#F6F8FA" },
  obsidian: { accent: "#7C3AED", bg: "#F5F0FF" },
  postman: { accent: "#FF6C37", bg: "#FFF5F0" },
  emergent: { accent: "#2563EB", bg: "#F0F5FF" },
  lovable: { accent: "#E11D48", bg: "#FFF0F3" },
  openclaw: { accent: "#FF173D", bg: "#F7F8FA" },
  rotoris: { accent: "#C9A45D", bg: "#F6F1E8" },
  hevo: { accent: "#2F6BFF", bg: "#F4F8FF" },
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "How Well You Know";
  const tool = searchParams.get("tool") ?? "";
  const slug = searchParams.get("slug") ?? "";
  const type = searchParams.get("type") ?? "quiz";

  const colors = QUIZ_COLORS[slug] ?? { accent: "#635BFF", bg: "#FFFFFF" };

  if (type === "default") {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0A2540 0%, #1a1a4e 50%, #0A2540 100%)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: "#635BFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              hw
            </div>
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.15,
              maxWidth: "900px",
              padding: "0 40px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#8898AA",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            howwellyouknow.com
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: colors.bg,
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Accent bar at top */}
        <div
          style={{
            width: "100%",
            height: "8px",
            background: colors.accent,
          }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
          }}
        >
          {/* Tool name badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
              padding: "10px 24px",
              borderRadius: "100px",
              background: `${colors.accent}15`,
              border: `2px solid ${colors.accent}30`,
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: colors.accent,
              }}
            />
            <span
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: colors.accent,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              {tool} Challenge
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#0A2540",
              textAlign: "center",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginTop: "28px",
              fontSize: "22px",
              color: "#64748B",
            }}
          >
            <span>6 Rounds</span>
            <span style={{ color: "#CBD5E1" }}>|</span>
            <span>15 Questions</span>
            <span style={{ color: "#CBD5E1" }}>|</span>
            <span>~3 Minutes</span>
            <span style={{ color: "#CBD5E1" }}>|</span>
            <span>Free</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 60px",
            borderTop: "1px solid #E2E8F0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "#635BFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "14px",
                fontWeight: 800,
              }}
            >
              hw
            </div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#0A2540",
              }}
            >
              How Well You Know
            </span>
          </div>
          <span
            style={{
              fontSize: "16px",
              color: "#94A3B8",
            }}
          >
            howwellyouknow.com
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
