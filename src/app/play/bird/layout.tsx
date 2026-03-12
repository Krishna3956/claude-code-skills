import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { birdConfig } from "@/quizzes/bird";
const canonicalUrl = "https://www.howwellyouknow.com/play/bird";
const description = "Think you know Bird? Test multi-channel routing, delivery reliability, and messaging operations in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Bird+Are+You%3F&tool=Bird&slug=bird";
export const metadata: Metadata = {
  title: "How Bird Are You?", description, icons: { icon: "/logos/bird.svg" }, alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Bird Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Bird Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Bird Are You?", description, images: [ogImageUrl] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <QuizLayout config={birdConfig}>{children}</QuizLayout>; }
