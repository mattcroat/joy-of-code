import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

import { CustomLink, Paragraph } from '@/components/ui'
import Emoji from './Emoji'

const Contribute: FC = () => {
  const router = useRouter()
  const href = `https://github.com/mattcroat/joy-of-code/blob/main/posts/${router.query.slug}.mdx`

  return (
    <Box
      w="50%"
      color="teal.200"
      bg="teal.900"
      my={8}
      p={4}
      borderRadius="base"
    >
      <Paragraph spacing={4}>
        Found a mistake? I encourage you to contribute on GitHub by{' '}
        <CustomLink href={href}>editing it</CustomLink>.
      </Paragraph>

      <Paragraph spacing={4}>
        Thank you!{' '}
        <Emoji emoji="🥰" label="Smiling face with hearts emoji" spacing={1} />
      </Paragraph>
    </Box>
  )
}

export default Contribute
