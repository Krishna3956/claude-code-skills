import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { reductoConfig } from "@/quizzes/reducto";

const canonicalUrl = "https://www.howwellyouknow.com/play/reducto";
const description =
  "Think you know Reducto? Prove it. Parse, Extract, Split, Edit, citations, multi-document pipelines, and enterprise document AI in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Reducto+Are+You%3F&tool=Reducto&slug=reducto";

export const metadata: Metadata = {
  title: "How Reducto Are You?",
  description,
  icons: { icon: "/logos/reducto.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Reducto Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Reducto Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Reducto Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={reductoConfig}>{children}</QuizLayout>;
}
