import { FC, ReactNode } from 'react'
import { Link, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'

import { primaryColor } from '@/styles/colors'

interface CustomLink {
  color?: string
  children: ReactNode
  hover?: {
    color: string
    transition: string
  }
  href: string
  isInternal?: boolean
}

const CustomLink: FC<CustomLink> = ({
  color,
  children,
  hover,
  href,
  isInternal = false,
}) => {
  const { colorMode } = useColorMode()

  if (isInternal) {
    return (
      <NextLink href={href} passHref>
        <Link color={color} _hover={hover}>
          {children}
        </Link>
      </NextLink>
    )
  }

  return (
    <NextLink href={href} passHref>
      <Link
        color={primaryColor[colorMode]}
        href={href}
        rel="noreferrer noopener"
        target="_blank"
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default CustomLink
