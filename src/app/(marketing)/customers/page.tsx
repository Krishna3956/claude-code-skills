import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/marketing/FadeIn";
import { getChallengeEntries } from "@/lib/marketing-data";

export const metadata: Metadata = {
  title: "Challenge Library",
  description: "Explore demo challenge builds and live examples already created on How Well You Know.",
};

export default function CustomersPage() {
  const challenges = getChallengeEntries();

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--mk-border)] bg-white">
        <div className="pointer-events-none absolute inset-0 marketing-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="marketing-kicker text-xs font-semibold uppercase">Challenge library</p>
            <h1 className="mt-5 max-w-5xl text-4xl leading-tight text-[var(--mk-text)] sm:text-5xl lg:text-6xl">
              Demo challenge builds across developer tools, product software, and B2B SaaS.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--mk-text-soft)]">
              These are demo challenges we&apos;ve created to show how the format works across different products and product education use cases. They are examples, not customer logos.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-white px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {challenges.map((challenge, index) => (
            <FadeIn key={challenge.slug} delay={(index % 12) * 0.02}>
              <Link href={challenge.href} className="flex h-full items-center gap-4 rounded-[18px] border border-[var(--mk-border)] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(21,32,24,0.04)] transition hover:border-[var(--mk-border-strong)]">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-[var(--mk-border)] bg-[var(--mk-bg-strong)]">
                  {challenge.logoPath ? (
                    <Image src={challenge.logoPath} alt={challenge.name} width={44} height={44} className="h-10 w-10 object-contain" />
                  ) : (
                    <span className="text-sm font-semibold text-[var(--mk-accent)]">{challenge.name.slice(0, 2).toUpperCase()}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[var(--mk-text)]">{challenge.name}</p>
                  <p className="text-sm text-[var(--mk-text-muted)]">Open demo challenge</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
