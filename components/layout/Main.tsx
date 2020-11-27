// ui components
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

// components
import { Slide } from '@/components/motion/Transitions'

interface MainProps {
  children: ReactNode
}

const Main = ({ children }: MainProps): JSX.Element => (
  <Slide>
    <Box as="main" ml={{ lg: '80px' }} pt={8}>
      {children}
    </Box>
  </Slide>
)

export default Main
