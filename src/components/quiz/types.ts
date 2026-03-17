export type Dimension =
  | "memory"
  | "orchestration"
  | "automation"
  | "extensibility"
  | "workflows"
  | "prompting"
  | "bestPractices";

export type ChallengeType =
  | "truth_or_myth"
  | "this_or_that"
  | "quick_pick"
  | "speed_pick"
  | "odd_one_out";

export interface TruthOrMythChallenge {
  type: "truth_or_myth";
  id: number;
  dimension: Dimension;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface ThisOrThatChallenge {
  type: "this_or_that";
  id: number;
  dimension: Dimension;
  scenario: string;
  optionA: string;
  optionB: string;
  correct: "A" | "B";
  explanation: string;
}

export interface QuickPickChallenge {
  type: "quick_pick";
  id: number;
  dimension: Dimension;
  scenario: string;
  blank: string;
  options: string[];
  explanation: string;
}

export interface SpeedPickChallenge {
  type: "speed_pick";
  id: number;
  dimension: Dimension;
  prompt: string;
  correctItems: string[];
  wrongItems: string[];
  timeLimit: number;
  explanation: string;
}

export interface OddOneOutChallenge {
  type: "odd_one_out";
  id: number;
  dimension: Dimension;
  prompt: string;
  items: string[];
  oddItem: string;
  explanation: string;
}

export type Challenge =
  | TruthOrMythChallenge
  | ThisOrThatChallenge
  | QuickPickChallenge
  | SpeedPickChallenge
  | OddOneOutChallenge;

export interface RoundConfig {
  name: string;
  icon: string;
  ids: number[];
  tagline: string;
}

export interface Archetype {
  title: string;
  emoji: string;
  description: string;
  minScore: number;
  maxScore: number;
}

export type QuizDifficultyKey = "easy" | "medium" | "hard";

export interface QuizDifficultyOption {
  key: QuizDifficultyKey;
  label: string;
  tagline?: string;
  subtitle?: string;
  challenges: Challenge[];
  rounds: RoundConfig[];
  archetypes?: Archetype[];
}

export interface DimensionScore {
  dimension: Dimension;
  label: string;
  score: number;
  earned: number;
  possible: number;
}

export interface QuizResult {
  overallScore: number;
  dimensions: DimensionScore[];
  percentile: number;
}

export interface ChallengeResult {
  challengeId: number;
  earned: number;
  possible: number;
  dimension: Dimension;
}

export type QuizFont =
  | "dm-sans"
  | "inter"
  | "space-grotesk"
  | "plus-jakarta-sans"
  | "ibm-plex-sans"
  | "outfit"
  | "geist"
  | "open-sans"
  | "poppins"
  | "nunito-sans";

export type QuizSerifFont =
  | "instrument-serif"
  | "playfair-display"
  | "lora"
  | "source-serif-4";

export interface QuizConfig {
  slug: string;
  toolName: string;
  tagline: string;
  subtitle: string;
  sansFont?: QuizFont;
  serifFont?: QuizSerifFont;
  accentColor: string;
  accentColorDim: string;
  accentColorSubtle: string;
  bgColor: string;
  bgElevated: string;
  bgSurface: string;
  bgSurfaceLight: string;
  textColor: string;
  textSecondary: string;
  textTertiary: string;
  borderColor: string;
  borderSubtle: string;
  scorecardBg: string;
  scorecardAccentColor?: string;
  scorecardDivider: string;
  scorecardLabelColor: string;
  scorecardGridColor: string;
  scorecardLogoBg?: string;
  scorecardLogoBorder?: string;
  navbarTheme?: "light" | "dark";
  hideNavbar?: boolean;
  hidePopup?: boolean;
  hideScorecardBranding?: boolean;
  customDownloadName?: string;
  ctaTextColor?: string;
  logo: React.ReactNode;
  scorecardLogo?: React.ReactNode;
  challenges: Challenge[];
  rounds: RoundConfig[];
  archetypes: Archetype[];
  difficultyOptions?: QuizDifficultyOption[];
  defaultDifficulty?: QuizDifficultyKey;
  dimensionLabels: Record<Dimension, string>;
  analyticsPrefix: string;
}
