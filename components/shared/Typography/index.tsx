import { ReactNode } from 'react'
import {
  Divider,
  Heading,
  List,
  ListItem,
  Text,
  useColorMode,
} from '@chakra-ui/react'

import { mutedColor, primaryColor } from '@/root/styles/colors'

interface HeadingProps {
  children: ReactNode
  divider?: boolean
  [key: string]: any
}

interface ParagraphProps {
  children: ReactNode
  spacing?: number
  [key: string]: any
}

interface ListProps {
  children: ReactNode
}

export function Spacer() {
  return <Divider h="4px" w="40px" bg="gray.600" my={2} borderBottom="none" />
}

export function Title({ divider = true, ...props }: HeadingProps) {
  const { colorMode } = useColorMode()

  return (
    <>
      <Heading
        as="h1"
        maxW="600px"
        fontSize={['3xl', '4xl', '5xl']}
        color={mutedColor[colorMode]}
        lineHeight="normal"
        letterSpacing="-1px"
        {...props}
      />
      {divider && <Spacer />}
    </>
  )
}

export function Subheading({ divider = false, ...props }: HeadingProps) {
  const { colorMode } = useColorMode()

  return (
    <>
      <Heading
        as="h2"
        maxW="600px"
        mt={{ md: 20 }}
        mb={{ md: 8 }}
        fontSize={['2xl', '3xl', '4xl']}
        color={primaryColor[colorMode]}
        letterSpacing="-1px"
        {...props}
      />
      {divider && <Spacer />}
    </>
  )
}

export function Paragraph({ spacing = 8, ...props }: ParagraphProps) {
  return (
    <Text fontSize={[16, 18, 20]} lineHeight="1.6" my={spacing} {...props} />
  )
}

export function Olist({ children }: ListProps) {
  return (
    <List
      listStyleType="decimal"
      fontSize={[16, 18, 20]}
      pl={4}
      mb={8}
      mt={2}
      ml={2}
    >
      {children}
    </List>
  )
}

export function Ulist({ children }: ListProps) {
  return (
    <List
      listStyleType="disc"
      fontSize={[16, 18, 20]}
      pl={4}
      mb={8}
      mt={2}
      ml={2}
    >
      {children}
    </List>
  )
}

export function Li({ children }: ListProps) {
  return <ListItem mb={2}>{children}</ListItem>
}
