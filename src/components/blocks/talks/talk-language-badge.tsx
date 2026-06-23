"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/contexts/language-context";
import {
  getTalkLanguageHref,
  type TalkLanguage,
  talkLanguageStyles,
} from "@/lib/talk-languages";
import { cn } from "@/lib/utils";

type TalkLanguageBadgeProps = {
  language: TalkLanguage;
  asLink?: boolean;
  className?: string;
  linkClassName?: string;
};

const TalkLanguageBadge = ({
  language,
  asLink = false,
  className,
  linkClassName,
}: TalkLanguageBadgeProps) => {
  const { t } = useTranslations();

  const badge = (
    <Badge
      variant="outline"
      className={cn(talkLanguageStyles[language].badge, className)}
    >
      {t("blocks.talks.languageLabel")}{" "}
      {t(`blocks.talks.languages.${language}`)}
    </Badge>
  );

  if (asLink) {
    return (
      <Link
        href={getTalkLanguageHref(language)}
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

export default TalkLanguageBadge;
