import React from 'react'
import { Box, Button, Input, useColorMode } from '@chakra-ui/react'
import Confetti from 'react-dom-confetti'

import { CustomLink } from '@/root/components/shared/CustomLink'
import { primaryColor } from '@/root/styles/colors'

export function Newsletter({ ...props }) {
  const [isSubscribed, setIsSubscribed] = React.useState<boolean>(false)
  const [isError, setIsError] = React.useState<boolean>(false)
  const inputEl = React.useRef<HTMLInputElement>(null)

  const { colorMode } = useColorMode()

  async function subscribe(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()

    const response = await fetch('api/newsletter', {
      body: JSON.stringify({
        email: inputEl?.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await response.json()

    if (error) {
      setIsError(true)
      return
    }

    if (inputEl.current) {
      inputEl.current.value = ''
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 4000)
    }
  }

  return (
    <Box my={16} p={8} borderWidth={1} borderRadius={8} {...props}>
      <Box as="h3" fontSize="2xl" fontWeight={700}>
        Subscribe for Updates
      </Box>
      <Box as="p" color="gray.400">
        If you hate email, you can use the&nbsp;
        <CustomLink href="/feed/rss.xml" color={primaryColor[colorMode]}>
          RSS feed.
        </CustomLink>
      </Box>

      <form onSubmit={subscribe}>
        <Box my={4} pos="relative">
          <Input
            ref={inputEl}
            type="email"
            aria-label="Email for newsletter"
            id="newsletter-email"
            name="newsletter-email"
            placeholder="unix@chad.com"
            required
          />
          <Button
            type="submit"
            pos={{ sm: 'absolute' }}
            right={0}
            mt={{ base: 4, sm: 0 }}
            colorScheme="orange"
            zIndex={1}
          >
            Subscribe
          </Button>
        </Box>
        <Box pos="relative">
          {isSubscribed && (
            <Box as="p" mt={8} fontWeight="700">
              {`You're subscribed! 🎉`}
            </Box>
          )}
          <Box pos="absolute" top={0} left={40}>
            <Confetti active={isSubscribed} />
          </Box>
          {isError && (
            <Box as="p" mt={8} fontWeight="700">
              {'Oops! 💩 Something went wrong'}
            </Box>
          )}
        </Box>
      </form>
    </Box>
  )
}
