import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { mintlifyConfig } from "@/quizzes/mintlify";

const canonicalUrl = "https://www.howwellyouknow.com/play/mintlify";
const description = "Think you know Mintlify? Test AI-native docs platform and documentation ops knowledge in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Mintlify+Are+You%3F&tool=Mintlify&slug=mintlify";

export const metadata: Metadata = {
  title: "How Mintlify Are You?",
  description,
  icons: { icon: "/logos/mintlify.ico" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Mintlify Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Mintlify Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Mintlify Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={mintlifyConfig}>{children}</QuizLayout>;
}
