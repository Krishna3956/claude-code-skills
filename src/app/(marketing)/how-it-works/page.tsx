import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";

export const metadata: Metadata = {
  title: "How It Works",
  description: "See how documentation becomes a 15-question challenge, a shareable scorecard, and a product education analytics loop.",
};

const STEPS = [
  {
    title: "Paste your docs URL",
    description: "Start with a quickstart guide, feature docs, release page, or onboarding playbook.",
  },
  {
    title: "We turn it into a 15-question challenge",
    description: "The challenge blends five question formats so the experience stays short, varied, and useful.",
  },
  {
    title: "Share it where your users already are",
    description: "Use hosted links or embeds for email, docs, Slack, Discord, community posts, and launch pages.",
  },
  {
    title: "Read the scorecards and analytics",
    description: "See which concepts landed, which features were missed, and how different cohorts performed.",
  },
];

const FORMATS = [
  ["Truth or Myth", "Fast true-or-false claims that sharpen product understanding quickly."],
  ["This or That", "Two plausible answers where users have to connect the right use case to the right feature."],
  ["Quick Pick", "Multiple-choice questions for setup details, workflows, or positioning."],
  ["Odd One Out", "Three real concepts and one fake one. Great for feature discovery and vocabulary."],
  ["Speed Round", "Timed recall that tests whether the important details actually stuck."],
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--mk-border)] bg-white">
        <div className="pointer-events-none absolute inset-0 marketing-grid opacity-30" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(110,231,200,0.18),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">How it works</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-tight text-[var(--mk-text)] sm:text-5xl lg:text-6xl">
              From docs URL to finished challenge in a workflow your team can actually launch.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--mk-text-soft)]">
              The product is built to help teams turn product education into something users complete and something operators can measure.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.04}>
              <div className="rounded-[20px] border border-[var(--mk-border)] bg-white p-6 shadow-[0_10px_30px_rgba(21,32,24,0.04)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--mk-accent-soft)] text-sm font-semibold text-[var(--mk-accent)]">
                  0{index + 1}
                </div>
                <h2 className="mt-5 text-2xl text-[var(--mk-text)]">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--mk-text-soft)]">{step.description}</p>
                <div className="mt-6 rounded-[16px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] p-4">
                  <div className="space-y-3">
                    <div className="h-2 w-20 rounded-full bg-[var(--mk-text-muted)]/30" />
                    <div className="h-11 rounded-2xl bg-[var(--mk-bg-strong)]" />
                    <div className="h-11 rounded-2xl bg-[var(--mk-bg-strong)]" />
                    <div className="h-20 rounded-3xl border border-[var(--mk-border)] bg-[var(--mk-bg-card)]" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--mk-border)] bg-[var(--mk-bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <FadeIn>
              <p className="marketing-kicker text-xs font-semibold uppercase">Walkthrough</p>
              <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">See the full product in two minutes.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--mk-text-soft)]">
                The demo walkthrough should show the source docs, challenge generation, distribution, scorecard, and analytics handoff. The section is ready for a real video asset as soon as you have one.
              </p>
              <div className="mt-8">
                <Link href="/play/notion" className="rounded-2xl px-5 py-3 text-sm font-semibold marketing-button-primary">
                  Watch 2 min demo
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="flex min-h-[340px] items-center justify-center rounded-[22px] border border-dashed border-[var(--mk-border-strong)] bg-white">
                <div className="text-center">
                  <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-[var(--mk-accent-soft)] text-2xl text-[var(--mk-accent)]">
                    ▶
                  </div>
                  <p className="mt-5 text-xl text-[var(--mk-text)]">Video placeholder</p>
                  <p className="mt-2 text-sm text-[var(--mk-text-muted)]">Replace with a hosted product walkthrough when ready.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="marketing-kicker text-xs font-semibold uppercase">Challenge formats</p>
          <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">Five formats keep the challenge sharp and varied.</h2>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {FORMATS.map(([title, description], index) => (
            <FadeIn key={title} delay={index * 0.03}>
              <div className="rounded-[18px] border border-[var(--mk-border)] bg-white p-5 shadow-[0_10px_30px_rgba(21,32,24,0.04)]">
                <p className="text-lg text-[var(--mk-text)]">{title}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--mk-text-soft)]">{description}</p>
                <div className="mt-5 rounded-[14px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] p-4">
                  <div className="h-2 w-16 rounded-full bg-[var(--mk-accent)]/50" />
                  <div className="mt-3 space-y-2">
                    <div className="h-11 rounded-2xl bg-[var(--mk-bg-strong)]" />
                    <div className="h-11 rounded-2xl bg-[var(--mk-bg-strong)]" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--mk-border)] bg-[var(--mk-bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <FadeIn>
              <p className="marketing-kicker text-xs font-semibold uppercase">Scorecard</p>
              <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">The finish screen should feel good enough to share.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--mk-text-soft)]">
                Players finish with a radar-style scorecard that makes product understanding visible. That score becomes a distribution asset for your team and a conversation asset for the player.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-[22px] border border-[var(--mk-border)] bg-white p-8 shadow-[0_10px_30px_rgba(21,32,24,0.04)]">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="flex items-center justify-center">
                      <div className="relative h-60 w-60 rounded-full border border-[var(--mk-border)] bg-[radial-gradient(circle,rgba(31,143,104,0.15),transparent_58%)]">
                      <div className="absolute left-1/2 top-6 h-[1px] w-28 -translate-x-1/2 bg-[var(--mk-border-strong)]" />
                      <div className="absolute bottom-10 left-8 h-[1px] w-20 rotate-45 bg-[var(--mk-border-strong)]" />
                      <div className="absolute bottom-10 right-8 h-[1px] w-20 -rotate-45 bg-[var(--mk-border-strong)]" />
                      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--mk-border-strong)] bg-[var(--mk-accent-soft)]" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      ["Setup", "92%"],
                      ["Core workflows", "74%"],
                      ["Integrations", "61%"],
                      ["Advanced features", "48%"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[24px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] px-5 py-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-[var(--mk-text-soft)]">{label}</p>
                          <p className="text-sm font-semibold text-[var(--mk-text)]">{value}</p>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-[var(--mk-border)]">
                          <div className="h-2 rounded-full bg-[var(--mk-accent)]" style={{ width: value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection id="early-access" source="how-it-works" />
    </>
  );
}
