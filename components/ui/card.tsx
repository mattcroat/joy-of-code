import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { Icon } from '@/components/icons'
import { Tilt } from '@/components/motion'
import { CustomLink } from '@/components/ui'
import { cardTheme } from '@/styles/card'

interface Props {
  theme: string
  title: string
  slug: string
}

const card = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
}

const CardContainer = motion.custom(Box)

export function Card({ theme, title, slug }: Props) {
  return (
    <CustomLink href={`/${encodeURIComponent(slug)}`} isInternal>
      <Tilt>
        <CardContainer
          position="relative"
          h={['200px', '240px']}
          borderRadius="lg"
          boxShadow="lg"
          overflow="hidden"
          variants={card}
          _hover={{
            boxShadow: '2xl',
          }}
        >
          <Box
            h="100%"
            bg={`${cardTheme[theme].bg}, url('/images/nebula.webp')`}
            bgPos="0 20%"
            bgBlendMode="color"
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
            maxW="80%"
            position="absolute"
            bottom={4}
            left={4}
            fontSize={['3xl', '4xl']}
            lineHeight="1"
            color={cardTheme[theme].color}
            letterSpacing="-2px"
            zIndex="2"
            textShadow={`2px 2px hsla(0, 0%, 0%, 100%)`}
          >
            {title}
          </Heading>
        </CardContainer>
      </Tilt>
    </CustomLink>
  )
}
