// ui components
import { Box } from '@chakra-ui/react'

// components
import { MainHeading, SecondaryHeading } from '@/components/Headings'
import Layout from '@/components/Layout'
import CardsGrid from '@/components/CardsGrid'

const IndexPage = (): JSX.Element => (
  <Layout title="Joy of Code | ☕ Freshly Brewed Web Development Content">
    <Box px={16}>
      <Box>
        <MainHeading title="Welcome Friend 👋" />
      </Box>

      <Box mt={12}>
        <SecondaryHeading title="Latest" withDivider />
        <CardsGrid />
      </Box>

      <Box mt={12}>
        <SecondaryHeading title="Previously" withDivider />
        <CardsGrid />
      </Box>
    </Box>
  </Layout>
)

export default IndexPage
