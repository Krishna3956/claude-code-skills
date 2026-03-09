import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { lovableConfig } from "@/quizzes/lovable";

const canonicalUrl = "https://www.howwellyouknow.com/play/lovable";
const description =
  "Lovable AI builder? No-code app creation and prompts in 6 rounds. Free quiz—get your shareable scorecard in 3 min.";
const ogImageUrl =
  "/api/og?title=How+Lovable+Are+You%3F&tool=Lovable&slug=lovable";

export const metadata: Metadata = {
  title: "How Lovable Are You?",
  description,
  icons: { icon: "/logos/lovable.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Lovable Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Lovable Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Lovable Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={lovableConfig}>{children}</QuizLayout>;
}
