// ui components
import { SimpleGrid } from '@chakra-ui/react'

// components
import PostCard from '@/components/PostCard'

const CardsGrid = (): JSX.Element => (
  <SimpleGrid minChildWidth="480px" spacing={8}>
    <PostCard />
  </SimpleGrid>
)

export default CardsGrid
