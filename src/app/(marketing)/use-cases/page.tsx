import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/marketing/CTASection";
import FadeIn from "@/components/marketing/FadeIn";
import { USE_CASE_CARDS } from "@/lib/marketing-data";

export const metadata: Metadata = {
  title: "Use Cases",
  description: "See how customer success, marketing, community, docs, and product teams use How Well You Know.",
};

export default function UseCasesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--mk-border)] bg-white">
        <div className="pointer-events-none absolute inset-0 marketing-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">Use cases</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-tight text-[var(--mk-text)] sm:text-5xl lg:text-6xl">
              One product, five serious programs for product education.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--mk-text-soft)]">
              Start with the motion that matters most right now, then expand the same challenge format across onboarding, launches, community, docs, and demand generation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {USE_CASE_CARDS.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.slug} delay={index * 0.04}>
                <Link href={item.href} className="group block rounded-[20px] border border-[var(--mk-border)] bg-white p-7 shadow-[0_10px_30px_rgba(21,32,24,0.04)] transition hover:border-[var(--mk-border-strong)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--mk-accent-soft)] text-[var(--mk-accent)]">
                      <Icon size={20} />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--mk-text-muted)]">{item.eyebrow}</p>
                  </div>
                  <h2 className="mt-6 text-3xl text-[var(--mk-text)]">{item.title}</h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[var(--mk-text-soft)]">{item.description}</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {item.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-[16px] border border-[var(--mk-border)] bg-[var(--mk-bg-soft)] px-4 py-4">
                        <p className="text-2xl font-semibold text-[var(--mk-text)]">{metric.value}</p>
                        <p className="mt-2 text-sm text-[var(--mk-text-muted)]">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm font-semibold text-[var(--mk-accent)]">Read the playbook</p>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <CTASection id="early-access" source="use-cases" />
    </>
  );
}
