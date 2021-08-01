import { Layout } from '@/root/components/shared/Layout'
import { Newsletter as MailingList } from '@/root/components/shared/Newsletter'

export function Newsletter() {
  return (
    <Layout>
      <h1>Newsletter</h1>

      <hr className="w-10 h-1 my-2 bg-gray-600 border-0"></hr>

      <div className="max-w-[90ch] mt-8 space-y-8">
        <p>
          Rreceive occasional updates to get notified when I release a new post,
          or what I'm up to.
        </p>
        <MailingList />
      </div>
    </Layout>
  )
}
