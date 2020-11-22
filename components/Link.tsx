// ui components
import { Link as ChakraLink } from '@chakra-ui/react'

// next
import NextLink from 'next/link'
import { ReactNode } from 'react'

// types
interface LinkProps {
  as?: string
  color?: string
  children: ReactNode
  hover?: {
    transition: string
    color: string
  }
  href: string
}

const Link = ({ as, color, children, hover, href }: LinkProps): JSX.Element => (
  <NextLink href={href} as={as} passHref>
    <ChakraLink color={color} _hover={hover}>
      {children}
    </ChakraLink>
  </NextLink>
)

export default Link
