// ui components
import { Divider as ChakraDivider, Heading } from '@chakra-ui/react'

// types
interface HeadingProps {
  title: string
  withDivider?: boolean
}

const Divider = (): JSX.Element => (
  <ChakraDivider h="4px" w="40px" mt={2} mb={4} bg="gray.600" />
)

export const MainHeading = ({
  title,
  withDivider,
}: HeadingProps): JSX.Element => (
  <>
    <Heading as="h1" fontSize="5xl" color="gray.400" letterSpacing="-2px">
      {title}
    </Heading>
    {withDivider && <Divider />}
  </>
)

export const SecondaryHeading = ({
  title,
  withDivider,
}: HeadingProps): JSX.Element => (
  <>
    <Heading as="h2" color="gray.400" letterSpacing="-2px">
      {title}
    </Heading>
    {withDivider && <Divider />}
  </>
)
