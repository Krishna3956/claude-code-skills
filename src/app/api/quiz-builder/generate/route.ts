import { NextRequest, NextResponse } from "next/server";
import { generateQuizDraft } from "@/lib/quiz-builder";
import { setGeneratedQuizDraft } from "@/lib/generated-quiz-store";

export const runtime = "nodejs";

const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_WINDOW_MS = 3_600_000;
const RATE_LIMIT = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function normalizeUrl(input: string): string {
  const raw = input.trim();
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  const url = new URL(withScheme);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only http/https URLs are allowed");
  }

  if (["localhost", "127.0.0.1", "0.0.0.0"].includes(url.hostname)) {
    throw new Error("Localhost URLs are not allowed");
  }

  url.hash = "";
  return url.toString();
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many quiz generations. Please try again later." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as { url?: string };
    if (!body.url || typeof body.url !== "string") {
      return NextResponse.json({ error: "Website URL is required" }, { status: 400 });
    }

    const normalizedUrl = normalizeUrl(body.url);
    const startedAt = Date.now();

    const { draft, pagesUsed } = await generateQuizDraft(normalizedUrl);
    setGeneratedQuizDraft(draft);

    return NextResponse.json({
      success: true,
      draft,
      metadata: {
        inputUrl: normalizedUrl,
        pagesUsed,
        elapsedMs: Date.now() - startedAt,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to generate quiz";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
