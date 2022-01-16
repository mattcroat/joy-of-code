import { Layout } from '@/root/components/shared/layout'

let uses = [
  {
    title: '💿️ Operating System',
    link: {
      text: 'Manjaro (GNOME)',
      url: 'https://manjaro.org/',
    },
  },
  {
    title: '📜 Code Editor',
    link: {
      text: 'Visual Studio Code',
      url: 'https://code.visualstudio.com/',
    },
  },
  {
    title: '🎨 Code Editor Theme',
    link: {
      text: 'Night Howl',
      url: 'https://marketplace.visualstudio.com/items?itemName=Matia.night-howl',
    },
  },
  {
    title: '✍️ Coding Font',
    link: { text: 'Coding Font', url: 'https://www.monolisa.dev/' },
  },
  {
    title: '❤️ Other Fonts I Love',
    fonts: [
      {
        name: 'Anonymous Pro',
        url: 'https://www.marksimonson.com/fonts/view/anonymous-pro',
      },
      {
        name: 'Cascadia Code',
        url: 'https://github.com/microsoft/cascadia-code',
      },
      { name: 'Fira Code', url: 'https://github.com/tonsky/FiraCode' },
      {
        name: 'IBM Plex Mono',
        url: 'https://fonts.google.com/specimen/IBM+Plex+Mono',
      },
      { name: 'Mononoki', url: 'https://madmalik.github.io/mononoki/' },
      {
        name: 'Source Code Pro',
        url: 'https://fonts.google.com/specimen/Source+Code+Pro',
      },
    ],
  },
]

export function Uses() {
  return (
    <Layout>
      <h1>Uses</h1>

      <hr className="w-10 h-1 my-2 bg-gray-600 border-0"></hr>

      <main className="mt-12 space-y-8">
        {uses.map(({ title, link, fonts }) => (
          <div key={title}>
            <span className="block text-2xl font-bold">{title}</span>
            {link && (
              <a
                className="inline-block mt-2 text-xl underline"
                href={link.url}
              >
                {link.text}
              </a>
            )}
            {fonts && (
              <ul className="mt-2 space-y-1 text-xl list-disc list-inside">
                {fonts.map(({ name, url }) => (
                  <li key={name}>
                    <a className="text-xl underline" href={url}>
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </main>
    </Layout>
  )
}
