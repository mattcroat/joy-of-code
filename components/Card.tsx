// ui components
import { Box, Heading } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Link from '@/components/Link'
import Tilt from '@/components/Tilt'

// styles
import cardTheme from '@/styles/card'

// types
interface CardProps {
  theme: string
  title: string
}

const Card = ({ theme, title }: CardProps): JSX.Element => (
  <Tilt>
    <Link href="/posts/test">
      <Box
        position="relative"
        h={['200px', '240px']}
        maxW="400px"
        bg={cardTheme[theme].bg}
        borderRadius="base"
        boxShadow="lg"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={4}
          right={4}
          color={cardTheme[theme].color}
        >
          <FontAwesomeIcon icon={cardTheme[theme].icon} size="2x" />
        </Box>
        <Heading
          as="h3"
          maxW="380px"
          position="absolute"
          bottom={4}
          left={4}
          fontSize={['4xl', '5xl']}
          lineHeight="1"
          color={cardTheme[theme].color}
          letterSpacing="-2px"
        >
          {title}
        </Heading>
      </Box>
    </Link>
  </Tilt>
)

export default Card
