export type CountryFlagSource = {
  emoji: string;
  image?: string;
};

const COUNTRY_FLAG_MAP: Record<string, CountryFlagSource> = {
  Colombia: { emoji: "🇨🇴" },
  Ecuador: { emoji: "🇪🇨" },
  Canada: { emoji: "🇨🇦" },
  Bolivia: { emoji: "🇧🇴" },
  Peru: { emoji: "🇵🇪" },
  "United States": {
    emoji: "🇺🇸",
    image: "/images/flags/flag-us.svg",
  },
};

export function getCountryFlag(country: string): CountryFlagSource {
  return COUNTRY_FLAG_MAP[country.trim()] ?? { emoji: "🌎" };
}
