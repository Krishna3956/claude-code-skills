import type { Metadata } from "next";
import Link from "next/link";
import { Rocket, TrendingUp, BarChart3, Lightbulb, Quote } from "lucide-react";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";

export const metadata: Metadata = {
  title: "Product Teams - Feature Adoption Challenges",
  description:
    "Launch features people actually use. Run interactive challenges on new releases to drive adoption and on existing features to identify knowledge gaps.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/use-cases/product-teams",
  },
  openGraph: {
    title: "Product Teams - How Well You Know",
    description:
      "Launch features people actually use. Run challenges on new releases to drive adoption and on existing features to find knowledge gaps.",
    url: "https://www.howwellyouknow.com/use-cases/product-teams",
  },
  twitter: {
    title: "Product Teams - How Well You Know",
    description:
      "Launch features people actually use. Run challenges on new releases to drive adoption and find knowledge gaps.",
  },
};

const STATS = [
  { value: "40%", label: "of features go unused after launch" },
  { value: "2.4x", label: "faster adoption with release challenges" },
  { value: "5 min", label: "to create a feature launch challenge" },
  { value: "73%", label: "average challenge completion rate" },
];

const WHY_IT_WORKS = [
  {
    icon: Rocket,
    title: "Ship features with built-in education",
    desc: "Every release gets a challenge. Users learn what's new through interactive questions, not changelog walls. They discover features by engaging with them, not by stumbling into them weeks later.",
  },
  {
    icon: TrendingUp,
    title: "Measure adoption, not just awareness",
    desc: "Knowing users saw the announcement isn't enough. Challenges tell you who actually understands the feature. Low scores on 'Workflows' means your users aren't ready to use it, even if they clicked the banner.",
  },
  {
    icon: BarChart3,
    title: "Find the gaps before they become churn",
    desc: "Run a challenge on your existing features. If 60% of users can't answer questions about your core value prop, that's a product problem, not a docs problem. Now you have the data to fix it.",
  },
];

const PM_STEPS = [
  {
    step: "1",
    title: "New release? Create a challenge",
    desc: "Paste the docs or changelog URL for your new feature. We auto-generate 15 questions that teach users what's new, how it works, and when to use it.",
  },
  {
    step: "2",
    title: "Distribute with the release",
    desc: "Add the challenge link to your release email, in-app banner, or Slack announcement. Users play through it in 3 minutes and actually learn the feature.",
  },
  {
    step: "3",
    title: "Audit existing feature knowledge",
    desc: "Create challenges for features that have low adoption. The results tell you whether users don't know the feature exists, don't understand it, or understand it but don't need it.",
  },
  {
    step: "4",
    title: "Close the loop with data",
    desc: "Per-feature knowledge scores feed directly into your product decisions. Low comprehension on a feature? Improve the UX. High comprehension but low usage? Rethink the value prop.",
  },
];

const BEFORE_AFTER = [
  ["Ship feature, hope users find it", "Ship feature with a challenge that teaches it"],
  ['"We announced it in the changelog"', '"82% of users understand the new workflow"'],
  ["No data on feature comprehension", "Per-feature knowledge breakdown across all users"],
  ["Guess why adoption is low", "Know exactly which concepts users don't understand"],
  ["Same release email for everyone", "Targeted follow-ups based on knowledge gaps"],
];

