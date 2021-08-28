import { useEffect, useState } from 'react'

export function useMedia(query: string) {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)

    return function cleanup() {
      media.removeEventListener('change', listener)
    }
  }, [matches, query])

  return matches
}
