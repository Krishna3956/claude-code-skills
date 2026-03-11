import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { langsmithConfig } from "@/quizzes/langsmith";

const canonicalUrl = "https://www.howwellyouknow.com/play/langsmith";
const description = "Think you know LangSmith? Test tracing, evaluation, and production LLM observability skills in 6 rounds.";
const ogImageUrl = "/api/og?title=How+LangSmith+Are+You%3F&tool=LangSmith&slug=langsmith";

export const metadata: Metadata = {
  title: "How LangSmith Are You?",
  description,
  icons: { icon: "/logos/langsmith.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How LangSmith Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How LangSmith Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How LangSmith Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={langsmithConfig}>{children}</QuizLayout>;
}
