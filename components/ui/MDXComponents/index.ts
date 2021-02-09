import { CustomLink } from '@/root/components/shared/CustomLink'
import {
  Li,
  Olist,
  Paragraph,
  Spacer,
  Subheading,
  Title,
  Ulist,
} from '@/root/components/shared/Typography'
import { CodeBlock } from '@/root/components/ui/MDXComponents/CodeBlock'
import { CodeBlockTitle } from '@/root/components/ui/MDXComponents/CodeBlock/CodeBlockTitle'
import { InlineCode } from '@/root/components/ui/MDXComponents/InlineCode'
import { Iframe } from '@/root/components/ui/MDXComponents/Iframe'
import { Image } from '@/root/components/ui/MDXComponents/Image'
import { Kbd } from '@/root/components/ui/MDXComponents/KeyboardKey'
import { PostCredits } from '@/root/components/ui/MDXComponents/PostCredits'

export const MDXComponents = {
  a: CustomLink,
  h1: Title,
  h2: Subheading,
  hr: Spacer,
  Image,
  inlineCode: InlineCode,
  kbd: Kbd,
  p: Paragraph,
  ul: Ulist,
  ol: Olist,
  li: Li,
  pre: CodeBlock,
  div: CodeBlockTitle,
  PostCredits,
  Iframe,
}
