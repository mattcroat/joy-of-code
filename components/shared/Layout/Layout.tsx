import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { Seo } from '@/root/components/shared/Layout/Seo'

interface LayoutProps {
  children: ReactNode
  [key: string]: any
}

export function Layout({ children, ...metadata }: LayoutProps) {
  return (
    <Box maxW={{ sm: '80%' }} mx="auto" px={{ base: 4, sm: 0 }}>
      <Seo {...metadata} />
      <Box as="main" ml={{ md: '80px' }} pt={6}>
        {children}
      </Box>
    </Box>
  )
}
