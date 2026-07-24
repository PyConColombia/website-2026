"use client";

import {
  CalendarClockIcon,
  FilterIcon,
  MapPinIcon,
  MicIcon,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  type DaySchedule,
  getLocalizedScheduleEventTitle,
  getScheduleEventCategory,
  type ScheduleEvent,
  scheduleDays,
} from "@/assets/data/schedule";
import ScheduleRoomDirectionsDialog from "@/components/blocks/schedule/schedule-room-directions-dialog";
import SpeakerImage from "@/components/blocks/speakers/speaker-image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { getKeynoteHref, getLocalizedKeynote } from "@/lib/keynotes";
import {
  resolveSpeakersForScheduleEvent,
  resolveTalkForScheduleEvent,
  shouldShowScheduleSpeakers,
} from "@/lib/schedule-speakers";
import {
  getSponsorHref,
  isSponsorSpaceEvent,
  resolveSponsorForScheduleEvent,
} from "@/lib/schedule-sponsors";
import {
  getScheduleDateTime,
  isScheduleEventNow,
  parseScheduleNowOverride,
} from "@/lib/schedule-time";
import { resolveSpeakerImageUrl } from "@/lib/speaker-image-url";
import type { SponsorWithTier } from "@/lib/sponsors";
import { getTalkHref } from "@/lib/talks";
import { assetPath, cn } from "@/lib/utils";

type ScheduleCardProps = {
  scheduleData: Record<string, DaySchedule>;
};

type ScheduleTab = "all" | "talks" | "keynotes" | "workshops";

function parseHourStart(hour: string) {
  const match = hour.match(/^(\d{1,2}):(\d{2})/);
  if (!match) return 0;
  return Number.parseInt(match[1], 10) * 60 + Number.parseInt(match[2], 10);
}

function getCategoryLabel(
  category: ReturnType<typeof getScheduleEventCategory>,
  t: (key: string) => string,
) {
  switch (category) {
    case "keynote":
      return t("blocks.scheduleUi.keynote");
    case "workshop":
      return t("blocks.scheduleUi.workshop");
    case "talk":
      return t("blocks.scheduleUi.talk");
    default:
      return t("blocks.scheduleUi.other");
  }
}

function getCategoryColor(
  category: ReturnType<typeof getScheduleEventCategory>,
) {
  switch (category) {
    case "keynote":
      return "text-amber-600 dark:text-amber-400";
    case "workshop":
      return "text-violet-600 dark:text-violet-400";
    case "talk":
      return "text-green-600 dark:text-green-400";
    default:
      return "text-sky-600 dark:text-sky-400";
  }
}

function matchesTab(event: ScheduleEvent, tab: ScheduleTab) {
  const category = getScheduleEventCategory(event);
  if (tab === "all") return true;
  if (tab === "talks") return category === "talk";
  if (tab === "keynotes") return category === "keynote";
  return category === "workshop";
}

function groupEventsByHour(events: ScheduleEvent[]) {
  const groups: ScheduleEvent[][] = [];
  const hourToIndex = new Map<string, number>();

  for (const event of events) {
    const existing = hourToIndex.get(event.hour);
    if (existing !== undefined) {
      groups[existing].push(event);
    } else {
      hourToIndex.set(event.hour, groups.length);
      groups.push([event]);
    }
  }

  return groups;
}

type ScheduleDayDate = (typeof scheduleDays)[number]["date"];

type ScheduleEventCardProps = {
  event: ScheduleEvent;
  t: (key: string) => string;
  locale: "en" | "es";
  isNow: boolean;
  onRoomClick: (room: string) => void;
};

type ScheduleSpeakerRowProps = {
  speaker: {
    name: string;
    slug?: string;
    image?: string;
    href?: string;
  };
  useKeynoteImage?: boolean;
};

