import { Editor } from '@/root/components/screens/Editor'

export default function EditorPage() {
  return <Editor />
}

export async function getServerSideProps() {
  const production = process.env.NODE_ENV === 'production'

  // secret hidden route 🤫
  if (production) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
