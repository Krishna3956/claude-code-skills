import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Zap, BarChart3, Quote } from "lucide-react";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";

export const metadata: Metadata = {
  title: "Customer Onboarding Challenges",
  description:
    "Onboard new customers in 3 minutes, not 3 weeks. Replace onboarding calls with interactive product challenges that teach and test simultaneously.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/use-cases/onboarding",
  },
  openGraph: {
    title: "Customer Onboarding - How Well You Know",
    description:
      "Onboard new customers in 3 minutes, not 3 weeks. Interactive challenges that replace onboarding calls.",
    url: "https://www.howwellyouknow.com/use-cases/onboarding",
  },
  twitter: {
    title: "Customer Onboarding - How Well You Know",
    description:
      "Onboard new customers in 3 minutes, not 3 weeks. Interactive challenges that replace onboarding calls.",
  },
};

const STATS = [
  { value: "12%", label: "of users finish reading docs" },
  { value: "10hrs", label: "per week on onboarding calls" },
  { value: "90 days", label: "average time to churn without onboarding" },
  { value: "3 min", label: "to complete a challenge" },
];

const WHY_IT_WORKS = [
  {
    icon: Brain,
    title: "Active recall beats passive reading",
    desc: "Research shows people retain 75% of what they practice vs. 10% of what they read. Challenges force active engagement with your product concepts.",
  },
  {
    icon: Zap,
    title: "Immediate feedback loops",
    desc: "Users learn what they got wrong in real-time. No waiting for a CS call. No re-reading the same docs. Instant correction builds lasting understanding.",
  },
  {
    icon: BarChart3,
    title: "Data you can act on",
    desc: "Know exactly which features confuse your users. 'Workflows' has a 32% comprehension rate? Create a targeted deep-dive and send it to low scorers.",
  },
];

const CS_STEPS = [
  {
    step: "1",
    title: "Setup (5 min)",
    desc: "Paste your docs URL. We auto-generate the challenge. Review the 15 questions, edit anything you want, and publish.",
  },
  {
    step: "2",
    title: "Distribute",
    desc: "Add the challenge link to your onboarding email sequence. Day 1: welcome + challenge. Day 7: reminder. Day 30: advanced challenge.",
  },
  {
    step: "3",
    title: "Track",
    desc: "Dashboard shows completion rates, average scores, per-question breakdown, and weakest features. Export to CSV or connect to your CRM.",
  },
  {
    step: "4",
    title: "Act",
    desc: "'Nobody understands Workflows'? Create a targeted deep-dive, send to low scorers. Measure improvement with the next challenge.",
  },
];

const BEFORE_AFTER = [
  ["45-min onboarding calls", "3-min self-serve challenge"],
  ['"Did you read the docs?"', '"You scored 72%. Here\'s what to review."'],
  ["No data on what users know", "Per-feature knowledge breakdown"],
  ["Same walkthrough for every customer", "Automated, consistent, measurable"],
  ["CS team spends 10+ hrs/week", "Challenges run 24/7 without your team"],
];

