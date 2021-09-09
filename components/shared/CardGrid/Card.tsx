import { CustomLink } from '@/root/components/shared/CustomLink'
import { Icon } from '@/root/components/shared/Icon'
import { playSound } from '@/root/utils/playSound'

import { useMedia } from '@/root/hooks/useMedia'
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
  const match = useMedia('(min-width: 768px)')
  const shine = featured ? 'shine' : ''

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
            className={`rounded-lg h-[200px] overflow-hidden relative md:h-[240px] z-0 origin-bottom-left transition-all hover:shadow-md hover:-translate-y-2 hover:-rotate-2 aspect-w-16 aspect-h-9 ${shine} bg-gradient-to-r from-muted to-transparent`}
            onClick={() => playSound('page')}
            onKeyPress={() => playSound('page')}
            role="link"
            tabIndex={-1}
          >
            <div className="bg-primary">
              <svg
                height="620"
                viewBox="0 0 200 200"
                width="620"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" height="200" width="200" />
                <g>
                  <polygon
                    fill="#77828e"
                    points="100 57.1 64 93.1 71.5 100.6 100 72.1"
                  />
                  <polygon
                    fill="#95a0ac"
                    points="100 57.1 100 72.1 128.6 100.6 136.1 93.1"
                  />
                  <polygon
                    fill="#77828e"
                    points="100 163.2 100 178.2 170.7 107.5 170.8 92.4"
                  />
                  <polygon
                    fill="#95a0ac"
                    points="100 163.2 29.2 92.5 29.2 107.5 100 178.2"
                  />
                  <path
                    d="M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z"
                    fill="#B4BFCC"
                  />
                  <polygon
                    fill="#5b7594"
                    points="0 157.1 0 172.1 28.6 200.6 36.1 193.1"
                  />
                  <polygon
                    fill="#7690b0"
                    points="70.7 200 70.8 192.4 63.2 200"
                  />
                  <polygon
                    fill="#91ABCC"
                    points="27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5"
                  />
                  <polygon
                    fill="#7690b0"
                    points="200 157.1 164 193.1 171.5 200.6 200 172.1"
                  />
                  <polygon
                    fill="#5b7594"
                    points="136.7 200 129.2 192.5 129.2 200"
                  />
                  <polygon
                    fill="#91ABCC"
                    points="172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200"
                  />
                  <polygon
                    fill="#5b7594"
                    points="129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0"
                  />
                  <polygon
                    fill="#91ABCC"
                    points="200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2"
                  />
                  <polygon
                    fill="#7690b0"
                    points="63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0"
                  />
                  <polygon
                    fill="#91ABCC"
                    points="0 63.2 63.2 0 27.8 0 0 27.8"
                  />
                </g>
              </svg>
              <div className="absolute flex items-center gap-1 px-2 py-1 rounded-lg bg-primary left-4 top-4 text-body">
                <Icon aria-hidden={true} className="w-4 h-4" icon="views" />
                <span>{views}</span>
              </div>
              <div className="absolute z-10 text-white right-4 top-4">
                <Icon className="w-8 h-8" icon={category} />
              </div>
              <span className="absolute z-10 max-w-xs p-2 text-3xl font-bold tracking-tight text-white bottom-4 lg:text-4xl text-shadow left-4">
                {title}
              </span>
            </div>
          </div>
        </CustomLink>
      )}
    </>
  )
}
