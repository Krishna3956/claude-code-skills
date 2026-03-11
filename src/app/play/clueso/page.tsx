"use client";

import { QuizPage } from "@/components/quiz";
import PausedChallengeCard from "@/components/marketing/PausedChallengeCard";
import { cluesoConfig } from "@/quizzes/clueso";

export default function Page() {
  return (
    <>
      <div
        className="pointer-events-none select-none"
        style={{ filter: "grayscale(0.2) blur(1.2px)", opacity: 0.45 }}
      >
        <QuizPage config={cluesoConfig} />
      </div>
      <div
        className="fixed inset-0 z-[90] flex items-center justify-center p-4"
        style={{ background: "rgba(8, 12, 22, 0.56)", backdropFilter: "blur(2px)" }}
      >
        <PausedChallengeCard
          toolName="Clueso"
          slug="clueso"
          logoFile="clueso.png"
        />
      </div>
    </>
  );
}
