import { Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

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
  prefetch?: undefined | boolean
}

export function CustomLink({
  color,
  children,
  hover,
  href,
  isInternal = false,
  openSeparateTab = false,
  prefetch = undefined,
}: Props) {
  const linkColor = useColorModeValue('blue.600', 'orange.200')

  if (isInternal) {
    return (
      <NextLink href={href} passHref prefetch={prefetch}>
        <Link
          _hover={hover}
          color={color}
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
        color={linkColor}
        href={href}
        rel="noreferrer noopener"
        target="_blank"
      >
        {children}
      </Link>
    </NextLink>
  )
}
