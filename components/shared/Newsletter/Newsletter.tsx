import { Box, Button, Input, useColorModeValue } from '@chakra-ui/react'
import Confetti from 'react-dom-confetti'
import React from 'react'

import { CustomLink } from '@/root/components/shared/CustomLink'

export function Newsletter({ ...props }) {
  const [isSubscribed, setIsSubscribed] = React.useState<boolean>(false)
  const [isError, setIsError] = React.useState<boolean>(false)
  const inputEl = React.useRef<HTMLInputElement>(null)

  const customLinkColor = useColorModeValue('blue.600', 'orange.200')

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
    <Box borderRadius={8} borderWidth={1} my={16} p={8} {...props}>
      <Box as="span" fontSize="2xl" fontWeight={700}>
        Subscribe for Updates
      </Box>
      <Box as="p" color="gray.400">
        If you hate email, you can use the&nbsp;
        <CustomLink color={customLinkColor} href="/feed/rss.xml">
          RSS feed.
        </CustomLink>
      </Box>

      <form onSubmit={subscribe}>
        <Box my={4} pos="relative">
          <Input
            ref={inputEl}
            aria-label="Email for newsletter"
            id="newsletter-email"
            name="newsletter-email"
            placeholder="unix@chad.com"
            required
            type="email"
          />
          <Button
            colorScheme="orange"
            mt={{ base: 4, sm: 0 }}
            pos={{ sm: 'absolute' }}
            right={0}
            type="submit"
            zIndex={1}
          >
            Subscribe
          </Button>
        </Box>
        <Box pos="relative">
          {isSubscribed && (
            <Box as="p" fontWeight="700" mt={8}>
              {`You're subscribed! 🎉`}
            </Box>
          )}
          <Box left={40} pos="absolute" top={0}>
            <Confetti active={isSubscribed} />
          </Box>
          {isError && (
            <Box as="p" fontWeight="700" mt={8}>
              {'Oops! 💩 Something went wrong'}
            </Box>
          )}
        </Box>
      </form>
    </Box>
  )
}
