import { track as vercelTrack } from "@vercel/analytics";

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsProps = Record<string, AnalyticsValue>;

const MAX_NAME_LENGTH = 40;
const MAX_VALUE_LENGTH = 100;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function normalizeName(input: string, fallback: string): string {
  const cleaned = input
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  const base = cleaned || fallback;
  const startsWithLetter = /^[a-z]/.test(base);
  const withPrefix = startsWithLetter ? base : `event_${base}`;
  return withPrefix.slice(0, MAX_NAME_LENGTH);
}

function normalizeParams(props: AnalyticsProps): Record<string, string | number | boolean> {
  const normalized: Record<string, string | number | boolean> = {};

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null) continue;
    const normalizedKey = normalizeName(key, "param");
    normalized[normalizedKey] =
      typeof value === "string" ? value.slice(0, MAX_VALUE_LENGTH) : value;
  }

  return normalized;
}

export function track(eventName: string, props: AnalyticsProps = {}): void {
  try {
    vercelTrack(eventName, props);
  } catch {
    // Non-blocking analytics call.
  }

  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const gaEventName = normalizeName(eventName, "custom_event");
  const gaParams = normalizeParams(props);

  try {
    window.gtag("event", gaEventName, gaParams);
  } catch {
    // Non-blocking analytics call.
  }
}
