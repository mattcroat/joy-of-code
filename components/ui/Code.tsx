import { ReactNode } from 'react'
import { Box, Code, useColorMode } from '@chakra-ui/react'

import { inlineCodeBg, inlineCodeText } from '@/styles/colors'

interface Props {
  children: ReactNode
}

export function InlineCode(props: Props) {
  const { colorMode } = useColorMode()

  return (
    <Code
      d="inline"
      py="0.1rem"
      bg={inlineCodeBg[colorMode]}
      color={inlineCodeText[colorMode]}
      fontSize="inherit"
      {...props}
    />
  )
}

export function Pre(props: Props) {
  return <Box as="pre" fontSize={[16, 18, 20]} {...props} />
}

export function CodeTitle(props: Props) {
  return <Box fontSize={[16, 16, 18]} {...props} />
}
