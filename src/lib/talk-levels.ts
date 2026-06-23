export type TalkLevel = "beginner" | "intermediate" | "advanced" | "all";

export type TalkLevelFilter = "view-all" | TalkLevel;

export const talkLevelOrder: TalkLevel[] = [
  "beginner",
  "intermediate",
  "advanced",
  "all",
];

export const talkLevelStyles: Record<TalkLevel, { badge: string }> = {
  beginner: {
    badge:
      "border-emerald-500/35 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  },
  intermediate: {
    badge:
      "border-amber-500/35 bg-amber-500/10 text-amber-800 dark:text-amber-300",
  },
  advanced: {
    badge: "border-rose-500/35 bg-rose-500/10 text-rose-700 dark:text-rose-300",
  },
  all: {
    badge: "border-sky-500/35 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  },
};

export function parseTalkLevel(level: string): TalkLevel {
  const normalized = level.toLowerCase();

  if (normalized.includes("beginner") || normalized.includes("principiante")) {
    return "beginner";
  }

  if (normalized.includes("advanced") || normalized.includes("avanzado")) {
    return "advanced";
  }

  if (normalized.includes("all") || normalized.includes("todos")) {
    return "all";
  }

  return "intermediate";
}

export function isTalkLevel(slug: string): slug is TalkLevel {
  return talkLevelOrder.includes(slug as TalkLevel);
}

export function getTalkLevelHref(level: TalkLevelFilter): string {
  return level === "view-all" ? "/talks" : `/talks/level/${level}`;
}

export function getAllTalkLevelSlugs(): TalkLevel[] {
  return talkLevelOrder;
}
