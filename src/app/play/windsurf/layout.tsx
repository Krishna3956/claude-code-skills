import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { windsurfConfig } from "@/quizzes/windsurf";

const canonicalUrl = "https://www.howwellyouknow.com/play/windsurf";
const description =
  "Windsurf expert? Prove it. AI coding, Codebase Model, and workflow shortcuts across 6 rounds. Get your shareable skill profile in 3 min.";
const ogImageUrl =
  "/api/og?title=How+Windsurf+Are+You%3F&tool=Windsurf&slug=windsurf";

export const metadata: Metadata = {
  title: "How Windsurf Are You?",
  description,
  icons: { icon: "/logos/windsurf.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Windsurf Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Windsurf Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Windsurf Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={windsurfConfig}>{children}</QuizLayout>;
}
