"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { speakers } from "@/assets/data/speakers";
import SpeakerCarouselFrame from "@/components/blocks/speakers/speaker-carousel-frame";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";

const AUTOPLAY_DELAY_MS = 2000;

const SpeakersCarousel = () => {
  const { t } = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const carouselSpeakers = useMemo(() => [...speakers, ...speakers], []);

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_DELAY_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [api]);

  if (speakers.length === 0) {
    return null;
  }

  return (
    <section
      id="speakers-preview"
      className="relative overflow-hidden py-8 before:pointer-events-none before:absolute before:inset-0 before:size-full before:bg-[url(https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-105.png)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-40 sm:py-16 lg:py-24 dark:before:bg-[url(https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-105-dark.png)] dark:before:opacity-30"
    >
      <div className="absolute top-0 left-1/2 size-160 -translate-x-1/2">
        {/* biome-ignore lint/performance/noImgElement: decorative CDN gradient asset */}
        <img
          src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/team/image-106.png"
          alt=""
          aria-hidden="true"
          className="opacity-15 dark:opacity-25"
        />
      </div>

      <div className="mx-auto mb-12 max-w-7xl px-4 sm:mb-16 sm:px-6 lg:mb-24 lg:px-8">
        <div className="mx-auto space-y-4 text-center">
          <MotionPreset
            fade
            slide={{ direction: "down", offset: 50 }}
            component="p"
            className="text-primary text-sm font-medium uppercase"
            blur
            transition={{ duration: 0.5 }}
            delay={0.1}
          >
            {t("blocks.speakers.carousel.eyebrow")}
          </MotionPreset>

          <MotionPreset
            component="h2"
            className="text-2xl font-semibold md:text-3xl lg:text-4xl"
            fade
            slide={{ direction: "down", offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.1}
          >
            {t("blocks.speakers.carousel.title")}
          </MotionPreset>

          <MotionPreset
            component="p"
            className="text-muted-foreground text-xl"
            fade
            slide={{ direction: "down", offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.2}
          >
            {t("blocks.speakers.carousel.subtitle")}
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "down", offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]"
              asChild
            >
              <Link href="/speakers">
                {t("blocks.speakers.carousel.viewAll")}
              </Link>
            </Button>
          </MotionPreset>
        </div>
      </div>

      <Carousel
        opts={{ loop: true, align: "center" }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-6 max-lg:-ml-12">
          {carouselSpeakers.map((speaker, index) => (
            <CarouselItem
              key={`${speaker.slug}-${index}`}
              className="pl-6 max-lg:pl-12 md:basis-1/3 xl:basis-1/5"
            >
              <Link
                href={`/speakers/${speaker.slug}`}
                aria-label={speaker.name}
                className="group relative block outline-none"
              >
                <SpeakerCarouselFrame
                  speaker={speaker}
                  frameIndex={index % speakers.length}
                />

                <div className="mt-7 min-h-14 space-y-0.5 text-center">
                  <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <p className="text-foreground text-base leading-tight font-medium sm:text-lg">
                      {speaker.name}
                    </p>
                    <p className="text-muted-foreground mt-0.5 text-sm leading-snug">
                      {speaker.title}
                    </p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default SpeakersCarousel;
