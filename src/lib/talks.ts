import {
  type Speaker,
  type SpeakerTrack,
  speakers,
  speakerTrackOrder,
} from "@/assets/data/speakers";
import {
  getActiveSpeakerTracks,
  type SpeakerTrackFilter,
} from "@/lib/speaker-tracks";
import { getSpeakerBySlug } from "@/lib/speakers";
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

function buildTalks(): Talk[] {
  const groups = new Map<string, Speaker[]>();

  for (const speaker of speakers) {
    if (!speaker.talkTitle.trim()) {
      continue;
    }

    const key = speaker.talkTitle.trim();
    const group = groups.get(key) ?? [];
    group.push(speaker);
    groups.set(key, group);
  }

  return [...groups.values()]
    .sort((a, b) =>
      a[0].talkTitle.localeCompare(b[0].talkTitle, "es", {
        sensitivity: "base",
      }),
    )
    .map((group, index) => {
      const primary = group[0];
      const talkDescription = group.reduce(
        (longest, speaker) =>
          speaker.talkDescription.length > longest.length
            ? speaker.talkDescription
            : longest,
        primary.talkDescription,
      );

      return {
        id: index + 1,
        talkTitle: primary.talkTitle,
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

const talks = buildTalks();

export function getAllTalks(): Talk[] {
  return talks;
}

export function getAllTalkIds(): number[] {
  return talks.map((talk) => talk.id);
}

export function getTalkById(id: string | number): Talk | undefined {
  const talkId = typeof id === "number" ? id : Number(id);

  if (!Number.isInteger(talkId) || talkId <= 0) {
    return undefined;
  }

  return talks.find((talk) => talk.id === talkId);
}

export function getTalkBySpeakerSlug(slug: string): Talk | undefined {
  return talks.find((talk) => talk.speakerSlugs.includes(slug));
}

export function getTalkSpeakers(talk: Talk): Speaker[] {
  return talk.speakerSlugs
    .map((slug) => getSpeakerBySlug(slug))
    .filter((speaker): speaker is Speaker => speaker !== undefined);
}

export function isTalkId(value: string): boolean {
  return getTalkById(value) !== undefined;
}

export function getTalkHref(id: number): string {
  return `/talks/${id}`;
}

export function getTalkHrefForSpeaker(slug: string): string | undefined {
  const talk = getTalkBySpeakerSlug(slug);

  return talk ? getTalkHref(talk.id) : undefined;
}

export function getTalkCountsByLevel(
  activeTrack: SpeakerTrackFilter = "view-all",
): Record<TalkLevelFilter, number> {
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
): Record<TalkLanguageFilter, number> {
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

export function getTalkCountsByTrack(): Record<SpeakerTrackFilter, number> {
  const counts = {
    "view-all": talks.length,
  } as Record<SpeakerTrackFilter, number>;

  for (const track of getActiveSpeakerTracks()) {
    counts[track] = talks.filter((talk) => talk.tracks.includes(track)).length;
  }

  return counts;
}
