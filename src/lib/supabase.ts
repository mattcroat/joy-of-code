import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface View {
  slug: string
  views: number
}

export async function getViews(): Promise<View[]> {
  try {
    const response = await fetch(`/api/views.json`)
    return await response.json()
  } catch (error) {
    console.error(`getViews: ${error.message}`)
  }
}

export async function updateViews(slug: string): Promise<void> {
  try {
    await fetch(`/api/views/${slug}`, {
      method: 'post',
      body: JSON.stringify(slug),
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(`Update views: ${error.message} for /api/views/${slug}`)
  }
}
