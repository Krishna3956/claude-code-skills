import type { Metadata } from "next";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "Built by a developer who was tired of writing docs nobody read.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--mk-border)] bg-white">
        <div className="pointer-events-none absolute inset-0 marketing-grid opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">About</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-tight text-[var(--mk-text)] sm:text-5xl lg:text-6xl">
              Built by a developer who was tired of writing docs nobody read.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--mk-text-soft)]">
              How Well You Know exists because product education usually asks users to do the least engaging thing possible right when understanding matters most. The goal is simple: make product learning short, measurable, and actually worth finishing.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <div className="rounded-[20px] border border-[var(--mk-border)] bg-white p-8 shadow-[0_10px_30px_rgba(21,32,24,0.04)]">
              <p className="marketing-kicker text-xs font-semibold uppercase">Mission</p>
              <h2 className="mt-4 text-3xl text-[var(--mk-text)]">Help product teams teach what matters before users churn.</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-[var(--mk-text-soft)]">
                <p>
                  Most SaaS companies already have the right information. It lives in docs, help centers, release notes, and onboarding decks. The real problem is that users rarely consume that material deeply enough to change their behavior.
                </p>
                <p>
                  How Well You Know turns that content into a short interactive loop. The user gets a challenge worth finishing. The team gets a clearer picture of what their audience actually understands.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="grid gap-5">
              {[
                { value: "110+", label: "challenges built" },
                { value: "5,000+", label: "plays recorded" },
                { value: "50+", label: "companies represented" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-[18px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] px-6 py-7">
                  <p className="text-4xl font-semibold text-[var(--mk-text)]">{metric.value}</p>
                  <p className="mt-3 text-sm text-[var(--mk-text-muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection id="early-access" source="about" />
    </>
  );
}
