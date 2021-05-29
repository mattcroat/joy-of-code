import { Box, Divider, Heading, useColorModeValue } from '@chakra-ui/react'

import { CardGrid } from '@/root/components/shared/CardGrid'
import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'

interface CategoryProps {
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

export function Category({ category, posts, title }: CategoryProps) {
  const primaryHeadingColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Layout title={`Joy of Code | ${category}`}>
      <Heading
        as="h1"
        color={primaryHeadingColor}
        fontSize={['3xl', '4xl', '5xl']}
        letterSpacing="-1px"
        lineHeight="normal"
        maxW="600px"
      >
        {title}
      </Heading>

      <Divider bg="gray.600" borderBottom="none" h="4px" my={2} w="40px" />

      {posts.length < 1 && (
        <Box fontSize={[16, 18, 20]} my={8}>
          Nothing to see here...
          <Emoji animate emoji="🕵️" label="Spy emoji" spacing={2} />
        </Box>
      )}

      <Box my={10}>
        <CardGrid posts={posts} />
      </Box>
    </Layout>
  )
}
