import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

import { CustomLink } from '@/root/components/shared/CustomLink'
import { Emoji } from '@/root/components/shared/Emoji'

export function PostCredits() {
  const router = useRouter()
  const href = `https://github.com/mattcroat/joy-of-code/blob/main/posts/${router?.query?.slug}.mdx`

  const aboutBackground = useColorModeValue('gray.100', 'gray.900')
  const aboutTextColor = useColorModeValue('gray.600', 'gray.400')
  const contributeBackground = useColorModeValue('teal.200', 'teal.900')
  const contributeTextColor = useColorModeValue('teal.900', 'teal.200')

  return (
    <Box d={{ md: 'flex' }} justifyContent="space-between" pb={12}>
      <Box
        bg={contributeBackground}
        borderRadius="base"
        color={contributeTextColor}
        flexBasis="49%"
        mb={{ base: 4, md: 0 }}
        px={6}
        py={4}
      >
        <Box
          alignItems="center"
          as="span"
          d="flex"
          fontSize="2xl"
          justifyContent="center"
        >
          <Emoji
            emoji="❤️"
            fontSize={['2xl', '3xl', '4xl']}
            label="Red heart emoji"
            spacing={0}
          />
          <Box as="span" pl={2}>
            Contribute
          </Box>
        </Box>

        <Text fontSize={[16, 18, 20]} my={4}>
          Found a mistake? Contribute on GitHub by{' '}
          <CustomLink href={href}>{'📝'} editing it</CustomLink>.
        </Text>

        <Text fontSize={[16, 18, 20]} my={4}>
          Thank you!
          <Emoji
            emoji="🥰"
            label="Smiling face with hearts emoji"
            spacing={1}
          />
        </Text>
      </Box>

      <Box
        bg={aboutBackground}
        borderRadius="base"
        color={aboutTextColor}
        flexBasis="49%"
        mb={{ base: 4, md: 0 }}
        px={6}
        py={4}
      >
        <Box
          alignItems="center"
          as="span"
          d="flex"
          fontSize="2xl"
          justifyContent="center"
          textAlign="center"
        >
          <Emoji
            emoji="☕"
            fontSize={['2xl', '3xl', '4xl']}
            label="Coffee emoji"
            spacing={0}
          />
          <Box as="span" pl={2}>
            About Myself
          </Box>
        </Box>

        <Text fontSize={[16, 18, 20]} my={4}>
          I'm{' '}
          <CustomLink href="https://github.com/mattcroat">Matija</CustomLink>{' '}
          from {'🇭🇷'} Croatia and I'm infinitely curious at how things work but
          mostly passionate about {'☕'} JavaScript and {'🎨'} UI/UX.
        </Text>
      </Box>
    </Box>
  )
}
