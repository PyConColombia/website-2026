"use client";

import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/contexts/language-context";
import { type TalkFormat, talkFormatStyles } from "@/lib/talk-formats";
import { cn } from "@/lib/utils";

type TalkFormatBadgeProps = {
  format: TalkFormat;
  className?: string;
};

const TalkFormatBadge = ({ format, className }: TalkFormatBadgeProps) => {
  const { t } = useTranslations();

  return (
    <Badge
      variant="outline"
      className={cn(talkFormatStyles[format].badge, className)}
    >
      {t("blocks.talks.formatLabel")} {t(`blocks.talks.formats.${format}`)}
    </Badge>
  );
};

export default TalkFormatBadge;
