import { ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Main } from '@/components/layout'
import { Navigation } from '@/components/ui'

interface Props {
  children: ReactNode
  [key: string]: any
}

export function Layout({ children, ...metadata }: Props) {
  const router = useRouter()

  const meta = {
    title: 'Joy of Code | ☕ Freshly Brewed Web Development Content',
    description: `Joy of Code is focused on creating web development content that respects your time.`,
    image: 'https://joyofcode.xyz/images/banner.webp',
    type: 'website',
    ...metadata,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:image" content={meta.image} />
        <meta
          property="og:url"
          content={`https://joyofcode.xyz/${router.asPath}`}
        />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="Joy of Code" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Navigation />

      <Main>{children}</Main>
    </>
  )
}
