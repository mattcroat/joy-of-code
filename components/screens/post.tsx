import { Box } from '@chakra-ui/react'
import { Layout } from '@/components/layout'

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
