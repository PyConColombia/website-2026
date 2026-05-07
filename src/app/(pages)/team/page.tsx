import type { Metadata } from 'next'

import Team from '@/components/blocks/team/team'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the people behind PyCon Colombia 2026.'
}

const TeamPage = () => {
  return <Team />
}

export default TeamPage
