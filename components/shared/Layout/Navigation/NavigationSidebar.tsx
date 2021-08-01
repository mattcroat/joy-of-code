import { CustomLink } from '@/root/components/shared/CustomLink'
import { Delight } from '@/root/components/shared/Delight'
import { Icon } from '@/root/components/shared/Icon'
import { motion } from 'framer-motion'

const menuVariants = {
  hover: { display: 'block', opacity: 1 },
  hidden: { display: 'none', opacity: 0 },
}

export function NavigationSidebar() {
  return (
    <>
      <nav className="hidden md:block bg-primary w-[80px] fixed z-30 top-0 left-0 h-full shadow-md">
        <ul className="flex flex-col items-center h-full gap-8">
          <li className="my-8 text-highlight">
            <CustomLink href="/" isInternal>
              <span className="sr-only">Home</span>
              <Delight>
                <Icon className="w-8 h-8" icon="PaintBrush" />
              </Delight>
            </CustomLink>
          </li>

          <li className="text-muted hover:text-highlight">
            <CustomLink href="/javascript" isInternal>
              <span className="sr-only">JavaScript</span>
              <Delight>
                <Icon className="w-8 h-8" icon="JavaScript" />
              </Delight>
            </CustomLink>
          </li>

          <li className="text-muted hover:text-highlight">
            <CustomLink href="/react" isInternal>
              <span className="sr-only">React</span>
              <Delight>
                <Icon className="w-8 h-8" icon="React" />
              </Delight>
            </CustomLink>
          </li>

          <li className="text-muted hover:text-highlight">
            <CustomLink href="/css" isInternal>
              <span className="sr-only">CSS</span>
              <Delight>
                <Icon className="w-8 h-8" icon="CSS" />
              </Delight>
            </CustomLink>
          </li>

          <li className="text-muted hover:text-highlight">
            <CustomLink href="/general" isInternal>
              <span className="sr-only">General</span>
              <Delight>
                <Icon className="w-8 h-8" icon="Bulb" />
              </Delight>
            </CustomLink>
          </li>

          <li className="relative text-muted">
            <span className="sr-only">More</span>
            <motion.div initial="hidden" tabIndex={0} whileHover="hover">
              <Icon
                className="w-8 h-8 transition-colors hover:text-highlight"
                icon="More"
              />
              <motion.div
                className="absolute px-8 py-8 text-lg -translate-y-1/2 rounded-md shadow-lg bg-secondary left-20 w-max before:absolute before:-translate-x-20 before:top-0 before:h-full before:w-full before:-z-10"
                variants={menuVariants}
              >
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

                  <div className="grid grid-cols-3 gap-8 mt-8">
                    <div className="transition-colors hover:text-highlight">
                      <CustomLink href="/design" isInternal>
                        <div className="flex gap-4">
                          <Delight>
                            <Icon className="w-8 h-8" icon="Figma" />
                          </Delight>
                          <span>Figma</span>
                        </div>
                      </CustomLink>
                    </div>

                    <div className="transition-colors hover:text-highlight">
                      <CustomLink href="/git" isInternal>
                        <div className="flex gap-4">
                          <Delight>
                            <Icon className="w-8 h-8" icon="Git" />
                          </Delight>
                          <span>Git / GitHub</span>
                        </div>
                      </CustomLink>
                    </div>

                    <div className="transition-colors hover:text-highlight">
                      <CustomLink href="/next" isInternal>
                        <div className="flex gap-4">
                          <Delight>
                            <Icon className="w-8 h-8" icon="Next" />
                          </Delight>
                          <span>Next.js</span>
                        </div>
                      </CustomLink>
                    </div>

                    <div className="transition-colors hover:text-highlight">
                      <CustomLink href="/typescript" isInternal>
                        <div className="flex gap-4">
                          <Delight>
                            <Icon className="w-8 h-8" icon="TypeScript" />
                          </Delight>
                          <span>TypeScript</span>
                        </div>
                      </CustomLink>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="block py-2 mt-8 text-2xl font-semibold border-b border-separator text-highlight">
                    Subscribe
                  </span>

                  <div className="grid grid-cols-3 gap-8 mt-8">
                    <div className="transition-colors hover:text-highlight">
                      <CustomLink href="/newsletter" isInternal>
                        <div className="flex gap-4">
                          <Delight>
                            <Icon className="w-8 h-8" icon="Newsletter" />
                          </Delight>
                          <span>Newsletter</span>
                        </div>
                      </CustomLink>
                    </div>

                    <div className="transition-colors hover:text-highlight">
                      <CustomLink
                        href="/feed/rss.xml"
                        isInternal
                        openSeparateTab
                      >
                        <div className="flex gap-4">
                          <Delight>
                            <Icon className="w-8 h-8" icon="Feed" />
                          </Delight>
                          <span>RSS Feed</span>
                        </div>
                      </CustomLink>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </li>
        </ul>
      </nav>
    </>
  )
}
