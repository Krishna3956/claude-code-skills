import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { wandbConfig } from "@/quizzes/wandb";

const canonicalUrl = "https://www.howwellyouknow.com/play/wandb";
const description = "Think you know Weights & Biases? Test experiment tracking and ML ops fundamentals in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Weights+%26+Biases+Are+You%3F&tool=Weights+%26+Biases&slug=wandb";

export const metadata: Metadata = {
  title: "How Weights & Biases Are You?",
  description,
  icons: { icon: "/logos/wandb.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Weights & Biases Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Weights & Biases Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Weights & Biases Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={wandbConfig}>{children}</QuizLayout>;
}
