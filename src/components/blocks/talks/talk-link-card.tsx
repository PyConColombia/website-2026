"use client";

import { ArrowRightIcon, MicIcon } from "lucide-react";
import Link from "next/link";

import SpeakerTrackBadge from "@/components/blocks/speakers/speaker-track-badge";
import TalkLanguageBadge from "@/components/blocks/talks/talk-language-badge";
import TalkLevelBadge from "@/components/blocks/talks/talk-level-badge";
import TalkSpeakersList from "@/components/blocks/talks/talk-speakers-list";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "@/contexts/language-context";
import { getTalkHref, type Talk } from "@/lib/talks";

type TalkLinkCardProps = {
  talk: Talk;
};

const TalkLinkCard = ({ talk }: TalkLinkCardProps) => {
  const { t } = useTranslations();

  return (
    <Card className="bg-card gap-0 overflow-hidden rounded-[14px] border border-border/60 py-0 shadow-xs">
      <Link
        href={getTalkHref(talk.id)}
        className="group block"
        aria-label={talk.talkTitle}
      >
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <div className="bg-primary/10 text-primary flex size-24 shrink-0 items-center justify-center rounded-[12px] border border-primary/20">
            <MicIcon className="size-10" strokeWidth={1.5} />
          </div>

          <div className="min-w-0 flex-1 space-y-3">
            <div className="flex flex-wrap gap-2">
              {talk.tracks.map((track) => (
                <SpeakerTrackBadge key={track} track={track} />
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold leading-snug">
                {talk.talkTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                <TalkLevelBadge level={talk.level} />
                <TalkLanguageBadge language={talk.language} />
              </div>
              <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                {talk.talkDescription}
              </p>
            </div>

            <TalkSpeakersList talk={talk} linkable={false} />
          </div>

          <div className="text-primary flex items-center gap-1.5 text-sm font-medium sm:shrink-0">
            <span>{t("blocks.talks.viewTalk")}</span>
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default TalkLinkCard;
