import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical, Signal, RefreshCw, Quote } from "lucide-react";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";

export const metadata: Metadata = {
  title: "Documentation Enhancement Challenges",
  description:
    "Find out if your docs actually work. Embed interactive 'Test Your Knowledge' challenges at the end of any docs section and measure comprehension.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/use-cases/documentation",
  },
  openGraph: {
    title: "Documentation Enhancement - How Well You Know",
    description:
      "Find out if your docs actually work. Add 'Test your knowledge' challenges at the end of any docs section.",
    url: "https://www.howwellyouknow.com/use-cases/documentation",
  },
  twitter: {
    title: "Documentation Enhancement - How Well You Know",
    description:
      "Find out if your docs actually work. Embed interactive challenges and measure comprehension.",
  },
};

const STATS = [
  { value: "12%", label: "of users finish reading docs" },
  { value: "10 min", label: "average retention of docs content" },
  { value: "75%", label: "retention with active recall" },
  { value: "32%", label: "of docs sections need rewriting (avg)" },
];

const DOCS_STEPS = [
  {
    step: "1",
    title: "Add widget to docs",
    desc: "Embed a 'Test your knowledge' challenge at the end of any docs section. Simple iframe or link. Works with any docs platform.",
  },
  {
    step: "2",
    title: "Users test themselves",
    desc: "Readers take a quick challenge on what they just read. They get instant feedback on what they understood and what they missed.",
  },
  {
    step: "3",
    title: "Track weak spots",
    desc: "Dashboard shows which docs sections have the lowest comprehension rates. Per-question breakdown reveals exactly what confuses users.",
  },
  {
    step: "4",
    title: "Update docs",
    desc: "Rewrite the sections that score lowest. Measure improvement over time. Data-driven documentation that actually works.",
  },
];

const WHY_IT_WORKS = [
  {
    icon: FlaskConical,
    title: "Testing effect",
    desc: "Cognitive science shows that being tested on material improves retention by 50-150% compared to re-reading. Your users remember more when they're challenged.",
  },
  {
    icon: Signal,
    title: "Direct signal",
    desc: "Page views tell you nothing about comprehension. Challenge scores tell you everything. If 80% of users get Question 7 wrong, that section needs rewriting.",
  },
  {
    icon: RefreshCw,
    title: "Continuous improvement",
    desc: "Update your docs based on real data. Measure the impact of your changes. Create a feedback loop between documentation and user understanding.",
  },
];

const BEFORE_AFTER = [
  ['"Did anyone read the docs?"', '"94% completed the Workflows challenge"'],
  ["Page views as success metric", "Comprehension scores per section"],
  ["Support tickets about documented features", "Proactive docs improvements before tickets"],
  ["Guessing which sections need work", "Data showing exact comprehension rates"],
  ["Static, one-way documentation", "Interactive, measurable learning"],
];

const KNOWLEDGE_REPORT_TOPICS = [
  { topic: "Getting Started", correct: 94, status: "good" },
  { topic: "Core Features", correct: 78, status: "good" },
  { topic: "Workflows", correct: 32, status: "bad" },
  { topic: "Integrations", correct: 61, status: "warn" },
  { topic: "API Reference", correct: 45, status: "bad" },
];

const ACTIONABLE_INSIGHTS = [
  {
    section: "Getting Started: 94% comprehension",
    action: "Your onboarding docs are solid. No action needed.",
  },
  {
    section: "Workflows: 32% comprehension",
    action: "This section needs rewriting. Add more examples and screenshots.",
  },
  {
    section: "API Reference: 45% comprehension",
    action: "Consider adding code snippets and a quickstart guide.",
  },
];

