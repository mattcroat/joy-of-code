import { ReactNode } from 'react'
import { List, ListItem } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export function Olist({ children }: Props) {
  return (
    <List
      listStyleType="decimal"
      fontSize={[16, 18, 20]}
      pl={4}
      mb={8}
      mt={2}
      ml={2}
    >
      {children}
    </List>
  )
}

export function Ulist({ children }: Props) {
  return (
    <List
      listStyleType="disc"
      fontSize={[16, 18, 20]}
      pl={4}
      mb={8}
      mt={2}
      ml={2}
    >
      {children}
    </List>
  )
}

export function Li({ children }: Props) {
  return <ListItem mb={2}>{children}</ListItem>
}
