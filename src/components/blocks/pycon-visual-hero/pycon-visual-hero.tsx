"use client";

import FloatingLogo from "@/components/blocks/pycon-visual-hero/floating-logo";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";

const PyconVisualHero = () => {
  const { t } = useTranslations();

  return (
    <section
      aria-label={t("heroVisual.ariaLabel")}
      className="relative isolate min-h-[560px] overflow-hidden bg-background px-4 py-8 sm:min-h-[650px] sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="absolute left-[calc(12%-50px)] top-8 size-11 rounded-full bg-[radial-gradient(88.84%_88.84%_at_63.5%_12.5%,#FFF_0%,#C2CCFF_100%)] blur-[3.1469154357910156px] sm:size-15" />
      <div className="absolute left-[calc(9%-50px)] top-24 size-6 rounded-full bg-[radial-gradient(88.84%_88.84%_at_63.5%_12.5%,#FFF_0%,#C2CCFF_100%)] blur-[3.1469154357910156px] sm:size-8" />

      <FloatingLogo />

      <div className="relative mx-auto flex min-h-[360px] w-full max-w-full items-center justify-center max-sm:min-h-[440px] sm:min-h-[420px] lg:min-h-[460px]">
        <div className="relative flex w-full max-w-full flex-col max-sm:min-h-[400px] max-sm:justify-between">
          <MotionPreset
            aria-hidden="true"
            fade
            blur
            slide={{ direction: "down", offset: 45 }}
            transition={{ duration: 0.65 }}
            inView={false}
            delay={0.35}
            className="[font-family:var(--font-display)] mx-auto w-full max-w-full select-none bg-linear-to-b from-[#BCC4F4] via-[#EEEEF7] to-[#BCC4F4] bg-clip-text px-1 text-center text-[clamp(4.75rem,24vw,27.3rem)] font-bold leading-[0.9] tracking-[0.02em] text-transparent sm:text-[clamp(9rem,38vw,27.3rem)] sm:leading-none sm:tracking-[0.04em]"
          >
            PYCON
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: "down", offset: 24 }}
            transition={{ duration: 0.55 }}
            inView={false}
            delay={0.55}
            className="[font-family:var(--font-button)] relative z-40 mx-auto w-full max-w-sm px-3 text-center text-xl leading-[1.2] text-foreground max-sm:mt-auto max-sm:pb-3 max-sm:pt-8 sm:absolute sm:bottom-[4px] sm:left-[140px] sm:mt-0 sm:w-max sm:max-w-none sm:px-0 sm:text-left sm:text-[29px] sm:leading-[1.05]"
          >
            <p>{t("heroVisual.locationLine1")}</p>
            <p>{t("heroVisual.locationLine2")}</p>
          </MotionPreset>
        </div>

        <MotionPreset
          fade
          zoom={{ initialScale: 0.82 }}
          slide={{ direction: "down", offset: 18 }}
          transition={{ duration: 0.55 }}
          inView={false}
          delay={0.7}
          className="absolute right-[6%] bottom-[52%] z-30 flex size-14 items-center justify-center sm:bottom-[63px] sm:right-[calc(10%+15px)] sm:size-24 lg:right-[calc(8%+15px)]"
        >
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(88.84%_88.84%_at_63.5%_12.5%,#FFF_0%,#B6C0F4_100%)] shadow-[0_14px_24px_rgba(97,85,245,0.22)] blur-[2.387160062789917px]" />
          <span className="[font-family:var(--font-display)] relative z-10 text-4xl font-bold leading-none text-[#7D8BD3] drop-shadow-[0_5px_5px_rgba(125,139,211,0.35)] sm:text-6xl">
            26
          </span>
        </MotionPreset>

        <MotionPreset
          fade
          transition={{ duration: 0.55 }}
          inView={false}
          delay={0.8}
          className="absolute bottom-1 left-1/2 z-10 h-5 w-28 -translate-x-1/2 rounded-full bg-[#8991d8]/30 blur-xl sm:bottom-7 sm:w-36"
        />
      </div>
    </section>
  );
};

export default PyconVisualHero;
