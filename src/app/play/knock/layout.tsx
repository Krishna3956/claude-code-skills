import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { knockConfig } from "@/quizzes/knock";

const canonicalUrl = "https://www.howwellyouknow.com/play/knock";
const description = "Notification infrastructure to orchestrate cross-channel messaging with templates and preferences.";
const ogImageUrl = "/api/og?title=How+Knock+Are+You%3F&tool=Knock&slug=knock";

export const metadata: Metadata = {
  title: "How Knock Are You?",
  description,
  icons: { icon: "/logos/knock.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Knock Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Knock Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Knock Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={knockConfig}>{children}</QuizLayout>;
}
