import type { ReactNode } from 'react'

import { Bebas_Neue, Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

import { assetPath, cn } from '@/lib/utils'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  weight: '400'
})

const agencyGothic = localFont({
  src: '../../public/fonts/agency-gothic-ct-bold.otf',
  variable: '--font-agency-gothic',
  display: 'swap',
  weight: '700'
})

export const metadata: Metadata = {
  title: {
    template: '%s | PyCon Colombia 2026',
    default: 'PyCon Colombia 2026'
  },
  description:
    'Grow your product faster with an all-in-one sales and analytics platform. Track performance, automate follow-ups, and make smarter decisions easily.',
  robots: 'index,follow',
  keywords: [
    'sales analytics',
    'product growth',
    'sales dashboard',
    'business analytics',
    'growth tracking',
    'sales performance'
  ],
  icons: {
    icon: [
      {
        url: assetPath('/favicon/favicon-16x16.png'),
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: assetPath('/favicon/favicon-32x32.png'),
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: assetPath('/favicon/favicon.ico'),
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: assetPath('/favicon/apple-touch-icon.png'),
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        url: assetPath('/favicon/android-chrome-192x192.png'),
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: assetPath('/favicon/android-chrome-512x512.png'),
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`),
  openGraph: {
    title: {
      template: '%s | PyCon Colombia 2026',
      default: 'PyCon Colombia 2026'
    },
    description:
      'Grow your product faster with an all-in-one sales and analytics platform. Track performance, automate follow-ups, and make smarter decisions easily.',
    type: 'website',
    siteName: 'PyCon Colombia 2026',
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}`,
    images: [
      {
        url: '/images/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'PyCon Colombia 2026'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | PyCon Colombia 2026',
      default: 'PyCon Colombia 2026'
    },
    description:
      'Grow your product faster with an all-in-one sales and analytics platform. Track performance, automate follow-ups, and make smarter decisions easily.'
  }
}

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html
      lang='en'
      className={cn(
        geistSans.variable,
        geistMono.variable,
        bebasNeue.variable,
        agencyGothic.variable,
        'flex min-h-full w-full scroll-smooth antialiased'
      )}
      suppressHydrationWarning
    >
      <body className='flex min-h-full w-full flex-auto flex-col'>
        <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
