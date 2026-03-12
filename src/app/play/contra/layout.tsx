import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { contraConfig } from "@/quizzes/contra";

const canonicalUrl = "https://www.howwellyouknow.com/play/contra";
const description = "Independent work platform for creator-client collaboration and project workflows.";
const ogImageUrl = "/api/og?title=How+Contra+Are+You%3F&tool=Contra&slug=contra";

export const metadata: Metadata = {
  title: "How Contra Are You?",
  description,
  icons: { icon: "/logos/contra.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Contra Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Contra Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Contra Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={contraConfig}>{children}</QuizLayout>;
}
