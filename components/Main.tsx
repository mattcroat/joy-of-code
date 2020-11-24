import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

const Main = ({ children }: MainProps): JSX.Element => (
  <Box as="main" ml={[null, '80px']} mt={8}>
    {children}
  </Box>
)

export default Main
