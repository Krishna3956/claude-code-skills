import type { Metadata } from "next";
import NotionnAnalyticsExperience from "@/components/analytics/NotionnAnalyticsExperience";

export const metadata: Metadata = {
  title: "Analytics Demo",
  description:
    "Demo analytics dashboard for the How Well You Know Notionn challenge. Review participant performance, knowledge gaps, and exportable reports.",
  alternates: {
    canonical: "https://www.howwellyouknow.com/play/notionn/analytics",
  },
};

export default function Page() {
  return <NotionnAnalyticsExperience />;
}
