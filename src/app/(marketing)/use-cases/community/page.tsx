import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";
import {
  MessageCircle,
  Trophy,
  Share2,
  Users,
  UserRound,
  Zap,
  TrendingUp,
  Sparkles,
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community Engagement Challenges",
  description:
    "Give your Slack, Discord, or community something to talk about. Interactive product challenges that drive engagement and spark conversations.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/use-cases/community",
  },
  openGraph: {
    title: "Community Engagement Challenges - How Well You Know",
    description:
      "Give your Slack, Discord, or community something to talk about. Interactive product challenges that drive engagement.",
    url: "https://www.howwellyouknow.com/use-cases/community",
  },
  twitter: {
    title: "Community Engagement Challenges - How Well You Know",
    description:
      "Give your Slack, Discord, or community something to talk about. Interactive product challenges that drive engagement.",
  },
};

const stats = [
  {
    value: "47%",
    label: "average engagement rate on challenge posts",
    icon: MessageCircle,
  },
  {
    value: "3.2x",
    label: "more replies than standard engagement posts",
    icon: TrendingUp,
  },
  {
    value: "28%",
    label: "of players share their scorecard",
    icon: Share2,
  },
  {
    value: "15 min",
    label: "average thread lifespan per challenge",
    icon: Zap,
  },
];

const exampleScenarios = [
  {
    title: "Friday Challenge",
    icon: Trophy,
    description:
      "Drop a 'How well do you know [Product]?' challenge every Friday. Community members compete for high scores and bragging rights. One post generates 30+ replies.",
  },
  {
    title: "New Feature Launch",
    icon: Sparkles,
    description:
      "Release a new feature? Create a challenge that teaches it. Users learn the feature while competing. Better than a changelog nobody reads.",
  },
  {
    title: "Champion Program",
    icon: Users,
    description:
      "Top scorers become product champions. Identify your most knowledgeable users and invite them to beta programs, advisory boards, or ambassador roles.",
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "Post in channel",
    description:
      "Share the challenge link in Slack, Discord, or your community forum. Add your personal score to spark competition.",
  },
  {
    step: 2,
    title: "Users compete",
    description:
      "Members play the challenge, share scores, and debate answers. The competitive format drives organic engagement without moderation.",
  },
  {
    step: 3,
    title: "Scores get shared",
    description:
      "Players share their scorecards on social media, tagging friends and driving new members to your community.",
  },
  {
    step: 4,
    title: "Community grows",
    description:
      "Track which topics generate the most engagement. Create follow-up challenges on popular themes. Rinse and repeat.",
  },
];

