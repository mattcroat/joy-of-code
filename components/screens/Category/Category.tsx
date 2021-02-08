import { Box } from '@chakra-ui/react'

import { Layout } from '@/root/components/shared/Layout'
import { CardsGrid, Emoji, H1 } from '@/root/components/ui'

interface Props {
  category: string
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
  title: string
}

export function Category({ category, posts, title }: Props) {
  return (
    <Layout title={`Joy of Code | ${category}`}>
      <Box px={[8, 16]}>
        <Box>
          <H1>{title}</H1>
        </Box>

        {posts.length < 1 && (
          <Box fontSize={[16, 18, 20]} my={8}>
            Nothing to see here...
            <Emoji emoji="🕵️" label="Spy emoji" spacing={2} animate />
          </Box>
        )}

        <Box my={10}>
          <CardsGrid posts={posts} />
        </Box>
      </Box>
    </Layout>
  )
}
