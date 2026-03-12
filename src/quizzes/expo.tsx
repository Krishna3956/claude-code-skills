import type { QuizConfig } from "@/components/quiz/types";

export const expoConfig: QuizConfig = {
  slug: "expo",
  toolName: "Expo",
  tagline: "6 rounds. ~3 min. No account required.",
  subtitle: "Think you know Expo? Test EAS Build, config plugins, OTA updates, and universal app architecture.",
  sansFont: "inter",
  serifFont: "instrument-serif",
  accentColor: "#4630EB",
  accentColorDim: "#3A28CC",
  accentColorSubtle: "rgba(70,48,235,0.10)",
  bgColor: "linear-gradient(145deg, #0C0A1A 0%, #161230 55%, #1A1630 100%)",
  bgElevated: "#1A1630",
  bgSurface: "#1E1A38",
  bgSurfaceLight: "#262040",
  textColor: "#EAE5FF",
  textSecondary: "#B8AEE0",
  textTertiary: "#8A80B8",
  borderColor: "#302A50",
  borderSubtle: "#282240",
  scorecardBg: "#0A0818",
  scorecardAccentColor: "#9888FF",
  scorecardDivider: "#382E60",
  scorecardLabelColor: "#B0A0E0",
  scorecardGridColor: "#382E60",
  navbarTheme: "dark",
  logo: (
    <img
      src="/logos/expo.svg"
      alt="Expo"
      width={44}
      height={44}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  scorecardLogo: (
    <img
      src="/logos/expo.svg"
      alt="Expo"
      width={42}
      height={42}
      style={{ objectFit: "contain", borderRadius: 12 }}
    />
  ),
  analyticsPrefix: "expo",
  dimensionLabels: {
    memory: "SDK Primitives",
    orchestration: "Build Pipeline",
    automation: "OTA Updates",
    extensibility: "Native Modules",
    workflows: "Dev Workflow",
    prompting: "CLI Recall",
    bestPractices: "Production Discipline",
  },
  archetypes: [
    {
      title: "Expo Grandmaster",
      emoji: "🏆",
      description:
        "You architect universal apps with deep EAS, config plugin, and OTA mastery.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Platform Architect",
      emoji: "🧠",
      description:
        "Strong command of build profiles, native module boundaries, and update channels.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Power Shipper",
      emoji: "⚡",
      description:
        "You ship production apps confidently with EAS Build and proper update strategies.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Skilled Builder",
      emoji: "🛠️",
      description:
        "Solid Expo fundamentals with room for deeper native integration knowledge.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Practitioner",
      emoji: "📈",
      description: "You can build and deploy Expo apps effectively day to day.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Explorer",
      emoji: "🌱",
      description:
        "Good start. More reps on EAS workflows and config plugins will level you up.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "First Steps",
      emoji: "🚀",
      description:
        "Clear path to production-grade universal app engineering.",
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
        "expo-router uses file-based routing where the file structure in the app/ directory directly maps to URL paths and navigation hierarchy",
      isTrue: true,
      explanation:
        "expo-router brings Next.js-style file-based routing to React Native with deep linking built in.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "automation",
      statement:
        "EAS Update delivers OTA JavaScript bundle updates without requiring a new binary build from the app stores",
      isTrue: true,
      explanation:
        "EAS Update pushes JS bundles over the air, bypassing store review for non-native changes.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "orchestration",
      statement:
        "EAS Build profiles in eas.json let you define separate build configurations for development, preview, and production with different signing credentials and environment variables",
      isTrue: true,
      explanation:
        "Build profiles are how teams manage multiple build variants with distinct configs.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "bestPractices",
      statement:
        "Config plugins can only modify the app.json file and cannot touch native iOS or Android project files during prebuild",
      isTrue: false,
      explanation:
        "Config plugins run during prebuild and can modify native Xcode/Gradle files, Info.plist, AndroidManifest.xml, and more.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "extensibility",
      scenario:
        "You need a native module not available in the Expo SDK. Better approach?",
      optionA:
        "Write a config plugin that links the native library during prebuild",
      optionB: "Eject to bare workflow and manually edit Xcode/Gradle files",
      correct: "A",
      explanation:
        "Config plugins keep you in the managed workflow while adding native capabilities.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "automation",
      scenario:
        "You need to ship a critical JS-only hotfix to production users immediately. Faster path?",
      optionA: "Push an EAS Update to the production channel",
      optionB: "Submit a new binary build through App Store review",
      correct: "A",
      explanation:
        "EAS Update delivers JS changes instantly without store review.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "workflows",
      scenario:
        "For a team with multiple environments, what's stronger?",
      optionA:
        "Separate EAS Build profiles with distinct env vars and update channels",
      optionB: "One build config with runtime environment switching",
      correct: "A",
      explanation:
        "Build profiles provide clean separation of credentials, bundle IDs, and update channels.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "orchestration",
      scenario:
        "The Expo CLI command to generate native iOS and Android project files from app config:",
      blank: "npx expo prebuild",
      options: [
        "npx expo prebuild",
        "npx expo eject",
        "npx expo init --bare",
      ],
      explanation:
        "prebuild generates native projects from your app.json/app.config.js and config plugins.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "prompting",
      scenario: "EAS Update uses this concept to target specific binary versions:",
      blank: "Runtime version",
      options: ["Runtime version", "SDK version", "Bundle version"],
      explanation:
        "Runtime version ensures updates are only delivered to compatible binary builds.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "extensibility",
      scenario:
        "To add custom native code while staying in the managed workflow, you use:",
      blank: "Config plugins",
      options: [
        "Config plugins",
        "Native modules only",
        "Manual Xcode editing",
      ],
      explanation:
        "Config plugins modify native projects during prebuild without leaving managed workflow.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "extensibility",
      prompt: "Tap every real Expo/EAS concept!",
      correctItems: [
        "Config plugins",
        "EAS Build profiles",
        "Runtime version",
        "expo-router",
      ],
      wrongItems: [
        "Kubernetes pods",
        "GraphQL subscriptions",
        "Redis streams",
        "Docker layers",
      ],
      timeLimit: 15,
      explanation: "These are core Expo platform concepts.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "workflows",
      prompt: "Tap every strong Expo production practice!",
      correctItems: [
        "Separate build profiles",
        "OTA update channels",
        "Runtime version pinning",
        "Automated EAS builds",
      ],
      wrongItems: [
        "Manual APK sideloading",
        "No update strategy",
        "Hardcoded credentials",
        "Skip code signing",
      ],
      timeLimit: 15,
      explanation:
        "Production Expo apps need structured build and update workflows.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "automation",
      prompt: "One is NOT an EAS service. Which one?",
      items: ["EAS Build", "EAS Update", "EAS Submit", "EAS Terraform"],
      oddItem: "EAS Terraform",
      explanation:
        "EAS Build, Update, and Submit are real services. EAS Terraform doesn't exist.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "bestPractices",
      prompt: "Which practice most increases production risk?",
      items: [
        "Runtime version pinning",
        "Channel-based update targeting",
        "Config plugin testing",
        "Pushing native-breaking changes via OTA",
      ],
      oddItem: "Pushing native-breaking changes via OTA",
      explanation:
        "OTA updates can only deliver JS changes; pushing native-incompatible updates causes crashes.",
    },
    {
      type: "odd_one_out",
      id: 15,
      dimension: "orchestration",
      prompt: "Final boss: weakest mobile release strategy?",
      items: [
        "EAS Build profiles per environment",
        "Staged rollout with update channels",
        "Runtime version compatibility checks",
        "Single build config with no update strategy",
      ],
      oddItem: "Single build config with no update strategy",
      explanation:
        "No update strategy means no ability to hotfix or stage rollouts.",
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
