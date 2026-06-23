"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/contexts/language-context";
import {
  getTalkLevelHref,
  type TalkLevel,
  talkLevelStyles,
} from "@/lib/talk-levels";
import { cn } from "@/lib/utils";

type TalkLevelBadgeProps = {
  level: TalkLevel;
  asLink?: boolean;
  className?: string;
  linkClassName?: string;
};

const TalkLevelBadge = ({
  level,
  asLink = false,
  className,
  linkClassName,
}: TalkLevelBadgeProps) => {
  const { t } = useTranslations();

  const badge = (
    <Badge
      variant="outline"
      className={cn(talkLevelStyles[level].badge, className)}
    >
      {t("blocks.talks.levelLabel")} {t(`blocks.talks.levels.${level}`)}
    </Badge>
  );

  if (asLink) {
    return (
      <Link
        href={getTalkLevelHref(level)}
        className={cn(
          "rounded-full transition-opacity hover:opacity-90",
          linkClassName,
        )}
      >
        {badge}
      </Link>
    );
  }

  return badge;
};

export default TalkLevelBadge;
