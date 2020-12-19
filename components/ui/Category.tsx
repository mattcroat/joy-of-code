import { FC } from 'react'
import { Box } from '@chakra-ui/react'

import { Layout } from '@/components/layout'
import { CardsGrid, Emoji, H1, Paragraph } from '@/components/ui'

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

const Category: FC<Props> = ({ category, posts, title }) => {
  return (
    <Layout title={`Joy of Code | ${category}`}>
      <Box px={[8, 16]}>
        <Box>
          <H1>{title}</H1>
        </Box>

        {posts.length < 1 && (
          <Paragraph>
            Nothing to see here...
            <Emoji emoji="🕵️" label="Spy emoji" spacing={2} animate />
          </Paragraph>
        )}

        <Box my={10}>
          <CardsGrid posts={posts} />
        </Box>
      </Box>
    </Layout>
  )
}

export default Category
