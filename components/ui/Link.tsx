import { FC, ReactNode } from 'react'
import { Link as ChakraLink, useColorMode } from '@chakra-ui/react'

import { primaryColor } from '@/styles/colors'

interface Props {
  children: ReactNode
  href: string
}

const Link: FC<Props> = ({ children, href }) => {
  const { colorMode } = useColorMode()

  return (
    <ChakraLink
      color={primaryColor[colorMode]}
      href={href}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children}
    </ChakraLink>
  )
}

export default Link
