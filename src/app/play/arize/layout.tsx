import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { arizeConfig } from "@/quizzes/arize";

const canonicalUrl = "https://www.howwellyouknow.com/play/arize";
const description =
  "Think you know Arize? Prove it. Tracing, evals, experiments, annotations, dashboards, and production-grade AI reliability judgment in 5 rounds.";
const ogImageUrl = "/api/og?title=How+Arize+Are+You%3F&tool=Arize&slug=arize";

export const metadata: Metadata = {
  title: "How Arize Are You?",
  description,
  icons: { icon: "/logos/arize.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Arize Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Arize Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Arize Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={arizeConfig}>{children}</QuizLayout>;
}
