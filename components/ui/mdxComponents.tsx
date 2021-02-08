import { Kbd } from '@chakra-ui/react'

import { CodeBlock } from '@/root/components/ui/mdx/CodeBlock'
import { CodeBlockTitle } from '@/root/components/ui/mdx/CodeBlock/CodeBlockTitle'
import { InlineCode } from '@/root/components/ui/mdx/InlineCode'
import { PostCredits } from '@/root/components/ui/mdx/PostCredits'
import { Image } from '@/root/components/ui/mdx/Image'
import { Iframe } from '@/root/components/ui/mdx/Iframe'

import {
  CustomLink,
  H1,
  H2,
  Hr,
  Li,
  Olist,
  Paragraph,
  Ulist,
} from '@/root/components/ui'

export const MDXComponents = {
  a: CustomLink,
  h1: H1,
  h2: H2,
  hr: Hr,
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
