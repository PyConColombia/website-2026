import { ArrowRightIcon } from 'lucide-react'

import Link from 'next/link'

import { sponsorTiers, type SponsorTier } from '@/assets/data/sponsors'
import { Badge } from '@/components/ui/badge'
import { PrimaryFlowButton } from '@/components/ui/flow-button'
import { MotionPreset } from '@/components/ui/motion-preset'
import { cn } from '@/lib/utils'

const sponsorDeckUrl = 'mailto:Hello@pycon.co?subject=PyCon%20Colombia%202026%20Sponsorship'

const sizeStyles = {
  XL: {
    section: 'lg:col-span-6',
    card: 'min-h-48 sm:min-h-56',
    logo: 'max-h-24 max-w-72 text-3xl',
    badge: 'XL'
  },
  L: {
    section: 'lg:col-span-6',
    card: 'min-h-44 sm:min-h-52',
    logo: 'max-h-20 max-w-64 text-2xl',
    badge: 'L'
  },
  M: {
    section: 'lg:col-span-4',
    card: 'min-h-38 sm:min-h-44',
    logo: 'max-h-16 max-w-52 text-xl',
    badge: 'M'
  },
  S: {
    section: 'lg:col-span-3',
    card: 'min-h-32 sm:min-h-36',
    logo: 'max-h-12 max-w-44 text-lg',
    badge: 'S'
  },
  XS: {
    section: 'lg:col-span-2',
    card: 'min-h-28 sm:min-h-32',
    logo: 'max-h-10 max-w-36 text-base',
    badge: 'XS'
  }
} satisfies Record<SponsorTier['size'], { section: string; card: string; logo: string; badge: string }>

const SponsorLogo = ({ tier }: { tier: SponsorTier }) => {
  const styles = sizeStyles[tier.size]
  const sponsors = tier.sponsors.length > 0 ? tier.sponsors : [{ name: 'Open slot' }]

  return (
    <div className='grid gap-3'>
      {sponsors.map(sponsor => {
        const content = (
          <div
            className={cn(
              'bg-background flex items-center justify-center rounded-lg border border-dashed p-5 text-center shadow-sm transition-colors',
              'hover:border-primary/40 hover:bg-primary/5',
              styles.card
            )}
          >
            {sponsor.logo ? (
              <img src={sponsor.logo} alt={sponsor.name} className={cn('object-contain', styles.logo)} />
            ) : (
              <div className='space-y-2'>
                <p className={cn('font-semibold text-foreground', styles.logo)}>{sponsor.name}</p>
                <p className='text-muted-foreground text-sm'>Add sponsor logo in sponsors.ts</p>
              </div>
            )}
          </div>
        )

        return sponsor.href ? (
          <Link key={sponsor.name} href={sponsor.href} target='_blank' rel='noopener noreferrer'>
            {content}
          </Link>
        ) : (
          <div key={sponsor.name}>{content}</div>
        )
      })}
    </div>
  )
}

const Sponsors = () => {
  return (
    <section id='sponsors' className='overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:px-6 md:space-y-16 lg:px-8'>
        <div className='space-y-4 text-center'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='bg-background text-sm font-normal'>
              Sponsors
            </Badge>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.2} transition={{ duration: 0.5 }}>
            <h2 className='mx-auto max-w-3xl text-2xl font-semibold md:text-3xl lg:text-4xl'>
              Support the Python community in Colombia
            </h2>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.4} transition={{ duration: 0.5 }}>
            <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
              Sponsorship tiers are organized by visual hierarchy so each category reflects its level of support.
            </p>
          </MotionPreset>

          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.6} transition={{ duration: 0.5 }}>
            <div className='flex justify-center'>
              <PrimaryFlowButton size='lg' asChild>
                <Link href={sponsorDeckUrl}>
                  Become a sponsor
                  <ArrowRightIcon />
                </Link>
              </PrimaryFlowButton>
            </div>
          </MotionPreset>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
          {sponsorTiers.map((tier, index) => {
            const styles = sizeStyles[tier.size]

            return (
              <MotionPreset
                key={tier.title}
                fade
                blur
                slide={{ direction: 'up', offset: 30 }}
                delay={index * 0.06}
                transition={{ duration: 0.55 }}
                className={styles.section}
              >
                <article className='bg-card h-full rounded-lg border p-4 shadow-sm sm:p-5'>
                  <div className='mb-4 flex items-start justify-between gap-4'>
                    <div>
                      <h3 className='text-lg font-semibold'>{tier.title}</h3>
                      <p className='text-muted-foreground mt-1 text-sm'>{tier.description}</p>
                    </div>
                    <span className='bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium'>
                      {styles.badge}
                    </span>
                  </div>
                  <SponsorLogo tier={tier} />
                </article>
              </MotionPreset>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
