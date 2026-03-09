"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TOOLS = [
  { slug: "chatgpt", name: "ChatGPT", logo: "chatgpt.svg" },
  { slug: "figma", name: "Figma", logo: "figma.svg" },
  { slug: "notion", name: "Notion", logo: "notion.png" },
  { slug: "cursor", name: "Cursor", logo: "cursor.png" },
];

const QUESTIONS = [
  {
    type: "truth-myth" as const,
    typeLabel: "Truth or Myth",
    prompt: "ChatGPT can browse the internet in real-time during a conversation",
    options: ["Truth", "Myth"],
    correctIndex: 0,
    explanation:
      "With the browsing feature enabled, ChatGPT can search the web for current information.",
  },
  {
    type: "this-or-that" as const,
    typeLabel: "This or That",
    prompt: "To generate an image, would you use ChatGPT or DALL-E?",
    options: ["ChatGPT", "DALL-E"],
    correctIndex: 0,
    explanation:
      "ChatGPT has DALL-E built in. You can generate images directly in the chat.",
  },
  {
    type: "quick-pick" as const,
    typeLabel: "Quick Pick",
    prompt: "What is the maximum context window for GPT-4?",
    options: ["32K tokens", "128K tokens", "1M tokens"],
    correctIndex: 1,
    explanation: "GPT-4 Turbo supports up to 128K tokens of context.",
  },
];

type State = "start" | "question" | "feedback" | "complete";

