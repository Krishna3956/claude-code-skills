import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { chameleonConfig } from "@/quizzes/chameleon";

const canonicalUrl = "https://www.howwellyouknow.com/play/chameleon";
const description = "Think you know Chameleon? Test product adoption strategy, targeting, and in-app guidance workflows in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Chameleon+Are+You%3F&tool=Chameleon&slug=chameleon";

export const metadata: Metadata = {
  title: "How Chameleon Are You?",
  description,
  icons: { icon: "/logos/chameleon.svg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Chameleon Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Chameleon Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Chameleon Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={chameleonConfig}>{children}</QuizLayout>;
}
