import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { storyblokConfig } from "@/quizzes/storyblok";
const canonicalUrl = "https://www.howwellyouknow.com/play/storyblok";
const description = "Think you know Storyblok? Test content modeling, editorial workflow controls, and composable CMS governance in 6 rounds.";
const ogImageUrl = "/api/og?title=How+Storyblok+Are+You%3F&tool=Storyblok&slug=storyblok";
export const metadata: Metadata = {
  title: "How Storyblok Are You?", description, icons: { icon: "/logos/storyblok.svg" }, alternates: { canonical: canonicalUrl },
  openGraph: { title: "How Storyblok Are You?", description, url: canonicalUrl, images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Storyblok Are You?" }] },
  twitter: { card: "summary_large_image", title: "How Storyblok Are You?", description, images: [ogImageUrl] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <QuizLayout config={storyblokConfig}>{children}</QuizLayout>; }
