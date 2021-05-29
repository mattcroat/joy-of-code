import { Box } from '@chakra-ui/react'
import React from 'react'

import { cardTheme } from '@/root/styles/cardTheme'
import { Icon } from '@/root/components/shared/Icon'

interface ModalProps {
  category: string
  title: string
  modalOpen: (arg: boolean) => void
}

export function Modal({ category, title, modalOpen }: ModalProps) {
  return (
    <Box
      bg="hsl(0 0% 0% / 80%)"
      bottom="0"
      d="grid"
      onClick={() => modalOpen(false)}
      placeItems="center"
      pos="absolute"
      top="0"
      w="100%"
      zIndex="1"
    >
      <Box
        bgImage={cardTheme[category].bg}
        bgRepeat="no-repeat"
        bgSize="cover"
        h={630}
        pos="relative"
        w={1200}
      >
        <Box
          as="span"
          bg="white"
          color="gray.900"
          fontSize="lg"
          fontWeight="bold"
          left={8}
          pos="absolute"
          px={4}
          py={2}
          textTransform="uppercase"
          top={8}
        >
          <Box as="span" css={{ transform: 'translateY(2px)' }} d="block">
            Joy Of Code
          </Box>
        </Box>
        <Box
          as="span"
          bottom={8}
          fontSize="8xl"
          fontWeight="bold"
          left={8}
          letterSpacing="-2px"
          lineHeight="1"
          maxW="80%"
          pos="absolute"
          textShadow={`2px 2px 0 hsl(0 0% 0% / 100%)`}
        >
          {title}
        </Box>
        <Box color={cardTheme[category].color} pos="absolute" right={8} top={8}>
          <Icon icon={cardTheme[category].icon} size={64} />
        </Box>
      </Box>
    </Box>
  )
}
