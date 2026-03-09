import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { cursorConfig } from "@/quizzes/cursor";

const canonicalUrl = "https://www.howwellyouknow.com/play/cursor";
const description =
  "How well do you really know Cursor IDE? Test your knowledge of AI features, Composer, and keyboard shortcuts in this 3-minute challenge.";
const ogImageUrl =
  "/api/og?title=How+Cursor+Are+You%3F&tool=Cursor&slug=cursor";

export const metadata: Metadata = {
  title: "How Cursor Are You?",
  description,
  icons: { icon: "/logos/cursor.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Cursor Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Cursor Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Cursor Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={cursorConfig}>{children}</QuizLayout>;
}
