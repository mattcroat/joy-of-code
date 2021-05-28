import { Box, Divider, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'

export default function NotFound() {
  const router = useRouter()
  const primaryHeadingColor = useColorModeValue('gray.600', 'gray.400')

  React.useEffect(() => {
    setTimeout(() => router.replace('/'), 4000)
  }, [router])

  return (
    <Layout>
      <Box maxW={{ sm: '60%', lg: '80%' }} mx="auto" px={{ base: 8, sm: 0 }}>
        <Heading
          as="h1"
          color={primaryHeadingColor}
          fontSize={['3xl', '4xl', '5xl']}
          letterSpacing="-1px"
          lineHeight="normal"
          maxW="600px"
        >
          Oops!
          <Emoji animate emoji="💩" label="Face screaming in fear emoji" />
        </Heading>

        <Divider bg="gray.600" borderBottom="none" h="4px" my={2} w="40px" />

        <Box as="span" d="block" fontSize={[16, 18, 20]} my={8}>
          <strong>Page not found.</strong> Redirecting...
        </Box>
      </Box>
    </Layout>
  )
}