export default function DocumentationPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden py-12 sm:py-16 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, #F0EEFF 0%, #FFFFFF 50%, #F6F9FC 100%)",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="mx-auto max-w-[720px] text-center">
            <FadeIn>
              <span
                className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{
                  background: "var(--m-accent-light)",
                  color: "var(--m-accent)",
                }}
              >
                Documentation
              </span>
              <h1
                className="mb-6 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ color: "var(--m-text)", lineHeight: "1.1" }}
              >
                Turn passive reading into active learning
              </h1>
              <p
                className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg"
                style={{ color: "var(--m-text-secondary)" }}
              >
                Add &quot;Test your knowledge&quot; challenges at the end of any docs section.
                Find out if your documentation is actually teaching anything.
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
                  href="/play/docker"
                  className="rounded-lg border px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{
                    color: "var(--m-text)",
                    borderColor: "var(--m-border)",
                  }}
                >
                  Try a live example
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section
        className="py-8 sm:py-10"
        style={{ background: "var(--m-accent)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.value} className="text-center">
                  <p
                    className="text-2xl font-bold sm:text-3xl md:text-4xl"
                    style={{ color: "#FFFFFF" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg)" }}
      >
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
                  You write great docs but nobody reads them
                </h2>
                <p
                  className="mb-4 text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  You pour hours into documentation. Users skim, scroll, and close
                  the tab. Only 12% finish reading. Even the ones who do forget
                  most of it within 10 minutes. There&apos;s no way to know if your
                  docs are actually teaching anything, and the support tickets
                  keep rolling in for features you&apos;ve already documented.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  Page views tell you nothing about comprehension. You&apos;re
                  guessing which sections need work. Static, one-way documentation
                  leaves you blind.
                </p>
              </div>
              {/* Visual: Docs page mockup */}
              <div className="flex-1">
                <div
                  className="rounded-2xl border p-5 shadow-sm"
                  style={{
                    background: "var(--m-bg)",
                    borderColor: "var(--m-border)",
                  }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ background: "#EF4444" }}
                    />
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ background: "#F59E0B" }}
                    />
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ background: "#22C55E" }}
                    />
                    <span
                      className="ml-2 text-[10px]"
                      style={{ color: "var(--m-text-tertiary)" }}
                    >
                      docs.company.com/workflows
                    </span>
                  </div>
                  <div className="mb-3 flex gap-3">
                    <div
                      className="hidden space-y-2 border-r pr-3 sm:block sm:w-28"
                      style={{ borderColor: "var(--m-border)" }}
                    >
                      <div
                        className="h-2 w-full rounded"
                        style={{ background: "var(--m-border)" }}
                      />
                      <div
                        className="h-2 w-3/4 rounded"
                        style={{ background: "var(--m-border-subtle)" }}
                      />
                      <div
                        className="h-2 w-full rounded"
                        style={{ background: "var(--m-accent-light)" }}
                      />
                      <div
                        className="h-2 w-5/6 rounded"
                        style={{ background: "var(--m-border-subtle)" }}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div
                        className="h-3 w-1/2 rounded"
                        style={{ background: "var(--m-border)" }}
                      />
                      <div
                        className="h-2 w-full rounded"
                        style={{ background: "var(--m-border-subtle)" }}
                      />
                      <div
                        className="h-2 w-5/6 rounded"
                        style={{ background: "var(--m-border-subtle)" }}
                      />
                      <div
                        className="h-2 w-full rounded"
                        style={{ background: "var(--m-border-subtle)" }}
                      />
                      <div
                        className="h-2 w-2/3 rounded"
                        style={{ background: "var(--m-border-subtle)" }}
                      />
                    </div>
                  </div>
                  <div
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: "var(--m-accent-light)",
                      border: "1px solid var(--m-accent)",
                    }}
                  >
                    <p
                      className="text-xs font-semibold"
                      style={{ color: "var(--m-accent)" }}
                    >
                      Test Your Knowledge: Workflows
                    </p>
                    <p
                      className="mt-1 text-[10px]"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      5 questions based on what you just read
                    </p>
                    <div
                      className="mx-auto mt-2 inline-block rounded-lg px-3 py-1.5 text-[10px] font-semibold text-white"
                      style={{ background: "var(--m-accent)" }}
                    >
                      Start Quiz
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
                  Add challenges. Get direct signal on comprehension.
                </h2>
                <p
                  className="mb-4 text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  Embed a &quot;Test your knowledge&quot; challenge at the end of
                  any docs section. Users test themselves on what they just read.
                  You get instant feedback on what they understood and what they
                  missed.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  If 80% of users get Question 7 wrong, that tells you something
                  specific: the section on Workflows needs rewriting. No survey,
                  no feedback form, no guessing. You identify exactly which
                  sections confuse users before the support tickets arrive.
                </p>
              </div>
              {/* Visual: Analytics mockup */}
              <div className="flex-1">
                <div
                  className="rounded-2xl border p-6 shadow-sm"
                  style={{
                    background: "var(--m-bg)",
                    borderColor: "var(--m-border)",
                  }}
                >
                  <p
                    className="mb-4 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--m-text-tertiary)" }}
                  >
                    Knowledge Gap Report
                  </p>
                  <div className="space-y-3">
                    {KNOWLEDGE_REPORT_TOPICS.map((item) => (
                      <div
                        key={item.topic}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <span
                          className="w-20 shrink-0 text-right text-[11px] sm:w-28 sm:text-xs"
                          style={{ color: "var(--m-text-secondary)" }}
                        >
                          {item.topic}
                        </span>
                        <div
                          className="h-2 flex-1 overflow-hidden rounded-full"
                          style={{ background: "var(--m-border-subtle)" }}
                        >
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${item.correct}%`,
                              background:
                                item.status === "good"
                                  ? "#22C55E"
                                  : item.status === "warn"
                                    ? "#F59E0B"
                                    : "#EF4444",
                            }}
                          />
                        </div>
                        <span
                          className="w-10 text-right text-xs font-bold"
                          style={{
                            color:
                              item.status === "good"
                                ? "#22C55E"
                                : item.status === "warn"
                                  ? "#F59E0B"
                                  : "#EF4444",
                          }}
                        >
                          {item.correct}%
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-4 rounded-lg p-3"
                    style={{ background: "var(--m-bg-secondary)" }}
                  >
                    <p
                      className="text-xs font-medium"
                      style={{ color: "var(--m-text)" }}
                    >
                      Action needed: &quot;Workflows&quot; section has a 32%
                      comprehension rate. Consider rewriting with more examples.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THE DATA ANGLE */}
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg-secondary)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-3 block text-center text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              The Data Angle
            </span>
            <h2
              className="mb-12 text-center text-xl font-bold sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              What the analytics reveal
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div
              className="mx-auto mb-12 max-w-[560px] rounded-2xl border p-4 shadow-sm sm:p-6"
              style={{
                background: "var(--m-bg)",
                borderColor: "var(--m-border)",
              }}
            >
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--m-text-tertiary)" }}
              >
                Knowledge Gap Report
              </p>
              <div className="space-y-3">
                {KNOWLEDGE_REPORT_TOPICS.map((item) => (
                  <div
                    key={item.topic}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <span
                      className="w-20 shrink-0 text-right text-[11px] sm:w-28 sm:text-xs"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      {item.topic}
                    </span>
                    <div
                      className="h-2 flex-1 overflow-hidden rounded-full"
                      style={{ background: "var(--m-border-subtle)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.correct}%`,
                          background:
                            item.status === "good"
                              ? "#22C55E"
                              : item.status === "warn"
                                ? "#F59E0B"
                                : "#EF4444",
                        }}
                      />
                    </div>
                    <span
                      className="w-10 text-right text-xs font-bold"
                      style={{
                        color:
                          item.status === "good"
                            ? "#22C55E"
                            : item.status === "warn"
                              ? "#F59E0B"
                              : "#EF4444",
                      }}
                    >
                      {item.correct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="mx-auto max-w-[640px] space-y-4">
            {ACTIONABLE_INSIGHTS.map((insight, i) => (
              <FadeIn key={insight.section} delay={0.1 + i * 0.05}>
                <div
                  className="rounded-xl border p-4"
                  style={{
                    background: "var(--m-bg)",
                    borderColor: "var(--m-border-subtle)",
                  }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--m-text)" }}
                  >
                    {insight.section}
                  </p>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: "var(--m-text-secondary)" }}
                  >
                    {insight.action}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DOCS TEAMS USE THIS */}
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg)" }}
      >
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-3 block text-center text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              How It Works
            </span>
            <h2
              className="mb-8 text-center text-xl font-bold sm:mb-12 sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              How docs teams use this
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {DOCS_STEPS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div
                  className="flex gap-4 rounded-2xl border p-4 transition-shadow hover:shadow-md sm:gap-5 sm:p-6"
                  style={{
                    background: "var(--m-bg-secondary)",
                    borderColor: "var(--m-border)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold"
                    style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <p
                      className="text-base font-semibold"
                      style={{ color: "var(--m-text)" }}
                    >
                      {s.title}
                    </p>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg-secondary)" }}
      >
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
              Built on learning science
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {WHY_IT_WORKS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} className="flex">
                <div
                  className="flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-md md:p-8"
                  style={{
                    background: "var(--m-bg)",
                    borderColor: "var(--m-border)",
                  }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "var(--m-accent-light)" }}
                  >
                    <item.icon
                      size={24}
                      style={{ color: "var(--m-accent)" }}
                      strokeWidth={2}
                    />
                  </div>
                  <h3
                    className="mb-3 text-lg font-bold"
                    style={{ color: "var(--m-text)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="flex-1 text-sm leading-relaxed"
                    style={{ color: "var(--m-text-secondary)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE vs AFTER */}
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg)" }}
      >
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
            <div
              className="overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--m-border)" }}
            >
              <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr style={{ background: "var(--m-bg-secondary)" }}>
                    <th
                      className="p-3 text-left font-semibold sm:p-4"
                      style={{ color: "var(--m-text-tertiary)" }}
                    >
                      Before
                    </th>
                    <th
                      className="p-3 text-left font-semibold sm:p-4"
                      style={{ color: "var(--m-accent)" }}
                    >
                      After
                    </th>
                  </tr>
                </thead>
                <tbody style={{ background: "var(--m-bg)" }}>
                  {BEFORE_AFTER.map(([before, after]) => (
                    <tr
                      key={before}
                      style={{ borderTop: "1px solid var(--m-border)" }}
                    >
                      <td
                        className="p-3 sm:p-4"
                        style={{ color: "var(--m-text-secondary)" }}
                      >
                        {before}
                      </td>
                      <td
                        className="p-3 font-medium sm:p-4"
                        style={{
                          color: "var(--m-accent)",
                          background: "var(--m-accent-light)",
                        }}
                      >
                        {after}
                      </td>
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
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg-secondary)" }}
      >
        <div className="mx-auto max-w-[760px] px-4 text-center sm:px-6">
          <FadeIn>
            <div
              className="mb-6 flex justify-center"
              style={{ color: "var(--m-accent)" }}
            >
              <Quote size={48} strokeWidth={1.5} />
            </div>
            <blockquote
              className="mb-6 text-xl font-medium leading-relaxed sm:text-2xl"
              style={{ color: "var(--m-text)" }}
            >
              We added challenges to our top 5 docs sections. Within a week, we
              discovered that our Workflows docs had a 32% comprehension rate. We
              rewrote the section, and the next challenge showed 71%. First time
              we&apos;ve ever had data on whether our docs actually work.
            </blockquote>
            <p
              className="text-sm font-medium"
              style={{ color: "var(--m-text-tertiary)" }}
            >
              What our users are saying
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection id="early-access" source="use-case-documentation" />
    </>
  );
}
