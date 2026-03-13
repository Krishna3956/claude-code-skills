import type { Challenge, QuizConfig, RoundConfig } from "@/components/quiz/types";

const excelLogo = (
  <img
    src="/logos/excel-mark.svg"
    alt="Microsoft Excel"
    width={44}
    height={44}
    style={{ objectFit: "contain" }}
  />
);

const easyChallenges: Challenge[] = [
  {
    type: "truth_or_myth",
    id: 1,
    dimension: "orchestration",
    statement:
      "XLOOKUP can return values from a column to the left of the lookup column without restructuring the table",
    isTrue: true,
    explanation:
      "That is one of the practical reasons experienced users moved beyond VLOOKUP. XLOOKUP is not locked to rightward return columns.",
  },
  {
    type: "truth_or_myth",
    id: 2,
    dimension: "memory",
    statement:
      "A dynamic array formula will still spill even if one of the destination cells already contains a value",
    isTrue: false,
    explanation:
      "Blocked spill ranges produce an error instead of overwriting occupied cells. The destination area has to be clear.",
  },
  {
    type: "truth_or_myth",
    id: 3,
    dimension: "extensibility",
    statement:
      "Excel tables automatically expand structured references when new rows are added below the table",
    isTrue: true,
    explanation:
      "That auto-expansion behavior is exactly why table-based models are more resilient than raw range references in operational workbooks.",
  },
  {
    type: "truth_or_myth",
    id: 4,
    dimension: "prompting",
    statement:
      "UNIQUE returns only the first duplicated value it finds and ignores the rest of the array",
    isTrue: false,
    explanation:
      "UNIQUE returns the distinct values from the array, not just a single first duplicate.",
  },
  {
    type: "this_or_that",
    id: 5,
    dimension: "orchestration",
    scenario:
      "You need a lookup that survives inserted columns and can search left or right. Which option is stronger?",
    optionA: "XLOOKUP",
    optionB: "Hardcoded VLOOKUP column index",
    correct: "A",
    explanation:
      "XLOOKUP is structurally safer because it separates the lookup array from the return array and avoids brittle column-number logic.",
  },
  {
    type: "this_or_that",
    id: 6,
    dimension: "workflows",
    scenario:
      "You want to return only rows where Region equals West and Status equals Closed. Which approach is better?",
    optionA: "Manual hiding and copy-paste",
    optionB: "FILTER with combined criteria",
    correct: "B",
    explanation:
      "FILTER is the modern array-native answer. It preserves live logic instead of turning the output into a static extraction.",
  },
  {
    type: "this_or_that",
    id: 7,
    dimension: "bestPractices",
    scenario:
      "A revenue formula repeats the same long lookup expression three times. What is the stronger cleanup move?",
    optionA: "Leave it repeated because Excel can figure it out",
    optionB: "Use LET to name the repeated expression once",
    correct: "B",
    explanation:
      "LET improves readability and can reduce repeated recalculation inside the same formula.",
  },
  {
    type: "quick_pick",
    id: 8,
    dimension: "memory",
    scenario:
      "Which operator references the full spilled output that begins in one anchor cell?",
    blank: "#",
    options: ["@", "#", "&"],
    explanation:
      "The spilled range operator is #. It points to the whole dynamic output anchored from a starting cell.",
  },
  {
    type: "quick_pick",
    id: 9,
    dimension: "extensibility",
    scenario:
      "Inside a table formula, which token is used in practice to refer to the current row?",
    blank: "@",
    options: ["#All", "@", "$"],
    explanation:
      "In structured references, @ is the current-row operator users actually rely on, such as [@Amount].",
  },
  {
    type: "quick_pick",
    id: 10,
    dimension: "prompting",
    scenario:
      "Which function is built to return only unique values from a range or array?",
    blank: "UNIQUE",
    options: ["SORT", "UNIQUE", "TOCOL"],
    explanation:
      "UNIQUE is the dedicated distinct-values function. SORT only reorders data.",
  },
  {
    type: "speed_pick",
    id: 11,
    dimension: "workflows",
    prompt: "Tap every modern dynamic-array function in this set!",
    correctItems: ["FILTER", "UNIQUE", "SORT", "SORTBY", "SEQUENCE"],
    wrongItems: ["Goal Seek", "Scenario Manager", "Data Table", "Text to Columns"],
    timeLimit: 15,
    explanation:
      "FILTER, UNIQUE, SORT, SORTBY, and SEQUENCE are part of the modern spill-era toolkit. The others are real Excel tools, but not dynamic-array functions.",
  },
  {
    type: "speed_pick",
    id: 12,
    dimension: "extensibility",
    prompt: "Tap every valid Excel table item specifier!",
    correctItems: ["#All", "#Data", "#Headers", "#Totals", "#This Row"],
    wrongItems: ["#Cells", "#Body", "#Column", "#Matrix"],
    timeLimit: 15,
    explanation:
      "These are the standard structured-reference item specifiers used in tables. The others are invented.",
  },
  {
    type: "odd_one_out",
    id: 13,
    dimension: "orchestration",
    prompt: "One of these is NOT a native XLOOKUP argument concept. Which one?",
    items: ["lookup_value", "lookup_array", "return_array", "column_index_num"],
    oddItem: "column_index_num",
    explanation:
      "That old column-index pattern belongs to VLOOKUP-style thinking, not XLOOKUP.",
  },
  {
    type: "odd_one_out",
    id: 14,
    dimension: "bestPractices",
    prompt: "One of these is NOT a strong workbook modeling habit. Which one?",
    items: [
      "Use Excel tables for expanding datasets",
      "Name repeated logic with LET where appropriate",
      "Build outputs from live formulas instead of copy-paste extracts",
      "Hardcode lookup column numbers across critical models",
    ],
    oddItem: "Hardcode lookup column numbers across critical models",
    explanation:
      "That is exactly the kind of fragile pattern modern Excel features help you avoid.",
  },
  {
    type: "truth_or_myth",
    id: 15,
    dimension: "workflows",
    statement:
      "FILTER can return an array of matching rows, and if no match exists you can specify an explicit fallback result",
    isTrue: true,
    explanation:
      "That optional fallback is one of the reasons FILTER works well in real dashboards and exception-handling flows.",
  },
];

