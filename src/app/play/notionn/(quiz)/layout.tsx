import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { notionConfig } from "@/quizzes/notion";

const canonicalUrl = "https://www.howwellyouknow.com/play/notionn";
const description =
  "Master Notion? Prove it. 6 rounds covering databases, blocks, formulas, and integrations. Get your shareable scorecard in ~3 minutes.";
const ogImageUrl =
  "/api/og?title=How+Notion+Are+You%3F&tool=Notion&slug=notion";

export const metadata: Metadata = {
  title: "How Notion Are You?",
  description,
  icons: { icon: "/logos/notion.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Notion Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Notion Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Notion Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QuizLayout config={{ ...notionConfig, slug: "notionn", analyticsPrefix: "notionn" }}>
      {children}
    </QuizLayout>
  );
}
