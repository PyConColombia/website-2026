import type { Metadata } from "next";
import {
  getKeynoteBySlug,
  getLocalizedKeynote,
  type LocalizedKeynote,
} from "@/lib/keynotes";
import type { SiteLocale } from "@/lib/site-messages";
import { siteMessages } from "@/lib/site-messages";
import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_KEYWORDS,
  SITE_NAME,
} from "@/lib/site-seo";

const META_DESCRIPTION_MAX = 200;
const DEFAULT_OG_IMAGE = "/images/cfp.jpg";

function truncateMetaDescription(text: string): string {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= META_DESCRIPTION_MAX) {
    return normalized;
  }

  return `${normalized.slice(0, META_DESCRIPTION_MAX - 1).trimEnd()}…`;
}

function buildKeynoteDescription(keynote: LocalizedKeynote): string {
  return truncateMetaDescription(
    `${keynote.name} keynote at PyCon Colombia 2026. ${keynote.description}`,
  );
}

export function getKeynoteShareImageUrl(slug: string): string {
  const keynote = getKeynoteBySlug(slug);

  if (!keynote?.image) {
    return absoluteAssetUrl(DEFAULT_OG_IMAGE);
  }

  return absoluteAssetUrl(keynote.image);
}

export function buildKeynotePageMetadata(
  slug: string,
  locale: SiteLocale,
): Metadata {
  const keynote = getLocalizedKeynote(slug, locale);

  if (!keynote) {
    return {};
  }

  const description = buildKeynoteDescription(keynote);
  const canonical = `${getSiteUrl()}/keynotes/${slug}`;
  const title = `${keynote.name} — PyCon Colombia 2026 Keynote`;
  const imageUrl = getKeynoteShareImageUrl(slug);

  return {
    title: keynote.name,
    description,
    keywords: [
      ...SITE_KEYWORDS,
      keynote.name,
      keynote.country,
      "PyCon keynotes",
      "Python Colombia",
      "PyCon Colombia 2026",
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "profile",
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_CO" : "en_US",
      images: [{ url: imageUrl, alt: keynote.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildKeynoteJsonLd(
  keynote: LocalizedKeynote,
  locale: SiteLocale,
  keynoteUrl: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${keynoteUrl}#keynote-speaker`,
    name: keynote.name,
    jobTitle: keynote.role,
    description: truncateMetaDescription(keynote.description),
    url: keynoteUrl,
    image: getKeynoteShareImageUrl(keynote.slug),
    nationality: keynote.country,
    sameAs: [
      keynote.linkedin,
      keynote.github,
      keynote.website,
      keynote.youtube,
      keynote.x,
    ].filter(Boolean),
    performerIn: {
      "@type": "Event",
      name: siteMessages[locale].blocks.scheduleUi.keynote,
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
