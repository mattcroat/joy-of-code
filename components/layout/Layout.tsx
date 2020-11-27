import { FC, ReactNode } from 'react'
import Head from 'next/head'

import { Main } from '@/components/layout'
import { Navigation } from '@/components/ui'

interface Props {
  children?: ReactNode
  title?: string
}

const Layout: FC<Props> = ({ children, title = 'Joy of Code' }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    <Navigation />

    <Main>{children}</Main>
  </>
)

export default Layout
