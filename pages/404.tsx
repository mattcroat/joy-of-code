import React from 'react'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'
import { Title } from '@/root/components/shared/Typography'

export default function NotFound() {
  const router = useRouter()

  React.useEffect(() => {
    setTimeout(() => router.replace('/'), 4000)
  }, [router])

  return (
    <Layout>
      <Box maxW={{ sm: '60%', lg: '80%' }} mx="auto" px={{ base: 8, sm: 0 }}>
        <Title>
          Oops!
          <Emoji emoji="💩" label="Face screaming in fear emoji" animate />
        </Title>

        <Box as="span" d="block" fontSize={[16, 18, 20]} my={8}>
          <strong>Page not found.</strong> Redirecting...
        </Box>
      </Box>
    </Layout>
  )
}
