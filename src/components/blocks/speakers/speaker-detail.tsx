"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import GithubIcon from "@/assets/svg/github-icon";
import LinkedinIcon from "@/assets/svg/linkedin-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionPreset } from "@/components/ui/motion-preset";
import PersonImage from "@/components/ui/person-image";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "@/contexts/language-context";
import { getSpeakerBySlug } from "@/lib/speakers";

type SpeakerDetailProps = {
  slug: string;
};

const SpeakerDetail = ({ slug }: SpeakerDetailProps) => {
  const { t } = useTranslations();
  const speaker = useMemo(() => getSpeakerBySlug(slug), [slug]);

  if (!speaker) {
    return null;
  }

  const getTrackLabel = (track: (typeof speaker.tracks)[number]) =>
    t(`blocks.speakers.tracks.${track}`);

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
            <div className="bg-card overflow-hidden rounded-[18px] border border-border/60 p-4 shadow-xs">
              <PersonImage
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
              <div className="flex flex-wrap gap-2">
                {speaker.tracks.map((track) => (
                  <Badge key={track} variant="outline">
                    {getTrackLabel(track)}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-semibold md:text-4xl">
                  {speaker.name}
                </h1>
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
                {t("blocks.speakers.detail.talk")}
              </h2>
              <h3 className="text-xl font-medium">{speaker.talkTitle}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {speaker.talkDescription}
              </p>

              <dl className="grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-muted-foreground text-sm">
                    {t("blocks.speakers.detail.country")}
                  </dt>
                  <dd className="font-medium">{speaker.country}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-sm">
                    {t("blocks.speakers.detail.language")}
                  </dt>
                  <dd className="font-medium">{speaker.language}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-sm">
                    {t("blocks.speakers.detail.level")}
                  </dt>
                  <dd className="font-medium">{speaker.level}</dd>
                </div>
              </dl>
            </MotionPreset>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerDetail;
