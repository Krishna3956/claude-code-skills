"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type CSSProperties } from "react";
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Users,
  Magnet,
  BookOpen,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const USE_CASE_ITEMS: { label: string; desc: string; href: string; icon: LucideIcon }[] = [
  { label: "Customer Onboarding", desc: "Welcome emails that teach", href: "/use-cases/onboarding", icon: GraduationCap },
  { label: "Community Engagement", desc: "Challenges for Slack & Discord", href: "/use-cases/community", icon: Users },
  { label: "Lead Generation", desc: "Interactive content that converts", href: "/use-cases/marketing", icon: Magnet },
  { label: "Documentation", desc: "Test-your-knowledge widgets", href: "/use-cases/documentation", icon: BookOpen },
  { label: "Product Teams", desc: "Feature launches & adoption", href: "/use-cases/product-teams", icon: Rocket },
];

export default function Navbar({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [useCaseOpen, setUseCaseOpen] = useState(false);
  const dark = theme === "dark";
  const themeVars = dark
    ? ({
        "--m-text": "#F6F0E5",
        "--m-text-tertiary": "#B9AB92",
        "--m-border": "#3A3328",
        "--m-bg": "#13110F",
        "--m-bg-secondary": "#1D1915",
        "--m-accent": "#C9A45D",
        "--m-accent-hover": "#B78E43",
        "--m-accent-light": "rgba(201,164,93,0.18)",
      } as CSSProperties)
    : undefined;

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: dark ? "rgba(8,7,6,0.90)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderColor: "var(--m-border)",
          ...themeVars,
        }}
      >
        <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src={dark ? "/logos/hwyk-lockup-cream.png" : "/logos/hwyk-lockup-transparent.png"}
              alt="How Well You Know"
              width={168}
              height={29}
              priority
              className="max-h-[34px] w-auto sm:max-h-[45px]"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/play"
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--m-text)" }}
            >
              Play
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--m-text)" }}
            >
              How It Works
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setUseCaseOpen(true)}
              onMouseLeave={() => setUseCaseOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: "var(--m-text)" }}
              >
                Use Cases
                <ChevronDown size={14} />
              </button>
              {useCaseOpen && (
                <div
                  className="absolute -left-4 top-full pt-3"
                  style={{ width: 340 }}
                >
                  <div
                    className="overflow-hidden rounded-2xl border shadow-xl"
                    style={{ background: "var(--m-bg)", borderColor: "var(--m-border)" }}
                  >
                    <div className="p-2">
                      {USE_CASE_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors"
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.background = "var(--m-bg-secondary)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.background = "transparent")
                            }
                          >
                            <div
                              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors"
                              style={{ background: "var(--m-accent-light)" }}
                            >
                              <Icon size={15} style={{ color: "var(--m-accent)" }} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium" style={{ color: "var(--m-text)" }}>
                                {item.label}
                              </p>
                              <p className="text-xs" style={{ color: "var(--m-text-tertiary)" }}>
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="border-t px-4 py-2.5" style={{ borderColor: "var(--m-border)", background: "var(--m-bg-secondary)" }}>
                      <Link
                        href="/use-cases"
                        className="group flex items-center gap-1.5 text-xs font-medium transition-colors"
                        style={{ color: "var(--m-accent)" }}
                      >
                        View all use cases
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#early-access"
              className="rounded-lg px-6 py-2.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02]"
              style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--m-accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--m-accent)")
              }
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--m-text)" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu - outside header to avoid backdrop-filter breaking fixed positioning */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-[60] flex flex-col gap-1 overflow-y-auto p-4 sm:p-6 md:hidden"
          style={{ background: dark ? "#0C0A08" : "#FFFFFF", ...themeVars }}
        >
          {[
            { label: "Play", href: "/play" },
            { label: "How It Works", href: "/how-it-works" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium transition-colors"
              style={{ color: "var(--m-text)" }}
            >
              {item.label}
            </Link>
          ))}

          {/* Use Cases group */}
          <div className="mt-1">
            <p
              className="px-4 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: "var(--m-text-tertiary)" }}
            >
              Use Cases
            </p>
            {USE_CASE_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors"
                  style={{ color: "var(--m-text)" }}
                >
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                    style={{ background: "var(--m-accent-light)" }}
                  >
                    <Icon size={14} style={{ color: "var(--m-accent)" }} />
                  </div>
                  <div>
                    <span className="text-sm font-medium">{item.label}</span>
                    <span
                      className="ml-2 text-xs"
                      style={{ color: "var(--m-text-tertiary)" }}
                    >
                      {item.desc}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {[
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium transition-colors"
              style={{ color: "var(--m-text)" }}
            >
              {item.label}
            </Link>
          ))}
          <div className="my-2 h-px" style={{ background: "var(--m-border)" }} />
          <Link
            href="/#early-access"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg px-5 py-3 text-center text-sm font-semibold"
            style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
          >
            Get Early Access
          </Link>
        </div>
      )}
    </>
  );
}
