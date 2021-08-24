import { CustomLink } from '@/root/components/shared/CustomLink'
import { Delight } from '@/root/components/shared/Delight'
import { Icon } from '@/root/components/shared/Icon'

export function NavigationSidebar() {
  return (
    <>
      <nav className="hidden md:block bg-primary w-[80px] fixed z-30 top-0 left-0 h-full shadow-md">
        <ul className="flex flex-col items-center h-full gap-8">
          <li className="my-8 text-highlight">
            <CustomLink href="/" isInternal>
              <span className="sr-only">Home</span>
              <Delight>
                <Icon className="w-8 h-8" icon="paintBrush" />
              </Delight>
            </CustomLink>
          </li>

          <li className="text-muted hover:text-highlight">
            <CustomLink href="/javascript" isInternal>
              <span className="sr-only">JavaScript</span>
              <Delight>
                <Icon className="w-8 h-8" icon="javascript" />
              </Delight>
            </CustomLink>
          </li>

          <li className="text-muted hover:text-highlight">
            <CustomLink href="/react" isInternal>
              <span className="sr-only">React</span>
              <Delight>
                <Icon className="w-8 h-8" icon="react" />
              </Delight>
            </CustomLink>
          </li>

          <li className="text-muted hover:text-highlight">
            <CustomLink href="/css" isInternal>
              <span className="sr-only">CSS</span>
              <Delight>
                <Icon className="w-8 h-8" icon="css" />
              </Delight>
            </CustomLink>
          </li>

          <li className="text-muted hover:text-highlight">
            <CustomLink href="/general" isInternal>
              <span className="sr-only">General</span>
              <Delight>
                <Icon className="w-8 h-8" icon="bulb" />
              </Delight>
            </CustomLink>
          </li>

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
                  <CustomLink href="/design" isInternal>
                    <li className="transition-colors hover:text-highlight">
                      <div className="flex gap-4">
                        <Delight>
                          <Icon className="w-8 h-8" icon="figma" />
                        </Delight>
                        <span>Figma</span>
                      </div>
                    </li>
                  </CustomLink>

                  <li className="transition-colors hover:text-highlight">
                    <CustomLink href="/git" isInternal>
                      <div className="flex gap-4">
                        <Delight>
                          <Icon className="w-8 h-8" icon="git" />
                        </Delight>
                        <span>Git / GitHub</span>
                      </div>
                    </CustomLink>
                  </li>

                  <li className="transition-colors hover:text-highlight">
                    <CustomLink href="/next" isInternal>
                      <div className="flex gap-4">
                        <Delight>
                          <Icon className="w-8 h-8" icon="next" />
                        </Delight>
                        <span>Next.js</span>
                      </div>
                    </CustomLink>
                  </li>

                  <li className="transition-colors hover:text-highlight">
                    <CustomLink href="/typescript" isInternal>
                      <div className="flex gap-4">
                        <Delight>
                          <Icon className="w-8 h-8" icon="typescript" />
                        </Delight>
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

                <ul className="grid grid-cols-3 gap-8 mt-8">
                  <li className="transition-colors hover:text-highlight">
                    <CustomLink href="/newsletter" isInternal>
                      <div className="flex gap-4">
                        <Delight>
                          <Icon className="w-8 h-8" icon="newsletter" />
                        </Delight>
                        <span>Newsletter</span>
                      </div>
                    </CustomLink>
                  </li>

                  <li className="transition-colors hover:text-highlight">
                    <CustomLink href="/feed/rss.xml" isInternal openSeparateTab>
                      <div className="flex gap-4">
                        <Delight>
                          <Icon className="w-8 h-8" icon="feed" />
                        </Delight>
                        <span>RSS Feed</span>
                      </div>
                    </CustomLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}
