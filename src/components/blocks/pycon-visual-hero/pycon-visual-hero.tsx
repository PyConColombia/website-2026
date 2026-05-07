import FloatingLogo from '@/components/blocks/pycon-visual-hero/floating-logo'
import { MotionPreset } from '@/components/ui/motion-preset'

const PyconVisualHero = () => {
  return (
    <section
      id='pycon-hero'
      aria-label='PyCon Colombia 2026'
      className='relative isolate min-h-[650px] overflow-hidden bg-background px-4 py-12 sm:px-6 lg:px-8'
    >
      <div className='absolute left-[calc(12%-50px)] top-8 size-11 rounded-full bg-[radial-gradient(88.84%_88.84%_at_63.5%_12.5%,#FFF_0%,#C2CCFF_100%)] blur-[3.1469154357910156px] sm:size-15' />
      <div className='absolute left-[calc(9%-50px)] top-24 size-6 rounded-full bg-[radial-gradient(88.84%_88.84%_at_63.5%_12.5%,#FFF_0%,#C2CCFF_100%)] blur-[3.1469154357910156px] sm:size-8' />

      <FloatingLogo />

      <div className='relative mx-auto flex min-h-[340px] w-full items-center justify-center sm:min-h-[420px] lg:min-h-[460px]'>
        <div className='relative w-full'>
          <MotionPreset
            aria-hidden='true'
            fade
            blur
            slide={{ direction: 'down', offset: 45 }}
            transition={{ duration: 0.65 }}
            inView={false}
            delay={0.35}
            className='[font-family:var(--font-display)] mx-auto w-max select-none bg-linear-to-b from-[#BCC4F4] via-[#EEEEF7] to-[#BCC4F4] bg-clip-text text-center text-[clamp(11.3rem,46.8vw,27.3rem)] font-bold leading-none tracking-[0.04em] text-transparent'
          >
            PYCON
          </MotionPreset>

          <MotionPreset
            fade
            slide={{ direction: 'down', offset: 24 }}
            transition={{ duration: 0.55 }}
            inView={false}
            delay={0.55}
            className='[font-family:var(--font-button)] absolute bottom-[-52px] left-[140px] z-30 w-max max-w-72 text-left text-[25px] leading-[1.05] text-foreground sm:bottom-[4px] sm:max-w-none sm:text-[29px]'
          >
            <p>MEDELLIN, COLOMBIA</p>
            <p>24, 25 &amp; 26 JULY - 2026</p>
          </MotionPreset>
        </div>

        <MotionPreset
          fade
          zoom={{ initialScale: 0.82 }}
          slide={{ direction: 'down', offset: 18 }}
          transition={{ duration: 0.55 }}
          inView={false}
          delay={0.7}
          className='absolute bottom-[43px] right-[calc(9%+15px)] z-30 flex size-18 items-center justify-center sm:bottom-[63px] sm:right-[calc(10%+15px)] sm:size-24 lg:right-[calc(8%+15px)]'
        >
          <span className='absolute inset-0 rounded-full bg-[radial-gradient(88.84%_88.84%_at_63.5%_12.5%,#FFF_0%,#B6C0F4_100%)] shadow-[0_14px_24px_rgba(97,85,245,0.22)] blur-[2.387160062789917px]' />
          <span className='[font-family:var(--font-display)] relative z-10 text-[#7D8BD3] text-5xl font-bold leading-none drop-shadow-[0_5px_5px_rgba(125,139,211,0.35)] sm:text-6xl'>
            26
          </span>
        </MotionPreset>

        <MotionPreset
          fade
          transition={{ duration: 0.55 }}
          inView={false}
          delay={0.8}
          className='absolute bottom-1 left-1/2 z-10 h-5 w-28 -translate-x-1/2 rounded-full bg-[#8991d8]/30 blur-xl sm:bottom-7 sm:w-36'
        />
      </div>
    </section>
  )
}

export default PyconVisualHero
