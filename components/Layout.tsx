import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Head from 'next/head'

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
    <Box as="main" ml="80px" mt={8}>
      {children}
    </Box>
  </>
)

export default Layout
