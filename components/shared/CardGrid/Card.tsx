import { Box } from '@chakra-ui/react'

import { cardTheme } from '@/root/styles/cardTheme'
import { CustomLink } from '@/root/components/shared/CustomLink'
import { Icon } from '@/root/components/shared/Icon'
import { MotionBox } from '@/root/components/shared/MotionBox'
import { playSound } from '@/root/utils/helpers/playSound'

interface CardProps {
  category: string
  title: string
  slug: string
}

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
}

export function Card({ category, title, slug }: CardProps) {
  return (
    <CustomLink
      href={`/${encodeURIComponent(slug)}`}
      isInternal
      prefetch={false}
    >
      <MotionBox
        _hover={{ boxShadow: 'md' }}
        borderRadius="lg"
        h={['200px', '240px']}
        onClick={() => playSound('page')}
        overflow="hidden"
        position="relative"
        variants={cardVariants}
        whileHover={{ y: -10 }}
        zIndex={0}
      >
        <Box bgImage={cardTheme[category].bg} bgPos="0 20%" h="100%"></Box>
        <Box
          color={cardTheme[category].color}
          position="absolute"
          right={4}
          top={4}
          zIndex="2"
        >
          <Icon icon={cardTheme[category].icon} />
        </Box>
        <Box
          as="span"
          bottom={4}
          color={cardTheme[category].color}
          fontSize={['3xl', '4xl']}
          fontWeight="bold"
          left={4}
          letterSpacing="-2px"
          lineHeight="1"
          maxW="80%"
          position="absolute"
          textShadow={`2px 2px hsla(0, 0%, 0%, 100%)`}
          zIndex="2"
        >
          {title}
        </Box>
      </MotionBox>
    </CustomLink>
  )
}
