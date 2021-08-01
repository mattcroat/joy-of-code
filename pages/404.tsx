import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.replace('/'), 4000)
  }, [router])

  return (
    <Layout>
      <div className="mx-auto px-8 sm:px-0 sm:max-w-[60%] lg:max-w-[80%]">
        <h1>
          Oops!
          <Emoji emoji="💩" label="Poop emoji" />
        </h1>

        <hr className="w-10 h-1 my-2 bg-gray-600 border-0"></hr>

        <p className="my-8">
          <strong>Page not found.</strong> Redirecting...
        </p>
      </div>
    </Layout>
  )
}