const mediumChallenges: Challenge[] = [
  {
    type: "truth_or_myth",
    id: 1,
    dimension: "prompting",
    statement:
      "When older workbooks are opened in dynamic-array Excel, the @ operator may appear to make implicit intersection explicit",
    isTrue: true,
    explanation:
      "Excel used to perform implicit intersection silently. Newer formula behavior exposes that with @ where relevant.",
  },
  {
    type: "truth_or_myth",
    id: 2,
    dimension: "orchestration",
    statement:
      "XMATCH defaults to exact match when match_mode is omitted",
    isTrue: true,
    explanation:
      "That default is a major quality-of-life improvement over older lookup habits that assumed approximate match in the wrong places.",
  },
  {
    type: "truth_or_myth",
    id: 3,
    dimension: "automation",
    statement:
      "A named LAMBDA only works in Name Manager previews and cannot be called from worksheet cells like a normal function",
    isTrue: false,
    explanation:
      "Once defined and named properly, a LAMBDA can be called from worksheet cells like a custom workbook function.",
  },
  {
    type: "truth_or_myth",
    id: 4,
    dimension: "bestPractices",
    statement:
      "LET only improves readability and has no possible recalculation benefit",
    isTrue: false,
    explanation:
      "LET improves readability and can also reduce repeated evaluation of the same subexpression.",
  },
  {
    type: "this_or_that",
    id: 5,
    dimension: "orchestration",
    scenario:
      "You need the last exact match from an unsorted transaction log. Which move is stronger?",
    optionA: "Use XLOOKUP with search_mode -1",
    optionB: "Approximate-match your way through the log with MATCH defaults",
    correct: "A",
    explanation:
      "Reverse search is explicit and preserves the meaning of the underlying record order.",
  },
  {
    type: "this_or_that",
    id: 6,
    dimension: "workflows",
    scenario:
      "You need the first five rows from a spilled output after excluding its header row. Which approach is stronger?",
    optionA: "Copy the spill somewhere else and delete cells manually",
    optionB: "Combine DROP and TAKE",
    correct: "B",
    explanation:
      "DROP and TAKE are designed for array slicing. They preserve logic and remain stable as the source changes.",
  },
  {
    type: "this_or_that",
    id: 7,
    dimension: "automation",
    scenario:
      "You want a reusable workbook function that applies row logic across any passed range. Which option is better?",
    optionA: "A different pasted formula block in every sheet",
    optionB: "A named LAMBDA with BYROW when needed",
    correct: "B",
    explanation:
      "That is the maintainable path: define once, reuse everywhere, and combine with helper functions when shaping arrays.",
  },
  {
    type: "quick_pick",
    id: 8,
    dimension: "automation",
    scenario:
      "Which function reduces an array to one accumulated result through a LAMBDA?",
    blank: "REDUCE",
    options: ["SCAN", "REDUCE", "MAP"],
    explanation:
      "REDUCE returns a single accumulated result. SCAN returns every intermediate accumulator value.",
  },
  {
    type: "quick_pick",
    id: 9,
    dimension: "memory",
    scenario:
      "Which operator is used to reference the full spill from one anchor cell?",
    blank: "#",
    options: ["@", ":", "#"],
    explanation:
      "The spill operator # points to the entire dynamic array produced by the anchor cell.",
  },
  {
    type: "quick_pick",
    id: 10,
    dimension: "workflows",
    scenario:
      "Which function is built to return selected columns from an array by position?",
    blank: "CHOOSECOLS",
    options: ["TOCOL", "WRAPROWS", "CHOOSECOLS"],
    explanation:
      "CHOOSECOLS is the direct array-projection function for column selection.",
  },
  {
    type: "speed_pick",
    id: 11,
    dimension: "automation",
    prompt: "Tap every Excel helper function in this modern formula set!",
    correctItems: ["MAP", "REDUCE", "SCAN", "BYROW", "BYCOL"],
    wrongItems: ["SUMPRODUCT", "SUBTOTAL", "OFFSET", "INDIRECT"],
    timeLimit: 15,
    explanation:
      "These five are part of the newer LAMBDA/helper-function family. The others are older Excel functions with different roles and tradeoffs.",
  },
  {
    type: "speed_pick",
    id: 12,
    dimension: "orchestration",
    prompt: "Tap every valid search_mode value for XLOOKUP/XMATCH!",
    correctItems: ["1", "-1", "2", "-2"],
    wrongItems: ["0", "3", "-3", "4"],
    timeLimit: 15,
    explanation:
      "The valid modes are forward, reverse, binary ascending, and binary descending.",
  },
  {
    type: "odd_one_out",
    id: 13,
    dimension: "extensibility",
    prompt: "One of these is NOT a valid Excel table item specifier. Which one?",
    items: ["#All", "#Data", "#Headers", "#Cells"],
    oddItem: "#Cells",
    explanation:
      "Structured references recognize #All, #Data, #Headers, #Totals, and #This Row. #Cells is not valid.",
  },
  {
    type: "odd_one_out",
    id: 14,
    dimension: "automation",
    prompt: "One of these is NOT valid for a LAMBDA parameter name in Excel. Which one?",
    items: ["threshold", "row_value", "n", "value.one"],
    oddItem: "value.one",
    explanation:
      "The docs call out that periods are not allowed in LAMBDA parameter names.",
  },
  {
    type: "truth_or_myth",
    id: 15,
    dimension: "workflows",
    statement:
      "Nested XLOOKUPs are limited to one-dimensional retrieval and are not a practical pattern for two-way lookups",
    isTrue: false,
    explanation:
      "Nested XLOOKUPs are a documented way to perform two-way lookups across row and column headers.",
  },
];

