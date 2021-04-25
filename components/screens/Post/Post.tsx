import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { Layout } from '@/root/components/shared/Layout'
import { Newsletter } from '@/root/components/shared/Newsletter'
import { PostCredits } from '@/root/components/ui/MDXComponents/PostCredits'
import { fadeInQuick } from '@/root/utils/helpers/variants'

interface Props {
  content: JSX.Element
  frontMatter: {
    title: string
    description: string
    image: string
  }
}

export function Post({ content, frontMatter }: Props) {
  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.description}
      image={`https://joyofcode.xyz${frontMatter.image}`}
      type="article"
    >
      <Box
        maxW="90ch"
        mx="auto"
        px={{ base: 8, lg: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div initial="hidden" animate="show" variants={fadeInQuick}>
          {content}
          <Newsletter />
          <PostCredits />
        </motion.div>
      </Box>
    </Layout>
  )
}
