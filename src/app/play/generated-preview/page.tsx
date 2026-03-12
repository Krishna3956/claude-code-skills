import { QuizPage } from "@/components/quiz";
import { buildGeneratedQuizConfig } from "@/lib/generated-quiz-config";
import { getGeneratedQuizDraft } from "@/lib/generated-quiz-store";

export default function Page() {
  const config = buildGeneratedQuizConfig(getGeneratedQuizDraft());
  return <QuizPage config={config} />;
}
