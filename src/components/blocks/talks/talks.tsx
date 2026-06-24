"use client";

import { ArrowRightIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import type { SpeakerTrack } from "@/assets/data/speakers";
import SpeakerTrackBadge from "@/components/blocks/speakers/speaker-track-badge";
import TalkLanguageBadge from "@/components/blocks/talks/talk-language-badge";
import TalkLevelBadge from "@/components/blocks/talks/talk-level-badge";
import TalkSpeakersList from "@/components/blocks/talks/talk-speakers-list";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MotionPreset } from "@/components/ui/motion-preset";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import type { SiteLocale } from "@/lib/site-messages";
import {
  getActiveSpeakerTracks,
  getSpeakerTrackHref,
  type SpeakerTrackFilter,
  speakerTrackStyles,
} from "@/lib/speaker-tracks";
import {
  type TalkLanguage,
  type TalkLanguageFilter,
  talkLanguageOrder,
} from "@/lib/talk-languages";
import {
  type TalkLevel,
  type TalkLevelFilter,
  talkLevelOrder,
} from "@/lib/talk-levels";
import {
  getAllTalks,
  getTalkCountsByLanguage,
  getTalkCountsByLevel,
  getTalkCountsByTrack,
  getTalkHref,
  getTalkSpeakers,
  type Talk,
} from "@/lib/talks";
import { cn } from "@/lib/utils";

type TalkCardProps = {
  talk: Talk;
};

const talkGridClassName =
  "mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6";

