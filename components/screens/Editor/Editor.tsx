import React from 'react'

import { PostImage } from '@/root/components/screens/Editor/PostImage'

export function Editor() {
  return <PostImage />
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
