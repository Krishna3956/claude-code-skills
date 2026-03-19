import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";
import HomeUseCaseTabs from "@/components/marketing/HomeUseCaseTabs";
import { COMPANY_HIGHLIGHTS, HOME_TAB_CASES, PRICING_TIERS, getChallengeEntries } from "@/lib/marketing-data";

export const metadata: Metadata = {
  title: "How Well You Know",
  description:
    "Turn your product documentation into a 3-minute interactive challenge with scorecards and knowledge-gap analytics.",
};

const FLOW_STEPS = [
  {
    title: "Docs URL in",
    copy: "Paste the docs page, feature page, or onboarding guide that users keep skimming.",
  },
  {
    title: "Challenge generated",
    copy: "We create a 15-question challenge across Truth or Myth, This or That, Quick Pick, Odd One Out, and Speed Round.",
  },
  {
    title: "Shared in email or Slack",
    copy: "Launch it in onboarding, feature launches, community campaigns, and documentation checkpoints.",
  },
  {
    title: "Radar chart scorecard",
    copy: "Players finish with a score they can share publicly and your team can use as a better conversation starter.",
  },
  {
    title: "Analytics dashboard",
    copy: "See completion rate, weak concepts, and feature-level gaps that explain slow activation or low adoption.",
  },
];

const COMPARISON_ROWS = [
  ["Completion rate", "12%", "18%", "28%", "54%"],
  ["Time to create", "Weeks", "Days", "Hours", "A few days with your docs"],
  ["Teaches and tests", "No", "Partially", "Sometimes", "Yes"],
  ["Feature-level insight", "No", "No", "No", "Yes"],
  ["Works in email, docs, Slack", "Partially", "No", "No", "Yes"],
];

