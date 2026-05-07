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
    name: 'EAFIT - Nodo',
    logo: '/images/sponsors/eafit.svg',
    href: 'https://sponsor.com'
    }
  ]
  },
  {
    title: 'Platinum Sponsor',
    size: 'L',
    description: 'Top-tier support for PyCon Colombia and the Python community.',
    sponsors: []
  },
  {
    title: 'Gold Sponsor',
    size: 'M',
    description: 'High-impact partners supporting talks, community, and learning.',
    sponsors: []
  },
  {
    title: 'Silver + Sponsor',
    size: 'M',
    description: 'Partners helping us strengthen the attendee experience.',
    sponsors: []
  },
  {
    title: 'Silver Sponsor',
    size: 'M',
    description: 'Community sponsors supporting the conference program.',
    sponsors: []
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
