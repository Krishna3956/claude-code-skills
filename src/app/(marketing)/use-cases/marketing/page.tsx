import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";

export const metadata: Metadata = {
  title: "Lead Generation with Interactive Challenges",
  description:
    "Embed interactive product challenges on your blog or landing page. Visitors play, learn your product, and convert into qualified leads with 3+ minute engagement.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/use-cases/marketing",
  },
  openGraph: {
    title: "Lead Generation - How Well You Know",
    description:
      "Embed interactive challenges on your blog or landing page. Visitors play, learn, and convert into qualified leads.",
    url: "https://www.howwellyouknow.com/use-cases/marketing",
  },
  twitter: {
    title: "Lead Generation - How Well You Know",
    description:
      "Embed interactive challenges on your blog or landing page. Visitors play, learn, and convert into qualified leads.",
  },
};

const STATS = [
  {
    value: "3+ min",
    label: "average time on page (vs 45 sec for blog posts)",
  },
  {
    value: "12%",
    label: "lead capture rate (vs 2% for gated PDFs)",
  },
  {
    value: "47",
    label: "new leads per week from one challenge",
  },
  {
    value: "82%",
    label: "of leads already understand your product",
  },
];

const FUNNEL_STAGES = [
  { title: "Blog visitor", desc: "Arrives at your blog post or landing page from organic or paid traffic." },
  { title: "Plays challenge (3+ min engagement)", desc: "Engages with 15 interactive questions about your product." },
  { title: "Submits email for results", desc: "Enters email to see detailed scorecard and knowledge breakdown." },
  { title: "Pre-qualified lead with knowledge data", desc: "You receive email, score, and which topics they got wrong." },
];

const WHY_THIS_WORKS = [
  {
    title: "Post-engagement capture",
    desc: "Traditional lead gen asks for an email before providing value. We flip it. Users play first, get hooked, then submit their email to see detailed results. Higher quality, higher conversion.",
  },
  {
    title: "Pre-educated leads",
    desc: "Your sales team gets leads who already understand your product. No more 'so what does your product do?' on the first call. They've already scored 72% on your challenge.",
  },
  {
    title: "Viral distribution",
    desc: "28% of players share their scorecard on social media. Each share drives new traffic to your challenge. One piece of content that compounds.",
  },
];

const MARKETING_STEPS = [
  {
    step: "1",
    title: "Embed on blog",
    desc: "Add the challenge widget to any blog post or landing page with a simple embed code. Takes 2 minutes.",
  },
  {
    step: "2",
    title: "Visitors play",
    desc: "Readers engage with 15 interactive questions about your product. Average time on page jumps from 45 seconds to 3+ minutes.",
  },
  {
    step: "3",
    title: "Capture email",
    desc: "At the end, players enter their email to see detailed results. Post-engagement capture = higher quality leads.",
  },
  {
    step: "4",
    title: "Qualified lead",
    desc: "You get an email plus their score and knowledge gaps. Your sales team knows exactly what to talk about on the first call.",
  },
];

const BEFORE_AFTER = [
  ["Gated PDF downloads", "Interactive challenge completions"],
  ["45 sec average time on page", "3+ min average engagement"],
  ["2% conversion rate", "12% lead capture rate"],
  ['"So what does your product do?"', '"I scored 72%. Tell me about Workflows."'],
  ["Cold leads who downloaded a PDF", "Warm leads who understand your product"],
];

