import { type ScheduleEvent, scheduleEvents } from "@/assets/data/schedule";
import type { LocalizedKeynote } from "@/lib/keynotes";
import { getScheduleEventsForKeynote } from "@/lib/keynotes";
import type { SiteLocale } from "@/lib/site-messages";
import {
  absoluteAssetUrl,
  getSiteUrl,
  SITE_DESCRIPTION_LONG,
  SITE_NAME,
  SITE_ORGANIZER,
} from "@/lib/site-seo";
import { getSpeakerProfileImageUrl } from "@/lib/speaker-seo";
import { getSpeakerProfileHref, type LocalizedSpeaker } from "@/lib/speakers";
import { getTalkSpeakers, type Talk } from "@/lib/talks";

export const EVENT_START_DATE = "2026-07-24";
export const EVENT_END_DATE = "2026-07-26";
export const EVENT_TIMEZONE = "-05:00";
export const EVENT_TICKETS_URL =
  "https://www.eventbrite.co/e/pycon-colombia-2026-tickets-1986172567616";
export const EVENT_TICKETS_PRICE = "198.19";
export const EVENT_TICKETS_CURRENCY = "USD";
export const EVENT_TICKETS_VALID_FROM = "2025-03-01";
export const EVENT_DEFAULT_IMAGE = "/images/cfp.jpg";

export function getMainEventId(): string {
  return `${getSiteUrl()}/#event`;
}

function padTime(time: string): string {
  const [hours, minutes] = time.split(":").map((part) => part.trim());
  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}

export function scheduleSlotToIsoRange(
  date: string,
  hour: string,
): { startDate: string; endDate: string } {
  const [startRaw, endRaw] = hour.split("-").map((part) => part.trim());

  return {
    startDate: `${date}T${padTime(startRaw)}:00${EVENT_TIMEZONE}`,
    endDate: `${date}T${padTime(endRaw)}:00${EVENT_TIMEZONE}`,
  };
}

export function findScheduleSlotForTalk(
  talk: Talk,
  locale: SiteLocale = "en",
): ScheduleEvent | undefined {
  const speakerNames = getTalkSpeakers(talk, locale).map(
    (speaker) => speaker.name,
  );

  return scheduleEvents.find(
    (event) =>
      (event.type === "talk" ||
        event.type === "session" ||
        event.type === "workshop") &&
      (event.displayTitle === talk.talkTitle ||
        event.title.includes(talk.talkTitle) ||
        speakerNames.some((name) => event.speaker === name)),
  );
}

export function buildEventLocationJsonLd(
  room?: string,
): Record<string, unknown> {
  return {
    "@type": "Place",
    name: room ?? "Universidad EAFIT",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
  };
}

export function buildEventOrganizerJsonLd(): Record<string, unknown> {
  return {
    "@type": "Organization",
    name: SITE_ORGANIZER.name,
    url: SITE_ORGANIZER.url,
  };
}

export function buildEventTicketsOfferJsonLd(): Record<string, unknown> {
  return {
    "@type": "Offer",
    url: EVENT_TICKETS_URL,
    price: EVENT_TICKETS_PRICE,
    priceCurrency: EVENT_TICKETS_CURRENCY,
    validFrom: EVENT_TICKETS_VALID_FROM,
    availability: "https://schema.org/InStock",
  };
}

export function buildPerformerJsonLd(
  speakers: LocalizedSpeaker[],
): Record<string, unknown>[] {
  return speakers.map((speaker) => {
    const imageUrl = getSpeakerProfileImageUrl(speaker.slug);

    return {
      "@type": "Person",
      name: speaker.name,
      url: `${getSiteUrl()}${getSpeakerProfileHref(speaker.slug)}`,
      jobTitle: speaker.title,
      ...(imageUrl ? { image: imageUrl } : {}),
    };
  });
}

export function buildMainConferenceEventJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": getMainEventId(),
    name: SITE_NAME,
    description: SITE_DESCRIPTION_LONG,
    url: `${getSiteUrl()}/`,
    image: [absoluteAssetUrl(EVENT_DEFAULT_IMAGE)],
    startDate: EVENT_START_DATE,
    endDate: EVENT_END_DATE,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: buildEventLocationJsonLd(),
    organizer: buildEventOrganizerJsonLd(),
    offers: buildEventTicketsOfferJsonLd(),
  };
}

function buildEventDatesFromScheduleSlot(
  scheduleSlot: ScheduleEvent | undefined,
): { startDate: string; endDate: string } {
  if (scheduleSlot) {
    return scheduleSlotToIsoRange(scheduleSlot.date, scheduleSlot.hour);
  }

  return {
    startDate: EVENT_START_DATE,
    endDate: EVENT_END_DATE,
  };
}

export function buildTalkEventJsonLd(args: {
  talk: Talk;
  talkUrl: string;
  description: string;
  imageUrl: string;
  locale?: SiteLocale;
}): Record<string, unknown> {
  const { talk, talkUrl, description, imageUrl, locale = "en" } = args;
  const speakers = getTalkSpeakers(talk, locale);
  const scheduleSlot = findScheduleSlotForTalk(talk, locale);
  const scheduleDates = buildEventDatesFromScheduleSlot(scheduleSlot);

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${talkUrl}#event`,
    name: talk.talkTitle,
    description,
    url: talkUrl,
    image: imageUrl,
    startDate: scheduleDates.startDate,
    endDate: scheduleDates.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    performer: buildPerformerJsonLd(speakers),
    location: buildEventLocationJsonLd(scheduleSlot?.room),
    organizer: buildEventOrganizerJsonLd(),
    offers: buildEventTicketsOfferJsonLd(),
    isPartOf: {
      "@id": getMainEventId(),
    },
  };
}

export function buildKeynoteEventJsonLd(args: {
  keynote: LocalizedKeynote;
  keynoteUrl: string;
  description: string;
  imageUrl: string;
}): Record<string, unknown> {
  const { keynote, keynoteUrl, description, imageUrl } = args;
  const scheduleSlot = getScheduleEventsForKeynote(keynote.slug)[0];
  const scheduleDates = buildEventDatesFromScheduleSlot(scheduleSlot);

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${keynoteUrl}#event`,
    name: `${keynote.name} — Keynote`,
    description,
    url: keynoteUrl,
    image: imageUrl,
    startDate: scheduleDates.startDate,
    endDate: scheduleDates.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    performer: [
      {
        "@type": "Person",
        name: keynote.name,
        url: keynoteUrl,
        jobTitle: keynote.role,
        image: imageUrl,
      },
    ],
    location: buildEventLocationJsonLd(scheduleSlot?.room),
    organizer: buildEventOrganizerJsonLd(),
    offers: buildEventTicketsOfferJsonLd(),
    isPartOf: {
      "@id": getMainEventId(),
    },
  };
}
