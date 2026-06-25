import type { Metadata } from "next";

import type { SpeakerTrack } from "@/assets/data/speakers";
import type { SiteLocale } from "@/lib/site-messages";
import { siteMessages } from "@/lib/site-messages";
import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_KEYWORDS,
  SITE_NAME,
} from "@/lib/site-seo";
import { getSpeakerProfileImageUrl } from "@/lib/speaker-seo";
import type { TalkFormat } from "@/lib/talk-formats";
import type { TalkLanguage } from "@/lib/talk-languages";
import { getTalkLanguageCode } from "@/lib/talk-languages";
import type { TalkLevel } from "@/lib/talk-levels";
import {
  getTalkById,
  getTalkHref,
  getTalkSpeakers,
  type Talk,
} from "@/lib/talks";

const META_DESCRIPTION_MAX = 200;
const DEFAULT_OG_IMAGE = "/images/cfp.jpg";

function truncateMetaDescription(text: string): string {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= META_DESCRIPTION_MAX) {
    return normalized;
  }

  return `${normalized.slice(0, META_DESCRIPTION_MAX - 1).trimEnd()}…`;
}

function formatSpeakerNames(talk: Talk, locale: SiteLocale): string {
  return getTalkSpeakers(talk, locale)
    .map((speaker) => speaker.name)
    .join(", ");
}

function buildTalkDescription(talk: Talk, locale: SiteLocale): string {
  return truncateMetaDescription(
    `${talk.talkTitle} by ${formatSpeakerNames(talk, locale)} at PyCon Colombia 2026. ${talk.talkDescription}`,
  );
}

function buildTalkKeywords(talk: Talk, locale: SiteLocale): string[] {
  const trackLabels = talk.tracks.map(
    (track) => siteMessages[locale].blocks.speakers.tracks[track],
  );
  const speakers = getTalkSpeakers(talk, locale);

  return [
    ...SITE_KEYWORDS,
    talk.talkTitle,
    ...speakers.flatMap((speaker) => [speaker.name, speaker.country]),
    ...trackLabels,
    "PyCon talks",
    "Python Colombia",
    "PyCon Colombia 2026",
  ];
}

export function getTalkShareImageUrl(
  id: string | number,
  locale: SiteLocale = "en",
): string {
  const talk = getTalkById(id, locale);

  if (!talk) {
    return absoluteAssetUrl(DEFAULT_OG_IMAGE);
  }

  const primarySpeaker = getTalkSpeakers(talk, locale)[0];

  return (
    getSpeakerProfileImageUrl(primarySpeaker?.slug ?? "") ??
    absoluteAssetUrl(DEFAULT_OG_IMAGE)
  );
}

export function buildTalkPageMetadata(
  id: string | number,
  locale: SiteLocale,
): Metadata {
  const talk = getTalkById(id, locale);

  if (!talk) {
    return {};
  }

  const description = buildTalkDescription(talk, locale);
  const canonical = `${getSiteUrl()}${getTalkHref(talk.id)}`;
  const ogTitle = `${talk.talkTitle} — PyCon Colombia 2026`;
  const imageUrl = getTalkShareImageUrl(talk.id, locale);
  const imageAlt = `${talk.talkTitle} — ${formatSpeakerNames(talk, locale)}`;

  return {
    title: talk.talkTitle,
    description,
    keywords: buildTalkKeywords(talk, locale),
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      type: "article",
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_CO" : "en_US",
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
  };
}

export function buildTalkTrackPageMetadata(
  track: SpeakerTrack,
  locale: SiteLocale,
): Metadata {
  const label = siteMessages[locale].blocks.speakers.tracks[track];
  const description = siteMessages[locale].pageMeta.talks.description;
  const canonical = `${getSiteUrl()}/talks/${track}`;
  const title = `${label} — PyCon Colombia 2026 Talks`;

  return buildTalkFilterPageMetadata(
    label,
    description,
    canonical,
    title,
    locale,
  );
}

export function buildTalkLevelPageMetadata(
  level: TalkLevel,
  locale: SiteLocale,
): Metadata {
  const label = siteMessages[locale].blocks.talks.levels[level];
  const description = siteMessages[locale].pageMeta.talks.description;
  const canonical = `${getSiteUrl()}/talks/level/${level}`;
  const title = `${label} — PyCon Colombia 2026 Talks`;

  return buildTalkFilterPageMetadata(
    label,
    description,
    canonical,
    title,
    locale,
  );
}

export function buildTalkLanguagePageMetadata(
  language: TalkLanguage,
  locale: SiteLocale,
): Metadata {
  const label = siteMessages[locale].blocks.talks.languages[language];
  const description = siteMessages[locale].pageMeta.talks.description;
  const canonical = `${getSiteUrl()}/talks/language/${language}`;
  const title = `${label} — PyCon Colombia 2026 Talks`;

  return buildTalkFilterPageMetadata(
    label,
    description,
    canonical,
    title,
    locale,
  );
}

export function buildTalkFormatPageMetadata(
  format: TalkFormat,
  locale: SiteLocale,
): Metadata {
  const label = siteMessages[locale].blocks.talks.formats[format];
  const description = siteMessages[locale].pageMeta.talks.description;
  const canonical = `${getSiteUrl()}/talks/format/${format}`;
  const title = `${label} — PyCon Colombia 2026`;

  return buildTalkFilterPageMetadata(
    label,
    description,
    canonical,
    title,
    locale,
  );
}

function buildTalkFilterPageMetadata(
  label: string,
  description: string,
  canonical: string,
  title: string,
  locale: SiteLocale,
): Metadata {
  return {
    title: label,
    description,
    keywords: [...SITE_KEYWORDS, label, "PyCon talks", "Python talks"],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_CO" : "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export function buildTalkJsonLd(
  talk: Talk,
  locale: SiteLocale,
  talkUrl: string,
): Record<string, unknown> {
  const speakers = getTalkSpeakers(talk, locale);
  const trackLabels = talk.tracks.map(
    (track) => siteMessages[locale].blocks.speakers.tracks[track],
  );
  const levelLabel = siteMessages[locale].blocks.talks.levels[talk.level];
  const primaryImage = speakers[0]
    ? getSpeakerProfileImageUrl(speakers[0].slug)
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${talkUrl}#talk`,
    name: talk.talkTitle,
    description: truncateMetaDescription(talk.talkDescription),
    url: talkUrl,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    ...(primaryImage ? { image: primaryImage } : {}),
    about: trackLabels,
    inLanguage: getTalkLanguageCode(talk.language),
    audience: {
      "@type": "Audience",
      audienceType: levelLabel,
    },
    performer: speakers.map((speaker) => {
      const imageUrl = getSpeakerProfileImageUrl(speaker.slug);

      return {
        "@type": "Person",
        name: speaker.name,
        url: `${getSiteUrl()}/speakers/${speaker.slug}`,
        jobTitle: speaker.title,
        ...(imageUrl ? { image: imageUrl } : {}),
      };
    }),
    location: {
      "@type": "Place",
      name: "Universidad EAFIT",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medellín",
        addressCountry: "CO",
      },
    },
    isPartOf: {
      "@type": "Event",
      name: SITE_NAME,
      url: `${getSiteUrl()}/`,
    },
  };
}
