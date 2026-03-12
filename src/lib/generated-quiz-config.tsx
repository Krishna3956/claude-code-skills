import type { QuizConfig, Dimension } from "@/components/quiz/types";
import type { QuizBuilderDraft } from "@/lib/quiz-builder";

const DIMENSIONS: Dimension[] = [
  "memory",
  "workflows",
  "orchestration",
  "automation",
  "extensibility",
  "bestPractices",
];

const FALLBACK_ARCHETYPES: QuizConfig["archetypes"] = [
  {
    title: "Power User",
    emoji: "🏆",
    description: "You know this product deeply and can handle advanced workflows with confidence.",
    minScore: 90,
    maxScore: 100,
  },
  {
    title: "Advanced Builder",
    emoji: "⚡",
    description: "Strong product understanding. A few edge-case details away from mastery.",
    minScore: 75,
    maxScore: 89,
  },
  {
    title: "Practitioner",
    emoji: "🧠",
    description: "You know the core workflows and can ship real outcomes.",
    minScore: 60,
    maxScore: 74,
  },
  {
    title: "Getting There",
    emoji: "📈",
    description: "Solid foundation with room to deepen product expertise.",
    minScore: 40,
    maxScore: 59,
  },
  {
    title: "Explorer",
    emoji: "🌱",
    description: "Good start. Keep using the product and you will level up quickly.",
    minScore: 0,
    maxScore: 39,
  },
];

function titleCase(input: string): string {
  return input
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const raw = hex.trim().replace(/^#/, "");
  if (raw.length !== 6) return null;
  const num = Number.parseInt(raw, 16);
  if (Number.isNaN(num)) return null;
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHex(r: number, g: number, b: number): string {
  const to = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`.toUpperCase();
}

function mix(hexA: string, hexB: string, weight = 0.5): string {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  if (!a || !b) return hexA;
  const w = Math.max(0, Math.min(1, weight));
  return rgbToHex(
    a.r * (1 - w) + b.r * w,
    a.g * (1 - w) + b.g * w,
    a.b * (1 - w) + b.b * w
  );
}

function luminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 1;
  return (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
}

function normalizeHex(color: string | undefined): string | undefined {
  if (!color) return undefined;
  const m = color.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/);
  if (!m) return undefined;
  const raw = m[1];
  if (raw.length === 3) {
    return `#${raw[0]}${raw[0]}${raw[1]}${raw[1]}${raw[2]}${raw[2]}`.toUpperCase();
  }
  return `#${raw.toUpperCase()}`;
}

function mapFontHintToQuizFont(hint: string | undefined): QuizConfig["sansFont"] {
  const v = (hint || "").toLowerCase();
  if (!v) return "inter";
  if (v.includes("plus jakarta")) return "plus-jakarta-sans";
  if (v.includes("space grotesk")) return "space-grotesk";
  if (v.includes("ibm plex")) return "ibm-plex-sans";
  if (v.includes("outfit")) return "outfit";
  if (v.includes("poppins")) return "poppins";
  if (v.includes("nunito")) return "nunito-sans";
  if (v.includes("open sans")) return "open-sans";
  if (v.includes("geist")) return "geist";
  if (v.includes("dm sans")) return "dm-sans";
  return "inter";
}

function buildThemeFromDraft(draft: QuizBuilderDraft | null) {
  const accent = normalizeHex(draft?.colorHint) ?? "#2563EB";
  const darkMode = Boolean(draft?.darkModeHint);

  if (darkMode) {
    return {
      accentColor: accent,
      accentColorDim: mix(accent, "#000000", 0.2),
      accentColorSubtle: `${accent}22`,
      bgColor: "#0B1020",
      bgElevated: "#11182D",
      bgSurface: "#131A31",
      bgSurfaceLight: "#1B2542",
      textColor: "#F8FAFC",
      textSecondary: "#CBD5E1",
      textTertiary: "#94A3B8",
      borderColor: "#334155",
      borderSubtle: "#253042",
      scorecardBg: "#070B16",
      scorecardDivider: "#243447",
      scorecardLabelColor: "#94A3B8",
      scorecardGridColor: "#243447",
      navbarTheme: "dark" as const,
    };
  }

  return {
    accentColor: accent,
    accentColorDim: mix(accent, "#000000", 0.15),
    accentColorSubtle: `${accent}1A`,
    bgColor: "#F8FAFC",
    bgElevated: "#FFFFFF",
    bgSurface: "#FFFFFF",
    bgSurfaceLight: mix("#FFFFFF", accent, 0.06),
    textColor: "#0F172A",
    textSecondary: "#334155",
    textTertiary: "#64748B",
    borderColor: "#CBD5E1",
    borderSubtle: "#E2E8F0",
    scorecardBg: luminance(accent) > 0.6 ? "#0F172A" : mix(accent, "#000000", 0.78),
    scorecardDivider: "#334155",
    scorecardLabelColor: "#94A3B8",
    scorecardGridColor: "#334155",
    navbarTheme: "light" as const,
  };
}

function BrandLogo({
  toolName,
  logoUrl,
  darkBackground,
  small,
}: {
  toolName: string;
  logoUrl?: string;
  darkBackground?: boolean;
  small?: boolean;
}) {
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={toolName}
        width={small ? 42 : 180}
        height={small ? 42 : 52}
        style={{
          objectFit: "contain",
          maxWidth: small ? 42 : 180,
          maxHeight: small ? 42 : 52,
          background: "transparent",
          borderRadius: 8,
          display: "block",
        }}
      />
    );
  }

  const firstLetter = toolName[0]?.toUpperCase() || "G";
  return (
    <div
      style={{
        width: small ? 42 : 52,
        height: small ? 42 : 52,
        borderRadius: 10,
        background: darkBackground ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.08)",
        color: darkBackground ? "#FFFFFF" : "#0F172A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: small ? 18 : 20,
      }}
    >
      {firstLetter}
    </div>
  );
}

