import { CategoryType } from '@/root/types/category'
import { CustomLink } from '@/root/components/shared/custom-link'
import { Icon } from '@/root/components/shared/icon'
import { playSound } from '@/root/utils/play-sound'
import { useMedia } from '@/root/hooks/useMedia'
import { usePostViews } from '@/root/hooks/usePostViews'

interface CardProps {
  category: CategoryType
  featured?: boolean | undefined
  title: string
  slug: string
}

const colors = {
  css: 'bg-gradient-to-b from-transparent to-green-600',
  general: 'bg-gradient-to-b from-transparent to-red-800',
  git: 'bg-gradient-to-b from-transparent to-gray-900',
  javascript: 'bg-gradient-to-b from-transparent to-yellow-600',
  next: 'bg-gradient-to-b from-transparent to-indigo-800',
  react: 'bg-gradient-to-b from-transparent to-blue-500',
  typescript: 'bg-gradient-to-b from-transparent to-blue-800',
}

export function Card({ category, title, slug }: CardProps) {
  const { views } = usePostViews(slug)
  const match = useMedia('(min-width: 768px)')

  return (
    <>
      {!match && (
        <CustomLink
          href={`/${encodeURIComponent(slug)}`}
          isInternal
          prefetch={false}
        >
          <div
            className="p-4 rounded-lg bg-secondary"
            onClick={() => playSound('page')}
            onKeyPress={() => playSound('page')}
            role="link"
            tabIndex={-1}
          >
            <div className="flex justify-between text-white">
              <span className="text-muted">{views} views</span>
              <Icon className="w-6 h-6" icon={category} />
            </div>
            <span className="block mt-2 text-xl font-bold text-cardTitle">
              {title}
            </span>
          </div>
        </CustomLink>
      )}
      {match && (
        <CustomLink
          href={`/${encodeURIComponent(slug)}`}
          isInternal
          prefetch={false}
        >
          <div
            className={`rounded-lg h-[200px] overflow-hidden relative md:h-[340px] z-0 origin-bottom-left transition-all hover:shadow-md hover:-translate-y-2 hover:-rotate-2 aspect-w-16 aspect-h-9 bg-gradient-to-r from-muted to-transparent`}
            onClick={() => playSound('page')}
            onKeyPress={() => playSound('page')}
            role="link"
            tabIndex={-1}
          >
            <div className={colors[category]}>
              <div className="absolute flex items-center gap-1 px-2 py-1 rounded-lg bg-primary left-4 top-4 text-body">
                <Icon aria-hidden={true} className="w-4 h-4" icon="views" />
                <span>{views}</span>
              </div>
              <div className="absolute z-10 text-white right-4 top-4">
                <Icon className="w-8 h-8" icon={category} />
              </div>
              <span className="absolute z-10 p-2 font-bold tracking-tight text-white bottom-4 text-shadow left-4 card-title">
                {title}
              </span>
            </div>
          </div>
        </CustomLink>
      )}
    </>
  )
}
