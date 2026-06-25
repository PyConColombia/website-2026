export type TalkFormat = "talk" | "workshop";

export type TalkFormatFilter = "view-all" | TalkFormat;

export const talkFormatOrder: TalkFormat[] = ["talk", "workshop"];

export const talkFormatStyles: Record<TalkFormat, { badge: string }> = {
  talk: {
    badge:
      "border-violet-500/35 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  },
  workshop: {
    badge:
      "border-orange-500/35 bg-orange-500/10 text-orange-700 dark:text-orange-300",
  },
};

export function parseTalkFormat(format: string | undefined): TalkFormat {
  return format === "workshop" ? "workshop" : "talk";
}

export function isTalkFormat(slug: string): slug is TalkFormat {
  return talkFormatOrder.includes(slug as TalkFormat);
}

export function getTalkFormatHref(format: TalkFormatFilter): string {
  return format === "view-all" ? "/talks" : `/talks/format/${format}`;
}

export function getAllTalkFormatSlugs(): TalkFormat[] {
  return talkFormatOrder;
}
