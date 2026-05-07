'use client'

import { FacebookIcon, GithubIcon, InstagramIcon, XIcon, YoutubeIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  {
    label: 'X',
    href: 'https://twitter.com/pyconcolombia',
    icon: XIcon
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/pyconcolombia',
    icon: FacebookIcon
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pyconcolombia/',
    icon: InstagramIcon
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/pyconcolombia',
    icon: YoutubeIcon
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pyconcolombia',
    icon: GithubIcon
  }
]

const legalLinks = [
  {
    label: 'Code of Conduct',
    href: '/code-of-conduct'
  },
  {
    label: 'Code of Conduct Enforcement Procedure',
    href: '/code-of-conduct#enforcement'
  },
  {
    label: 'Health & Safety Policy',
    href: '/code-of-conduct#health-safety'
  }
]

const footerLinks = [
  {
    label: 'Home',
    href: '/#pycon-hero'
  },
  {
    label: 'Keynote Speakers',
    href: '/#benefits'
  },
  {
    label: 'Gallery',
    href: '/#gallery'
  },
  {
    label: 'Team',
    href: '/team'
  }
]

const Footer = () => {
  return (
    <footer className='bg-[#0F172B] text-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:py-20'>
        <div className='max-w-2xl space-y-6'>
          <Link href='/#pycon-hero' className='inline-flex items-center gap-3'>
            <span className='ring-white/25 size-10 overflow-hidden rounded-full bg-white ring-2'>
              <Image
                src='/favicon/apple-touch-icon.png'
                alt='PyCon Colombia'
                width={40}
                height={40}
                className='size-full object-contain'
              />
            </span>
            <span className='text-2xl tracking-wide text-white' style={{ fontFamily: 'var(--font-button)' }}>
              PYCON COLOMBIA 2025
            </span>
          </Link>

          <p className='max-w-xl text-base leading-7 text-white/75'>
            PyCon Colombia is the Annual Colombian conference that gathers professionals, enthusiasts and amateur users
            of the Python programming language.
            <br />
            Join us to learn, share, and connect with python professionals from across the globe.
          </p>

          <div className='flex flex-wrap items-center gap-3'>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='flex size-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/12'
              >
                <Icon className='size-5' />
              </Link>
            ))}
          </div>
        </div>

        <div className='grid gap-8 sm:grid-cols-3'>
          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-white'>Legal</h2>
            <ul className='space-y-3 text-white/70'>
              {legalLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className='transition-colors hover:text-white'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-white'>Contact</h2>
            <Link href='mailto:Hello@pycon.co' className='block text-white/70 transition-colors hover:text-white'>
              Hello@pycon.co
            </Link>
          </div>

          <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-white'>Links</h2>
            <ul className='space-y-3 text-white/70'>
              {footerLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className='transition-colors hover:text-white'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='mx-auto flex max-w-7xl justify-center px-4 py-6 sm:px-6 lg:px-8'>
          <p className='text-center text-sm text-white/60'>
            ©{new Date().getFullYear()} PyCon Colombia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
