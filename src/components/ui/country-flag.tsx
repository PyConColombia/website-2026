"use client";

import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "@/contexts/language-context";
import { getCountryFlag } from "@/lib/country-flags";
import { assetPath, cn } from "@/lib/utils";

type CountryFlagProps = {
  country: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "size-7 text-xl",
  md: "size-9 text-2xl",
  lg: "size-11 text-3xl",
} as const;

const imageSizes = {
  sm: 28,
  md: 36,
  lg: 44,
} as const;

export function CountryFlag({
  country,
  size = "md",
  className,
}: CountryFlagProps) {
  const { t } = useTranslations();
  const flag = getCountryFlag(country);
  const alt = `${t("blocks.benefits.flagAltPrefix")} ${country}`;

  if (flag.image) {
    return (
      <span
        className={cn(
          "border-border/60 bg-background inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border shadow-xs",
          sizeClasses[size],
          className,
        )}
      >
        <Image
          src={assetPath(flag.image)}
          alt={alt}
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="size-full object-cover"
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center leading-none",
        sizeClasses[size],
        className,
      )}
      aria-hidden="true"
    >
      {flag.emoji}
    </span>
  );
}

type CountryLabelProps = {
  country: string;
  className?: string;
  size?: CountryFlagProps["size"];
};

export function CountryLabel({
  country,
  className,
  size = "md",
}: CountryLabelProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <CountryFlag country={country} size={size} />
      <span>{country}</span>
    </span>
  );
}

type CountryFlagTooltipProps = {
  country: string;
  className?: string;
  size?: CountryFlagProps["size"];
};

export function CountryFlagTooltip({
  country,
  className,
  size = "md",
}: CountryFlagTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-80",
            className,
          )}
          aria-label={country}
        >
          <CountryFlag country={country} size={size} />
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={6}>{country}</TooltipContent>
    </Tooltip>
  );
}
