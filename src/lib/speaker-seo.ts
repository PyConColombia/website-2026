import type { Metadata } from "next";

import type { SiteLocale } from "@/lib/site-messages";
import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_KEYWORDS,
  SITE_NAME,
} from "@/lib/site-seo";
import { resolveSpeakerImageUrl } from "@/lib/speaker-image-url";
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

/** Image used for Open Graph / Twitter cards (speaker photo or site default). */
export function getSpeakerShareImageUrl(slug: string): string {
  const speaker = getSpeakerBySlug(slug);
  const resolved = resolveSpeakerImageUrl(speaker?.image);

  if (resolved) {
    if (/^https?:\/\//.test(resolved)) {
      return resolved;
    }

    return absoluteAssetUrl(resolved);
  }

  return absoluteAssetUrl(DEFAULT_OG_IMAGE);
}

export function buildSpeakerPageMetadata(
  slug: string,
  locale: SiteLocale,
): Metadata {
  const speaker = getSpeakerBySlug(slug);

  if (!speaker) {
    return {};
  }

  const description = truncateMetaDescription(speaker.talkDescription);
  const canonical = `${getSiteUrl()}/speakers/${slug}`;
  const ogTitle = `${speaker.name} — PyCon Colombia 2026`;
  const imageUrl = getSpeakerShareImageUrl(slug);
  const imageAlt = `${speaker.name} — PyCon Colombia 2026 speaker`;

  return {
    title: speaker.name,
    description,
    keywords: [
      ...SITE_KEYWORDS,
      speaker.name,
      speaker.talkTitle,
      "PyCon speakers",
      "Python Colombia",
    ],
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
