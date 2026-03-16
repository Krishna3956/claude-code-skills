import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { zensaiConfig } from "@/quizzes/zensai";

const canonicalUrl = "https://www.howwellyouknow.com/play/zensai";
const description =
  "Think you know Zensai? Prove it. Learn365, Engage365, Perform365, Microsoft 365-native admin workflows, and power-user Human Success judgment in 5 rounds.";
const ogImageUrl = "/api/og?title=How+Zensai+Are+You%3F&tool=Zensai&slug=zensai";

export const metadata: Metadata = {
  title: "How Zensai Are You?",
  description,
  icons: { icon: "/logos/zensai.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Zensai Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Zensai Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Zensai Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={zensaiConfig}>{children}</QuizLayout>;
}
