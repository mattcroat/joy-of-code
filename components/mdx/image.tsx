import { useRef, useState } from 'react'

import { useIntersectionObserver } from '@/root/hooks/useIntersectionObserver'

interface ImageProps {
  height: number | string
  width: number | string
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
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={alt}
          className="mx-auto overflow-hidden rounded-lg sm:my-8"
          height={height}
          src={src}
          width={width}
        />
      )}
    </div>
  )
}
