---
title: Visualize GitHub Contributions With Svelte
description: Learn how to use Threlte to make a 3D visualization of your GitHub contribution graph.
slug: svelte-3d-visualization
published: '2023-08-18'
category: svelte
draft: true
---

## Table of Contents

## GitHub Skyline

We're going to visualize the GitHub contributions graph in 3D using [Threlte](https://threlte.xyz/) inspired by [GitHub Skyline](https://skyline.github.com/).

## Project Setup

The easiest way to get started is using the Threlte CLI which is going to scaffold a regular SvelteKit project with Threlte.

```shell:terminal showLineNumbers
npm create threlte
```

Select the `@threlte/core` package and `@threlte/extras` for some helpful utilities. The Threlte CLI is also going to install `three` and `@types/three` because it uses [Three.js](https://threejs.org/).

Threlte uses [pnpm](https://pnpm.io/) and you can install the dependencies with `pnpm i` in case you skipped it during the setup, and start the development server with `pnpm run dev`. I'm going to remove everything inside `lib` and `routes` to start from scratch.

## 3D Scene Setup

Inside `routes/+page.svelte` I'm going to set up a 3D scene.

```html:src/routes/+page.svelte showLineNumbers
<script lang="ts">
	import { Canvas } from '@threlte/core'
	import Scene from './scene.svelte'
</script>

<div class="scene">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<style>
	.scene {
		position: absolute;
		inset: 0;
		background: hsl(200 10% 10%);
	}
</style>
```

## The API Endpoint

You could use the GitHub API for the contributions but that requires authentication — I'm going to use the Skyline API I found by looking at the network tab instead. 🤫

You could fetch the data for the page inside `+page.server.ts` but I want to create an API endpoint instead where I can pass parameters like **user** and **year**.

> 🐿️ Using the Skyline API on the server also bypasses [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) because it's only enforced by the browser.

I'm going to create an API endpoint in `api/+server.ts` inside `routes`.

```ts:src/routes/api/+server.ts showLineNumbers
import { json } from '@sveltejs/kit'

export async function GET({ fetch, url }) {
	const api = 'https://skyline.github.com'
	const user = url.searchParams.get('user')
	const year = url.searchParams.get('year')

	if (!user || !year) {
		throw new Error('Missing required parameters')
	}

	try {
		const response = await fetch(`${api}/${user}/${year}.json`)

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`)
		}

		const { contributions } = await response.json()
		return json(contributions)
	} catch (error) {
		console.log(`Fetch failed: ${error}`)
	}
}
```

I'm going to create the types for the contributions which is optional if you're not using TypeScript.

```ts:src/lib/types.ts showLineNumbers
export type Contributions = {
	week: number
	days: { count: number }[]
}[]
```

## Displaying The Data

I'm going to fetch the data on the client because there's no need for server-side rendering as we only care about the data.

```html:src/routes/scene.svelte showLineNumbers
<script lang="ts">
	import { onMount } from 'svelte'
	import type { Contributions } from '$lib/types'

	let contributions: Contributions = []

	onMount(async () => {
		const response = await fetch('api?user=mattcroat&year=2022')
		contributions = await response.json()
	})
</script>
```

I'm going to add a grid, camera, lights, and iterate over the contributions data where weeks are columns, and days are rows.

```html:src/routes/scene.svelte showLineNumbers
<script lang="ts">
	import { onMount } from 'svelte'
  import { T } from '@threlte/core'
	import { Center, Grid, OrbitControls } from '@threlte/extras'
	import type { Contributions } from '$lib/types'

	let contributions: Contributions = []

	onMount(async () => {
		const response = await fetch('api?user=mattcroat&year=2022')
		contributions = await response.json()
	})
</script>

<Grid
	infiniteGrid
	sectionColor="#4a4b4a"
	sectionSize={20}
	cellSize={20}
	fadeDistance={400}
/>

<T.PerspectiveCamera makeDefault position={[10, 100, 100]} fov={60}>
	<OrbitControls enableDamping autoRotate />
</T.PerspectiveCamera>

<T.AmbientLight color="#fff" intensity={0.4} />
<T.DirectionalLight position={[0, 80, 40]} intensity={2} color="#fff" />
<T.DirectionalLight position={[0, 80, -40]} color="#fff" intensity={2} />

<Center autoCenter position.y={20}>
	<T.Group scale.y={$scaleY}>
		{#each contributions as _, i}
			{#each contributions[i].days as day, j}
				{@const width = 4}
				{@const height = day.count === 0 ? 0.5 : day.count}
				{@const depth = 4}
				{@const color = getColor(day.count)}
				{@const offset = 0.4}
				{@const x = i * (width + offset)}
				{@const y = day.count / 2}
				{@const z = j * (depth + offset)}

				<T.Mesh position={[x, y, z]}>
					<T.BoxGeometry args={[width, height, depth]} />
					<T.MeshStandardMaterial {color} />
				</T.Mesh>
			{/each}
		{/each}
	</T.Group>
</Center>
```
