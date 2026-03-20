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
            <a
              href="https://www.linkedin.com/company/how-well-you-know"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="How Well You Know on LinkedIn"
              className="transition-opacity hover:opacity-70"
              style={{ color: "var(--m-text-tertiary)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.67c0 .93.65 1.67 1.71 1.67h.02c1.1 0 1.77-.74 1.77-1.67C6.98 3.72 6.35 3 5.25 3ZM20.5 12.64c0-3.53-1.88-5.17-4.39-5.17-2.03 0-2.94 1.12-3.45 1.9V8.5H9.28c.04.57 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.03 1.88 2.55V20h3.38v-7.36Z" />
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
