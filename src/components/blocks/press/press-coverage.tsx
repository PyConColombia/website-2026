"use client";

import {
  CalendarDaysIcon,
  ExternalLinkIcon,
  FileTextIcon,
  ImageIcon,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { PressCoverageItem } from "@/assets/data/press-coverage";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SecondaryFlowButton } from "@/components/ui/flow-button";
import { Input } from "@/components/ui/input";
import { MotionPreset } from "@/components/ui/motion-preset";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage, useTranslations } from "@/contexts/language-context";
import { assetPath } from "@/lib/utils";

const ALL_TAB = "all";

const typeIcons = {
  article: FileTextIcon,
  poster: ImageIcon,
} as const;

const PressCoverageCard = ({ item }: { item: PressCoverageItem }) => {
  const { locale } = useLanguage();
  const { t } = useTranslations();
  const dateLocale = locale === "es" ? "es-CO" : "en-US";
  const TypeIcon = typeIcons[item.type];

  return (
    <article className="group h-full">
      <Card className="h-full overflow-hidden shadow-none transition-all duration-300">
        <CardContent className="flex h-full flex-col gap-3.5">
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 overflow-hidden rounded-lg"
          >
            <Image
              src={assetPath(item.image)}
              alt={item.title[locale]}
              width={1225}
              height={729}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="flex items-center justify-between gap-1.5">
            <div className="text-muted-foreground flex items-center gap-1.5">
              <CalendarDaysIcon className="size-4.5" />
              <time dateTime={item.publishedAt}>
                {new Date(item.publishedAt).toLocaleDateString(dateLocale, {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </time>
            </div>
            <Badge className="bg-primary/10 text-primary gap-1 rounded-full text-sm">
              <TypeIcon className="size-3.5" />
              {t(`blocks.pressCoverage.types.${item.type}`)}
            </Badge>
          </div>

          <p className="text-muted-foreground text-sm font-medium">
            {item.outlet}
          </p>

          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="hover:text-primary line-clamp-3 text-lg font-medium transition-colors md:text-xl">
              {item.title[locale]}
            </h3>
          </Link>

          <p className="text-muted-foreground line-clamp-3">
            {item.description[locale]}
          </p>

          <div className="flex flex-1 items-end justify-end">
            <SecondaryFlowButton size="icon" asChild>
              <Link href={item.url} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="size-4" />
                <span className="sr-only">
                  {t("blocks.pressCoverage.readExternalSrOnly")}:{" "}
                  {item.title[locale]}
                </span>
              </Link>
            </SecondaryFlowButton>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

const PressCoverageGrid = ({ items }: { items: PressCoverageItem[] }) => {
  const { t } = useTranslations();

  if (items.length === 0) {
    return (
      <div className="text-muted-foreground flex min-h-100 flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
        <SearchIcon className="size-12 opacity-50" />
        <div className="space-y-2">
          <h3 className="text-foreground text-lg font-medium">
            {t("blocks.pressCoverage.emptyTitle")}
          </h3>
          <p className="text-sm">
            {t("blocks.pressCoverage.emptyDescription")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-md sm:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]"
        >
          <PressCoverageCard item={item} />
        </div>
      ))}
    </div>
  );
};

const PressCoverage = ({ items }: { items: PressCoverageItem[] }) => {
  const { t } = useTranslations();
  const [selectedTab, setSelectedTab] = useState(ALL_TAB);
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { value: ALL_TAB, label: t("blocks.pressCoverage.tabs.all") },
    { value: "article", label: t("blocks.pressCoverage.tabs.articles") },
    { value: "poster", label: t("blocks.pressCoverage.tabs.posters") },
  ];

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return items.filter((item) => {
      const matchesTab = selectedTab === ALL_TAB || item.type === selectedTab;

      if (!query) return matchesTab;

      const searchable = [
        item.outlet,
        item.title.en,
        item.title.es,
        item.description.en,
        item.description.es,
      ]
        .join(" ")
        .toLowerCase();

      return matchesTab && searchable.includes(query);
    });
  }, [items, searchQuery, selectedTab]);

  return (
    <section
      className="py-8 sm:py-16 lg:py-24"
      aria-labelledby="press-coverage-heading"
    >
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8">
        <MotionPreset
          fade
          slide={{ direction: "down", offset: 50 }}
          blur
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <p className="text-primary text-sm font-medium uppercase">
            {t("blocks.pressCoverage.eyebrow")}
          </p>

          <h1
            id="press-coverage-heading"
            className="text-2xl font-semibold md:text-3xl lg:text-4xl"
          >
            {t("blocks.pressCoverage.title")}
          </h1>

          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            {t("blocks.pressCoverage.subtitle")}
          </p>
        </MotionPreset>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="gap-8 lg:gap-16"
        >
          <MotionPreset
            fade
            slide={{ direction: "down" }}
            transition={{ duration: 0.5 }}
            inView={false}
            delay={0.2}
          >
            <div className="mb-2 flex justify-between gap-4 max-sm:flex-col sm:flex-wrap sm:items-center">
              <TabsList className="h-auto w-full flex-wrap gap-x-1 gap-y-2 p-1 sm:w-auto sm:justify-start">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="hover:bg-primary/10 dark:data-[state=active]:bg-background dark:data-[state=active]:border-background min-w-30 shrink-0 grow-0 basis-auto flex-none cursor-pointer px-4 text-base"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="relative w-full max-w-82 max-md:w-full max-md:max-w-89">
                <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                  <SearchIcon className="size-4" />
                  <span className="sr-only">
                    {t("blocks.pressCoverage.searchSrOnly")}
                  </span>
                </div>
                <Input
                  type="search"
                  placeholder={t("blocks.pressCoverage.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="peer h-10 ps-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
                />
              </div>
            </div>
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: "down" }}
            transition={{ duration: 0.5 }}
            inView={false}
            delay={0.4}
          >
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <PressCoverageGrid items={filteredItems} />
              </TabsContent>
            ))}
          </MotionPreset>
        </Tabs>
      </div>
    </section>
  );
};

export default PressCoverage;
