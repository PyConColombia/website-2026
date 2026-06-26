import {
  type Speaker,
  type SpeakerTrack,
  speakers,
  speakerTrackOrder,
} from "@/assets/data/speakers";
import {
  type SpeakerContent,
  speakerContentByLocale,
} from "@/assets/data/speakers-content.locale";
import type { SiteLocale } from "@/lib/site-messages";

export type LocalizedSpeaker = Speaker & SpeakerContent;

export function getCanonicalSpeakerSlug(slug: string): string {
  return slug.replace(/-\d+$/, "");
}

export function getSpeakerSlugAliases(slug: string): string[] {
  const canonical = getCanonicalSpeakerSlug(slug);

  return speakers
    .filter((speaker) => getCanonicalSpeakerSlug(speaker.slug) === canonical)
    .map((speaker) => speaker.slug)
    .sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
}

export function getSpeakerProfileHref(slug: string): string {
  return `/speakers/${getCanonicalSpeakerSlug(slug)}`;
}

function mergeSpeakerTracks(records: Speaker[]): SpeakerTrack[] {
  const trackSet = new Set<SpeakerTrack>();

  for (const speaker of records) {
    for (const track of speaker.tracks) {
      trackSet.add(track);
    }
  }

  return speakerTrackOrder.filter((track) => trackSet.has(track));
}

function getPrimarySpeakerSlug(slug: string): string | undefined {
  const canonical = getCanonicalSpeakerSlug(slug);
  const aliases = getSpeakerSlugAliases(slug);

  if (aliases.includes(canonical)) {
    return canonical;
  }

  return aliases[0];
}

export function getAllSpeakerSlugs() {
  const slugs = new Set<string>();

  for (const speaker of speakers) {
    const canonical = getCanonicalSpeakerSlug(speaker.slug);

    if (
      slugs.has(canonical) ||
      (!getSpeakerContent(canonical, "en") &&
        !getSpeakerContent(canonical, "es"))
    ) {
      continue;
    }

    slugs.add(canonical);
  }

  return [...slugs];
}

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return speakers.find((speaker) => speaker.slug === slug);
}

export function getSpeakerContent(
  slug: string,
  locale: SiteLocale,
): SpeakerContent | undefined {
  const contentBySlug = speakerContentByLocale[locale];

  return contentBySlug[slug] ?? contentBySlug[getCanonicalSpeakerSlug(slug)];
}

export function getLocalizedSpeaker(
  slug: string,
  locale: SiteLocale,
): LocalizedSpeaker | undefined {
  const primarySlug = getPrimarySpeakerSlug(slug);

  if (!primarySlug) {
    return undefined;
  }

  const speaker = getSpeakerBySlug(primarySlug);
  const content = getSpeakerContent(primarySlug, locale);

  if (!speaker || !content) {
    return undefined;
  }

  const aliasRecords = speakers.filter(
    (entry) => getCanonicalSpeakerSlug(entry.slug) === primarySlug,
  );

  return {
    ...speaker,
    ...content,
    slug: primarySlug,
    tracks: mergeSpeakerTracks(aliasRecords),
  };
}

export function getAllLocalizedSpeakers(
  locale: SiteLocale,
): LocalizedSpeaker[] {
  const seen = new Set<string>();

  return speakers
    .map((speaker) => {
      const canonical = getCanonicalSpeakerSlug(speaker.slug);

      if (seen.has(canonical)) {
        return undefined;
      }

      seen.add(canonical);

      return getLocalizedSpeaker(canonical, locale);
    })
    .filter((speaker): speaker is LocalizedSpeaker => speaker !== undefined)
    .toSorted((a, b) =>
      a.name.localeCompare(b.name, "es", { sensitivity: "base" }),
    );
}
