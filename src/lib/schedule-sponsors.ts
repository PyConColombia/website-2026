import type { ScheduleEvent } from "@/assets/data/schedule";
import {
  getAllSponsors,
  getSponsorBySlug,
  type SponsorWithTier,
} from "@/lib/sponsors";

function normalizeSponsorKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

const sponsorsByKey = new Map<string, SponsorWithTier>();

for (const sponsor of getAllSponsors()) {
  if (!sponsor.slug) {
    continue;
  }

  sponsorsByKey.set(normalizeSponsorKey(sponsor.slug), sponsor);
  sponsorsByKey.set(normalizeSponsorKey(sponsor.name), sponsor);

  const firstToken = sponsor.name.split(/\s+/)[0];

  if (firstToken) {
    sponsorsByKey.set(normalizeSponsorKey(firstToken), sponsor);
  }

  if (sponsor.name.includes("EAFIT")) {
    sponsorsByKey.set("eafit", sponsor);
  }
}

function resolveSponsorByKey(value: string): SponsorWithTier | undefined {
  return sponsorsByKey.get(normalizeSponsorKey(value));
}

export function getSponsorHref(slug: string): string {
  return `/sponsors/${slug}`;
}

export function resolveSponsorForScheduleEvent(
  event: ScheduleEvent,
): SponsorWithTier | undefined {
  if (
    event.label === "Sponsor Space" ||
    event.title.startsWith("Sponsor Space:")
  ) {
    const fromTitle = event.title.replace(/^Sponsor Space:\s*/i, "").trim();

    return resolveSponsorByKey(fromTitle) ?? resolveSponsorByKey(event.speaker);
  }

  if (event.label?.endsWith(" Sponsor")) {
    const sponsorName = event.label.replace(/\s+Sponsor$/i, "").trim();

    return resolveSponsorByKey(sponsorName);
  }

  if (event.label === "EAFIT") {
    return getSponsorBySlug("eafit");
  }

  return undefined;
}

export function isSponsorSpaceEvent(event: ScheduleEvent): boolean {
  return (
    event.label === "Sponsor Space" || event.title.startsWith("Sponsor Space:")
  );
}
