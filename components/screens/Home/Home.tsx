import { Box } from '@chakra-ui/react'

import { Layout } from '@/root/components/shared/Layout'
import { Subheading, Title } from '@/root/components/shared/Typography'
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
      <Box>
        <Title>
          Welcome Friend
          <Emoji emoji="👋" label="Waving hand emoji" animate />
        </Title>
      </Box>

      {posts.length < 1 && (
        <Box fontSize={[16, 18, 20]} my={8}>
          Nothing to see here...
          <Emoji emoji="🕵️" label="Spy emoji" spacing={2} animate />
        </Box>
      )}

      <Box py={{ base: 8, md: 12 }}>
        <Subheading mt={0}>
          <Emoji emoji="🔥" label="Fire emoji" spacing={2} />
          Latest
        </Subheading>
        <CardGrid posts={posts} />
      </Box>
    </Layout>
  )
}
