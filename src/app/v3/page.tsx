"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  v3challenges,
  V3_ROUND_CONFIG,
  TruthOrMythChallenge,
  ThisOrThatChallenge,
  QuickPickChallenge,
  SpeedPickChallenge,
  RankItChallenge,
} from "@/data/v3challenges";
import { ChallengeResult, calculateV2Results } from "@/lib/v2scoring";
import { encodeResult } from "@/lib/scoring";

const LINKEDIN_URL = "https://www.linkedin.com/in/krishnaa-goyal/";

// ────────────────────────────────────────────────────────────
// HOMESCREEN
// ────────────────────────────────────────────────────────────
function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center gap-7 max-w-sm w-full"
      >
        {/* Logo mark */}
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
          <span className="text-accent text-2xl font-black tracking-tighter">CC</span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
            How well do you
          </h1>
          <h1 className="text-2xl sm:text-3xl font-bold text-accent leading-tight">
            know Claude Code?
          </h1>
        </div>

        <p className="text-muted text-sm leading-relaxed max-w-xs">
          15 challenges across 6 rounds.<br />
          No coding. No signup. Just vibes.
        </p>

        {/* Round previews */}
        <div className="flex flex-col gap-1.5 w-full">
          {V3_ROUND_CONFIG.map((round) => (
            <div
              key={round.icon}
              className="flex items-center gap-3 px-4 py-2.5 bg-surface/60 border border-border/60 rounded-lg"
            >
              <span className="text-[10px] font-black text-accent/60 w-5">{round.icon}</span>
              <span className="text-foreground text-sm font-medium">{round.name}</span>
              <span className="ml-auto text-muted text-[11px]">{round.description}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="mt-1 w-full py-4 rounded-xl bg-accent text-background font-bold text-base transition-all hover:bg-accent-dim active:scale-[0.98]"
        >
          Start Playing
        </button>

        <p className="text-[10px] text-muted/60 leading-relaxed">
          For fun only. Not affiliated with or sponsored by Anthropic.<br />
          This is not a certification.
        </p>
      </motion.div>

      <footer className="fixed bottom-4 text-[11px] text-muted/50">
        made by{" "}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors"
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
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="bg-surface/60 border border-border/60 rounded-2xl px-6 py-8 w-full text-center">
        <p className="text-foreground text-base sm:text-lg font-medium leading-relaxed">
          {challenge.statement}
        </p>
      </div>

      <div className="flex gap-3 w-full">
        <button
          onClick={() => handlePick(true)}
          disabled={answered !== null}
          className={`flex-1 py-4 rounded-xl text-base font-bold transition-all active:scale-[0.97] ${
            answered === null
              ? "bg-correct/10 border border-correct/30 text-correct hover:bg-correct/20"
              : answered === true
                ? isCorrect
                  ? "bg-correct/20 border border-correct text-correct"
                  : "bg-wrong/20 border border-wrong text-wrong"
                : "opacity-25 border border-border text-muted"
          }`}
        >
          Truth
        </button>
        <button
          onClick={() => handlePick(false)}
          disabled={answered !== null}
          className={`flex-1 py-4 rounded-xl text-base font-bold transition-all active:scale-[0.97] ${
            answered === null
              ? "bg-wrong/10 border border-wrong/30 text-wrong hover:bg-wrong/20"
              : answered === false
                ? isCorrect
                  ? "bg-correct/20 border border-correct text-correct"
                  : "bg-wrong/20 border border-wrong text-wrong"
                : "opacity-25 border border-border text-muted"
          }`}
        >
          Myth
        </button>
      </div>

      <FeedbackBox show={answered !== null} correct={isCorrect} text={challenge.explanation} />
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
      return "border-border/60 hover:border-accent/50 hover:bg-surface-light cursor-pointer";
    if (option === challenge.correct) return "border-correct bg-correct/10";
    if (option === picked) return "border-wrong bg-wrong/10";
    return "border-border/30 opacity-30";
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="bg-surface/60 border border-border/60 rounded-2xl px-5 py-5 w-full text-center">
        <p className="text-foreground text-sm sm:text-base leading-relaxed">
          {challenge.scenario}
        </p>
      </div>

      <div className="flex gap-3 w-full">
        <button
          onClick={() => handlePick("A")}
          disabled={picked !== null}
          className={`flex-1 py-5 px-3 rounded-xl border transition-all active:scale-[0.97] ${getStyle("A")}`}
        >
          <span className="text-sm sm:text-base font-medium text-foreground">
            {challenge.optionA}
          </span>
        </button>
        <div className="flex items-center px-1">
          <span className="text-muted/40 text-[10px] font-black uppercase tracking-widest">or</span>
        </div>
        <button
          onClick={() => handlePick("B")}
          disabled={picked !== null}
          className={`flex-1 py-5 px-3 rounded-xl border transition-all active:scale-[0.97] ${getStyle("B")}`}
        >
          <span className="text-sm sm:text-base font-medium text-foreground">
            {challenge.optionB}
          </span>
        </button>
      </div>

      <FeedbackBox show={picked !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// QUICK PICK
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
      <div className="bg-surface/60 border border-border/60 rounded-2xl px-5 py-5 w-full text-center">
        <p className="text-foreground text-sm sm:text-base leading-relaxed">
          {challenge.scenario}
        </p>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        {challenge.options.map((opt: string) => {
          const isThis = picked === opt;
          const isAnswer = opt === challenge.blank;
          let style = "border-border/60 hover:border-accent/50 hover:bg-surface-light cursor-pointer";
          if (picked !== null) {
            if (isAnswer) style = "border-correct bg-correct/10 text-correct";
            else if (isThis) style = "border-wrong bg-wrong/10 text-wrong";
            else style = "border-border/30 opacity-30";
          }
          return (
            <button
              key={opt}
              onClick={() => handlePick(opt)}
              disabled={picked !== null}
              className={`w-full px-5 py-4 rounded-xl border text-left text-sm font-medium transition-all active:scale-[0.98] ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <FeedbackBox show={picked !== null} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// SPEED PICK (fixed colors — Lock In is now white/foreground, not accent)
// ────────────────────────────────────────────────────────────
function SpeedPickCard({
  challenge,
  onAnswer,
}: {
  challenge: SpeedPickChallenge;
  onAnswer: (correct: boolean) => void;
}) {
  const allItems = useRef(
    [...challenge.correctItems, ...challenge.wrongItems].sort(() => Math.random() - 0.5)
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
    if (timeLeft <= 0) { finishRound(); return; }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, done, finishRound]);

  useEffect(() => {
    if (!done) return;
    const correctPicks = [...selected].filter((s) => challenge.correctItems.includes(s)).length;
    const wrongPicks = [...selected].filter((s) => challenge.wrongItems.includes(s)).length;
    const total = challenge.correctItems.length;
    const score = Math.max(0, correctPicks - wrongPicks);
    onAnswer(score >= total * 0.5);
  }, [done, selected, challenge, onAnswer]);

  const toggleItem = (item: string) => {
    if (done) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item); else next.add(item);
      return next;
    });
  };

  const getItemStyle = (item: string) => {
    const isSel = selected.has(item);
    const isRight = challenge.correctItems.includes(item);
    if (!done) {
      return isSel
        ? "border-accent bg-accent/15 text-accent"
        : "border-border/60 hover:border-muted text-foreground";
    }
    if (isRight && isSel) return "border-correct bg-correct/15 text-correct";
    if (isRight && !isSel) return "border-correct/30 bg-correct/5 text-correct/50";
    if (!isRight && isSel) return "border-wrong bg-wrong/15 text-wrong";
    return "border-border/20 opacity-20";
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* Timer */}
      <div className="w-full flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-surface rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${timeLeft <= 3 ? "bg-wrong" : "bg-accent"}`}
            initial={{ width: "100%" }}
            animate={{ width: `${(timeLeft / challenge.timeLimit) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className={`font-mono text-xs font-bold w-5 text-right ${timeLeft <= 3 ? "text-wrong" : "text-accent"}`}>
          {timeLeft}
        </span>
      </div>

      <p className="text-sm text-muted text-center">{challenge.prompt}</p>

      <div className="flex flex-wrap gap-2.5 justify-center w-full">
        {allItems.current.map((item: string) => (
          <button
            key={item}
            onClick={() => toggleItem(item)}
            disabled={done}
            className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all active:scale-95 ${getItemStyle(item)}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Lock In button — uses white/foreground color, NOT accent, to avoid confusion */}
      {!done && (
        <button
          onClick={finishRound}
          className="mt-1 px-8 py-2.5 rounded-xl bg-foreground text-background text-sm font-bold hover:opacity-80 transition-all active:scale-95"
        >
          Lock In
        </button>
      )}

      {done && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-xl px-4 py-3 text-sm leading-relaxed bg-surface/60 border border-border/60"
        >
          <span className="text-foreground/70">{challenge.explanation}</span>
        </motion.div>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// RANK IT (tap items to build your order)
// ────────────────────────────────────────────────────────────
function RankItCard({
  challenge,
  onAnswer,
}: {
  challenge: RankItChallenge;
  onAnswer: (correct: boolean) => void;
}) {
  const shuffled = useRef(
    [...challenge.correctOrder].sort(() => Math.random() - 0.5)
  );
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const remaining = shuffled.current.filter((item) => !userOrder.includes(item));

  const handleTap = (item: string) => {
    if (done) return;
    const newOrder = [...userOrder, item];
    setUserOrder(newOrder);
    if (newOrder.length === challenge.correctOrder.length) {
      setDone(true);
      const isCorrect = newOrder.every((v, i) => v === challenge.correctOrder[i]);
      onAnswer(isCorrect);
    }
  };

  const handleUndo = () => {
    if (done || userOrder.length === 0) return;
    setUserOrder((prev) => prev.slice(0, -1));
  };

  const isCorrect = done
    ? userOrder.every((v, i) => v === challenge.correctOrder[i])
    : null;

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <p className="text-sm text-muted text-center leading-relaxed">{challenge.prompt}</p>

      {/* Your order so far */}
      <div className="w-full flex flex-col gap-2">
        {userOrder.map((item, i) => {
          const isRight = done ? challenge.correctOrder[i] === item : null;
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium ${
                done
                  ? isRight
                    ? "border-correct/50 bg-correct/10 text-correct"
                    : "border-wrong/50 bg-wrong/10 text-wrong"
                  : "border-accent/40 bg-accent/5 text-foreground"
              }`}
            >
              <span className="text-[10px] font-black text-muted/50 w-4">{i + 1}</span>
              <span>{item}</span>
            </motion.div>
          );
        })}
        {/* Empty slots */}
        {remaining.map((_, i) => (
          <div
            key={`empty-${i}`}
            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-border/40 text-sm text-muted/30"
          >
            <span className="text-[10px] font-black w-4">{userOrder.length + i + 1}</span>
            <span>...</span>
          </div>
        ))}
      </div>

      {/* Remaining items to pick from */}
      {!done && remaining.length > 0 && (
        <div className="flex flex-wrap gap-2.5 justify-center w-full">
          {remaining.map((item) => (
            <button
              key={item}
              onClick={() => handleTap(item)}
              className="px-4 py-3 rounded-xl border border-border/60 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-surface-light transition-all active:scale-95"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Undo */}
      {!done && userOrder.length > 0 && (
        <button
          onClick={handleUndo}
          className="text-xs text-muted/50 hover:text-muted transition-colors"
        >
          undo last
        </button>
      )}

      <FeedbackBox show={done} correct={isCorrect} text={challenge.explanation} />
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// SHARED: Feedback box
// ────────────────────────────────────────────────────────────
function FeedbackBox({
  show,
  correct,
  text,
}: {
  show: boolean;
  correct: boolean | null;
  text: string;
}) {
  if (!show) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full rounded-xl px-4 py-3.5 text-sm leading-relaxed ${
        correct
          ? "bg-correct/8 border border-correct/20 text-correct"
          : "bg-wrong/8 border border-wrong/20 text-wrong"
      }`}
    >
      <span className="font-bold">{correct ? "Correct" : "Not quite"}</span>
      <span className="text-foreground/60"> — {text}</span>
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────
// MAIN GAME PAGE
// ────────────────────────────────────────────────────────────
export default function V3Page() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<ChallengeResult[]>([]);
  const [showingRoundIntro, setShowingRoundIntro] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [streak, setStreak] = useState(0);

  const challenge = v3challenges[currentIndex];
  const total = v3challenges.length;

  const currentRound = V3_ROUND_CONFIG.find((r) => r.ids.includes(challenge.id));
  const isFirstOfRound = currentRound ? currentRound.ids[0] === challenge.id : false;

  useEffect(() => {
    if (!started) return;
    if (isFirstOfRound) {
      setShowingRoundIntro(true);
      const timer = setTimeout(() => setShowingRoundIntro(false), 1200);
      return () => clearTimeout(timer);
    } else {
      setShowingRoundIntro(false);
    }
  }, [currentIndex, isFirstOfRound, started]);

  const handleAnswer = useCallback(
    (correct: boolean) => {
      setAnswered(true);
      setStreak((s) => (correct ? s + 1 : 0));
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
      router.push(`/v3/results?${encoded}`);
    }
  }, [currentIndex, total, results, router]);

  if (!started) {
    return <HomeScreen onStart={() => setStarted(true)} />;
  }

  const progress = ((currentIndex + 1) / total) * 100;

  // Round intro splash
  if (showingRoundIntro && currentRound) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <span className="text-accent text-xs font-black tracking-widest">ROUND {currentRound.icon}</span>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {currentRound.name}
          </h2>
          <p className="text-muted text-sm">{currentRound.description}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col items-center px-4 py-6 sm:py-8">
      {/* Top bar */}
      <div className="w-full max-w-lg mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-2 text-[11px] text-muted">
            {currentRound && (
              <>
                <span className="text-accent/60 font-black">{currentRound.icon}</span>
                <span>{currentRound.name}</span>
              </>
            )}
          </span>
          <div className="flex items-center gap-3">
            {streak >= 2 && (
              <span className="text-[11px] text-accent font-bold">
                {streak} streak
              </span>
            )}
            <span className="text-[11px] text-muted/50">
              {currentIndex + 1}/{total}
            </span>
          </div>
        </div>
        <div className="w-full h-1 bg-surface/60 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Challenge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={challenge.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
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
          {challenge.type === "rank_it" && (
            <RankItCard challenge={challenge} onAnswer={handleAnswer} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-bold text-background transition-all hover:bg-accent-dim active:scale-[0.97]"
          >
            {currentIndex < total - 1 ? "Next" : "See Results"}
            <span className="text-background/60">&rarr;</span>
          </button>
        </motion.div>
      )}

      <footer className="fixed bottom-4 text-[11px] text-muted/40">
        made by{" "}
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted/60 hover:text-accent transition-colors">
          Krishna Goyal
        </a>
      </footer>
    </div>
  );
}
