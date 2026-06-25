"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import GithubIcon from "@/assets/svg/github-icon";
import LinkedinIcon from "@/assets/svg/linkedin-icon";
import { Card, CardContent } from "@/components/ui/card";
import { CountryFlagTooltip } from "@/components/ui/country-flag";
import { MotionPreset } from "@/components/ui/motion-preset";
import { Separator } from "@/components/ui/separator";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { getAllLocalizedKeynotes, type LocalizedKeynote } from "@/lib/keynotes";
import { assetPath } from "@/lib/utils";

const KeynoteCard = ({ keynote }: { keynote: LocalizedKeynote }) => (
  <Card className="bg-card group relative h-full w-full gap-0 overflow-hidden rounded-[14px] border border-border/60 py-0 shadow-xs transition-colors hover:border-primary/40">
    <Link href={`/keynotes/${keynote.slug}`} className="block h-full">
      <div className="relative aspect-3/4 overflow-hidden">
        <Image
          src={assetPath(keynote.image)}
          alt={keynote.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <CardContent className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {keynote.name}
          </h2>
          <CountryFlagTooltip country={keynote.country} size="sm" />
        </div>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {keynote.role}
        </p>
        {(keynote.github || keynote.linkedin) && (
          <div className="flex items-center gap-3 pt-1">
            {keynote.github ? (
              <GithubIcon className="text-muted-foreground size-4 shrink-0" />
            ) : null}
            {keynote.linkedin ? (
              <LinkedinIcon className="text-muted-foreground size-4 shrink-0" />
            ) : null}
          </div>
        )}
      </CardContent>
    </Link>
  </Card>
);

const Keynotes = () => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const keynotes = useMemo(() => getAllLocalizedKeynotes(locale), [locale]);

  return (
    <section className="overflow-hidden py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 30 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="text-primary mb-3 text-sm font-medium uppercase tracking-wide">
            {t("blocks.keynotes.eyebrow")}
          </p>
          <h1 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            {t("blocks.keynotes.title")}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t("blocks.keynotes.subtitle")}
          </p>
        </MotionPreset>

        <Separator className="mb-12" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {keynotes.map((keynote, index) => (
            <MotionPreset
              key={keynote.slug}
              fade
              blur
              slide={{ direction: "up", offset: 40 }}
              delay={0.05 * index}
              transition={{ duration: 0.5 }}
            >
              <KeynoteCard keynote={keynote} />
            </MotionPreset>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keynotes;
