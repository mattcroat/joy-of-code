import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps extends LinkProps {
  children: ReactNode
  href: string
  isInternal?: boolean
  openSeparateTab?: boolean
}

export function CustomLink({
  children,
  href,
  isInternal = false,
  openSeparateTab = false,
  ...props
}: CustomLinkProps) {
  const isWithinPage = href.startsWith('#')

  if (isInternal) {
    return (
      <Link href={href} passHref {...props}>
        <a target={openSeparateTab ? '_blank' : '_self'}>{children}</a>
      </Link>
    )
  }

  return (
    <Link href={href} passHref {...props}>
      <a rel="noreferrer noopener" target={isWithinPage ? '_self' : '_blank'}>
        {children}
      </a>
    </Link>
  )
}
