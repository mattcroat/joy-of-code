import type { NextApiRequest, NextApiResponse } from 'next'

import { supabase } from '@/root/lib/supabase'

async function doesSlugExist(slug: string): Promise<boolean> {
  const { data: postSlug, error } = await supabase
    .from('views')
    .select('slug')
    .match({ slug })
    .single()

  // since we return true or false we want null
  if (postSlug !== null && error) {
    throw new Error(`Couldn't check if slug exists: ${error.message}`)
  }

  return postSlug ? true : false
}

async function getViews(slug: string): Promise<number> {
  const { data, error } = await supabase
    .from('views')
    .select('views')
    .match({ slug })
    .single()

  if (error) {
    throw new Error(`Couldn't get views: ${error.message}`)
  }

  return data.views
}

async function updateViews(slug: string, views: number): Promise<void> {
  try {
    await supabase
      .from('views')
      .update({ views: views + 1 })
      .match({ slug })
  } catch (error) {
    throw new Error(`Couldn't update views: ${error.message}`)
  }
}

async function addEntry(slug: string): Promise<void> {
  try {
    await supabase.from('views').insert([{ slug, views: 1 }])
  } catch (error) {
    throw new Error(`Couldn't add entry: ${error.message}`)
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug as string

  // update view count
  if (req.method === 'POST') {
    const slugExists = await doesSlugExist(slug)

    if (slugExists) {
      const views = await getViews(slug)
      await updateViews(slug, views)

      return res.status(200).json({
        views: await getViews(slug),
      })
    }

    if (!slugExists) {
      await addEntry(slug)

      return res.status(200).json({
        views: await getViews(slug),
      })
    }
  }

  // get view count
  if (req.method === 'GET') {
    return res.status(200).json({
      views: await getViews(slug),
    })
  }
}
