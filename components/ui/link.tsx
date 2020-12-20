import { ReactNode } from 'react'
import { Link, useColorMode } from '@chakra-ui/react'
import NextLink from 'next/link'

import { Emoji } from '@/components/ui'
import { primaryColor } from '@/styles/colors'

interface Props {
  color?: string
  children: ReactNode
  hover?: {
    color: string
    transition: string
  }
  href: string
  isInternal?: boolean
}

export function CustomLink({
  color,
  children,
  hover,
  href,
  isInternal = false,
}: Props) {
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
        <Emoji emoji="🔗" label="Link emoji" spacing={1} />
        {children}
      </Link>
    </NextLink>
  )
}
