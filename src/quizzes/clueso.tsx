import type { QuizConfig } from "@/components/quiz/types";

export const cluesoConfig: QuizConfig = {
  slug: "clueso",
  toolName: "Clueso",
  tagline: "6 rounds. ~3 min. No signup required.",
  subtitle: "Just you vs. Clueso trivia.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#DA5CC7",
  accentColorDim: "#C34BB0",
  accentColorSubtle: "rgba(218,92,199,0.10)",
  bgColor: "#FFF8FE",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#FCEFFC",
  textColor: "#2A1730",
  textSecondary: "#5F4A69",
  textTertiary: "#8D7A95",
  borderColor: "#EBCBE6",
  borderSubtle: "#F5E3F1",
  scorecardBg: "#2A1730",
  scorecardAccentColor: "#FE89EB",
  scorecardDivider: "#4A2D53",
  scorecardLabelColor: "#DAB6D7",
  scorecardGridColor: "#4A2D53",
  logo: (
    <img
      src="/logos/clueso-wordmark.webp"
      alt="Clueso"
      width={168}
      height={32}
      style={{ objectFit: "contain" }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/clueso.png"
      alt="Clueso"
      width={42}
      height={42}
      style={{ borderRadius: 12, objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "clueso",
  dimensionLabels: {
    memory: "Project Basics",
    orchestration: "Clips & Editing",
    automation: "AI Workflows",
    extensibility: "Export & Localization",
    workflows: "Project Operations",
    prompting: "Prompting & Rules",
    bestPractices: "Admin & Access",
  },
  archetypes: [
    {
      title: "Clueso Operator",
      emoji: "🎯",
      description:
        "You know Clueso beyond the homepage. Projects, AI workflows, translation controls, and admin constraints are all familiar terrain.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Documentation Strategist",
      emoji: "🧠",
      description:
        "You clearly know how Clueso works end to end. A few deeper edge cases separate you from full expert mode.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Workflow Builder",
      emoji: "⚙️",
      description:
        "You understand the core product flow and most of the AI-assisted features. The advanced constraints are the last gap.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Knowledge Publisher",
      emoji: "📚",
      description:
        "You can create, edit, and ship content in Clueso confidently, but a few admin and clip rules are still fuzzy.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Content Teammate",
      emoji: "🛠️",
      description:
        "You know the product basics and can get useful work done, but the richer automation and localization features are still opening up.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Doc Explorer",
      emoji: "🌱",
      description:
        "You have the right general idea of Clueso, but the detailed workflow rules are still new.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Draft",
      emoji: "✍️",
      description:
        "Start here. Clueso has more depth than it first appears, and now you know where to look next.",
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
        "In Clueso, you can start a project by recording, uploading a video, or uploading a file or slide deck",
      isTrue: true,
      explanation:
        "That is the official quickstart flow. Clueso supports recording, video upload, and file or slide-deck upload as project starting points.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "workflows",
      statement:
        "After recording in Clueso, you land in the video editor before moving to the article tab",
      isTrue: true,
      explanation:
        "That sequence is documented in quickstart. Record first, edit in the video editor, then move into the article workflow before exporting or sharing.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "Slide clips can be split the same way video clips can be split in Clueso",
      isTrue: false,
      explanation:
        "Only video clips can be split. Slide clips are explicitly excluded from split operations in Clueso's docs.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Clueso SSO is available on every self-serve plan by default",
      isTrue: false,
      explanation:
        "Clueso documents SSO as an enterprise feature. It is not presented as a standard capability across all plans.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "prompting",
      scenario:
        "Your translated help center keeps changing product names you want left untouched. Which setup is better?",
      optionA: "Add those terms to the translation glossary and language rules",
      optionB: "Translate everything first and manually fix every article later",
      correct: "A",
      explanation:
        "The glossary and translation rules exist specifically for that control. They let you preserve terms and enforce language preferences systematically.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "You want to turn one long video into multiple short clips inside Clueso. What should you use?",
      optionA: "Clueso Cuts with Make Cuts, then finalize with Create Clips",
      optionB: "Duplicate the project several times and trim each copy by hand",
      correct: "A",
      explanation:
        "Clueso Cuts is the documented workflow for long-form to short-form clipping. It generates candidate clips, then you finalize them with Create Clips.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "bestPractices",
      scenario:
        "You are enabling SSO for a company workspace. Which implementation matches Clueso's docs?",
      optionA: "Set up SAML and make sure users exist in both the IdP portal and the Clueso workspace",
      optionB: "Turn on SSO in Clueso and assume user accounts will appear automatically",
      correct: "A",
      explanation:
        "Clueso's SSO guide calls out both requirements: SAML-based setup and user presence in both systems.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "extensibility",
      scenario:
        "You want to bulk import glossary terms into Clueso. What file format does the docs call out?",
      blank: "CSV",
      options: ["CSV", "PSD", "MOV"],
      explanation:
        "Clueso's translation glossary can be imported with CSV. That is the documented bulk path for glossary terms.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "automation",
      scenario:
        "Which Clueso feature is described as a chat-based helper for rewriting content and editing screenshots?",
      blank: "Article Copilot",
      options: ["Article Copilot", "Video Timeline", "Workspace Billing"],
      explanation:
        "Article Copilot is the AI helper for drafting, rewriting, formatting, and screenshot edits.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "workflows",
      scenario:
        "After Clueso Cuts generates candidate clips, which button finalizes them into projects?",
      blank: "Create Clips",
      options: ["Create Clips", "Publish Workspace", "Export Timeline"],
      explanation:
        "The documented flow is Make Cuts first, then Create Clips to finalize the generated set.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "automation",
      prompt: "Tap every task Article Copilot can help with!",
      correctItems: [
        "Summarize content",
        "Rewrite text",
        "Edit screenshots",
        "Fix grammar",
        "Add headings and bullets",
      ],
      wrongItems: [
        "Deploy your app",
        "Process payroll",
        "Manage DNS records",
        "Run database migrations",
      ],
      timeLimit: 15,
      explanation:
        "Article Copilot is for content work inside Clueso, not general IT or finance operations. The documented examples are summaries, rewrites, screenshot edits, structure, and grammar improvements.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "prompting",
      prompt: "Tap every real control Clueso gives you for translation quality!",
      correctItems: [
        "Do-not-translate terms",
        "CSV glossary import",
        "Tone guidance",
        "Vocabulary preferences",
        "Examples in language rules",
      ],
      wrongItems: [
        "Automatic legal review",
        "Per-article stock photos",
        "Spreadsheet formulas",
        "Code compilation settings",
      ],
      timeLimit: 15,
      explanation:
        "Clueso's translation tooling supports glossary terms, imports, and language rules with tone, vocabulary, grammar guidance, and examples.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "orchestration",
      prompt: "One of these is NOT a valid Clueso merge requirement. Which one?",
      items: [
        "Both clips are video clips",
        "Both clips come from the same source input",
        "There is no trimmed-out gap between them",
        "One of the clips can be a slide clip",
      ],
      oddItem: "One of the clips can be a slide clip",
      explanation:
        "Clueso allows merges only for compatible video clips from the same source with no trimmed-out gap between them. Slide clips are not valid in that merge path.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "One of these statements about Clueso SSO is false. Which one?",
      items: [
        "It is available for enterprise customers",
        "It uses SAML-based SSO",
        "Users need to exist in both systems",
        "Turning it on deletes existing projects and settings",
      ],
      oddItem: "Turning it on deletes existing projects and settings",
      explanation:
        "Clueso explicitly says enabling SSO does not affect existing projects, settings, or content.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "workflows",
      statement:
        "Clueso Cuts is an enterprise feature, and once you finalize the generated clips, Clueso creates a separate folder with those clips as individual projects",
      isTrue: true,
      explanation:
        "That is the documented Clueso Cuts behavior. The feature is enterprise-only, and the output is organized into a separate folder as individual projects.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Real feature or fake claim?" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the smarter move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Name that workflow" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Tap fast, think clean" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the wrong detail" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Advanced mode." },
  ],
};
