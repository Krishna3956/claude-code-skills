import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { stiltaConfig } from "@/quizzes/stilta";

const canonicalUrl = "https://www.howwellyouknow.com/play/stilta";
const description =
  "Stilta power user? Test patent workflows, FTO reasoning, monitoring, and explainable AI in 6 rounds. Free quiz, no signup.";
const ogImageUrl =
  "/api/og?title=How+Stilta+Are+You%3F&tool=Stilta&slug=stilta";

export const metadata: Metadata = {
  title: "How Stilta Are You?",
  description,
  icons: { icon: "/logos/stilta.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Stilta Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Stilta Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Stilta Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={stiltaConfig}>{children}</QuizLayout>;
}
