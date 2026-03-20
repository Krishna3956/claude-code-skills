import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Zap,
  Target,
  BarChart3,
  Palette,
  Code,
  Link2,
  Sparkles,
  Share2,
  LayoutDashboard,
  Trophy,
  ChartNoAxesCombined,
  Settings,
  Search,
  Bell,
  Pencil,
  Eye,
  Share as ShareIcon,
} from "lucide-react";
import FadeIn from "@/components/marketing/FadeIn";
import CTASection from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Paste your docs URL and get 15 interactive questions across 6 game rounds in minutes. Truth or Myth, Speed Round, Odd One Out, and more. Share or embed anywhere.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/how-it-works",
  },
  openGraph: {
    title: "How It Works - How Well You Know",
    description:
      "Paste your docs URL and get 15 interactive questions across 6 game rounds in minutes. Share or embed anywhere. See what your users learned.",
    url: "https://www.howwellyouknow.com/how-it-works",
  },
  twitter: {
    title: "How It Works - How Well You Know",
    description:
      "Paste your docs URL and get 15 interactive questions across 6 game rounds in minutes. Share or embed anywhere.",
  },
};

const CHALLENGE_TYPES = [
  {
    name: "Truth or Myth",
    desc: "A bold claim about your product. Is it real or made up?",
    example: '"Smart Assign requires you to manually check calendars."',
    answer: "Myth",
  },
  {
    name: "This or That",
    desc: "Two features, one scenario. Which one solves the problem?",
    example: '"To auto-notify a reviewer when a task moves to Review..."',
    answer: "Workflows",
  },
  {
    name: "Quick Pick",
    desc: "Four options, one correct answer. Classic knowledge check.",
    example: '"What feature auto-assigns tasks based on availability?"',
    answer: "Smart Assign",
  },
  {
    name: "Odd One Out",
    desc: "Three real features and one fake. Spot the impostor.",
    example: '"Which of these is NOT a real feature?"',
    answer: "Auto-Deploy",
  },
  {
    name: "Speed Round",
    desc: "8 seconds per question. Tests recall under pressure.",
    example: "8 rapid-fire questions with a countdown timer.",
    answer: "Beat the clock",
  },
];

const STEPS = [
  {
    icon: Link2,
    title: "Paste your docs URL",
    desc: "Drop in any documentation page, help article, or product page. We extract the key concepts your users need to know.",
  },
  {
    icon: Sparkles,
    title: "We build the challenge",
    desc: "15 questions across 5 different formats. Truth or Myth, This or That, Speed Round, and more. Review every card and edit before publishing.",
  },
  {
    icon: Share2,
    title: "Share or embed anywhere",
    desc: "Get a hosted link for emails and Slack, or embed directly in your docs site, onboarding flow, or landing page with a simple iframe.",
  },
  {
    icon: BarChart3,
    title: "See what they learned",
    desc: "Track scores, completion rates, and exactly which product features your users struggle with. Act on the data to improve onboarding.",
  },
];

