import type { ScheduleEvent } from "@/assets/data/schedule";
import { speakers } from "@/assets/data/speakers";
import { getLocalizedKeynote } from "@/lib/keynotes";
import type { SiteLocale } from "@/lib/site-messages";
import { getTalkByTalkKey, getTalkSpeakers } from "@/lib/talks";

export type ScheduleEventSpeaker = {
  name: string;
  slug?: string;
  image?: string;
  href?: string;
};

function normalizeSpeakerName(name: string) {
  return name
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const speakersByNormalizedName = new Map(
  speakers.map((speaker) => [normalizeSpeakerName(speaker.name), speaker]),
);

function resolveSpeakerByName(name: string): ScheduleEventSpeaker {
  const match = speakersByNormalizedName.get(normalizeSpeakerName(name));

  if (!match) {
    return { name };
  }

  return {
    name: match.name,
    slug: match.slug,
    image: match.image,
    href: `/speakers/${match.slug}`,
  };
}

export function resolveSpeakersForScheduleEvent(
  event: ScheduleEvent,
  locale: SiteLocale,
): ScheduleEventSpeaker[] {
  if (event.keynoteSlug) {
    const keynote = getLocalizedKeynote(event.keynoteSlug, locale);

    if (keynote) {
      return [
        {
          name: keynote.name,
          slug: keynote.slug,
          image: keynote.image,
          href: `/keynotes/${keynote.slug}`,
        },
      ];
    }
  }

  if (event.talkKey) {
    const talk = getTalkByTalkKey(event.talkKey, locale);

    if (talk) {
      return getTalkSpeakers(talk, locale).map((speaker) => ({
        name: speaker.name,
        slug: speaker.slug,
        image: speaker.image,
        href: `/speakers/${speaker.slug}`,
      }));
    }
  }

  return event.speaker
    .split("/")
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => resolveSpeakerByName(name));
}

export function shouldShowScheduleSpeakers(
  event: ScheduleEvent,
  speakersForEvent: ScheduleEventSpeaker[],
) {
  if (speakersForEvent.length === 0) {
    return false;
  }

  if (speakersForEvent.some((speaker) => speaker.slug)) {
    return true;
  }

  const normalizedEventSpeaker = normalizeSpeakerName(event.speaker);

  return ![
    "opening",
    "closing",
    "coffee break",
    "coffee break and snacks",
    "morning snacks",
    "lunch time",
    "attendees arrival",
    "attendees arrival and kits delivery",
  ].some((label) => normalizedEventSpeaker.includes(label));
}
