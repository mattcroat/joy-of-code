import { Kbd } from '@chakra-ui/react'

import {
  CodeTitle,
  Credits,
  CustomLink,
  H1,
  H2,
  Hr,
  Image,
  Iframe,
  InlineCode,
  Li,
  Olist,
  Paragraph,
  Pre,
  Ulist,
} from '@/components/ui'

export const MDXComponents = {
  a: CustomLink,
  h1: H1,
  h2: H2,
  hr: Hr,
  img: Image,
  inlineCode: InlineCode,
  kbd: Kbd,
  p: Paragraph,
  ul: Ulist,
  ol: Olist,
  li: Li,
  pre: Pre,
  div: CodeTitle,
  Credits,
  Iframe,
}
