"use client";

import Link from "next/link";
import Icon404 from "@/assets/svg/404";
import { PrimaryFlowButton } from "@/components/ui/flow-button";
import { useTranslations } from "@/contexts/language-context";

const NotFound = () => {
  const { t } = useTranslations();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-9 p-6">
      <Icon404 className="h-auto w-full sm:h-120 sm:w-146" />
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-muted-foreground text-xl sm:text-2xl">
          {t("blocks.notFound.message")}
        </p>
        <PrimaryFlowButton size="lg" asChild>
          <Link href="/">{t("blocks.notFound.homeLink")}</Link>
        </PrimaryFlowButton>
      </div>
    </div>
  );
};

export default NotFound;
