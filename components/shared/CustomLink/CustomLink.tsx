import { ReactNode } from 'react'
import { Link, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'

import { primaryColor } from '@/root/styles/colors'

interface Props {
  color?: string
  children: ReactNode
  hover?: {
    color: string
    transition: string
  }
  href: string
  isInternal?: boolean
  openSeparateTab?: boolean
}

export function CustomLink({
  color,
  children,
  hover,
  href,
  isInternal = false,
  openSeparateTab = false,
}: Props) {
  const { colorMode } = useColorMode()

  if (isInternal) {
    return (
      <NextLink href={href} passHref>
        <Link
          color={color}
          _hover={hover}
          target={openSeparateTab ? '_blank' : '_self'}
        >
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
