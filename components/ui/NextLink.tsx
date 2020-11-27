import { FC, ReactNode } from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

interface Props {
  color?: string
  children: ReactNode
  hover?: {
    transition: string
    color: string
  }
  href: string
}

const NextLink: FC<Props> = ({ color, children, hover, href }) => (
  <Link href={href} passHref>
    <ChakraLink color={color} _hover={hover}>
      {children}
    </ChakraLink>
  </Link>
)

export default NextLink
