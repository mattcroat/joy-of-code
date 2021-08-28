import Image from 'next/image'

import { CustomLink } from '@/root/components/shared/CustomLink'
import { Icon } from '@/root/components/shared/Icon'
import { playSound } from '@/root/utils/playSound'

import { usePostViews } from '@/root/hooks/usePostViews'

import type { CategoryType } from '@/root/types/category'

interface CardProps {
  category: CategoryType
  title: string
  slug: string
  featured: boolean
}

export function Card({ category, title, slug, featured }: CardProps) {
  const { views } = usePostViews(slug)
  const shine = featured ? 'shine' : ''

  return (
    <CustomLink
      href={`/${encodeURIComponent(slug)}`}
      isInternal
      prefetch={false}
    >
      <div
        className={`rounded-lg h-[200px] overflow-hidden relative md:h-[240px] z-0 origin-bottom-left transition-all hover:shadow-md hover:-translate-y-2 hover:-rotate-2 aspect-w-16 aspect-h-9 ${shine}`}
        onClick={() => playSound('page')}
        onKeyPress={() => playSound('page')}
        role="link"
        tabIndex={-1}
      >
        <div>
          <Image
            alt={category}
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={20}
            src={`/images/categories/${category}.webp`}
          />
          <div className="absolute flex items-center gap-1 px-2 py-1 rounded-md bg-primary left-4 top-4 text-body">
            <Icon aria-hidden={true} className="w-4 h-4" icon="views" />
            <span>{views}</span>
          </div>
          <div className="absolute z-10 text-white right-4 top-4">
            <Icon className="w-8 h-8" icon={category} />
          </div>
          <span className="absolute z-10 max-w-xs text-3xl font-bold tracking-tight text-white shadow-lg bottom-4 lg:text-4xl text-shadow left-4">
            {title}
          </span>
        </div>
      </div>
    </CustomLink>
  )
}
