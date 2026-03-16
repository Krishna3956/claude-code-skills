import type { Metadata } from "next";
import AirtableeAnalyticsExperience from "@/components/analytics/AirtableeAnalyticsExperience";

export const metadata: Metadata = {
  title: "Analytics Demo — Airtable",
  description:
    "Demo analytics dashboard for the How Well You Know Airtable challenge. Review participant performance, knowledge gaps, and exportable reports.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/play/airtablee/analytics",
  },
};

export default function Page() {
  return <AirtableeAnalyticsExperience />;
}
