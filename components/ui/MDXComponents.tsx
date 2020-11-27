import {
  Code,
  Divider,
  Image,
  Link,
  List,
  ListOrdered,
  ListItem,
  Text,
  HeadingPrimary,
  HeadingSecondary,
} from '@/components/ui'

const MDXComponents = {
  a: Link,
  h1: HeadingPrimary,
  h2: HeadingSecondary,
  hr: Divider,
  img: Image,
  inlineCode: Code,
  p: Text,
  ul: List,
  ol: ListOrdered,
  li: ListItem,
}

export default MDXComponents
