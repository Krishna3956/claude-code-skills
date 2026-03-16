import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Interactive Product Challenges",
  description:
    "Pick a tool. 10 questions. 3 minutes. Get your skill profile and shareable scorecard. 25+ interactive challenges covering ChatGPT, Figma, Notion, Cursor, Slack, and more.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/play",
  },
  openGraph: {
    title: "Play Interactive Product Challenges | How Well You Know",
    description:
      "Pick a tool. 10 questions. 3 minutes. Get your skill profile and shareable scorecard. 25+ challenges covering ChatGPT, Figma, Notion, and more.",
    url: "https://www.howwellyouknow.com/play",
  },
  twitter: {
    title: "Play Interactive Product Challenges | How Well You Know",
    description:
      "Pick a tool. 10 questions. 3 minutes. Get your skill profile and shareable scorecard. 25+ challenges and counting.",
  },
};

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