function ScheduleSpeakerRow({
  speaker,
  useKeynoteImage = false,
}: ScheduleSpeakerRowProps) {
  const imageUrl = resolveSpeakerImageUrl(speaker.image);
  const content = (
    <>
      {imageUrl ? (
        useKeynoteImage ? (
          <Image
            src={imageUrl}
            alt={speaker.name}
            width={40}
            height={40}
            sizes="40px"
            className="ring-background size-10 shrink-0 rounded-full object-cover object-top ring-2"
          />
        ) : (
          <SpeakerImage
            src={speaker.image}
            alt={speaker.name}
            width={40}
            height={40}
            sizes="40px"
            className="ring-background size-10 shrink-0 rounded-full object-cover object-top ring-2"
          />
        )
      ) : (
        <Avatar className="ring-background size-10 ring-2">
          <AvatarFallback className="text-xs">
            <MicIcon className="size-4" />
          </AvatarFallback>
        </Avatar>
      )}
      <p className="text-sm font-medium underline-offset-4 group-hover:underline">
        {speaker.name}
      </p>
    </>
  );

  if (speaker.href) {
    return (
      <Link
        href={speaker.href}
        className="group mx-auto flex w-fit items-center justify-center gap-2.5 rounded-md transition-colors hover:opacity-80"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="mx-auto flex w-fit items-center justify-center gap-2.5">
      {content}
    </div>
  );
}

function ScheduleSponsorRow({ sponsor }: { sponsor: SponsorWithTier }) {
  if (!sponsor.slug || !sponsor.logo) {
    return null;
  }

  return (
    <Link
      href={getSponsorHref(sponsor.slug)}
      className="group border-border/60 bg-muted/30 hover:bg-muted/50 mx-auto flex w-fit max-w-full items-center justify-center rounded-md border px-3 py-2 transition-colors"
      aria-label={sponsor.name}
    >
      <Image
        src={assetPath(sponsor.logo)}
        alt=""
        aria-hidden
        width={160}
        height={48}
        sizes="160px"
        className="h-8 w-auto max-w-32 object-contain sm:max-w-36"
      />
    </Link>
  );
}

function ScheduleEventCard({
  event,
  t,
  locale,
  isNow,
  onRoomClick,
}: ScheduleEventCardProps) {
  const category = getScheduleEventCategory(event);
  const sponsor = resolveSponsorForScheduleEvent(event);
  const keynote = event.keynoteSlug
    ? getLocalizedKeynote(event.keynoteSlug, locale)
    : undefined;
  const talk = resolveTalkForScheduleEvent(event, locale);
  const eventSpeakers = resolveSpeakersForScheduleEvent(event, locale);
  const speakersAreOnlySponsorBrand = (() => {
    if (!sponsor || !isSponsorSpaceEvent(event) || eventSpeakers.length === 0) {
      return false;
    }

    const sponsorName = sponsor.name
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();
    const sponsorSlug = (sponsor.slug ?? "").toLowerCase();

    return eventSpeakers.every((speaker) => {
      if (speaker.slug) return false;

      const name = speaker.name
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toLowerCase()
        .trim();

      return (
        name === sponsorName ||
        name === sponsorSlug ||
        sponsorName.includes(name) ||
        (sponsorSlug !== "" && name.includes(sponsorSlug))
      );
    });
  })();
  const showSpeakers =
    shouldShowScheduleSpeakers(event, eventSpeakers) &&
    !speakersAreOnlySponsorBrand;
  const keynoteHref = keynote ? getKeynoteHref(keynote.slug) : undefined;
  const talkHref = talk ? getTalkHref(talk.id) : undefined;
  const sessionHref = keynoteHref ?? talkHref;
  const showSessionLink = sessionHref !== undefined && category !== "other";
  const sessionLinkLabel = keynote
    ? t("blocks.scheduleUi.viewKeynote")
    : talk?.format === "workshop"
      ? t("blocks.scheduleUi.viewWorkshop")
      : t("blocks.talks.viewTalk");
  const eventTitle = getLocalizedScheduleEventTitle(event, locale);

  return (
    <Card
      className={cn(
        "relative h-full overflow-hidden transition-all",
        isNow &&
          "border-primary/70 bg-primary/10 ring-primary/20 shadow-md ring-2 dark:bg-primary/15",
      )}
    >
      {isNow ? (
        <div className="bg-primary text-primary-foreground absolute top-4 -right-8 z-20 w-28 rotate-45 py-1 text-center text-xs font-semibold tracking-wide uppercase shadow-sm">
          {t("blocks.scheduleUi.now")}
        </div>
      ) : null}
      <CardContent className="space-y-2.5 text-center">
        <div className="mb-1 flex flex-col items-center gap-2.5">
          <div className="flex w-full flex-col items-center">
            <Badge
              className={cn(
                "bg-card! mb-0.5 rounded-none px-0 py-px text-xs font-medium capitalize",
                getCategoryColor(category),
              )}
            >
              {getCategoryLabel(category, t)}
            </Badge>
            <h3 className="text-lg font-medium lg:text-xl">
              {showSessionLink ? (
                <Link
                  href={sessionHref}
                  className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  {eventTitle}
                </Link>
              ) : (
                eventTitle
              )}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <p className="text-muted-foreground text-sm text-nowrap">
            {event.hour}
          </p>
          {event.label && category !== "other" ? (
            <Badge variant="outline" className="text-xs">
              {event.label === "keynote"
                ? t("blocks.scheduleUi.keynote")
                : event.label}
            </Badge>
          ) : null}
          {event.language?.map((language) => (
            <Badge key={language} variant="secondary" className="text-xs">
              {language}
            </Badge>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onRoomClick(event.room)}
          className="text-muted-foreground hover:text-primary mx-auto flex items-center justify-center gap-2 text-sm underline-offset-4 transition-colors hover:underline"
          aria-label={`${t("blocks.scheduleUi.roomMap.openRoom")}: ${event.room}`}
        >
          <MapPinIcon className="size-4 shrink-0" />
          <span>{event.room}</span>
        </button>

        {showSpeakers ? (
          <div className="flex flex-col items-center gap-2">
            {eventSpeakers.map((speaker) => (
              <ScheduleSpeakerRow
                key={`${event.id}-${speaker.slug ?? speaker.name}`}
                speaker={speaker}
                useKeynoteImage={Boolean(event.keynoteSlug)}
              />
            ))}
            {showSessionLink ? (
              <Link
                href={sessionHref}
                className="text-primary w-fit text-sm font-medium underline-offset-4 hover:underline"
              >
                {sessionLinkLabel}
              </Link>
            ) : null}
          </div>
        ) : null}

        {sponsor ? <ScheduleSponsorRow sponsor={sponsor} /> : null}
      </CardContent>
    </Card>
  );
}

const ScheduleCard = ({ scheduleData }: ScheduleCardProps) => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const [scheduleNow, setScheduleNow] = useState<Date>();
  const [selectedDate, setSelectedDate] = useState<ScheduleDayDate>(
    scheduleDays[0].date,
  );
  const [activeTab, setActiveTab] = useState<ScheduleTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"time" | "name" | "default">("default");
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [roomDialogOpen, setRoomDialogOpen] = useState(false);
  const currentScheduleDate = scheduleNow
    ? getScheduleDateTime(scheduleNow).date
    : undefined;

  useEffect(() => {
    const queryOverride = new URLSearchParams(window.location.search).get(
      "scheduleNow",
    );
    const override = parseScheduleNowOverride(
      queryOverride ?? process.env.NEXT_PUBLIC_SCHEDULE_NOW,
    );

    if (override) {
      setScheduleNow(override);
      return;
    }

    const updateNow = () => setScheduleNow(new Date());
    updateNow();

    const interval = window.setInterval(updateNow, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!currentScheduleDate) {
      return;
    }

    const matchingDay = scheduleDays.find(
      (day) => day.date === currentScheduleDate,
    );

    if (matchingDay) {
      setSelectedDate(matchingDay.date);
    }
  }, [currentScheduleDate]);

  const selectedDay = scheduleDays.find((day) => day.date === selectedDate);

  const filteredEvents = useMemo(() => {
    const daySchedule = scheduleData[selectedDate] ?? { events: [] };
    let items = daySchedule.events.filter((event) =>
      matchesTab(event, activeTab),
    );

    const query = searchQuery.trim().toLowerCase();
    if (query) {
      items = items.filter((event) => {
        const title = getLocalizedScheduleEventTitle(event, locale);

        return (
          title.toLowerCase().includes(query) ||
          event.speaker.toLowerCase().includes(query) ||
          event.room.toLowerCase().includes(query) ||
          event.label?.toLowerCase().includes(query)
        );
      });
    }

    if (sortBy === "name") {
      items = [...items].sort((a, b) =>
        getLocalizedScheduleEventTitle(a, locale).localeCompare(
          getLocalizedScheduleEventTitle(b, locale),
        ),
      );
    } else {
      items = [...items].sort(
        (a, b) => parseHourStart(a.hour) - parseHourStart(b.hour),
      );
    }

    return items;
  }, [activeTab, locale, scheduleData, searchQuery, selectedDate, sortBy]);

  const groupedEvents = useMemo(
    () => groupEventsByHour(filteredEvents),
    [filteredEvents],
  );

  const getEventCountByType = (type: ScheduleTab) => {
    const daySchedule = scheduleData[selectedDate] ?? { events: [] };
    return daySchedule.events.filter((event) => matchesTab(event, type)).length;
  };

  return (
    <Card className="w-full gap-4">
      <CardHeader className="grid-rows-auto">
        <CardTitle className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-2xl font-semibold">
            <CalendarClockIcon className="size-7.5" strokeWidth={1.4} />
            {t("blocks.scheduleUi.title")}
          </div>
          <Badge variant="outline" className="text-sm font-normal">
            {t("blocks.scheduleUi.eventDates")}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted mb-4 w-full rounded-lg px-2 py-3">
          <div className="flex items-center justify-center">
            <h3 className="text-xl font-semibold">
              {t("blocks.scheduleUi.monthYear")}
            </h3>
          </div>
        </div>

        <div className="relative mb-4 px-2 py-3">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="mx-8">
              {scheduleDays.map((day) => (
                <CarouselItem key={day.date} className="basis-1/3 pl-2.5">
                  <label
                    className={cn(
                      "flex w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-md p-2 transition-colors",
                      selectedDate === day.date
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted",
                    )}
                  >
                    <input
                      type="radio"
                      name="selected-date"
                      value={day.date}
                      checked={selectedDate === day.date}
                      onChange={() => setSelectedDate(day.date)}
                      className="sr-only"
                    />
                    <span
                      className={cn(
                        "text-base",
                        selectedDate === day.date
                          ? "text-primary-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {day.dayName}
                    </span>
                    <span className="text-sm font-semibold">
                      {day.dayNumber.toString().padStart(2, "0")}
                    </span>
                  </label>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="bg-card absolute inset-y-0 left-0 w-9">
              <CarouselPrevious className="absolute left-1 rounded-md" />
            </div>
            <div className="bg-card absolute inset-y-0 -right-1 w-9">
              <CarouselNext className="absolute right-1 rounded-md" />
            </div>
          </Carousel>
        </div>

        {selectedDay ? (
          <div className="space-y-1 text-center">
            <p className="text-lg font-medium">
              {locale === "es"
                ? selectedDay.dayTitleEs
                : selectedDay.dayTitleEn}
            </p>
            <p className="text-muted-foreground text-sm">
              {getEventCountByType("all")} {t("blocks.scheduleUi.timeBlocks")}
            </p>
          </div>
        ) : null}

        <div className="flex gap-3">
          <InputGroup className="input-lg grow">
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput
              placeholder={t("blocks.scheduleUi.searchPlaceholder")}
              value={searchQuery}
              className="input-lg"
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </InputGroup>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "size-10",
                  sortBy !== "default" && "text-primary",
                )}
              >
                <FilterIcon className="text-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 p-3" align="end">
              <div className="space-y-1">
                <h4 className="mb-2 leading-none font-medium">
                  {t("blocks.scheduleUi.sortBy")}
                </h4>
                {(["default", "time", "name"] as const).map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={cn(
                      "hover:bg-muted w-full rounded-sm px-2 py-1.5 text-left text-sm transition-colors",
                      sortBy === option && "bg-muted font-medium",
                    )}
                  >
                    {t(`blocks.scheduleUi.sort.${option}`)}
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as ScheduleTab)}
          className="gap-4"
        >
          <TabsList variant="line" className="w-full border-b px-0">
            <TabsTrigger value="all">
              {t("blocks.scheduleUi.tabs.all")} ({getEventCountByType("all")})
            </TabsTrigger>
            <TabsTrigger value="talks">
              {t("blocks.scheduleUi.tabs.talks")} (
              {getEventCountByType("talks")})
            </TabsTrigger>
            <TabsTrigger value="keynotes">
              {t("blocks.scheduleUi.tabs.keynotes")} (
              {getEventCountByType("keynotes")})
            </TabsTrigger>
            <TabsTrigger value="workshops">
              {t("blocks.scheduleUi.tabs.workshops")} (
              {getEventCountByType("workshops")})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="space-y-4">
              {filteredEvents.length === 0 ? (
                <div className="text-muted-foreground py-8 text-center text-sm">
                  {t("blocks.scheduleUi.empty")}
                </div>
              ) : (
                groupedEvents.map((group) => (
                  <div
                    key={group.map((event) => event.id).join("-")}
                    className={cn(
                      "gap-4",
                      group.length > 1 &&
                        "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
                    )}
                  >
                    {group.map((event) => (
                      <ScheduleEventCard
                        key={event.id}
                        event={event}
                        t={t}
                        locale={locale}
                        isNow={
                          scheduleNow
                            ? isScheduleEventNow(event, scheduleNow)
                            : false
                        }
                        onRoomClick={(room) => {
                          setSelectedRoom(room);
                          setRoomDialogOpen(true);
                        }}
                      />
                    ))}
                  </div>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        <ScheduleRoomDirectionsDialog
          room={selectedRoom}
          open={roomDialogOpen}
          onOpenChange={(open) => {
            setRoomDialogOpen(open);
            if (!open) {
              setSelectedRoom(null);
            }
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
