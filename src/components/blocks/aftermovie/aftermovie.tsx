"use client";

import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

const YOUTUBE_VIDEO_ID = "6JUYr7QBtBI";

const Aftermovie = () => {
  const { t } = useTranslations();
  const [playing, setPlaying] = useState(false);

  const embedSrc = `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
  const thumbMax = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
  const thumbHq = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
  const title = t("blocks.afterMovie.title");

  return (
    <section
      id="aftermovie"
      aria-label={t("blocks.afterMovie.sectionAriaLabel")}
      className="bg-muted/30 py-8 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:space-y-12 sm:px-6 lg:px-8">
        <MotionPreset
          fade
          blur
          slide={{ direction: "down", offset: 50 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl space-y-4 text-center"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            {t("blocks.afterMovie.subtitle")}
          </p>
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: "down", offset: 30 }}
          transition={{ duration: 0.5 }}
          delay={0.15}
        >
          <div className="mx-auto w-full max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl border bg-card shadow-lg">
              {playing ? (
                <iframe
                  className="absolute inset-0 size-full border-0"
                  src={embedSrc}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="group absolute inset-0 size-full cursor-pointer"
                  onClick={() => setPlaying(true)}
                  aria-label={t("blocks.afterMovie.playLabel")}
                >
                  <Image
                    src={thumbMax}
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    onError={(event) => {
                      const target = event.currentTarget;
                      if (!target.src.includes("hqdefault")) {
                        target.src = thumbHq;
                      }
                    }}
                  />
                  <span
                    className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/45"
                    aria-hidden
                  />
                  <span
                    className={cn(
                      "absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full",
                      "bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-105",
                    )}
                    aria-hidden
                  >
                    <PlayIcon className="size-7 fill-current" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </MotionPreset>
      </div>
    </section>
  );
};

export default Aftermovie;
