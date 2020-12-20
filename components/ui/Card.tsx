import { FC } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { Icon } from '@/components/icons'
import { Tilt } from '@/components/motion'
import { CustomLink } from '@/components/ui'

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
  <CustomLink href={`/posts/${encodeURIComponent(slug)}`} isInternal>
    <Tilt>
      <MotionBox
        position="relative"
        maxW="400px"
        h={['200px', '240px']}
        borderRadius="base"
        boxShadow="lg"
        overflow="hidden"
        variants={cardVariant}
      >
        <Box
          h="100%"
          w="100%"
          bg={`${cardTheme[theme].bg}, url('/nebula.webp')`}
          bgPos="0 20%"
          bgBlendMode="color"
          opacity="0.8"
          _after={{
            content: '" "',
            w: '100%',
            h: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            bg: cardTheme[theme].bg,
            opacity: 0.1,
            zIndex: 1,
          }}
        ></Box>
        <Box
          position="absolute"
          top={4}
          right={4}
          color={cardTheme[theme].color}
          zIndex="2"
        >
          <Icon icon={cardTheme[theme].icon} />
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
          zIndex="2"
        >
          {title}
        </Heading>
      </MotionBox>
    </Tilt>
  </CustomLink>
)

export default Card
