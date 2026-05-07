import { type Features } from '@/components/blocks/benefits/benefits'

import keynotes from '@/assets/data/keynotes.json'

export const benefits: Features = keynotes.map(keynote => ({
  title: keynote.name,
  description: keynote.description,
  image: keynote.image,
  flag: keynote.flag,
  linkedin: keynote.linkedin,
  github: keynote.github,
  website: keynote.website,
  youtube: keynote.youtube,
  x: keynote.x
}))
