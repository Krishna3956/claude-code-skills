import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { chatgptConfig } from "@/quizzes/chatgpt";

const canonicalUrl = "https://www.howwellyouknow.com/play/chatgpt";
const description =
  "Think you know ChatGPT inside out? 15 questions across 6 rounds test your prompting, plugins, and GPT-4 knowledge. Get your skill profile in 3 min.";
const ogImageUrl =
  "/api/og?title=How+ChatGPT+Are+You%3F&tool=ChatGPT&slug=chatgpt";

export const metadata: Metadata = {
  title: "How ChatGPT Are You?",
  description,
  icons: { icon: "/logos/chatgpt.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How ChatGPT Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How ChatGPT Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How ChatGPT Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={chatgptConfig}>{children}</QuizLayout>;
}
