"use client";

import { Link2Icon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "@/contexts/language-context";
import { getSiteUrl } from "@/lib/site-seo";
import { cn } from "@/lib/utils";

type ShareLinkButtonProps = {
  path: string;
  className?: string;
};

const ShareLinkButton = ({ path, className }: ShareLinkButtonProps) => {
  const { t } = useTranslations();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 2000);

    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const handleShare = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const url = `${getSiteUrl()}${path}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      window.prompt(t("blocks.common.share"), url);
    }
  };

  return (
    <Tooltip open={copied ? true : undefined}>
      <TooltipTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className={cn(
            "pointer-events-auto size-8 rounded-full shadow-sm",
            className,
          )}
          onClick={handleShare}
          aria-label={t("blocks.common.share")}
        >
          <Link2Icon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        {copied ? t("blocks.common.shareCopied") : t("blocks.common.share")}
      </TooltipContent>
    </Tooltip>
  );
};

export default ShareLinkButton;
