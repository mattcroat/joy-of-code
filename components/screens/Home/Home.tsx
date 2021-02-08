import { Box } from '@chakra-ui/react'

import { Layout } from '@/root/components/shared/Layout'
import { H1 } from '@/root/components/ui'
import { CardGrid } from '@/root/components/ui/CardGrid'
import { Emoji } from '@/root/components/shared/Emoji'

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
          <CardGrid posts={posts} />
        </Box>
      </Box>
    </Layout>
  )
}
