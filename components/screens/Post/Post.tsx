import { Box } from '@chakra-ui/react'

import { Layout } from '@/root/components/shared/Layout'

interface Props {
  title: string
  content: JSX.Element
}

export function Post({ title, content }: Props) {
  return (
    <Layout title={title}>
      <Box w={{ lg: '90ch' }} mx="auto" px={8}>
        {content}
      </Box>
    </Layout>
  )
}
