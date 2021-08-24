import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { CustomLink } from '@/root/components/shared/CustomLink'
import { FadeIn } from '@/root/components/animation'
import { Icon } from '@/root/components/shared/Icon'
import { MenuToggle } from './MenuToggle'

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()

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
        className={`absolute top-0 bottom-0 left-0 w-full bg-secondary transition-all duration-1000 menu ${
          isOpen ? 'open' : ''
        }`}
      />
      {isOpen && (
        <FadeIn delay={300}>
          <div className="absolute top-0 w-full h-full p-6 pointer-events-auto text-muted">
            <div>
              <span className="block py-2 text-2xl font-semibold border-b border-separator text-highlight">
                Categories
              </span>

              <ul className="grid grid-cols-2 gap-8 mt-8">
                <li className="hover:text-highlight">
                  <CustomLink href="/css" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="css" />
                      <span>CSS</span>
                    </div>
                  </CustomLink>
                </li>

                <li className="hover:text-highlight">
                  <CustomLink href="/general" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="general" />
                      <span>General</span>
                    </div>
                  </CustomLink>
                </li>

                <li className="hover:text-highlight">
                  <CustomLink href="/design" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="figma" />
                      <span>Figma</span>
                    </div>
                  </CustomLink>
                </li>

                <li className="hover:text-highlight">
                  <CustomLink href="/git" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="git" />
                      <span>Git / GitHub</span>
                    </div>
                  </CustomLink>
                </li>

                <li className="hover:text-highlight">
                  <CustomLink href="/javascript" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="javascript" />
                      <span>JavaScript</span>
                    </div>
                  </CustomLink>
                </li>

                <li className="hover:text-highlight">
                  <CustomLink href="/next" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="next" />
                      <span>Next.js</span>
                    </div>
                  </CustomLink>
                </li>

                <li className="hover:text-highlight">
                  <CustomLink href="/react" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="react" />
                      <span>React</span>
                    </div>
                  </CustomLink>
                </li>

                <li className="hover:text-highlight">
                  <CustomLink href="/typescript" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="typescript" />
                      <span>TypeScript</span>
                    </div>
                  </CustomLink>
                </li>
              </ul>
            </div>

            <div>
              <span className="block py-2 mt-8 text-2xl font-semibold border-b border-separator text-highlight">
                Subscribe
              </span>

              <ul className="grid grid-cols-2 gap-8 mt-8">
                <li className="hover:text-highlight">
                  <CustomLink href="/newsletter" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="newsletter" />
                      <span>Newsletter</span>
                    </div>
                  </CustomLink>
                </li>

                <li className="hover:text-highlight">
                  <CustomLink href="/feed/rss.xml" isInternal>
                    <div className="flex gap-4">
                      <Icon className="w-8 h-8" icon="feed" />
                      <span>RSS Feed</span>
                    </div>
                  </CustomLink>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      )}
      <MenuToggle open={isOpen} toggle={setIsOpen} />
    </div>
  )
}
