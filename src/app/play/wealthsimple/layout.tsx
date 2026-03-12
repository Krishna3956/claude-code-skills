import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { wealthsimpleConfig } from "@/quizzes/wealthsimple";

const canonicalUrl = "https://www.howwellyouknow.com/play/wealthsimple";
const description =
  "Think you know Wealthsimple? Test investing, tax optimization, account types, and financial literacy in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Wealthsimple+Are+You%3F&tool=Wealthsimple&slug=wealthsimple";

export const metadata: Metadata = {
  title: "How Wealthsimple Are You?",
  description,
  icons: { icon: "/logos/wealthsimple.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Wealthsimple Are You?",
    description,
    url: canonicalUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "How Wealthsimple Are You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Wealthsimple Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={wealthsimpleConfig}>{children}</QuizLayout>;
}
