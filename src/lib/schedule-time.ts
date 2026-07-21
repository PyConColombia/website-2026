import type { ScheduleEvent } from "@/assets/data/schedule";

const SCHEDULE_TIME_ZONE = "America/Bogota";

type ScheduleDateTime = {
  date: string;
  minutes: number;
};

function getPart(
  parts: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes,
) {
  return parts.find((part) => part.type === type)?.value ?? "";
}

export function getScheduleDateTime(now: Date): ScheduleDateTime {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: SCHEDULE_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const hour = Number.parseInt(getPart(parts, "hour"), 10);
  const minute = Number.parseInt(getPart(parts, "minute"), 10);

  return {
    date: `${getPart(parts, "year")}-${getPart(parts, "month")}-${getPart(parts, "day")}`,
    minutes: hour * 60 + minute,
  };
}

function parseHourRange(hour: string) {
  const match = hour.match(/^\s*(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})\s*$/);

  if (!match) {
    return undefined;
  }

  return {
    start: Number.parseInt(match[1], 10) * 60 + Number.parseInt(match[2], 10),
    end: Number.parseInt(match[3], 10) * 60 + Number.parseInt(match[4], 10),
  };
}

export function isScheduleEventNow(event: ScheduleEvent, now: Date) {
  const range = parseHourRange(event.hour);

  if (!range) {
    return false;
  }

  const scheduleNow = getScheduleDateTime(now);

  return (
    event.date === scheduleNow.date &&
    scheduleNow.minutes >= range.start &&
    scheduleNow.minutes < range.end
  );
}

export function parseScheduleNowOverride(value?: string | null) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return undefined;
  }

  const date = new Date(
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?$/.test(trimmed)
      ? `${trimmed}-05:00`
      : trimmed,
  );

  return Number.isNaN(date.getTime()) ? undefined : date;
}
