import type { QuizConfig } from "@/components/quiz/types";

const memoriesLogo = (
  <img
    src="/logos/memories.svg"
    alt="Memories.ai"
    width={144}
    height={36}
    style={{ objectFit: "contain" }}
  />
);

export const memoriesConfig: QuizConfig = {
  slug: "memories",
  toolName: "Memories.ai",
  tagline: "5 rounds. ~2 min. No manual timeline scrubbing required.",
  subtitle: "Medium difficulty. Real video-understanding product fluency, not generic AI video copy.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#785DE0",
  accentColorDim: "#5F49B6",
  accentColorSubtle: "rgba(120,93,224,0.12)",
  bgColor: "#ECEDEF",
  bgElevated: "#F8F9FA",
  bgSurface: "#F8F9FA",
  bgSurfaceLight: "#E9E8FF",
  textColor: "#020202",
  textSecondary: "#44444A",
  textTertiary: "#7C7C84",
  borderColor: "#DCE0E4",
  borderSubtle: "#EEF0F2",
  scorecardBg: "#201F26",
  scorecardAccentColor: "#988CFF",
  scorecardDivider: "#3A3943",
  scorecardLabelColor: "#C9C3F2",
  scorecardGridColor: "#3A3943",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#DCE0E4",
  ctaTextColor: "#FFFFFF",
  logo: memoriesLogo,
  scorecardLogo: (
    <img
      src="/logos/memories.svg"
      alt="Memories.ai"
      width={132}
      height={33}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "memories",
  dimensionLabels: {
    memory: "Core Objects",
    orchestration: "Library Design",
    automation: "Async Workflows",
    extensibility: "API Surfaces",
    workflows: "Search & Chat",
    prompting: "Media Understanding",
    bestPractices: "Production Judgment",
  },
  archetypes: [
    {
      title: "Visual Memory Operator",
      emoji: "🎞️",
      description:
        "You understand Memories.ai as a production video-understanding system with distinct upload, search, chat, caption, and retrieval surfaces rather than a simple transcript wrapper.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Video Intelligence Architect",
      emoji: "🧠",
      description:
        "You can reason across private libraries, search, chat, caption workflows, and session metadata with strong product instincts.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Retrieval Builder",
      emoji: "⚙️",
      description:
        "You clearly know the platform. A few deeper distinctions around async processing and specialized media endpoints still separate you from expert fluency.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Search Tactician",
      emoji: "🔎",
      description:
        "You understand the practical shape of the product, though some workflow and endpoint boundaries are still slightly fuzzy.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Library Analyst",
      emoji: "📚",
      description:
        "You know what Memories.ai is for, but your current model is still more feature-level than systems-level.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Clip Browser",
      emoji: "🧩",
      description:
        "You have the rough story, but upload, parse, search, chat, and caption flows are still blending together.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Index",
      emoji: "🌱",
      description:
        "You just met the product. The next layer is understanding how Memories.ai turns video libraries into searchable, reasoned context.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "automation",
      statement:
        "After upload, a video must reach `PARSE` status before it can be used with the Video Chat API",
      isTrue: true,
      explanation:
        "The docs call out `PARSE` status as the prerequisite state before using Video Chat on an uploaded video.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "orchestration",
      statement:
        "If you omit `unique_id` during upload, Memories.ai leaves the video unscoped rather than assigning a default value",
      isTrue: false,
      explanation:
        "If omitted, `unique_id` defaults to `default`. It is meant to help with namespacing users, folders, or workspaces.",
    },
    {
      type: "this_or_that",
      id: 3,
      dimension: "workflows",
      scenario:
        "You want to ask a single question across several already-indexed private videos and get one grounded response. Which move is stronger?",
      optionA: "Use Video Chat with multiple `videoNos`",
      optionB: "Transcribe each video separately and merge the text yourself first",
      correct: "A",
      explanation:
        "Video Chat is built to reason across one or more uploaded videos directly, including streaming responses when needed.",
    },
    {
      type: "this_or_that",
      id: 4,
      dimension: "bestPractices",
      scenario:
        "Your app is multi-tenant and each customer should only see their own uploaded videos. Which design is stronger?",
      optionA: "Use `unique_id` consistently as a tenant or namespace boundary",
      optionB: "Put every customer into the default scope and sort it out later",
      correct: "A",
      explanation:
        "That is exactly what `unique_id` is for: grouping content by user, folder, workspace, or namespace.",
    },
    {
      type: "quick_pick",
      id: 5,
      dimension: "memory",
      scenario:
        "Which API returns a paginated list of uploaded videos and can filter by name, ID, folder, or status?",
      blank: "List Videos",
      options: ["List Videos", "Download Video", "Video Marketer"],
      explanation:
        "List Videos is the inventory endpoint for uploaded content in your library.",
    },
    {
      type: "quick_pick",
      id: 6,
      dimension: "extensibility",
      scenario:
        "Which feature is enabled by adding a `persons` parameter to caption requests rather than calling a completely separate standalone API?",
      blank: "Human ReID",
      options: ["Human ReID", "Session detail", "Video download"],
      explanation:
        "Human re-identification is integrated into Video and Image Caption requests via the `persons` parameter.",
    },
    {
      type: "speed_pick",
      id: 7,
      dimension: "workflows",
      prompt: "Tap every search mode or retrieval surface Memories.ai explicitly supports!",
      correctItems: ["Search from audio", "Search with an image", "Private library search", "Public library search"],
      wrongItems: ["SQL table scan", "Browser history search", "PDF OCR search", "Vector DB schema migration"],
      timeLimit: 15,
      explanation:
        "Those are all real retrieval surfaces in the Memories.ai search stack. The others are unrelated product areas.",
    },
    {
      type: "speed_pick",
      id: 8,
      dimension: "memory",
      prompt: "Tap every supported upload pathway Memories.ai explicitly documents!",
      correctItems: ["Local file", "Streaming URL", "Platform URL", "Creator URL"],
      wrongItems: ["Git commit URL", "Database dump", "Figma board", "PowerPoint deck"],
      timeLimit: 15,
      explanation:
        "The upload API supports multiple video-specific ingestion paths, not arbitrary non-video content sources.",
    },
    {
      type: "odd_one_out",
      id: 9,
      dimension: "prompting",
      prompt: "One of these is NOT a documented use case for Video Chat. Which one?",
      items: ["Generate summaries", "Suggest edits", "Create chapters", "Train a new foundation model"],
      oddItem: "Train a new foundation model",
      explanation:
        "Video Chat is for reasoning over uploaded videos. It is not a model training surface.",
    },
    {
      type: "odd_one_out",
      id: 10,
      dimension: "automation",
      prompt: "One of these statements about caption and ReID workflows is wrong. Which one?",
      items: ["Results are asynchronous", "A callback URL is required", "ReID is integrated into caption requests", "General API keys always include ReID by default"],
      oddItem: "General API keys always include ReID by default",
      explanation:
        "The docs explicitly note that Human ReID needs special access and is not generally available on every standard API key.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2], tagline: "Core workflow fact check" },
    { name: "This or That", icon: "vs", ids: [3, 4], tagline: "Pick the stronger platform move" },
    { name: "Quick Pick", icon: ">>", ids: [5, 6], tagline: "Inventory and ReID" },
    { name: "Speed Round", icon: "::", ids: [7, 8], tagline: "Search and ingest under pressure" },
    { name: "Odd One Out", icon: "//", ids: [9, 10], tagline: "Spot the fake capability" },
  ],
};
