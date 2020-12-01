import {
  CustomLink,
  H1,
  H2,
  Hr,
  Image,
  InlineCode,
  Li,
  Olist,
  Paragraph,
  Ulist,
} from '@/components/ui'

const MDXComponents = {
  a: CustomLink,
  h1: H1,
  h2: H2,
  hr: Hr,
  img: Image,
  inlineCode: InlineCode,
  p: Paragraph,
  ul: Ulist,
  ol: Olist,
  li: Li,
}

export default MDXComponents
