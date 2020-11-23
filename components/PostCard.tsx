// ui components
import { Box, Heading } from '@chakra-ui/react'
import {
  faHtml5,
  faJs,
  faReact,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    icon: IconDefinition
  }
}

// card theme
const postCardTheme: PostCardTheme = {
  js: {
    bg: 'radial-gradient(circle, #FAF089, #ECC94B 100%)',
    color: 'black',
    icon: faJs,
  },
  react: {
    bg: 'radial-gradient(circle, #4299e1, #2b6cb0 100%)',
    color: 'white',
    icon: faReact,
  },
  web: {
    bg: 'radial-gradient(circle, #FBD38D, #ED8936 100%)',
    color: 'black',
    icon: faHtml5,
  },
}

const PostCard = ({ theme, title }: PostCardProps): JSX.Element => (
  <Tilt>
    <Link href="/posts/test">
      <Box
        position="relative"
        h="240px"
        maxW="400px"
        bg={postCardTheme[theme].bg}
        borderRadius="base"
        boxShadow="lg"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={4}
          right={4}
          color={postCardTheme[theme].color}
        >
          <FontAwesomeIcon icon={postCardTheme[theme].icon} size="2x" />
        </Box>
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
