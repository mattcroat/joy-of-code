import { Box, Divider, Heading, SimpleGrid } from '@chakra-ui/react'

import Layout from '@/components/Layout'

const IndexPage = (): JSX.Element => (
  <Layout title="Joy of Code | Index">
    <Box px={16}>
      <Heading as="h1" color="gray.400" letterSpacing="-2px">
        Posts
      </Heading>

      <Divider h="2px" w="20px" my={4} bg="gray.400" />

      <SimpleGrid minChildWidth="480px" spacing={8}>
        <Box
          position="relative"
          h="280px"
          maxW="480px"
          bg="linear-gradient(45deg, magenta, wheat)"
          border="1px"
          borderColor="gray.900"
          borderRadius="4px"
          boxShadow="lg"
          overflow="hidden"
        >
          <Heading
            as="h2"
            position="absolute"
            bottom={4}
            left={4}
            fontSize="4rem"
            lineHeight="1"
            color="white"
            letterSpacing="-2px"
            textShadow="4px 4px 0 rebeccapurple"
          >
            What are Closures in JavaScript?
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  </Layout>
)

export default IndexPage
