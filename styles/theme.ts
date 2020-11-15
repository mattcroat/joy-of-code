import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Libre Baskerville, serif',
    mono: 'Mononoki, monospace',
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'normal',
      },
    },
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
})

export default theme
