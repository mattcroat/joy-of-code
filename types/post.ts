import type { CategoryType } from '@/root/types/category'

export interface PostType {
  title: string
  description: string
  published: string
  category: CategoryType
  image?: string
  slug: string
}
