import { Box } from '@chakra-ui/react'
import React from 'react'

import { useIntersectionObserver } from '@/root/hooks/useIntersectionObserver'

interface IframeProps {
  height: string
  src: string
  title: string
  load?: boolean
}

export function Iframe({
  height = '600px',
  src,
  title,
  load = true,
}: IframeProps) {
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  const [shouldLoad, setShouldLoad] = React.useState<boolean>(false)

  const iframeRef = React.useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    target: iframeRef,
    onIntersect: () => setIsVisible(true),
    enabled: true,
  })

  if (!load) {
    return (
      <Box ref={iframeRef}>
        {!shouldLoad && (
          <Box
            alignItems="center"
            bg="gray.700"
            borderRadius="base"
            d="flex"
            fontSize="2xl"
            fontWeight="700"
            h={height}
            justifyContent="center"
            onClick={() => setShouldLoad(true)}
          >
            {`👆 Tap to Load Example`}
          </Box>
        )}

        {shouldLoad && isVisible && (
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
