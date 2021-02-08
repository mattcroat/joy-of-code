import { ReactNode } from 'react'

import { Main } from '@/components/layout'
import { Navigation } from '@/components/ui'
import { Seo } from '@/components/Seo'

interface Props {
  children: ReactNode
  [key: string]: any
}

export function Layout({ children, ...metadata }: Props) {
  return (
    <>
      <Seo {...metadata} />

      <Navigation />

      <Main>{children}</Main>
    </>
  )
}
