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
          from_name: "HWYK Early Access",
          subject: `[Early Access] ${source}`,
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

    track("early_access_signup", { source });
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <section id={id} className="relative py-16 sm:py-20 md:py-32" style={{ background: "linear-gradient(180deg, #F0EEFF 0%, #FFFFFF 100%)" }}>
        <div className="mx-auto max-w-[600px] px-4 text-center sm:px-6">
          <div
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
            style={{ background: "var(--m-accent-light)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--m-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2
            className="mb-2 text-2xl font-bold md:text-3xl"
            style={{ color: "var(--m-text)" }}
          >
            You&apos;re in.
          </h2>
          <p className="text-base" style={{ color: "var(--m-text-secondary)" }}>
            We&apos;ll reach out within 24 hours with next steps. Check your inbox.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="relative overflow-hidden py-16 sm:py-20 md:py-32"
      style={{ background: "linear-gradient(180deg, #F0EEFF 0%, #FFFFFF 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#635BFF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.03,
        }}
      />
      <div className="relative mx-auto max-w-[600px] px-4 text-center sm:px-6">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--m-accent)" }}
        >
          Early access
        </p>
        <h2
          className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl"
          style={{ color: "var(--m-text)" }}
        >
          Apply for Early Access
        </h2>
        <p
          className="mb-8 text-base leading-relaxed"
          style={{ color: "var(--m-text-secondary)" }}
        >
          We&apos;re opening up early access to a small group of teams.
          Drop your email and we&apos;ll reach out when your spot is ready.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <div className="flex-1">
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className="h-12 w-full rounded-lg border px-4 text-sm shadow-sm outline-none transition-colors focus:ring-2 sm:h-14"
              style={{
                borderColor: error ? "#EF4444" : "var(--m-border)",
                color: "var(--m-text)",
                background: "var(--m-bg)",
                // @ts-expect-error CSS custom property
                "--tw-ring-color": "var(--m-accent)",
              }}
            />
            {error && (
              <p className="mt-1 text-left text-xs" style={{ color: "#EF4444" }}>
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="h-12 shrink-0 rounded-lg px-6 text-sm font-semibold shadow-md transition-all hover:scale-[1.02] disabled:opacity-60 sm:h-14 sm:px-8"
            style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
          >
            {loading ? "Submitting..." : "Get Access"}
          </button>
        </form>

        <p
          className="mt-4 text-xs"
          style={{ color: "var(--m-text-tertiary)" }}
        >
          No spam. We&apos;ll only reach out if it&apos;s a fit.
        </p>
      </div>
    </section>
  );
}
