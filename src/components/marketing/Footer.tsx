import Link from "next/link";
import Image from "next/image";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Play", href: "/play" },
      { label: "How It Works", href: "/how-it-works" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Customer Onboarding", href: "/use-cases/onboarding" },
      { label: "Community Engagement", href: "/use-cases/community" },
      { label: "Lead Generation", href: "/use-cases/marketing" },
      { label: "Documentation", href: "/use-cases/documentation" },
      { label: "Product Teams", href: "/use-cases/product-teams" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--m-bg)",
        borderColor: "var(--m-border)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4
                className="mb-4 text-sm font-semibold"
                style={{ color: "var(--m-text)" }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: "var(--m-text-secondary)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-4 border-t pt-6 sm:mt-12 sm:pt-8 md:flex-row md:justify-between"
          style={{ borderColor: "var(--m-border)" }}
        >
          <div className="flex items-center gap-3 text-center md:text-left">
            <Image
              src="/logos/hwyk-logo.svg"
              alt="How Well You Know logo"
              width={24}
              height={24}
              className="shrink-0"
            />
            <p
              className="text-xs sm:text-sm"
              style={{ color: "var(--m-text-secondary)" }}
            >
              Interactive product challenges for B2B SaaS teams.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@howwellyouknow.com"
              aria-label="Email How Well You Know"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--m-text-tertiary)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        <p
          className="mt-6 text-center text-[11px]"
          style={{ color: "var(--m-text-tertiary)", opacity: 0.7 }}
        >
          &copy; {new Date().getFullYear()} How Well You Know. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
