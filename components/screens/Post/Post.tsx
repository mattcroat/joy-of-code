import { FadeIn } from '@/root/components/animation'
import { Layout } from '@/root/components/shared/Layout'
import { Newsletter } from '@/root/components/shared/Newsletter'
import { PostCredits } from '@/root/components/mdx/PostCredits'
import { PostType } from '@/root/types/post'
import { useViewCount } from '@/root/hooks/useViewCount'

interface PostProps {
  content: React.ReactNode
  frontmatter: PostType
}

export function Post({ content, frontmatter }: PostProps) {
  useViewCount(frontmatter.slug)

  return (
    <Layout
      description={frontmatter.description}
      image={`https://joyofcode.xyz${frontmatter.image}`}
      title={frontmatter.title}
      type="article"
    >
      <FadeIn duration={1000}>
        <div className="mx-auto max-w-[70ch]">
          <div className="prose">{content}</div>
          <div className="space-y-8 md:space-y-16 md:my-16">
            <Newsletter />
            <PostCredits />
          </div>
        </div>
      </FadeIn>
    </Layout>
  )
}
