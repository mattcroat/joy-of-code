import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  [key: string]: any
}

export function Seo({ ...metadata }: Props) {
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  )
}
