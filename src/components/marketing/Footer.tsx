import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Homepage", href: "/" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Challenge library", href: "/customers" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Onboarding", href: "/use-cases/onboarding" },
      { label: "Community", href: "/use-cases/community" },
      { label: "Lead generation", href: "/use-cases/marketing" },
      { label: "Documentation", href: "/use-cases/documentation" },
      { label: "Feature launches", href: "/use-cases/product-teams" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Play a live challenge", href: "/play" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "hello@howwellyouknow.com", href: "mailto:hello@howwellyouknow.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--mk-border)] bg-[color:var(--mk-bg-elevated)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))]">
          <div className="max-w-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--mk-border-strong)] bg-[var(--mk-accent-soft)] text-sm font-semibold text-[var(--mk-accent)]">
                HW
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--mk-text)]">
                  How Well You Know
                </p>
                <p className="text-sm text-[var(--mk-text-muted)]">Your users do not read docs. They play challenges.</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-[var(--mk-text-soft)]">
              Interactive product education for developer tools companies. Turn docs into 3-minute challenges, scorecards, and knowledge-gap analytics.
            </p>
          </div>

      {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--mk-text-muted)]">
                {column.title}
              </p>
              <div className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--mk-text-soft)] transition hover:text-[var(--mk-text)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--mk-border)] pt-6 text-sm text-[var(--mk-text-muted)] md:flex-row md:items-center md:justify-between">
          <p>Built for B2B SaaS teams that need product education to drive activation, retention, and feature adoption.</p>
          <p>&copy; {new Date().getFullYear()} How Well You Know</p>
        </div>
      </div>
    </footer>
  );
}
