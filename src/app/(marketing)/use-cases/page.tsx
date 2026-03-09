import type { Metadata } from "next";
import UseCaseShowcase from "@/components/marketing/UseCaseShowcase";
import CTASection from "@/components/marketing/CTASection";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Customer onboarding, community engagement, lead generation, documentation enhancement, or product launches. See how B2B SaaS teams use interactive challenges to educate users.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/use-cases",
  },
  openGraph: {
    title: "Use Cases - How Well You Know",
    description:
      "Customer onboarding, community engagement, lead generation, documentation, or product launches. See how B2B SaaS teams use interactive challenges.",
    url: "https://www.howwellyouknow.com/use-cases",
  },
  twitter: {
    title: "Use Cases - How Well You Know",
    description:
      "Five playbooks for B2B SaaS teams: onboarding, community, lead gen, docs, and product launches.",
  },
};

export default function UseCasesPage() {
  return (
    <>
    <section className="py-16 md:py-24" style={{ background: "var(--m-bg)" }}>
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h1
            className="mb-3 text-3xl font-bold md:text-4xl"
            style={{ color: "var(--m-text)" }}
          >
            One product, five playbooks
          </h1>
          <p
            className="mx-auto max-w-lg text-base"
            style={{ color: "var(--m-text-secondary)" }}
          >
            Customer onboarding, community engagement, lead generation,
            documentation, or product launches. Pick the use case that matters most to your team.
          </p>
        </div>
        <UseCaseShowcase />
      </div>
    </section>

    <CTASection id="early-access" source="use-cases" />
    </>
  );
}
