import { FC, ReactNode } from 'react'
import { Text as ChakraText } from '@chakra-ui/react'

interface Props {
  children: ReactNode
  props: unknown
}

const Text: FC<Props> = ({ children }) => (
  <ChakraText fontSize={20} lineHeight="1.6" my={8}>
    {children}
  </ChakraText>
)

export default Text