const beforeAfterRows = [
  {
    before: '"Share your setup" posts',
    after: "Interactive challenges with scores",
  },
  {
    before: "10 emoji reactions",
    after: "30+ replies and debates",
  },
  {
    before: "Same 5 people engaging",
    after: "Lurkers become active participants",
  },
  {
    before: "No way to measure engagement quality",
    after: "Per-user knowledge scores",
  },
  {
    before: "Content ideas dry up",
    after: "Fresh challenges auto-generated from your docs",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* 1. HERO */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 md:py-32"
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
                Community Engagement
              </span>
              <h1
                className="mb-6 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ color: "var(--m-text)", lineHeight: "1.1" }}
              >
                Give your community something to talk about
              </h1>
              <p
                className="mb-6 text-base leading-relaxed sm:mb-8 sm:text-lg"
                style={{ color: "var(--m-text-secondary)" }}
              >
                Drop interactive challenges in Slack, Discord, or your forum.
                &quot;How well do you know [Product]?&quot; is the post that turns
                quiet channels into buzzing conversations. Scores, debates, and
                bragging rights included.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="#early-access"
                  className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02]"
                  style={{
                    background: "var(--m-accent)",
                    color: "#FFFFFF",
                  }}
                >
                  Get Early Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/play/slack"
                  className="inline-flex items-center gap-2 rounded-lg border px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]"
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

      {/* 2. STATS STRIP */}
      <section
        className="py-8 sm:py-10 md:py-12"
        style={{ background: "var(--m-accent)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                  style={{ color: "#FFFFFF" }}
                >
                  <stat.icon className="mb-2 h-6 w-6 opacity-90 sm:mb-3 sm:h-7 sm:w-7" />
                  <span className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-medium opacity-90 sm:mt-2 sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. PROBLEM / SOLUTION */}
      <section
        className="py-16 sm:py-20 md:py-28"
        style={{ background: "var(--m-bg)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Block 1: Problem */}
          <FadeIn>
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              The Problem
            </span>
            <div className="mb-12 flex flex-col items-center gap-10 sm:mb-16 md:mb-20 md:flex-row md:gap-16">
              <div className="flex-1">
                <h2
                  className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl"
                  style={{ color: "var(--m-text)" }}
                >
                  Community channels go quiet
                </h2>
                <p
                  className="mb-3 text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  The same old &quot;share your setup&quot; and &quot;what&apos;s
                  your favorite feature?&quot; posts only work so many times.
                  Engagement posts get stale. Your community manager runs out of
                  fresh ideas. Engagement metrics are declining. More emoji
                  reactions than real conversations.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  You need content that sparks debate, competition, and genuine
                  back-and-forth, not just thumbs up.
                </p>
              </div>
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
                      className="h-5 w-5 rounded"
                      style={{ background: "#611F69" }}
                    />
                    <span
                      className="text-sm font-bold"
                      style={{ color: "var(--m-text)" }}
                    >
                      #general
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2.5">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm"
                        style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
                      >
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs">
                          <span
                            className="font-bold"
                            style={{ color: "var(--m-text)" }}
                          >
                            Community Manager
                          </span>
                          <span
                            className="ml-2"
                            style={{ color: "var(--m-text-tertiary)" }}
                          >
                            2:34 PM
                          </span>
                        </p>
                        <p
                          className="mt-0.5 text-sm"
                          style={{ color: "var(--m-text-secondary)" }}
                        >
                          Friday challenge! How well do you know [Product]? My
                          score: 78%. Beat me.
                        </p>
                        <div
                          className="mt-1.5 inline-block rounded-lg px-3 py-1.5 text-xs font-medium"
                          style={{
                            background: "var(--m-accent)",
                            color: "white",
                          }}
                        >
                          Play the Challenge
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm"
                        style={{ background: "#22C55E", color: "#FFFFFF" }}
                      >
                        <UserRound className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs">
                          <span
                            className="font-bold"
                            style={{ color: "var(--m-text)" }}
                          >
                            Sarah K.
                          </span>
                          <span
                            className="ml-2"
                            style={{ color: "var(--m-text-tertiary)" }}
                          >
                            2:41 PM
                          </span>
                        </p>
                        <p
                          className="mt-0.5 text-sm"
                          style={{ color: "var(--m-text-secondary)" }}
                        >
                          82%! Didn&apos;t know about the Workflows feature
                          though
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm"
                        style={{ background: "#F59E0B", color: "#FFFFFF" }}
                      >
                        <UserRound className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs">
                          <span
                            className="font-bold"
                            style={{ color: "var(--m-text)" }}
                          >
                            Mike R.
                          </span>
                          <span
                            className="ml-2"
                            style={{ color: "var(--m-text-tertiary)" }}
                          >
                            2:43 PM
                          </span>
                        </p>
                        <p
                          className="mt-0.5 text-sm"
                          style={{ color: "var(--m-text-secondary)" }}
                        >
                          91%! The Speed Round got me though
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex gap-2 border-t pt-2"
                      style={{ borderColor: "var(--m-border)" }}
                    >
                      {["fire", "100", "eyes"].map((emoji) => (
                        <span
                          key={emoji}
                          className="rounded-full px-2 py-0.5 text-xs"
                          style={{
                            background: "var(--m-bg-secondary)",
                            border: "1px solid var(--m-border)",
                            color: "var(--m-text-secondary)",
                          }}
                        >
                          {emoji === "fire"
                            ? "\uD83D\uDD25 12"
                            : emoji === "100"
                              ? "\uD83D\uDCAF 8"
                              : "\uD83D\uDC40 5"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Block 2: Solution */}
          <FadeIn>
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              The Solution
            </span>
            <div className="flex flex-col items-center gap-10 md:flex-row-reverse md:gap-16">
              <div className="flex-1">
                <h2
                  className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl"
                  style={{ color: "var(--m-text)" }}
                >
                  Interactive challenges that create natural competition
                </h2>
                <p
                  className="mb-3 text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  Post an interactive challenge. Users compete for high scores,
                  share their results, debate answers in the thread, and tag
                  friends to beat their score. One post generates dozens of
                  replies, keeps your community active for days, and surfaces
                  your most knowledgeable users.
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  The competitive format drives organic engagement without heavy
                  moderation. People want to play, share, and one-up each other.
                </p>
              </div>
              <div className="flex-1">
                <div
                  className="rounded-2xl p-6 shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #0A2540 0%, #0D3055 100%)",
                  }}
                >
                  <p
                    className="mb-4 text-center text-xs uppercase tracking-widest"
                    style={{ color: "#8898AA" }}
                  >
                    Leaderboard
                  </p>
                  <div className="space-y-2">
                    {[
                      { rank: 1, name: "Mike R.", score: 91, badge: "\uD83E\uDD47" },
                      {
                        rank: 2,
                        name: "Sarah K.",
                        score: 82,
                        badge: "\uD83E\uDD48",
                      },
                      {
                        rank: 3,
                        name: "Community Mgr",
                        score: 78,
                        badge: "\uD83E\uDD49",
                      },
                      { rank: 4, name: "Alex T.", score: 71, badge: "" },
                      { rank: 5, name: "Jordan P.", score: 65, badge: "" },
                    ].map((player) => (
                      <div
                        key={player.rank}
                        className="flex items-center gap-3 rounded-lg px-3 py-2"
                        style={{
                          background:
                            player.rank === 1
                              ? "rgba(99, 91, 255, 0.15)"
                              : "rgba(255,255,255,0.03)",
                        }}
                      >
                        <span
                          className="w-6 text-center text-sm"
                          style={{ color: "#8898AA" }}
                        >
                          {player.badge || player.rank}
                        </span>
                        <span
                          className="flex-1 text-sm"
                          style={{ color: "#FFFFFF" }}
                        >
                          {player.name}
                        </span>
                        <span
                          className="text-sm font-bold"
                          style={{
                            color:
                              player.rank === 1 ? "#B4ADFF" : "#8898AA",
                          }}
                        >
                          {player.score}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. WHAT THIS LOOKS LIKE IN PRACTICE */}
      <section
        className="py-16 sm:py-20 md:py-28"
        style={{ background: "var(--m-bg-secondary)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              Real-World Use Cases
            </span>
            <h2
              className="mb-10 text-xl font-bold sm:mb-12 sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              What this looks like in practice
            </h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {exampleScenarios.map((scenario, i) => (
              <FadeIn key={scenario.title} delay={i * 0.08}>
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 transition-shadow hover:shadow-md"
                  style={{
                    background: "var(--m-bg)",
                    borderColor: "var(--m-border)",
                  }}
                >
                  <div
                    className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "var(--m-accent-light)",
                      color: "var(--m-accent)",
                    }}
                  >
                    <scenario.icon className="h-5 w-5" />
                  </div>
                  <h3
                    className="mb-2 text-lg font-bold"
                    style={{ color: "var(--m-text)" }}
                  >
                    {scenario.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--m-text-secondary)" }}
                  >
                    {scenario.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW COMMUNITY TEAMS USE THIS */}
      <section
        className="py-16 sm:py-20 md:py-28"
        style={{ background: "var(--m-bg)" }}
      >
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              Workflow
            </span>
            <h2
              className="mb-10 text-xl font-bold sm:mb-12 sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              How community teams use this
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {workflowSteps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div
                  className="flex gap-4 rounded-2xl border p-5 transition-shadow hover:shadow-md sm:gap-5 sm:p-6"
                  style={{
                    background: "var(--m-bg-secondary)",
                    borderColor: "var(--m-border-subtle)",
                  }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-base font-bold"
                    style={{
                      background: "var(--m-accent)",
                      color: "white",
                    }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <p
                      className="text-base font-semibold sm:text-lg"
                      style={{ color: "var(--m-text)" }}
                    >
                      {s.title}
                    </p>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      {s.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEFORE vs AFTER */}
      <section
        className="py-16 sm:py-20 md:py-28"
        style={{ background: "var(--m-bg-secondary)" }}
      >
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <FadeIn>
            <span
              className="mb-2 block text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--m-accent)" }}
            >
              The Shift
            </span>
            <h2
              className="mb-10 text-xl font-bold sm:mb-12 sm:text-2xl md:text-3xl"
              style={{ color: "var(--m-text)" }}
            >
              Before vs after
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="overflow-hidden rounded-2xl border"
              style={{
                background: "var(--m-bg)",
                borderColor: "var(--m-border)",
              }}
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-left">
                  <thead>
                    <tr
                      style={{
                        background: "var(--m-bg-secondary)",
                        borderBottom: "1px solid var(--m-border)",
                      }}
                    >
                      <th
                        className="px-6 py-4 text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "var(--m-text-tertiary)" }}
                      >
                        Before
                      </th>
                      <th
                        className="px-6 py-4 text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "var(--m-text-tertiary)" }}
                      >
                        After
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {beforeAfterRows.map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom:
                            i < beforeAfterRows.length - 1
                              ? "1px solid var(--m-border-subtle)"
                              : "none",
                        }}
                      >
                        <td
                          className="px-6 py-4 text-sm"
                          style={{ color: "var(--m-text-secondary)" }}
                        >
                          <span
                            className="mr-2 inline-block text-lg opacity-50"
                            style={{ color: "var(--m-text-tertiary)" }}
                          >
                            ✕
                          </span>
                          {row.before}
                        </td>
                        <td
                          className="px-6 py-4 text-sm"
                          style={{ color: "var(--m-text)" }}
                        >
                          <Check
                            className="mr-2 inline-block h-4 w-4 shrink-0 align-middle"
                            style={{ color: "var(--m-accent)" }}
                          />
                          {row.after}
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

      {/* 7. TESTIMONIAL-STYLE QUOTE */}
      <section
        className="py-16 sm:py-20 md:py-28"
        style={{ background: "var(--m-bg)" }}
      >
        <div className="mx-auto max-w-[800px] px-4 text-center sm:px-6">
          <FadeIn>
            <div
              className="relative rounded-2xl border px-6 py-10 sm:px-12 sm:py-14"
              style={{
                background: "var(--m-bg-secondary)",
                borderColor: "var(--m-border-subtle)",
              }}
            >
              <span
                className="absolute left-8 top-6 text-5xl opacity-20"
                style={{ color: "var(--m-accent)" }}
              >
                &ldquo;
              </span>
              <blockquote
                className="text-lg font-medium leading-relaxed sm:text-xl md:text-2xl"
                style={{ color: "var(--m-text)" }}
              >
                We posted our first challenge on a Friday afternoon. By Monday,
                it had more replies than any post in the last 3 months. People
                were tagging friends, debating answers, and sharing scores
                everywhere.
              </blockquote>
              <footer
                className="mt-6 text-sm"
                style={{ color: "var(--m-text-tertiary)" }}
              >
                What our users are saying
              </footer>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection id="early-access" source="use-case-community" />
    </>
  );
}
