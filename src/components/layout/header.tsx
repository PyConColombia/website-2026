'use client'

import { useEffect, useState } from 'react'

import { ExternalLinkIcon, CalendarDaysIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PrimaryFlowButton } from '@/components/ui/flow-button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { HeaderNavigation, HeaderNavigationSmallScreen, type Navigation } from '@/components/layout/header-navigation'

import { cn } from '@/lib/utils'

type HeaderProps = {
  navigationData: Navigation[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const ticketsUrl = 'https://www.eventbrite.co/e/pycon-colombia-2026-tickets-1986172567616?aff=ebdssbdestsearch'
  const years = ['2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'] as const

  const openYearSite = (year: string) => {
    const url = `https://${year}.pycon.co/`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full transition-all duration-300',
        {
          'bg-card/75 backdrop-blur-sm': isScrolled
        },
        className
      )}
    >
      <div
        className='flex h-full items-center justify-between gap-4 border-b px-4 sm:px-6 lg:px-8'
        style={{ fontFamily: 'var(--font-button)' }}
      >
        {/* Logo */}
        <Link href='/#pycon-hero'>
          <div className='flex items-center gap-3'>
            <div className='bg-primary ring-primary/30 size-8 overflow-hidden rounded-full ring-2'>
              <Image
                src='/favicon/apple-touch-icon.png'
                alt='PyCon Colombia'
                width={32}
                height={32}
                className='size-full object-contain'
                priority
              />
            </div>
            <span
              className='text-primary max-[430px]:hidden text-xl tracking-wide'
            >
              PYCON COLOMBIA 2026
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <HeaderNavigation
          navigationData={navigationData}
          navigationClassName='[&_[data-slot="navigation-menu-list"]]:gap-1'
        />

        {/* Actions */}
        <div className='flex gap-4 sm:gap-6'>
          <div className='max-sm:hidden'>
            <div className='ring-secondary/60 relative isolate w-fit overflow-hidden rounded-lg ring-2'>
              <Select defaultValue='2026' onValueChange={openYearSite}>
                <SelectTrigger
                  className={cn(
                    'hover:bg-secondary ring-0 shadow-none relative rounded-lg border border-transparent bg-secondary bg-clip-padding duration-500 text-shadow-xs',
                    'h-10 px-6 text-base'
                  )}
                >
                  <SelectValue placeholder='Year' />
                </SelectTrigger>
                <SelectContent>
                  {years.map((y) => (
                    <SelectItem key={y} value={y}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <PrimaryFlowButton size='lg' className='max-sm:hidden' asChild>
            <Link href={ticketsUrl} target='_blank' rel='noopener noreferrer'>
              GET YOUR TICKETS
            </Link>
          </PrimaryFlowButton>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className='sm:hidden'>
                <div className='ring-secondary/60 relative isolate w-fit overflow-hidden rounded-lg ring-2'>
                  <Select defaultValue='2026' onValueChange={openYearSite}>
                    <SelectTrigger
                      aria-label='Select year'
                      className={cn(
                        'hover:bg-secondary ring-0 shadow-none relative rounded-lg border border-transparent bg-secondary bg-clip-padding duration-500 text-shadow-xs',
                        'size-10 justify-center px-0 [&_[data-slot=select-value]]:hidden'
                      )}
                    >
                      <SelectValue />
                      <CalendarDaysIcon className='size-4' />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((y) => (
                        <SelectItem key={y} value={y}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>PyCon by year</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <PrimaryFlowButton size='icon-lg' className='sm:hidden' asChild>
                <Link href={ticketsUrl} target='_blank' rel='noopener noreferrer'>
                  <ExternalLinkIcon />
                  <span className='sr-only'>Get your tickets</span>
                </Link>
              </PrimaryFlowButton>
            </TooltipTrigger>
            <TooltipContent>Get your tickets</TooltipContent>
          </Tooltip>

          <HeaderNavigationSmallScreen navigationData={navigationData} />
        </div>
      </div>
    </header>
  )
}

export default Header