const hardChallenges: Challenge[] = [
  {
    type: "truth_or_myth",
    id: 1,
    dimension: "prompting",
    statement:
      "In dynamic-array Excel, an older formula may show the @ operator because Excel is making previously silent implicit intersection explicit",
    isTrue: true,
    explanation:
      "That is exactly why many upgraded workbooks show @. The new formula language exposes where implicit intersection could occur instead of doing it invisibly.",
  },
  {
    type: "truth_or_myth",
    id: 2,
    dimension: "orchestration",
    statement:
      "XMATCH defaults to approximate match behavior when you omit match_mode",
    isTrue: false,
    explanation:
      "The default is exact match. That is one of the key differences power users rely on versus older MATCH habits.",
  },
  {
    type: "truth_or_myth",
    id: 3,
    dimension: "bestPractices",
    statement:
      "LET can improve performance because repeated expressions can be calculated once and reused by name inside the same formula",
    isTrue: true,
    explanation:
      "That is one of the main reasons LET matters. It improves readability and can prevent Excel from recalculating the same expensive expression repeatedly.",
  },
  {
    type: "truth_or_myth",
    id: 4,
    dimension: "automation",
    statement:
      "BYROW allows a LAMBDA to return multiple values per row without error",
    isTrue: false,
    explanation:
      "BYROW expects a single result for each row. Returning anything other than one value per row leads to a #CALC error.",
  },
  {
    type: "this_or_that",
    id: 5,
    dimension: "orchestration",
    scenario:
      "You need the last matching record from an unsorted list without rewriting the model. Which approach is stronger?",
    optionA: "Use XLOOKUP with search_mode set to -1",
    optionB: "Sort the source range first and hope MATCH still reflects the original logic",
    correct: "A",
    explanation:
      "Reverse search is the direct solution. It preserves the original order semantics and does not require mutating or reinterpreting the source data.",
  },
  {
    type: "this_or_that",
    id: 6,
    dimension: "workflows",
    scenario:
      "You have a spilled array and need columns 1, 4, and the last column in a reusable formula. Which approach is better?",
    optionA: "Manually hardcode helper columns beside the output",
    optionB: "Use CHOOSECOLS against the array",
    correct: "B",
    explanation:
      "CHOOSECOLS is built for array projection. It keeps the logic in-formula, stays spill-friendly, and avoids brittle workbook scaffolding.",
  },
  {
    type: "this_or_that",
    id: 7,
    dimension: "automation",
    scenario:
      "A complex formula pattern is reused all over the workbook and keeps getting copied badly. What is the stronger Excel-native move?",
    optionA: "Keep pasting the formula and rely on comments for maintenance",
    optionB: "Wrap it in a named LAMBDA and call it like a custom function",
    correct: "B",
    explanation:
      "Named LAMBDAs are the workbook-native way to turn repeat logic into reusable functions without VBA or external code.",
  },
  {
    type: "quick_pick",
    id: 8,
    dimension: "memory",
    scenario:
      "Which operator references an entire spilled array range starting from one anchor cell?",
    blank: "#",
    options: ["&", "#", "@"],
    explanation:
      "The spilled range operator is #. Appending it to the anchor cell references the full spill output dynamically.",
  },
  {
    type: "quick_pick",
    id: 9,
    dimension: "extensibility",
    scenario:
      "Inside an Excel table formula, what syntax indicates the current row for a column reference?",
    blank: "@",
    options: ["#This Row", "$", "@"],
    explanation:
      "In practical table formulas, @ is the current-row operator users actually work with, as in [@Amount].",
  },
  {
    type: "quick_pick",
    id: 10,
    dimension: "automation",
    scenario:
      "Which modern Excel function reduces an array to a single accumulated result through a LAMBDA?",
    blank: "REDUCE",
    options: ["MAP", "SCAN", "REDUCE"],
    explanation:
      "REDUCE collapses an array into one accumulated output. SCAN returns all intermediate accumulator states, and MAP transforms values item by item.",
  },
  {
    type: "speed_pick",
    id: 11,
    dimension: "automation",
    prompt: "Tap every modern dynamic-array/helper function in this set!",
    correctItems: ["MAP", "REDUCE", "SCAN", "BYROW", "CHOOSECOLS"],
    wrongItems: ["Goal Seek", "Solver", "SUMIFS", "VLOOKUP"],
    timeLimit: 15,
    explanation:
      "MAP, REDUCE, SCAN, BYROW, and CHOOSECOLS belong to the modern array/function toolkit. The others are real Excel features, but not part of that helper-function family.",
  },
  {
    type: "speed_pick",
    id: 12,
    dimension: "orchestration",
    prompt: "Tap every valid search_mode value supported by XLOOKUP/XMATCH!",
    correctItems: ["1", "-1", "2", "-2"],
    wrongItems: ["0", "3", "-3", "99"],
    timeLimit: 15,
    explanation:
      "The valid search modes are forward, reverse, binary ascending, and binary descending: 1, -1, 2, and -2.",
  },
  {
    type: "odd_one_out",
    id: 13,
    dimension: "extensibility",
    prompt: "One of these is NOT a valid Excel table item specifier. Which one?",
    items: ["#All", "#Data", "#Headers", "#Cells"],
    oddItem: "#Cells",
    explanation:
      "Structured references support item specifiers like #All, #Data, #Headers, #Totals, and #This Row. #Cells is not one of them.",
  },
  {
    type: "odd_one_out",
    id: 14,
    dimension: "automation",
    prompt: "One of these is NOT valid for a LAMBDA parameter name in Excel. Which one?",
    items: ["row_value", "threshold", "value.one", "n"],
    oddItem: "value.one",
    explanation:
      "LAMBDA parameter names follow Excel naming rules, with one explicit gotcha in the docs: you cannot use a period in a parameter name.",
  },
  {
    type: "truth_or_myth",
    id: 15,
    dimension: "workflows",
    statement:
      "XLOOKUP can return a multi-cell array, and nested XLOOKUPs can be used for a two-way lookup across both row and column headers",
    isTrue: true,
    explanation:
      "That pattern is documented by Microsoft. Power users use nested XLOOKUPs to perform two-dimensional retrieval without falling back to older lookup patterns.",
  },
];

