import type { QuizConfig } from "@/components/quiz/types";

const wordpressLogo = (
  <img
    src="/logos/wordpress.png"
    alt="WordPress"
    width={62}
    height={62}
    style={{ objectFit: "contain" }}
  />
);

export const wordpressConfig: QuizConfig = {
  slug: "wordpress",
  toolName: "WordPress",
  tagline: "6 rounds. ~3 min. No wp-admin login required.",
  subtitle: "Medium difficulty. Real WordPress usage, not plugin-directory archaeology.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#3858E9",
  accentColorDim: "#2C45B8",
  accentColorSubtle: "rgba(56,88,233,0.10)",
  bgColor: "#F6F8FC",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#EEF3FF",
  textColor: "#101828",
  textSecondary: "#475467",
  textTertiary: "#667085",
  borderColor: "#D9E2F5",
  borderSubtle: "#EAF0FA",
  scorecardBg: "#0F172A",
  scorecardAccentColor: "#93C5FD",
  scorecardDivider: "#263248",
  scorecardLabelColor: "#A5B4CC",
  scorecardGridColor: "#263248",
  scorecardLogoBg: "#FFFFFF",
  scorecardLogoBorder: "#D9E2F5",
  ctaTextColor: "#FFFFFF",
  logo: wordpressLogo,
  scorecardLogo: (
    <img
      src="/logos/wordpress.png"
      alt="WordPress"
      width={56}
      height={56}
      style={{ objectFit: "contain" }}
    />
  ),
  analyticsPrefix: "wordpress",
  dimensionLabels: {
    memory: "Core Model",
    orchestration: "Editor & Themes",
    automation: "Publishing Flow",
    extensibility: "Plugins & APIs",
    workflows: "Content Operations",
    prompting: "Block Logic",
    bestPractices: "Production Hygiene",
  },
  archetypes: [
    {
      title: "Core Committer Energy",
      emoji: "🧩",
      description:
        "You think in templates, blocks, REST shape, and editorial workflow tradeoffs. This is serious WordPress operator territory.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Site Architect",
      emoji: "🏗️",
      description:
        "You know how modern WordPress fits together and can make strong implementation choices without flailing around wp-admin.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Block Builder",
      emoji: "🧱",
      description:
        "You are clearly past beginner mode. A few deeper calls around APIs, templates, and production discipline still separate you from elite operator status.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Theme Operator",
      emoji: "🎨",
      description:
        "You can ship and maintain real WordPress sites, but some newer editor-era details are still uneven.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Content Admin",
      emoji: "📝",
      description:
        "You know the practical surfaces of WordPress, but architecture and extensibility decisions still need sharper instincts.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Dashboard Wanderer",
      emoji: "🧭",
      description:
        "You can get around, but modern WordPress has more system design beneath the surface than your current model reflects.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Fresh Install",
      emoji: "🌱",
      description:
        "You have seen WordPress. Understanding how the editor, themes, plugins, and APIs fit together is the next layer.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  challenges: [
    {
      type: "truth_or_myth",
      id: 1,
      dimension: "orchestration",
      statement:
        "In block themes, `theme.json` is used to configure global settings and styles for things like color, typography, and spacing",
      isTrue: true,
      explanation:
        "`theme.json` is the central configuration layer for global settings and styles in modern block themes.",
    },
    {
      type: "truth_or_myth",
      id: 2,
      dimension: "extensibility",
      statement:
        "A custom post type must enable `show_in_rest` if you want it to work properly with the block editor and REST-powered interfaces",
      isTrue: true,
      explanation:
        "For custom post types to participate in the block editor and REST-driven workflows, `show_in_rest` needs to be enabled.",
    },
    {
      type: "truth_or_myth",
      id: 3,
      dimension: "prompting",
      statement:
        "A block pattern is the same thing as a template, so changing one automatically changes every page that uses it",
      isTrue: false,
      explanation:
        "Patterns are reusable layouts for insertion. Templates control structural output for content types or template contexts.",
    },
    {
      type: "truth_or_myth",
      id: 4,
      dimension: "workflows",
      statement:
        "WordPress Playground requires a normal local PHP/MySQL stack running on your machine before it can boot in the browser",
      isTrue: false,
      explanation:
        "Playground is specifically built to run WordPress in-browser for testing, demos, and fast experimentation without the usual local stack.",
    },
    {
      type: "this_or_that",
      id: 5,
      dimension: "orchestration",
      scenario:
        "You need to change the layout used by every single blog post in a block-theme site. What is the stronger move?",
      optionA: "Edit the single post template in the Site Editor",
      optionB: "Open each post and manually rebuild the block layout",
      correct: "A",
      explanation:
        "If the goal is site-wide structural change, the template is the right layer. Editing each post is content work, not layout architecture.",
    },
    {
      type: "this_or_that",
      id: 6,
      dimension: "bestPractices",
      scenario:
        "You want to add a feature without touching core files so updates stay safe. Which approach is stronger?",
      optionA: "Edit WordPress core directly",
      optionB: "Use a plugin or theme-level extension point",
      correct: "B",
      explanation:
        "Core edits are upgrade-hostile. Extensions belong in plugins, themes, or supported hooks and APIs.",
    },
    {
      type: "this_or_that",
      id: 7,
      dimension: "automation",
      scenario:
        "Editors need a reusable starting structure for every new case study post. Which move is better?",
      optionA: "Paste the same block stack by hand every time",
      optionB: "Create a post template or reusable editorial starting point",
      correct: "B",
      explanation:
        "A reusable template-driven flow reduces drift and keeps editorial operations consistent.",
    },
    {
      type: "quick_pick",
      id: 8,
      dimension: "memory",
      scenario:
        "Which WordPress object type is designed for hierarchical content like pages and can support parent-child structure?",
      blank: "Page",
      options: ["Comment", "Page", "Post"],
      explanation:
        "Pages are hierarchical; standard posts are not.",
    },
    {
      type: "quick_pick",
      id: 9,
      dimension: "extensibility",
      scenario:
        "Which WordPress interface is built for programmatic read/write access to site content over HTTP?",
      blank: "REST API",
      options: ["Media Library", "Customizer", "REST API"],
      explanation:
        "The REST API is the HTTP interface used to work with posts, terms, users, and more programmatically.",
    },
    {
      type: "quick_pick",
      id: 10,
      dimension: "prompting",
      scenario:
        "Which block is meant to display posts dynamically from a query instead of manually placing each post card?",
      blank: "Query Loop",
      options: ["Columns", "Query Loop", "Group"],
      explanation:
        "Query Loop is the block-native way to render posts from a query inside the editor.",
    },
    {
      type: "speed_pick",
      id: 11,
      dimension: "orchestration",
      prompt: "Tap every thing the Site Editor is actually used to work on!",
      correctItems: ["Templates", "Template Parts", "Navigation", "Styles"],
      wrongItems: ["PHP version upgrades", "DNS records", "SSL certificates", "Server logs"],
      timeLimit: 15,
      explanation:
        "The Site Editor is about site design and structural editing, not hosting or infrastructure administration.",
    },
    {
      type: "speed_pick",
      id: 12,
      dimension: "bestPractices",
      prompt: "Tap every strong WordPress production habit!",
      correctItems: ["Keep plugins updated", "Use backups", "Use a child theme when needed", "Avoid editing core files"],
      wrongItems: ["Disable updates forever", "Store production fixes in core", "Test directly on live first", "Ignore plugin compatibility"],
      timeLimit: 15,
      explanation:
        "These are the habits that keep WordPress maintainable and survivable under real production conditions.",
    },
    {
      type: "odd_one_out",
      id: 13,
      dimension: "memory",
      prompt: "One of these is NOT a default WordPress content type. Which one?",
      items: ["Post", "Page", "Attachment", "Campaign"],
      oddItem: "Campaign",
      explanation:
        "Post, Page, and Attachment are standard built-in types. Campaign is not a default core content type.",
    },
    {
      type: "odd_one_out",
      id: 14,
      dimension: "extensibility",
      prompt: "One of these is NOT a normal WordPress extension surface. Which one?",
      items: ["Plugins", "Themes", "REST API", "Core file patching in production"],
      oddItem: "Core file patching in production",
      explanation:
        "Plugins, themes, and the REST API are legitimate extension surfaces. Patching core in production is just future pain.",
    },
    {
      type: "truth_or_myth",
      id: 15,
      dimension: "workflows",
      statement:
        "A block theme can define templates, template parts, patterns, and global style settings that all work together to shape how content is authored and rendered",
      isTrue: true,
      explanation:
        "That combination is exactly what makes modern WordPress more system-driven than classic theme-only editing.",
    },
  ],
  rounds: [
    { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Editor era fact check" },
    { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the stronger WordPress move" },
    { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Core object, API, block" },
    { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Move fast, break nothing" },
    { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the fake extension logic" },
    { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Modern WP architecture." },
  ],
};
