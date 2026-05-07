import { Badge } from '@/components/ui/badge'
import { Marquee } from '@/components/ui/marquee'

export type Topics = string[]

const TrustedBrands = ({ topics }: { topics: Topics }) => {
  const midpoint = Math.ceil(topics.length / 2)
  const topicRows = [topics.slice(0, midpoint), topics.slice(midpoint)]

  return (
    <section id='trusted-brands' className='bg-background py-4 sm:py-6 lg:py-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='relative'>
          <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-linear-to-r to-transparent' />
          <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-linear-to-l to-transparent' />
          <div className='w-full space-y-2 overflow-hidden py-4 sm:space-y-3'>
            {topicRows.map((row, rowIndex) => (
              <Marquee key={rowIndex} duration={72} gap={0.75} reverse={rowIndex === 0} className='p-1'>
                {row.map(topic => (
                  <Badge
                    key={topic}
                    variant='outline'
                    className='border-primary/20 shrink-0 bg-[#F1F2FC] px-4 py-2 text-sm font-medium text-foreground sm:text-base'
                  >
                    {topic}
                  </Badge>
                ))}
              </Marquee>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBrands
