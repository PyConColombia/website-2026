"use client";

import { Switch as SwitchPrimitive } from "radix-ui";

import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

const TRACK =
  "relative inline-flex h-8 w-[4rem] shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-[#7c6aed] px-[3px] shadow-xs outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-[#7c6aed]/35 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";

const THUMB =
  "pointer-events-none relative z-10 block size-5 shrink-0 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-out data-[state=checked]:translate-x-[calc(4rem-6px-1.25rem)] data-[state=unchecked]:translate-x-0";

type LanguageSwitchProps = {
  className?: string;
};

const LanguageSwitch = ({ className }: LanguageSwitchProps) => {
  const { locale, setLocale } = useLanguage();
  const isEnglish = locale === "en";

  return (
    <div
      className={cn(
        "ring-secondary/60 relative isolate inline-flex w-fit overflow-hidden rounded-full ring-2 align-middle",
        className,
      )}
    >
      <SwitchPrimitive.Root
        checked={isEnglish}
        onCheckedChange={(checked) => setLocale(checked ? "en" : "es")}
        aria-label={
          isEnglish ? "Site language: English" : "Site language: Spanish"
        }
        className={TRACK}
      >
        <span
          className="pointer-events-none absolute inset-0 z-0 flex items-center text-[0.55rem] font-semibold tracking-wide text-white select-none"
          aria-hidden
        >
          {isEnglish ? (
            <span className="pl-2">EN</span>
          ) : (
            <span className="ml-auto pr-2">ES</span>
          )}
        </span>
        <SwitchPrimitive.Thumb className={THUMB} />
      </SwitchPrimitive.Root>
    </div>
  );
};

export { LanguageSwitch };
