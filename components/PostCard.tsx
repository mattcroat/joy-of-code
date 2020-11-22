// ui components
import { Box, Heading } from '@chakra-ui/react'

// components
import Tilt from '@/components/Tilt'

// types
interface CardProps {
  theme: string
  title: string
}

interface CardTheme {
  [key: string]: {
    bg: string
    color: string
  }
}

// card theme
const cardTheme: CardTheme = {
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

const Card = ({ theme, title }: CardProps): JSX.Element => (
  <Tilt>
    <Box
      position="relative"
      h="280px"
      maxW="480px"
      bg={cardTheme[theme].bg}
      border="1px"
      borderColor="gray.900"
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
        color={cardTheme[theme].color}
        letterSpacing="-2px"
      >
        {title}
      </Heading>
    </Box>
  </Tilt>
)

export default Card
