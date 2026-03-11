import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { vwoConfig } from "@/quizzes/vwo";

const canonicalUrl = "https://www.howwellyouknow.com/play/vwo";
const description =
  "Think you know VWO? Test experimentation, insights, feature rollouts, and SDK concepts in 6 rounds.";
const ogImageUrl = "/api/og?title=How+VWO+Are+You%3F&tool=VWO&slug=vwo";

export const metadata: Metadata = {
  title: "How VWO Are You?",
  description,
  icons: { icon: "/logos/vwo.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How VWO Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How VWO Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How VWO Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={vwoConfig}>{children}</QuizLayout>;
}
