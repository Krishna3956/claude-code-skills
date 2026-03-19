import type { Metadata } from "next";
import UseCasePageTemplate from "@/components/marketing/UseCasePageTemplate";
import { USE_CASE_PAGES } from "@/lib/marketing-data";

const data = USE_CASE_PAGES["product-teams"];

export const metadata: Metadata = {
  title: data.metadataTitle,
  description: data.metadataDescription,
};

export default function ProductTeamsUseCasePage() {
  return <UseCasePageTemplate data={data} />;
}
