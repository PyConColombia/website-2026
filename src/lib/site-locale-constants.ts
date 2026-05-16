import type { SiteLocale } from "@/lib/site-messages";

/** Cookie/localStorage key for site language — used in `language-context.tsx`. */
export const SITE_LOCALE_COOKIE_NAME = "pycon-colombia-site-lang";

/**
 * Locale for server-rendered metadata and JSON-LD during static generation.
 * Static routes cannot call `cookies()`; UI copy still follows the client language toggle.
 */
export const STATIC_PRERENDER_LOCALE = "en" as const satisfies SiteLocale;
