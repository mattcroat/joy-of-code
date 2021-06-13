import { Link, useColorModeValue } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps extends LinkProps {
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
  ...props
}: CustomLinkProps) {
  const linkColor = useColorModeValue('blue.600', 'orange.200')

  if (isInternal) {
    return (
      <NextLink href={href} passHref {...props}>
        <Link
          _hover={hover}
          borderRadius="base"
          color={color}
          d="inline-block"
          target={openSeparateTab ? '_blank' : '_self'}
        >
          {children}
        </Link>
      </NextLink>
    )
  }

  return (
    <NextLink href={href} passHref {...props}>
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
