import { useRef, useState } from 'react'

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
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [shouldLoad, setShouldLoad] = useState<boolean>(false)
  const iframeRef = useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    target: iframeRef,
    onIntersect: () => setIsVisible(true),
    enabled: true,
  })

  if (!load) {
    return (
      <div ref={iframeRef}>
        {!shouldLoad && (
          <button
            className="flex items-center justify-center w-full p-16 mx-auto text-2xl rounded-md bg-secondary"
            onClick={() => setShouldLoad(true)}
          >
            {`👆 Tap to Load Example`}
          </button>
        )}

        {shouldLoad && isVisible && (
          <iframe
            className="w-full bg-white sm:my-8 xl:w-[120%] xl:mx-[-10%]"
            height={height}
            src={src}
            title={title}
          />
        )}
      </div>
    )
  }

  return (
    <div ref={iframeRef}>
      {isVisible && (
        <iframe
          className="w-full bg-white sm:my-8 xl:w-[120%] xl:mx-[-10%]"
          height={height}
          src={src}
          title={title}
        />
      )}
    </div>
  )
}
