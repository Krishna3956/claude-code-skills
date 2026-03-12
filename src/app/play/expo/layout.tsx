import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { expoConfig } from "@/quizzes/expo";

const canonicalUrl = "https://www.howwellyouknow.com/play/expo";
const description =
  "Think you know Expo? Test EAS Build, config plugins, OTA updates, and universal app architecture in 6 rounds.";
const ogImageUrl =
  "/api/og?title=How+Expo+Are+You%3F&tool=Expo&slug=expo";

export const metadata: Metadata = {
  title: "How Expo Are You?",
  description,
  icons: { icon: "/logos/expo.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Expo Are You?",
    description,
    url: canonicalUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "How Expo Are You?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Expo Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={expoConfig}>{children}</QuizLayout>;
}
