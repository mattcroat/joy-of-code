// ui components
import { Box } from '@chakra-ui/react'

// components
import { MainHeading } from '@/components/Headings'
import Layout from '@/components/Layout'
import CardsGrid from '@/components/CardsGrid'

const IndexPage = (): JSX.Element => (
  <Layout title="Joy of Code | Index">
    <Box px={16}>
      <MainHeading title="Posts" />
      <CardsGrid />
    </Box>
  </Layout>
)

export default IndexPage
