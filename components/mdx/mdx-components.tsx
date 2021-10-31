import { CodeBlock } from './code-block'
import { CustomLink } from './custom-link'
import { Iframe } from './iframe'
import { Image } from './image'

export const MDXComponents = {
  a: CustomLink,
  Iframe: Iframe,
  Image: Image,
  pre: CodeBlock,
}
