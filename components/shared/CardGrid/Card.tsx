import Image from 'next/image'
import { motion } from 'framer-motion'

import { CustomLink } from '@/root/components/shared/CustomLink'
import { Icon } from '@/root/components/shared/Icon'
import { playSound } from '@/root/utils/helpers/playSound'

import { usePostViews } from '@/root/hooks/usePostViews'

import type { Category } from '@/root/types/category'

interface CardProps {
  category: Category
  title: string
  slug: string
}

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
}

export function Card({ category, title, slug }: CardProps) {
  const { views } = usePostViews(slug)

  return (
    <CustomLink
      href={`/${encodeURIComponent(slug)}`}
      isInternal
      prefetch={false}
    >
      <motion.div
        className="rounded-lg h-[200px] overflow-hidden relative md:h-[240px] z-0 hover:shadow-md"
        onClick={() => playSound('page')}
        variants={cardVariants}
        whileHover={{ y: -10 }}
      >
        <Image
          alt={category}
          layout="fill"
          priority={true}
          quality={20}
          src={`/images/categories/${category.toLowerCase()}.webp`}
        />
        <div className="absolute flex items-center gap-1 px-2 py-1 rounded-md bg-primary left-4 top-4 text-body">
          <Icon aria-hidden={true} className="w-4 h-4" icon="Views" />
          <span>{views}</span>
        </div>
        <div className="absolute z-10 text-white right-4 top-4">
          <Icon className="w-8 h-8" icon={category} />
        </div>
        <span className="absolute z-10 max-w-xs text-4xl font-bold tracking-tight text-white shadow-lg bottom-4 sm:text-3xl text-shadow left-4">
          {title}
        </span>
      </motion.div>
    </CustomLink>
  )
}
