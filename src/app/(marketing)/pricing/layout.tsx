import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start with Growth and upgrade for analytics, custom branding, lead capture, and team features. Plans from $99/mo.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.howwellyouknow.com/pricing",
  },
  openGraph: {
    title: "Pricing - How Well You Know",
    description:
      "Start with Growth and upgrade for analytics, custom branding, lead capture, and team features. Plans from $99/mo.",
    url: "https://www.howwellyouknow.com/pricing",
  },
  twitter: {
    title: "Pricing - How Well You Know",
    description:
      "Start with Growth and upgrade for analytics, custom branding, and lead capture. Plans from $99/mo.",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I try it before I pay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Play any of our 25 live quizzes to see the full experience. No signup required.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when I sign up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll get a personal email from our team within 24 hours. We'll hop on a quick call to understand your use case, then build your first challenge together.",
      },
    },
    {
      "@type": "Question",
      name: "How does auto-generation work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paste a URL to your documentation. We read it and generate challenge cards across multiple formats. You review, edit, and publish. Most challenges are ready in under 10 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I embed challenges on my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Scale and Enterprise plan members get an iframe embed code that works on any website, docs site, or help center.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer annual billing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Switch to yearly billing and save 20% on Growth and Scale plans.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, at any time. Your plan stays active until the end of your current billing period. No questions asked.",
      },
    },
  ],
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </>
  );
}
