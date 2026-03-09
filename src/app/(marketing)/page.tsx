import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Link2, Sparkles, Share2, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "How Well You Know - Interactive Product Challenges for B2B SaaS",
  description:
    "Turn your product docs into 3-minute interactive challenges that onboard users, test product knowledge, and reveal feature-level gaps. 73% completion rate.",
  alternates: {
    canonical: "https://www.howwellyouknow.com",
  },
  openGraph: {
    title: "How Well You Know - Interactive Product Challenges for B2B SaaS",
    description:
      "Turn your product docs into 3-minute interactive challenges that onboard users, test product knowledge, and reveal feature-level gaps. 73% completion rate.",
    url: "https://www.howwellyouknow.com",
  },
  twitter: {
    title: "How Well You Know - Interactive Product Challenges for B2B SaaS",
    description:
      "Turn your product docs into 3-minute interactive challenges that onboard users, test product knowledge, and reveal feature-level gaps.",
  },
};
import LogoMarquee from "@/components/marketing/LogoMarquee";
import UseCaseShowcase from "@/components/marketing/UseCaseShowcase";
import { QUIZ_LIST } from "@/lib/quiz-directory";
import CTASection from "@/components/marketing/CTASection";
import HeroQuiz from "@/components/marketing/HeroQuiz";
import FadeIn from "@/components/marketing/FadeIn";

const STEPS = [
  {
    icon: Link2,
    title: "Paste your docs URL",
    desc: "Drop in any documentation page, help article, or product page. We pull out the key concepts automatically.",
  },
  {
    icon: Sparkles,
    title: "Your challenge gets created",
    desc: "15 questions across 6 rounds. Truth or Myth, This or That, Speed Round, and more. Review and edit before publishing.",
  },
  {
    icon: Share2,
    title: "Share or embed anywhere",
    desc: "Get a hosted link for emails and Slack, or embed directly in your docs site and onboarding flow.",
  },
  {
    icon: BarChart3,
    title: "See what they learned",
    desc: "Track scores, completion rates, and exactly which product features your users struggle with. Act on the data.",
  },
];

