import type { SVGAttributes } from 'react'

import { ArrowRightIcon, MailIcon } from 'lucide-react'

import Link from 'next/link'

import { codeOfConduct } from '@/assets/data/code-of-conduct'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PrimaryFlowButton } from '@/components/ui/flow-button'
import { MotionPreset } from '@/components/ui/motion-preset'

const SemiCircleSVG = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='127' height='302' viewBox='0 0 127 302' fill='none' {...props}>
      <path
        d='M126.904 150.593C126.904 233.771 70.0626 301.101 0 301.101L0 0.00023157C70.0626 0.0840634 126.904 67.4146 126.904 150.593Z'
        fill='var(--color-primary)'
      />
    </svg>
  )
}

const CodeOfConduct = () => {
  return (
    <>
      <section className='py-8 sm:py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl space-y-12 overflow-hidden px-4 sm:px-6 md:space-y-16 lg:space-y-24 lg:px-8'>
          <div className='space-y-4 text-center'>
            <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
              <Badge variant='outline' className='bg-background text-sm font-normal'>
                {codeOfConduct.eyebrow}
              </Badge>
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.2} transition={{ duration: 0.5 }}>
              <h1 className='mx-auto max-w-3xl text-3xl font-semibold md:text-4xl lg:text-5xl'>
                {codeOfConduct.title}
              </h1>
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.4} transition={{ duration: 0.5 }}>
              <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>{codeOfConduct.description}</p>
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} delay={0.6} transition={{ duration: 0.5 }}>
              <div className='flex flex-wrap justify-center gap-4'>
                <PrimaryFlowButton size='lg' asChild>
                  <Link href='#policy'>
                    Read policy
                    <ArrowRightIcon />
                  </Link>
                </PrimaryFlowButton>
                <Button size='lg' variant='outline' className='rounded-lg text-base shadow-none' asChild>
                  <Link href={`mailto:${codeOfConduct.contactEmail}`}>
                    Contact us
                    <MailIcon />
                  </Link>
                </Button>
              </div>
            </MotionPreset>
          </div>

          <div className='relative isolate flex items-center justify-center'>
            <MotionPreset
              fade
              zoom
              blur
              delay={0.8}
              transition={{ duration: 0.5 }}
              className='peer z-10 order-2 -mx-4 basis-3/5 rounded-full sm:-mx-6 sm:basis-3/5 md:-mx-8 lg:-mx-10'
            >
              <img
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/about-us/image-32.png'
                alt='PyCon Colombia community'
                className='size-full rounded-full object-cover transition-transform duration-500 hover:scale-105'
              />
            </MotionPreset>

            <div className='z-0 order-1 flex flex-1 basis-1/6 items-center *:transition-transform *:duration-500 peer-hover:*:-translate-x-8 *:first:delay-200 *:nth-[2]:delay-100 sm:basis-1/5'>
              <div className='basis-1/4'>
                <MotionPreset fade slide={{ direction: 'right', offset: 150 }} delay={1.3} transition={{ duration: 0.6 }}>
                  <SemiCircleSVG className='size-full opacity-10' />
                </MotionPreset>
              </div>

              <div className='basis-1/3'>
                <MotionPreset fade slide={{ direction: 'right', offset: 150 }} delay={1.2} transition={{ duration: 0.6 }}>
                  <SemiCircleSVG className='size-full opacity-20' />
                </MotionPreset>
              </div>

              <div className='basis-5/12'>
                <MotionPreset fade slide={{ direction: 'right', offset: 150 }} delay={1.1} transition={{ duration: 0.6 }}>
                  <SemiCircleSVG className='size-full opacity-30' />
                </MotionPreset>
              </div>
            </div>

            <div className='z-0 order-3 flex flex-1 basis-1/6 items-center *:transition-transform *:duration-500 peer-hover:*:translate-x-8 *:last:delay-200 *:nth-[2]:delay-100 sm:basis-1/5'>
              <div className='basis-5/12'>
                <MotionPreset fade slide={{ offset: 150 }} delay={1.1} transition={{ duration: 0.6 }}>
                  <SemiCircleSVG className='size-full rotate-180 opacity-30' />
                </MotionPreset>
              </div>
              <div className='basis-1/3'>
                <MotionPreset fade slide={{ offset: 150 }} delay={1.2} transition={{ duration: 0.6 }}>
                  <SemiCircleSVG className='size-full rotate-180 opacity-20' />
                </MotionPreset>
              </div>
              <div className='basis-1/4'>
                <MotionPreset fade slide={{ offset: 150 }} delay={1.3} transition={{ duration: 0.6 }}>
                  <SemiCircleSVG className='size-full rotate-180 opacity-10' />
                </MotionPreset>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='policy' className='px-4 pb-8 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[18rem_1fr]'>
          <aside className='hidden lg:block'>
            <div className='sticky top-24 rounded-lg border bg-card p-5'>
              <p className='mb-4 text-sm font-medium uppercase text-primary'>On this page</p>
              <nav className='space-y-2'>
                {codeOfConduct.sections.map(section => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className='text-muted-foreground hover:text-foreground block text-sm transition-colors'
                  >
                    {section.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <article className='rounded-lg border bg-card px-5 py-6 shadow-sm sm:px-8 sm:py-10 lg:px-12'>
            <div className='border-b pb-8'>
              <p className='text-primary text-sm font-medium uppercase'>{codeOfConduct.updatedAt}</p>
              <h2 className='mt-3 text-2xl font-semibold md:text-3xl'>Policy details</h2>
            </div>

            <div className='divide-y'>
              {codeOfConduct.sections.map(section => (
                <section key={section.id} id={section.id} className='scroll-mt-24 py-8'>
                  <h3 className='text-xl font-semibold md:text-2xl'>{section.title}</h3>
                  <div className='text-muted-foreground mt-4 space-y-4 text-base leading-7'>
                    {section.paragraphs.map(paragraph => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.items && (
                      <ul className='list-disc space-y-2 pl-5'>
                        {section.items.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default CodeOfConduct
