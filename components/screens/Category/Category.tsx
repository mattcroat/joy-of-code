import { Box } from '@chakra-ui/react'

import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'
import { Title } from '@/root/components/shared/Typography'
import { CardGrid } from '@/root/components/ui/CardGrid'

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
          <Title>{title}</Title>
        </Box>

        {posts.length < 1 && (
          <Box fontSize={[16, 18, 20]} my={8}>
            Nothing to see here...
            <Emoji emoji="🕵️" label="Spy emoji" spacing={2} animate />
          </Box>
        )}

        <Box my={10}>
          <CardGrid posts={posts} />
        </Box>
      </Box>
    </Layout>
  )
}
