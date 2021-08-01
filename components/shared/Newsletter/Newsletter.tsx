import { FormEvent, useRef, useState } from 'react'
import Confetti from 'react-dom-confetti'

import { CustomLink } from '@/root/components/shared/CustomLink'

export function Newsletter({ ...props }) {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const inputEl = useRef<HTMLInputElement>(null)

  async function subscribe(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    const response = await fetch('/api/newsletter', {
      body: JSON.stringify({
        email: inputEl?.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await response.json()

    if (error) {
      setIsError(true)
      return
    }

    if (inputEl.current) {
      inputEl.current.value = ''
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 4000)
    }
  }

  return (
    <div className="p-8 rounded-md bg-highlight" {...props}>
      <div>
        <span className="text-xl font-bold text-secondary md:text-4xl">
          {'📬'} Subscribe for Updates
        </span>
        <p className="my-4 text-secondary">
          I don't want your data, so there's also a
          <CustomLink href="/feed/rss.xml">
            {' '}
            <span className="underline">RSS feed.</span>
          </CustomLink>
        </p>
      </div>

      <form className="mt-8" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          className="max-w-[140px] sm:max-w-none p-2 text-highlight rounded-tl rounded-bl md:p-4 bg-secondary"
          id="newsletter-email"
          name="newsletter-email"
          placeholder="unix@chad.com"
          required
          type="email"
        />
        <button
          className="p-2 font-bold border-0 rounded-tr rounded-br shadow-sm md:p-4 bg-primary text-highlight"
          type="submit"
        >
          {!isError && !isSubscribed && 'Subscribe'}
          {isError && '💩 Try again'}
          {isSubscribed && 'Subscribed! 🎉'}
          <Confetti active={isSubscribed} />
        </button>
      </form>
    </div>
  )
}
