import { FC } from 'react'
import { Text as ChakraText } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Text: FC<Props> = ({ children }) => (
  <ChakraText fontSize={20} lineHeight="1.6" my={8}>
    {children}
  </ChakraText>
)

export default Text
