import type { Metadata } from "next";

import { getSponsorGalleryImages } from "@/assets/data/sponsor-gallery";
import type { SiteLocale } from "@/lib/site-messages";
import { siteMessages } from "@/lib/site-messages";
import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_KEYWORDS,
  SITE_NAME,
} from "@/lib/site-seo";
import { getSponsorBySlug, getSponsorPageDescription } from "@/lib/sponsors";

const META_DESCRIPTION_MAX = 200;
const DEFAULT_OG_IMAGE = "/images/cfp.jpg";

function truncateMetaDescription(text: string): string {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= META_DESCRIPTION_MAX) {
    return normalized;
  }

  return `${normalized.slice(0, META_DESCRIPTION_MAX - 1).trimEnd()}…`;
}

/** Image used for Open Graph / Twitter cards (gallery photo, raster logo, or site default). */
export function getSponsorShareImageUrl(slug: string): string {
  const gallery = getSponsorGalleryImages(slug);

  if (gallery[0]?.src) {
    return absoluteAssetUrl(gallery[0].src);
  }

  const sponsor = getSponsorBySlug(slug);

  if (sponsor?.logo && /\.(png|jpe?g|webp|gif)$/i.test(sponsor.logo)) {
    return absoluteAssetUrl(sponsor.logo);
  }

  return absoluteAssetUrl(DEFAULT_OG_IMAGE);
}

export function buildSponsorPageMetadata(
  slug: string,
  locale: SiteLocale,
): Metadata {
  const sponsor = getSponsorBySlug(slug);

  if (!sponsor) {
    return {};
  }

  const meta = siteMessages[locale].pageMeta.sponsorDetail;
  const description = truncateMetaDescription(
    getSponsorPageDescription(slug, locale, sponsor.name),
  );
  const canonical = `${getSiteUrl()}/sponsors/${slug}`;
  const ogTitle = `${sponsor.name} — PyCon Colombia 2026`;
  const imageUrl = getSponsorShareImageUrl(slug);
  const imageAlt = `${sponsor.name} — PyCon Colombia 2026 sponsor`;

  return {
    title: `${sponsor.name} — ${meta.titleSuffix}`,
    description,
    keywords: [
      ...SITE_KEYWORDS,
      sponsor.name,
      `${sponsor.name} PyCon`,
      "PyCon sponsors",
      "Python Colombia",
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      type: "website",
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
