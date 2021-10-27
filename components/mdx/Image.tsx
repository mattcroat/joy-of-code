import { useRef, useState } from 'react'

import { useIntersectionObserver } from '@/root/hooks/useIntersectionObserver'

interface ImageProps {
  height: string
  width: string
  src: string
  alt: string
}

export function Image({ height, width, src, alt }: ImageProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    target: imageRef,
    onIntersect: () => setIsVisible(true),
    enabled: true,
  })

  return (
    <div ref={imageRef}>
      {isVisible && (
        <img
          alt={alt}
          className="mx-auto overflow-hidden rounded-lg sm:my-8"
          height={height.replace('px', '')}
          src={src}
          width={width.replace('px', '')}
        />
      )}
    </div>
  )
}
