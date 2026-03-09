"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { GraduationCap, Users, Magnet, BookOpen, Rocket, ArrowRight, type LucideIcon } from "lucide-react";

const INTERVAL_MS = 5000;

interface UseCase {
  slug: string;
  icon: LucideIcon;
  tab: string;
  title: string;
  description: string;
  visual: {
    headline: string;
    subline: string;
    detail: string;
  };
  href: string;
}

const USE_CASES: UseCase[] = [
  {
    slug: "onboarding",
    icon: GraduationCap,
    tab: "Onboarding",
    title: "Onboard new customers in 3 minutes, not 3 weeks",
    description:
      "Add a challenge link to your welcome email. Users learn your core features before they even open the app. Your CS team gets a per-feature knowledge breakdown instead of guessing.",
    visual: {
      headline: "Welcome! Learn Acme in 3 min",
      subline: "Hey Sarah, take this quick challenge before your first login.",
      detail: "Day 1 email \u2192 73% complete the challenge",
    },
    href: "/use-cases/onboarding",
  },
  {
    slug: "community",
    icon: Users,
    tab: "Community",
    title: "Turn your Slack channel into a learning community",
    description:
      "Post a 'How well do you know [Product]?' challenge in Slack or Discord. Shared scores spark conversations, friendly competition, and deeper product understanding across your user base.",
    visual: {
      headline: "How well do you know Acme?",
      subline: "I scored 85/100 \u2014 can you beat me? \ud83d\ude0f",
      detail: "Posted in #general \u2192 4.2x more engagement",
    },
    href: "/use-cases/community",
  },
  {
    slug: "marketing",
    icon: Magnet,
    tab: "Lead Gen",
    title: "Generate leads that already understand your product",
    description:
      "Embed an interactive challenge on your blog or landing page. Visitors play, learn your product, and convert into leads who already get what you do \u2014 no demo needed to qualify them.",
    visual: {
      headline: "Think you know project management?",
      subline: "Take the 3-minute challenge and find out.",
      detail: "Blog embed \u2192 38% lead conversion",
    },
    href: "/use-cases/marketing",
  },
  {
    slug: "documentation",
    icon: BookOpen,
    tab: "Docs",
    title: "Turn passive docs readers into active learners",
    description:
      "Add 'Test your knowledge' at the end of any docs section. Users prove they understood what they read. You see exactly which concepts need better documentation.",
    visual: {
      headline: "Test your knowledge: Workflows",
      subline: "You just read the guide. Now prove you got it.",
      detail: "End-of-page widget \u2192 6x better retention",
    },
    href: "/use-cases/documentation",
  },
  {
    slug: "product-teams",
    icon: Rocket,
    tab: "Product",
    title: "Launch features people actually understand and use",
    description:
      "Ship a challenge alongside every release. Users learn what's new before they discover it by accident. Run challenges on existing features to find knowledge gaps that explain low adoption.",
    visual: {
      headline: "What's new in v4.2?",
      subline: "3 new features. 15 questions. See if your users get it.",
      detail: "Release challenge \u2192 2.4x faster feature adoption",
    },
    href: "/use-cases/product-teams",
  },
];

export default function UseCaseShowcase() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const startTimeRef = useRef(Date.now());
  const rafRef = useRef<number>(0);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % USE_CASES.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  const selectTab = useCallback((i: number) => {
    setActive(i);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (paused) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / INTERVAL_MS, 1);
      setProgress(pct);

      if (pct >= 1) {
        advance();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, paused, advance]);

  const uc = USE_CASES[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        startTimeRef.current = Date.now() - progress * INTERVAL_MS;
      }}
    >
      {/* Tabs */}
      <div className="mb-10 flex justify-center sm:mb-12">
        <div
          className="hide-scrollbar flex w-full gap-1 overflow-x-auto rounded-xl p-1 sm:inline-flex sm:w-auto"
          style={{ background: "var(--m-bg-tertiary)" }}
        >
          {USE_CASES.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;
            return (
              <button
                key={item.slug}
                onClick={() => selectTab(i)}
                className="relative flex shrink-0 items-center gap-2 overflow-hidden rounded-lg px-3 py-2.5 text-sm font-medium transition-all sm:px-5"
                style={{
                  background: isActive ? "var(--m-bg)" : "transparent",
                  color: isActive ? "var(--m-accent)" : "var(--m-text-tertiary)",
                  boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                }}
              >
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 h-0.5"
                    style={{
                      width: `${progress * 100}%`,
                      background: "var(--m-accent)",
                      transition: "none",
                    }}
                  />
                )}
                <Icon size={16} />
                <span className="hidden sm:inline">{item.tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div
        className="overflow-hidden rounded-2xl border"
        style={{ borderColor: "var(--m-border)", background: "var(--m-bg)" }}
      >
        <div className="grid md:grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12">
            <h3
              className="mb-4 text-xl font-bold leading-snug sm:text-2xl md:text-[1.75rem]"
              style={{ color: "var(--m-text)" }}
            >
              {uc.title}
            </h3>
            <p
              className="mb-6 text-sm leading-relaxed sm:text-[15px]"
              style={{ color: "var(--m-text-secondary)" }}
            >
              {uc.description}
            </p>
            <Link
              href={uc.href}
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "var(--m-accent)" }}
            >
              See the full playbook
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: visual mockup */}
          <div
            className="relative flex items-center justify-center p-8 sm:p-10 md:p-12"
            style={{ background: "#0A2540" }}
          >
            <div className="w-full max-w-[320px]">
              <div
                className="rounded-xl p-5 shadow-2xl sm:p-6"
                style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: "var(--m-accent)" }}
                  >
                    <uc.icon size={16} className="text-white" />
                  </div>
                  <div
                    className="h-1.5 flex-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ width: "73%", background: "var(--m-accent)" }}
                    />
                  </div>
                </div>
                <p className="mb-1 text-base font-bold text-white">
                  {uc.visual.headline}
                </p>
                <p className="mb-4 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {uc.visual.subline}
                </p>
                <div
                  className="rounded-lg px-3 py-2 text-center text-xs font-medium"
                  style={{ background: "rgba(99, 91, 255, 0.2)", color: "#B4ADFF" }}
                >
                  {uc.visual.detail}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
