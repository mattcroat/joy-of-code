<br>
<div align="center">
 <img width="400" src="https://i.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif" alt="Bob Ross">
</div>
<br>

## Joy of Code

[Joy of Code](https://joyofcode.xyz/) is a digital garden growing curious minds focused on web development and web design.

## 🙏 Support

You can support my work by [becoming a patron](https://www.patreon.com/joyofcode) or [becoming a YouTube member](https://youtube.com/@joyofcodedev/join) starting low as **$1/month**.

## ▶️ YouTube

You can find my videos on [YouTube](https://www.youtube.com/@joyofcodedev).

## 🤗 Contributing

At the end of each post there's a direct link to the **Markdown** file of the post you can edit within GitHub. Read the [contributing guidelines](CONTRIBUTING.md) to learn more.

## 🧭 Uses

- ⚡️ [SvelteKit](https://kit.svelte.dev/) for the framework and prerendering pages ahead of time making it blazingly fast 🔥

- The project is hosted on [Vercel](https://vercel.com/)

- The tests use [Playwright](https://playwright.dev/) for end-to-end testing and [Vitest](https://vitest.dev/) for unit tests

- I use [Buttondown](https://buttondown.email/) for the newsletter when I remember to send one 🤭

- I'm using [Supabase](https://supabase.com/) to track post views

- I use [social-share-images](https://github.com/mattcroat/social-share-images) to create dynamic social share images (I plan on using `@vercel/og` instead)

- For analytics I use [Vercel Web Analytics](https://vercel.com/analytics)

## 📜 Setup

These instructions are mostly if you want to learn how the code works but in general **I don't accept pull requests that aren't related to posts** but you can always raise an issue.

The project uses 📦️ [pnpm](https://pnpm.io/) but any package manager should work.

### 👬 Clone the project

```sh
git clone https://github.com/mattcroat/joy-of-code.git
```

### ⚙️ Rename `.env.example` to `.env` and change

```text
# Private
BUTTONDOWN_API_KEY=API_KEY

# Public
PUBLIC_SUPABASE_ANON_KEY=SUPABASE_KEY
PUBLIC_SUPABASE_URL=SUPABASE_URL
```

### 📦️ Install the dependencies

```sh
pnpm i
```

### 💿️ Run the development server with `pnpm run dev` or build and preview the project with `pnpm run build && pnpm run preview`.

```sh
pnpm run dev
```
