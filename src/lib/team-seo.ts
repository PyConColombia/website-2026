import type { Metadata } from "next";

import type { SiteLocale } from "@/lib/site-messages";
import { siteMessages } from "@/lib/site-messages";
import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_KEYWORDS,
  SITE_NAME,
} from "@/lib/site-seo";
import { getTeamMemberBySlug } from "@/lib/team";

const DEFAULT_OG_IMAGE = "/images/cfp.jpg";

export function getTeamMemberShareImageUrl(slug: string): string {
  const member = getTeamMemberBySlug(slug);

  if (member?.image) {
    return absoluteAssetUrl(member.image);
  }

  return absoluteAssetUrl(DEFAULT_OG_IMAGE);
}

export function buildTeamMemberPageMetadata(
  slug: string,
  locale: SiteLocale,
): Metadata {
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return {};
  }

  const messages = siteMessages[locale];
  const description =
    member.kind === "volunteer"
      ? `${member.name} — ${messages.blocks.team.volunteers.title}, PyCon Colombia 2026.`
      : `${member.name} — ${messages.pageMeta.team.description}`;

  const canonical = `${getSiteUrl()}/team/${slug}`;
  const ogTitle = `${member.name} — ${messages.pageMeta.team.title} | PyCon Colombia 2026`;
  const imageUrl = getTeamMemberShareImageUrl(slug);
  const imageAlt = `${member.name} — PyCon Colombia 2026`;

  return {
    title: `${member.name} — ${messages.pageMeta.team.title}`,
    description,
    keywords: [
      ...SITE_KEYWORDS,
      member.name,
      messages.pageMeta.team.title,
      "PyCon organizers",
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
      images: [imageUrl],
    },
  };
}

export function buildTeamMemberJsonLd(slug: string, url: string) {
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return undefined;
  }

  return {
    "@type": "Person",
    name: member.name,
    url,
    image: member.image ? absoluteAssetUrl(member.image) : undefined,
    jobTitle: member.role,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    sameAs: [member.linkedin, member.github, member.x].filter(Boolean),
  };
}
