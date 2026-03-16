import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { DISPOSABLE_DOMAINS } from "@/lib/disposable-domains";

const FORMAT_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 20;

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

async function appendToSheet(row: string[], retries = 2): Promise<void> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !key || !sheetId) {
    throw new Error("Missing Google Sheets credentials in environment");
  }

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: "Sheet1!A:G",
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [row] },
      });
      return;
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, quiz, score, archetype, dimensions } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const trimmed = email.trim().toLowerCase();

    if (!FORMAT_RE.test(trimmed)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const domain = trimmed.split("@")[1];
    if (DISPOSABLE_DOMAINS.has(domain)) {
      return NextResponse.json(
        { error: "Please use a non-disposable email address" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const ua = request.headers.get("user-agent") ?? "";

    const row = [
      timestamp,
      trimmed,
      String(quiz ?? ""),
      String(score ?? ""),
      String(archetype ?? ""),
      String(dimensions ?? ""),
      ua,
    ];

    const hasGoogleSheetsConfig =
      Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) &&
      Boolean(process.env.GOOGLE_PRIVATE_KEY) &&
      Boolean(process.env.GOOGLE_SHEET_ID);

    if (!hasGoogleSheetsConfig && process.env.NODE_ENV !== "production") {
      console.warn("capture-email: missing Google Sheets credentials, using local dev fallback");
      return NextResponse.json({ ok: true, devFallback: true });
    }

    await appendToSheet(row);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("capture-email error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
