import { CategoryType } from '@/root/types/category'

export interface PostType {
  category: CategoryType
  description: string
  image: string
  published: string
  slug: string
  title: string
}
