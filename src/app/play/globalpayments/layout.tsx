import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { globalpaymentsConfig } from "@/quizzes/globalpayments";

const canonicalUrl = "https://www.howwellyouknow.com/play/globalpayments";
const description =
  "Think you know Global Payments? Prove it. Access tokens, restricted tokens, Hosted Fields, 3DS/auth flows, idempotency, and payment-ops decisions in 5 rounds.";
const ogImageUrl =
  "/api/og?title=How+Global+Payments+Are+You%3F&tool=Global+Payments&slug=globalpayments";

export const metadata: Metadata = {
  title: "How Global Payments Are You?",
  description,
  icons: { icon: "/logos/globalpayments.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Global Payments Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Global Payments Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Global Payments Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={globalpaymentsConfig}>{children}</QuizLayout>;
}
