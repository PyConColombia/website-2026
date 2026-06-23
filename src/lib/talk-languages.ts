export type TalkLanguage = "spanish" | "english";

export type TalkLanguageFilter = "view-all" | TalkLanguage;

export const talkLanguageOrder: TalkLanguage[] = ["spanish", "english"];

export const talkLanguageStyles: Record<TalkLanguage, { badge: string }> = {
  spanish: {
    badge:
      "border-violet-500/35 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  },
  english: {
    badge:
      "border-indigo-500/35 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  },
};

export function parseTalkLanguage(language: string): TalkLanguage {
  const normalized = language.toLowerCase();

  if (
    normalized.includes("english") ||
    normalized.includes("inglés") ||
    normalized.includes("ingles")
  ) {
    return "english";
  }

  return "spanish";
}

export function getTalkLanguageCode(language: TalkLanguage): string {
  return language === "spanish" ? "es" : "en";
}

export function isTalkLanguage(slug: string): slug is TalkLanguage {
  return talkLanguageOrder.includes(slug as TalkLanguage);
}

export function getTalkLanguageHref(language: TalkLanguageFilter): string {
  return language === "view-all" ? "/talks" : `/talks/language/${language}`;
}

export function getAllTalkLanguageSlugs(): TalkLanguage[] {
  return talkLanguageOrder;
}
