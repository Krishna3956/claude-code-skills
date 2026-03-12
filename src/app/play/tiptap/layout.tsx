import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { tiptapConfig } from "@/quizzes/tiptap";

const canonicalUrl = "https://www.howwellyouknow.com/play/tiptap";
const description = "Think you know Tiptap? Test extension architecture, editor state, and collaboration quality in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Tiptap+Are+You%3F&tool=Tiptap&slug=tiptap";

export const metadata: Metadata = {
  title: "How Tiptap Are You?",
  description,
  icons: { icon: "/logos/tiptap.png" },
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Tiptap Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Tiptap Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Tiptap Are You?", description, images: [ogImageUrl] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={tiptapConfig}>{children}</QuizLayout>;
}