function fallbackConfig(): QuizConfig {
  return {
    slug: "generated-preview",
    toolName: "Generated Quiz",
    tagline: "Auto-generated from your docs URL.",
    subtitle: "6 questions. Power-user difficulty.",
    sansFont: "inter",
    serifFont: "source-serif-4",
    accentColor: "#2563EB",
    accentColorDim: "#1D4ED8",
    accentColorSubtle: "rgba(37,99,235,0.10)",
    bgColor: "#F8FAFC",
    bgElevated: "#FFFFFF",
    bgSurface: "#FFFFFF",
    bgSurfaceLight: "#F1F5F9",
    textColor: "#0F172A",
    textSecondary: "#334155",
    textTertiary: "#64748B",
    borderColor: "#CBD5E1",
    borderSubtle: "#E2E8F0",
    scorecardBg: "#0F172A",
    scorecardDivider: "#334155",
    scorecardLabelColor: "#94A3B8",
    scorecardGridColor: "#334155",
    navbarTheme: "light",
    logo: (
      <div className="rounded-lg px-4 py-2" style={{ border: "1px solid var(--v5-border)", background: "var(--v5-bg-surface)" }}>
        <p className="text-lg font-semibold" style={{ color: "var(--v5-text)" }}>Generated Quiz</p>
      </div>
    ),
    scorecardLogo: (
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: "rgba(255,255,255,0.08)",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        G
      </div>
    ),
    analyticsPrefix: "generated_preview",
    dimensionLabels: {
      memory: "Core Concepts",
      orchestration: "Workflows",
      automation: "Automation",
      extensibility: "Integrations",
      workflows: "Product Usage",
      prompting: "Usage Patterns",
      bestPractices: "Best Practices",
    },
    archetypes: FALLBACK_ARCHETYPES,
    rounds: [
      { name: "Truth or Myth", icon: "shield", ids: [1, 2], tagline: "Know the facts" },
      { name: "This or That", icon: "split", ids: [3, 4], tagline: "Choose the better path" },
      { name: "Odd One Out", icon: "eye", ids: [5, 6], tagline: "Spot what does not fit" },
    ],
    challenges: [
      {
        type: "truth_or_myth",
        id: 1,
        dimension: "memory",
        statement: "No generated quiz available yet.",
        isTrue: false,
        explanation: "Generate a quiz from /v/v2 to load this page.",
      },
      {
        type: "truth_or_myth",
        id: 2,
        dimension: "workflows",
        statement: "Generated quizzes are created from crawled docs and product pages.",
        isTrue: true,
        explanation: "Once you run the builder, this fallback is replaced with your generated quiz.",
      },
      {
        type: "this_or_that",
        id: 3,
        dimension: "orchestration",
        scenario: "Build a quiz first to preview this runtime.",
        optionA: "Go to /v/v2",
        optionB: "Stay here",
        correct: "A",
        explanation: "The preview route is powered by generated data from /v/v2.",
      },
      {
        type: "this_or_that",
        id: 4,
        dimension: "automation",
        scenario: "For now this route needs a recent generation request.",
        optionA: "Generate once",
        optionB: "Do nothing",
        correct: "A",
        explanation: "Generation stores a runtime draft for this preview page.",
      },
      {
        type: "odd_one_out",
        id: 5,
        dimension: "extensibility",
        prompt: "Pick the odd one out.",
        items: ["Docs", "Product pages", "Help center", "No source data"],
        oddItem: "No source data",
        explanation: "Quiz generation relies on real source data.",
      },
      {
        type: "odd_one_out",
        id: 6,
        dimension: "bestPractices",
        prompt: "Pick the odd one out.",
        items: ["Concrete facts", "Power-user depth", "Vague marketing claims", "Accurate explanations"],
        oddItem: "Vague marketing claims",
        explanation: "Questions should be concrete and factual.",
      },
    ],
  };
}

