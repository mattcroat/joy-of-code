import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  fonts: {
    Inter: 'Inter, sans-serif',
    Mononoki: 'Mononoki, monospace',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
})