const COMPARISON_ROWS = [
  { label: "Setup time", docs: "Weeks", videos: "Days", webinars: "Hours (recurring)", lms: "Months", hwyk: "Minutes" },
  { label: "Completion rate", docs: "~12%", videos: "~30%", webinars: "~15%", lms: "~40%", hwyk: "73%+" },
  { label: "Teaches AND tests", docs: "No", videos: "No", webinars: "Sometimes", lms: "Yes", hwyk: "Yes" },
  { label: "Per-feature analytics", docs: "No", videos: "No", webinars: "No", lms: "Basic", hwyk: "Detailed" },
  { label: "Works in emails, docs, Slack", docs: "Partially", videos: "No", webinars: "No", lms: "No", hwyk: "Yes" },
  { label: "Estimated cost", docs: "$2-5K/mo (writers + tools)", videos: "$3-8K/mo (production + hosting)", webinars: "$2-6K/mo (host time + platform)", lms: "$10K+/year + setup", hwyk: "$199-449/mo" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--m-bg)" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 91, 255, 0.08), transparent)",
          }}
        />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 pb-10 pt-10 sm:gap-10 sm:px-6 sm:pb-14 sm:pt-14 md:flex-row md:items-center md:gap-12 md:pb-20 md:pt-20 lg:gap-16">
          <div className="flex-1" style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <h1
              className="mb-4 text-[2rem] font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl md:leading-[1.1] lg:text-[3.25rem]"
              style={{ color: "var(--m-text)", maxWidth: "520px" }}
            >
              Turn your product into <span style={{ color: "var(--m-accent)" }}>interactive learning experiences</span>
            </h1>
            <p
              className="mb-6 max-w-lg text-sm leading-relaxed md:text-base"
              style={{ color: "var(--m-text-secondary)" }}
            >
              Convert your product knowledge into 3-minute challenges that onboard users, communicate new features, engage communities, and reveal feature-level knowledge gaps.
            </p>
            <Link
              href="#early-access"
              className="inline-block rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02]"
              style={{ background: "var(--m-accent)" }}
            >
              Get Early Access
            </Link>
          </div>

          <div className="w-full flex-1" style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}>
            <HeroQuiz />
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <LogoMarquee />

      {/* THE PROBLEM - left-aligned text + right-aligned stats */}
      <section className="py-14 sm:py-18 md:py-24" style={{ background: "var(--m-bg-secondary)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Left: narrative */}
            <FadeIn className="flex-1">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--m-accent)" }}
              >
                The problem
              </p>
              <h2
                className="mb-4 text-2xl font-bold sm:text-3xl md:text-[2.5rem] md:leading-tight"
                style={{ color: "var(--m-text)" }}
              >
                The customer education problem nobody talks about
              </h2>
              <p
                className="mb-6 text-sm leading-relaxed sm:text-base"
                style={{ color: "var(--m-text-secondary)" }}
              >
                Your team writes docs. Your users skim the first paragraph and close the tab.
                Features sit unused. Support tickets pile up. Then they churn.
              </p>
              {/* Solution callout */}
              <div
                className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
                style={{ background: "var(--m-accent)" }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.12), transparent 60%)",
                  }}
                />
                <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <span className="text-5xl font-bold text-white sm:text-6xl" style={{ lineHeight: 1 }}>
                    73%
                  </span>
                  <div>
                    <p className="mb-1 text-base font-semibold text-white">
                      Completion rate on interactive micro-learning.
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                      When learning feels like a game, people finish it. 15 questions,
                      3 minutes, a shareable scorecard.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: stat blocks */}
            <FadeIn delay={0.15} className="md:w-[320px] md:shrink-0">
              <div className="grid grid-cols-3 gap-3 md:grid-cols-1 md:gap-4">
                {[
                  { value: "12%", label: "of users finish reading docs" },
                  { value: "50%+", label: "churn from poor product understanding" },
                  { value: "10hrs", label: "per week on onboarding calls" },
                ].map((s) => (
                  <div
                    key={s.value}
                    className="rounded-xl border px-4 py-4 sm:px-5 sm:py-5"
                    style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
                  >
                    <span
                      className="block text-xl font-bold tracking-tight sm:text-3xl"
                      style={{ color: "var(--m-text)" }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="mt-1 block text-[11px] leading-snug sm:text-sm"
                      style={{ color: "var(--m-text-tertiary)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 sm:py-20 md:py-28" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <p
              className="mb-3 text-center text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--m-accent)" }}
            >
              Use cases
            </p>
            <h2
              className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-[2.75rem] md:leading-tight"
              style={{ color: "var(--m-text)" }}
            >
              One product, five playbooks
            </h2>
            <p
              className="mx-auto mb-10 max-w-lg text-center text-sm leading-relaxed sm:mb-12 sm:text-base"
              style={{ color: "var(--m-text-secondary)" }}
            >
              Every team uses challenges differently. Pick your use case.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <UseCaseShowcase />
          </FadeIn>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20 md:py-28" style={{ background: "var(--m-bg-secondary)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--m-accent)" }}
            >
              How it works
            </p>
            <h2
              className="mb-3 text-2xl font-bold sm:text-3xl md:text-[2.5rem] md:leading-tight"
              style={{ color: "var(--m-text)" }}
            >
              From docs to interactive challenge in minutes
            </h2>
            <p
              className="mb-12 max-w-lg text-sm leading-relaxed sm:mb-14 sm:text-base"
              style={{ color: "var(--m-text-secondary)" }}
            >
              No content team needed. No months of setup. Just paste a URL.
            </p>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={i * 0.08}>
                  <div
                    className="flex h-full flex-col rounded-2xl border p-6 sm:p-7"
                    style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ background: "var(--m-accent-light)" }}
                      >
                        <Icon size={20} style={{ color: "var(--m-accent)" }} />
                      </div>
                      <span
                        className="text-sm font-bold"
                        style={{ color: "var(--m-accent)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className="mb-2 text-base font-bold sm:text-lg"
                      style={{ color: "var(--m-text)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE - Dark section */}
      <section className="py-14 sm:py-18 md:py-24" style={{ background: "#0A2540" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-lg">
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#635BFF" }}
                >
                  Why us
                </p>
                <h2
                  className="mb-3 text-xl font-bold sm:text-2xl md:text-[2.5rem] md:leading-tight"
                  style={{ color: "#FFFFFF" }}
                >
                  Not a quiz tool. Not an LMS. Something new.
                </h2>
                <p
                  className="text-sm sm:text-base"
                  style={{ color: "#8898AA" }}
                >
                  A traditional LMS costs $10,000/year and takes months to set up.
                  We deliver 80% of that value for a fraction of the cost, ready in minutes.
                </p>
              </div>
              <p className="text-xs md:hidden" style={{ color: "#8898AA" }}>
                Scroll to compare &rarr;
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="-webkit-overflow-scrolling-touch overflow-x-auto">
                <table className="w-full min-w-[640px] text-xs sm:min-w-[700px] sm:text-sm">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                      <th className="p-3 text-left font-medium" style={{ color: "#8898AA" }} />
                      <th className="p-3 text-center font-medium" style={{ color: "#8898AA" }}>Docs/Wiki</th>
                      <th className="p-3 text-center font-medium" style={{ color: "#8898AA" }}>Videos</th>
                      <th className="p-3 text-center font-medium" style={{ color: "#8898AA" }}>Webinars</th>
                      <th className="p-3 text-center font-medium" style={{ color: "#8898AA" }}>LMS</th>
                      <th
                        className="rounded-t-lg p-3 text-center font-bold"
                        style={{ background: "rgba(99, 91, 255, 0.15)", color: "#B4ADFF", borderLeft: "2px solid #635BFF" }}
                      >
                        How Well You Know
                        <span
                          className="mt-1 block text-[10px] font-medium uppercase tracking-wider"
                          style={{ color: "#9B93FF" }}
                        >
                          You are here
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, i) => (
                      <tr
                        key={row.label}
                        style={{
                          borderTop: "1px solid rgba(255,255,255,0.08)",
                          background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                        }}
                      >
                        <td className="p-3 font-medium" style={{ color: "#E6EBF1" }}>
                          {row.label}
                        </td>
                        <td className="p-3 text-center" style={{ color: "#ADBDCC" }}>{row.docs}</td>
                        <td className="p-3 text-center" style={{ color: "#ADBDCC" }}>{row.videos}</td>
                        <td className="p-3 text-center" style={{ color: "#ADBDCC" }}>{row.webinars}</td>
                        <td className="p-3 text-center" style={{ color: "#ADBDCC" }}>{row.lms}</td>
                        <td
                          className="p-3 text-center text-base font-bold"
                          style={{ background: "rgba(99, 91, 255, 0.08)", color: "#B4ADFF", borderLeft: "2px solid #635BFF" }}
                        >
                          {row.hwyk}
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

      {/* SEE IT IN ACTION - demo challenges as proof */}
      <section className="py-14 sm:py-18 md:py-24" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
            <FadeIn className="md:w-[340px] md:shrink-0">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--m-accent)" }}
              >
                See it in action
              </p>
              <h2
                className="mb-3 text-2xl font-bold md:text-[2rem] md:leading-tight"
                style={{ color: "var(--m-text)" }}
              >
                Pick a tool. See how much you really know.
              </h2>
              <p
                className="mb-5 text-sm leading-relaxed sm:text-[15px]"
                style={{ color: "var(--m-text-secondary)" }}
              >
                These are real challenges we built from public docs. Each one takes 3 minutes. No signup required.
              </p>
              <Link
                href="/play"
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: "var(--m-accent)" }}
              >
                See all {QUIZ_LIST.length} challenges &rarr;
              </Link>
            </FadeIn>
            <FadeIn delay={0.1} className="flex-1">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {QUIZ_LIST.slice(0, 8).map((quiz) => (
                  <Link
                    key={quiz.slug}
                    href={`/play/${quiz.slug}`}
                    className="group flex flex-col items-center gap-2.5 rounded-xl border p-4 transition-all hover:shadow-md sm:p-5"
                    style={{ borderColor: "var(--m-border)", background: "var(--m-bg)" }}
                  >
                    <Image
                      src={`/logos/${quiz.logoFile}`}
                      alt={quiz.toolName}
                      width={36}
                      height={36}
                      className="rounded-lg transition-transform group-hover:scale-110"
                      style={{ objectFit: "contain" }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--m-text)" }}
                    >
                      {quiz.toolName}
                    </span>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection id="early-access" source="homepage" />

      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "How Well You Know",
            url: "https://www.howwellyouknow.com",
            logo: "https://www.howwellyouknow.com/logos/hwyk-logo.svg",
            description:
              "Turn your product docs into 3-minute interactive challenges. Your customers learn your product. You see what they don't understand.",
            contactPoint: {
              "@type": "ContactPoint",
              email: "hello@howwellyouknow.com",
              contactType: "customer support",
            },
            sameAs: [],
          }),
        }}
      />
      {/* JSON-LD: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "How Well You Know",
            description:
              "Interactive product challenges for B2B SaaS customer education. Turn docs into 3-minute challenges with 6 game rounds and shareable scorecards.",
            url: "https://www.howwellyouknow.com",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "0",
              highPrice: "449",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </>
  );
}
