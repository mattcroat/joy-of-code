import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { MDXRemote } from 'next-mdx-remote'
import { MDXComponents } from '@/root/components/ui/MDXComponents'

import { Layout } from '@/root/components/shared/Layout'
import { Newsletter } from '@/root/components/shared/Newsletter'
import { PostCredits } from '@/root/components/ui/MDXComponents/PostCredits'
import { fadeIn } from '@/root/utils/helpers/variants'

type PostProps = {
  content: {
    compiledSource: string
    renderedOutput: string
    scope?: any
  }
  frontMatter: {
    title: string
    description: string
    image: string
  }
}
export function Post({ content, frontMatter }: PostProps) {
  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.description}
      image={`https://joyofcode.xyz${frontMatter.image}`}
      type="article"
    >
      <Box
        maxW="72ch"
        mx="auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div initial="hidden" animate="show" variants={fadeIn}>
          <MDXRemote {...content} components={MDXComponents} />
          <Newsletter />
          <PostCredits />
        </motion.div>
      </Box>
    </Layout>
  )
}
