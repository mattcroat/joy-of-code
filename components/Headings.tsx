// ui components
import { Divider, Heading } from '@chakra-ui/react'

// types
interface MainHeadingProps {
  title: string
}

export const MainHeading = ({ title }: MainHeadingProps): JSX.Element => (
  <>
    <Heading as="h1" color="gray.400" letterSpacing="-2px">
      {title}
    </Heading>
    <Divider h="2px" w="20px" my={4} bg="gray.400" />
  </>
)
