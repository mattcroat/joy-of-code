import { CodeBlock } from './CodeBlock'
import { CustomLink } from './CustomLink'
import { Iframe } from './Iframe'
import { Image } from './Image'
import { Kbd } from './KeyboardKey'

export const MDXComponents = {
  a: CustomLink,
  Iframe: Iframe,
  Image: Image,
  kbd: Kbd,
  pre: CodeBlock,
}
