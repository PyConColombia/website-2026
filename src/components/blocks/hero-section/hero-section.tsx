'use client'

import { ArrowUpRightIcon } from 'lucide-react'

import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import { MotionPreset } from '@/components/ui/motion-preset'
import { PrimaryFlowButton } from '@/components/ui/flow-button'

import TextFlip from '@/components/blocks/hero-section/text-flip'

const HeroSection = () => {
  const ticketsUrl = 'https://www.eventbrite.co/e/pycon-colombia-2026-tickets-1986172567616?aff=ebdssbdestsearch'

  return (
    <section id='home' className='relative overflow-hidden px-4 pt-8 pb-3 sm:px-6 sm:pt-16 sm:pb-6 lg:px-8 lg:pt-24 lg:pb-8'>
      <BackgroundRippleEffect />
      <div className='pointer-events-none absolute inset-x-0 top-0 z-5 h-128 bg-[radial-gradient(transparent_20%,var(--background)_90%)]' />
      <div className='flex flex-col items-center gap-4'>
        <MotionPreset
          fade
          slide={{ direction: 'down' }}
          transition={{ duration: 0.5 }}
          inView={false}
          className='z-10'
        >
          <Badge variant='outline' className='bg-background text-sm font-normal'>
            Medellin, Colombia · 24, 25 &amp; 26 July, 2026
          </Badge>
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: 'down' }}
          transition={{ duration: 0.5 }}
          inView={false}
          delay={0.2}
          component='h1'
          className='z-10 flex flex-col items-center gap-3 text-center text-3xl font-semibold md:text-4xl lg:text-5xl lg:leading-[1.29167]'
        >
          <span>Ready to dive into the world of</span>
          <TextFlip
            words={[
              'Python',
              'Data Science',
              'Machine Learning',
              'Artificial Intelligence',
              'DevOps',
              'Core Python',
              'Scientific Computing',
              'Computer Vision',
              'Community',
              'Open Source'
            ]}
          />
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: 'down' }}
          transition={{ duration: 0.5 }}
          inView={false}
          delay={0.4}
          component='p'
          className='text-muted-foreground z-10 max-w-156 text-center text-xl'
        >
          The biggest Python conference in Colombia. Come explore, learn, and connect with others just as passionate
          as you are.
        </MotionPreset>

        <MotionPreset
          fade
          slide={{ direction: 'down' }}
          transition={{ duration: 0.5 }}
          inView={false}
          delay={0.6}
          className='z-10'
        >
          <PrimaryFlowButton size='lg' asChild>
            <Link href={ticketsUrl} target='_blank' rel='noopener noreferrer'>
              GET YOUR TICKETS
              <ArrowUpRightIcon />
            </Link>
          </PrimaryFlowButton>
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
