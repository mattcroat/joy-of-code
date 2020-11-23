// ui components
import { Box, Heading } from '@chakra-ui/react'

// components
import Link from '@/components/Link'
import Tilt from '@/components/Tilt'

// types
interface PostCardProps {
  theme: string
  title: string
}

interface PostCardTheme {
  [key: string]: {
    bg: string
    color: string
  }
}

// card theme
const postCardTheme: PostCardTheme = {
  js: {
    bg: 'radial-gradient(circle, #FAF089, #ECC94B 100%)',
    color: 'black',
  },
  react: {
    bg: 'radial-gradient(circle, #4299e1, #2b6cb0 100%)',
    color: 'white',
  },
  web: {
    bg: 'radial-gradient(circle, #FBD38D, #ED8936 100%)',
    color: 'black',
  },
}

const PostCard = ({ theme, title }: PostCardProps): JSX.Element => (
  <Tilt>
    <Link href="/posts/test" as="/posts/test">
      <Box
        position="relative"
        h="240px"
        maxW="400px"
        bg={postCardTheme[theme].bg}
        borderRadius="base"
        boxShadow="lg"
        overflow="hidden"
      >
        <Heading
          as="h2"
          maxW="380px"
          position="absolute"
          bottom={4}
          left={4}
          fontSize="3rem"
          lineHeight="1"
          color={postCardTheme[theme].color}
          letterSpacing="-2px"
        >
          {title}
        </Heading>
      </Box>
    </Link>
  </Tilt>
)

export default PostCard
