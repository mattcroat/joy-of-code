import Head from 'next/head'
import { ReactNode } from 'react'

import Main from '@/components/Main'
import Navigation from '@/components/Navigation'

interface LayoutProps {
  children?: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'Joy of Code',
}: LayoutProps): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navigation />
    <Main>{children}</Main>
  </>
)

export default Layout