const FEATURES = [
  {
    icon: Zap,
    title: "Auto-generated content",
    desc: "Paste a docs URL. We read it and generate 15 questions across multiple formats. You review and publish. Most challenges are ready in under 10 minutes.",
  },
  {
    icon: Target,
    title: "Per-question analytics",
    desc: "See which questions users get wrong most often. That tells you which product features need better education. No surveys, no guessing.",
  },
  {
    icon: BarChart3,
    title: "Completion tracking",
    desc: "Know how many users start vs. finish. Track drop-off points. See average time to complete and score distribution across all players.",
  },
  {
    icon: Shield,
    title: "Knowledge gap reports",
    desc: "'68% of your users don't understand Feature X.' Actionable data your CS team can use to create targeted follow-up content.",
  },
  {
    icon: Palette,
    title: "Branded experience",
    desc: "Your logo, your colors, your fonts. The challenge looks like you built it. Players see your brand, not ours.",
  },
  {
    icon: Code,
    title: "Embed anywhere",
    desc: "Hosted page, iframe embed, or link in emails. Works in onboarding sequences, help centers, community channels, blog posts, and landing pages.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* HERO — left-aligned, matching homepage pattern */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 md:py-28"
        style={{ background: "var(--m-bg)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 91, 255, 0.08), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
            <FadeIn className="flex-1">
              <span
                className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{ background: "var(--m-accent-light)", color: "var(--m-accent)" }}
              >
                How It Works
              </span>
              <h1
                className="mb-5 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                style={{ color: "var(--m-text)", lineHeight: "1.1" }}
              >
                Turn your docs into a 3-minute challenge
              </h1>
              <p
                className="mb-8 max-w-lg text-base leading-relaxed md:text-lg"
                style={{ color: "var(--m-text-secondary)" }}
              >
                Your users learn your product through interactive rounds, scored
                questions, and shareable scorecards. You get analytics on exactly
                what they know and what they missed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#early-access"
                  className="rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02]"
                  style={{ background: "var(--m-accent)" }}
                >
                  Get Early Access
                </Link>
                <Link
                  href="/play/chatgpt"
                  className="rounded-lg border px-7 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{ color: "var(--m-text)", borderColor: "var(--m-border)" }}
                >
                  Play a live example &rarr;
                </Link>
              </div>
            </FadeIn>

            {/* Right: dashboard mockup */}
            <FadeIn delay={0.15} className="flex-1">
              <div
                className="hidden overflow-hidden rounded-2xl shadow-2xl sm:block"
                style={{
                  border: "1px solid var(--m-border)",
                  transform: "perspective(1200px) rotateY(-2deg) rotateX(1deg)",
                }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 border-b px-3 py-2" style={{ background: "var(--m-bg-tertiary)", borderColor: "var(--m-border)" }}>
                  <div className="h-2 w-2 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="h-2 w-2 rounded-full" style={{ background: "#FEBC2E" }} />
                  <div className="h-2 w-2 rounded-full" style={{ background: "#28C840" }} />
                  <div className="ml-4 flex-1 rounded px-3 py-0.5 text-center text-[9px]" style={{ background: "var(--m-bg)", color: "var(--m-text-tertiary)", border: "1px solid var(--m-border)" }}>
                    app.howwellyouknow.com
                  </div>
                </div>

                <div className="flex" style={{ background: "var(--m-bg-secondary)", minHeight: 280 }}>
                  {/* Sidebar */}
                  <div className="hidden w-[130px] shrink-0 border-r sm:block" style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}>
                    <div className="px-3 pt-4 pb-3">
                      <Image
                        src="/logos/hwyk-logo-transparent.svg"
                        alt="HWYK"
                        width={28}
                        height={28}
                        className="mb-4"
                      />
                      <div className="space-y-0.5">
                        {[
                          { label: "Dashboard", icon: LayoutDashboard, active: true },
                          { label: "Challenges", icon: Trophy, active: false },
                          { label: "Analytics", icon: ChartNoAxesCombined, active: false },
                          { label: "Settings", icon: Settings, active: false },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5"
                            style={{
                              background: item.active ? "var(--m-accent-light)" : "transparent",
                              color: item.active ? "var(--m-accent)" : "var(--m-text-tertiary)",
                            }}
                          >
                            <item.icon size={12} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 px-4 py-4 sm:px-5">
                    {/* Top bar */}
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold" style={{ color: "var(--m-text)" }}>Dashboard</p>
                        <p className="text-[9px]" style={{ color: "var(--m-text-tertiary)" }}>Welcome back, Sarah</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg" style={{ background: "var(--m-bg-tertiary)" }}>
                          <Search size={10} style={{ color: "var(--m-text-tertiary)" }} />
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg" style={{ background: "var(--m-bg-tertiary)" }}>
                          <Bell size={10} style={{ color: "var(--m-text-tertiary)" }} />
                        </div>
                        <div className="h-6 w-6 rounded-full" style={{ background: "var(--m-accent)", opacity: 0.7 }} />
                      </div>
                    </div>

                    {/* Stat cards */}
                    <div className="mb-4 grid grid-cols-3 gap-2">
                      {[
                        { value: "2,847", label: "Total plays", trend: "+12%" },
                        { value: "73%", label: "Completion rate", trend: "+5%" },
                        { value: "64/100", label: "Avg score", trend: "+3" },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-xl border px-3 py-2.5" style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}>
                          <div className="flex items-baseline gap-1.5">
                            <p className="text-sm font-bold" style={{ color: "var(--m-text)" }}>{stat.value}</p>
                            <span className="text-[8px] font-semibold" style={{ color: "#059669" }}>{stat.trend}</span>
                          </div>
                          <p className="mt-0.5 text-[8px]" style={{ color: "var(--m-text-tertiary)" }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Challenge list */}
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-[10px] font-semibold" style={{ color: "var(--m-text)" }}>Your Challenges</p>
                      <span className="rounded-md px-2 py-0.5 text-[8px] font-semibold text-white" style={{ background: "var(--m-accent)" }}>+ New</span>
                    </div>
                    <div className="mb-4 space-y-1.5">
                      {[
                        { name: "Notion: New User Onoarding", plays: "1,204", pct: "71%", logo: "/logos/notion.png", status: "Published" },
                        { name: "Notion: Lead Gen", plays: "847", pct: "68%", logo: "/logos/notion.png", status: "Published" },
                        { name: "Notion: AI Features Launch", plays: "312", pct: "76%", logo: "/logos/notion.png", status: "Draft" },
                      ].map((ch) => (
                        <div key={ch.name} className="flex items-center gap-2.5 rounded-xl border px-3 py-2" style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}>
                          <Image src={ch.logo} alt={ch.name} width={18} height={18} className="shrink-0 rounded" style={{ objectFit: "contain" }} />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[10px] font-semibold" style={{ color: "var(--m-text)" }}>{ch.name}</p>
                            <p className="text-[8px]" style={{ color: "var(--m-text-tertiary)" }}>{ch.plays} plays &middot; {ch.pct} completion</p>
                          </div>
                          <span
                            className="shrink-0 rounded-full px-2 py-0.5 text-[7px] font-semibold"
                            style={{
                              background: ch.status === "Published" ? "#ECFDF5" : "var(--m-bg-tertiary)",
                              color: ch.status === "Published" ? "#059669" : "var(--m-text-tertiary)",
                            }}
                          >
                            {ch.status}
                          </span>
                          <div className="hidden shrink-0 items-center gap-1 sm:flex">
                            <div className="flex h-5 w-5 items-center justify-center rounded" style={{ background: "var(--m-bg-tertiary)" }}>
                              <Pencil size={8} style={{ color: "var(--m-text-tertiary)" }} />
                            </div>
                            <div className="flex h-5 w-5 items-center justify-center rounded" style={{ background: "var(--m-bg-tertiary)" }}>
                              <Eye size={8} style={{ color: "var(--m-text-tertiary)" }} />
                            </div>
                            <div className="flex h-5 w-5 items-center justify-center rounded" style={{ background: "var(--m-bg-tertiary)" }}>
                              <ShareIcon size={8} style={{ color: "var(--m-text-tertiary)" }} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Knowledge gaps */}
                    <p className="mb-2 text-[10px] font-semibold" style={{ color: "var(--m-text)" }}>Knowledge Gaps</p>
                    <p className="mb-2 text-[8px]" style={{ color: "var(--m-text-tertiary)" }}>Features your users struggle with</p>
                    <div className="rounded-xl border px-3 py-3" style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}>
                      <div className="space-y-2">
                        {[
                          { feature: "AI Features", pct: 38 },
                          { feature: "Automations", pct: 45 },
                          { feature: "Integrations & API", pct: 58 },
                          { feature: "Databases", pct: 82 },
                        ].map((gap) => (
                          <div key={gap.feature} className="flex items-center gap-2">
                            <span className="w-[52px] text-[8px] font-medium" style={{ color: "var(--m-text-secondary)" }}>{gap.feature}</span>
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: "var(--m-bg-tertiary)" }}>
                              <div
                                className="h-full rounded-full transition-all"
                                style={{
                                  width: `${gap.pct}%`,
                                  background: gap.pct < 50 ? "#EF4444" : gap.pct < 70 ? "#F59E0B" : "#22C55E",
                                }}
                              />
                            </div>
                            <span className="w-6 text-right text-[8px] font-semibold" style={{ color: gap.pct < 50 ? "#EF4444" : gap.pct < 70 ? "#F59E0B" : "#22C55E" }}>{gap.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4 STEPS — left-aligned header + card grid */}
      <section className="py-16 sm:py-20 md:py-28" style={{ background: "var(--m-bg-secondary)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--m-accent)" }}
            >
              Setup in minutes
            </p>
            <h2
              className="mb-3 text-2xl font-bold sm:text-3xl md:text-[2.5rem] md:leading-tight"
              style={{ color: "var(--m-text)" }}
            >
              From docs to interactive challenge in 4 steps
            </h2>
            <p
              className="mb-12 max-w-lg text-sm leading-relaxed sm:mb-14 sm:text-base"
              style={{ color: "var(--m-text-secondary)" }}
            >
              No content team needed. No months of setup. Just paste a URL and
              we handle the rest.
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
                      <span className="text-sm font-bold" style={{ color: "var(--m-accent)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mb-2 text-base font-bold sm:text-lg" style={{ color: "var(--m-text)" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHALLENGE TYPES — dark section, left text + right cards */}
      <section className="py-16 sm:py-20 md:py-28" style={{ background: "#0A2540" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col gap-10 md:flex-row md:gap-16">
            {/* Left: intro */}
            <FadeIn className="md:w-[360px] md:shrink-0">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#635BFF" }}
              >
                Challenge formats
              </p>
              <h2
                className="mb-4 text-2xl font-bold sm:text-3xl md:text-[2.5rem] md:leading-tight"
                style={{ color: "#FFFFFF" }}
              >
                5 ways to test product knowledge
              </h2>
              <p
                className="mb-6 text-sm leading-relaxed sm:text-base"
                style={{ color: "#8898AA" }}
              >
                Each format tests a different type of understanding. Together they
                build a complete picture of what your users know.
              </p>
              <Link
                href="/play/chatgpt"
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: "#B4ADFF" }}
              >
                Try a live challenge &rarr;
              </Link>
            </FadeIn>

            {/* Right: challenge type cards */}
            <FadeIn delay={0.1} className="flex-1">
              <div className="flex flex-col gap-3">
                {CHALLENGE_TYPES.map((type, i) => (
                  <div
                    key={type.name}
                    className="flex items-start gap-4 rounded-xl px-5 py-4"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                      style={{ background: "rgba(99, 91, 255, 0.2)", color: "#B4ADFF" }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="mb-1 text-sm font-bold text-white">{type.name}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#8898AA" }}>
                        {type.desc}
                      </p>
                    </div>
                    <div
                      className="hidden shrink-0 rounded-lg px-3 py-1.5 text-[11px] font-medium sm:block"
                      style={{ background: "rgba(255,255,255,0.06)", color: "#8898AA" }}
                    >
                      {type.answer}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* THE PLAYER EXPERIENCE — centered header + 3 dark mockup cards */}
      <section className="py-16 sm:py-20 md:py-28" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <p
              className="mb-3 text-center text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--m-accent)" }}
            >
              The player experience
            </p>
            <h2
              className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-[2.75rem] md:leading-tight"
              style={{ color: "var(--m-text)" }}
            >
              What your users see
            </h2>
            <p
              className="mx-auto mb-12 max-w-lg text-center text-sm leading-relaxed sm:mb-14 sm:text-base"
              style={{ color: "var(--m-text-secondary)" }}
            >
              A 3-minute journey from welcome screen to shareable scorecard.
            </p>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Welcome",
                desc: "Branded with your logo and colors. Shows round count and estimated time. One tap to start.",
                visual: (
                  <div className="space-y-2.5 text-center">
                    <div className="mx-auto h-8 w-8 rounded-lg" style={{ background: "var(--m-accent)" }} />
                    <p className="text-sm font-semibold text-white">How Well Do You Know</p>
                    <p className="text-base font-bold text-white">TaskFlow?</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>4 rounds &middot; ~20 cards &middot; 3 min</p>
                    <div className="mx-auto mt-1 w-fit rounded-lg bg-white px-5 py-2 text-xs font-semibold" style={{ color: "var(--m-accent)" }}>
                      Start Learning
                    </div>
                  </div>
                ),
              },
              {
                step: "02",
                title: "Interactive rounds",
                desc: "Each round uses a different challenge format. Difficulty escalates. Points and streaks keep users engaged.",
                visual: (
                  <div className="space-y-2.5 text-center">
                    <p className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Round 2 &middot; Power Features</p>
                    <p className="text-sm font-semibold text-white">Truth or Myth?</p>
                    <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>&quot;Smart Assign requires manual calendar checks.&quot;</p>
                    <div className="mt-2 flex justify-center gap-2">
                      <span className="rounded-lg px-4 py-1.5 text-xs font-medium text-white" style={{ background: "rgba(255,255,255,0.1)" }}>Truth</span>
                      <span className="rounded-lg px-4 py-1.5 text-xs font-semibold text-white" style={{ background: "#22C55E" }}>Myth &#10003;</span>
                    </div>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>+10pts &middot; Streak: 5</p>
                  </div>
                ),
              },
              {
                step: "03",
                title: "Scorecard",
                desc: "Overall score, fun archetype title, radar chart, and a share button to spread the word.",
                visual: (
                  <div className="space-y-2 text-center">
                    <p className="text-3xl font-bold" style={{ color: "#635BFF" }}>82<span className="text-sm font-normal" style={{ color: "rgba(255,255,255,0.4)" }}>/100</span></p>
                    <p className="text-sm font-semibold text-white">The Quick Learner</p>
                    <div className="mx-auto mt-2 max-w-[160px] space-y-1.5">
                      {[{ l: "Concepts", w: 80 }, { l: "Features", w: 100 }, { l: "Speed", w: 60 }, { l: "Scenarios", w: 90 }].map((b) => (
                        <div key={b.l} className="flex items-center gap-2">
                          <span className="w-16 text-right text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>{b.l}</span>
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                            <div className="h-full rounded-full" style={{ width: `${b.w}%`, background: "linear-gradient(90deg, #635BFF, #A960EE)" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex justify-center gap-2">
                      <span className="rounded px-2 py-1 text-[9px]" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>Copy &amp; Share</span>
                      <span className="rounded px-2 py-1 text-[9px]" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>Download PNG</span>
                    </div>
                  </div>
                ),
              },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border" style={{ borderColor: "var(--m-border)" }}>
                  <div
                    className="flex flex-1 flex-col items-center justify-center px-6 py-8"
                    style={{ background: "linear-gradient(135deg, #0A2540 0%, #0D3055 100%)" }}
                  >
                    {s.visual}
                  </div>
                  <div className="px-6 py-5" style={{ background: "var(--m-bg)" }}>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-bold" style={{ color: "var(--m-accent)" }}>{s.step}</span>
                      <h3 className="text-base font-bold" style={{ color: "var(--m-text)" }}>{s.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SCORECARD — left text + right mockup */}
      <section className="py-16 sm:py-20 md:py-28" style={{ background: "var(--m-bg-secondary)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
              <div className="flex-1">
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--m-accent)" }}
                >
                  Viral growth engine
                </p>
                <h2
                  className="mb-4 text-2xl font-bold sm:text-3xl md:text-[2.5rem] md:leading-tight"
                  style={{ color: "var(--m-text)" }}
                >
                  Shareable proof of product knowledge
                </h2>
                <p
                  className="mb-6 text-sm leading-relaxed sm:text-base"
                  style={{ color: "var(--m-text-secondary)" }}
                >
                  Every scorecard doubles as free marketing. When users share
                  their results, their entire network discovers
                  your product. The competitive format drives organic sharing.
                </p>
                <div className="space-y-3">
                  {[
                    "Overall score from 0 to 100",
                    "Fun archetype title based on performance",
                    "Radar chart showing strengths and weaknesses",
                    "Pre-filled share text ready to copy and post anywhere",
                    "Downloadable PNG optimized for social media",
                    "'Powered by How Well You Know' badge with link",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                        <circle cx="8" cy="8" r="8" fill="var(--m-accent-light)" />
                        <path d="M5 8l2 2 4-4" stroke="var(--m-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm" style={{ color: "var(--m-text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/play/chatgpt"
                    className="inline-block rounded-lg border px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.02]"
                    style={{ color: "var(--m-accent)", borderColor: "var(--m-accent)" }}
                  >
                    See a live scorecard &rarr;
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-[340px] shrink-0">
                <div
                  className="rounded-2xl p-6 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #0A2540 0%, #0D3055 100%)" }}
                >
                  <p className="text-center text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>Your Scorecard</p>
                  <p className="mt-2 text-center text-5xl font-bold" style={{ color: "#635BFF" }}>
                    82<span className="text-lg font-normal" style={{ color: "rgba(255,255,255,0.4)" }}>/100</span>
                  </p>
                  <p className="mt-1 text-center text-base font-semibold text-white">The Quick Learner</p>
                  <p className="mt-0.5 text-center text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>You outperformed 68% of users</p>
                  <div className="mx-auto mt-5 max-w-[220px] space-y-2">
                    {[
                      { name: "Core Concepts", pct: 80 },
                      { name: "Power Features", pct: 100 },
                      { name: "Speed", pct: 60 },
                      { name: "Scenarios", pct: 90 },
                    ].map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2">
                        <span className="w-24 text-right text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{skill.name}</span>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                          <div className="h-full rounded-full" style={{ width: `${skill.pct}%`, background: "linear-gradient(90deg, #635BFF, #A960EE)" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex justify-center gap-2">
                    <span className="rounded-lg px-3 py-1.5 text-[10px] font-medium text-white" style={{ background: "rgba(255,255,255,0.08)" }}>Copy &amp; Share</span>
                    <span className="rounded-lg px-3 py-1.5 text-[10px] font-medium text-white" style={{ background: "rgba(255,255,255,0.08)" }}>Download PNG</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FEATURES — left-aligned header + 3-col grid */}
      <section className="py-16 sm:py-20 md:py-28" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <FadeIn>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--m-accent)" }}
            >
              For your team
            </p>
            <h2
              className="mb-3 text-2xl font-bold sm:text-3xl md:text-[2.5rem] md:leading-tight"
              style={{ color: "var(--m-text)" }}
            >
              Built for customer success teams
            </h2>
            <p
              className="mb-12 max-w-lg text-sm leading-relaxed sm:mb-14 sm:text-base"
              style={{ color: "var(--m-text-secondary)" }}
            >
              Everything you need to create, distribute, and measure interactive
              product education.
            </p>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.06}>
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 sm:p-7"
                  style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "var(--m-accent-light)" }}
                  >
                    <f.icon size={20} style={{ color: "var(--m-accent)" }} />
                  </div>
                  <h3 className="mb-2 text-base font-bold" style={{ color: "var(--m-text)" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>
                    {f.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: "var(--m-accent)" }}>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-px md:grid-cols-4">
            {[
              { value: "73%", label: "Average completion rate" },
              { value: "3 min", label: "Average time to complete" },
              { value: "25+", label: "Live challenges built" },
              { value: "5 min", label: "Setup time for new challenge" },
            ].map((s) => (
              <div key={s.value} className="flex flex-col items-center justify-center px-4 py-8 sm:py-10">
                <span className="text-2xl font-bold text-white sm:text-3xl">{s.value}</span>
                <span className="mt-1 text-center text-xs text-white/70 sm:text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection id="early-access" source="how-it-works" />

      {/* JSON-LD: HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Create an Interactive Product Challenge",
            description:
              "Turn your product documentation into a 3-minute interactive challenge in four steps.",
            step: [
              {
                "@type": "HowToStep",
                name: "Paste your docs URL",
                text: "Drop in any documentation page, help article, or product page. We pull out the key concepts automatically.",
              },
              {
                "@type": "HowToStep",
                name: "Your challenge gets created",
                text: "15 questions across 6 rounds: Truth or Myth, This or That, Speed Round, and more. Review and edit before publishing.",
              },
              {
                "@type": "HowToStep",
                name: "Share or embed anywhere",
                text: "Get a hosted link for emails and Slack, or embed directly in your docs site and onboarding flow.",
              },
              {
                "@type": "HowToStep",
                name: "See what they learned",
                text: "Track scores, completion rates, and exactly which product features your users struggle with.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
