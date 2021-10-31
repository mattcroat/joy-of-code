import { Seo } from './seo'

interface LayoutProps {
  [key: string]: any
  children: React.ReactNode
}

export function Layout({ children, ...metadata }: LayoutProps) {
  return (
    <div className="px-4 py-4 lg:px-16">
      <Seo {...metadata} />
      <div>
        <main className="md:ml-20">{children}</main>
      </div>
    </div>
  )
}
