import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { langchainConfig } from "@/quizzes/langchain";

const canonicalUrl = "https://www.howwellyouknow.com/play/langchain";
const description = "Think you know LangChain? Test chains, tools, retrieval, and agent workflow knowledge in 6 rounds.";
const ogImageUrl = "/api/og?title=How+LangChain+Are+You%3F&tool=LangChain&slug=langchain";

export const metadata: Metadata = {
  title: "How LangChain Are You?",
  description,
  icons: { icon: "/logos/langchain.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How LangChain Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How LangChain Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How LangChain Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={langchainConfig}>{children}</QuizLayout>;
}
