import * as gtag from '@/root/lib/analytics/gtag'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export function useAnalytics() {
  let router = useRouter()

  useEffect(() => {
    function handleRouteChange(url: URL) {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
