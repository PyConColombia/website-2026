"use client";

import {
  CalendarClockIcon,
  FilterIcon,
  MapPinIcon,
  MicIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  type DaySchedule,
  getScheduleEventCategory,
  type ScheduleEvent,
  scheduleDays,
} from "@/assets/data/schedule";
import { speakers } from "@/assets/data/speakers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { resolveSpeakerImageUrl } from "@/lib/speaker-image-url";
import { cn } from "@/lib/utils";

type ScheduleCardProps = {
  scheduleData: Record<string, DaySchedule>;
};

type ScheduleTab = "all" | "talks" | "keynotes" | "workshops";

const speakerByName = new Map(
  speakers.map((speaker) => [speaker.name.toLowerCase(), speaker]),
);

function getSpeakerForEvent(event: ScheduleEvent) {
  const direct = speakerByName.get(event.speaker.toLowerCase());
  if (direct) return direct;

  const firstSpeaker = event.speaker.split("/")[0]?.trim().toLowerCase();
  return firstSpeaker ? speakerByName.get(firstSpeaker) : undefined;
}

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
};

function ScheduleEventCard({ event, t }: ScheduleEventCardProps) {
  const category = getScheduleEventCategory(event);
  const speaker = getSpeakerForEvent(event);
  const speakerImage = resolveSpeakerImageUrl(speaker?.image);

  return (
    <Card className="h-full transition-all">
      <CardContent className="space-y-2.5">
        <div className="mb-1 flex items-start justify-between gap-2.5 max-sm:flex-col">
          <div>
            <Badge
              className={cn(
                "bg-card! mb-0.5 rounded-none px-0 py-px text-xs font-medium capitalize",
                getCategoryColor(category),
              )}
            >
              {getCategoryLabel(category, t)}
            </Badge>
            <h3 className="text-lg font-medium lg:text-xl">
              {event.displayTitle}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
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

        <div className="text-muted-foreground flex items-start gap-2 text-sm">
          <MapPinIcon className="mt-0.5 size-4 shrink-0" />
          <span>{event.room}</span>
        </div>

        {speaker ? (
          <Link
            href={`/speakers/${speaker.slug}`}
            className="flex w-fit items-center gap-2.5 rounded-md transition-colors hover:opacity-80"
          >
            <Avatar className="ring-background size-10 ring-2">
              {speakerImage ? (
                <AvatarImage src={speakerImage} alt={event.speaker} />
              ) : null}
              <AvatarFallback className="text-xs">
                <MicIcon className="size-4" />
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium underline-offset-4 hover:underline">
              {event.speaker}
            </p>
          </Link>
        ) : (
          <div className="flex items-center gap-2.5">
            <Avatar className="ring-background size-10 ring-2">
              {speakerImage ? (
                <AvatarImage src={speakerImage} alt={event.speaker} />
              ) : null}
              <AvatarFallback className="text-xs">
                <MicIcon className="size-4" />
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium">{event.speaker}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

const ScheduleCard = ({ scheduleData }: ScheduleCardProps) => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const [selectedDate, setSelectedDate] = useState<ScheduleDayDate>(
    scheduleDays[0].date,
  );
  const [activeTab, setActiveTab] = useState<ScheduleTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"time" | "name" | "default">("default");

  const selectedDay = scheduleDays.find((day) => day.date === selectedDate);

  const filteredEvents = useMemo(() => {
    const daySchedule = scheduleData[selectedDate] ?? { events: [] };
    let items = daySchedule.events.filter((event) =>
      matchesTab(event, activeTab),
    );

    const query = searchQuery.trim().toLowerCase();
    if (query) {
      items = items.filter(
        (event) =>
          event.displayTitle.toLowerCase().includes(query) ||
          event.speaker.toLowerCase().includes(query) ||
          event.room.toLowerCase().includes(query) ||
          event.label?.toLowerCase().includes(query),
      );
    }

    if (sortBy === "time") {
      items = [...items].sort(
        (a, b) => parseHourStart(a.hour) - parseHourStart(b.hour),
      );
    } else if (sortBy === "name") {
      items = [...items].sort((a, b) =>
        a.displayTitle.localeCompare(b.displayTitle),
      );
    }

    return items;
  }, [activeTab, scheduleData, searchQuery, selectedDate, sortBy]);

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
                      <ScheduleEventCard key={event.id} event={event} t={t} />
                    ))}
                  </div>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
