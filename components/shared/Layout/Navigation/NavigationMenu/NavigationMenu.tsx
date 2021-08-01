import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { CustomLink } from '@/root/components/shared/CustomLink'
import { Icon } from '@/root/components/shared/Icon'
import { MenuToggle } from './MenuToggle'

const menuVariants = {
  open: {
    clipPath: `circle(1000px at 44px 93.8%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0px at 44px 93.8%)',
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const menuItemsVariants = {
  open: {
    display: 'block',
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      y: { stiffness: 1000, velocity: -100, delay: 0.4 },
    },
  },
  closed: {
    display: 'none',
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

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
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      className="fixed top-0 bottom-0 left-0 right-0 z-30 pointer-events-none md:hidden"
      initial={false}
    >
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-full bg-secondary"
        variants={menuVariants}
      />
      <motion.div
        className="absolute top-0 w-full h-full p-6 pointer-events-auto text-muted"
        variants={menuItemsVariants}
      >
        <div>
          <span className="block py-2 text-2xl font-semibold border-b border-separator text-highlight">
            Categories
          </span>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <CustomLink href="/css" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="CSS" />
                <span>CSS</span>
              </div>
            </CustomLink>

            <CustomLink href="/general" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="General" />
                <span>General</span>
              </div>
            </CustomLink>

            <CustomLink href="/design" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="Figma" />
                <span>Figma</span>
              </div>
            </CustomLink>

            <CustomLink href="/git" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="Git" />
                <span>Git / GitHub</span>
              </div>
            </CustomLink>

            <CustomLink href="/javascript" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="JavaScript" />
                <span>JavaScript</span>
              </div>
            </CustomLink>

            <CustomLink href="/next" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="Next" />
                <span>Next.js</span>
              </div>
            </CustomLink>

            <CustomLink href="/react" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="React" />
                <span>React</span>
              </div>
            </CustomLink>

            <CustomLink href="/typescript" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="TypeScript" />
                <span>TypeScript</span>
              </div>
            </CustomLink>
          </div>
        </div>

        <div>
          <span className="block py-2 mt-8 text-2xl font-semibold border-b border-separator text-highlight">
            Subscribe
          </span>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <CustomLink href="/newsletter" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="Newsletter" />
                <span>Newsletter</span>
              </div>
            </CustomLink>

            <CustomLink href="/feed/rss.xml" isInternal>
              <div className="flex gap-4 hover:text-highlight">
                <Icon className="w-8 h-8" icon="Feed" />
                <span>RSS Feed</span>
              </div>
            </CustomLink>
          </div>
        </div>
      </motion.div>
      <MenuToggle open={isOpen} toggle={setIsOpen} />
    </motion.div>
  )
}
