import type { QuizConfig } from "@/components/quiz/types";

const reductoLogo = (
  <img
    src="/logos/reducto.svg"
    alt="Reducto"
    width={132}
    height={24}
    style={{ objectFit: "contain" }}
  />
);

export const reductoConfig: QuizConfig = {
  slug: "reducto",
  toolName: "Reducto",
  tagline: "6 rounds. ~3 min. No OCR tuning spreadsheet required.",
  subtitle: "Real document-AI product fluency, not generic OCR buzzwords.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#9D17A0",
  accentColorDim: "#7C1180",
  accentColorSubtle: "rgba(157,23,160,0.10)",
  bgColor: "#F8F5F1",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFDFC",
  bgSurfaceLight: "#F1E8F2",
  textColor: "#1C1917",
  textSecondary: "#57534E",
  textTertiary: "#78716C",
  borderColor: "#E7DDD8",
  borderSubtle: "#F1E8F2",
  scorecardBg: "#1C1320",
  scorecardAccentColor: "#E879F9",
  scorecardDivider: "#3B2742",
  scorecardLabelColor: "#D6C0DA",
  scorecardGridColor: "#3B2742",
  scorecardLogoBg: "#F8F5F1",
  scorecardLogoBorder: "#4A3151",
  ctaTextColor: "#FFFFFF",
  logo: reductoLogo,
  scorecardLogo: (
    <img
      src="/logos/reducto.svg"
      alt="Reducto"
      width={120}
      height={22}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "reducto",
  dimensionLabels: {
    memory: "Core Endpoints",
    orchestration: "Pipeline Design",
    automation: "Studio & Workflows",
    extensibility: "API Semantics",
    workflows: "Document Ops",
    prompting: "Extraction Judgment",
    bestPractices: "Production Readiness",
  },
  archetypes: [
    {
      title: "Document Systems Operator",
      emoji: "📄",
      description:
        "You understand Reducto as a production document-ingestion platform with distinct read, extract, split, and edit layers rather than a generic OCR wrapper.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Pipeline Architect",
      emoji: "🧠",
      description:
        "You can make solid calls across parsing, schema extraction, form editing, and orchestration without confusing the product surfaces.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "RAG Builder",
      emoji: "⚙️",
      description:
        "You clearly know the product. A few sharper distinctions around workflows, debugging, and output semantics still separate you from expert-level fluency.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Extraction Tactician",
      emoji: "🧾",
      description:
        "You understand the practical product shape, though some endpoint and pipeline decisions are still slightly fuzzy.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Doc Ops Analyst",
      emoji: "🔎",
      description:
        "You know what Reducto is for, but your current model is still more feature-level than system-level.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "OCR Tourist",
      emoji: "🗂️",
      description:
        "You have the basic story, but the difference between parsing, extracting, splitting, and editing is still blending together.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Upload",
      emoji: "🌱",
      description:
        "You just met the product. The next layer is understanding how Reducto turns messy documents into structured, production-usable data.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "memory",
      statement:
        "Parse returns structured document content like text, tables, and figures rather than only raw OCR text",
      isTrue: true,
      explanation:
        "Parse is the layout-aware read layer. It returns chunked structured output with document elements, not just a flat OCR dump.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "prompting",
      statement:
        "If a field never appears correctly in Parse output, repeatedly tweaking the Extract schema alone will not reliably recover it",
      isTrue: true,
      explanation:
        "Extract can only pull from what Parse sees. If the source content is missing or malformed upstream, schema tuning alone will not fix that.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "automation",
      statement:
        "Multi-document pipelines in Reducto can parse several documents in parallel and run one extraction across their combined context",
      isTrue: true,
      explanation:
        "That is exactly how Reducto's multi-document pipeline flow works for related document sets.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "extensibility",
      scenario:
        "You already parsed a document successfully and now want to try multiple extraction schemas without paying the parsing cost again. Which move is stronger?",
      optionA: "Reuse the existing parse result as the extraction input",
      optionB: "Re-upload and re-parse the same document every time",
      correct: "A",
      explanation:
        "Reducto supports reusing prior parse output for extraction, which is the right move when the document is stable and only the schema is changing.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "orchestration",
      scenario:
        "You need to build a pipeline that reads messy intake packets, extracts required fields, and then fills a downstream form. Which mental model is stronger?",
      optionA: "Treat Parse, Extract, and Edit as separate stages in one document workflow",
      optionB: "Use one generic OCR step and improvise the rest downstream",
      correct: "A",
      explanation:
        "Reducto's product design is explicitly stage-oriented: read the document, pull structured values, then write back into another document when needed.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Which Reducto endpoint is for returning specific requested fields as structured JSON?",
      blank: "Extract",
      options: ["Parse", "Extract", "Split"],
      explanation:
        "Extract is the endpoint that answers field-level questions and returns schema-shaped JSON.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "memory",
      scenario:
        "Which Reducto endpoint is specifically meant for filling forms or modifying documents with instructions?",
      blank: "Edit",
      options: ["Studio", "Edit", "Split"],
      explanation:
        "Edit is the write-back layer for filling forms and modifying supported document formats.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "workflows",
      prompt: "Tap every document capability Reducto explicitly leans on for messy real-world input!",
      correctItems: ["Tables", "Handwriting", "Rotated pages", "Multilingual OCR"],
      wrongItems: ["GPU shader editing", "Video subtitles", "Audio denoising", "3D meshes"],
      timeLimit: 15,
      explanation:
        "These are all real parts of Reducto's document-ingestion story. The others are unrelated media domains.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "bestPractices",
      prompt: "Tap every production-readiness or enterprise signal Reducto explicitly highlights!",
      correctItems: ["99.9%+ uptime", "SOC 2 Type II", "HIPAA", "On-prem deployment"],
      wrongItems: ["Consumer cloud backup", "Mobile game SDK", "Crypto wallet custody", "Ad network retargeting"],
      timeLimit: 15,
      explanation:
        "Those are part of Reducto's trust and enterprise positioning, not unrelated software categories.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "orchestration",
      prompt: "One of these is NOT one of Reducto's core document-processing endpoints. Which one?",
      items: ["Parse", "Extract", "Split", "Train"],
      oddItem: "Train",
      explanation:
        "Reducto's core endpoints include Parse, Extract, Split, and Edit. Train is not one of those product surfaces.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "automation",
      prompt: "One of these statements about multi-document pipelines is wrong. Which one?",
      items: ["Documents can be parsed in parallel", "Extraction can run once across combined context", "Parse results come back as an array", "Edit supports multi-document input the same way"],
      oddItem: "Edit supports multi-document input the same way",
      explanation:
        "Reducto's docs explicitly call out that Edit does not support multi-document input in that pipeline style.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2], tagline: "Document-AI fact check" },
    { name: "This or That", icon: "vs", ids: [5, 6], tagline: "Pick the stronger Reducto move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9], tagline: "Endpoint and output layer" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Messy docs and enterprise signals" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the fake workflow logic" },
  ],
};
