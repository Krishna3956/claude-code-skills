import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { apifoxConfig } from "@/quizzes/apifox";

const canonicalUrl = "https://www.howwellyouknow.com/play/apifox";
const description = "Think you know Apifox? Test API contracts, validation workflows, and quality governance in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Apifox+Are+You%3F&tool=Apifox&slug=apifox";
export const metadata: Metadata = {
  title: "How Apifox Are You?", description, icons: { icon: "/logos/apifox.svg" }, alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Apifox Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Apifox Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Apifox Are You?", description, images: [ogImageUrl] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <QuizLayout config={apifoxConfig}>{children}</QuizLayout>; }
