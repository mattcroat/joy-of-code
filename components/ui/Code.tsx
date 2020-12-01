import { FC, ReactNode } from 'react'
import { Code } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

const InlineCode: FC<Props> = ({ children }) => (
  <Code bg="orange.200" color="orange.900" fontSize="inherit">
    {children}
  </Code>
)

export default InlineCode
