---
title: Blazing Fast SvelteKit Search With FlexSearch
description: Simple but powerful search with zero network requests at no cost.
slug: blazing-fast-sveltekit-search
published: '2024-02-20'
category: sveltekit
---

## Table of Contents

## Project Setup

In this post I'm going to show you the basics of how you can use [FlexSearch](https://github.com/nextapps-de/flexsearch) to make a simple, but powerful search inspired by the search from the [Svelte](https://svelte.dev/) site.

{% embed src="https://stackblitz.com/github/joysofcode/sveltekit-flexsearch?ctl=1&embed=1&file=src%2Froutes%2F%2Bpage.svelte&title=SvelteKit Search" title="SvelteKit Search" %}

You can find the code on [GitHub](https://github.com/joysofcode/sveltekit-flexsearch).

The only dependency you need is `flexsearch` which is a light text search engine used to index, and search content.

```shell:terminal
npm i flexsearch
```

Inside your SvelteKit project create these files.

```shell:tree
src/
├── lib/
│   └── search.ts
└── routes/
    ├── search.json/
    │   └── +server.ts
    └── +page.svelte
```

- `search.ts` is going to house our indexing and search logic
- `search.json/+server.ts` is an endpoint that's going to serve the prerendered content as JSON for indexing (this avoids having to write a JSON file)
- `+page.svelte` is where our search lives

The naming, and placement of these files is not important outside the usual SvelteKit conventions for creating routes.

## Prepare The Data

You can find [example posts](https://github.com/joysofcode/sveltekit-flexsearch/blob/main/src/routes/search.json/posts.json) in the repo if you want to try it out.

Here I'm just importing the posts and serving them as JSON, but you probably have Markdown content that you have to import and strip into plain text.

```ts:routes/search.json/+server.ts showLineNumbers
import { json } from '@sveltejs/kit'
import posts from './posts.json'

export async function GET() {
	return json(posts)
}
```

Here's an example of [how I imported the posts and removed the Markdown](https://github.com/mattcroat/joy-of-code/blob/main/src/routes/api/search/%2Bserver.ts) but I suggest you use an existing package to strip the Markdown.

## Creating The Search Index

This sounds spooky but it's a couple of lines of code.

```ts:lib/search.ts showLineNumbers
import FlexSearch from 'flexsearch'

// create posts index
let postsIndex: FlexSearch.Index
// the posts
let posts: Post[]

export function createPostsIndex(data: Post[]) {
  // create the posts index (matching every character)
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' })

  // loop over posts
	data.forEach((post, i) => {
    // I want to index the title and content together
		const item = `${post.title} ${post.content}`
    // add the item to the index
		postsIndex.add(i, item)
	})

  // assign data to posts
	posts = data
}
```

## Creating The Search Function

Next let's write the search function.

```ts:lib/search.ts showLineNumbers
export function searchPostsIndex(searchTerm: string) {
  // we need to escape special regex characters
  // I stole this shit like everyone else 😂
	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  // search the index which returns matching indexes 💪
	const results = postsIndex.search(match)

	return results
    // filter the posts based on the matched index
		.map((index) => posts[index as number])
    // you can do whatever you want at this point 👌
		.map(({ slug, title, content }) => {
			return {
				slug,
        // replace match in title with a marker
				title: replaceTextWithMarker(title, match),
        // match words in post and replace matches with marker
				content: getMatches(content, match),
			}
		})
}
```

## Replacing Matches With A Marker

To replace the matched words with a `<mark>` element, we need to find the word indexes for the match inside the post, and return them.

```ts:lib/search.ts showLineNumbers
// if you return more than one match per post you can loop over them
function getMatches(text: string, searchTerm: string, limit = 1) {
	// `const regex = /${searchTerm}/gi` would not work
  // so create dynamic regex 😎
	const regex = new RegExp(searchTerm, 'gi')
  // matched word indexes
	const indexes = []
  // matches count
	let matches = 0
  // current match in loop
	let match

  // this exact example is on MDN 📖
	while ((match = regex.exec(text)) !== null && matches < limit) {
		// push that shit
    indexes.push(match.index)
    // increment matches count
		matches++
	}

  // we take the word index...
	return indexes.map((index) => {
    // go back 20 characters
		const start = index - 20
    // go forwards 80 characters
		const end = index + 80
    // yoink the text
		const excerpt = text.substring(start, end).trim()
    // return excerpt 🤝
		return `...${replaceTextWithMarker(excerpt, searchTerm)}...`
	})
}

function replaceTextWithMarker(text: string, match: string) {
  // create dynamic regex 😎
	const regex = new RegExp(match, 'gi')
  // this preserves the text casing 🤙
	return text.replaceAll(regex, (match) => `<mark>${match}</mark>`)
}
```

## Creating The Search

The only thing left to do is put everything together (I'm going to skip the styles but you can find them in the example code).

```html:routes/+page.svelte showLineNumbers
<script lang="ts">
	import { onMount } from 'svelte'
	import { createPostsIndex, searchPostsIndex, type Result } from '$lib/search'

	let search: 'loading' | 'ready' = 'loading'
	let searchTerm = ''
	let results: Result[] = []

	onMount(async () => {
    // get the posts
		const posts = await fetch('/search.json').then((res) => res.json())
		// create index
    createPostsIndex(posts)
    // we're in business 🤝
		search = 'ready'
	})

	$: if (search === 'ready') {
    // runs each time `searchTerm` updates
		results = searchPostsIndex(searchTerm)
	}
</script>

{#if search === 'ready'}
	<div class="search">
		<input
			bind:value={searchTerm}
			placeholder="Search"
			autocomplete="off"
			spellcheck="false"
			type="search"
		/>

		<div class="results">
			{#if results}
				<ul>
					{#each results as result}
						<li>
							<a href="/{result.slug}">
								{@html result.title}
							</a>
							<p>{@html result.content}</p>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
{/if}
```

That's it! 👏

## Using A Web Worker

You don't have to update the search that fast, and only run the search when the user performs an action, but there's another way.

If you have a lot of content, you might start feeling the UI slow down because you're blocking the main JavaScript thread, which is a perfect use case for the [Web Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

A web worker (not to be confused with service worker) is a way to run some code in the background, separate from the main thread, and send and receive messages from the worker.

```ts:search-worker.ts showLineNumbers
// search logic is inside worker
import { createPostsIndex, searchPostsIndex } from './search'

// listen for messages
addEventListener('message', async (e) => {
	const { type, payload } = e.data

	if (type === 'load') {
    // get the data
		const posts = await fetch('/api/search').then((res) => res.json())
		// create index
    createPostsIndex(posts)
    // initialize 🤝
		postMessage({ type: 'ready' })
	}

	if (type === 'search') {
    // get search term
		const searchTerm = payload.searchTerm
    // search posts index
		const results = searchPostsIndex(searchTerm)
    // send message with resuls and search term
		postMessage({ type: 'results', payload: { results, searchTerm } })
	}
})
```

The computation now happens in a separate background thread, separate from the main thread of our app.

```html:+page.svelte showLineNumbers
<script lang="ts">
  // Vite has a special import for workers
  import SearchWorker from './search-worker?worker'

  onMount(() => {
    // create worker
    searchWorker = new SearchWorker()
    // listen for messages
    searchWorker.addEventListener('message', (e) => {
      const { type, payload } = e.data
      type === 'ready' && (search = 'ready')
      type === 'results' && (results = payload.results)
    })
    // initialize when the component mounts
    searchWorker.postMessage({ type: 'load' })
  })
</script>
```

You can see the [complete code](https://github.com/mattcroat/joy-of-code/tree/main/src/lib/ui/header/search) how I implemented it for the search on my site. That's it, hope you learned something! 😄
