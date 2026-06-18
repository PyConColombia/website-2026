"use client";

import { CalendarDaysIcon, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HeaderNavigation,
  HeaderNavigationSmallScreen,
  type Navigation,
} from "@/components/layout/header-navigation";
import { LanguageSwitch } from "@/components/layout/language-switch";
import YearSelect from "@/components/layout/year-select";
import {
  PrimaryFlowButton,
  SecondaryFlowButton,
} from "@/components/ui/flow-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "@/contexts/language-context";
import { SCHEDULE_URL } from "@/lib/site-links";

import { assetPath, cn } from "@/lib/utils";

type HeaderProps = {
  navigationData: Navigation[];
  className?: string;
};

const Header = ({ navigationData, className }: HeaderProps) => {
  const { t } = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const ticketsUrl =
    "https://www.eventbrite.co/e/pycon-colombia-2026-tickets-1986172567616?aff=ebdssbdestsearch";
  const years = [
    "2026",
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
  ] as const;

  const openYearSite = (year: string) => {
    const url = `https://${year}.pycon.co/`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 w-full transition-all duration-300",
        {
          "bg-card/75 backdrop-blur-sm": isScrolled,
        },
        className,
      )}
    >
      <div
        className="flex h-full items-center justify-between gap-4 border-b px-4 sm:px-6 lg:px-8"
        style={{ fontFamily: "var(--font-button)" }}
      >
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="bg-primary ring-primary/30 size-8 overflow-hidden rounded-full ring-2">
              <Image
                src={assetPath("/favicon/apple-touch-icon.png")}
                alt={t("blocks.headerUi.brandAlt")}
                width={32}
                height={32}
                className="size-full object-contain"
                priority
              />
            </div>
            <span className="text-primary max-[430px]:hidden text-xl tracking-wide">
              PYCON COLOMBIA 2026
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <HeaderNavigation
          navigationData={navigationData}
          navigationClassName='[&_[data-slot="navigation-menu-list"]]:gap-1'
        />

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <YearSelect years={years} onValueChange={openYearSite} />
            <LanguageSwitch />
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <PrimaryFlowButton size="lg" asChild>
              <Link href={ticketsUrl} target="_blank" rel="noopener noreferrer">
                {t("header.getTickets")}
              </Link>
            </PrimaryFlowButton>
            <SecondaryFlowButton size="lg" asChild>
              <Link
                href={SCHEDULE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("header.seeSchedule")}
              </Link>
            </SecondaryFlowButton>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <SecondaryFlowButton size="icon-lg" asChild>
                  <Link
                    href={SCHEDULE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarDaysIcon />
                    <span className="sr-only">
                      {t("header.seeScheduleSrOnly")}
                    </span>
                  </Link>
                </SecondaryFlowButton>
              </TooltipTrigger>
              <TooltipContent>{t("header.seeScheduleTooltip")}</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <PrimaryFlowButton size="icon-lg" asChild>
                  <Link
                    href={ticketsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon />
                    <span className="sr-only">
                      {t("header.getTicketsSrOnly")}
                    </span>
                  </Link>
                </PrimaryFlowButton>
              </TooltipTrigger>
              <TooltipContent>{t("header.getTicketsTooltip")}</TooltipContent>
            </Tooltip>
          </div>

          <HeaderNavigationSmallScreen navigationData={navigationData} />
        </div>
      </div>
    </header>
  );
};

export default Header;
