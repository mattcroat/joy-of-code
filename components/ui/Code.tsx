import { ReactNode } from 'react'
import { Box, Code } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export function InlineCode(props: Props) {
  return (
    <Code
      d="inline"
      py="0.1rem"
      bg="orange.200"
      color="orange.900"
      fontSize="inherit"
      {...props}
    />
  )
}

export function Pre(props: Props) {
  return <Box as="pre" fontSize={[16, 18, 20]} {...props} />
}

export function CodeTitle(props: Props) {
  return <Box fontSize={[16, 18, 20]} {...props} />
}
