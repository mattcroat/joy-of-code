import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

import { Layout } from '@/components/layout'
import { CardsGrid, Emoji, HeadingPrimary } from '@/components/ui'

import { getPosts } from '@/utils/posts'

interface Props {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

// get posts metadata
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getPosts,
    },
  }
}

const IndexPage: FC<Props> = ({ posts }) => (
  <Layout title="Joy of Code | ☕ Freshly Brewed Web Development Content">
    <Box px={[8, 16]}>
      <Box>
        <HeadingPrimary>
          Welcome Friend
          <Emoji emoji="👋" label="Wave emoji" />
        </HeadingPrimary>
      </Box>

      <Box my={12}>
        <CardsGrid posts={posts} />
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
