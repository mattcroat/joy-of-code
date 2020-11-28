import { FC } from 'react'
import { Box } from '@chakra-ui/react'

import { Layout } from '@/components/layout'
import { CardsGrid, HeadingPrimary } from '@/components/ui'

interface Props {
  category: string
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

const Category: FC<Props> = ({ category, posts }) => {
  return (
    <Layout title={`Joy of Code | ${category}`}>
      <Box px={[8, 16]}>
        <Box>
          <HeadingPrimary withDivider>{category}</HeadingPrimary>
        </Box>

        <Box my={10}>
          <CardsGrid posts={posts} />
        </Box>
      </Box>
    </Layout>
  )
}

export default Category
