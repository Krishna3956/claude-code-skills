import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { commandbarConfig } from "@/quizzes/commandbar";

const canonicalUrl = "https://www.howwellyouknow.com/play/commandbar";
const description = "Think you know CommandBar? Test in-product assistance, command UX, and contextual guidance design in 6 rounds.";
const ogImageUrl = "/api/og?title=How+CommandBar+Are+You%3F&tool=CommandBar&slug=commandbar";

export const metadata: Metadata = {
  title: "How CommandBar Are You?",
  description,
  icons: { icon: "/logos/commandbar.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How CommandBar Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How CommandBar Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How CommandBar Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={commandbarConfig}>{children}</QuizLayout>;
}
