interface GTagEvent {
  action: string
  category: string
  label: string
  value: number
}

export const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''

export function pageview(url: URL) {
  window.gtag('config', MEASUREMENT_ID, {
    page_path: url,
  })
}

export function event({ action, category, label, value }: GTagEvent) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
