import { MDXComponents } from '@/root/components/mdx/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import { motion } from 'framer-motion'

import { Layout } from '@/root/components/shared/Layout'
import { Newsletter } from '@/root/components/shared/Newsletter'
import { PostCredits } from '@/root/components/mdx/PostCredits'

import { useViewCount } from '@/root/hooks/useViewCount'

interface PostProps {
  content: {
    compiledSource: string
    renderedOutput: string
    scope?: any
  }
  frontMatter: {
    category: string
    description: string
    image: string
    published: number
    slug: string
    title: string
  }
}

const postVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export function Post({ content, frontMatter }: PostProps) {
  useViewCount(frontMatter.slug)

  return (
    <Layout
      description={frontMatter.description}
      image={`https://joyofcode.xyz${frontMatter.image}`}
      title={frontMatter.title}
      type="article"
    >
      <motion.div
        animate="show"
        className="mx-auto max-w-[80ch]"
        initial="hidden"
        variants={postVariants}
      >
        <div className="prose">
          <MDXRemote {...content} components={MDXComponents} />
        </div>
        <div className="space-y-8 md:space-y-16 md:my-16">
          <Newsletter />
          <PostCredits />
        </div>
      </motion.div>
    </Layout>
  )
}
