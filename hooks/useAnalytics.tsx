import React from 'react'
import { useRouter } from 'next/router'

import { pageview } from '@/root/lib/analytics'

function handleRouteChange(url: URL) {
  if (process.env.NODE_ENV !== 'production') return
  pageview(url)
}

export function useAnalytics() {
  const router = useRouter()

  React.useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)

    return function cleanup() {
      router.events.off('routerChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
