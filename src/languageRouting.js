import { DEFAULT_LANGUAGE } from "./translation";

const SPANISH_PREFIX = "/es";

export function getLanguageFromPathname(pathname) {
  const normalizedPathname =
    typeof pathname === "string" ? pathname.toLowerCase() : "/";

  if (
    normalizedPathname === SPANISH_PREFIX ||
    normalizedPathname.startsWith(`${SPANISH_PREFIX}/`)
  ) {
    return "es";
  }

  return DEFAULT_LANGUAGE;
}

export function stripLanguagePrefix(pathname) {
  const rawPathname = typeof pathname === "string" ? pathname : "/";

  if (rawPathname === SPANISH_PREFIX) {
    return "/";
  }

  if (rawPathname.startsWith(`${SPANISH_PREFIX}/`)) {
    const stripped = rawPathname.slice(SPANISH_PREFIX.length);
    return stripped.length > 0 ? stripped : "/";
  }

  return rawPathname || "/";
}

export function localizePath(pathname, language = DEFAULT_LANGUAGE) {
  const normalizedPath = stripLanguagePrefix(pathname);

  if (language === "es") {
    return normalizedPath === "/"
      ? `${SPANISH_PREFIX}/`
      : `${SPANISH_PREFIX}${normalizedPath}`;
  }

  return normalizedPath;
}
