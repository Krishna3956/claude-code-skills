import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { miroConfig } from "@/quizzes/miro";
const canonicalUrl = "https://www.howwellyouknow.com/play/miro";
const description = "Think you know Miro? Test facilitation quality, workshop flow, and collaborative decision-making in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Miro+Are+You%3F&tool=Miro&slug=miro";
export const metadata: Metadata = {
  title: "How Miro Are You?", description, icons: { icon: "/logos/miro.png" }, alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Miro Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Miro Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Miro Are You?", description, images: [ogImageUrl] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <QuizLayout config={miroConfig}>{children}</QuizLayout>; }
