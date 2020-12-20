import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

import { Slide } from '@/components/motion'

interface Props {
  children: ReactNode
}

export function Main({ children }: Props) {
  return (
    <Slide>
      <Box as="main" ml={{ sm: '80px' }} pt={6} transition="color 0.2s">
        {children}
      </Box>
    </Slide>
  )
}
