'use client'

import { SendIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

import { PrimaryFlowButton } from '@/components/ui/flow-button'
import { MotionPreset } from '@/components/ui/motion-preset'

import DottedSheet from '@/assets/svg/dotted-sheet'
import { assetPath } from '@/lib/utils'

const CTASection = () => {
  return (
    <section id='cta' className='relative z-1 pt-16 pb-16 sm:pt-32 sm:pb-16 lg:pt-48 lg:pb-24'>
      <div className='bg-background mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='dark:bg-muted bg-primary relative overflow-hidden rounded-3xl border-none pt-20 pb-32 text-center shadow-2xl max-sm:pt-10 max-sm:pb-15'>
          <CardContent className='px-6'>
            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              delay={0.3}
              transition={{ duration: 0.5 }}
              className='flex flex-col items-center justify-center gap-4'
            >
              <h2 className='dark:text-foreground text-2xl font-semibold text-white md:text-3xl lg:text-4xl'>
                Want to know more?
              </h2>

              <p className='dark:text-muted-foreground w-full text-xl text-white/80 lg:max-w-2xl'>
                Join Pycon Colombia newsletter and get a complete overview of our events, speakers and community
                participation.
              </p>
            </MotionPreset>
            <MotionPreset
              className='pointer-events-none absolute bottom-0 left-0'
              fade
              slide
              transition={{ duration: 0.5 }}
            >
              <img
                src={assetPath('/images/cta/blur-logo.png')}
                alt=''
                aria-hidden='true'
                className='hidden size-72 -translate-x-12 translate-y-14 object-contain opacity-80 lg:block'
              />
            </MotionPreset>

            <MotionPreset
              className='pointer-events-none absolute right-0 bottom-0'
              fade
              slide={{ direction: 'right' }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={assetPath('/images/cta/soft-cylinder.png')}
                alt=''
                aria-hidden='true'
                className='hidden size-72 translate-x-12 translate-y-16 object-contain opacity-80 lg:block'
              />
            </MotionPreset>
          </CardContent>
        </Card>

        <MotionPreset fade blur zoom={{ initialScale: 0.95 }} delay={0.6} transition={{ duration: 0.4 }}>
          <form onSubmit={e => e.preventDefault()}>
            <div className='border-primary dark:border-primary/70 bg-background relative mx-auto -mt-9.25 flex size-fit w-full max-w-lg gap-2.5 rounded-xl border-2 p-2'>
              <Input
                type='email'
                name='cta-email'
                placeholder='Your email address'
                className='h-10 border-none shadow-none focus-visible:ring-transparent dark:bg-transparent'
                required
              />
              <PrimaryFlowButton size='lg' className='hidden shrink-0 sm:inline-flex'>
                Subscribe to newsletter
              </PrimaryFlowButton>
              <PrimaryFlowButton size='icon-lg' className='hidden shrink-0 max-sm:inline-flex' type='submit'>
                <SendIcon />
              </PrimaryFlowButton>
            </div>
          </form>
        </MotionPreset>
      </div>

      <DottedSheet className='pointer-events-none absolute inset-x-0 -z-1 mx-auto w-full max-w-7xl px-4 max-sm:-top-1/2 sm:bottom-1/4 sm:px-6 lg:px-8' />
    </section>
  )
}

export default CTASection
