import { ReactNode } from 'react'
import { Divider, Heading, Text, useColorMode } from '@chakra-ui/react'

import { mutedColor, primaryColor } from '@/styles/colors'

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

export function Hr() {
  return <Divider h="4px" w="40px" bg="gray.600" my={2} borderBottom="none" />
}

export function H1({ divider = true, ...props }: HeadingProps) {
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
      {divider && <Hr />}
    </>
  )
}

export function H2({ divider = false, ...props }: HeadingProps) {
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
      {divider && <Hr />}
    </>
  )
}

export function Paragraph({ spacing = 8, ...props }: ParagraphProps) {
  return (
    <Text fontSize={[16, 18, 20]} lineHeight="1.6" my={spacing} {...props} />
  )
}
