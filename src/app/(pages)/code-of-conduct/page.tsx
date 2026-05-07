import type { Metadata } from 'next'

import CodeOfConduct from '@/components/blocks/code-of-conduct/code-of-conduct'

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'Read the PyCon Colombia Code of Conduct, enforcement procedure, and health and safety policy.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/code-of-conduct`
  }
}

const CodeOfConductPage = () => {
  return <CodeOfConduct />
}

export default CodeOfConductPage
