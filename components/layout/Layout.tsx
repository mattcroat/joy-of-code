import { ReactNode } from 'react'
import Head from 'next/head'

import { Main } from '@/components/layout'
import { Navigation } from '@/components/ui'

interface Props {
  children?: ReactNode
  title?: string
}

export function Layout({ children, title = 'Joy of Code' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navigation />

      <Main>{children}</Main>
    </>
  )
}
