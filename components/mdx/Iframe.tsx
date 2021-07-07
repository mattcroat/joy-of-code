import { Box } from '@chakra-ui/react'
import React from 'react'

import { useIntersectionObserver } from '@/root/hooks/useIntersectionObserver'

interface IframeProps {
  height: string
  src: string
  title: string
}

export function Iframe({ height = '600px', src, title }: IframeProps) {
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  const iframeRef = React.useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    target: iframeRef,
    onIntersect: () => setIsVisible(true),
    enabled: true,
  })

  return (
    <Box ref={iframeRef}>
      {isVisible && (
        <Box
          as="iframe"
          bg="white"
          h={height}
          mx={{ xl: '-10%' }}
          my={{ sm: 8 }}
          src={src}
          title={title}
          w={{ base: '100%', xl: '120%' }}
        />
      )}
    </Box>
  )
}
