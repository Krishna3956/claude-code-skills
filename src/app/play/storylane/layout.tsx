import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { storylaneConfig } from "@/quizzes/storylane";

const canonicalUrl = "https://www.howwellyouknow.com/play/storylane";
const description =
  "Think you know Storylane? Prove it. Guided demos, sandbox flows, Buyer Hub, RepX, personalization, and presenter workflows in 5 rounds.";
const ogImageUrl =
  "/api/og?title=How+Storylane+Are+You%3F&tool=Storylane&slug=storylane";

export const metadata: Metadata = {
  title: "How Storylane Are You?",
  description,
  icons: { icon: "/logos/storylane.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Storylane Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Storylane Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Storylane Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={storylaneConfig}>{children}</QuizLayout>;
}
