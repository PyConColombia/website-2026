"use client";

import { ExternalLinkIcon, StarIcon } from "lucide-react";

import Link from "next/link";
import type { TestimonialItem } from "@/components/blocks/testimonials/testimonial-card";
import TestimonialCard from "@/components/blocks/testimonials/testimonial-card";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { Marquee } from "@/components/ui/marquee";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";

const Testimonials = ({
  testimonials,
}: {
  testimonials: TestimonialItem[];
}) => {
  const { t } = useTranslations();

  return (
    <section
      id="testimonials"
      className="space-y-12 py-8 sm:space-y-16 sm:py-16 lg:space-y-24 lg:py-24"
    >
      <MotionPreset
        className="mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8"
        fade
        slide={{ direction: "down", offset: 50 }}
        blur
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-sm font-medium uppercase">
          {t("blocks.testimonials.eyebrow")}
        </p>

        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          {t("blocks.testimonials.title")}
        </h2>

        <p className="text-muted-foreground text-xl">
          {t("blocks.testimonials.subtitle")}
        </p>
      </MotionPreset>

      <div className="w-full">
        <Marquee
          pauseOnHover
          duration={70}
          gap={2.25}
          className="overflow-visible overflow-x-clip pb-5 *:items-end"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-11">
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-2xl font-semibold">4.5</p>
              <StarIcon className="fill-amber-600 stroke-amber-600 dark:fill-amber-400 dark:stroke-amber-400" />
            </div>
            <p className="text-muted-foreground text-sm font-medium">
              {t("blocks.testimonials.starsLabel")}
            </p>
          </div>
          <PrimaryFlowButton size="lg" asChild>
            <Link href="#">
              {t("blocks.testimonials.viewAll")}
              <ExternalLinkIcon />
            </Link>
          </PrimaryFlowButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
