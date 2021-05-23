import { Layout } from '@/root/components/shared/Layout'
import { Newsletter as MailingList } from '@/root/components/shared/Newsletter'
import { Title, Paragraph } from '@/root/components/shared/Typography'

export function Newsletter() {
  return (
    <Layout>
      <Title>Newsletter</Title>
      <Paragraph>
        If you want to receive occasional updates to get notified when I release
        a new post, or what I&apos;m up to.
      </Paragraph>
      <MailingList />
    </Layout>
  )
}
