import type { RequestHandler } from '@sveltejs/kit'

export const post: RequestHandler = async ({ request }) => {
  const API_URL = 'https://api.buttondown.email/v1/subscribers'
  const API_KEY = process.env.BUTTONDOWN_API_KEY

  const email = await request.json()

  if (!email) {
    return {
      status: 400,
      body: { error: 'You forget the email. 😊' },
    }
  }

  try {
    const response = await fetch(API_URL, {
      method: 'post',
      body: JSON.stringify({ email }),
      headers: {
        Authorization: `Token ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const text = await response.text()

      if (text.includes('already subscribed')) {
        return {
          status: 400,
          body: { error: `You're already subscribed. 😊` },
        }
      }

      return {
        status: 400,
        body: { error: text },
      }
    }

    return {
      status: 201,
      body: { success: 'Thank you for subscribing! 🥳' },
      headers: { location: '/' },
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        response: 500,
        body: { error: error.message },
      }
    }
  }
}