export default function HomePage() {
  const challenges = getChallengeEntries();
  const featuredWall = challenges.slice(0, 60);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--mk-border)] bg-white">
        <div className="pointer-events-none absolute inset-0 marketing-grid opacity-35" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(110,231,200,0.18),transparent_33%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-18 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-24">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">Product education for B2B SaaS</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-[var(--mk-text)] sm:text-5xl lg:text-7xl">
              Your users don&apos;t read docs. They play challenges.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--mk-text-soft)]">
              Turn your product documentation into a 3-minute interactive challenge. 54% completion rate. Shareable scorecards. Knowledge gap analytics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/play/notion" className="rounded-2xl px-5 py-3 text-sm font-semibold marketing-button-primary">
                See a live example
              </Link>
              <Link href="#early-access" className="rounded-2xl px-5 py-3 text-sm font-semibold marketing-button-secondary">
                Get Early Access
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: "54%", label: "challenge completion rate" },
                { value: "5,000+", label: "plays in the first two weeks" },
                { value: "110+", label: "challenges already built" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-[18px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] px-5 py-5">
                  <p className="text-3xl font-semibold text-[var(--mk-text)]">{metric.value}</p>
                  <p className="mt-2 text-sm text-[var(--mk-text-muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="overflow-hidden rounded-[22px] border border-[var(--mk-border)] bg-white shadow-[0_28px_80px_rgba(21,32,24,0.08)]">
              <div className="flex items-center justify-between border-b border-[var(--mk-border)] px-6 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">Live challenge demo</p>
                  <p className="mt-1 text-sm text-[var(--mk-text-soft)]">Embedded product education, not a screenshot</p>
                </div>
                <span className="rounded-full bg-[var(--mk-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-accent)]">
                  Notion challenge
                </span>
              </div>
              <div className="h-[560px] bg-[#05070b]">
                <iframe
                  src="/play/notion?embed=true"
                  className="h-full w-full"
                  title="How Well You Know live embedded challenge demo"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-[var(--mk-border)] bg-[var(--mk-bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">
            5,000+ plays across 110+ demo challenges built for products like {COMPANY_HIGHLIGHTS.join(", ")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="marketing-kicker text-xs font-semibold uppercase">The customer education problem</p>
          <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">The customer education problem nobody talks about</h2>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            { value: "12%", label: "of users finish reading docs" },
            { value: "50%+", label: "churn tied to poor product understanding" },
            { value: "10 hrs/week", label: "lost to repetitive onboarding calls" },
          ].map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05}>
              <div className="rounded-[18px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] px-6 py-7">
                <p className="text-4xl font-semibold text-[var(--mk-text)]">{item.value}</p>
                <p className="mt-3 text-base leading-8 text-[var(--mk-text-soft)]">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-8 text-xl leading-9 text-[var(--mk-text-soft)]">
          You&apos;re creating content. Your users aren&apos;t consuming it. That&apos;s the gap.
        </p>
      </section>

      <section className="border-y border-[var(--mk-border)] bg-[var(--mk-bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">Solution flow</p>
            <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">A product workflow, not a hand-wavy diagram</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--mk-text-soft)]">
              The product takes your existing content and turns it into a repeatable education loop your team can launch, measure, and improve.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {FLOW_STEPS.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.04}>
                <div className="h-full rounded-[18px] border border-[var(--mk-border)] bg-white p-5 shadow-[0_10px_30px_rgba(21,32,24,0.04)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--mk-accent-soft)] text-sm font-semibold text-[var(--mk-accent)]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-xl text-[var(--mk-text)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--mk-text-soft)]">{step.copy}</p>
                  <div className="mt-6 rounded-[16px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] p-4">
                    <div className="space-y-2">
                      <div className="h-2 w-16 rounded-full bg-[var(--mk-text-muted)]/30" />
                      <div className="h-2 w-full rounded-full bg-[var(--mk-border)]" />
                      <div className="h-2 w-4/5 rounded-full bg-[var(--mk-border)]" />
                      <div className="h-14 rounded-2xl bg-[var(--mk-bg-strong)]" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="marketing-kicker text-xs font-semibold uppercase">Challenges we&apos;ve built</p>
          <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">A massive logo wall makes the product feel as established as it is.</h2>
        </FadeIn>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {featuredWall.map((company, index) => (
            <FadeIn key={company.slug} delay={(index % 10) * 0.02}>
              <Link
                href={company.href}
                className="flex min-h-[100px] items-center gap-4 rounded-[18px] border border-[var(--mk-border)] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(21,32,24,0.04)] transition hover:border-[var(--mk-border-strong)]"
              >
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[var(--mk-border)] bg-[var(--mk-bg-strong)]">
                  {company.logoPath ? (
                    <Image src={company.logoPath} alt={company.name} width={40} height={40} className="h-9 w-9 object-contain" />
                  ) : (
                    <span className="text-sm font-semibold text-[var(--mk-accent)]">{company.name.slice(0, 2).toUpperCase()}</span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--mk-text)]">{company.name}</p>
                  <p className="text-sm text-[var(--mk-text-muted)]">Live challenge available</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/customers" className="text-sm font-semibold text-[var(--mk-accent)]">
            See all {challenges.length}+ challenge builds
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="marketing-kicker text-xs font-semibold uppercase">Use cases</p>
          <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">Three ways teams use HWYK right now</h2>
        </FadeIn>
        <div className="mt-10">
          <HomeUseCaseTabs cases={HOME_TAB_CASES} />
        </div>
      </section>

      <section className="border-y border-[var(--mk-border)] bg-[var(--mk-bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">Comparison</p>
            <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">Docs and videos explain. Challenges explain and verify.</h2>
          </FadeIn>
          <div className="mt-10 overflow-hidden rounded-[20px] border border-[var(--mk-border)] bg-white">
            <div className="grid grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] gap-px bg-[var(--mk-border)] text-sm">
              {["Approach", "Docs", "Webinars", "LMS", "HWYK"].map((cell, index) => (
                <div
                  key={cell}
                  className={`bg-[var(--mk-bg-soft)] px-4 py-4 font-semibold ${index === 4 ? "text-[var(--mk-accent)]" : "text-[var(--mk-text)]"}`}
                >
                  {cell}
                </div>
              ))}
              {COMPARISON_ROWS.flatMap((row) =>
                row.map((cell, index) => (
                  <div
                    key={`${row[0]}-${cell}-${index}`}
                    className={`px-4 py-4 ${index === 4 ? "bg-[var(--mk-accent-soft)] text-[var(--mk-text)]" : "bg-[var(--mk-bg-card)] text-[var(--mk-text-soft)]"}`}
                  >
                    {cell}
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="marketing-kicker text-xs font-semibold uppercase">Pricing</p>
          <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">Pricing built for serious rollout, not hobby traffic.</h2>
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div key={tier.name} className="relative rounded-[20px] border border-[var(--mk-border)] bg-white p-7 shadow-[0_10px_30px_rgba(21,32,24,0.04)]">
              {tier.badge ? (
                <span className="absolute right-6 top-6 rounded-full bg-[var(--mk-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-accent)]">
                  {tier.badge}
                </span>
              ) : null}
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">{tier.name}</p>
              <div className="mt-5 flex items-end gap-1">
                <p className="text-5xl font-semibold text-[var(--mk-text)]">{tier.price}</p>
                <p className="pb-1 text-lg text-[var(--mk-text-muted)]">{tier.cadence}</p>
              </div>
              <p className="mt-4 text-base leading-8 text-[var(--mk-text-soft)]">{tier.description}</p>
              <div className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm text-[var(--mk-text-soft)]">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--mk-accent)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection id="early-access" source="homepage" />
    </>
  );
}
