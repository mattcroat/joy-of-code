import React from 'react'

import { Icon } from '@/root/components/shared/Icon'

import type { CategoryType } from '@/root/types/category'

interface ModalProps {
  category: CategoryType
  title: string
  modalOpen: (arg: boolean) => void
}

export function Modal({ category, title, modalOpen }: ModalProps) {
  return (
    <button
      className="absolute inset-0 z-50 grid w-full text-white place-items-center bg-gray-900/90"
      onClick={() => modalOpen(false)}
    >
      <div
        className="relative bg-no-repeat bg-cover"
        style={{
          width: '1200px',
          backgroundImage: `url(/images/categories/${category}.webp)`,
          height: '630px',
        }}
      >
        <span className="absolute px-4 py-2 text-lg font-bold text-gray-900 uppercase bg-white left-8 top-8">
          <span className="block translate-y-[1px]">Joy Of Code</span>
        </span>

        <span className="absolute max-w-xs font-bold text-8xl bottom-8 left-8 text-shadow">
          {title}
        </span>

        <div className="absolute right-8 top-8">
          <Icon className="w-16 h-16" icon={category} />
        </div>
      </div>
    </button>
  )
}
