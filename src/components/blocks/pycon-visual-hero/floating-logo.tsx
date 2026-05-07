import Image from 'next/image'

import { MotionPreset } from '@/components/ui/motion-preset'

import { cn } from '@/lib/utils'

const FloatingLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('pointer-events-none absolute inset-0 z-20 grid translate-y-[90px] place-items-center', className)}>
      <MotionPreset
        fade
        zoom={{ initialScale: 0.88 }}
        slide={{ direction: 'down', offset: 28 }}
        transition={{ duration: 0.65 }}
        inView={false}
        delay={0.15}
        className='flex flex-col items-center'
      >
        <div className='animate-pycon-float relative z-10 size-44 sm:size-55 lg:size-65'>
          <Image
            src='/images/pycon/logo-flotante.png'
            alt='PyCon Colombia logo'
            fill
            sizes='(max-width: 640px) 176px, (max-width: 1024px) 220px, 260px'
            className='object-contain'
            priority
          />
        </div>
        <div className='animate-pycon-logo-shadow mt-6 h-3 w-26 rounded-[999px] bg-[#6873d9]/50 blur-lg sm:h-4 sm:w-34 lg:h-5 lg:w-42' />
      </MotionPreset>
    </div>
  )
}

export default FloatingLogo
