import Hero from '@/components/blocks/hero-section/hero-section'
import PyconVisualHero from '@/components/blocks/pycon-visual-hero/pycon-visual-hero'
import TrustedBrands from '@/components/blocks/trusted-brands/trusted-brands'
import Benefits from '@/components/blocks/benefits/benefits'
import Sponsors from '@/components/blocks/sponsors/sponsors'
import Gallery from '@/components/blocks/gallery/gallery'
import CTA from '@/components/blocks/cta/cta'

import { topics } from '@/assets/data/trusted-brands'
import { benefits } from '@/assets/data/benefits'

import SectionSeparator from '@/components/section-separator'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'PyCon Colombia 2026',
      description:
        'PyCon Colombia is the biggest Python conference in Colombia. A space where people, ideas, and experiences come together to explore the possibilities of Python.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'PyCon Colombia 2026',
      description:
        'The biggest Python conference in Colombia. Three days of talks, workshops, and community gatherings around the Python programming language.',
      startDate: '2026-07-24',
      endDate: '2026-07-26',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: 'Universidad EAFIT',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Medellín',
          addressRegion: 'Antioquia',
          addressCountry: 'CO'
        }
      },
      organizer: {
        '@type': 'Organization',
        name: 'Python Colombia',
        url: 'https://pycon.co'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://www.eventbrite.co/e/pycon-colombia-2026-tickets-1986172567616',
        availability: 'https://schema.org/InStock'
      }
    }
  ]
}

const Home = () => {
  return (
    <>
      <PyconVisualHero />

      <SectionSeparator />

      <Hero />

      <SectionSeparator />

      <TrustedBrands topics={topics} />

      <SectionSeparator />

      <Benefits featuresList={benefits} />

      <SectionSeparator />

      <Sponsors />

      <SectionSeparator />

      <Gallery />

      <SectionSeparator />

      <CTA />

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default Home
