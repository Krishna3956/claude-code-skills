"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Copy, Check, X } from "lucide-react";
import { QUIZ_LIST, CATEGORIES, HIDDEN_PLAY_SLUGS } from "@/lib/quiz-directory";
import CTASection from "@/components/marketing/CTASection";
import PausedChallengeCard from "@/components/marketing/PausedChallengeCard";

export default function PlayDirectoryPage() {
  const [active, setActive] = useState("All");
  const visibleQuizzes = QUIZ_LIST.filter((quiz) => !HIDDEN_PLAY_SLUGS.has(quiz.slug));
  const [selectedQuiz, setSelectedQuiz] = useState(visibleQuizzes[0]);
  const [copied, setCopied] = useState(false);
  const [pausedModalQuiz, setPausedModalQuiz] = useState<null | (typeof visibleQuizzes)[number]>(null);

  const filtered =
    active === "All"
      ? visibleQuizzes
      : visibleQuizzes.filter((q) => q.category === active);

  const quizUrl = `https://howwellyouknow.com/play/${selectedQuiz.slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(quizUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectQuiz = (quiz: (typeof visibleQuizzes)[number]) => {
    setSelectedQuiz(quiz);
    if (quiz.paused) {
      setPausedModalQuiz(quiz);
    }
  };

  return (
    <>
    <section className="min-h-screen" style={{ background: "var(--m-bg)" }}>
      <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1
            className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl"
            style={{ color: "var(--m-text)" }}
          >
            Play a challenge
          </h1>
          <p className="text-base" style={{ color: "var(--m-text-secondary)" }}>
            Pick a tool. 10 questions. 3 minutes. Get your skill profile.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-all"
              style={{
                background: active === cat ? "var(--m-accent)" : "var(--m-bg-secondary)",
                color: active === cat ? "#FFFFFF" : "var(--m-text-secondary)",
                border: active === cat ? "1px solid var(--m-accent)" : "1px solid var(--m-border)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Split layout */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left: Scrollable list */}
          <div className="w-full lg:w-[280px] lg:shrink-0">
            <div className="flex max-h-[280px] flex-col gap-2 overflow-y-auto pr-1 sm:max-h-[400px] lg:max-h-[calc(100vh-180px)] lg:pr-2">
              {filtered.map((quiz) => (
                <button
                  key={quiz.slug}
                  onClick={() => handleSelectQuiz(quiz)}
                  className="flex items-center gap-3 rounded-xl border p-3 text-left transition-all"
                  style={{
                    background:
                      selectedQuiz.slug === quiz.slug
                        ? "var(--m-accent-light)"
                        : "var(--m-bg)",
                    borderColor:
                      selectedQuiz.slug === quiz.slug
                        ? "var(--m-accent)"
                        : "var(--m-border)",
                    opacity: quiz.paused ? 0.66 : 1,
                    filter: quiz.paused ? "grayscale(0.45)" : "none",
                  }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: "var(--m-bg-secondary)" }}
                  >
                    <Image
                      src={`/logos/${quiz.logoFile}`}
                      alt={quiz.toolName}
                      width={24}
                      height={24}
                      className="rounded"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p
                        className="text-sm font-semibold"
                        style={{
                          color:
                            selectedQuiz.slug === quiz.slug
                              ? "var(--m-accent)"
                              : "var(--m-text)",
                        }}
                      >
                        {quiz.toolName}
                      </p>
                      {quiz.paused ? (
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                          style={{
                            background: "var(--m-bg-secondary)",
                            border: "1px solid var(--m-border)",
                            color: "var(--m-text-tertiary)",
                          }}
                        >
                          Paused
                        </span>
                      ) : null}
                    </div>
                    <p className="text-xs" style={{ color: "var(--m-text-tertiary)" }}>
                      10 questions &middot; ~3 min
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Embedded quiz iframe */}
          <div className="flex-1">
            <div
              className="overflow-hidden rounded-2xl border shadow-lg"
              style={{ borderColor: "var(--m-border)" }}
            >
              {/* Slim toolbar */}
              <div
                className="flex items-center justify-between px-3 py-2 sm:px-4"
                style={{ background: "var(--m-bg-secondary)", borderBottom: "1px solid var(--m-border)" }}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={`/logos/${selectedQuiz.logoFile}`}
                    alt={selectedQuiz.toolName}
                    width={18}
                    height={18}
                    className="rounded"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="text-xs font-semibold sm:text-sm" style={{ color: "var(--m-text)" }}>
                    {selectedQuiz.toolName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all hover:shadow-sm"
                    style={{ borderColor: "var(--m-border)", color: "var(--m-text-secondary)", background: "var(--m-bg)" }}
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span className="hidden sm:inline">{copied ? "Copied" : "Copy link"}</span>
                  </button>
                  {selectedQuiz.paused ? (
                    <button
                      onClick={() => setPausedModalQuiz(selectedQuiz)}
                      className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white transition-all hover:opacity-90"
                      style={{ background: "var(--m-accent)" }}
                    >
                      <ExternalLink size={12} />
                      <span className="hidden sm:inline">Request unlock</span>
                    </button>
                  ) : (
                    <Link
                      href={`/play/${selectedQuiz.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white transition-all hover:opacity-90"
                      style={{ background: "var(--m-accent)" }}
                    >
                      <ExternalLink size={12} />
                      <span className="hidden sm:inline">Open full</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Iframe - fixed height so no internal scrolling */}
              <iframe
                key={selectedQuiz.slug}
                src={`/play/${selectedQuiz.slug}?embed=true`}
                className="w-full"
                style={{ border: "none", height: "min(calc(100vh - 220px), 840px)", minHeight: 480 }}
                title={`How well do you know ${selectedQuiz.toolName}?`}
              />
            </div>
          </div>
        </div>

      </div>
    </section>

    <CTASection id="early-access" source="play" />

    {pausedModalQuiz ? (
      <div
        className="fixed inset-0 z-[90] flex items-center justify-center p-4"
        style={{ background: "rgba(8, 12, 22, 0.56)", backdropFilter: "blur(2px)" }}
      >
        <div className="relative w-full max-w-md">
          <button
            onClick={() => setPausedModalQuiz(null)}
            className="absolute -top-10 right-0 rounded-md p-1.5 text-white/90 transition-colors hover:text-white"
            aria-label="Close paused challenge modal"
          >
            <X size={18} />
          </button>
          <PausedChallengeCard
            toolName={pausedModalQuiz.toolName}
            slug={pausedModalQuiz.slug}
            logoFile={pausedModalQuiz.logoFile}
          />
        </div>
      </div>
    ) : null}
    </>
  );
}
