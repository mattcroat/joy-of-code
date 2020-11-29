import { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

import { Slide } from '@/components/motion'

interface Props {
  children: ReactNode
}

const Main: FC<Props> = ({ children }) => (
  <Slide>
    <Box as="main" ml={{ lg: '80px' }} pt={6}>
      {children}
    </Box>
  </Slide>
)

export default Main
