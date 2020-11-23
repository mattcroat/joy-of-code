// ui components
import { Box } from '@chakra-ui/react'

// components
import CardsGrid from '@/components/CardsGrid'
import Layout from '@/components/Layout'
import { MainHeading, SecondaryHeading } from '@/components/UIComponents'

const IndexPage = (): JSX.Element => (
  <Layout title="Joy of Code | ☕ Freshly Brewed Web Development Content">
    <Box px={16}>
      <Box>
        <MainHeading>Welcome Friend 👋</MainHeading>
      </Box>

      <Box mt={12}>
        <SecondaryHeading withDivider>Latest</SecondaryHeading>
        <CardsGrid />
      </Box>

      <Box mt={12} mb={12}>
        <SecondaryHeading withDivider>Previously</SecondaryHeading>
        <CardsGrid />
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
