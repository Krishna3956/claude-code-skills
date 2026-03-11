import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { e2bConfig } from "@/quizzes/e2b";

const canonicalUrl = "https://www.howwellyouknow.com/play/e2b";
const description = "Think you know E2B? Test sandbox, agent execution, and secure cloud workflow knowledge in 6 rounds.";
const ogImageUrl = "/api/og?title=How+E2B+Are+You%3F&tool=E2B&slug=e2b";

export const metadata: Metadata = {
  title: "How E2B Are You?",
  description,
  icons: { icon: "/logos/e2b.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How E2B Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How E2B Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How E2B Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={e2bConfig}>{children}</QuizLayout>;
}
