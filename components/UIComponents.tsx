// ui components
import {
  Divider as ChakraDivider,
  Heading as ChakraHeading,
  Link as ChakraLink,
  Text as ChakraText,
} from '@chakra-ui/react'

// types
import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  withDivider?: boolean
}

interface TextProps {
  children: ReactNode
}

// divider
export const Divider = (): JSX.Element => (
  <ChakraDivider
    h="4px"
    w="40px"
    bg="gray.600"
    mt={2}
    mb={4}
    borderBottom="none"
  />
)

// typography
export const MainHeading = ({
  children,
  withDivider,
}: HeadingProps): JSX.Element => (
  <>
    <ChakraHeading
      as="h1"
      maxW="480px"
      fontSize={['4xl', '5xl']}
      color="gray.400"
      lineHeight="normal"
      letterSpacing="-1px"
    >
      {children}
    </ChakraHeading>
    {withDivider && <Divider />}
  </>
)

export const SecondaryHeading = ({
  children,
  withDivider,
}: HeadingProps): JSX.Element => (
  <>
    <ChakraHeading
      as="h2"
      maxW="480px"
      fontSize={['3xl', '4xl']}
      color="gray.400"
      letterSpacing="-1px"
    >
      {children}
    </ChakraHeading>
    {withDivider && <Divider />}
  </>
)

export const Text = ({ children }: TextProps): JSX.Element => (
  <ChakraText fontSize={20} lineHeight="1.6" my={8}>
    {children}
  </ChakraText>
)

export const Link = ({ children }: TextProps): JSX.Element => (
  <ChakraLink color="orange.200">{children}</ChakraLink>
)
