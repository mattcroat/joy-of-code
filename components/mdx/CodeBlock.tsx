import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import { ReactNode, useRef, useState } from 'react'
import Confetti from 'react-dom-confetti'

interface CodeBlockProps {
  children: ReactNode
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const preEl = useRef<HTMLInputElement>(null)
  const codeBlockBackground = useColorModeValue('white', '#1f2735')

  const config = {
    duration: 2000,
    angle: 90,
    spread: 360,
    stagger: 3,
    elementCount: 70,
    startVelocity: 40,
    dragFriction: 0.12,
    perspective: '500px',
  }

  function copyToClipboard() {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)

    try {
      const textareaEl = document.createElement('textarea')

      if (preEl && preEl.current) {
        textareaEl.value = preEl.current.innerText
      }

      // remove from the document flow
      textareaEl.style.position = 'absolute'
      textareaEl.style.visibility = 'none'
      document.body.appendChild(textareaEl)

      // select and copy
      textareaEl.select()
      document.execCommand('copy')

      // cleanup
      document.body.removeChild(textareaEl)
    } catch (error) {
      console.error('💩 Copying failed!', error)
    }
  }

  return (
    <Box mb={8} mx={{ base: -4, sm: -8 }} pos="relative" {...props}>
      <Box pos="absolute" right={4} top={-9} zIndex={1}>
        <Box pos="absolute" right={10}>
          <Confetti active={isCopied} config={config} />
        </Box>
        <Button onClick={copyToClipboard} userSelect="none">
          {isCopied ? '🎉 Copied!' : '📋 Copy'}
        </Button>
      </Box>

      <Box
        ref={preEl}
        as="pre"
        bg={codeBlockBackground}
        boxShadow="lg"
        fontSize={[16, 18]}
        overflow="auto"
        p={6}
        pos="relative"
        rounded="base"
        zIndex={2}
      >
        {children}
      </Box>
    </Box>
  )
}
