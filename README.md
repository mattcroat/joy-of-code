# Joy of Code

![Bob Ross](https://i.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif)

## 🧑‍🎨 What is Joy of Code?

[Joy of Code](https://joyofcode.xyz/) is a digital garden growing curious minds focused on web development and web design.

## ▶️ YouTube

You can also find my videos on [YouTube](https://www.youtube.com/@joyofcodedev).

## 💰️ Support

You can support my work by [becoming a patron](https://www.patreon.com/joyofcode) or [becoming a YouTube member](https://youtube.com/@joyofcodedev/join) starting low as **$1/month**.

## 🤗 Contributing

At the end of each post there's a direct link to the **Markdown** file of the post you can edit within GitHub. Read the [contributing guidelines](CONTRIBUTING.md) to learn more.

## 💬 GitHub Discussions

I use [GitHub Discussions](https://github.com/mattcroat/joy-of-code/discussions) to track breaking changes for posts which you can use to report issues.

## 🧭 Technologies

- ⚡️ [SvelteKit](https://kit.svelte.dev/) is used for the frontend with server-side rendering and prerendering static pages

- 🔌 [GitHub API](https://docs.github.com/en/rest) is used to manage content so GitHub is the content management system

- The [editor](https://github.com/mattcroat/editor) uses ⚡️ SvelteKit for the frontend and 📜 [Monaco Editor](https://github.com/microsoft/monaco-editor) (code editor which powers [VS Code](https://code.visualstudio.com/)) as the editor to manage content using the 🔌 GitHub API

- ✍️ Posts are stored inside the `posts` folder and are used to build the page using the 🔌 GitHub API but `data` is where posts metadata is stored in a single `posts.json` to serve as a database

- The project is hosted on [Vercel](https://vercel.com/) and uses [ignored build step](https://vercel.com/docs/concepts/projects/overview#ignored-build-step) with `git diff HEAD^ HEAD --quiet . ':(exclude)posts/*' ':(exclude)data/*'` to avoid redeploy for those special folders

- The tests use [Playwright](https://playwright.dev/) for end-to-end testing

- Newsletter uses [Buttondown](https://buttondown.email/) when I remember to send one 🤭

- Post views use [Supabase](https://supabase.com/)

- Social share images are generated using [mattcroat/social-share-images](https://github.com/mattcroat/social-share-images)

## 📜 Setup

The project uses 📦️ [pnpm](https://pnpm.io/) but any package manager is going to work.

👬 Clone the project.

```sh
git clone https://github.com/mattcroat/joy-of-code.git
```

📦️ Install the dependencies.

```sh
pnpm i
```

💿️ Run the development server with `pnpm run dev` or build and preview the project with `pnpm run build && pnpm run preview`.

```sh
pnpm run dev
```
