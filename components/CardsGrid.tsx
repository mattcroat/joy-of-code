// ui components
import { Grid } from '@chakra-ui/react'

// components
import PostCard from '@/components/PostCard'

const CardsGrid = (): JSX.Element => (
  <Grid gap={8} templateColumns="repeat(auto-fit, minmax(400px, 400px))">
    <PostCard theme="js" title="What are Closures in JavaScript" />
    <PostCard theme="react" title="React Hooks" />
    <PostCard theme="web" title="Why Accessibility Matters" />
  </Grid>
)

export default CardsGrid
