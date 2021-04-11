import React from 'react'
import { Box } from '@chakra-ui/react'

import { Icon } from '@/root/components/shared/Icon'
import { ChakraMotion } from '@/root/components/shared/ChakraMotion'
import { cardTheme } from '@/root/styles/card'

type ModalProps = {
  theme: string
  title: string
  modalOpen: (arg: boolean) => void
}

export function Modal({ theme, title, modalOpen }: ModalProps) {
  return (
    <ChakraMotion
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => modalOpen(false)}
      d="grid"
      placeItems="center"
      w="100%"
      pos="absolute"
      top="0"
      bottom="0"
      bg="hsl(0 0% 0% / 80%)"
      zIndex="1"
      opacity="0"
    >
      <Box
        pos="relative"
        h={630}
        w={1200}
        bg={`${cardTheme[theme].bg}, url('/images/nebula.webp')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgBlendMode="color"
      >
        <Box
          as="span"
          pos="absolute"
          top={8}
          left={8}
          px={4}
          py={2}
          fontSize="lg"
          fontWeight="bold"
          textTransform="uppercase"
          color="gray.900"
          bg="white"
        >
          Joy Of Code
        </Box>
        <Box
          as="span"
          maxW="80%"
          pos="absolute"
          bottom={8}
          left={8}
          fontSize="8xl"
          fontWeight="bold"
          lineHeight="1"
          letterSpacing="-2px"
          textShadow={`2px 2px 0 hsl(0 0% 0% / 100%)`}
          textTransform="capitalize"
        >
          {title}
        </Box>
        <Box pos="absolute" top={8} right={8} color={cardTheme[theme].color}>
          <Icon icon={cardTheme[theme].icon} size={64} />
        </Box>
      </Box>
    </ChakraMotion>
  )
}
