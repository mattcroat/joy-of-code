// ui components
import {
  Box as ChakraBox,
  Code as ChakraCode,
  Divider as ChakraDivider,
  Heading as ChakraHeading,
  Link as ChakraLink,
  List as ChakraList,
  ListItem as ChakraListItem,
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
  href: string
}

interface CodeProps {
  children: ReactNode
}

interface ImageProps {
  alt: string
  src: string
}

interface ListProps {
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

export const Link = ({ children, href }: TextProps): JSX.Element => (
  <ChakraLink
    color="orange.200"
    href={href}
    rel="noreferrer noopener"
    target="_blank"
  >
    {children}
  </ChakraLink>
)

export const Code = ({ children }: CodeProps): JSX.Element => (
  <ChakraCode bg="orange.200" color="orange.900" fontSize="inherit">
    {children}
  </ChakraCode>
)

export const Image = ({ alt, src }: ImageProps): JSX.Element => (
  <ChakraBox mx={{ xl: '-24' }}>
    <img alt={alt} src={src} />
  </ChakraBox>
)

export const List = ({ children }: ListProps): JSX.Element => (
  <ChakraList listStyleType="disc" fontSize={20} pl={4} mb={8} mt={2} ml={2}>
    {children}
  </ChakraList>
)

export const ListOrdered = ({ children }: ListProps): JSX.Element => (
  <ChakraList listStyleType="decimal" fontSize={20} pl={4} mb={8} mt={2} ml={2}>
    {children}
  </ChakraList>
)

export const ListItem = ({ children }: ListProps): JSX.Element => (
  <ChakraListItem mb={2}>{children}</ChakraListItem>
)
