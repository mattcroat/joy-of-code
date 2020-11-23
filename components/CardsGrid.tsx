// ui components
import { Grid } from '@chakra-ui/react'

// components
import Card from '@/components/Card'

const CardsGrid = (): JSX.Element => (
  <Grid gap={8} templateColumns="repeat(auto-fit, minmax(400px, 400px))">
    <Card theme="js" title="What are Closures in JavaScript" />
    <Card theme="react" title="React Hooks" />
    <Card theme="web" title="Why Accessibility Matters" />
  </Grid>
)

export default CardsGrid
