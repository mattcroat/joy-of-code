import { Box, Divider, Heading, useColorModeValue } from '@chakra-ui/react'

import { CardGrid } from '@/root/components/shared/CardGrid'
import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'

interface HomeProps {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

export function Home({ posts }: HomeProps) {
  const primaryHeadingColor = useColorModeValue('gray.600', 'gray.400')
  const secondaryHeadingColor = useColorModeValue('blue.600', 'orange.200')

  return (
    <Layout>
      <Heading
        as="h1"
        color={primaryHeadingColor}
        fontSize={['3xl', '4xl', '5xl']}
        letterSpacing="-1px"
        lineHeight="normal"
        maxW="600px"
      >
        Welcome Friend
        <Emoji animate emoji="👋" label="Waving hand emoji" />
      </Heading>

      <Divider bg="gray.600" borderBottom="none" h="4px" my={2} w="40px" />

      {posts.length < 1 && (
        <Box fontSize={[16, 18, 20]} my={8}>
          Nothing to see here...
          <Emoji animate emoji="🕵️" label="Spy emoji" spacing={2} />
        </Box>
      )}

      <Box py={{ base: 8, md: 12 }}>
        <Heading
          as="h2"
          color={secondaryHeadingColor}
          fontSize={['2xl', '3xl', '4xl']}
          letterSpacing="-1px"
          maxW="600px"
          mb={8}
        >
          Latest
        </Heading>
        <CardGrid posts={posts} />
      </Box>
    </Layout>
  )
}
