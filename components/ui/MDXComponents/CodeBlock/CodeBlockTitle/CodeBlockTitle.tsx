import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export function CodeBlockTitle({ children, ...props }: Props) {
  return (
    <Box fontSize={16} {...props}>
      {children}
    </Box>
  )
}
