import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { clazarConfig } from "@/quizzes/clazar";

const canonicalUrl = "https://www.howwellyouknow.com/play/clazar";
const description =
  "Think you know Clazar? Prove it. CPPOs, private offers, Buyer 360, co-sell automation, Salesforce Experience, and serious cloud GTM operations in 5 rounds.";
const ogImageUrl =
  "/api/og?title=How+Clazar+Are+You%3F&tool=Clazar&slug=clazar";

export const metadata: Metadata = {
  title: "How Clazar Are You?",
  description,
  icons: { icon: "/logos/clazar.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Clazar Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Clazar Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Clazar Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={clazarConfig}>{children}</QuizLayout>;
}
