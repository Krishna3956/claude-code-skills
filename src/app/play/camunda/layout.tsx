import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { camundaConfig } from "@/quizzes/camunda";
const canonicalUrl = "https://www.howwellyouknow.com/play/camunda";
const description = "Think you know Camunda? Test process modeling, orchestration reliability, and workflow governance in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Camunda+Are+You%3F&tool=Camunda&slug=camunda";
export const metadata: Metadata = {
  title: "How Camunda Are You?", description, icons: { icon: "/logos/camunda.png" }, alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Camunda Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Camunda Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Camunda Are You?", description, images: [ogImageUrl] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <QuizLayout config={camundaConfig}>{children}</QuizLayout>; }
