import {
  Code,
  Divider,
  Image,
  Link,
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
}

export default MDXComponents
