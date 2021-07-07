import React from 'react'

type IntersectionObserverProps = {
  root?: React.RefObject<HTMLElement>
  target: React.RefObject<HTMLElement>
  onIntersect: () => unknown
  threshold?: number
  rootMargin?: string
  enabled: boolean
}

export function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}: IntersectionObserverProps) {
  React.useEffect(() => {
    if (!enabled) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root?.current,
        rootMargin,
        threshold,
      }
    )

    const el = target?.current

    if (!el) {
      return
    }

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [enabled, root, rootMargin, threshold, target, onIntersect])
}
