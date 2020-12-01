import { FC, ReactNode } from 'react'
import { List, ListItem } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export const Olist: FC<Props> = ({ children }) => (
  <List listStyleType="decimal" fontSize={20} pl={4} mb={8} mt={2} ml={2}>
    {children}
  </List>
)

export const Ulist: FC<Props> = ({ children }) => (
  <List listStyleType="disc" fontSize={20} pl={4} mb={8} mt={2} ml={2}>
    {children}
  </List>
)

export const Li: FC<Props> = ({ children }) => (
  <ListItem mb={2}>{children}</ListItem>
)
