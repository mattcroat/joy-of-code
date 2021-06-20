import React from 'react'

async function getViews(
  slug: string,
  setView: React.Dispatch<React.SetStateAction<number>>
) {
  try {
    const response = await fetch(`/api/views/${slug}`)
    const { views } = await response.json()
    setView(views.toLocaleString('en-US'))
  } catch (error) {
    // the user hasn't visited the page and created the entry
    console.error(`Could not fetch post views for ${slug}`)
  }
}

export function usePostViews(slug: string) {
  const [views, setViews] = React.useState<number>(0)

  React.useEffect(() => {
    getViews(slug, setViews)
  }, [slug])

  return { views }
}
