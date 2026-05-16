"use client";

import { ArrowRightIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { galleryImages } from "@/assets/data/gallery";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { Marquee } from "@/components/ui/marquee";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";
import { assetPath } from "@/lib/utils";

const Gallery = () => {
  const { t } = useTranslations();
  const midpoint = Math.ceil(galleryImages.length / 2);
  const galleryRows = [
    galleryImages.slice(0, midpoint),
    galleryImages.slice(midpoint),
  ];
  const galleryUrl = "https://photos.app.goo.gl/JKTcdNn8HBLNYWgH6";

  return (
    <section
      id="gallery"
      className="space-y-12 py-8 sm:space-y-16 sm:py-16 lg:space-y-24 lg:py-24"
    >
      <MotionPreset
        fade
        slide={{ direction: "down", offset: 50 }}
        blur
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8"
      >
        <p className="text-primary text-sm font-medium uppercase">
          {t("blocks.gallery.eyebrow")}
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
          {t("blocks.gallery.title")}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          {t("blocks.gallery.subtitle")}
        </p>
        <PrimaryFlowButton size="lg" className="mx-auto" asChild>
          <Link href={galleryUrl} target="_blank" rel="noopener noreferrer">
            {t("blocks.gallery.seeAll")}
            <ArrowRightIcon />
          </Link>
        </PrimaryFlowButton>
      </MotionPreset>

      <MotionPreset
        fade
        slide={{ direction: "down", offset: 30 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-linear-to-r to-transparent max-sm:hidden" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-linear-to-l to-transparent max-sm:hidden" />

          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover duration={22} gap={1.5}>
              {galleryRows[0].map((image) => (
                <Image
                  key={image.src}
                  src={assetPath(image.src)}
                  alt={image.alt}
                  width={268}
                  height={274}
                  sizes="268px"
                  className="h-68.5 w-67 shrink-0 rounded-lg border object-cover shadow-sm"
                />
              ))}
            </Marquee>
          </div>

          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover duration={22} gap={1.5} reverse>
              {galleryRows[1].map((image) => (
                <Image
                  key={image.src}
                  src={assetPath(image.src)}
                  alt={image.alt}
                  width={268}
                  height={274}
                  sizes="268px"
                  className="h-68.5 w-67 shrink-0 rounded-lg border object-cover shadow-sm"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </MotionPreset>
    </section>
  );
};

export default Gallery;
