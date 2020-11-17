import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
    mono: 'Mononoki, monospace',
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
})

export default theme
