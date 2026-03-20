import type { Metadata } from "next";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We're building the fastest way to teach product knowledge. 25+ interactive challenges, 6,000+ players in week one, and a 73% average completion rate.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/about",
  },
  openGraph: {
    title: "About How Well You Know",
    description:
      "We're building the fastest way to teach product knowledge. 25+ interactive challenges, 6,000+ players in week one, and a 73% average completion rate.",
    url: "https://www.howwellyouknow.com/about",
  },
  twitter: {
    title: "About How Well You Know",
    description:
      "We're building the fastest way to teach product knowledge. 25+ interactive challenges, 6,000+ players, 73% completion rate.",
  },
};

const MILESTONES = [
  { metric: "25+", label: "Challenges live" },
  { metric: "6,000+", label: "Players in week one" },
  { metric: "73%", label: "Average completion rate" },
  { metric: "3 min", label: "Average play time" },
];

export default function AboutPage() {
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
        <div className="relative mx-auto max-w-[800px] px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 md:pb-20 md:pt-20">
          <FadeIn>
            <p
              className="mb-3 text-center text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--m-accent)" }}
            >
              Our story
            </p>
            <h1
              className="mb-5 text-center text-2xl font-bold leading-tight sm:text-3xl md:text-[2.75rem] md:leading-[1.15]"
              style={{ color: "var(--m-text)" }}
            >
              We&apos;re building the fastest way to{" "}
              <span style={{ color: "var(--m-accent)" }}>teach product knowledge</span>
            </h1>
            <p
              className="mx-auto max-w-[600px] text-center text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--m-text-secondary)" }}
            >
              Your users don&apos;t read docs. They skim, close the tab, and churn.
              We turn documentation into 3-minute interactive challenges that actually stick.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* METRICS */}
      <FadeIn>
        <section
          className="border-b border-t py-8 sm:py-10"
          style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
        >
          <div className="mx-auto grid max-w-[800px] grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4">
            {MILESTONES.map((m) => (
              <div key={m.label} className="text-center">
                <p
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: "var(--m-accent)" }}
                >
                  {m.metric}
                </p>
                <p
                  className="mt-1 text-xs sm:text-sm"
                  style={{ color: "var(--m-text-tertiary)" }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* STORY */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[680px] px-4 sm:px-6">
          <FadeIn>
            <div
              className="flex flex-col gap-6 text-base leading-[1.75]"
              style={{ color: "var(--m-text-secondary)" }}
            >
              <p>
                How Well You Know started with an experiment. We built an interactive challenge about
                Claude Code and posted it in a developer community.{" "}
                <strong style={{ color: "var(--m-text)" }}>6,000+ people played it in the first week.</strong>
              </p>
              <p>
                Not a huge number. But think about what it means: people voluntarily spent 3 minutes learning
                about a developer tool through a game. Nobody made them. They chose to. Compare that to the
                average docs page, where only 12% of readers make it to the end.
              </p>
              <p>
                That gap is what we&apos;re building for. B2B software companies spend months writing documentation
                that nobody finishes. Enterprise LMS platforms cost $10,000+ per year and take
                months to deploy. On the other end, there&apos;s nothing. Just docs, videos, and webinars.
              </p>
              <div
                className="my-2 rounded-xl border-l-4 py-4 pl-5 pr-4"
                style={{ borderColor: "var(--m-accent)", background: "var(--m-accent-light)" }}
              >
                <p className="text-sm font-medium italic" style={{ color: "var(--m-text)" }}>
                  &ldquo;Paste a docs URL, get an interactive challenge in minutes. Your users learn
                  through 5 question formats across 6 rounds. They get a shareable scorecard. You get
                  data on exactly which features they understand and which they don&apos;t.&rdquo;
                </p>
              </div>
              <p>
                Since that first experiment, we&apos;ve built 25+ interactive challenges covering tools like ChatGPT,
                Figma, Notion, Cursor, Slack, Docker, and more. We&apos;re now opening the platform so any B2B SaaS
                team can create challenges for their own product.
              </p>
              <p>
                We&apos;re building this for customer success teams, DevRel teams, and anyone who&apos;s tired of hearing
                &quot;I didn&apos;t know your product could do that&quot; from users who&apos;ve been paying for months.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection id="early-access" source="about" />

      {/* JSON-LD: AboutPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About How Well You Know",
            description:
              "We're building the fastest way to teach product knowledge. 25+ interactive challenges, 6,000+ players, 73% completion rate.",
            url: "https://www.howwellyouknow.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "How Well You Know",
              url: "https://www.howwellyouknow.com",
            },
          }),
        }}
      />
    </>
  );
}
