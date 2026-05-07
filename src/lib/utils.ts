import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assetPath(path?: string | null) {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) {
    return path ?? ''
  }

  const basePath = process.env.NEXT_PUBLIC_BASEPATH ?? process.env.BASEPATH ?? ''

  if (!basePath || !path.startsWith('/')) {
    return path
  }

  return `${basePath}${path}`
}
