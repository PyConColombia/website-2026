"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";

const sponsorDeckUrl =
  "mailto:sponsors@pycon.co?subject=PyCon%20Colombia%202026%20Sponsorship";

const SponsorBecomeSection = () => {
  const { t } = useTranslations();

  return (
    <section className="px-4 pb-8 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 40 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg border bg-card px-5 py-8 text-center shadow-sm sm:px-8 sm:py-10 lg:px-12">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {t("blocks.sponsorDetailPage.becomeSponsorTitle")}
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-7">
              {t("blocks.sponsorDetailPage.becomeSponsorLead")}
            </p>
            <div className="mt-6 flex justify-center">
              <PrimaryFlowButton size="lg" asChild>
                <Link href={sponsorDeckUrl}>
                  {t("blocks.sponsors.cta")}
                  <ArrowRightIcon />
                </Link>
              </PrimaryFlowButton>
            </div>
          </div>
        </MotionPreset>
      </div>
    </section>
  );
};

export default SponsorBecomeSection;
