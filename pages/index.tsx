// ui components
import { Box } from '@chakra-ui/react'

// components
import CardsGrid from '@/components/CardsGrid'
import Layout from '@/components/Layout'
import { MainHeading } from '@/components/UIComponents'

// utils
import { getPosts } from '@/utils/posts'

// types
import { GetStaticProps } from 'next'

interface IndexPageProps {
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

const IndexPage = ({ posts }: IndexPageProps): JSX.Element => (
  <Layout title="Joy of Code | ☕ Freshly Brewed Web Development Content">
    <Box px={[8, 16]}>
      <Box>
        <MainHeading>Welcome Friend 👋</MainHeading>
      </Box>

      <Box my={10}>
        <CardsGrid posts={posts} />
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