export default function OnboardingPage() {
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
                Customer Onboarding
              </span>
              <h1
                className="mb-6 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ color: "var(--m-text)", lineHeight: "1.1" }}
              >
                Onboard new customers in 3 minutes, not 3 weeks
              </h1>
              <p
                className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg"
                style={{ color: "var(--m-text-secondary)" }}
              >
                Add an interactive challenge to your welcome email. Users learn
                your core features before they even open the app.
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
                  Your onboarding process is broken
                </h2>
                <p
                  className="mb-4 text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  New customers sign up, skim your docs (or skip them entirely, only
                  12% finish), and miss your core features. They churn within 90 days
                  because they never truly learned the product. Meanwhile, your CS team
                  spends 10+ hours a week on repetitive onboarding calls, covering the
                  same basics for every single customer.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  You have no data on what users actually know. &quot;Did you read the
                  docs?&quot; is not a strategy. You need something that verifies
                  understanding, scales without headcount, and gives you actionable
                  insight before the first support ticket.
                </p>
              </div>
              {/* Visual: Email mockup */}
              <div className="flex-1">
                <div
                  className="rounded-2xl border p-6 shadow-sm"
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
                      className="ml-2 text-xs"
                      style={{ color: "var(--m-text-tertiary)" }}
                    >
                      inbox
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div
                      className="rounded-lg p-4"
                      style={{ background: "var(--m-bg-secondary)" }}
                    >
                      <p
                        className="text-xs font-medium"
                        style={{ color: "var(--m-text-tertiary)" }}
                      >
                        From: your-app@company.com
                      </p>
                      <p
                        className="mt-1 text-sm font-semibold"
                        style={{ color: "var(--m-text)" }}
                      >
                        Welcome! Learn [Product] in 3 minutes
                      </p>
                      <p
                        className="mt-2 text-xs"
                        style={{ color: "var(--m-text-secondary)" }}
                      >
                        Hey Sarah, before your first login, take this quick challenge
                        to get up to speed on the features that matter most...
                      </p>
                      <div
                        className="mt-3 inline-block rounded-lg px-4 py-2 text-xs font-semibold"
                        style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
                      >
                        Start the Challenge
                      </div>
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
                  Replace calls with interactive challenges
                </h2>
                <p
                  className="mb-4 text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  Drop a &quot;Learn [Product] in 3 minutes&quot; link into your Day 1 welcome
                  email. Users play through 15 questions covering your core features:
                  Truth or Myth, This or That, Speed Round. They learn by doing, not by
                  reading. Each wrong answer shows the correct solution immediately,
                  so they build understanding in real time.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  At the end, you see a per-feature knowledge breakdown. Who understands
                  Workflows? Who missed Integrations? Send targeted follow-ups, create
                  deep-dives for weak spots, and measure improvement over time. No more
                  guessing.
                </p>
              </div>
              {/* Visual: Scorecard mockup */}
              <div className="flex-1">
                <div
                  className="rounded-2xl p-6 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #0A2540 0%, #0D3055 100%)",
                  }}
                >
                  <div className="text-center">
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      Scorecard
                    </p>
                    <p
                      className="mt-2 text-5xl font-extrabold"
                      style={{ color: "var(--m-accent)" }}
                    >
                      72
                      <span
                        className="text-lg font-normal"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        /100
                      </span>
                    </p>
                    <p
                      className="mt-1 text-base font-semibold"
                      style={{ color: "#FFFFFF" }}
                    >
                      The Quick Learner
                    </p>
                    <div className="mx-auto mt-4 max-w-[240px] space-y-2">
                      {[
                        { name: "Core Features", pct: 90 },
                        { name: "Workflows", pct: 45 },
                        { name: "Integrations", pct: 70 },
                        { name: "Advanced", pct: 35 },
                      ].map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2"
                        >
                          <span
                            className="w-20 text-right text-[10px]"
                            style={{ color: "rgba(255,255,255,0.6)" }}
                          >
                            {skill.name}
                          </span>
                          <div
                            className="h-1.5 flex-1 overflow-hidden rounded-full"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${skill.pct}%`,
                                background:
                                  "linear-gradient(90deg, var(--m-accent), #A960EE)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p
                      className="mt-4 text-[10px]"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      Focus area: Workflows needs attention
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
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
              Built on learning science, designed for product teams
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

      {/* HOW CS TEAMS USE THIS */}
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
              How CS teams use this
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {CS_STEPS.map((s, i) => (
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

      {/* BEFORE vs AFTER */}
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg-secondary)" }}
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
                  <tr style={{ background: "var(--m-bg)" }}>
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
        style={{ background: "var(--m-bg)" }}
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
              We used to spend 10 hours a week on onboarding calls. Now we send a
              challenge link in the welcome email and our users show up to the first
              call already knowing the product.
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

      <CTASection id="early-access" source="use-case-onboarding" />
    </>
  );
}
