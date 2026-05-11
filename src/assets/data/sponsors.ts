export type SponsorSize = 'XL' | 'L' | 'M' | 'S' | 'XS'

export type Sponsor = {
  name: string
  logo?: string
  href?: string
}

export type SponsorTier = {
  title: string
  size: SponsorSize
  description: string
  sponsors: Sponsor[]
}

export const sponsorTiers: SponsorTier[] = [
  {
    title: 'Venue Sponsor',
    size: 'XL',
    description: 'Our main host and venue partner for the conference experience.',
    sponsors: [
      {
        name: 'Universidad EAFIT',
        logo: '/images/sponsors/eafit.svg',
        href: 'https://www.eafit.edu.co/'
      }
    ]
  },
  {
    title: 'Platinum Sponsor',
    size: 'L',
    description: 'Top-tier support for PyCon Colombia and the Python community.',
    sponsors: [
      {
        name: 'Aimpoint Digital',
        logo: '/images/sponsors/aimpoint.svg',
        href: 'https://aimpointdigital.com/'
      }
    ]
  },
  {
    title: 'Gold Sponsor',
    size: 'M',
    description: 'High-impact partners supporting talks, community, and learning.',
    sponsors: [
      {
        name: 'Loka',
        logo: '/images/sponsors/loka.svg',
        href: 'https://loka.com/'
      }
    ]
  },
  {
    title: 'Silver + Sponsor',
    size: 'M',
    description: 'Partners helping us strengthen the attendee experience.',
    sponsors: [
      {
        name: 'Lovelytics',
        logo: '/images/sponsors/lovelytics.svg',
        href: 'https://lovelytics.com/'
      }
    ]
  },
  {
    title: 'Silver Sponsor',
    size: 'M',
    description: 'Community sponsors supporting the conference program.',
    sponsors: [
      {
        name: 'Genlogs',
        logo: '/images/sponsors/genlogs.svg',
        href: 'https://genlogs.io/'
      },
      {
        name: 'Provectus',
        logo: '/images/sponsors/provectus.svg',
        href: 'https://provectus.com/'
      }
    ]
  },
  {
    title: 'Bronze Sponsor',
    size: 'S',
    description: 'Supporters helping make PyCon Colombia more accessible.',
    sponsors: []
  },
  {
    title: 'Start up Sponsor',
    size: 'S',
    description: 'Emerging companies joining the Python ecosystem.',
    sponsors: []
  },
  {
    title: 'Partner',
    size: 'XS',
    description: 'Community allies, media partners, and supporting organizations.',
    sponsors: []
  }
]
