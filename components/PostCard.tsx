// ui components
import { Box, Heading } from '@chakra-ui/react'

// components
import Tilt from '@/components/Tilt'

const Card = (): JSX.Element => (
  <Tilt>
    <Box
      position="relative"
      h="280px"
      maxW="480px"
      bg="linear-gradient(45deg, magenta, wheat)"
      border="1px"
      borderColor="gray.900"
      borderRadius="4px"
      boxShadow="lg"
      overflow="hidden"
    >
      <Heading
        as="h2"
        position="absolute"
        bottom={4}
        left={4}
        fontSize="4rem"
        lineHeight="1"
        color="white"
        letterSpacing="-2px"
        textShadow="4px 4px 0 rebeccapurple"
      >
        What are Closures in JavaScript?
      </Heading>
    </Box>
  </Tilt>
)

export default Card
