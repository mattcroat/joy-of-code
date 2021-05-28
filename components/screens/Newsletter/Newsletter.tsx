import { Divider, Heading, Text, useColorModeValue } from '@chakra-ui/react'

import { Layout } from '@/root/components/shared/Layout'
import { Newsletter as MailingList } from '@/root/components/shared/Newsletter'

export function Newsletter() {
  const primaryHeadingColor = useColorModeValue('gray.600', 'gray.400')

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
        Newsletter
      </Heading>

      <Divider bg="gray.600" borderBottom="none" h="4px" my={2} w="40px" />

      <Text fontSize={[16, 18, 20]} lineHeight="1.6" my={8}>
        If you want to receive occasional updates to get notified when I release
        a new post, or what I&apos;m up to.
      </Text>

      <MailingList />
    </Layout>
  )
}
