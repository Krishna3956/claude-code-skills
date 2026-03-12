import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { basedashConfig } from "@/quizzes/basedash";

const canonicalUrl = "https://www.howwellyouknow.com/play/basedash";
const description = "Think you know Basedash? Test AI-native BI, trusted answers, and analytics workflow quality in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Basedash+Are+You%3F&tool=Basedash&slug=basedash";

export const metadata: Metadata = {
  title: "How Basedash Are You?",
  description,
  icons: { icon: "/logos/basedash.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Basedash Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Basedash Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Basedash Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={basedashConfig}>{children}</QuizLayout>;
}
