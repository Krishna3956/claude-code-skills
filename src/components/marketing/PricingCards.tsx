"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

interface Tier {
  name: string;
  monthly: number | null;
  yearly: number | null;
  tagline: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
}

const TIERS: Tier[] = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    tagline: "For individuals exploring",
    features: [
      "1 challenge",
      "10 cards per challenge",
      "All 5 challenge types",
      "Scoring and scorecard",
      "Shareable results",
      "Play count analytics",
    ],
    cta: "Start Free",
    ctaHref: "#early-access",
  },
  {
    name: "Growth",
    monthly: 199,
    yearly: 159,
    tagline: "For growing teams",
    features: [
      "5 challenges",
      "25 cards per challenge",
      "Custom branding (logo + color)",
      "Removable 'Powered by' badge",
      "Hosted page",
      "Plays, avg score, completion rate",
      "Auto-generated content",
      "3 team seats",
      "CSV export",
      "Email support (48hr)",
    ],
    cta: "Get Started",
    ctaHref: "#early-access",
    highlighted: true,
  },
  {
    name: "Scale",
    monthly: 449,
    yearly: 359,
    tagline: "For serious CS teams",
    features: [
      "Unlimited challenges",
      "25 cards per challenge",
      "Full brand kit (colors, fonts, logo)",
      "Removable 'Powered by' badge",
      "Hosted page + embed code",
      "Full analytics + knowledge gaps",
      "Lead capture (player emails)",
      "Auto-generation + custom prompts",
      "10 team seats",
      "CSV + API access",
      "Priority email (24hr)",
    ],
    cta: "Get Started",
    ctaHref: "#early-access",
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    tagline: "For large organizations",
    features: [
      "Everything in Scale",
      "Unlimited team seats",
      "SSO / SAML",
      "Custom domain",
      "Dedicated account manager",
      "API access + webhooks",
      "SLA + uptime guarantee",
      "Custom integrations",
    ],
    cta: "Get in Touch",
    ctaHref: "/contact",
  },
];

export default function PricingCards({ compact }: { compact?: boolean }) {
  const [yearly, setYearly] = useState(true);

  return (
    <div>
      {/* Billing toggle */}
      {!compact && (
        <div className="mb-10 flex flex-col items-center gap-3">
          <div
            className="inline-flex rounded-full p-1"
            style={{ background: "var(--m-bg-secondary)", border: "1px solid var(--m-border)" }}
          >
            <button
              onClick={() => setYearly(false)}
              className="rounded-full px-5 py-2 text-sm font-medium transition-all"
              style={{
                background: !yearly ? "var(--m-bg)" : "transparent",
                color: !yearly ? "var(--m-text)" : "var(--m-text-tertiary)",
                boxShadow: !yearly ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className="rounded-full px-5 py-2 text-sm font-medium transition-all"
              style={{
                background: yearly ? "var(--m-bg)" : "transparent",
                color: yearly ? "var(--m-text)" : "var(--m-text-tertiary)",
                boxShadow: yearly ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}
            >
              Yearly
            </button>
          </div>
          {yearly && (
            <p className="text-sm font-medium" style={{ color: "var(--m-accent)" }}>
              Save 20% on a yearly subscription
            </p>
          )}
        </div>
      )}

      {/* Cards container */}
      <div
        className="mx-auto max-w-[1100px] overflow-hidden rounded-2xl border"
        style={{ borderColor: "var(--m-border)", background: "var(--m-bg)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, idx) => {
            const price = yearly ? tier.yearly : tier.monthly;
            const isEnterprise = price === null;
            const isLast = idx === TIERS.length - 1;

            return (
              <div
                key={tier.name}
                className={`relative flex flex-col ${!isLast ? "border-b sm:border-b lg:border-b-0 lg:border-r" : ""} ${idx === 1 ? "sm:border-r" : ""} ${idx < 2 ? "sm:border-b lg:border-b-0" : ""}`}
                style={{ borderColor: "var(--m-border)" }}
              >
                <div className="flex flex-1 flex-col p-6">
                  {/* Name + badge */}
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold" style={{ color: "var(--m-text)" }}>
                      {tier.name}
                    </h3>
                    {tier.highlighted && (
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                        style={{ background: "var(--m-accent)", color: "#FFFFFF" }}
                      >
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[13px]" style={{ color: "var(--m-text-tertiary)" }}>
                    {tier.tagline}
                  </p>

                  {/* Price block - fixed height so all cards align */}
                  <div className="mt-5 min-h-[60px]">
                    {isEnterprise ? (
                      <span
                        className="text-3xl font-bold tracking-tight"
                        style={{ color: "var(--m-text)" }}
                      >
                        Custom
                      </span>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-0.5">
                          <span
                            className="text-3xl font-bold tracking-tight"
                            style={{ color: "var(--m-text)" }}
                          >
                            ${price}
                          </span>
                          {price! > 0 && (
                            <span className="text-sm" style={{ color: "var(--m-text-tertiary)" }}>
                              /mo
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs" style={{ color: "var(--m-text-tertiary)" }}>
                          {price === 0
                            ? "Free forever"
                            : yearly && !compact
                              ? "billed yearly"
                              : "\u00A0"}
                        </p>
                      </>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={tier.ctaHref}
                    className="mt-4 block rounded-lg py-2.5 text-center text-sm font-semibold transition-all hover:opacity-90"
                    style={{
                      background: tier.highlighted ? "var(--m-accent)" : "transparent",
                      color: tier.highlighted ? "#FFFFFF" : "var(--m-text)",
                      border: tier.highlighted ? "2px solid var(--m-accent)" : "1px solid var(--m-border)",
                    }}
                  >
                    {tier.cta}
                  </Link>

                  {/* Divider */}
                  <div className="my-5 h-px" style={{ background: "var(--m-border)" }} />

                  {/* Features */}
                  <ul className="flex flex-1 flex-col gap-2.5">
                    {(compact ? tier.features.slice(0, 4) : tier.features).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0"
                          style={{ color: tier.highlighted ? "var(--m-accent)" : "var(--m-text-tertiary)" }}
                        />
                        <span
                          className="text-[13px] leading-snug"
                          style={{ color: "var(--m-text-secondary)" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
