import { type Keynote, keynoteList } from "@/assets/data/keynotes";
import {
  type KeynoteContent,
  keynoteContentByLocale,
} from "@/assets/data/keynotes-content.locale";
import {
  type ScheduleEvent,
  scheduleDays,
  scheduleEvents,
} from "@/assets/data/schedule";
import type { SiteLocale } from "@/lib/site-messages";

export type LocalizedKeynote = Keynote & KeynoteContent;

export function getAllKeynoteSlugs(): string[] {
  return keynoteList.map((keynote) => keynote.slug);
}

export function isKeynoteSlug(slug: string): boolean {
  return keynoteList.some((keynote) => keynote.slug === slug);
}

export function getKeynoteBySlug(slug: string): Keynote | undefined {
  return keynoteList.find((keynote) => keynote.slug === slug);
}

export function getKeynoteContent(
  slug: string,
  locale: SiteLocale,
): KeynoteContent | undefined {
  return keynoteContentByLocale[locale][slug];
}

export function getLocalizedKeynote(
  slug: string,
  locale: SiteLocale,
): LocalizedKeynote | undefined {
  const keynote = getKeynoteBySlug(slug);
  const content = getKeynoteContent(slug, locale);

  if (!keynote || !content) {
    return undefined;
  }

  return { ...keynote, ...content };
}

export function getAllLocalizedKeynotes(
  locale: SiteLocale,
): LocalizedKeynote[] {
  return keynoteList
    .map((keynote) => getLocalizedKeynote(keynote.slug, locale))
    .filter((keynote): keynote is LocalizedKeynote => keynote !== undefined);
}

export function getKeynoteHref(slug: string): string {
  return `/keynotes/${slug}`;
}

export function getScheduleEventsForKeynote(slug: string): ScheduleEvent[] {
  return scheduleEvents.filter((event) => event.keynoteSlug === slug);
}

export function formatKeynoteScheduleSlot(
  event: ScheduleEvent,
  locale: SiteLocale,
): string {
  const day = scheduleDays.find((entry) => entry.date === event.date);

  if (!day) {
    return `${event.hour} · ${event.room}`;
  }

  const dayLabel = locale === "es" ? day.labelEs : day.labelEn;

  return `${dayLabel} · ${event.hour} · ${event.room}`;
}
