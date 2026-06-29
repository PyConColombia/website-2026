import type { Metadata } from "next";

import type { PressCoverageItem } from "@/assets/data/press-coverage";
import { getMainEventId } from "@/lib/event-jsonld";
import type { SiteLocale } from "@/lib/site-messages";
import { siteMessages } from "@/lib/site-messages";
import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_KEYWORDS,
  SITE_NAME,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/site-seo";

const DEFAULT_OG_IMAGE = "/images/cfp.jpg";

const PRESS_KEYWORDS_EN = [
  "PyCon Colombia press",
  "PyCon Colombia media coverage",
  "Python conference news Medellín",
  "PyCon Colombia 10th anniversary",
  "Python Colombia news",
  "tech conference Colombia",
];

const PRESS_KEYWORDS_ES = [
  "cobertura PyCon Colombia",
  "prensa PyCon Colombia",
  "noticias PyCon Colombia 2026",
  "conferencia Python Medellín",
  "décima edición PyCon Colombia",
  "medios Python Colombia",
];

export function getPressShareImageUrl(items: PressCoverageItem[]): string {
  const featured = items[0];

  if (featured?.image) {
    return absoluteAssetUrl(featured.image);
  }

  return absoluteAssetUrl(DEFAULT_OG_IMAGE);
}

export function buildPressPageMetadata(
  locale: SiteLocale,
  items: PressCoverageItem[],
): Metadata {
  const meta = siteMessages[locale].pageMeta.press;
  const canonical = `${getSiteUrl()}/press`;
  const ogTitle = `${meta.title} | ${SITE_NAME}`;
  const imageUrl = getPressShareImageUrl(items);
  const imageAlt = meta.ogImageAlt;
  const keywords = [
    ...SITE_KEYWORDS,
    ...(locale === "es" ? PRESS_KEYWORDS_ES : PRESS_KEYWORDS_EN),
  ];

  return {
    title: meta.title,
    description: meta.description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description: meta.description,
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
      description: meta.description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
  };
}

function pressListItemJsonLd(
  item: PressCoverageItem,
  position: number,
  locale: SiteLocale,
): Record<string, unknown> {
  const headline = item.title[locale];
  const description = item.description[locale];

  if (item.type === "poster") {
    return {
      "@type": "ListItem",
      position,
      url: item.url,
      name: headline,
      item: {
        "@type": "ImageObject",
        name: headline,
        description,
        url: item.url,
        contentUrl: absoluteAssetUrl(item.image),
        datePublished: item.publishedAt,
      },
    };
  }

  return {
    "@type": "ListItem",
    position,
    url: item.url,
    name: headline,
    item: {
      "@type": "NewsArticle",
      headline,
      description,
      url: item.url,
      datePublished: item.publishedAt,
      image: [absoluteAssetUrl(item.image)],
      publisher: {
        "@type": "Organization",
        name: item.outlet,
      },
      mainEntityOfPage: item.url,
    },
  };
}

export function buildPressPageJsonLd(
  locale: SiteLocale,
  items: PressCoverageItem[],
): Record<string, unknown> {
  const meta = siteMessages[locale].pageMeta.press;
  const pageUrl = `${getSiteUrl()}/press`;
  const shareImage = getPressShareImageUrl(items);
  const homeLabel = siteMessages[locale].nav.home;

  return {
    "@context": "https://schema.org",
    "@graph": [
      websiteJsonLd(),
      webPageJsonLd({
        name: meta.jsonLdName,
        description: meta.description,
        url: pageUrl,
        image: shareImage,
      }),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${pageUrl}#collection`,
        name: meta.jsonLdName,
        description: meta.description,
        url: pageUrl,
        inLanguage: locale === "es" ? "es-CO" : "en-US",
        isPartOf: { "@id": `${getSiteUrl()}#website` },
        about: {
          "@id": getMainEventId(),
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: shareImage,
        },
        mainEntity: {
          "@type": "ItemList",
          name: meta.itemListName,
          numberOfItems: items.length,
          itemListElement: items.map((item, index) =>
            pressListItemJsonLd(item, index + 1, locale),
          ),
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: homeLabel,
            item: `${getSiteUrl()}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: meta.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
