"use client";

import Link from "next/link";

import { type Speaker, speakers } from "@/assets/data/speakers";
import GithubIcon from "@/assets/svg/github-icon";
import LinkedinIcon from "@/assets/svg/linkedin-icon";
import SpeakerImage from "@/components/blocks/speakers/speaker-image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MotionPreset } from "@/components/ui/motion-preset";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

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
          <GithubIcon className="size-4 shrink-0" />
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
          <LinkedinIcon className="size-4 shrink-0" />
        </a>
      ) : null}
    </div>
  );
};

const speakerGridClassName =
  "mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6";

const getCenteredRowClassName = (index: number, total: number) => {
  const lastRowCardCount = total % 3;
  const firstLastRowIndex = total - lastRowCardCount;

  if (lastRowCardCount === 1 && index === firstLastRowIndex) {
    return "lg:col-start-2";
  }

  if (lastRowCardCount === 2 && index === firstLastRowIndex) {
    return "lg:col-start-1";
  }

  if (lastRowCardCount === 2 && index === firstLastRowIndex + 1) {
    return "lg:col-start-2";
  }

  return undefined;
};

const SpeakerCard = ({ speaker, descriptionLines = 2 }: SpeakerCardProps) => (
  <Card className="bg-card group relative h-full w-full gap-0 overflow-hidden rounded-[14px] border border-border/60 py-0 shadow-xs transition-colors hover:border-primary/40">
    <Link
      href={`/speakers/${speaker.slug}`}
      className="absolute inset-0 z-0 rounded-[inherit]"
      aria-label={speaker.name}
    />
    <CardContent className="pointer-events-none relative z-10 p-3 pb-0">
      <SpeakerImage
        src={speaker.image}
        alt={speaker.name}
        width={320}
        height={427}
        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 240px"
        className="aspect-3/4 w-full rounded-[10px] object-cover object-top"
      />
    </CardContent>

    <CardContent className="pointer-events-none relative z-10 px-3 pt-0 pb-3">
      <div className="from-background/60 -mt-22 rounded-t-[10px] bg-linear-to-b from-100% to-transparent px-3 pt-3 pb-10 text-center backdrop-blur-md sm:-mt-24 sm:px-3.5 sm:pt-3.5 sm:pb-12">
        <div className="space-y-0.5">
          <h3 className="text-base font-semibold sm:text-lg">{speaker.name}</h3>
          <p className="text-muted-foreground text-xs font-normal sm:text-sm">
            {speaker.title}
          </p>
        </div>
      </div>

      <div className="space-y-2.5 pt-3 text-center">
        <p
          className={
            descriptionLines === 3
              ? "text-muted-foreground line-clamp-3 text-xs leading-relaxed sm:text-sm"
              : "text-muted-foreground line-clamp-2 text-xs leading-relaxed sm:text-sm"
          }
        >
          {speaker.description}
        </p>
        <Separator />
        <div className="pointer-events-auto">
          <SpeakerSocialLinks speaker={speaker} />
        </div>
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
                key={speaker.slug}
                fade
                slide={{ direction: "down", offset: 50 }}
                delay={0.3 + 0.15 * index}
                transition={{ duration: 0.5 }}
                className={cn(
                  "h-full w-full",
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
                    key={speaker.slug}
                    fade
                    slide={{ direction: "down", offset: 50 }}
                    delay={0.5 + 0.15 * index}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "h-full w-full",
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
