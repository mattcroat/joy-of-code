import Head from 'next/head'
import { useRouter } from 'next/router'

interface SeoProps {
  [key: string]: any
}

export function Seo({ ...metadata }: SeoProps) {
  const router = useRouter()

  const meta = {
    title: 'Joy of Code',
    description: `Web development tutorials, and articles`,
    image: 'https://joyofcode.xyz/images/og-image.webp',
    type: 'website',
    ...metadata,
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content="index, follow" name="robots" />
      <meta content={meta.description} name="description" />
      <meta content={meta.title} property="og:title" />
      <meta content={meta.type} property="og:type" />
      <meta content={meta.image} property="og:image" />
      <meta
        content={`https://joyofcode.xyz/${router.asPath}`}
        property="og:url"
      />
      <meta content={meta.description} property="og:description" />
      <meta content="Joy of Code" property="og:site_name" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={meta.title} name="twitter:title" />
      <meta content={meta.description} name="twitter:description" />
      <meta content={meta.image} name="twitter:image" />
    </Head>
  )
}
