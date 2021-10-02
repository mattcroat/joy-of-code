import { useRef, useState } from 'react'

import { getDate } from '@/root/utils/date'
import { Icon } from '@/root/components/shared/Icon'
import { Modal } from '@/root/components/screens/Editor/Modal'

import { categories } from '@/root/utils/categories'
import type { CategoryType } from '@/root/types/category'

import type { ChangeEvent, FocusEvent, FormEvent } from 'react'

export function Editor() {
  const [title, setTitle] = useState<string>('Placeholder')
  const [description, setDescription] = useState<string>('Description')
  const [category, setCategory] = useState<CategoryType>('css')
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const preEl = useRef<HTMLPreElement>(null)
  const date = getDate()

  function updateTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function updateDescription(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value)
  }

  function handleSelect(event: FocusEvent<HTMLSelectElement>) {
    const category = event.target.value as CategoryType
    setCategory(category)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function copyToClipboard() {
    const content = preEl.current?.textContent?.trim() ?? ''
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="max-w-[72ch] mx-auto pl-[80px] pt-8">
      {modalOpen && (
        <Modal category={category} modalOpen={setModalOpen} title={title} />
      )}
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

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="flex-1 p-4 rounded-tl rounded-bl bg-secondary">
            <label className="sr-only" htmlFor="title">
              Title
            </label>
            <input
              className="bg-transparent text-body"
              id="title"
              name="title"
              onChange={updateTitle}
              type="text"
              value={title}
            />
          </div>

          <div className="p-4 rounded-tr rounded-br bg-highlight">
            <label className="sr-only" htmlFor="theme">
              Category
            </label>
            <select
              className="font-bold bg-highlight text-primary"
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
        </div>

        <div className="flex-1 p-4 rounded-tl rounded-bl bg-secondary">
          <label className="sr-only" htmlFor="description">
            Description
          </label>
          <input
            className="bg-transparent text-body"
            id="description"
            name="description"
            onChange={updateDescription}
            type="text"
            value={description}
          />
        </div>
      </form>
      <div className="relative px-4 my-4 rounded bg-secondary">
        <button
          className="absolute px-4 py-2 rounded bg-highlight right-4 top-4"
          onClick={copyToClipboard}
        >
          {'📋'}
        </button>
        <pre ref={preEl} className="text-body">
          {`
---
title: ${title}
description: ${description}
published: '${date}'
category: '${category}'
image: '/images/${title}/og-image.webp'
---

# ${title}

<Image
  height={0}
  width={0}
  src="/images/${title}/image.webp"
  alt="Description"
/>

## Table of Contents

1. [link](#link)
        `}
        </pre>
      </div>
    </div>
  )
}
