import { GithubIcon, LinkedinIcon, XIcon } from 'lucide-react'

import { teamMembers } from '@/assets/data/team'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'
import { assetPath } from '@/lib/utils'

const socialButtonClassName =
  'bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 size-8'

const formatRole = (role: string) => {
  const normalizedRole = role.toLocaleLowerCase()

  return normalizedRole.charAt(0).toLocaleUpperCase() + normalizedRole.slice(1)
}

const Team = () => {
  return (
    <section id='team' className='py-8 sm:py-16 lg:py-24'>
      <MotionPreset
        fade
        slide={{ direction: 'down', offset: 50 }}
        blur
        transition={{ duration: 0.5 }}
        className='mb-12 space-y-4 text-center max-md:px-4 sm:mb-16'
      >
        <p className='text-primary text-sm font-medium uppercase'>Team</p>
        <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Meet the people behind PyCon Colombia</h2>
        <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
          A community-driven team working to bring speakers, sponsors, volunteers, and attendees together.
        </p>
      </MotionPreset>

      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8'>
        {teamMembers.map((member, index) => (
          <MotionPreset
            key={`${member.name}-${member.image}`}
            fade
            blur
            slide={{ direction: 'up', offset: 30 }}
            delay={index * 0.08}
            transition={{ duration: 0.65 }}
          >
            <Card className='h-full gap-0 overflow-hidden py-0 shadow-sm transition-shadow duration-300 hover:shadow-md lg:flex-row'>
              <CardContent className='h-64 px-0 lg:h-auto lg:w-58 lg:shrink-0 xl:w-66'>
                <img
                  src={assetPath(member.image)}
                  alt={member.name}
                  className='size-full object-cover lg:rounded-l-xl'
                />
              </CardContent>

              <div className='flex min-h-64 grow flex-col justify-between'>
                <CardHeader className='gap-5 pt-6 pb-5'>
                  <div className='flex flex-wrap items-start justify-between gap-3'>
                    <CardTitle className='text-xl leading-tight'>{member.name}</CardTitle>
                    <span className='text-primary bg-primary/10 rounded-full px-3 py-1 text-sm font-medium'>
                      {formatRole(member.role)}
                    </span>
                  </div>
                  <CardDescription className='text-base'>
                    Part of the team bringing speakers, sponsors, volunteers, and attendees together for PyCon Colombia
                    2026.
                  </CardDescription>
                </CardHeader>

                {(member.linkedin || member.github || member.x) && (
                  <div className='px-6 pb-6'>
                    <div className='border-t border-dashed pt-5'>
                      <CardFooter className='gap-3 px-0 py-0'>
                        {member.linkedin && (
                          <Button
                            size='icon'
                            asChild
                            className={socialButtonClassName}
                          >
                            <a
                              href={member.linkedin}
                              target='_blank'
                              rel='noopener noreferrer'
                              aria-label={`${member.name} LinkedIn`}
                            >
                              <LinkedinIcon className='size-4' />
                            </a>
                          </Button>
                        )}
                        {member.github && (
                          <Button size='icon' asChild className={socialButtonClassName}>
                            <a
                              href={member.github}
                              target='_blank'
                              rel='noopener noreferrer'
                              aria-label={`${member.name} GitHub`}
                            >
                              <GithubIcon className='size-4' />
                            </a>
                          </Button>
                        )}
                        {member.x && (
                          <Button size='icon' asChild className={socialButtonClassName}>
                            <a
                              href={member.x}
                              target='_blank'
                              rel='noopener noreferrer'
                              aria-label={`${member.name} X`}
                            >
                              <XIcon className='size-4' />
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </MotionPreset>
        ))}
      </div>
    </section>
  )
}

export default Team
