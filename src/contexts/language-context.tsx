"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { SITE_LOCALE_COOKIE_NAME } from "@/lib/site-locale-constants";
import { type SiteLocale, siteMessages } from "@/lib/site-messages";

export type { SiteLocale } from "@/lib/site-messages";

const STORAGE_KEY = SITE_LOCALE_COOKIE_NAME;

type LanguageContextValue = {
  locale: SiteLocale;
  setLocale: (locale: SiteLocale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyLocaleToDocument(locale: SiteLocale) {
  document.documentElement.lang = locale === "en" ? "en" : "es";
}

function readLocaleFromCookie(): SiteLocale | null {
  if (typeof document === "undefined") {
    return null;
  }
  const parts = `; ${document.cookie}`.split(`; ${SITE_LOCALE_COOKIE_NAME}=`);
  if (parts.length !== 2) {
    return null;
  }
  const value = parts.pop()?.split(";").shift();
  return value === "es" || value === "en" ? value : null;
}

function persistLocaleCookie(locale: SiteLocale) {
  // biome-ignore lint/suspicious/noDocumentCookie: mirrors locale for server `generateMetadata` on hard navigations.
  document.cookie = `${SITE_LOCALE_COOKIE_NAME}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SiteLocale>("en");

  useEffect(() => {
    const fromStorage = localStorage.getItem(STORAGE_KEY);
    const fromCookie = readLocaleFromCookie();
    const raw: SiteLocale =
      fromStorage === "es" || fromStorage === "en"
        ? fromStorage
        : (fromCookie ?? "en");
    setLocaleState(raw);
    applyLocaleToDocument(raw);
    persistLocaleCookie(raw);
  }, []);

  const setLocale = useCallback((next: SiteLocale) => {
    setLocaleState(next);
    applyLocaleToDocument(next);
    localStorage.setItem(STORAGE_KEY, next);
    persistLocaleCookie(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

function readMessage(root: unknown, path: string): unknown {
  const parts = path.split(".");
  let cur: unknown = root;
  for (const p of parts) {
    if (cur !== null && typeof cur === "object" && p in cur) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return cur;
}

/** Dot-path lookups into {@link siteMessages} for the active locale (e.g. `nav.home`, `footer.legal`). */
export function useTranslations() {
  const { locale } = useLanguage();

  return useMemo(() => {
    const table = siteMessages[locale];

    function t(path: string): string {
      const value = readMessage(
        table as unknown as Record<string, unknown>,
        path,
      );
      return typeof value === "string" ? value : path;
    }

    function ta(path: string): string[] {
      const value = readMessage(
        table as unknown as Record<string, unknown>,
        path,
      );
      return Array.isArray(value) ? (value as string[]) : [];
    }

    return { t, ta, locale };
  }, [locale]);
}
