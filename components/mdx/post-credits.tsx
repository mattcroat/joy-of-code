import { useRouter } from 'next/router'

import { CustomLink } from '@/root/components/shared/custom-link'

export function PostCredits() {
  const router = useRouter()
  const href = `https://github.com/mattcroat/joy-of-code/blob/main/posts/${router?.query?.slug}/${router?.query?.slug}.mdx`

  return (
    <div className="md:gap-4 md:flex">
      <div className="flex-1 px-6 py-4 mb-4 bg-green-900 rounded-md md:mb-0">
        <span className="block text-xl text-center text-white md:text-2xl">
          {'❤️ Contribute'}
        </span>

        <p className="my-4 text-white">
          Found a mistake? Contribute on GitHub by{' 📝 '}
          <CustomLink href={href}>
            <span className="underline">editing</span> it.
          </CustomLink>
        </p>

        <p className="my-4 text-white">{'Thank you! 🥰'}</p>
      </div>

      <div className="flex-1 px-6 py-4 mb-4 text-white bg-gray-900 rounded-md md:mb-0">
        <span className="block text-xl text-center md:text-2xl">
          {'☕ About Myself'}
        </span>

        <p className="my-4 text-white">
          I'm{' '}
          <CustomLink href="https://github.com/mattcroat">
            <span className="underline">Matija</span>
          </CustomLink>{' '}
          from {'🇭🇷'} Croatia and I'm infinitely curious at how things work but
          mostly passionate about {'☕'} JavaScript and {'🎨'} UI/UX.
        </p>
      </div>
    </div>
  )
}
