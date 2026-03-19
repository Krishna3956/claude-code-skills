"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { useMarketingTheme } from "@/components/marketing/MarketingThemeProvider";

const NAV_LINKS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Challenge library", href: "/customers" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar({ theme: _theme }: { theme?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useMarketingTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--mk-border)] bg-[color:var(--mk-bg-elevated)] backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/hwyk-lockup-transparent.png"
            alt="How Well You Know"
            width={176}
            height={34}
            className="h-auto w-[158px] object-contain sm:w-[176px]"
          />
          <div className="hidden border-l border-[var(--mk-border)] pl-3 lg:block">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">
              Interactive product education
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--mk-text-soft)] transition hover:text-[var(--mk-text)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--mk-border)] bg-[var(--mk-bg-card)] text-[var(--mk-text-soft)] transition hover:text-[var(--mk-text)]"
          >
            {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          <Link
            href="/play/notion"
            className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--mk-text)] transition hover:border-[var(--mk-border-strong)] marketing-button-secondary"
          >
            See a live example
          </Link>
          <Link
            href="/#early-access"
            className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:brightness-105 marketing-button-primary"
          >
            Get Early Access
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--mk-border)] bg-[var(--mk-bg-card)] text-[var(--mk-text)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[var(--mk-border)] bg-[var(--mk-bg-elevated)] px-4 py-5 sm:px-6 lg:hidden">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--mk-text-soft)] transition hover:bg-[var(--mk-accent-soft)] hover:text-[var(--mk-text)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--mk-border)] bg-[var(--mk-bg-card)] text-[var(--mk-text-soft)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>
            <Link
              href="/#early-access"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold marketing-button-primary"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
