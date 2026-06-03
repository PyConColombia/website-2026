export type SponsorSize = "XL" | "L" | "M" | "S" | "XS";

export type SponsorTierKey =
  | "venue"
  | "platinum"
  | "gold"
  | "silverPlus"
  | "silver";

export type Sponsor = {
  name: string;
  slug?: string;
  logo?: string;
  href?: string;
};

export type SponsorTier = {
  tierKey: SponsorTierKey;
  /** Short label shown next to the rule (e.g. Venue → VENUE via CSS) */
  title: string;
  size: SponsorSize;
  description: string;
  sponsors: Sponsor[];
  /** Venue row: primary-colored label and tinted panel behind logos */
  accent?: "venue";
};

export const sponsorTiers: SponsorTier[] = [
  {
    tierKey: "venue",
    title: "Venue",
    accent: "venue",
    size: "XL",
    description:
      "Our main host and venue partner for the conference experience.",
    sponsors: [
      {
        name: "Universidad EAFIT",
        slug: "eafit",
        logo: "/images/sponsors/eafit.svg",
        href: "https://www.eafit.edu.co/",
      },
    ],
  },
  {
    tierKey: "platinum",
    title: "Platinum",
    size: "L",
    description:
      "Top-tier support for PyCon Colombia and the Python community.",
    sponsors: [
      {
        name: "Aimpoint Digital",
        slug: "aimpoint",
        logo: "/images/sponsors/aimpoint.svg",
        href: "https://aimpointdigital.com/",
      },
    ],
  },
  {
    tierKey: "gold",
    title: "Gold",
    size: "M",
    description:
      "High-impact partners supporting talks, community, and learning.",
    sponsors: [
      {
        name: "Loka",
        slug: "loka",
        logo: "/images/sponsors/loka.svg",
        href: "https://loka.com/",
      },
    ],
  },
  {
    tierKey: "silverPlus",
    title: "Silver +",
    size: "S",
    description: "Partners helping us strengthen the attendee experience.",
    sponsors: [
      {
        name: "Lovelytics",
        slug: "lovelytics",
        logo: "/images/sponsors/lovelytics.svg",
        href: "https://lovelytics.com/",
      },
    ],
  },
  {
    tierKey: "silver",
    title: "Silver",
    size: "S",
    description: "Community sponsors supporting the conference program.",
    sponsors: [
      {
        name: "Genlogs",
        slug: "genlogs",
        logo: "/images/sponsors/genlogs.svg",
        href: "https://genlogs.io/",
      },
      {
        name: "Provectus",
        slug: "provectus",
        logo: "/images/sponsors/provectus.svg",
        href: "https://provectus.com/",
      },
    ],
  },
];
