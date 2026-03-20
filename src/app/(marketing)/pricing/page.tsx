"use client";

import { useState } from "react";
import { ChevronDown, Check, Minus } from "lucide-react";
import PricingCards from "@/components/marketing/PricingCards";
import CTASection from "@/components/marketing/CTASection";

const FAQS = [
  {
    q: "Can I try it before I pay?",
    a: "Yes. Play any of our 25 live quizzes to see the full experience. No signup required.",
  },
  {
    q: "What happens when I sign up?",
    a: "You'll get a personal email from our team within 24 hours. We'll hop on a quick call to understand your use case, then build your first challenge together.",
  },
  {
    q: "How does auto-generation work?",
    a: "Paste a URL to your documentation. We read it and generate challenge cards across multiple formats. You review, edit, and publish. Most challenges are ready in under 10 minutes.",
  },
  {
    q: "Can I embed challenges on my website?",
    a: "Yes. Scale and Enterprise plan members get an iframe embed code that works on any website, docs site, or help center.",
  },
  {
    q: "Can I remove the 'Powered by' badge?",
    a: "Yes, on Growth, Scale, and Enterprise plans.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Switch to yearly billing and save 20% on Growth and Scale plans.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, at any time. Your plan stays active until the end of your current billing period. No questions asked.",
  },
  {
    q: "What if I need SSO, custom domains, or a dedicated account manager?",
    a: "Those are included in our Enterprise plan. Get in touch and we'll build a custom plan for your team.",
  },
];

type CellValue = boolean | string;

interface ComparisonRow {
  feature: string;
  growth: CellValue;
  scale: CellValue;
  enterprise: CellValue;
}

interface ComparisonSection {
  title: string;
  rows: ComparisonRow[];
}

const COMPARISON: ComparisonSection[] = [
  {
    title: "Challenges",
    rows: [
      { feature: "Number of challenges", growth: "5", scale: "Unlimited", enterprise: "Unlimited" },
      { feature: "Cards per challenge", growth: "15", scale: "15", enterprise: "Custom" },
      { feature: "Challenge types (all 5)", growth: true, scale: true, enterprise: true },
      { feature: "Auto-generated content", growth: true, scale: true, enterprise: true },
    ],
  },
  {
    title: "Branding & Distribution",
    rows: [
      { feature: "Hosted challenge page", growth: true, scale: true, enterprise: true },
      { feature: "Shareable scorecard", growth: true, scale: true, enterprise: true },
      { feature: "Custom branding (logo + color)", growth: true, scale: true, enterprise: true },
      { feature: "Full brand kit (colors, fonts, logo)", growth: false, scale: true, enterprise: true },
      { feature: "Remove 'Powered by' badge", growth: true, scale: true, enterprise: true },
      { feature: "Embed code (iframe)", growth: false, scale: true, enterprise: true },
      { feature: "Custom domain (CNAME)", growth: false, scale: false, enterprise: true },
    ],
  },
  {
    title: "Analytics",
    rows: [
      { feature: "Play count", growth: true, scale: true, enterprise: true },
      { feature: "Completion rate & avg score", growth: true, scale: true, enterprise: true },
      { feature: "Score distribution", growth: true, scale: true, enterprise: true },
      { feature: "Per-question breakdown", growth: false, scale: true, enterprise: true },
      { feature: "Knowledge gap reports", growth: false, scale: true, enterprise: true },
      { feature: "Player-level data", growth: false, scale: true, enterprise: true },
      { feature: "Lead capture (player emails)", growth: false, scale: true, enterprise: true },
    ],
  },
  {
    title: "Team & Support",
    rows: [
      { feature: "Team seats", growth: "3", scale: "10", enterprise: "Unlimited" },
      { feature: "CSV export", growth: true, scale: true, enterprise: true },
      { feature: "API access", growth: false, scale: false, enterprise: true },
      { feature: "SSO / SAML", growth: false, scale: false, enterprise: true },
      { feature: "Dedicated account manager", growth: false, scale: false, enterprise: true },
      { feature: "SLA + uptime guarantee", growth: false, scale: false, enterprise: true },
      { feature: "Email support", growth: "48hr", scale: "24hr", enterprise: "Priority" },
    ],
  },
];

