import { QuizLayout } from "@/components/quiz";
import { buildGeneratedQuizConfig } from "@/lib/generated-quiz-config";
import { getGeneratedQuizDraft } from "@/lib/generated-quiz-store";

export const dynamic = "force-dynamic";

export default function Layout({ children }: { children: React.ReactNode }) {
  const config = buildGeneratedQuizConfig(getGeneratedQuizDraft());
  return <QuizLayout config={config}>{children}</QuizLayout>;
}
