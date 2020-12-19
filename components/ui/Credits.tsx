import { Box, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

import { CustomLink, H2, Paragraph } from '@/components/ui'
import { Emoji } from '@/components/ui'

import {
  aboutBg,
  aboutText,
  contributeBg,
  contributeText,
} from '@/styles/colors'

export function Credits() {
  const { colorMode } = useColorMode()
  const router = useRouter()

  const href = `https://github.com/mattcroat/joy-of-code/blob/main/posts/${router.query.slug}.mdx`

  return (
    <Box d={{ md: 'flex' }} justifyContent="space-between" my={16}>
      <Box
        flexBasis="49%"
        bg={contributeBg[colorMode]}
        color={contributeText[colorMode]}
        mb={{ base: 4, md: 0 }}
        p={4}
        borderRadius="base"
        transition="background-color 0.2s, color 0.2s"
      >
        <Paragraph spacing={4}>
          Found a mistake? I encourage you to contribute on GitHub by{' '}
          <CustomLink href={href}>editing it</CustomLink>.
        </Paragraph>

        <Paragraph spacing={4}>
          Thank you!{' '}
          <Emoji
            emoji="🥰"
            label="Smiling face with hearts emoji"
            spacing={1}
          />
        </Paragraph>
      </Box>

      <Box flexBasis="49%">
        <Box
          bg={aboutBg[colorMode]}
          color={aboutText[colorMode]}
          p={4}
          textAlign="center"
          transition="background-color 0.2s, color 0.2s"
        >
          <H2>
            <Emoji emoji="☕" label="Coffee emoji" />
          </H2>
          <Box as="h3" fontSize="2xl" py={2}>
            About Myself
          </Box>
          <Paragraph spacing={0}>
            I&apos;m Matija , and I love sharing what I know in a simple, and
            practical way.
          </Paragraph>
        </Box>
      </Box>
    </Box>
  )
}
