import { Box } from '@chakra-ui/react'

import { Layout } from '@/root/components/shared/Layout'

interface Props {
  content: JSX.Element
  frontMatter: {
    title: string
    description: string
    image: string
  }
}

export function Post({ content, frontMatter }: Props) {
  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.description}
      image={`https://joyofcode.xyz${frontMatter.image}`}
      type="article"
    >
      <Box w={{ lg: '90ch' }} mx="auto" px={8}>
        {content}
      </Box>
    </Layout>
  )
}
