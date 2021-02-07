import { Box } from '@chakra-ui/react'

import { Layout } from '@/components/layout'
import { CardsGrid, Emoji, H1 } from '@/components/ui'

interface Props {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

export function Home({ posts }: Props) {
  return (
    <Layout>
      <Box px={[8, 16]}>
        <Box>
          <H1>
            Welcome Friend
            <Emoji emoji="👋" label="Waving hand emoji" animate />
          </H1>
        </Box>

        {posts.length < 1 && (
          <Box fontSize={[16, 18, 20]} my={8}>
            Nothing to see here...
            <Emoji emoji="🕵️" label="Spy emoji" spacing={2} animate />
          </Box>
        )}

        <Box my={12}>
          <CardsGrid posts={posts} />
        </Box>
      </Box>
    </Layout>
  )
}
