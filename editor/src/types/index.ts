import type { Writable } from 'svelte/store'

export type GitHubAPIResponseType = {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  _links: {
    self: string
    git: string
    html: string
  }
}

export type GitHubAPIPostType = {
  title: string
  description: string
  slug: string
  published: string
  category: string
  series?: string
  draft?: string
}

export type GetSHAType = {
  slug?: string
  type?: 'post' | 'posts'
}

export type RateAPIResponseType = {
  limit: number
  used: number
  remaining: number
  remainingMinutes: number
  reset: string
  resetTimeLocale: string
}

export type PostItemType = {
  title: string
  slug: string
}

export type FrontMatterType = {
  title: string
  description: string
  slug: string
  published: string
  category: string
}

export type PostType = {
  content: string
  frontmatter: FrontMatterType
  postMarkdown: string
}

export type EditorPostType = Writable<{
  slug: string
  title: string
  markdown: string
  preview: boolean
  scrollPosition: number
}>
