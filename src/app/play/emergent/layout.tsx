import type { Metadata } from "next";
import { QuizLayout } from "@/components/quiz";
import { emergentConfig } from "@/quizzes/emergent";

const canonicalUrl = "https://www.howwellyouknow.com/play/emergent";
const description =
  "Emergent power user? Test your marketing platform knowledge in 6 rounds. Get your shareable scorecard in 3 min. No signup required.";
const ogImageUrl =
  "/api/og?title=How+Emergent+Are+You%3F&tool=Emergent&slug=emergent";

export const metadata: Metadata = {
  title: "How Emergent Are You?",
  description,
  icons: { icon: "/logos/emergent.jpg" },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "How Emergent Are You?",
    description,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: "How Emergent Are You?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Emergent Are You?",
    description,
    images: [ogImageUrl],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QuizLayout config={emergentConfig}>{children}</QuizLayout>;
}
