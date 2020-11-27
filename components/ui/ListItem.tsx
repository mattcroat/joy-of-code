import { FC, ReactNode } from 'react'
import { ListItem as ChakraListItem } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

const ListItem: FC<Props> = ({ children }) => (
  <ChakraListItem mb={2}>{children}</ChakraListItem>
)

export default ListItem
