"use client";

import { useState } from "react";
import { validateEmail } from "@/lib/validate-email";
import { track } from "@/lib/analytics";

export default function CTASection({
  id,
  source,
}: {
  id?: string;
  source: string;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (loading) return;

    const result = validateEmail(email);
    if (!result.valid) {
      if (result.suggestion) setEmail(result.suggestion);
      setError(result.error ?? "Please enter a valid work email.");
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();
    setLoading(true);
    setError("");

    try {
      const external = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "22f20653-5774-4a49-b57f-b713861e9f92",
          from_name: "HWYK Early Access",
          subject: `[Early Access] ${source}`,
          email: trimmedEmail,
          source,
        }),
      });

      if (!external.ok) {
        setError("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
      return;
    }

    fetch("/api/early-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmedEmail, source }),
    }).catch(() => null);

    track("early_access_signup", { source });
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section
      id={id}
      className="relative overflow-hidden border-y border-[var(--mk-border)] bg-[var(--mk-bg-soft)] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 marketing-grid opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(31,143,104,0.10),transparent_42%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-[var(--mk-border)] bg-white p-8 shadow-[0_24px_70px_rgba(21,32,24,0.06)] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="marketing-kicker mb-4 text-xs font-semibold uppercase">Early access</p>
              <h2 className="max-w-2xl text-3xl leading-tight text-[var(--mk-text)] sm:text-4xl lg:text-5xl">
                We are onboarding 10 companies this month.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--mk-text-soft)] sm:text-lg">
                If your users skim the docs, miss features, and show up confused, this is built for you. Join the next batch and we will help launch your first challenges with your team.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  "3-minute challenge format",
                  "Hands-on setup support",
                  "Analytics from your first launch",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] px-4 py-4 text-sm text-[var(--mk-text-soft)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-[var(--mk-border)] bg-[var(--mk-bg-strong)] p-6">
              {submitted ? (
                <div className="flex min-h-[220px] flex-col items-start justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--mk-accent-soft)] text-xl text-[var(--mk-accent)]">
                    ✓
                  </div>
                  <h3 className="mt-5 text-2xl text-[var(--mk-text)]">You&apos;re in.</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--mk-text-soft)]">
                    We&apos;ll reach out shortly with next steps and a recommended rollout path for your team.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">
                    Apply with your work email
                  </p>
                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          if (error) setError("");
                        }}
                        placeholder="you@company.com"
                        className="h-14 w-full rounded-xl border border-[var(--mk-border)] bg-white px-4 text-sm text-[var(--mk-text)] outline-none transition focus:border-[var(--mk-accent)]"
                      />
                      {error ? <p className="mt-2 text-sm text-[var(--mk-danger)]">{error}</p> : null}
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex h-14 w-full items-center justify-center rounded-xl text-sm font-semibold transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 marketing-button-primary"
                    >
                      {loading ? "Submitting..." : "Get Early Access"}
                    </button>
                  </form>
                  <p className="mt-4 text-sm leading-7 text-[var(--mk-text-muted)]">
                    Best fit: B2B developer tools companies with a product-led motion and a clear docs footprint.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