const PLAN_NAMES = [
  { key: "growth" as const, label: "Growth", highlighted: true },
  { key: "scale" as const, label: "Scale" },
  { key: "enterprise" as const, label: "Enterprise" },
];

function CellContent({ value }: { value: CellValue }) {
  if (value === true) return <Check size={16} className="shrink-0" style={{ color: "var(--m-accent)" }} />;
  if (value === false) return <Minus size={14} className="shrink-0" style={{ color: "var(--m-border)" }} />;
  return (
    <span className="text-[13px]" style={{ color: "var(--m-text-secondary)" }}>
      {value}
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "var(--m-border)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-base font-medium" style={{ color: "var(--m-text)" }}>
          {q}
        </span>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform"
          style={{
            color: "var(--m-text-tertiary)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "var(--m-text-secondary)" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero + Cards */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <div className="mb-4 text-center sm:mb-6">
            <h1
              className="mb-3 text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: "var(--m-text)" }}
            >
              Simple pricing that grows with you
            </h1>
            <p
              className="mx-auto max-w-lg text-base"
              style={{ color: "var(--m-text-secondary)" }}
            >
              Start with Growth. Upgrade when your team needs analytics, branding, and lead capture. Cancel anytime.
            </p>
          </div>

          <PricingCards />
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: "var(--m-bg-secondary)" }}>
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <h2
            className="mb-8 text-center text-xl font-bold sm:mb-12 sm:text-2xl"
            style={{ color: "var(--m-text)" }}
          >
            Compare plans &amp; features
          </h2>

          {/* Rounded container matching pricing cards style */}
          <div
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--m-border)", background: "var(--m-bg)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
                {/* Sticky header */}
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--m-border)" }}>
                    <th className="w-[40%] px-5 py-4 text-left" />
                    {PLAN_NAMES.map((plan) => (
                      <th key={plan.key} className="w-[20%] px-3 py-4 text-center">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: plan.highlighted ? "var(--m-accent)" : "var(--m-text)" }}
                        >
                          {plan.label}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {COMPARISON.map((section) => (
                    <SectionBlock key={section.title} section={section} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection id="early-access" source="pricing" />

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: "var(--m-bg)" }}>
        <div className="mx-auto max-w-[700px] px-4 sm:px-6">
          <h2
            className="mb-2 text-center text-xl font-bold sm:text-2xl"
            style={{ color: "var(--m-text)" }}
          >
            Frequently asked questions
          </h2>
          <p
            className="mb-8 text-center text-sm sm:mb-10"
            style={{ color: "var(--m-text-tertiary)" }}
          >
            Still have questions?{" "}
            <a href="/contact" className="font-medium" style={{ color: "var(--m-accent)" }}>
              Get in touch
            </a>
          </p>
          <div>
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionBlock({ section }: { section: ComparisonSection }) {
  return (
    <>
      <tr>
        <td
          colSpan={4}
          className="px-5 pb-2 pt-5 text-xs font-semibold uppercase tracking-wider"
          style={{ color: "var(--m-text-tertiary)", background: "var(--m-bg-secondary)" }}
        >
          {section.title}
        </td>
      </tr>
      {section.rows.map((row) => (
        <tr
          key={row.feature}
          style={{ borderBottom: "1px solid var(--m-border)" }}
        >
          <td className="px-5 py-3 text-[13px]" style={{ color: "var(--m-text)" }}>
            {row.feature}
          </td>
          <td className="px-3 py-3"><div className="flex items-center justify-center"><CellContent value={row.growth} /></div></td>
          <td className="px-3 py-3"><div className="flex items-center justify-center"><CellContent value={row.scale} /></div></td>
          <td className="px-3 py-3"><div className="flex items-center justify-center"><CellContent value={row.enterprise} /></div></td>
        </tr>
      ))}
    </>
  );
}
