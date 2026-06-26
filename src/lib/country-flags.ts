export type CountryFlagSource = {
  image: string;
};

const COUNTRY_FLAG_MAP: Record<string, CountryFlagSource> = {
  Colombia: { image: "/images/flags/flag-co.svg" },
  Ecuador: { image: "/images/flags/flag-ec.svg" },
  Canada: { image: "/images/flags/flag-ca.svg" },
  Bolivia: { image: "/images/flags/flag-bo.svg" },
  Chile: { image: "/images/flags/flag-cl.svg" },
  Peru: { image: "/images/flags/flag-pe.svg" },
  Guatemala: { image: "/images/flags/flag-gt.svg" },
  Mexico: { image: "/images/flags/flag-mx.svg" },
  Uruguay: { image: "/images/flags/flag-uy.svg" },
  Venezuela: { image: "/images/flags/flag-ve.svg" },
  "United States": { image: "/images/flags/flag-us.svg" },
  India: { image: "/images/flags/flag-in.svg" },
  Romania: { image: "/images/flags/flag-ro.svg" },
  "Czech Republic": { image: "/images/flags/flag-cz.svg" },
  "United Kingdom": { image: "/images/flags/flag-gb.svg" },
  Brazil: { image: "/images/flags/flag-br.svg" },
  // Spanish locale aliases
  Rumanía: { image: "/images/flags/flag-ro.svg" },
  "República Checa": { image: "/images/flags/flag-cz.svg" },
  "Estados Unidos": { image: "/images/flags/flag-us.svg" },
  "Reino Unido": { image: "/images/flags/flag-gb.svg" },
  Brasil: { image: "/images/flags/flag-br.svg" },
  Perú: { image: "/images/flags/flag-pe.svg" },
  México: { image: "/images/flags/flag-mx.svg" },
};

const DEFAULT_FLAG: CountryFlagSource = {
  image: "/images/flags/flag-world.svg",
};

export function getCountryFlag(country: string): CountryFlagSource {
  return COUNTRY_FLAG_MAP[country.trim()] ?? DEFAULT_FLAG;
}
