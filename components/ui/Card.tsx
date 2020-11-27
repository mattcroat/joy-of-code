import { FC } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

import { Tilt } from '@/components/motion'
import { NextLink } from '@/components/ui'

import cardTheme from '@/styles/card'

interface Props {
  theme: string
  title: string
  slug: string
}

const MotionBox = motion.custom(Box)

const cardVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
}

const Card: FC<Props> = ({ theme, title, slug }) => (
  <Tilt>
    <NextLink href={`/posts/${slug}`}>
      <MotionBox
        position="relative"
        maxW="400px"
        h={['200px', '240px']}
        bg={cardTheme[theme].bg}
        borderRadius="base"
        boxShadow="lg"
        overflow="hidden"
        variants={cardVariant}
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
          maxW="280px"
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
      </MotionBox>
    </NextLink>
  </Tilt>
)

export default Card
