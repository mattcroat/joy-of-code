import InlineCode from './Code'
import Image from './Image'
import CustomLink from './Link'
import { Olist, Ulist, Li } from './List'
import { H1, H2, Hr, Paragraph } from './Typography'

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
