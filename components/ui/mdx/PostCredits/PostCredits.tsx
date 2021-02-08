import { Box, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

import { CustomLink, Paragraph } from '@/root/components/ui'
import { Emoji } from '@/root/components/shared/Emoji'

import {
  aboutBg,
  aboutText,
  contributeBg,
  contributeText,
} from '@/root/styles/colors'

export function PostCredits() {
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
        px={6}
        py={4}
        textAlign="center"
        borderRadius="base"
        transition="background-color 0.2s, color 0.2s, transform 0.2s ease-out"
        _hover={{ transform: 'scale(1.04)', boxShadow: 'lg' }}
      >
        <Emoji
          emoji="❤️"
          label="Red heart emoji"
          fontSize={['2xl', '3xl', '4xl']}
        />
        <Box as="h3" fontSize="2xl" py={2}>
          Contribute
        </Box>

        <Box textAlign="left">
          <Paragraph spacing={4}>
            Found a mistake? I encourage you to contribute on GitHub by{' '}
            <CustomLink href={href}>editing it</CustomLink>.
          </Paragraph>
          <Paragraph spacing={4}>
            Thank you!
            <Emoji
              emoji="🥰"
              label="Smiling face with hearts emoji"
              spacing={1}
            />
          </Paragraph>
        </Box>
      </Box>

      <Box
        flexBasis="49%"
        bg={aboutBg[colorMode]}
        color={aboutText[colorMode]}
        mb={{ base: 4, md: 0 }}
        px={6}
        py={4}
        textAlign="center"
        borderRadius="base"
        transition="background-color 0.2s, color 0.2s, transform 0.2s ease-out"
        _hover={{ transform: 'scale(1.04)', boxShadow: 'lg' }}
      >
        <Emoji
          emoji="☕"
          label="Coffee emoji"
          fontSize={['2xl', '3xl', '4xl']}
        />
        <Box as="h3" fontSize="2xl" py={2}>
          About Myself
        </Box>

        <Box textAlign="left">
          <Paragraph spacing={4}>
            <CustomLink href="https://github.com/mattcroat">
              I&apos;m Matija.&nbsp;
            </CustomLink>
            I love sharing what I know in a simple, but practical way.
          </Paragraph>
        </Box>
      </Box>
    </Box>
  )
}
