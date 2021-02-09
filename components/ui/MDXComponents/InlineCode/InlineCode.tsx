import { ReactNode } from 'react'

import { Code, useColorMode } from '@chakra-ui/react'
import { inlineCodeBg, inlineCodeText } from '@/root/styles/colors'

interface Props {
  children: ReactNode
}

export function InlineCode({ children, ...props }: Props) {
  const { colorMode } = useColorMode()

  return (
    <Code
      d="inline"
      py="0.1rem"
      bg={inlineCodeBg[colorMode]}
      color={inlineCodeText[colorMode]}
      fontSize="inherit"
      {...props}
    >
      {children}
    </Code>
  )
}
