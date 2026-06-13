"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

import { type Speaker, speakers } from "@/assets/data/speakers";
import GithubIcon from "@/assets/svg/github-icon";
import LinkedinIcon from "@/assets/svg/linkedin-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MotionPreset } from "@/components/ui/motion-preset";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "@/contexts/language-context";
import { assetPath, cn } from "@/lib/utils";

type SpeakerCardProps = {
  speaker: Speaker;
  descriptionLines?: 2 | 3;
};

const SpeakerSocialLinks = ({ speaker }: { speaker: Speaker }) => {
  const hasSocial = Boolean(speaker.github || speaker.linkedin);

  if (!hasSocial) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {speaker.github ? (
        <a
          href={speaker.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${speaker.name} GitHub`}
          className="text-foreground hover:text-muted-foreground transition-colors"
        >
          <GithubIcon className="size-5 shrink-0" />
        </a>
      ) : null}
      {speaker.linkedin ? (
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${speaker.name} LinkedIn`}
          className="text-foreground hover:text-muted-foreground transition-colors"
        >
          <LinkedinIcon className="size-5 shrink-0" />
        </a>
      ) : null}
    </div>
  );
};

const speakerGridClassName =
  "mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-6 md:gap-12 lg:gap-16 2xl:gap-24";

const getCenteredRowClassName = (index: number, total: number) => {
  const lastRowCardCount = total % 3;
  const firstLastRowIndex = total - lastRowCardCount;

  if (lastRowCardCount === 1 && index === firstLastRowIndex) {
    return "md:col-start-3";
  }

  if (lastRowCardCount === 2 && index === firstLastRowIndex) {
    return "md:col-start-2";
  }

  return undefined;
};

const SpeakerCard = ({ speaker, descriptionLines = 2 }: SpeakerCardProps) => (
  <Card className="bg-card h-full gap-0 overflow-hidden rounded-[18px] border border-border/60 py-0 shadow-xs">
    <CardContent className="p-4 pb-0">
      <Image
        src={assetPath(speaker.image)}
        alt={speaker.name}
        width={400}
        height={304}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="h-76 w-full rounded-[14px] object-cover"
      />
    </CardContent>

    <CardContent className="-mt-23 p-4 pt-0">
      <div className="from-background/60 flex flex-col items-center justify-center gap-3 rounded-t-[14px] bg-linear-to-b from-100% to-transparent p-5 text-center backdrop-blur-md">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{speaker.name}</h3>
          <p className="text-muted-foreground text-sm font-normal">
            {speaker.title}
          </p>
        </div>
        <p
          className={
            descriptionLines === 3
              ? "text-muted-foreground line-clamp-3 text-base leading-relaxed"
              : "text-muted-foreground line-clamp-2 text-base leading-relaxed"
          }
        >
          {speaker.description}
        </p>
        <Separator />
        <SpeakerSocialLinks speaker={speaker} />
      </div>
    </CardContent>
  </Card>
);

const Speakers = () => {
  const { t } = useTranslations();
  const tracks = [...new Set(speakers.flatMap((speaker) => speaker.tracks))];

  const getTrackLabel = (track: Speaker["tracks"][number]) =>
    t(`blocks.speakers.tracks.${track}`);

  return (
    <section id="speakers" className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 overflow-hidden px-4 sm:px-6 md:space-y-16 lg:space-y-24 lg:px-8">
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
              {t("blocks.speakers.eyebrow")}
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
              {t("blocks.speakers.titlePrefix")}{" "}
              <span className="relative z-10">
                <span>{t("blocks.speakers.titleHighlight")}</span>
                <span
                  className="bg-primary absolute bottom-1 left-0 -z-10 h-px w-full"
                  aria-hidden="true"
                />
              </span>{" "}
              {t("blocks.speakers.titleSuffix")}
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
              {t("blocks.speakers.subtitle")}
            </p>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
              asChild
            >
              <a href="#speakers-grid">
                {t("blocks.speakers.explore")}{" "}
                <ArrowRightIcon className="transition-transform duration-200 group-hover/button:translate-x-0.5" />
              </a>
            </Button>
          </MotionPreset>
        </div>

        <Tabs defaultValue="view-all" className="gap-8" id="speakers-grid">
          <div className="flex justify-start overflow-x-auto overflow-y-hidden sm:justify-center">
            <MotionPreset fade zoom delay={0.5} transition={{ duration: 0.5 }}>
              <TabsList variant="line" className="gap-2">
                <TabsTrigger
                  value="view-all"
                  className="text-base group-data-horizontal/tabs:after:-bottom-1"
                >
                  {t("blocks.speakers.viewAll")}
                </TabsTrigger>

                {tracks.map((track) => (
                  <TabsTrigger
                    key={track}
                    value={track}
                    className="text-base group-data-horizontal/tabs:after:-bottom-1"
                  >
                    {getTrackLabel(track)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </MotionPreset>
          </div>

          <TabsContent value="view-all" className={speakerGridClassName}>
            {speakers.map((speaker, index) => (
              <MotionPreset
                key={speaker.name}
                fade
                slide={{ direction: "down", offset: 50 }}
                delay={0.3 + 0.15 * index}
                transition={{ duration: 0.5 }}
                className={cn(
                  "h-full w-full md:col-span-2",
                  getCenteredRowClassName(index, speakers.length),
                )}
              >
                <SpeakerCard speaker={speaker} />
              </MotionPreset>
            ))}
          </TabsContent>

          {tracks.map((track) => {
            const filteredSpeakers = speakers.filter((speaker) =>
              speaker.tracks.includes(track),
            );

            return (
              <TabsContent
                key={track}
                value={track}
                className={speakerGridClassName}
              >
                {filteredSpeakers.map((speaker, index) => (
                  <MotionPreset
                    key={speaker.name}
                    fade
                    slide={{ direction: "down", offset: 50 }}
                    delay={0.5 + 0.15 * index}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "h-full w-full md:col-span-2",
                      getCenteredRowClassName(index, filteredSpeakers.length),
                    )}
                  >
                    <SpeakerCard speaker={speaker} descriptionLines={3} />
                  </MotionPreset>
                ))}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Speakers;
