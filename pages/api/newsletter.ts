import type { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body

  if (!email || !email.length) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const DATA_CENTER = API_KEY?.split('-')[1]
    const API_URL = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')

    await fetch(API_URL, {
      body: JSON.stringify(data),
      headers: {
        Authorization: `Basic ${base64ApiKey}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    return res.status(201).json({ error: null })
  } catch (error) {
    return res.status(400).json({
      error: 'Oops! 💩 Something went wrong.',
    })
  }
}
