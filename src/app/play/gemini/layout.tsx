import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { geminiConfig } from "@/quizzes/gemini";

const canonicalUrl = "https://www.howwellyouknow.com/play/gemini";
const description =
  "How well do you know Google Gemini? Test multimodal AI, prompts, and Gemini Pro features in 6 rounds. Free quiz, shareable score in 3 min.";
const ogImageUrl =
  "/api/og?title=How+Gemini+Are+You%3F&tool=Gemini&slug=gemini";

export const metadata: Metadata = {
  title: "How Gemini Are You?",
  description,
  icons: { icon: "/logos/gemini.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Gemini Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Gemini Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Gemini Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={geminiConfig}>{children}</QuizLayout>;
}
