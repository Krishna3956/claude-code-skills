import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { safetycultureConfig } from "@/quizzes/safetyculture";

const canonicalUrl = "https://www.howwellyouknow.com/play/safetyculture";
const description =
  "Think you know SafetyCulture? Test inspections, training, incident reporting, and compliance workflows in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+SafetyCulture+Are+You%3F&tool=SafetyCulture&slug=safetyculture";

export const metadata: Metadata = {
  title: "How SafetyCulture Are You?",
  description,
  icons: { icon: "/logos/safetyculture.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How SafetyCulture Are You?",
    description,
    url: canonicalUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "How SafetyCulture Are You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How SafetyCulture Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={safetycultureConfig}>{children}</QuizLayout>;
}
