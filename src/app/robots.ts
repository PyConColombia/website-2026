import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/*', '/login', '/register', '/forgot-password', '/reset-password']
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  }
}
