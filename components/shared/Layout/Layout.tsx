import { ReactNode } from 'react'

import { Seo } from '@/root/components/shared/Layout/Seo'

interface LayoutProps {
  [key: string]: any
  children: ReactNode
}

export function Layout({ children, ...metadata }: LayoutProps) {
  return (
    <div className="px-4 py-4 lg:px-16">
      <Seo {...metadata} />
      <div className="">
        <main className="md:ml-20">{children}</main>
      </div>
    </div>
  )
}
