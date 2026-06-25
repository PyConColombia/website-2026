"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import GithubIcon from "@/assets/svg/github-icon";
import LinkedinIcon from "@/assets/svg/linkedin-icon";
import SpeakerImage from "@/components/blocks/speakers/speaker-image";
import TalkLinkCard from "@/components/blocks/talks/talk-link-card";
import { Button } from "@/components/ui/button";
import { CountryFlagTooltip } from "@/components/ui/country-flag";
import { MotionPreset } from "@/components/ui/motion-preset";
import { Separator } from "@/components/ui/separator";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { getLocalizedSpeaker } from "@/lib/speakers";
import { getTalkBySpeakerSlug } from "@/lib/talks";

type SpeakerDetailProps = {
  slug: string;
};

const SpeakerDetail = ({ slug }: SpeakerDetailProps) => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const speaker = useMemo(
    () => getLocalizedSpeaker(slug, locale),
    [slug, locale],
  );
  const talk = useMemo(
    () => getTalkBySpeakerSlug(slug, locale),
    [slug, locale],
  );

  if (!speaker) {
    return null;
  }

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
            <Link href="/speakers">
              <ArrowLeftIcon className="size-4" />
              {t("blocks.speakers.detail.back")}
            </Link>
          </Button>
        </MotionPreset>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card border-border/60 overflow-hidden rounded-[18px] border p-4 shadow-xs">
              <SpeakerImage
                src={speaker.image}
                alt={speaker.name}
                width={400}
                height={533}
                sizes="(max-width: 1024px) 100vw, 360px"
                className="aspect-3/4 w-full rounded-[14px] object-cover object-top"
              />
            </div>
          </MotionPreset>

          <div className="space-y-8">
            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.1}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-semibold md:text-4xl">
                    {speaker.name}
                  </h1>
                  <CountryFlagTooltip country={speaker.country} size="lg" />
                </div>
                <p className="text-muted-foreground text-xl">{speaker.title}</p>
              </div>

              <div className="flex items-center gap-3">
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
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.2}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold">
                {t("blocks.speakers.detail.about")}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {speaker.description}
              </p>
            </MotionPreset>

            <Separator />

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.3}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold">
                {talk?.format === "workshop"
                  ? t("blocks.speakers.detail.workshop")
                  : t("blocks.speakers.detail.talk")}
              </h2>
              {talk ? <TalkLinkCard talk={talk} /> : null}
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerDetail;