export default function MiniDemo() {
  const [state, setState] = useState<State>("start");
  const [selectedTool, setSelectedTool] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = QUESTIONS[questionIndex];
  const isLastQuestion = questionIndex === QUESTIONS.length - 1;

  const handleStart = () => {
    setState("question");
  };

  const handleAnswer = (index: number) => {
    setSelectedIndex(index);
    const correct = index === currentQuestion.correctIndex;
    setIsCorrect(correct);
    setScore((s) => s + (correct ? 1 : 0));
    setState("feedback");
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setState("complete");
    } else {
      setQuestionIndex((i) => i + 1);
      setSelectedIndex(null);
      setState("question");
    }
  };

  const containerStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
  };

  const progressWidth = state === "question" || state === "feedback"
    ? `${((questionIndex + (state === "feedback" ? 1 : 0)) / QUESTIONS.length) * 100}%`
    : "0%";

  if (state === "start") {
    return (
      <div style={containerStyle}>
        <div
          className="rounded-2xl p-5 text-center shadow-md sm:p-8"
          style={{
            background: "var(--m-bg)",
            border: "1px solid var(--m-border)",
          }}
        >
          <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {TOOLS.map((tool, i) => (
              <button
                key={tool.name}
                type="button"
                onClick={() => setSelectedTool(i)}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                style={{
                  border: i === selectedTool ? "2px solid var(--m-accent)" : "1px solid var(--m-border)",
                  background: i === selectedTool ? "var(--m-accent-light)" : "var(--m-bg)",
                  color: i === selectedTool ? "var(--m-accent)" : "var(--m-text-secondary)",
                }}
              >
                <Image
                  src={`/logos/${tool.logo}`}
                  alt={tool.name}
                  width={20}
                  height={20}
                  className="rounded"
                  style={{ objectFit: "contain" }}
                />
                {tool.name}
              </button>
            ))}
          </div>
          <p
            className="mb-6 text-lg font-medium"
            style={{ color: "var(--m-text)" }}
          >
            Try 3 {TOOLS[selectedTool].name} questions
          </p>
          <button
            type="button"
            onClick={handleStart}
            className="rounded-lg px-8 py-3.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] hover:bg-[var(--m-accent-hover)]"
            style={{
              background: "var(--m-accent)",
              color: "#FFFFFF",
            }}
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  if (state === "question" && currentQuestion) {
    return (
      <div style={containerStyle}>
        <div
          className="overflow-hidden rounded-2xl shadow-md"
          style={{
            background: "var(--m-bg)",
            border: "1px solid var(--m-border)",
          }}
        >
          <div className="h-1 w-full" style={{ background: "var(--m-border-subtle)" }}>
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{ width: progressWidth, background: "var(--m-accent)" }}
            />
          </div>
          <div className="p-5 text-center sm:p-8">
            <span
              className="mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
              style={{ background: "var(--m-accent-light)", color: "var(--m-accent)" }}
            >
              {currentQuestion.typeLabel}
            </span>
            <p
              className="mb-2 text-xs font-medium uppercase tracking-wider"
              style={{ color: "var(--m-text-tertiary)" }}
            >
              Question {questionIndex + 1} of 3
            </p>
            <p
              className="mb-4 text-sm font-medium leading-relaxed sm:mb-6 sm:text-base md:text-lg"
              style={{ color: "var(--m-text)" }}
            >
              {currentQuestion.prompt}
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              {currentQuestion.options.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleAnswer(i)}
                  className="rounded-lg border px-3 py-2.5 text-sm font-medium transition-all hover:scale-[1.01] hover:bg-[var(--m-accent-light)] hover:border-[var(--m-accent)] sm:px-4 sm:py-3"
                  style={{
                    background: "var(--m-bg)",
                    borderColor: "var(--m-border)",
                    color: "var(--m-text)",
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (state === "feedback" && currentQuestion) {
    return (
      <div style={containerStyle}>
        <div
          className="overflow-hidden rounded-2xl shadow-md"
          style={{
            background: "var(--m-bg)",
            border: "1px solid var(--m-border)",
          }}
        >
          <div className="h-1 w-full" style={{ background: "var(--m-border-subtle)" }}>
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{ width: progressWidth, background: "var(--m-accent)" }}
            />
          </div>
          <div className="p-5 text-center sm:p-8">
            <div
              className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
              style={{
                background: isCorrect ? "var(--correct)" : "var(--wrong)",
                color: "white",
              }}
            >
              {isCorrect ? "✓" : "✗"}
            </div>
            <p
              className="mb-2 text-lg font-semibold"
              style={{
                color: isCorrect ? "var(--correct)" : "var(--wrong)",
              }}
            >
              {isCorrect ? "Correct!" : "Incorrect"}
            </p>
            <p
              className="mb-6 text-sm leading-relaxed"
              style={{ color: "var(--m-text-secondary)" }}
            >
              {currentQuestion.explanation}
            </p>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-lg px-6 py-3.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] hover:bg-[var(--m-accent-hover)]"
              style={{
                background: "var(--m-accent)",
                color: "#FFFFFF",
              }}
            >
              {isLastQuestion ? "See score" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (state === "complete") {
    return (
      <div style={containerStyle}>
        <div
          className="overflow-hidden rounded-2xl shadow-md"
          style={{
            background: "var(--m-bg)",
            border: "1px solid var(--m-border)",
          }}
        >
          <div className="h-1 w-full" style={{ background: "var(--m-accent)" }} />
          <div className="p-5 text-center sm:p-8">
            <p
              className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: "var(--m-accent)" }}
            >
              {score}/3 correct
            </p>
            <p
              className="mb-6 text-sm"
              style={{ color: "var(--m-text-secondary)" }}
            >
              Nice! Ready for the full challenge?
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`/play/${TOOLS[selectedTool].slug}`}
                className="inline-block rounded-lg px-6 py-3.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] hover:bg-[var(--m-accent-hover)]"
                style={{
                  background: "var(--m-accent)",
                  color: "#FFFFFF",
                }}
              >
                Play the full challenge &rarr;
              </Link>
              <Link
                href="#early-access"
                className="inline-block rounded-lg border px-6 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]"
                style={{
                  color: "var(--m-accent)",
                  borderColor: "var(--m-accent)",
                }}
              >
                Get this for your product
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
