import { CodeBlock } from './CodeBlock'
import { CustomLink } from './CustomLink'
import { Iframe } from './Iframe'
import { Image } from './Image'

export const MDXComponents = {
  a: CustomLink,
  Iframe: Iframe,
  Image: Image,
  pre: CodeBlock,
}
