import { assetPath } from "@/lib/utils";

/** Production canonical origin (no trailing slash). */
export const PRODUCTION_SITE_URL = "https://2026.pycon.co";

/** Canonical origin for metadata and JSON-LD (no trailing slash). */
export function getSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_APP_URL ??
    (process.env.NODE_ENV === "production"
      ? PRODUCTION_SITE_URL
      : "http://localhost:3000");
  return url.replace(/\/$/, "");
}

export const SITE_NAME = "PyCon Colombia 2026";

export const SITE_ORGANIZER = {
  name: "Python Colombia",
  url: "https://pycon.co",
} as const;

/** Primary meta description (title tags, OG, Twitter). */
export const SITE_DESCRIPTION =
  "Colombia's largest Python conference—July 24–26, 2026 in Medellín at Universidad EAFIT. Keynotes, talks, workshops, and the Python community across Latin America.";

/** Richer copy for WebSite structured data. */
export const SITE_DESCRIPTION_LONG =
  "PyCon Colombia is the country's flagship Python conference. Meet us at Universidad EAFIT in Medellín for three days of keynotes, technical sessions, tutorials, sprints, and networking with the Python ecosystem in Latin America and beyond.";

export const SITE_KEYWORDS = [
  "PyCon Colombia",
  "PyCon CO",
  "Python Colombia",
  "Python conference",
  "Colombia tech conference",
  "Medellín",
  "Universidad EAFIT",
  "Antioquia",
  "Latin America Python",
  "PyCon 2026",
  "July 2026",
  "Python workshops",
  "open source",
  "CPython",
  "software development",
];

/** Absolute URL for public files (respects BASEPATH when set). */
export function absoluteAssetUrl(pathFromPublic: string): string {
  const resolved = assetPath(pathFromPublic);
  if (/^https?:\/\//.test(resolved)) {
    return resolved;
  }
  const path = resolved.startsWith("/") ? resolved : `/${resolved}`;
  return `${getSiteUrl()}${path}`;
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}#website`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION_LONG,
    url: `${getSiteUrl()}/`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: SITE_ORGANIZER.name,
      url: SITE_ORGANIZER.url,
    },
  };
}

export function webPageJsonLd(args: {
  name: string;
  description?: string;
  url: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${args.url}#webpage`,
    name: args.name,
    ...(args.description ? { description: args.description } : {}),
    url: args.url,
    ...(args.image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: args.image,
          },
        }
      : {}),
    isPartOf: { "@id": `${getSiteUrl()}#website` },
    potentialAction: {
      "@type": "ReadAction",
      target: [args.url],
    },
  };
}
