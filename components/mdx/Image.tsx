import { useRef, useState } from 'react'
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
      <div ref={imageRef} className="sm:my-8">
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
      </div>
    )
  }

  return (
    <div ref={imageRef} className="text-center xl:mx-[-10%] sm:my-8">
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
    </div>
  )
}
