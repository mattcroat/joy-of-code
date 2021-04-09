import { Box } from '@chakra-ui/react'

import { Icon } from '@/root/components/shared/Icon'
import { cardTheme } from '@/root/styles/card'

export default function Editor() {
  return (
    <Box ml="80px">
      <Box
        pos="relative"
        h={630}
        w={1200}
        mt={8}
        mx="auto"
        bg={`${cardTheme['React'].bg}, url('/images/nebula.webp')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgBlendMode="color"
        border="8px solid white"
      >
        <Box
          as="span"
          position="absolute"
          top={10}
          left={8}
          px={4}
          py={2}
          fontSize="lg"
          fontWeight="bold"
          textTransform="uppercase"
          color="gray.900"
          bg="white"
        >
          Joy Of Code
        </Box>
        <Box
          as="span"
          maxW="80%"
          position="absolute"
          bottom={8}
          left={8}
          fontSize="8xl"
          fontWeight="bold"
          lineHeight="1"
          letterSpacing="-2px"
          textShadow={`2px 2px 0 hsl(0 0% 0% / 100%)`}
        >
          Placeholder
        </Box>
        <Box
          position="absolute"
          top={8}
          right={8}
          color={cardTheme['React'].color}
        >
          <Icon icon={cardTheme['React'].icon} size={64} />
        </Box>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  const production = process.env.NODE_ENV === 'production'

  // secret hidden route 🤫
  if (production) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
