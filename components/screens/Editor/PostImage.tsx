import { useState } from 'react'

import { Icon } from '@/root/components/shared/Icon'
import { Modal } from '@/root/components/screens/Editor/Modal'

import { categories } from '@/root/utils/helpers/categories'
import type { CategoryType } from '@/root/types/category'

import type { ChangeEvent, FocusEvent, FormEvent } from 'react'

export function PostImage() {
  const [title, setTitle] = useState<string>('Placeholder')
  const [category, setCategory] = useState<CategoryType>('css')
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleSelect(event: FocusEvent<HTMLSelectElement>) {
    const category = event.target.value as CategoryType
    setCategory(category)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <>
      {modalOpen && (
        <Modal category={category} modalOpen={setModalOpen} title={title} />
      )}

      <div className="max-w-[72ch] mx-auto pl-[80px] pt-8">
        <button
          className="relative w-full mx-auto text-white bg-no-repeat bg-cover"
          onClick={() => setModalOpen(true)}
          style={{
            backgroundImage: `url(/images/categories/${category}.webp)`,
            height: '340px',
          }}
        >
          <span className="absolute px-4 py-2 text-lg font-bold text-gray-900 uppercase bg-white left-8 top-8">
            Joy of Code
          </span>
          <span className="absolute max-w-xs text-6xl font-bold text-left bottom-8 left-8 text-shadow">
            {title}
          </span>
          <div className="absolute right-8 top-8">
            <Icon className="w-10 h-10" icon={category} />
          </div>
        </button>

        <form className="flex mt-8" onSubmit={handleSubmit}>
          <div className="flex-1 p-4 rounded-tl rounded-bl bg-secondary">
            <label className="sr-only" htmlFor="title">
              Title
            </label>
            <input
              className="text-white bg-transparent"
              id="title"
              name="title"
              onChange={handleInput}
              type="text"
              value={title}
            />
          </div>

          <div className="p-4 rounded-tr rounded-br bg-highlight">
            <label className="sr-only" htmlFor="theme">
              Category
            </label>
            <select
              className="font-bold bg-transparent"
              id="theme"
              name="theme"
              onChange={handleSelect}
              value={category}
            >
              {categories.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </>
  )
}
