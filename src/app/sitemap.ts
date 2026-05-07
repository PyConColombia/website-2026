import type { MetadataRoute } from 'next'

import { getPosts } from '@/lib/posts'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  const routes = [
    '' /* This is equivalent to / */,
    '/blog',
    '/team',
    '/code-of-conduct',
    ...posts.map(post => `/blog/${post.slug}`)
  ]

  return routes.map(route => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}${route}`
  }))
}
