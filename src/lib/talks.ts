import {
  type Speaker,
  type SpeakerTrack,
  speakers,
  speakerTrackOrder,
} from "@/assets/data/speakers";
import type { SiteLocale } from "@/lib/site-messages";
import {
  getActiveSpeakerTracks,
  type SpeakerTrackFilter,
} from "@/lib/speaker-tracks";
import {
  getSpeakerBySlug,
  getSpeakerContent,
  type LocalizedSpeaker,
} from "@/lib/speakers";
import {
  parseTalkLanguage,
  type TalkLanguage,
  type TalkLanguageFilter,
  talkLanguageOrder,
} from "@/lib/talk-languages";
import {
  parseTalkLevel,
  type TalkLevel,
  type TalkLevelFilter,
  talkLevelOrder,
} from "@/lib/talk-levels";

export type Talk = {
  id: number;
  talkKey: string;
  talkTitle: string;
  talkDescription: string;
  tracks: SpeakerTrack[];
  level: TalkLevel;
  levelLabel: string;
  language: TalkLanguage;
  languageLabel: string;
  speakerSlugs: string[];
};

function mergeTracks(group: Speaker[]): SpeakerTrack[] {
  const trackSet = new Set<SpeakerTrack>();

  for (const speaker of group) {
    for (const track of speaker.tracks) {
      trackSet.add(track);
    }
  }

  return speakerTrackOrder.filter((track) => trackSet.has(track));
}

function buildTalksForLocale(locale: SiteLocale): Talk[] {
  const groups = new Map<string, Speaker[]>();

  for (const speaker of speakers) {
    const content = getSpeakerContent(speaker.slug, locale);

    if (!content?.talkTitle.trim()) {
      continue;
    }

    const key = speaker.talkKey;
    const group = groups.get(key) ?? [];
    group.push(speaker);
    groups.set(key, group);
  }

  return [...groups.values()]
    .sort((a, b) =>
      a[0].talkKey.localeCompare(b[0].talkKey, "en", { sensitivity: "base" }),
    )
    .map((group, index) => {
      const primary = group[0];
      const primaryContent = getSpeakerContent(primary.slug, locale);
      const talkDescription = group.reduce((longest, speaker) => {
        const description =
          getSpeakerContent(speaker.slug, locale)?.talkDescription ?? "";

        return description.length > longest.length ? description : longest;
      }, primaryContent?.talkDescription ?? "");

      return {
        id: index + 1,
        talkKey: primary.talkKey,
        talkTitle: primaryContent?.talkTitle ?? "",
        talkDescription,
        tracks: mergeTracks(group),
        level: parseTalkLevel(primary.level),
        levelLabel: primary.level,
        language: parseTalkLanguage(primary.language),
        languageLabel: primary.language,
        speakerSlugs: group.map((speaker) => speaker.slug),
      };
    });
}

const talksByLocale: Record<SiteLocale, Talk[]> = {
  en: buildTalksForLocale("en"),
  es: buildTalksForLocale("es"),
};

export function getAllTalks(locale: SiteLocale = "en"): Talk[] {
  return talksByLocale[locale];
}

export function getAllTalkIds(locale: SiteLocale = "en"): number[] {
  return getAllTalks(locale).map((talk) => talk.id);
}

export function getTalkById(
  id: string | number,
  locale: SiteLocale = "en",
): Talk | undefined {
  const talkId = typeof id === "number" ? id : Number(id);

  if (!Number.isInteger(talkId) || talkId <= 0) {
    return undefined;
  }

  return talksByLocale[locale].find((talk) => talk.id === talkId);
}

export function getTalkBySpeakerSlug(
  slug: string,
  locale: SiteLocale = "en",
): Talk | undefined {
  return talksByLocale[locale].find((talk) => talk.speakerSlugs.includes(slug));
}

export function getTalkSpeakers(
  talk: Talk,
  locale: SiteLocale = "en",
): LocalizedSpeaker[] {
  return talk.speakerSlugs
    .map((slug) => {
      const speaker = getSpeakerBySlug(slug);
      const content = getSpeakerContent(slug, locale);

      if (!speaker || !content) {
        return undefined;
      }

      return { ...speaker, ...content };
    })
    .filter((speaker): speaker is LocalizedSpeaker => speaker !== undefined);
}

export function isTalkId(value: string, locale: SiteLocale = "en"): boolean {
  return getTalkById(value, locale) !== undefined;
}

export function getTalkHref(id: number): string {
  return `/talks/${id}`;
}

export function getTalkHrefForSpeaker(
  slug: string,
  locale: SiteLocale = "en",
): string | undefined {
  const talk = getTalkBySpeakerSlug(slug, locale);

  return talk ? getTalkHref(talk.id) : undefined;
}

export function getTalkCountsByLevel(
  activeTrack: SpeakerTrackFilter = "view-all",
  locale: SiteLocale = "en",
): Record<TalkLevelFilter, number> {
  const talks = getAllTalks(locale);
  const filteredByTrack =
    activeTrack === "view-all"
      ? talks
      : talks.filter((talk) => talk.tracks.includes(activeTrack));

  const counts = {
    "view-all": filteredByTrack.length,
  } as Record<TalkLevelFilter, number>;

  for (const level of talkLevelOrder) {
    counts[level] = filteredByTrack.filter(
      (talk) => talk.level === level,
    ).length;
  }

  return counts;
}

export function getTalkCountsByLanguage(
  activeTrack: SpeakerTrackFilter = "view-all",
  locale: SiteLocale = "en",
): Record<TalkLanguageFilter, number> {
  const talks = getAllTalks(locale);
  const filteredByTrack =
    activeTrack === "view-all"
      ? talks
      : talks.filter((talk) => talk.tracks.includes(activeTrack));

  const counts = {
    "view-all": filteredByTrack.length,
  } as Record<TalkLanguageFilter, number>;

  for (const language of talkLanguageOrder) {
    counts[language] = filteredByTrack.filter(
      (talk) => talk.language === language,
    ).length;
  }

  return counts;
}

export function getTalkCountsByTrack(
  locale: SiteLocale = "en",
): Record<SpeakerTrackFilter, number> {
  const talks = getAllTalks(locale);
  const counts = {
    "view-all": talks.length,
  } as Record<SpeakerTrackFilter, number>;

  for (const track of getActiveSpeakerTracks()) {
    counts[track] = talks.filter((talk) => talk.tracks.includes(track)).length;
  }

  return counts;
}
