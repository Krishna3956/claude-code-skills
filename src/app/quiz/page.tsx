"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateResults, encodeResult } from "@/lib/scoring";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const question = questions[currentIndex];
  const total = questions.length;
  const progress = ((currentIndex) / total) * 100;

  const handleSelect = useCallback(
    (answerIndex: number) => {
      if (showFeedback) return;
      setSelectedAnswer(answerIndex);
      setShowFeedback(true);
      setAnswers((prev) => ({ ...prev, [question.id]: answerIndex }));
    },
    [showFeedback, question.id]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      const finalAnswers = { ...answers };
      if (selectedAnswer !== null) {
        finalAnswers[question.id] = selectedAnswer;
      }
      const result = calculateResults(finalAnswers);
      const encoded = encodeResult(result);
      router.push(`/result?${encoded}`);
    }
  }, [currentIndex, total, answers, selectedAnswer, question.id, router]);

  const isCorrect = (answerIndex: number) => {
    if (!showFeedback) return false;
    const maxPoints = Math.max(...question.answers.map((a) => a.points));
    return question.answers[answerIndex].points === maxPoints;
  };

  const isSelected = (answerIndex: number) => selectedAnswer === answerIndex;

  const getAnswerStyle = (answerIndex: number) => {
    if (!showFeedback) {
      return "border-border hover:border-muted hover:bg-surface-light cursor-pointer";
    }
    if (isCorrect(answerIndex)) {
      return "border-correct bg-correct/10";
    }
    if (isSelected(answerIndex) && !isCorrect(answerIndex)) {
      return "border-wrong bg-wrong/10";
    }
    return "border-border opacity-50";
  };

  const difficultyColor: Record<string, string> = {
    easy: "text-correct",
    medium: "text-accent",
    hard: "text-[#e0a070]",
    expert: "text-wrong",
  };

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-8">
      {/* Progress bar */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex items-center justify-between mb-2 text-xs text-muted">
          <span>
            Question {currentIndex + 1} of {total}
          </span>
          <span className={difficultyColor[question.difficulty]}>
            {question.difficulty}
          </span>
        </div>
        <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-2xl flex flex-col gap-6"
        >
          {/* Question */}
          <div className="text-foreground text-lg sm:text-xl font-medium leading-relaxed">
            {question.question}
          </div>

          {/* Answers */}
          <div className="flex flex-col gap-3">
            {question.answers.map((answer, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={showFeedback}
                className={`w-full text-left px-5 py-4 rounded-lg border transition-all text-sm sm:text-base ${getAnswerStyle(i)}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-muted font-mono text-xs mt-0.5">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-foreground">{answer.text}</span>
                </div>
                {showFeedback && isCorrect(i) && (
                  <span className="ml-7 text-xs text-correct mt-1 block">
                    ✓ Best answer
                  </span>
                )}
                {showFeedback &&
                  isSelected(i) &&
                  !isCorrect(i) &&
                  answer.points > 0 && (
                    <span className="ml-7 text-xs text-accent mt-1 block">
                      ~ Partial credit
                    </span>
                  )}
              </button>
            ))}
          </div>

          {/* Feedback + Next */}
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4"
            >
              <div className="bg-surface border border-border rounded-lg px-5 py-4 text-sm text-muted leading-relaxed">
                <span className="text-accent font-bold">Did you know?</span>{" "}
                {question.explanation}
              </div>

              <button
                onClick={handleNext}
                className="self-end inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-bold text-background transition-all hover:bg-accent-dim active:scale-95"
              >
                {currentIndex < total - 1 ? "Next" : "See Results"}
                <span aria-hidden="true">&rarr;</span>
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <footer className="fixed bottom-6 text-xs text-muted">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/krgoyal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Krishna Goyal
        </a>
      </footer>
    </div>
  );
}