export default function ProductTeamsPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden py-12 sm:py-16 md:py-28"
        style={{
          background: "linear-gradient(135deg, #F0EEFF 0%, #FFFFFF 50%, #F6F9FC 100%)",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="mx-auto max-w-[720px] text-center">
            <FadeIn>
              <span
                className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{ background: "var(--m-accent-light)", color: "var(--m-accent)" }}
              >
                Product Teams
              </span>
              <h1
                className="mb-6 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ color: "var(--m-text)", lineHeight: "1.1" }}
              >
                Launch features people actually understand and use
              </h1>
              <p
                className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg"
                style={{ color: "var(--m-text-secondary)" }}
              >
                Ship a challenge alongside every release. Audit existing feature
                knowledge to find the gaps that explain low adoption. Turn product
                data into product decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="#early-access"
                  className="rounded-lg px-7 py-3.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02]"
                  style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
                >
                  Get Early Access
                </Link>
                <Link
                  href="/play/notion"
                  className="rounded-lg border px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{ color: "var(--m-text)", borderColor: "var(--m-border)" }}
                >
                  Try a live example
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-8 sm:py-10" style={{ background: "var(--m-accent)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.value} className="text-center">
                  <p className="text-2xl font-bold sm:text-3xl md:text-4xl" style={{ color: "#FFFFFF" }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-12 sm:py-16 md:py-28" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Block 1: Problem */}
          <FadeIn>
            <div className="mb-12 flex flex-col items-center gap-8 sm:mb-16 md:mb-20 md:flex-row md:gap-16">
              <div className="flex-1">
                <span
                  className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--m-accent)" }}
                >
                  The Problem
                </span>
                <h2
                  className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl"
                  style={{ color: "var(--m-text)" }}
                >
                  You ship features. Users don&apos;t use them.
                </h2>
                <p
                  className="mb-4 text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  Your team spends months building a feature. You write the changelog,
                  send the email, add a tooltip. Two weeks later, adoption is at 8%.
                  The feature sits there, unused, while users keep asking for things
                  you already built.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  The problem isn&apos;t awareness. They saw the announcement. The problem
                  is comprehension. Users don&apos;t understand what the feature does, when
                  to use it, or how it fits into their workflow. And you have no way to
                  measure that gap.
                </p>
              </div>
              {/* Visual: Release announcement mockup */}
              <div className="flex-1">
                <div
                  className="rounded-2xl border p-6 shadow-sm"
                  style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
                >
                  <div className="mb-4 flex items-center gap-2">
                    <Rocket size={16} style={{ color: "var(--m-accent)" }} />
                    <span className="text-xs font-semibold" style={{ color: "var(--m-text-tertiary)" }}>
                      Release v4.2
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-lg p-4" style={{ background: "var(--m-bg-secondary)" }}>
                      <p className="text-sm font-semibold" style={{ color: "var(--m-text)" }}>
                        3 new features shipped
                      </p>
                      <div className="mt-3 space-y-2">
                        {[
                          { feature: "Smart Workflows", adoption: "8%", color: "#EF4444" },
                          { feature: "Custom Dashboards", adoption: "12%", color: "#F59E0B" },
                          { feature: "API Webhooks", adoption: "5%", color: "#EF4444" },
                        ].map((f) => (
                          <div key={f.feature} className="flex items-center justify-between">
                            <span className="text-xs" style={{ color: "var(--m-text-secondary)" }}>{f.feature}</span>
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 w-16 overflow-hidden rounded-full" style={{ background: "var(--m-bg-tertiary)" }}>
                                <div className="h-full rounded-full" style={{ width: f.adoption, background: f.color }} />
                              </div>
                              <span className="text-[10px] font-semibold" style={{ color: f.color }}>{f.adoption}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-[10px]" style={{ color: "var(--m-text-tertiary)" }}>
                        Adoption 2 weeks after launch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Block 2: Solution */}
          <FadeIn>
            <div className="mb-12 flex flex-col items-center gap-8 sm:mb-16 md:mb-20 md:flex-row-reverse md:gap-16">
              <div className="flex-1">
                <span
                  className="mb-3 inline-block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--m-accent)" }}
                >
                  The Solution
                </span>
                <h2
                  className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl"
                  style={{ color: "var(--m-text)" }}
                >
                  Ship features with built-in comprehension
                </h2>
                <p
                  className="mb-4 text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  Create a &quot;What&apos;s new in v4.2&quot; challenge from your release docs.
                  Users play through 15 questions that teach them what each feature does,
                  when to use it, and how it connects to what they already know. They learn
                  by doing, not by scanning a changelog.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  Then run challenges on your existing features. If 60% of users can&apos;t
                  answer basic questions about your core workflow engine, that&apos;s not a
                  marketing problem. It&apos;s a product problem. Now you have the data to
                  decide: improve the UX, write better docs, or rethink the feature entirely.
                </p>
              </div>
              {/* Visual: Knowledge gap dashboard */}
              <div className="flex-1">
                <div
                  className="rounded-2xl p-6 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #0A2540 0%, #0D3055 100%)" }}
                >
                  <p className="mb-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Feature Knowledge Audit
                  </p>
                  <p className="mb-4 text-sm font-semibold text-white">
                    v4.2 Release Challenge Results
                  </p>
                  <div className="space-y-3">
                    {[
                      { feature: "Smart Workflows", pct: 34, users: "412 users" },
                      { feature: "Custom Dashboards", pct: 58, users: "412 users" },
                      { feature: "API Webhooks", pct: 22, users: "412 users" },
                      { feature: "Core Features", pct: 85, users: "412 users" },
                    ].map((gap) => (
                      <div key={gap.feature}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-[10px] font-medium text-white">{gap.feature}</span>
                          <span
                            className="text-[10px] font-bold"
                            style={{ color: gap.pct < 50 ? "#EF4444" : gap.pct < 70 ? "#F59E0B" : "#22C55E" }}
                          >
                            {gap.pct}% comprehension
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${gap.pct}%`,
                              background: gap.pct < 50 ? "#EF4444" : gap.pct < 70 ? "#F59E0B" : "#22C55E",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg px-3 py-2" style={{ background: "rgba(239, 68, 68, 0.1)" }}>
                    <p className="text-[10px] font-medium" style={{ color: "#FCA5A5" }}>
                      Action needed: 66% of users don&apos;t understand Smart Workflows.
                      Consider a targeted deep-dive or UX improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="py-12 sm:py-16 md:py-28" style={{ background: "var(--m-bg-secondary)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-3 block text-center text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              Why This Works
            </span>
            <h2
              className="mb-12 text-center text-xl font-bold sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              Turn launches into learning moments
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {WHY_IT_WORKS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} className="flex">
                <div
                  className="flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-md md:p-8"
                  style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "var(--m-accent-light)" }}
                  >
                    <item.icon size={24} style={{ color: "var(--m-accent)" }} strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold" style={{ color: "var(--m-text)" }}>
                    {item.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TWO PLAYBOOKS */}
      <section className="py-12 sm:py-16 md:py-28" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-3 block text-center text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              Two playbooks, one tool
            </span>
            <h2
              className="mb-12 text-center text-xl font-bold sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              New feature launches + existing feature audits
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn delay={0.05}>
              <div
                className="flex h-full flex-col rounded-2xl border p-6 md:p-8"
                style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--m-accent-light)" }}
                >
                  <Rocket size={24} style={{ color: "var(--m-accent)" }} />
                </div>
                <h3 className="mb-2 text-lg font-bold" style={{ color: "var(--m-text)" }}>
                  Feature Launch Challenge
                </h3>
                <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>
                  Ship a challenge alongside every release. Users learn what&apos;s new
                  through interactive questions instead of passive changelogs.
                </p>
                <div className="mt-auto space-y-2">
                  {PM_STEPS.slice(0, 2).map((s) => (
                    <div key={s.step} className="flex gap-3 rounded-xl p-3" style={{ background: "var(--m-bg-secondary)" }}>
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                        style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
                      >
                        {s.step}
                      </div>
                      <div>
                        <p className="text-xs font-semibold" style={{ color: "var(--m-text)" }}>{s.title}</p>
                        <p className="mt-0.5 text-[11px] leading-relaxed" style={{ color: "var(--m-text-tertiary)" }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div
                className="flex h-full flex-col rounded-2xl border p-6 md:p-8"
                style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--m-accent-light)" }}
                >
                  <Lightbulb size={24} style={{ color: "var(--m-accent)" }} />
                </div>
                <h3 className="mb-2 text-lg font-bold" style={{ color: "var(--m-text)" }}>
                  Feature Knowledge Audit
                </h3>
                <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>
                  Run challenges on existing features to find comprehension gaps
                  that explain low adoption. Turn data into product decisions.
                </p>
                <div className="mt-auto space-y-2">
                  {PM_STEPS.slice(2, 4).map((s) => (
                    <div key={s.step} className="flex gap-3 rounded-xl p-3" style={{ background: "var(--m-bg-secondary)" }}>
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                        style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
                      >
                        {s.step}
                      </div>
                      <div>
                        <p className="text-xs font-semibold" style={{ color: "var(--m-text)" }}>{s.title}</p>
                        <p className="mt-0.5 text-[11px] leading-relaxed" style={{ color: "var(--m-text-tertiary)" }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BEFORE vs AFTER */}
      <section className="py-12 sm:py-16 md:py-28" style={{ background: "var(--m-bg-secondary)" }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-3 block text-center text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              The Shift
            </span>
            <h2
              className="mb-6 text-center text-xl font-bold sm:mb-8 sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              Before vs. After
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--m-border)" }}>
              <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr style={{ background: "var(--m-bg)" }}>
                    <th className="p-3 text-left font-semibold sm:p-4" style={{ color: "var(--m-text-tertiary)" }}>Before</th>
                    <th className="p-3 text-left font-semibold sm:p-4" style={{ color: "var(--m-accent)" }}>After</th>
                  </tr>
                </thead>
                <tbody style={{ background: "var(--m-bg)" }}>
                  {BEFORE_AFTER.map(([before, after]) => (
                    <tr key={before} style={{ borderTop: "1px solid var(--m-border)" }}>
                      <td className="p-3 sm:p-4" style={{ color: "var(--m-text-secondary)" }}>{before}</td>
                      <td className="p-3 font-medium sm:p-4" style={{ color: "var(--m-accent)", background: "var(--m-accent-light)" }}>{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIAL QUOTE */}
      <section className="py-12 sm:py-16 md:py-28" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[760px] px-4 text-center sm:px-6">
          <FadeIn>
            <div className="mb-6 flex justify-center" style={{ color: "var(--m-accent)" }}>
              <Quote size={48} strokeWidth={1.5} />
            </div>
            <blockquote
              className="mb-6 text-xl font-medium leading-relaxed sm:text-2xl"
              style={{ color: "var(--m-text)" }}
            >
              We shipped three features last quarter. Two had single-digit adoption.
              We ran a challenge and found out users didn&apos;t even know what the features
              did. Now every release ships with a challenge and adoption is up 2.4x.
            </blockquote>
            <p className="text-sm font-medium" style={{ color: "var(--m-text-tertiary)" }}>
              What our users are saying
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection id="early-access" source="use-case-product-teams" />
    </>
  );
}
