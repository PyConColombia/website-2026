'use client'

import { useState } from 'react'

import { MegaphoneIcon, XIcon } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

const callForSpeakersUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSexSz8lpdYXD9DYQbM0jChmWL4GVwFTU5JEYxx_xYVPaPJvEA/viewform'

const SiteAlert = ({ className }: { className?: string }) => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground relative z-60 flex w-full items-center justify-center px-4 py-2.5 text-sm sm:px-6',
        className
      )}
      role='status'
    >
      <div className='flex max-w-7xl flex-1 items-center justify-center gap-3 pr-9 text-center'>
        <MegaphoneIcon className='hidden size-4 shrink-0 sm:block' />
        <p className='text-balance'>
          PyCon Colombia 2026 Call for Speakers.{' '}
          <Link
            href={callForSpeakersUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold underline'
          >
            Apply now
          </Link>
        </p>
      </div>
      <button
        type='button'
        aria-label='Dismiss alert'
        className='absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md transition-colors hover:bg-primary-foreground/15'
        onClick={() => setIsVisible(false)}
      >
        <XIcon className='size-4' />
      </button>
    </div>
  )
}

export default SiteAlert
