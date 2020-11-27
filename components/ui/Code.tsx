import { FC, ReactNode } from 'react'
import { Code as ChakraCode } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

const Code: FC<Props> = ({ children }) => (
  <ChakraCode bg="orange.200" color="orange.900" fontSize="inherit">
    {children}
  </ChakraCode>
)

export default Code
