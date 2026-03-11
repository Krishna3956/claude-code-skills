"use client";

import { useState } from "react";
import { validateEmail } from "@/lib/validate-email";
import { track } from "@vercel/analytics";

interface PausedChallengeCardProps {
  toolName: string;
  slug: string;
  logoFile: string;
  onSubmitted?: () => void;
}

export default function PausedChallengeCard({
  toolName,
  slug,
  logoFile,
  onSubmitted,
}: PausedChallengeCardProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const source = `paused-${slug}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const result = validateEmail(email);
    if (!result.valid) {
      if (result.suggestion) setEmail(result.suggestion);
      setError(result.error ?? "Please enter a valid email");
      return;
    }

    setLoading(true);
    const trimmedEmail = email.trim().toLowerCase();

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "22f20653-5774-4a49-b57f-b713861e9f92",
          from_name: "HWYK Paused Challenge",
          subject: `[Paused Challenge] ${toolName}`,
          email: trimmedEmail,
          source,
        }),
      });

      if (!res.ok) {
        setError("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
      return;
    }

    fetch("/api/early-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmedEmail, source }),
    }).catch(() => {});

    track("paused_challenge_unlock_request", { tool: toolName, slug });
    setSubmitted(true);
    setLoading(false);
    onSubmitted?.();
  };

  return (
    <div
      className="w-full max-w-md rounded-2xl border p-6 shadow-xl sm:p-7"
      style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
    >
      {submitted ? (
        <div className="text-center">
          <div
            className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full"
            style={{ background: "var(--m-accent-light)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--m-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-bold" style={{ color: "var(--m-text)" }}>
            Request received
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>
            We&apos;ll reach out about re-enabling the {toolName} challenge.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/logos/${logoFile}`}
                alt={toolName}
                width={26}
                height={26}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--m-accent)" }}>
                Paused Challenge
              </p>
              <h3 className="text-lg font-bold" style={{ color: "var(--m-text)" }}>
                This challenge is currently paused
              </h3>
            </div>
          </div>

          <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>
            Contact us to re-enable it. Drop your work email and we&apos;ll unlock it for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                className="mb-1.5 block text-xs font-medium"
                style={{ color: "var(--m-text-secondary)" }}
              >
                Work email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="you@company.com"
                className="h-11 w-full rounded-lg border px-3 text-sm outline-none transition-colors focus:ring-2"
                style={{
                  borderColor: error ? "#EF4444" : "var(--m-border)",
                  color: "var(--m-text)",
                  background: "var(--m-bg)",
                  // @ts-expect-error CSS custom property
                  "--tw-ring-color": "var(--m-accent)",
                }}
              />
              {error ? (
                <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>
                  {error}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-lg text-sm font-semibold text-white transition-all hover:opacity-95 disabled:opacity-60"
              style={{ background: "var(--m-accent)" }}
            >
              {loading ? "Submitting..." : "Request Unlock"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
