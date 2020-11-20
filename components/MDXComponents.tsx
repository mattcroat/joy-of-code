import { Divider, Heading, Text } from '@chakra-ui/react'

interface Props {
  children?: string
}

const MainHeading = (props: Props): JSX.Element => (
  <Heading
    as="h1"
    fontWeight="700"
    color="gray.400"
    letterSpacing="-1px"
    {...props}
  />
)

const SecondaryHeading = (props: Props): JSX.Element => (
  <Heading
    as="h2"
    fontWeight="700"
    color="gray.400"
    letterSpacing="-1px"
    {...props}
  />
)

const BodyText = (props: Props): JSX.Element => (
  <Text fontSize={20} lineHeight="1.6" my={8} {...props} />
)

const Separator = (props: Props): JSX.Element => (
  <Divider h="2px" w="20px" bg="gray.400" mt={4} {...props} />
)

const MDXComponents = {
  h1: MainHeading,
  h2: SecondaryHeading,
  p: BodyText,
  hr: Separator,
}

export default MDXComponents
