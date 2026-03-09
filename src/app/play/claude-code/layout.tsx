import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { claudeCodeConfig } from "@/quizzes/claude-code";

const canonicalUrl = "https://www.howwellyouknow.com/play/claude-code";
const description =
  "Test your Claude Code chops. Sandbox workflows, project navigation, and AI-assisted coding—all in 6 rounds. Free, no signup. Get your score.";
const ogImageUrl =
  "/api/og?title=How+Claude+Code+Are+You%3F&tool=Claude+Code&slug=claude-code";

export const metadata: Metadata = {
  title: "How Claude Code Are You?",
  description,
  icons: { icon: "/logos/claude-ai-icon.webp" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Claude Code Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Claude Code Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Claude Code Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={claudeCodeConfig}>{children}</QuizLayout>;
}
