import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { menuCategories, subscribeCategories } from '@/root/utils/categories'
import { CustomLink } from '@/root/components/shared/CustomLink'
import { FadeIn } from '@/root/components/animation'
import { Icon } from '@/root/components/shared/Icon'
import { MenuToggle } from './MenuToggle'

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const open = isOpen ? 'open' : ''

  useEffect(() => {
    if (!isOpen) return

    const handleRouteChange = () => setIsOpen(!isOpen)

    router.events.on('routeChangeComplete', handleRouteChange)

    return function cleanup() {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [isOpen, router.events])

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 z-30 pointer-events-none md:hidden`}
    >
      <div
        className={`${open} absolute top-0 bottom-0 left-0 w-full bg-secondary transition-all duration-1000 menu`}
      />
      {isOpen && (
        <FadeIn delay={300}>
          <div className="absolute top-0 w-full h-full p-6 pointer-events-auto text-muted">
            <div>
              <span className="block py-2 text-2xl font-semibold border-b border-separator text-highlight">
                Categories
              </span>
              <ul className="grid grid-cols-2 gap-8 mt-8">
                {menuCategories.map(({ name, url, icon }) => (
                  <li key={name} className="hover:text-highlight">
                    <CustomLink href={url} isInternal>
                      <div className="flex gap-4">
                        <Icon className="w-8 h-8" icon={icon} />
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
              <ul className="grid grid-cols-2 gap-8 mt-8">
                {subscribeCategories.map(({ name, url, icon }) => (
                  <li key={name} className="hover:text-highlight">
                    <CustomLink href={url} isInternal>
                      <div className="flex gap-4">
                        <Icon className="w-8 h-8" icon={icon} />
                        <span>{name}</span>
                      </div>
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      )}
      <MenuToggle open={isOpen} toggle={setIsOpen} />
    </div>
  )
}
