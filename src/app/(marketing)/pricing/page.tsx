import type { Metadata } from "next";
import CTASection from "@/components/marketing/CTASection";
import FAQAccordion from "@/components/marketing/FAQAccordion";
import FadeIn from "@/components/marketing/FadeIn";
import { PRICING_FAQS, PRICING_TIERS } from "@/lib/marketing-data";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Serious pricing for interactive product education. Pilot, Growth, and Scale plans built for B2B SaaS teams.",
};

const TABLE_ROWS = [
  ["Live challenges", "3", "10", "Unlimited"],
  ["We handle content setup", "Yes", "Yes", "Yes"],
  ["Hosted challenge pages", "Yes", "Yes", "Yes"],
  ["Embed support", "No", "Limited", "Yes"],
  ["Question-level analytics", "Basic", "Full", "Full"],
  ["Knowledge gap reporting", "No", "Yes", "Yes"],
  ["Player-level export", "No", "CSV", "CSV + custom reporting"],
  ["Support", "48 hour", "24 hour", "Priority"],
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--mk-border)] bg-white">
        <div className="pointer-events-none absolute inset-0 marketing-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">Pricing</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-tight text-[var(--mk-text)] sm:text-5xl lg:text-6xl">
              Clear pricing for teams that want users to understand the product faster.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--mk-text-soft)]">
              No free tier, no vague future promises. Pick the rollout stage that matches your team and launch challenges where product education matters most.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <FadeIn key={tier.name}>
              <div className="relative h-full rounded-[20px] border border-[var(--mk-border)] bg-white p-7 shadow-[0_10px_30px_rgba(21,32,24,0.04)]">
                {tier.badge ? (
                  <span className="absolute right-7 top-7 rounded-full bg-[var(--mk-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-accent)]">
                    {tier.badge}
                  </span>
                ) : null}
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">{tier.name}</p>
                <div className="mt-5 flex items-end gap-1">
                  <p className="text-5xl font-semibold text-[var(--mk-text)]">{tier.price}</p>
                  <p className="pb-1 text-lg text-[var(--mk-text-muted)]">{tier.cadence}</p>
                </div>
                <p className="mt-4 text-base leading-8 text-[var(--mk-text-soft)]">{tier.description}</p>
                <div className="mt-7 space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm text-[var(--mk-text-soft)]">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--mk-accent)]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--mk-border)] bg-[var(--mk-bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">Feature comparison</p>
            <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">Everything the plans include, side by side.</h2>
          </FadeIn>
          <div className="mt-10 overflow-hidden rounded-[20px] border border-[var(--mk-border)] bg-white">
            <div className="grid grid-cols-[1.3fr_repeat(3,minmax(0,1fr))] gap-px bg-[var(--mk-border)] text-sm">
              {["Feature", "Pilot", "Growth", "Scale"].map((item, index) => (
                <div
                  key={item}
                  className={`bg-[var(--mk-bg-soft)] px-4 py-4 font-semibold ${index === 1 ? "text-[var(--mk-accent)]" : "text-[var(--mk-text)]"}`}
                >
                  {item}
                </div>
              ))}
              {TABLE_ROWS.flatMap((row) =>
                row.map((cell, index) => (
                  <div
                    key={`${row[0]}-${cell}-${index}`}
                    className={`px-4 py-4 ${index === 0 ? "bg-[var(--mk-bg-card)] text-[var(--mk-text)]" : "bg-[var(--mk-bg-card)] text-[var(--mk-text-soft)]"}`}
                  >
                    {cell}
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="marketing-kicker text-xs font-semibold uppercase">FAQ</p>
          <h2 className="mt-4 text-3xl text-[var(--mk-text)] sm:text-5xl">Questions teams usually ask before they launch.</h2>
        </FadeIn>
        <div className="mt-10">
          <FAQAccordion items={PRICING_FAQS} />
        </div>
      </section>

      <CTASection id="early-access" source="pricing" />
    </>
  );
}
