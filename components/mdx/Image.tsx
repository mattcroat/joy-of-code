import { useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'

import { useIntersectionObserver } from '@/root/hooks/useIntersectionObserver'

interface ImageProps {
  height?: number
  width?: number
  src: string
  alt: string
  inline?: boolean
}

export function Image({
  height = 300,
  width = 1000,
  src,
  alt,
  inline = false,
}: ImageProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    target: imageRef,
    onIntersect: () => setIsVisible(true),
    enabled: true,
  })

  if (inline) {
    return (
      <Box ref={imageRef} my={{ sm: 8 }}>
        {isVisible && (
          <NextImage
            alt={alt}
            height={height}
            layout="intrinsic"
            src={src}
            unoptimized={true}
            width={width}
          />
        )}
      </Box>
    )
  }

  return (
    <Box ref={imageRef} mx={{ xl: '-10%' }} my={{ sm: 8 }} textAlign="center">
      {isVisible && (
        <NextImage
          alt={alt}
          height={height}
          layout="intrinsic"
          src={src}
          unoptimized={true}
          width={width}
        />
      )}
    </Box>
  )
}
