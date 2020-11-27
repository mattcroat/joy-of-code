import { FC, ReactNode } from 'react'
import { List as ChakraList } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

const List: FC<Props> = ({ children }) => (
  <ChakraList listStyleType="disc" fontSize={20} pl={4} mb={8} mt={2} ml={2}>
    {children}
  </ChakraList>
)

export default List
