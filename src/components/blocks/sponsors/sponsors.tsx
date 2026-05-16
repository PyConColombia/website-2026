import { ArrowRightIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { type SponsorTier, sponsorTiers } from "@/assets/data/sponsors";
import { Badge } from "@/components/ui/badge";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { MotionPreset } from "@/components/ui/motion-preset";
import { assetPath, cn } from "@/lib/utils";

const sponsorDeckUrl =
  "mailto:sponsors@pycon.co?subject=PyCon%20Colombia%202026%20Sponsorship";

const sizeStyles = {
  XL: {
    container: "w-full max-w-4xl",
    card: "min-h-48 px-8 py-10 sm:min-h-56 sm:px-10 sm:py-12",
    logo: "max-h-28 max-w-[min(100%,20rem)] sm:max-h-32 sm:max-w-[22rem]",
    imageWidth: 320,
    imageHeight: 112,
  },
  L: {
    container: "w-full max-w-3xl",
    card: "min-h-44 px-7 py-9 sm:min-h-52 sm:px-9 sm:py-10",
    logo: "max-h-24 max-w-[min(100%,18rem)] sm:max-h-28 sm:max-w-[20rem]",
    imageWidth: 288,
    imageHeight: 96,
  },
  M: {
    container: "w-full max-w-xl",
    card: "min-h-36 px-6 py-8 sm:min-h-44 sm:px-8 sm:py-9",
    logo: "max-h-16 max-w-52 sm:max-h-20 sm:max-w-56",
    imageWidth: 224,
    imageHeight: 72,
  },
  S: {
    container: "w-full max-w-xs sm:max-w-sm",
    card: "min-h-28 px-5 py-6 sm:min-h-32 sm:px-6 sm:py-7",
    logo: "max-h-11 max-w-40 sm:max-h-12 sm:max-w-44",
    imageWidth: 176,
    imageHeight: 48,
  },
  XS: {
    container: "w-full max-w-[10.5rem] sm:max-w-44",
    card: "min-h-24 px-4 py-5 sm:min-h-28",
    logo: "max-h-9 max-w-32 sm:max-h-10 sm:max-w-36",
    imageWidth: 144,
    imageHeight: 40,
  },
} satisfies Record<
  SponsorTier["size"],
  {
    container: string;
    card: string;
    logo: string;
    imageWidth: number;
    imageHeight: number;
  }
>;

type SponsorCardProps = {
  sponsor: SponsorTier["sponsors"][number];
  tier: SponsorTier;
};

const SponsorCard = ({ sponsor, tier }: SponsorCardProps) => {
  const styles = sizeStyles[tier.size];
  const isPlaceholder = !sponsor.logo;

  const inner = (
    <div
      className={cn(
        "bg-card flex items-center justify-center rounded-lg text-center shadow-sm transition-colors",
        isPlaceholder
          ? "border-border border border-dashed hover:border-primary/40 hover:bg-primary/5"
          : "border-border border",
        styles.card,
      )}
    >
      {sponsor.logo ? (
        <Image
          src={assetPath(sponsor.logo)}
          alt={sponsor.name}
          width={styles.imageWidth}
          height={styles.imageHeight}
          className={cn("h-auto w-auto object-contain", styles.logo)}
        />
      ) : (
        <p className={cn("text-foreground font-semibold", styles.logo)}>
          {sponsor.name}
        </p>
      )}
    </div>
  );

  if (sponsor.href) {
    return (
      <Link
        href={sponsor.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        {inner}
      </Link>
    );
  }

  return inner;
};

const TierRow = ({ tier, index }: { tier: SponsorTier; index: number }) => {
  const styles = sizeStyles[tier.size];
  const sponsors =
    tier.sponsors.length > 0 ? tier.sponsors : [{ name: "Open slot" }];
  const isMulti = sponsors.length > 1;

  return (
    <MotionPreset
      key={tier.title}
      fade
      blur
      slide={{ direction: "up", offset: 30 }}
      delay={index * 0.06}
      transition={{ duration: 0.55 }}
      className="flex flex-col"
    >
      <div className="mb-4 flex items-center gap-3">
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
          {tier.title}
        </h3>
      </div>

      <div
        className={cn(
          "flex w-full justify-center",
          tier.accent === "venue" &&
            "bg-primary/10 rounded-3xl p-5 sm:p-8 lg:p-10",
        )}
      >
        <div
          className={cn(
            isMulti
              ? "grid w-full max-w-2xl grid-cols-2 gap-4 sm:gap-5"
              : "flex justify-center",
          )}
        >
          {sponsors.map((sponsor) => (
            <div
              key={`${tier.title}-${sponsor.name}-${sponsor.href ?? ""}`}
              className={cn(!isMulti && styles.container)}
            >
              <SponsorCard sponsor={sponsor} tier={tier} />
            </div>
          ))}
        </div>
      </div>
    </MotionPreset>
  );
};

const Sponsors = () => {
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
              Sponsors
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
              Trusted by industry leaders
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
              PyCon Colombia is made possible through the generous support of
              organizations dedicated to advancing the Python ecosystem and
              fostering technological innovation in Latin America.
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
                  Become a sponsor
                  <ArrowRightIcon />
                </Link>
              </PrimaryFlowButton>
            </div>
          </MotionPreset>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col gap-10 sm:gap-12 lg:gap-14">
          {sponsorTiers.map((tier, index) => (
            <TierRow key={tier.title} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