const rounds: RoundConfig[] = [
  { name: "Truth or Myth", icon: "?", ids: [1, 2, 3, 4], tagline: "Calc-engine fact check" },
  { name: "This or That", icon: "vs", ids: [5, 6, 7], tagline: "Pick the stronger formula move" },
  { name: "Quick Pick", icon: ">>", ids: [8, 9, 10], tagline: "Operator, syntax, function" },
  { name: "Speed Round", icon: "::", ids: [11, 12], tagline: "Modern Excel only" },
  { name: "Odd One Out", icon: "//", ids: [13, 14], tagline: "Spot the invalid pattern" },
  { name: "Final Boss", icon: "*", ids: [15], tagline: "One shot. Spreadsheet violence." },
];

export const excelConfig: QuizConfig = {
  slug: "excel",
  toolName: "Microsoft Excel",
  tagline: "6 rounds. ~3 min. No workbook required.",
  subtitle: "Choose your difficulty. Excel can be polite or cruel.",
  sansFont: "inter",
  serifFont: "source-serif-4",
  accentColor: "#217346",
  accentColorDim: "#185C37",
  accentColorSubtle: "rgba(33,115,70,0.10)",
  bgColor: "#F4FBF6",
  bgElevated: "#FFFFFF",
  bgSurface: "#FFFFFF",
  bgSurfaceLight: "#E8F4EC",
  textColor: "#163120",
  textSecondary: "#3F5A48",
  textTertiary: "#6F8A78",
  borderColor: "#CEE0D4",
  borderSubtle: "#E7F0EA",
  scorecardBg: "#163120",
  scorecardAccentColor: "#B9E3C6",
  scorecardDivider: "#2F4B38",
  scorecardLabelColor: "#9FC3AA",
  scorecardGridColor: "#2F4B38",
  logo: excelLogo,
  scorecardLogo: excelLogo,
  analyticsPrefix: "excel",
  dimensionLabels: {
    memory: "Arrays & References",
    orchestration: "Lookup Engines",
    automation: "Lambda Workflows",
    extensibility: "Table Semantics",
    workflows: "Formula Architecture",
    prompting: "Calc Engine Behavior",
    bestPractices: "Performance Patterns",
  },
  archetypes: [
    {
      title: "Grid Sorcerer",
      emoji: "🧮",
      description:
        "You think in arrays, search modes, scoped names, and calc-engine side effects. This is power-user territory.",
      minScore: 90,
      maxScore: 100,
    },
    {
      title: "Formula Architect",
      emoji: "🏗️",
      description:
        "You are well past shortcuts and lookup recipes. Your Excel instincts are structural, not cosmetic.",
      minScore: 80,
      maxScore: 89,
    },
    {
      title: "Dynamic Array Operator",
      emoji: "⚙️",
      description:
        "You understand modern Excel deeply. A few gnarlier semantics still separate you from full spreadsheet menace.",
      minScore: 70,
      maxScore: 79,
    },
    {
      title: "Lookup Specialist",
      emoji: "🎯",
      description:
        "You know your way around modern formulas and search logic, but the deeper architecture layer is still opening up.",
      minScore: 60,
      maxScore: 69,
    },
    {
      title: "Workbook Tactician",
      emoji: "📈",
      description:
        "You are clearly experienced, but some of the newer functional and spill-era patterns are still uneven.",
      minScore: 50,
      maxScore: 59,
    },
    {
      title: "Range Fighter",
      emoji: "📋",
      description:
        "You can get serious work done in Excel, but the hardest modern formula tools are not yet instinctive.",
      minScore: 40,
      maxScore: 49,
    },
    {
      title: "Cell Rookie",
      emoji: "🌱",
      description:
        "Excel has much sharper edges than it first appears. You just met some of them.",
      minScore: 0,
      maxScore: 39,
    },
  ],
  defaultDifficulty: "hard",
  difficultyOptions: [
    {
      key: "easy",
      label: "Easy",
      tagline: "6 rounds. ~3 min. No workbook required.",
      subtitle: "Still not beginner mode. Just less cruel.",
      challenges: easyChallenges,
      rounds,
    },
    {
      key: "medium",
      label: "Medium",
      tagline: "6 rounds. ~3 min. No workbook required.",
      subtitle: "For people who actually use modern Excel.",
      challenges: mediumChallenges,
      rounds,
    },
    {
      key: "hard",
      label: "Hard",
      tagline: "6 rounds. ~3 min. No workbook required.",
      subtitle: "Very difficult Excel formula warfare.",
      challenges: hardChallenges,
      rounds,
    },
  ],
  challenges: hardChallenges,
  rounds,
};
