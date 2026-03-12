import type { QuizConfig } from "@/components/quiz/types";

export const apryseConfig: QuizConfig = {
  slug: "apryse",
  toolName: "Apryse",
  tagline: "6 rounds. ~3 min. No account required.",
  subtitle:
    "Think you know Apryse? Test document processing, WebViewer, XFDF annotations, and PDF SDK engineering.",
  sansFont: "inter",
  serifFont: "instrument-serif",
  accentColor: "#0066FF",
  accentColorDim: "#0052CC",
  accentColorSubtle: "rgba(0,102,255,0.10)",
  bgColor: "linear-gradient(145deg, #F5F8FF 0%, #EFF4FF 55%, #E8EEFF 100%)",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EBF0FF",
  textColor: "#0A1A3A",
  textSecondary: "#2A4068",
  textTertiary: "#5A7098",
  borderColor: "#D0DCFA",
  borderSubtle: "#E2EAFF",
  scorecardBg: "#081430",
  scorecardAccentColor: "#80AAFF",
  scorecardDivider: "#1A3060",
  scorecardLabelColor: "#A0B8E0",
  scorecardGridColor: "#1A3060",
  navbarTheme: "light",
  logo: (
    <img
      src="/logos/apryse.svg"
      alt="Apryse"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/apryse.svg"
      alt="Apryse"
      width={42}
      height={42}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  analyticsPrefix: "apryse",
  dimensionLabels: {
    memory: "Document Model",
    orchestration: "Viewer Architecture",
    automation: "Processing Pipeline",
    extensibility: "SDK Surface",
    workflows: "Annotation Ops",
    prompting: "API Recall",
    bestPractices: "Rendering Discipline",
  },
  archetypes: [
    {
      title: "Apryse Grandmaster",
      emoji: "🏆",
      description:
        "You architect document platforms with deep WebViewer, XFDF, and SDK mastery.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Document Architect",
      emoji: "🧠",
      description:
        "Strong command of client-side rendering, annotation workflows, and server-side processing.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Power Integrator",
      emoji: "⚡",
      description:
        "You build and deploy document solutions with confidence.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Skilled Builder",
      emoji: "🛠️",
      description:
        "Solid Apryse fundamentals with room for deeper SDK integration knowledge.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Practitioner",
      emoji: "📈",
      description:
        "You can implement document viewing and processing effectively.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Explorer",
      emoji: "🌱",
      description:
        "Good start. More reps on XFDF, redaction, and server SDK will help.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Steps",
      emoji: "🚀",
      description:
        "Clear path to production-grade document SDK engineering.",
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
        "Apryse WebViewer renders PDFs client-side using a WebAssembly-based engine, eliminating the need for server-side document conversion",
      isTrue: true,
      explanation:
        "Client-side WASM rendering is a core Apryse differentiator.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "automation",
      statement:
        "Apryse SDK supports programmatic PDF manipulation including merging, splitting, watermarking, and form filling without requiring Adobe Acrobat",
      isTrue: true,
      explanation:
        "Server-side document processing is a major SDK capability.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "XFDF is the standard format Apryse uses for storing and exchanging annotation data separately from the PDF document itself",
      isTrue: true,
      explanation:
        "XFDF separates annotations from documents for collaborative workflows.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Apryse WebViewer can only display PDF files and does not support other document formats like DOCX, XLSX, or images",
      isTrue: false,
      explanation:
        "WebViewer supports 30+ formats including Office docs, images, and CAD files.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "extensibility",
      scenario:
        "You need collaborative document annotation. Better architecture?",
      optionA: "Store annotations as XFDF separately and sync via your backend",
      optionB: "Embed annotations directly into the PDF on every save",
      correct: "A",
      explanation:
        "XFDF separation enables real-time collaboration without PDF conflicts.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "You need to process thousands of PDFs server-side. Better approach?",
      optionA: "Use Apryse Server SDK with streaming and batch processing",
      optionB: "Load each PDF in a browser-based viewer instance",
      correct: "A",
      explanation:
        "Server SDK is designed for high-throughput headless processing.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario:
        "For document redaction compliance, what's stronger?",
      optionA: "Apply burn-in redactions that permanently remove underlying content",
      optionB: "Overlay black rectangles that visually hide but don't remove data",
      correct: "A",
      explanation:
        "True redaction must remove the underlying data, not just cover it.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Format used by Apryse to store annotations separately from PDFs:",
      blank: "XFDF",
      options: ["XFDF", "JSON-LD", "SVG Overlay"],
      explanation:
        "XFDF is the standard annotation interchange format.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "extensibility",
      scenario:
        "Apryse technology enabling client-side PDF rendering without plugins:",
      blank: "WebAssembly",
      options: ["WebAssembly", "Flash Player", "Java Applet"],
      explanation:
        "WASM-based rendering runs natively in modern browsers.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "prompting",
      scenario:
        "Apryse capability that permanently removes sensitive content from PDFs:",
      blank: "Redaction",
      options: ["Redaction", "Encryption", "Watermarking"],
      explanation:
        "Redaction irreversibly removes content for compliance.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real Apryse capability!",
      correctItems: [
        "XFDF annotations",
        "WebAssembly rendering",
        "PDF form filling",
        "Document redaction",
      ],
      wrongItems: [
        "Video transcoding",
        "3D rendering",
        "Audio mixing",
        "Game physics",
      ],
      timeLimit: 15,
      explanation: "These are core Apryse document SDK capabilities.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "workflows",
      prompt: "Tap every strong document workflow practice!",
      correctItems: [
        "XFDF annotation separation",
        "Server-side batch processing",
        "Burn-in redaction",
        "Format conversion pipeline",
      ],
      wrongItems: [
        "Client-side mass processing",
        "Visual-only redaction",
        "No format validation",
        "Embedded annotations only",
      ],
      timeLimit: 15,
      explanation:
        "Production document workflows need proper annotation and processing patterns.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One is NOT an Apryse document capability. Which one?",
      items: [
        "PDF merging",
        "Form filling",
        "Annotation sync",
        "Video encoding",
      ],
      oddItem: "Video encoding",
      explanation:
        "Apryse focuses on documents; video encoding is not a capability.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "Which practice creates the biggest compliance risk?",
      items: [
        "Burn-in redaction",
        "XFDF annotation storage",
        "Server-side processing",
        "Visual-only redaction overlays",
      ],
      oddItem: "Visual-only redaction overlays",
      explanation:
        "Visual overlays hide but don't remove data; sensitive content remains in the file.",
    },
    {
      type: "odd_one_out",
      id: 15,
      dimension: "orchestration",
      prompt: "Final boss: weakest document processing strategy?",
      items: [
        "WASM client rendering",
        "XFDF annotation separation",
        "Server-side batch processing",
        "Loading every document in a full browser instance for server processing",
      ],
      oddItem:
        "Loading every document in a full browser instance for server processing",
      explanation:
        "Browser instances are heavyweight; Server SDK is designed for headless batch processing.",
    },
  ],
  rounds: [
    {
      name: "Truth or Myth",
      icon: "?",
      ids: [1, 2, 3, 4],
      tagline: "Real feature or total BS?",
    },
    {
      name: "This or That",
      icon: "vs",
      ids: [5, 6, 7],
      tagline: "Pick the smarter move",
    },
    {
      name: "Quick Pick",
      icon: ">>",
      ids: [8, 9, 10],
      tagline: "Name that feature",
    },
    {
      name: "Speed Round",
      icon: "::",
      ids: [11, 12],
      tagline: "Tap fast, think faster",
    },
    {
      name: "Odd One Out",
      icon: "//",
      ids: [13, 14],
      tagline: "Spot the fake",
    },
    {
      name: "Final Boss",
      icon: "*",
      ids: [15],
      tagline: "One shot. Expert level.",
    },
  ],
};
