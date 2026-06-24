"use client";

import { ArrowRightIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { type RefObject, useEffect, useMemo, useRef, useState } from "react";

import { type SponsorTier, sponsorTiers } from "@/assets/data/sponsors";
import { Badge } from "@/components/ui/badge";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { MotionPreset } from "@/components/ui/motion-preset";
import { useTranslations } from "@/contexts/language-context";
import { assetPath, cn } from "@/lib/utils";

const sponsorDeckUrl =
  "mailto:sponsors@pycon.co?subject=PyCon%20Colombia%202026%20Sponsorship";

const OPEN_SLOT_NAME = "Open slot";

const SPONSOR_GRID_GAP_PX = 16;
const SPONSOR_GRID_GAP_PX_SM = 20;
const SPONSOR_GRID_SM_BREAKPOINT = 640;

const sizeStyles = {
  XL: {
    container: "mx-auto w-full max-w-5xl shrink-0",
    gridMaxWidth: "max-w-5xl",
    card: "min-h-52 px-9 py-11 sm:min-h-64 sm:px-11 sm:py-14",
    logo: "max-h-32 max-w-[min(100%,22rem)] sm:max-h-36 sm:max-w-[24rem]",
    imageWidth: 360,
    imageHeight: 128,
    layoutWidth: 1024,
    layoutWidthSm: 1024,
    minLayoutWidth: 1024,
    minLayoutWidthSm: 1024,
  },
  L: {
    container: "mx-auto w-full max-w-4xl shrink-0",
    gridMaxWidth: "max-w-4xl",
    card: "min-h-48 px-8 py-10 sm:min-h-56 sm:px-10 sm:py-12",
    logo: "max-h-28 max-w-[min(100%,20rem)] sm:max-h-32 sm:max-w-[22rem]",
    imageWidth: 320,
    imageHeight: 112,
    layoutWidth: 896,
    layoutWidthSm: 896,
    minLayoutWidth: 896,
    minLayoutWidthSm: 896,
  },
  M: {
    container: "mx-auto w-full max-w-2xl shrink-0",
    gridMaxWidth: "max-w-2xl",
    card: "min-h-40 px-7 py-9 sm:min-h-48 sm:px-9 sm:py-10",
    logo: "max-h-20 max-w-56 sm:max-h-24 sm:max-w-64",
    imageWidth: 256,
    imageHeight: 84,
    layoutWidth: 672,
    layoutWidthSm: 672,
    minLayoutWidth: 672,
    minLayoutWidthSm: 672,
  },
  S: {
    container: "mx-auto w-full max-w-52 shrink-0 sm:max-w-60",
    gridMaxWidth: "max-w-2xl",
    card: "min-h-28 px-5 py-6 sm:min-h-32 sm:px-6 sm:py-7",
    logo: "max-h-12 max-w-44 sm:max-h-14 sm:max-w-48",
    imageWidth: 192,
    imageHeight: 52,
    layoutWidth: 208,
    layoutWidthSm: 240,
    minLayoutWidth: 192,
    minLayoutWidthSm: 220,
  },
  XS: {
    container: "mx-auto w-full max-w-[10.5rem] shrink-0 sm:max-w-44",
    gridMaxWidth: "max-w-lg",
    card: "min-h-24 px-4 py-5 sm:min-h-28",
    logo: "max-h-9 max-w-32 sm:max-h-10 sm:max-w-36",
    imageWidth: 144,
    imageHeight: 40,
    layoutWidth: 168,
    layoutWidthSm: 176,
    minLayoutWidth: 168,
    minLayoutWidthSm: 176,
  },
} satisfies Record<
  SponsorTier["size"],
  {
    container: string;
    gridMaxWidth: string;
    card: string;
    logo: string;
    imageWidth: number;
    imageHeight: number;
    layoutWidth: number;
    layoutWidthSm: number;
    minLayoutWidth: number;
    minLayoutWidthSm: number;
  }
>;

type TierStyle = (typeof sizeStyles)[SponsorTier["size"]];

/** Gold+ uses M-tier logos; Platinum sits between Venue (XL) and Gold+ (M). */
function getTierStyles(tier: SponsorTier): TierStyle {
  if (tier.tierKey === "platinum") {
    return {
      container: "mx-auto w-full min-w-0 shrink-0",
      gridMaxWidth: "max-w-3xl",
      card: "min-h-44 px-7 py-9 sm:min-h-52 sm:px-9 sm:py-11",
      logo: "max-h-24 max-w-[min(100%,18rem)] sm:max-h-28 sm:max-w-[20rem]",
      imageWidth: 288,
      imageHeight: 96,
      layoutWidth: 320,
      layoutWidthSm: 360,
      minLayoutWidth: 280,
      minLayoutWidthSm: 320,
    };
  }

  const base = sizeStyles[tier.size];

  if (tier.tierKey !== "goldPlus") {
    return base;
  }

  return {
    ...base,
    container: "mx-auto w-fit shrink-0",
    gridMaxWidth: "max-w-5xl",
    minLayoutWidth: 240,
    minLayoutWidthSm: 260,
  };
}

function shouldFitContainerToContent(tier: SponsorTier, isMulti: boolean) {
  if (tier.tierKey === "goldPlus") {
    return true;
  }

  return !isMulti;
}

function chunkIntoRows<T>(items: T[], columns: number): T[][] {
  const rows: T[][] = [];

  for (let index = 0; index < items.length; index += columns) {
    rows.push(items.slice(index, index + columns));
  }

  return rows;
}

function useSponsorColumnsPerRow(
  containerRef: RefObject<HTMLDivElement | null>,
  minLayoutWidth: number,
  minLayoutWidthSm: number,
) {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const update = () => {
      const width = container.getBoundingClientRect().width;
      const isSm = window.matchMedia(
        `(min-width: ${SPONSOR_GRID_SM_BREAKPOINT}px)`,
      ).matches;
      const itemWidth = isSm ? minLayoutWidthSm : minLayoutWidth;
      const gap = isSm ? SPONSOR_GRID_GAP_PX_SM : SPONSOR_GRID_GAP_PX;

      setColumns(Math.max(1, Math.floor((width + gap) / (itemWidth + gap))));
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(container);
    window.addEventListener("resize", update);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [containerRef, minLayoutWidth, minLayoutWidthSm]);

  return columns;
}

type SponsorCardProps = {
  sponsor: SponsorTier["sponsors"][number];
  tier: SponsorTier;
};

const SponsorCard = ({
  sponsor,
  tier,
  sponsorDisplayName,
}: SponsorCardProps & { sponsorDisplayName: string }) => {
  const styles = getTierStyles(tier);
  const isPlaceholder = !sponsor.logo;

  const inner = (
    <div
      className={cn(
        "bg-card flex w-full items-center justify-center rounded-lg text-center shadow-sm transition-colors",
        isPlaceholder
          ? "border-border border border-dashed hover:border-primary/40 hover:bg-primary/5"
          : "border-border border",
        styles.card,
      )}
    >
      {sponsor.logo ? (
        <Image
          src={assetPath(sponsor.logo)}
          alt={sponsorDisplayName}
          width={styles.imageWidth}
          height={styles.imageHeight}
          className={cn("h-auto w-auto object-contain", styles.logo)}
        />
      ) : (
        <p className={cn("text-foreground font-semibold", styles.logo)}>
          {sponsorDisplayName}
        </p>
      )}
    </div>
  );

  if (sponsor.slug) {
    return (
      <Link href={`/sponsors/${sponsor.slug}`} className="block w-full">
        {inner}
      </Link>
    );
  }

  return inner;
};

const TierRow = ({ tier, index }: { tier: SponsorTier; index: number }) => {
  const { t } = useTranslations();
  const gridRef = useRef<HTMLDivElement>(null);
  const styles = getTierStyles(tier);
  const sponsors =
    tier.sponsors.length > 0 ? tier.sponsors : [{ name: OPEN_SLOT_NAME }];
  const isMulti = sponsors.length > 1;
  const columns = Math.min(
    useSponsorColumnsPerRow(
      gridRef,
      styles.minLayoutWidth,
      styles.minLayoutWidthSm,
    ),
    sponsors.length,
  );
  const sponsorRows = useMemo(() => {
    if (tier.tierKey === "goldPlus" && isMulti) {
      return [sponsors];
    }

    return chunkIntoRows(sponsors, columns);
  }, [columns, isMulti, sponsors, tier.tierKey]);
  const tierTitle = t(`blocks.sponsors.tiers.${tier.tierKey}.title`);

  return (
    <MotionPreset
      key={tier.tierKey}
      fade
      blur
      slide={{ direction: "up", offset: 30 }}
      delay={index * 0.06}
      transition={{ duration: 0.55 }}
      className="flex flex-col"
    >
      <div className="mb-4 flex items-center justify-center gap-3">
        <span
          className={cn(
            "h-px w-8 shrink-0",
            tier.accent === "venue" ? "bg-primary" : "bg-border",
          )}
          aria-hidden
        />
        <h3
          className={cn(
            "text-xs font-semibold tracking-[0.2em] uppercase",
            tier.accent === "venue" ? "text-primary" : "text-muted-foreground",
          )}
        >
          {tierTitle}
        </h3>
        <span
          className={cn(
            "h-px w-8 shrink-0",
            tier.accent === "venue" ? "bg-primary" : "bg-border",
          )}
          aria-hidden
        />
      </div>

      <div
        className={cn(
          "flex w-full justify-center",
          tier.accent === "venue" && "rounded-3xl p-5 sm:p-8 lg:p-10",
        )}
      >
        <div
          ref={gridRef}
          className={cn(
            "mx-auto flex w-full flex-col gap-4 sm:gap-5",
            isMulti && tier.tierKey !== "goldPlus" && styles.gridMaxWidth,
            !isMulti && "max-w-full",
          )}
        >
          {sponsorRows.map((row, rowIndex) => {
            const isFullRow = row.length === columns;
            const isGoldPlusRow = tier.tierKey === "goldPlus" && isMulti;

            const rowContent = row.map((sponsor) => {
              const sponsorDisplayName =
                sponsor.name === OPEN_SLOT_NAME
                  ? t("blocks.sponsors.openSlot")
                  : sponsor.name;

              return (
                <div
                  key={`${tier.tierKey}-${sponsor.name}-${sponsor.href ?? ""}`}
                  className={cn(
                    styles.container,
                    shouldFitContainerToContent(tier, isMulti) &&
                      tier.tierKey !== "goldPlus" &&
                      "sm:w-fit",
                  )}
                >
                  <SponsorCard
                    sponsor={sponsor}
                    tier={tier}
                    sponsorDisplayName={sponsorDisplayName}
                  />
                </div>
              );
            });

            if (isGoldPlusRow) {
              return (
                <div
                  key={`${tier.tierKey}-row-${rowIndex}`}
                  className="flex w-full flex-wrap justify-center gap-4 sm:gap-5"
                >
                  {rowContent}
                </div>
              );
            }

            return (
              <div
                key={`${tier.tierKey}-row-${rowIndex}`}
                className={cn(
                  "w-full gap-4 sm:gap-5",
                  isFullRow
                    ? "grid justify-items-center"
                    : "flex flex-wrap justify-center",
                )}
                style={
                  isFullRow
                    ? {
                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                      }
                    : undefined
                }
              >
                {rowContent}
              </div>
            );
          })}
        </div>
      </div>
    </MotionPreset>
  );
};

const Sponsors = () => {
  const { t } = useTranslations();

  return (
    <section id="sponsors" className="overflow-hidden py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 md:space-y-16 lg:px-8">
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
              {t("blocks.sponsors.badge")}
            </Badge>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.2}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mx-auto max-w-3xl text-2xl font-semibold md:text-3xl lg:text-4xl">
              {t("blocks.sponsors.title")}
            </h2>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.4}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              {t("blocks.sponsors.subtitle")}
            </p>
          </MotionPreset>

          <MotionPreset
            fade
            blur
            slide={{ direction: "up", offset: 50 }}
            delay={0.6}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center">
              <PrimaryFlowButton size="lg" asChild>
                <Link href={sponsorDeckUrl}>
                  {t("blocks.sponsors.cta")}
                  <ArrowRightIcon />
                </Link>
              </PrimaryFlowButton>
            </div>
          </MotionPreset>
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 sm:gap-12 lg:gap-14">
          {sponsorTiers.map((tier, index) => (
            <TierRow key={tier.tierKey} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