export function buildGeneratedQuizConfig(draft: QuizBuilderDraft | null): QuizConfig {
  if (!draft) return fallbackConfig();

  const toolName = draft.toolName?.trim() || titleCase(draft.slug || "generated-preview");
  const theme = buildThemeFromDraft(draft);
  const sansFont = mapFontHintToQuizFont(draft.fontHint);

  const challenges: QuizConfig["challenges"] = draft.questions.map((q, index) => {
    const id = index + 1;
    const dimension = DIMENSIONS[index % DIMENSIONS.length];

    if (q.type === "truth_or_myth") {
      return {
        type: "truth_or_myth",
        id,
        dimension,
        statement: q.question,
        isTrue: q.isTrue,
        explanation: q.explanation,
      };
    }

    if (q.type === "this_or_that") {
      return {
        type: "this_or_that",
        id,
        dimension,
        scenario: q.question,
        optionA: q.optionA,
        optionB: q.optionB,
        correct: q.correct,
        explanation: q.explanation,
      };
    }

    return {
      type: "odd_one_out",
      id,
      dimension,
      prompt: q.question,
      items: q.options,
      oddItem: q.oddItem,
      explanation: q.explanation,
    };
  });

  return {
    slug: "generated-preview",
    toolName,
    tagline: draft.tagline || "Auto-generated from your docs URL.",
    subtitle: "6 questions. Power-user difficulty.",
    sansFont,
    serifFont: "source-serif-4",
    accentColor: theme.accentColor,
    accentColorDim: theme.accentColorDim,
    accentColorSubtle: theme.accentColorSubtle,
    bgColor: theme.bgColor,
    bgElevated: theme.bgElevated,
    bgSurface: theme.bgSurface,
    bgSurfaceLight: theme.bgSurfaceLight,
    textColor: theme.textColor,
    textSecondary: theme.textSecondary,
    textTertiary: theme.textTertiary,
    borderColor: theme.borderColor,
    borderSubtle: theme.borderSubtle,
    scorecardBg: theme.scorecardBg,
    scorecardDivider: theme.scorecardDivider,
    scorecardLabelColor: theme.scorecardLabelColor,
    scorecardGridColor: theme.scorecardGridColor,
    navbarTheme: theme.navbarTheme,
    logo: (
      <div className="rounded-lg px-4 py-2" style={{ border: "1px solid var(--v5-border)", background: "var(--v5-bg-surface)" }}>
        <BrandLogo toolName={toolName} logoUrl={draft.logoUrl} darkBackground={theme.navbarTheme === "dark"} />
      </div>
    ),
    scorecardLogo: (
      <BrandLogo toolName={toolName} logoUrl={draft.logoUrl} darkBackground={true} small />
    ),
    analyticsPrefix: "generated_preview",
    dimensionLabels: {
      memory: "Core Concepts",
      orchestration: "Workflows",
      automation: "Automation",
      extensibility: "Integrations",
      workflows: "Product Usage",
      prompting: "Usage Patterns",
      bestPractices: "Best Practices",
    },
    archetypes: FALLBACK_ARCHETYPES,
    rounds: [
      { name: "Truth or Myth", icon: "shield", ids: [1, 2], tagline: "Know the facts" },
      { name: "This or That", icon: "split", ids: [3, 4], tagline: "Choose the better path" },
      { name: "Odd One Out", icon: "eye", ids: [5, 6], tagline: "Spot what does not fit" },
    ],
    challenges,
  };
}