const TalkCard = ({ talk }: TalkCardProps) => {
  const { t } = useTranslations();

  return (
    <Card className="bg-card group relative h-full w-full gap-0 overflow-hidden rounded-[14px] border border-border/60 py-0 shadow-xs transition-colors hover:border-primary/40">
      <Link
        href={getTalkHref(talk.id)}
        className="absolute inset-0 z-0 rounded-[inherit]"
        aria-label={talk.talkTitle}
      />
      <CardContent className="pointer-events-none relative z-10 space-y-4 p-5">
        <div className="flex flex-wrap gap-2">
          {talk.tracks.map((track) => (
            <SpeakerTrackBadge key={track} track={track} />
          ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-snug sm:text-xl">
            {talk.talkTitle}
          </h3>
          <div className="pointer-events-auto flex flex-wrap gap-2">
            <TalkLevelBadge level={talk.level} asLink />
            <TalkLanguageBadge language={talk.language} asLink />
          </div>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed sm:text-base">
            {talk.talkDescription}
          </p>
        </div>

        <Separator />

        <TalkSpeakersList talk={talk} />

        <div className="pointer-events-auto flex items-center gap-1.5 text-sm font-medium text-primary">
          <span>{t("blocks.talks.viewTalk")}</span>
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </CardContent>
    </Card>
  );
};

const matchesSearch = (
  talk: Talk,
  query: string,
  locale: SiteLocale,
  getTrackLabel: (track: SpeakerTrack) => string,
  getLevelLabel: (level: Talk["level"]) => string,
  getLanguageLabel: (language: Talk["language"]) => string,
) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  const speakers = getTalkSpeakers(talk, locale);
  const haystack = [
    talk.talkTitle,
    talk.talkDescription,
    talk.levelLabel,
    getLevelLabel(talk.level),
    talk.languageLabel,
    getLanguageLabel(talk.language),
    ...speakers.flatMap((speaker) => [speaker.name, speaker.title]),
    ...talk.tracks.map(getTrackLabel),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(normalizedQuery);
};

const Talks = ({
  activeTrack,
  activeLevel,
  activeLanguage,
}: {
  activeTrack?: SpeakerTrack;
  activeLevel?: TalkLevel;
  activeLanguage?: TalkLanguage;
}) => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<TalkLevelFilter>(
    activeLevel ?? "view-all",
  );
  const [selectedLanguage, setSelectedLanguage] = useState<TalkLanguageFilter>(
    activeLanguage ?? "view-all",
  );
  const talks = getAllTalks(locale);
  const tracks = getActiveSpeakerTracks();
  const talkCounts = getTalkCountsByTrack(locale);
  const levelCounts = getTalkCountsByLevel(activeTrack ?? "view-all", locale);
  const languageCounts = getTalkCountsByLanguage(
    activeTrack ?? "view-all",
    locale,
  );
  const selectedTrack: SpeakerTrackFilter = activeTrack ?? "view-all";

  useEffect(() => {
    setSelectedLevel(activeLevel ?? "view-all");
  }, [activeLevel]);

  useEffect(() => {
    setSelectedLanguage(activeLanguage ?? "view-all");
  }, [activeLanguage]);

  const getTrackLabel = (track: SpeakerTrack) =>
    t(`blocks.speakers.tracks.${track}`);

  const formatLevelLabel = (level: TalkLevel) =>
    `${t("blocks.talks.levelLabel")} ${t(`blocks.talks.levels.${level}`)}`;

  const formatLanguageLabel = (language: TalkLanguage) =>
    `${t("blocks.talks.languageLabel")} ${t(`blocks.talks.languages.${language}`)}`;

  const handleTrackChange = (value: string) => {
    router.push(getSpeakerTrackHref(value as SpeakerTrackFilter));
  };

  const filteredTalks = useMemo(() => {
    const trackLabel = (track: SpeakerTrack) =>
      t(`blocks.speakers.tracks.${track}`);
    const levelLabel = (level: Talk["level"]) =>
      t(`blocks.talks.levels.${level}`);
    const languageLabel = (language: Talk["language"]) =>
      t(`blocks.talks.languages.${language}`);

    return talks.filter((talk) => {
      const matchesTrack =
        selectedTrack === "view-all" || talk.tracks.includes(selectedTrack);
      const matchesLevel =
        selectedLevel === "view-all" || talk.level === selectedLevel;
      const matchesLanguage =
        selectedLanguage === "view-all" || talk.language === selectedLanguage;

      return (
        matchesTrack &&
        matchesLevel &&
        matchesLanguage &&
        matchesSearch(
          talk,
          searchQuery,
          locale,
          trackLabel,
          levelLabel,
          languageLabel,
        )
      );
    });
  }, [
    talks,
    searchQuery,
    selectedLanguage,
    selectedLevel,
    selectedTrack,
    locale,
    t,
  ]);

  return (
    <section id="talks" className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 overflow-hidden px-4 sm:px-6 md:space-y-16 lg:space-y-20 lg:px-8">
        <div className="space-y-4 text-center">
          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="bg-background text-sm font-normal"
            >
              {t("blocks.talks.eyebrow")}
            </Badge>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.2}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl lg:text-5xl">
              {t("blocks.talks.titlePrefix")}{" "}
              <span className="relative z-10">
                <span>{t("blocks.talks.titleHighlight")}</span>
                <span
                  className="bg-primary absolute bottom-1 left-0 -z-10 h-px w-full"
                  aria-hidden="true"
                />
              </span>{" "}
              {t("blocks.talks.titleSuffix")}
            </h1>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              {t("blocks.talks.subtitle")}
            </p>
          </MotionPreset>
        </div>

        <Tabs
          value={selectedTrack}
          onValueChange={handleTrackChange}
          className="gap-10"
          id="talks-grid"
        >
          <div className="mb-2 flex flex-col gap-6">
            <MotionPreset
              fade
              slide={{ direction: "down" }}
              delay={0.55}
              transition={{ duration: 0.5 }}
              inView={false}
              className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap lg:ml-auto lg:max-w-3xl"
            >
              <Select
                value={selectedLevel}
                onValueChange={(value) =>
                  setSelectedLevel(value as TalkLevelFilter)
                }
              >
                <SelectTrigger
                  className="h-10 w-full sm:w-52"
                  aria-label={t("blocks.talks.filterLevelSrOnly")}
                >
                  <SelectValue placeholder={t("blocks.talks.filterLevel")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="view-all">
                    {t("blocks.talks.filterLevel")} ({levelCounts["view-all"]})
                  </SelectItem>
                  {talkLevelOrder.map((level) => (
                    <SelectItem key={level} value={level}>
                      {formatLevelLabel(level)} ({levelCounts[level]})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedLanguage}
                onValueChange={(value) =>
                  setSelectedLanguage(value as TalkLanguageFilter)
                }
              >
                <SelectTrigger
                  className="h-10 w-full sm:w-52"
                  aria-label={t("blocks.talks.filterLanguageSrOnly")}
                >
                  <SelectValue placeholder={t("blocks.talks.filterLanguage")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="view-all">
                    {t("blocks.talks.filterLanguage")} (
                    {languageCounts["view-all"]})
                  </SelectItem>
                  {talkLanguageOrder.map((language) => (
                    <SelectItem key={language} value={language}>
                      {formatLanguageLabel(language)} (
                      {languageCounts[language]})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="relative min-w-0 flex-1 sm:min-w-48">
                <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                  <SearchIcon className="size-4" />
                  <span className="sr-only">
                    {t("blocks.talks.searchSrOnly")}
                  </span>
                </div>
                <Input
                  type="search"
                  placeholder={t("blocks.talks.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="peer h-10 w-full ps-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
                />
              </div>
            </MotionPreset>

            <MotionPreset fade zoom delay={0.5} transition={{ duration: 0.5 }}>
              <TabsList
                variant="line"
                className="h-auto w-full flex-wrap justify-start gap-x-2 gap-y-3 pb-1 lg:justify-center"
              >
                <TabsTrigger
                  value="view-all"
                  className="flex-none shrink-0 grow-0 basis-auto text-base group-data-horizontal/tabs:after:-bottom-1"
                >
                  {t("blocks.talks.viewAll")} ({talkCounts["view-all"]})
                </TabsTrigger>

                {tracks.map((track) => (
                  <TabsTrigger
                    key={track}
                    value={track}
                    className={cn(
                      "flex-none shrink-0 grow-0 basis-auto text-base group-data-horizontal/tabs:after:-bottom-1",
                      speakerTrackStyles[track].tabActive,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-2 shrink-0 rounded-full",
                        speakerTrackStyles[track].dot,
                      )}
                    />
                    {getTrackLabel(track)} ({talkCounts[track]})
                  </TabsTrigger>
                ))}
              </TabsList>
            </MotionPreset>
          </div>

          {(["view-all", ...tracks] as SpeakerTrackFilter[]).map((track) => (
            <TabsContent
              key={track}
              value={track}
              className={talkGridClassName}
            >
              {filteredTalks.length > 0 ? (
                filteredTalks.map((talk, index) => (
                  <MotionPreset
                    key={talk.id}
                    fade
                    slide={{ direction: "down", offset: 50 }}
                    delay={0.3 + 0.1 * index}
                    inView={false}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                  >
                    <TalkCard talk={talk} />
                  </MotionPreset>
                ))
              ) : (
                <div className="text-muted-foreground col-span-full flex min-h-64 flex-col items-center justify-center space-y-4 rounded-[14px] border border-dashed border-border/60 p-8 text-center">
                  <SearchIcon className="size-12 opacity-50" />
                  <div className="space-y-2">
                    <h3 className="text-foreground text-lg font-medium">
                      {t("blocks.talks.emptyTitle")}
                    </h3>
                    <p className="text-sm">
                      {t("blocks.talks.emptyDescription")}
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Talks;
