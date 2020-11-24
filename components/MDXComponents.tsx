import {
  Code,
  Divider,
  Image,
  Link,
  List,
  ListOrdered,
  ListItem,
  Text,
  MainHeading,
  SecondaryHeading,
} from '@/components/UIComponents'

const MDXComponents = {
  a: Link,
  h1: MainHeading,
  h2: SecondaryHeading,
  hr: Divider,
  img: Image,
  inlineCode: Code,
  p: Text,
  ul: List,
  ol: ListOrdered,
  li: ListItem,
}

export default MDXComponents
