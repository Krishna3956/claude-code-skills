import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { hevoConfig } from "@/quizzes/hevo";

const canonicalUrl = "https://www.howwellyouknow.com/play/hevo";
const description =
  "Think you know Hevo Data? Test your ELT and data pipeline knowledge across connectors, CDC, transformations, and warehouse delivery in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Hevo+Are+You%3F&tool=Hevo+Data&slug=hevo";

export const metadata: Metadata = {
  title: "How Hevo Are You?",
  description,
  icons: { icon: "/logos/hevo.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Hevo Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Hevo Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Hevo Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={hevoConfig}>{children}</QuizLayout>;
}
