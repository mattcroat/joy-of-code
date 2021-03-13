import { ReactNode } from 'react'

import { ChakraMotion } from '@/root/components/shared/ChakraMotion'
import { Seo } from '@/root/components/shared/Layout/Seo'
import { slide } from '@/root/utils/helpers/variants'

interface Props {
  children: ReactNode
  [key: string]: any
}

export function Layout({ children, ...metadata }: Props) {
  return (
    <>
      <Seo {...metadata} />
      <ChakraMotion
        as="main"
        ml={{ md: '80px' }}
        pt={6}
        transition="background-color 2s"
        initial="hidden"
        animate="visible"
        variants={slide}
      >
        {children}
      </ChakraMotion>
    </>
  )
}
