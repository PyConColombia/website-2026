"use client";

import { CalendarDaysIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

type YearSelectProps = {
  years: readonly string[];
  onValueChange: (year: string) => void;
};

const YearSelect = ({ years, onValueChange }: YearSelectProps) => {
  const { t } = useTranslations();

  return (
    <div className="ring-secondary/60 relative isolate w-fit overflow-hidden rounded-lg ring-2">
      <Select defaultValue="2026" onValueChange={onValueChange}>
        <SelectTrigger
          aria-label={t("header.selectYearAria")}
          title={t("header.pyconByYear")}
          className={cn(
            "hover:bg-secondary ring-0 shadow-none relative rounded-lg border border-transparent bg-secondary bg-clip-padding duration-500 text-shadow-xs",
            "size-10 justify-center gap-0 px-0 sm:h-10 sm:w-auto sm:justify-between sm:gap-2 sm:px-6 sm:text-base",
            "[&_[data-slot=select-value]]:hidden sm:[&_[data-slot=select-value]]:flex",
          )}
        >
          <SelectValue placeholder={t("header.yearPlaceholder")} />
          <CalendarDaysIcon className="size-4 shrink-0 sm:hidden" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default YearSelect;
