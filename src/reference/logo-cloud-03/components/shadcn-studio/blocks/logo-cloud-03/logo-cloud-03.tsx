'use client'

import { useEffect } from 'react'

import { Card, CardContent } from '@/components/ui/card'

import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'

type brandLogos = {
  image: string
  alt: string
}

const LogoCloud = ({ brandLogos }: { brandLogos: brandLogos[] }) => {
  useEffect(() => {
    const all = document.querySelectorAll('.card')

    const handleMouseMove = (ev: MouseEvent) => {
      all.forEach(e => {
        const blob = e.querySelector('.blob') as HTMLElement
        const fblob = e.querySelector('.fake-blob') as HTMLElement

        if (!blob || !fblob) return

        const rec = fblob.getBoundingClientRect()

        blob.style.opacity = '0.8'

        blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - 24 - rec.width / 2
              }px, ${ev.clientY - rec.top - 24 - rec.height / 2}px)`
            }
          ],
          {
            duration: 300,
            fill: 'forwards'
          }
        )
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset
            component='h2'
            className='text-2xl font-semibold md:text-3xl lg:text-4xl'
            fade
            slide={{ direction: 'down', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            A network of thriving businesses
          </MotionPreset>

          <MotionPreset
            component='p'
            className='text-muted-foreground text-xl'
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
          >
            Trusted by startups, enterprises, and industry giants alike.
          </MotionPreset>
        </div>

        {/* Logo Grid */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {[0, 4, 8].map(startIndex => (
            <div key={startIndex} className='grid grid-cols-3 gap-4 last:max-lg:col-span-full'>
              {brandLogos.slice(startIndex, startIndex + 4).map((logo, index) => (
                <MotionPreset
                  key={index}
                  className={cn(
                    'bg-card card group relative h-full overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out',
                    {
                      'col-span-2': index === 1 || index === 2
                    }
                  )}
                  fade
                  blur
                  transition={{ duration: 1 }}
                  delay={0.6}
                >
                  <Card className='items-center justify-center border-none py-9 shadow-none'>
                    <CardContent className='p-0'>
                      <img src={logo.image} alt={logo.alt} className='h-7 shrink-0 grayscale' />
                    </CardContent>
                  </Card>
                  <div className='blob bg-primary absolute top-0 left-0 -z-1 size-40 rounded-full opacity-0 blur-2xl transition-all duration-300 ease-in-out' />
                  <div className='fake-blob absolute top-0 left-0 -z-1 [display:hidden] size-30 rounded-full' />
                </MotionPreset>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCloud
