import { FC, ReactNode } from 'react'
import { Divider, Heading, Text, useColorMode } from '@chakra-ui/react'

import { mutedColor, primaryColor } from '@/styles/colors'

interface HeadingProps {
  children: ReactNode
  withDivider?: boolean
}

interface ParagraphProps {
  children: ReactNode
}

export const Hr: FC = () => (
  <Divider h="4px" w="40px" bg="gray.600" mt={2} mb={4} borderBottom="none" />
)

export const H1: FC<HeadingProps> = ({ children, withDivider }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Heading
        as="h1"
        maxW="480px"
        fontSize={['4xl', '5xl']}
        color={mutedColor[colorMode]}
        lineHeight="normal"
        letterSpacing="-1px"
      >
        {children}
      </Heading>
      {withDivider && <Hr />}
    </>
  )
}

export const H2: FC<HeadingProps> = ({ children, withDivider }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Heading
        as="h2"
        maxW="480px"
        fontSize={['3xl', '4xl']}
        color={primaryColor[colorMode]}
        letterSpacing="-1px"
      >
        {children}
      </Heading>
      {withDivider && <Hr />}
    </>
  )
}

export const Paragraph: FC<ParagraphProps> = ({ children }) => (
  <Text fontSize={20} lineHeight="1.6" my={8}>
    {children}
  </Text>
)
