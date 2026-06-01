import {
  type Sponsor,
  type SponsorTier,
  type SponsorTierKey,
  sponsorTiers,
} from "@/assets/data/sponsors";
import {
  type SponsorDetailContent,
  sponsorDetailsByLocale,
} from "@/assets/data/sponsors-detail.locale";
import type { SiteLocale } from "@/lib/site-messages";
import { siteMessages } from "@/lib/site-messages";

export type SponsorWithTier = Sponsor & {
  tierKey: SponsorTierKey;
  tier: SponsorTier;
};

export type SponsorProfile = SponsorWithTier & {
  detail?: SponsorDetailContent;
};

export function getAllSponsors(): SponsorWithTier[] {
  return sponsorTiers.flatMap((tier) =>
    tier.sponsors.map((sponsor) => ({
      ...sponsor,
      tierKey: tier.tierKey,
      tier,
    })),
  );
}

export function getAllSponsorSlugs(): string[] {
  return getAllSponsors()
    .map((sponsor) => sponsor.slug)
    .filter((slug): slug is string => Boolean(slug));
}

export function getSponsorBySlug(slug: string): SponsorWithTier | undefined {
  return getAllSponsors().find((sponsor) => sponsor.slug === slug);
}

export function getSponsorDetail(
  slug: string,
  locale: SiteLocale,
): SponsorDetailContent | undefined {
  return sponsorDetailsByLocale[locale][slug];
}

export function getSponsorProfile(
  slug: string,
  locale: SiteLocale,
): SponsorProfile | undefined {
  const sponsor = getSponsorBySlug(slug);

  if (!sponsor) {
    return undefined;
  }

  const detail = getSponsorDetail(slug, locale);

  return detail ? { ...sponsor, detail } : sponsor;
}

export function getSponsorPageDescription(
  slug: string,
  locale: SiteLocale,
  sponsorName: string,
): string {
  const detail = getSponsorDetail(slug, locale);
  const paragraph = detail?.paragraphs[0];

  if (paragraph) {
    return paragraph;
  }

  if (detail?.tagline) {
    return detail.tagline;
  }

  const sponsor = getSponsorBySlug(slug);

  if (sponsor) {
    const tierTitle =
      siteMessages[locale].blocks.sponsors.tiers[sponsor.tierKey].title;

    return locale === "es"
      ? `${sponsorName}, patrocinador ${tierTitle} de PyCon Colombia 2026. Medellín, 24–26 de julio.`
      : `${sponsorName}, ${tierTitle} sponsor of PyCon Colombia 2026. Medellín, July 24–26.`;
  }

  return `${sponsorName} — PyCon Colombia 2026`;
}
