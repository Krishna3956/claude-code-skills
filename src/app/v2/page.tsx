"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  challenges,
  ROUND_CONFIG,
  TruthOrMythChallenge,
  ThisOrThatChallenge,
  QuickPickChallenge,
  SpeedPickChallenge,
  MatchPairsChallenge,
} from "@/data/challenges";
import { ChallengeResult, calculateV2Results } from "@/lib/v2scoring";
import { encodeResult } from "@/lib/scoring";

// ────────────────────────────────────────────────────────────
// HOMESCREEN
// ────────────────────────────────────────────────────────────
function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-6 max-w-sm"
      >
        <div className="text-6xl">🧠</div>

        <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
          How well do you
          <br />
          <span className="text-accent">know Claude Code?</span>
        </h1>

        <p className="text-muted text-sm leading-relaxed">
          6 rounds. 18 challenges. No coding required.
          <br />
          Just you vs. Claude Code trivia.
        </p>

        <div className="flex flex-col gap-2 w-full text-xs text-muted">
          {ROUND_CONFIG.map((round, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2.5 bg-surface border border-border rounded-lg"
            >
              <span className="text-base">{round.icon}</span>
              <span className="text-foreground font-medium">{round.name}</span>
              <span className="ml-auto text-muted">{round.description}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="mt-2 w-full py-4 rounded-xl bg-accent text-background font-bold text-base transition-all hover:bg-accent-dim active:scale-95"
        >
          Let&apos;s Go
        </button>

        <p className="text-[11px] text-muted">
          ~3 min &middot; no signup &middot; shareable results
        </p>
      </motion.div>

      <footer className="fixed bottom-4 text-xs text-muted">
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

// ────────────────────────────────────────────────────────────
// TRUTH OR MYTH
// ────────────────────────────────────────────────────────────
function TruthOrMythCard({
  challenge,
  onAnswer,
}: {
  challenge: TruthOrMythChallenge;
  onAnswer: (correct: boolean) => void;
}) {
  const [answered, setAnswered] = useState<boolean | null>(null);
  const isCorrect = answered !== null ? answered === challenge.isTrue : null;

  const handlePick = (pick: boolean) => {
    if (answered !== null) return;
    setAnswered(pick);
    onAnswer(pick === challenge.isTrue);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="bg-surface border border-border rounded-xl px-6 py-8 w-full text-center">
        <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
          &ldquo;{challenge.statement}&rdquo;
        </p>
      </div>

      <div className="flex gap-4 w-full">
        <button
          onClick={() => handlePick(true)}
          disabled={answered !== null}
          className={`flex-1 py-5 rounded-xl text-lg font-bold transition-all active:scale-95 ${
            answered === null
              ? "bg-correct/20 border-2 border-correct/40 text-correct hover:bg-correct/30"
              : answered === true
                ? isCorrect
                  ? "bg-correct/30 border-2 border-correct text-correct"
                  : "bg-wrong/30 border-2 border-wrong text-wrong"
                : "opacity-30 border-2 border-border text-muted"
          }`}
        >
          ✓ Truth
        </button>
        <button
          onClick={() => handlePick(false)}
          disabled={answered !== null}
          className={`flex-1 py-5 rounded-xl text-lg font-bold transition-all active:scale-95 ${
            answered === null
              ? "bg-wrong/20 border-2 border-wrong/40 text-wrong hover:bg-wrong/30"
              : answered === false
                ? isCorrect
                  ? "bg-correct/30 border-2 border-correct text-correct"
                  : "bg-wrong/30 border-2 border-wrong text-wrong"
                : "opacity-30 border-2 border-border text-muted"
          }`}
        >
          ✗ Myth
        </button>
      </div>

      {answered !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full rounded-xl px-5 py-4 text-sm leading-relaxed ${
            isCorrect
              ? "bg-correct/10 border border-correct/30 text-correct"
              : "bg-wrong/10 border border-wrong/30 text-wrong"
          }`}
        >
          <span className="font-bold">{isCorrect ? "Nailed it!" : "Not quite!"}</span>{" "}
          <span className="text-foreground/80">{challenge.explanation}</span>
        </motion.div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// THIS OR THAT
// ────────────────────────────────────────────────────────────
function ThisOrThatCard({
  challenge,
  onAnswer,
}: {
  challenge: ThisOrThatChallenge;
  onAnswer: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<"A" | "B" | null>(null);
  const isCorrect = picked !== null ? picked === challenge.correct : null;

  const handlePick = (pick: "A" | "B") => {
    if (picked !== null) return;
    setPicked(pick);
    onAnswer(pick === challenge.correct);
  };

  const getStyle = (option: "A" | "B") => {
    if (picked === null)
      return "border-border hover:border-accent hover:bg-surface-light cursor-pointer";
    if (option === challenge.correct) return "border-correct bg-correct/10";
    if (option === picked) return "border-wrong bg-wrong/10";
    return "border-border opacity-40";
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="bg-surface border border-border rounded-xl px-5 py-5 w-full text-center">
        <p className="text-base sm:text-lg text-foreground leading-relaxed">
          {challenge.scenario}
        </p>
      </div>

      <div className="flex gap-3 sm:gap-4 w-full">
        <button
          onClick={() => handlePick("A")}
          disabled={picked !== null}
          className={`flex-1 py-5 sm:py-6 px-3 sm:px-4 rounded-xl border-2 text-center transition-all active:scale-95 ${getStyle("A")}`}
        >
          <span className="text-sm sm:text-base font-medium text-foreground">
            {challenge.optionA}
          </span>
        </button>
        <div className="flex items-center">
          <span className="text-muted text-xs font-bold">or</span>
        </div>
        <button
          onClick={() => handlePick("B")}
          disabled={picked !== null}
          className={`flex-1 py-5 sm:py-6 px-3 sm:px-4 rounded-xl border-2 text-center transition-all active:scale-95 ${getStyle("B")}`}
        >
          <span className="text-sm sm:text-base font-medium text-foreground">
            {challenge.optionB}
          </span>
        </button>
      </div>

      {picked !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full rounded-xl px-5 py-4 text-sm leading-relaxed ${
            isCorrect
              ? "bg-correct/10 border border-correct/30 text-correct"
              : "bg-wrong/10 border border-wrong/30 text-wrong"
          }`}
        >
          <span className="font-bold">{isCorrect ? "Exactly!" : "Close!"}</span>{" "}
          <span className="text-foreground/80">{challenge.explanation}</span>
        </motion.div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// QUICK PICK (scenario + 3 options, no code)
// ────────────────────────────────────────────────────────────
function QuickPickCard({
  challenge,
  onAnswer,
}: {
  challenge: QuickPickChallenge;
  onAnswer: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const isCorrect = picked !== null ? picked === challenge.blank : null;

  const handlePick = (option: string) => {
    if (picked !== null) return;
    setPicked(option);
    onAnswer(option === challenge.blank);
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="bg-surface border border-border rounded-xl px-5 py-5 w-full text-center">
        <p className="text-base sm:text-lg text-foreground leading-relaxed">
          {challenge.scenario}
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {challenge.options.map((opt: string) => {
          const isThis = picked === opt;
          const isAnswer = opt === challenge.blank;
          let style =
            "border-border hover:border-accent hover:bg-surface-light cursor-pointer";
          if (picked !== null) {
            if (isAnswer) style = "border-correct bg-correct/10 text-correct";
            else if (isThis) style = "border-wrong bg-wrong/10 text-wrong";
            else style = "border-border opacity-40";
          }
          return (
            <button
              key={opt}
              onClick={() => handlePick(opt)}
              disabled={picked !== null}
              className={`w-full px-5 py-4 rounded-xl border-2 text-left text-sm sm:text-base font-medium transition-all active:scale-95 ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full rounded-xl px-5 py-4 text-sm leading-relaxed ${
            isCorrect
              ? "bg-correct/10 border border-correct/30 text-correct"
              : "bg-wrong/10 border border-wrong/30 text-wrong"
          }`}
        >
          <span className="font-bold">{isCorrect ? "Spot on!" : "Not quite!"}</span>{" "}
          <span className="text-foreground/80">{challenge.explanation}</span>
        </motion.div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// SPEED PICK (timed, tap correct items)
// ────────────────────────────────────────────────────────────
function SpeedPickCard({
  challenge,
  onAnswer,
}: {
  challenge: SpeedPickChallenge;
  onAnswer: (correct: boolean) => void;
}) {
  const allItems = useRef(
    [...challenge.correctItems, ...challenge.wrongItems].sort(
      () => Math.random() - 0.5
    )
  );
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(challenge.timeLimit);
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);

  const finishRound = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setDone(true);
  }, []);

  useEffect(() => {
    if (done) return;
    if (timeLeft <= 0) {
      finishRound();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, done, finishRound]);

  useEffect(() => {
    if (!done) return;
    const correctPicks = [...selected].filter((s) =>
      challenge.correctItems.includes(s)
    ).length;
    const wrongPicks = [...selected].filter((s) =>
      challenge.wrongItems.includes(s)
    ).length;
    const total = challenge.correctItems.length;
    const score = Math.max(0, correctPicks - wrongPicks);
    onAnswer(score >= total * 0.5);
  }, [done, selected, challenge, onAnswer]);

  const toggleItem = (item: string) => {
    if (done) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const getItemStyle = (item: string) => {
    const isSel = selected.has(item);
    const isRight = challenge.correctItems.includes(item);

    if (!done) {
      return isSel
        ? "border-accent bg-accent/20 text-accent"
        : "border-border hover:border-muted";
    }

    if (isRight && isSel) return "border-correct bg-correct/15 text-correct";
    if (isRight && !isSel) return "border-correct/30 bg-correct/5 text-correct/60";
    if (!isRight && isSel) return "border-wrong bg-wrong/15 text-wrong";
    return "border-border opacity-30";
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="w-full flex items-center gap-3">
        <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${timeLeft <= 3 ? "bg-wrong" : "bg-accent"}`}
            initial={{ width: "100%" }}
            animate={{ width: `${(timeLeft / challenge.timeLimit) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span
          className={`font-mono text-sm font-bold w-6 text-right ${timeLeft <= 3 ? "text-wrong" : "text-accent"}`}
        >
          {timeLeft}
        </span>
      </div>

      <p className="text-sm text-muted text-center">{challenge.prompt}</p>

      <div className="flex flex-wrap gap-3 justify-center w-full">
        {allItems.current.map((item: string) => (
          <button
            key={item}
            onClick={() => toggleItem(item)}
            disabled={done}
            className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all active:scale-95 ${getItemStyle(item)}`}
          >
            {item}
          </button>
        ))}
      </div>

      {!done && (
        <button
          onClick={finishRound}
          className="mt-2 px-6 py-2.5 rounded-lg bg-accent/20 border border-accent/40 text-accent text-sm font-bold hover:bg-accent/30 transition-all"
        >
          Lock In
        </button>
      )}

      {done && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-xl px-5 py-4 text-sm leading-relaxed bg-surface border border-border"
        >
          <span className="text-foreground/80">{challenge.explanation}</span>
        </motion.div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// MATCH PAIRS (fixed: tracks wrong attempts for scoring)
// ────────────────────────────────────────────────────────────
function MatchPairsCard({
  challenge,
  onAnswer,
}: {
  challenge: MatchPairsChallenge;
  onAnswer: (correct: boolean) => void;
}) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Record<number, number>>({});
  const [wrong, setWrong] = useState<{ left: number; right: number } | null>(
    null
  );
  const [done, setDone] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  const shuffledLeft = useRef(
    challenge.pairs
      .map((p, i) => ({ text: p.left, originalIndex: i }))
      .sort(() => Math.random() - 0.5)
  );

  const shuffledRight = useRef(
    challenge.pairs
      .map((p, i) => ({ text: p.right, originalIndex: i }))
      .sort(() => Math.random() - 0.5)
  );

  const handleLeftClick = (shuffledIndex: number) => {
    const item = shuffledLeft.current[shuffledIndex];
    if (done || matched[item.originalIndex] !== undefined) return;
    setSelectedLeft(shuffledIndex);
    setWrong(null);
  };

  const handleRightClick = (shuffledIndex: number) => {
    if (done || selectedLeft === null) return;
    const leftItem = shuffledLeft.current[selectedLeft];
    const rightItem = shuffledRight.current[shuffledIndex];

    if (matched[rightItem.originalIndex] !== undefined) return;

    if (leftItem.originalIndex === rightItem.originalIndex) {
      const newMatched = {
        ...matched,
        [leftItem.originalIndex]: rightItem.originalIndex,
      };
      setMatched(newMatched);
      setSelectedLeft(null);
      setWrong(null);

      if (Object.keys(newMatched).length === challenge.pairs.length) {
        setDone(true);
        onAnswer(mistakes <= 1);
      }
    } else {
      setMistakes((m) => m + 1);
      setWrong({ left: selectedLeft, right: shuffledIndex });
      setTimeout(() => {
        setWrong(null);
        setSelectedLeft(null);
      }, 500);
    }
  };

  const isLeftMatched = (si: number) =>
    matched[shuffledLeft.current[si].originalIndex] !== undefined;
  const isRightMatched = (si: number) =>
    matched[shuffledRight.current[si].originalIndex] !== undefined;

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <p className="text-sm text-muted text-center">
        Tap a problem on the left, then its solution on the right
      </p>

      <div className="flex gap-3 sm:gap-4 w-full">
        <div className="flex-1 flex flex-col gap-2">
          {shuffledLeft.current.map((item, si) => (
            <button
              key={si}
              onClick={() => handleLeftClick(si)}
              disabled={isLeftMatched(si)}
              className={`w-full px-3 py-3.5 rounded-lg border-2 text-left text-xs sm:text-sm transition-all ${
                isLeftMatched(si)
                  ? "border-correct/40 bg-correct/10 text-correct"
                  : selectedLeft === si
                    ? "border-accent bg-accent/10 text-accent"
                    : wrong?.left === si
                      ? "border-wrong bg-wrong/10 text-wrong"
                      : "border-border hover:border-muted text-foreground"
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {shuffledRight.current.map((item, si) => (
            <button
              key={si}
              onClick={() => handleRightClick(si)}
              disabled={isRightMatched(si)}
              className={`w-full px-3 py-3.5 rounded-lg border-2 text-left text-xs sm:text-sm transition-all ${
                isRightMatched(si)
                  ? "border-correct/40 bg-correct/10 text-correct"
                  : wrong?.right === si
                    ? "border-wrong bg-wrong/10 text-wrong"
                    : "border-border hover:border-muted text-foreground"
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>

      {done && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-xl px-5 py-4 text-sm leading-relaxed bg-correct/10 border border-correct/30 text-correct"
        >
          <span className="font-bold">
            {mistakes === 0 ? "Perfect matches!" : "All connected!"}
          </span>{" "}
          <span className="text-foreground/80">{challenge.explanation}</span>
        </motion.div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// MAIN GAME PAGE
// ────────────────────────────────────────────────────────────
export default function V2Page() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<ChallengeResult[]>([]);
  const [showingRoundIntro, setShowingRoundIntro] = useState(true);
  const [answered, setAnswered] = useState(false);

  const challenge = challenges[currentIndex];
  const total = challenges.length;

  const currentRound = ROUND_CONFIG.find((r) => r.ids.includes(challenge.id));
  const isFirstOfRound = currentRound
    ? currentRound.ids[0] === challenge.id
    : false;

  useEffect(() => {
    if (!started) return;
    if (isFirstOfRound) {
      setShowingRoundIntro(true);
      const timer = setTimeout(() => setShowingRoundIntro(false), 1500);
      return () => clearTimeout(timer);
    } else {
      setShowingRoundIntro(false);
    }
  }, [currentIndex, isFirstOfRound, started]);

  const handleAnswer = useCallback(
    (correct: boolean) => {
      setAnswered(true);
      setResults((prev) => [
        ...prev,
        {
          challengeId: challenge.id,
          earned: correct ? 1 : 0,
          possible: 1,
          dimension: challenge.dimension,
        },
      ]);
    },
    [challenge]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
    } else {
      const finalResult = calculateV2Results(results);
      const encoded = encodeResult(finalResult);
      router.push(`/result?${encoded}`);
    }
  }, [currentIndex, total, results, router]);

  if (!started) {
    return <HomeScreen onStart={() => setStarted(true)} />;
  }

  const progress = ((currentIndex + 1) / total) * 100;

  if (showingRoundIntro && currentRound) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <div className="text-5xl">{currentRound.icon}</div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {currentRound.name}
          </h2>
          <p className="text-muted text-sm">{currentRound.description}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-6 sm:py-8">
      <div className="w-full max-w-lg mb-6">
        <div className="flex items-center justify-between mb-2 text-xs text-muted">
          <span className="flex items-center gap-2">
            {currentRound && (
              <>
                <span>{currentRound.icon}</span>
                <span>{currentRound.name}</span>
              </>
            )}
          </span>
          <span>
            {currentIndex + 1}/{total}
          </span>
        </div>
        <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={challenge.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-lg"
        >
          {challenge.type === "truth_or_myth" && (
            <TruthOrMythCard challenge={challenge} onAnswer={handleAnswer} />
          )}
          {challenge.type === "this_or_that" && (
            <ThisOrThatCard challenge={challenge} onAnswer={handleAnswer} />
          )}
          {challenge.type === "quick_pick" && (
            <QuickPickCard challenge={challenge} onAnswer={handleAnswer} />
          )}
          {challenge.type === "speed_pick" && (
            <SpeedPickCard challenge={challenge} onAnswer={handleAnswer} />
          )}
          {challenge.type === "match_pairs" && (
            <MatchPairsCard challenge={challenge} onAnswer={handleAnswer} />
          )}
        </motion.div>
      </AnimatePresence>

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-bold text-background transition-all hover:bg-accent-dim active:scale-95"
          >
            {currentIndex < total - 1 ? "Next" : "See My Results"}
            <span aria-hidden="true">&rarr;</span>
          </button>
        </motion.div>
      )}

      <footer className="fixed bottom-4 text-xs text-muted">
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
