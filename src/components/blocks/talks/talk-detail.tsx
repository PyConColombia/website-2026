"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import SpeakerTrackBadge from "@/components/blocks/speakers/speaker-track-badge";
import TalkLanguageBadge from "@/components/blocks/talks/talk-language-badge";
import TalkLevelBadge from "@/components/blocks/talks/talk-level-badge";
import TalkSpeakersList from "@/components/blocks/talks/talk-speakers-list";
import { Button } from "@/components/ui/button";
import { MotionPreset } from "@/components/ui/motion-preset";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "@/contexts/language-context";
import { getTalkById } from "@/lib/talks";

type TalkDetailProps = {
  talkId: number;
};

const TalkDetail = ({ talkId }: TalkDetailProps) => {
  const { t } = useTranslations();
  const talk = useMemo(() => getTalkById(talkId), [talkId]);

  if (!talk) {
    return null;
  }

  const speakersHeading =
    talk.speakerSlugs.length > 1
      ? t("blocks.talks.detail.speakers")
      : t("blocks.talks.detail.speaker");

  return (
    <section className="overflow-hidden py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 30 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="gap-2 px-0">
            <Link href="/talks">
              <ArrowLeftIcon className="size-4" />
              {t("blocks.talks.detail.back")}
            </Link>
          </Button>
        </MotionPreset>

        <div className="mx-auto max-w-4xl space-y-8">
          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap gap-2">
              {talk.tracks.map((track) => (
                <SpeakerTrackBadge key={track} track={track} asLink />
              ))}
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                {talk.talkTitle}
              </h1>
              <div className="flex flex-wrap gap-2">
                <TalkLevelBadge level={talk.level} asLink />
                <TalkLanguageBadge language={talk.language} asLink />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
                {talk.talkDescription}
              </p>
            </div>
          </MotionPreset>

          <Separator />

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.15}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold">{speakersHeading}</h2>
            <TalkSpeakersList talk={talk} variant="card" />
          </MotionPreset>
        </div>
      </div>
    </section>
  );
};

export default TalkDetail;
