import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { figmaConfig } from "@/quizzes/figma";

const canonicalUrl = "https://www.howwellyouknow.com/play/figma";
const description =
  "Put your Figma skills to the test. Auto Layout, Components, Dev Mode, and more across 6 fast-paced rounds. Free, no signup required.";
const ogImageUrl =
  "/api/og?title=How+Figma+Are+You%3F&tool=Figma&slug=figma";

export const metadata: Metadata = {
  title: "How Figma Are You?",
  description,
  icons: { icon: "/logos/figma.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Figma Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Figma Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Figma Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={figmaConfig}>{children}</QuizLayout>;
}
