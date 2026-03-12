import type { QuizConfig } from "@/components/quiz/types";

export const safetycultureConfig: QuizConfig = {
  slug: "safetyculture",
  toolName: "SafetyCulture",
  tagline: "6 rounds. ~3 min. No account required.",
  subtitle:
    "Think you know SafetyCulture? Test inspections, training, incident reporting, and compliance workflows.",
  sansFont: "inter",
  serifFont: "instrument-serif",
  accentColor: "#006BFF",
  accentColorDim: "#0058D8",
  accentColorSubtle: "rgba(0,107,255,0.10)",
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
      src="/logos/safetyculture.svg"
      alt="SafetyCulture"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/safetyculture.svg"
      alt="SafetyCulture"
      width={42}
      height={42}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  analyticsPrefix: "safetyculture",
  dimensionLabels: {
    memory: "Platform Core",
    orchestration: "Inspection Design",
    automation: "Workflow Automation",
    extensibility: "Integration Surface",
    workflows: "Safety Ops",
    prompting: "Feature Recall",
    bestPractices: "Compliance Discipline",
  },
  archetypes: [
    {
      title: "SafetyCulture Grandmaster",
      emoji: "🏆",
      description:
        "You architect safety and quality systems with deep inspection, training, and compliance mastery.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Operations Architect",
      emoji: "🧠",
      description:
        "Strong command of inspection templates, automated actions, and compliance workflows.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Power Admin",
      emoji: "⚡",
      description:
        "You run safety operations and quality programs with confidence.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Skilled Operator",
      emoji: "🛠️",
      description:
        "Solid operations fundamentals with room for deeper automation knowledge.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Practitioner",
      emoji: "📈",
      description: "You can run inspections and manage safety workflows effectively.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Explorer",
      emoji: "🌱",
      description:
        "Good start. More reps on template design and automated actions will help.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Steps",
      emoji: "🚀",
      description: "Clear path to production-grade safety operations.",
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
        "SafetyCulture's iAuditor inspection platform allows offline data capture on mobile devices that automatically syncs when connectivity is restored",
      isTrue: true,
      explanation:
        "Offline-first mobile capture is critical for field operations without reliable internet.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "automation",
      statement:
        "SafetyCulture Actions can automatically create and assign corrective tasks when inspection items fail, with due dates and priority levels",
      isTrue: true,
      explanation:
        "Automated corrective actions close the loop between finding issues and fixing them.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "Inspection templates in SafetyCulture support conditional logic where follow-up questions appear based on previous answers",
      isTrue: true,
      explanation:
        "Conditional logic creates dynamic inspections that adapt to findings.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Paper-based safety checklists provide better audit trails and compliance evidence than digital inspection platforms",
      isTrue: false,
      explanation:
        "Digital platforms provide timestamped, geotagged, photo-documented evidence far superior to paper.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "automation",
      scenario:
        "A safety inspection reveals a critical hazard. Better response workflow?",
      optionA:
        "Auto-create a high-priority corrective action with assignee and due date",
      optionB: "Write it in a notebook and hope someone follows up",
      correct: "A",
      explanation:
        "Automated corrective actions ensure accountability and tracking.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "orchestration",
      scenario:
        "You need to roll out a new inspection template across 50 sites. Better approach?",
      optionA:
        "Use template groups with scheduled inspections and completion tracking",
      optionB: "Email a PDF checklist to each site manager",
      correct: "A",
      explanation:
        "Centralized template management ensures consistency and compliance tracking.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario: "For regulatory compliance evidence, what's stronger?",
      optionA:
        "Digital inspections with timestamps, photos, GPS, and signatures",
      optionB: "Handwritten checklists stored in filing cabinets",
      correct: "A",
      explanation:
        "Digital evidence is searchable, verifiable, and audit-ready.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "SafetyCulture feature that automatically triggers tasks when inspection items fail:",
      blank: "Actions",
      options: ["Actions", "Alerts", "Tickets"],
      explanation:
        "Actions create assignable corrective tasks from failed inspection items.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "prompting",
      scenario:
        "SafetyCulture's training product for frontline worker education:",
      blank: "EdApp / Training",
      options: ["EdApp / Training", "LMS Pro", "CourseBuilder"],
      explanation:
        "SafetyCulture Training (formerly EdApp) delivers microlearning to frontline teams.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "extensibility",
      scenario:
        "Inspection template feature that shows different questions based on previous answers:",
      blank: "Conditional logic",
      options: ["Conditional logic", "Dynamic routing", "Smart branching"],
      explanation:
        "Conditional logic adapts the inspection flow based on responses.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real SafetyCulture capability!",
      correctItems: ["Inspections", "Actions", "Training", "Asset management"],
      wrongItems: [
        "Video editing",
        "3D modeling",
        "Music production",
        "Game development",
      ],
      timeLimit: 15,
      explanation: "These are core SafetyCulture product capabilities.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "workflows",
      prompt: "Tap every strong safety ops practice!",
      correctItems: [
        "Scheduled inspections",
        "Corrective actions",
        "Photo evidence",
        "Compliance dashboards",
      ],
      wrongItems: [
        "No follow-up on findings",
        "Paper-only records",
        "No training program",
        "Ad-hoc inspections only",
      ],
      timeLimit: 15,
      explanation: "Strong safety operations require systematic practices.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One is NOT a SafetyCulture product feature. Which one?",
      items: ["Inspections", "Actions", "Training", "Video game engine"],
      oddItem: "Video game engine",
      explanation: "SafetyCulture focuses on safety, inspections, and training—not gaming.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "Which practice most undermines workplace safety?",
      items: [
        "Regular scheduled inspections",
        "Corrective action tracking",
        "Compliance documentation",
        "Ignoring inspection findings with no follow-up",
      ],
      oddItem: "Ignoring inspection findings with no follow-up",
      explanation: "Ignoring findings creates risk and undermines the entire safety program.",
    },
    {
      type: "odd_one_out",
      id: 15,
      dimension: "orchestration",
      prompt: "Final boss: weakest safety operations strategy?",
      items: [
        "Digital inspection platform",
        "Automated corrective actions",
        "Training and competency tracking",
        "No inspections, no training, no documentation",
      ],
      oddItem: "No inspections, no training, no documentation",
      explanation:
        "Without inspections, training, or documentation, safety programs cannot function.",
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
