import { Divider, Heading, Text } from '@chakra-ui/react'

interface Children {
  children: string
}

const MainHeading = (children: Children): JSX.Element => {
  return (
    <Heading
      as="h1"
      fontWeight="700"
      color="gray.400"
      letterSpacing="-1px"
      {...children}
    />
  )
}

const SecondaryHeading = (children: Children): JSX.Element => {
  return (
    <Heading
      as="h2"
      fontWeight="700"
      color="gray.400"
      letterSpacing="-1px"
      {...children}
    />
  )
}

const BodyText = (children: Children): JSX.Element => {
  return <Text fontSize={20} lineHeight="1.6" mt={4} {...children} />
}

const Separator = (children: Children): JSX.Element => {
  return <Divider h="2px" w="20px" bg="gray.400" mt={4} {...children} />
}

const MDXComponents = {
  h1: MainHeading,
  h2: SecondaryHeading,
  p: BodyText,
  hr: Separator,
}

export default MDXComponents