export default function MarketingUseCasePage() {
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
                Lead Generation
              </span>
              <h1
                className="mb-6 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ color: "var(--m-text)", lineHeight: "1.1" }}
              >
                Interactive content that actually converts
              </h1>
              <p
                className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg"
                style={{ color: "var(--m-text-secondary)" }}
              >
                Embed a product challenge on your blog or landing page. Visitors
                play, learn your product, and convert into leads who arrive
                pre-educated. No more cold handoffs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="#early-access"
                  className="rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02]"
                  style={{ background: "var(--m-accent)" }}
                >
                  Get Early Access
                </Link>
                <Link
                  href="/play/hubspot"
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
                    className="mt-1 text-xs font-medium leading-snug sm:text-sm"
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
                  Blog posts get traffic but don&apos;t convert
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  You pour resources into content. Blog posts rank, drive traffic,
                  then… nothing. Gated PDFs feel outdated and invasive. Who wants
                  to trade their email for a 10-page whitepaper? Webinar signups
                  drop off before the event. Your marketing team needs interactive
                  content that captures attention <em>and</em> generates leads.
                  Static content just doesn&apos;t cut it anymore.
                </p>
              </div>
              {/* Visual: Blog post mockup */}
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
                      blog.company.com/guide
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div
                      className="h-2 w-3/4 rounded"
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
                      className="h-2 w-2/3 rounded"
                      style={{ background: "var(--m-border-subtle)" }}
                    />
                    <div
                      className="my-4 rounded-xl border-2 border-dashed p-4 text-center"
                      style={{ borderColor: "var(--m-accent)" }}
                    >
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "var(--m-accent)" }}
                      >
                        Test your knowledge
                      </p>
                      <p
                        className="mt-1 text-[10px]"
                        style={{ color: "var(--m-text-secondary)" }}
                      >
                        3 min interactive challenge
                      </p>
                      <div
                        className="mx-auto mt-2 inline-block rounded-lg px-3 py-1.5 text-[10px] font-semibold text-white"
                        style={{ background: "var(--m-accent)" }}
                      >
                        Play Now
                      </div>
                    </div>
                    <div
                      className="h-2 w-full rounded"
                      style={{ background: "var(--m-border-subtle)" }}
                    />
                    <div
                      className="h-2 w-4/5 rounded"
                      style={{ background: "var(--m-border-subtle)" }}
                    />
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
                  Capture emails after engagement, not before
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  Embed an interactive challenge right in your blog post or
                  landing page. Visitors play through 15 questions about your
                  product. They learn while they engage. When they finish, they
                  submit their email to see detailed results. You get a lead who
                  already understands your product. No gate before value. No
                  cold handoffs to sales.
                </p>
              </div>
              {/* Visual: Lead capture mockup */}
              <div className="flex-1">
                <div
                  className="rounded-2xl border p-6 shadow-sm"
                  style={{
                    background: "var(--m-bg)",
                    borderColor: "var(--m-border)",
                  }}
                >
                  <p
                    className="mb-4 text-center text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--m-text-tertiary)" }}
                  >
                    Lead Capture
                  </p>
                  <div className="space-y-3">
                    {[
                      { email: "sarah@acme.co", score: "82%", time: "2m ago" },
                      { email: "mike@startup.io", score: "71%", time: "5m ago" },
                      {
                        email: "alex@enterprise.com",
                        score: "93%",
                        time: "12m ago",
                      },
                    ].map((lead) => (
                      <div
                        key={lead.email}
                        className="flex items-center gap-3 rounded-lg p-3"
                        style={{ background: "var(--m-bg-secondary)" }}
                      >
                        <div
                          className="h-8 w-8 rounded-full"
                          style={{ background: "var(--m-accent-light)" }}
                        />
                        <div className="flex-1">
                          <p
                            className="text-xs font-medium"
                            style={{ color: "var(--m-text)" }}
                          >
                            {lead.email}
                          </p>
                          <p
                            className="text-[10px]"
                            style={{ color: "var(--m-text-tertiary)" }}
                          >
                            {lead.time}
                          </p>
                        </div>
                        <span
                          className="rounded-full px-2 py-0.5 text-xs font-bold"
                          style={{
                            background: "var(--m-accent-light)",
                            color: "var(--m-accent)",
                          }}
                        >
                          {lead.score}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-4 flex items-center justify-between rounded-lg p-3"
                    style={{ background: "var(--m-accent-light)" }}
                  >
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--m-accent)" }}
                    >
                      This week
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: "var(--m-accent)" }}
                    >
                      47 new leads
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THE FUNNEL */}
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg-secondary)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              The Funnel
            </span>
            <h2
              className="mb-12 text-xl font-bold sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              From blog visitor to qualified lead
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-2">
            {FUNNEL_STAGES.map((stage, i) => (
              <div key={stage.title} className="flex flex-1 items-stretch gap-2">
                <FadeIn delay={i * 0.08} className="flex-1">
                  <div
                    className="h-full rounded-2xl border p-5 transition-shadow hover:shadow-md"
                    style={{
                      background: "var(--m-bg)",
                      borderColor: "var(--m-border)",
                    }}
                  >
                    <p
                      className="mb-2 text-sm font-semibold"
                      style={{ color: "var(--m-text)" }}
                    >
                      {stage.title}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      {stage.desc}
                    </p>
                  </div>
                </FadeIn>
                {i < FUNNEL_STAGES.length - 1 && (
                  <div
                    className="hidden flex-shrink-0 items-center justify-center md:flex"
                    style={{ color: "var(--m-text-tertiary)" }}
                  >
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="py-12 sm:py-16 md:py-28" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              Why This Works
            </span>
            <h2
              className="mb-12 text-xl font-bold sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              Three principles that drive results
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {WHY_THIS_WORKS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} className="flex">
                <div
                  className="flex flex-col rounded-2xl border p-6 transition-shadow hover:shadow-md"
                  style={{
                    background: "var(--m-bg)",
                    borderColor: "var(--m-border)",
                  }}
                >
                  <p
                    className="mb-3 text-base font-semibold"
                    style={{ color: "var(--m-text)" }}
                  >
                    {item.title}
                  </p>
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

      {/* HOW MARKETING TEAMS USE THIS */}
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg-secondary)" }}
      >
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              How Marketing Teams Use This
            </span>
            <h2
              className="mb-12 text-xl font-bold sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              Four steps from embed to qualified lead
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {MARKETING_STEPS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div
                  className="flex gap-4 rounded-2xl border p-4 transition-shadow hover:shadow-md sm:gap-5 sm:p-6"
                  style={{
                    background: "var(--m-bg)",
                    borderColor: "var(--m-border)",
                  }}
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ background: "var(--m-accent)" }}
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
      <section className="py-12 sm:py-16 md:py-28" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              Before vs After
            </span>
            <h2
              className="mb-12 text-xl font-bold sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              The shift from gated content to interactive
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div
              className="overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--m-border)" }}
            >
              <div
                className="grid grid-cols-2 gap-px"
                style={{ background: "var(--m-border)" }}
              >
                <div
                  className="p-4 sm:p-5"
                  style={{ background: "var(--m-bg-secondary)" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--m-text-tertiary)" }}
                  >
                    Before
                  </p>
                </div>
                <div
                  className="p-4 sm:p-5"
                  style={{ background: "var(--m-bg-secondary)" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--m-text-tertiary)" }}
                  >
                    After
                  </p>
                </div>
              </div>
              {BEFORE_AFTER.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 gap-px"
                  style={{ background: "var(--m-border)" }}
                >
                  <div
                    className="p-4 sm:p-5"
                    style={{ background: "var(--m-bg)" }}
                  >
                    <p
                      className="text-sm leading-relaxed sm:text-base"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      {row[0]}
                    </p>
                  </div>
                  <div
                    className="p-4 sm:p-5"
                    style={{ background: "var(--m-bg)" }}
                  >
                    <p
                      className="text-sm font-medium leading-relaxed sm:text-base"
                      style={{ color: "var(--m-text)" }}
                    >
                      {row[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIAL-STYLE QUOTE */}
      <section
        className="py-12 sm:py-16 md:py-28"
        style={{ background: "var(--m-bg-secondary)" }}
      >
        <div className="mx-auto max-w-[800px] px-4 text-center sm:px-6">
          <FadeIn>
            <blockquote>
              <p
                className="mb-6 text-lg font-medium leading-relaxed sm:text-xl md:text-2xl"
                style={{ color: "var(--m-text)" }}
              >
                &ldquo;We embedded a challenge on our top blog post. In the first
                week, it generated more qualified leads than our gated whitepaper
                did in 3 months. And the leads actually knew our product.&rdquo;
              </p>
              <footer>
                <p
                  className="text-sm italic"
                  style={{ color: "var(--m-text-tertiary)" }}
                >
                  What our users are saying
                </p>
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection id="early-access" source="use-case-marketing" />
    </>
  );
}
