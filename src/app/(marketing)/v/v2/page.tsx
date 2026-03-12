import type { Metadata } from "next";
import HomepageV2Builder from "@/components/marketing/HomepageV2Builder";

export const metadata: Metadata = {
  title: "How Well You Know - Quiz Builder v2",
  description:
    "Generate a strict product quiz draft from your company docs URL.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomeV2Page() {
  return <HomepageV2Builder />;
}
