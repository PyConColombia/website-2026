"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import SpeakerImage from "@/components/blocks/speakers/speaker-image";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { getSpeakerProfileHref } from "@/lib/speakers";
import { getTalkSpeakers, type Talk } from "@/lib/talks";

type TalkSpeakersListProps = {
  talk: Pick<Talk, "speakerSlugs">;
  variant?: "compact" | "card";
  linkable?: boolean;
};

const TalkSpeakersList = ({
  talk,
  variant = "compact",
  linkable = true,
}: TalkSpeakersListProps) => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const speakers = getTalkSpeakers(talk as Talk, locale);

  if (speakers.length === 0) {
    return null;
  }

  if (variant === "card") {
    return (
      <div className="space-y-3">
        {speakers.map((speaker) => {
          const content = (
            <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
              <SpeakerImage
                src={speaker.image}
                alt={speaker.name}
                width={96}
                height={96}
                sizes="96px"
                className="size-24 shrink-0 rounded-[12px] object-cover object-top"
              />
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-lg font-semibold">{speaker.name}</p>
                <p className="text-muted-foreground">{speaker.title}</p>
                <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                  {speaker.description}
                </p>
              </div>
              {linkable ? (
                <div className="text-primary flex items-center gap-1.5 text-sm font-medium sm:shrink-0">
                  <span>{t("blocks.talks.viewSpeaker")}</span>
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              ) : null}
            </CardContent>
          );

          if (!linkable) {
            return (
              <Card
                key={speaker.slug}
                className="bg-card gap-0 overflow-hidden rounded-[14px] border border-border/60 py-0 shadow-xs"
              >
                {content}
              </Card>
            );
          }

          return (
            <Card
              key={speaker.slug}
              className="bg-card gap-0 overflow-hidden rounded-[14px] border border-border/60 py-0 shadow-xs"
            >
              <Link
                href={getSpeakerProfileHref(speaker.slug)}
                className="group block"
                aria-label={speaker.name}
              >
                {content}
              </Link>
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {speakers.map((speaker) => {
        const row = (
          <>
            <SpeakerImage
              src={speaker.image}
              alt={speaker.name}
              width={48}
              height={48}
              sizes="48px"
              className="size-12 shrink-0 rounded-full object-cover object-top"
            />
            <div className="min-w-0 space-y-0.5">
              <p className="truncate font-medium">{speaker.name}</p>
              <p className="text-muted-foreground truncate text-sm">
                {speaker.title}
              </p>
            </div>
          </>
        );

        if (!linkable) {
          return (
            <div key={speaker.slug} className="flex min-w-0 items-center gap-3">
              {row}
            </div>
          );
        }

        return (
          <Link
            key={speaker.slug}
            href={getSpeakerProfileHref(speaker.slug)}
            className="pointer-events-auto flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80"
            aria-label={speaker.name}
          >
            {row}
          </Link>
        );
      })}
    </div>
  );
};

export default TalkSpeakersList;
