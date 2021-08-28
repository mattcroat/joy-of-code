import {
  moreCategories,
  sidebarCategories,
  subscribeCategories,
} from '@/root/utils/categories'
import { CustomLink } from '@/root/components/shared/CustomLink'
import { Icon } from '@/root/components/shared/Icon'
import { Spin } from '@/root/components/animation'

export function NavigationSidebar() {
  return (
    <nav className="hidden md:block w-[80px] fixed z-30 top-0 left-0 h-full shadow-md">
      <ul className="flex flex-col items-center h-full gap-8">
        {sidebarCategories.map(({ name, url, icon }) => {
          const spacing = name === 'Home' ? 'my-8' : ''
          const classes = `${spacing} text-muted hover:text-highlight`

          return (
            <li key={name} className={classes}>
              <CustomLink href={url} isInternal>
                <span className="sr-only">{name}</span>
                <Spin>
                  <Icon className="w-8 h-8" icon={icon} />
                </Spin>
              </CustomLink>
            </li>
          )
        })}

        <li className="relative text-muted group">
          <span className="sr-only">More</span>
          <Icon
            className="w-8 h-8 transition-colors hover:text-highlight"
            icon="more"
          />
          <div className="absolute hidden px-8 py-8 text-lg transition-all -translate-y-1/2 rounded-md shadow-lg group-hover:block bg-secondary left-20 w-max before:absolute before:-translate-x-20 before:top-0 before:h-full before:w-full before:-z-10">
            <div className="absolute top-0 left-0 flex items-center h-full -translate-y-5 text-secondary -translate-x-3/4">
              <svg
                className="w-10 h-10 -rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 0l8.66 15H.34L9 0z" />
              </svg>
            </div>

            <div>
              <span className="block pb-2 text-2xl font-semibold leading-none border-b border-separator text-highlight">
                Categories
              </span>
              <ul className="grid grid-cols-3 gap-8 mt-8">
                {moreCategories.map(({ name, url, icon }) => (
                  <li
                    key={name}
                    className="transition-colors hover:text-highlight"
                  >
                    <CustomLink href={url} isInternal>
                      <div className="flex gap-4">
                        <Spin>
                          <Icon className="w-8 h-8" icon={icon} />
                        </Spin>
                        <span>{name}</span>
                      </div>
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="block py-2 mt-8 text-2xl font-semibold border-b border-separator text-highlight">
                Subscribe
              </span>
              <ul className="grid grid-cols-3 gap-8 mt-8">
                {subscribeCategories.map(({ name, url, icon }) => (
                  <li
                    key={name}
                    className="transition-colors hover:text-highlight"
                  >
                    <CustomLink href={url} isInternal>
                      <div className="flex gap-4">
                        <Spin>
                          <Icon className="w-8 h-8" icon={icon} />
                        </Spin>
                        <span>{name}</span>
                      </div>
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}
