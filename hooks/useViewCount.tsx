import React from 'react'

const production = process.env.NODE_ENV === 'production'

function countView(slug: string) {
  try {
    fetch(`/api/views/${slug}`, {
      method: 'POST',
    })
  } catch (error) {
    throw new Error(`Could not count view: ${error.message}`)
  }
}

export function useViewCount(slug: string) {
  React.useEffect(() => {
    if (production) {
      countView(slug)
    }
  }, [slug])
}
