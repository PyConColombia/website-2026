"use client";

import { CalendarDaysIcon } from "lucide-react";

import { scheduleData } from "@/assets/data/schedule";
import ScheduleCard from "@/components/shadcn-studio/blocks/user-schedule-02/user-schedule-02";
import { Badge } from "@/components/ui/badge";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";

const Schedule = () => {
  const { t } = useTranslations();

  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-12 lg:px-8">
        <div className="space-y-4 text-center">
          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="bg-background text-sm font-normal"
            >
              {t("blocks.scheduleUi.eyebrow")}
            </Badge>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.2}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mx-auto max-w-3xl text-3xl font-semibold md:text-4xl lg:text-5xl">
              {t("blocks.scheduleUi.pageTitle")}
            </h1>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              {t("blocks.scheduleUi.pageDescription")}
            </p>
          </MotionPreset>
        </div>

        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 50 }}
          delay={0.6}
          transition={{ duration: 0.5 }}
        >
          <ScheduleCard scheduleData={scheduleData} />
        </MotionPreset>

        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 50 }}
          delay={0.8}
          transition={{ duration: 0.5 }}
        >
          <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
            <CalendarDaysIcon className="size-4" />
            <span>{t("blocks.scheduleUi.footerNote")}</span>
          </div>
        </MotionPreset>
      </div>
    </section>
  );
};

export default Schedule;
