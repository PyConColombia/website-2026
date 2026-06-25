"use client";

import { ArrowLeftIcon, GlobeIcon, XIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import GithubIcon from "@/assets/svg/github-icon";
import LinkedinIcon from "@/assets/svg/linkedin-icon";
import { Button } from "@/components/ui/button";
import { CountryFlagTooltip } from "@/components/ui/country-flag";
import { MotionPreset } from "@/components/ui/motion-preset";
import { Separator } from "@/components/ui/separator";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import {
  formatKeynoteScheduleSlot,
  getLocalizedKeynote,
  getScheduleEventsForKeynote,
} from "@/lib/keynotes";
import { assetPath } from "@/lib/utils";

type KeynoteDetailProps = {
  slug: string;
};

const KeynoteDetail = ({ slug }: KeynoteDetailProps) => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const keynote = useMemo(
    () => getLocalizedKeynote(slug, locale),
    [slug, locale],
  );
  const scheduleEvents = useMemo(
    () => getScheduleEventsForKeynote(slug),
    [slug],
  );

  if (!keynote) {
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
            <Link href="/#benefits">
              <ArrowLeftIcon className="size-4" />
              {t("blocks.keynotes.detail.back")}
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
              <Image
                src={assetPath(keynote.image)}
                alt={keynote.name}
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
                <p className="text-primary text-sm font-medium uppercase">
                  {t("blocks.scheduleUi.keynote")}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-semibold md:text-4xl">
                    {keynote.name}
                  </h1>
                  <CountryFlagTooltip country={keynote.country} size="lg" />
                </div>
                <p className="text-muted-foreground text-xl">{keynote.role}</p>
              </div>

              <div className="flex items-center gap-3">
                {keynote.github ? (
                  <a
                    href={keynote.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${keynote.name} GitHub`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <GithubIcon className="size-5 shrink-0" />
                  </a>
                ) : null}
                {keynote.linkedin ? (
                  <a
                    href={keynote.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${keynote.name} LinkedIn`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <LinkedinIcon className="size-5 shrink-0" />
                  </a>
                ) : null}
                {keynote.website ? (
                  <a
                    href={keynote.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${keynote.name} website`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <GlobeIcon className="size-5 shrink-0" />
                  </a>
                ) : null}
                {keynote.youtube ? (
                  <a
                    href={keynote.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${keynote.name} YouTube`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <YoutubeIcon className="size-5 shrink-0" />
                  </a>
                ) : null}
                {keynote.x ? (
                  <a
                    href={keynote.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${keynote.name} X`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    <XIcon className="size-5 shrink-0" />
                  </a>
                ) : null}
              </div>
            </MotionPreset>

            {scheduleEvents.length > 0 ? (
              <MotionPreset
                fade
                blur
                slide={{ direction: "up", offset: 50 }}
                delay={0.15}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <h2 className="text-lg font-semibold">
                  {t("blocks.keynotes.detail.schedule")}
                </h2>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {scheduleEvents.map((event) => (
                    <li key={event.id}>
                      {formatKeynoteScheduleSlot(event, locale)}
                    </li>
                  ))}
                </ul>
              </MotionPreset>
            ) : null}

            <Separator />

            <MotionPreset
              fade
              blur
              slide={{ direction: "up", offset: 50 }}
              delay={0.2}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-semibold">
                {t("blocks.keynotes.detail.about")}
              </h2>
              <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {keynote.description}
              </div>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeynoteDetail;
