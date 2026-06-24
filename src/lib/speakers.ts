import { type Speaker, speakers } from "@/assets/data/speakers";
import {
  type SpeakerContent,
  speakerContentByLocale,
} from "@/assets/data/speakers-content.locale";
import type { SiteLocale } from "@/lib/site-messages";

export type LocalizedSpeaker = Speaker & SpeakerContent;

export function getAllSpeakerSlugs() {
  return speakers.map((speaker) => speaker.slug);
}

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return speakers.find((speaker) => speaker.slug === slug);
}

export function getSpeakerContent(
  slug: string,
  locale: SiteLocale,
): SpeakerContent | undefined {
  return speakerContentByLocale[locale][slug];
}

export function getLocalizedSpeaker(
  slug: string,
  locale: SiteLocale,
): LocalizedSpeaker | undefined {
  const speaker = getSpeakerBySlug(slug);
  const content = getSpeakerContent(slug, locale);

  if (!speaker || !content) {
    return undefined;
  }

  return { ...speaker, ...content };
}

export function getAllLocalizedSpeakers(
  locale: SiteLocale,
): LocalizedSpeaker[] {
  return speakers
    .map((speaker) => getLocalizedSpeaker(speaker.slug, locale))
    .filter((speaker): speaker is LocalizedSpeaker => speaker !== undefined);
}
