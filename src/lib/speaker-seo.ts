import type { Metadata } from "next";

import type { Speaker } from "@/assets/data/speakers";
import type { SiteLocale } from "@/lib/site-messages";
import { siteMessages } from "@/lib/site-messages";
import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_KEYWORDS,
  SITE_NAME,
} from "@/lib/site-seo";
import { resolveSpeakerImageSource } from "@/lib/speaker-image.server";
import { getSpeakerBySlug } from "@/lib/speakers";

const META_DESCRIPTION_MAX = 200;
const DEFAULT_OG_IMAGE = "/images/cfp.jpg";

function truncateMetaDescription(text: string): string {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= META_DESCRIPTION_MAX) {
    return normalized;
  }

  return `${normalized.slice(0, META_DESCRIPTION_MAX - 1).trimEnd()}…`;
}

function buildSpeakerDescription(speaker: Speaker): string {
  return truncateMetaDescription(
    `${speaker.name} presents "${speaker.talkTitle}" at PyCon Colombia 2026. ${speaker.talkDescription}`,
  );
}

function buildSpeakerKeywords(speaker: Speaker, locale: SiteLocale): string[] {
  const trackLabels = speaker.tracks.map(
    (track) => siteMessages[locale].blocks.speakers.tracks[track],
  );

  return [
    ...SITE_KEYWORDS,
    speaker.name,
    speaker.talkTitle,
    speaker.country,
    ...trackLabels,
    "PyCon speakers",
    "Python Colombia",
    "PyCon Colombia 2026",
  ];
}

/** Absolute URL for the speaker profile photo when one exists. */
export function getSpeakerProfileImageUrl(slug: string): string | undefined {
  const speaker = getSpeakerBySlug(slug);

  if (!speaker) {
    return undefined;
  }

  const resolved = resolveSpeakerImageSource(speaker.image, slug);

  if (!resolved) {
    return undefined;
  }

  if (/^https?:\/\//.test(resolved)) {
    return resolved;
  }

  return absoluteAssetUrl(resolved);
}

/** Image used for Open Graph / Twitter cards (speaker photo or site default). */
export function getSpeakerShareImageUrl(slug: string): string {
  return getSpeakerProfileImageUrl(slug) ?? absoluteAssetUrl(DEFAULT_OG_IMAGE);
}

export function buildSpeakerPageMetadata(
  slug: string,
  locale: SiteLocale,
): Metadata {
  const speaker = getSpeakerBySlug(slug);

  if (!speaker) {
    return {};
  }

  const description = buildSpeakerDescription(speaker);
  const canonical = `${getSiteUrl()}/speakers/${slug}`;
  const ogTitle = `${speaker.name} — ${speaker.talkTitle} | PyCon Colombia 2026`;
  const imageUrl = getSpeakerShareImageUrl(slug);
  const imageAlt = `${speaker.name} — PyCon Colombia 2026 speaker`;

  return {
    title: `${speaker.name} — ${speaker.talkTitle}`,
    description,
    keywords: buildSpeakerKeywords(speaker, locale),
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      type: "profile",
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

export function buildSpeakerJsonLd(
  speaker: Speaker,
  locale: SiteLocale,
  speakerUrl: string,
): Record<string, unknown> {
  const profileImageUrl = getSpeakerProfileImageUrl(speaker.slug);
  const sameAs = [speaker.github, speaker.linkedin].filter(
    (url): url is string => Boolean(url),
  );
  const trackLabels = speaker.tracks.map(
    (track) => siteMessages[locale].blocks.speakers.tracks[track],
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${speakerUrl}#person`,
    name: speaker.name,
    url: speakerUrl,
    jobTitle: speaker.title,
    description: truncateMetaDescription(speaker.talkDescription),
    ...(profileImageUrl ? { image: profileImageUrl } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    knowsAbout: trackLabels,
    performerIn: {
      "@type": "Event",
      name: SITE_NAME,
      url: `${getSiteUrl()}/`,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Universidad EAFIT",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Medellín",
          addressCountry: "CO",
        },
      },
    },
  };
}
