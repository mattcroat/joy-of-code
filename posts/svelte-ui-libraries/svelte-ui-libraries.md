---
title: List Of Svelte UI Libraries
description: I tried every Svelte UI library, so you don't have to.
slug: svelte-ui-libraries
published: '2022-12-11'
category: svelte
---

{% youtube id="O0mNU0maItY" title="List Of Svelte UI Libraries" %}

## Table of Contents

## Headless Libraries

These Svelte UI libraries provide you with the logic and required accessibility to make components. You have complete control over the styling method.

[Bits UI](https://www.bits-ui.com/) uses Melt UI as the base, and is simple to use, customizable, and accessible, and includes a lot of components. You can use regular CSS, or Tailwind CSS to style the components.

```html:example.svelte showLineNumbers
<script lang="ts">
	import { Select } from 'bits-ui'

	const fruits = [
		{ value: '🍎', label: 'Apple' },
		{ value: '🍌', label: 'Banana' },
		{ value: '🍊', label: 'Orange' },
		{ value: '🍐', label: 'Pear' },
	]
</script>

<Select.Root items={fruits}>
	<Select.Trigger>
		<Select.Value placeholder="Select a fruit" />
	</Select.Trigger>

	<Select.Content>
		{#each fruits as fruit}
			<Select.Item value={fruit.value} label={fruit.label}>
				{fruit.label}
			</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
```

[Melt UI](https://melt-ui.com/) is a low level API for creating your own components which can be intense if you only want a quick and simple component but that's the idea.

```html:example.svelte showLineNumbers
<script lang="ts">
	import { createSelect, melt } from '@melt-ui/svelte'

	const fruits = [
		{ value: '🍎', label: 'Apple' },
		{ value: '🍌', label: 'Banana' },
		{ value: '🍊', label: 'Orange' },
		{ value: '🍐', label: 'Pear' },
	]

	const {
		elements: { trigger, menu, option },
		states: { selectedLabel, open },
	} = createSelect()
</script>

<div>
	<button use:melt={$trigger}>
		{$selectedLabel || 'Select a fruit'}
	</button>

	{#if $open}
		<div use:melt={$menu}>
			{#each fruits as fruit}
				<div use:melt={$option({ ...fruit })}>
					{fruit.value}
				</div>
			{/each}
		</div>
	{/if}
</div>
```

## Tailwind Based Libraries

These Svelte UI libraries use the utility-first CSS framework [Tailwind](https://tailwindcss.com/) for styling, and provide functional and accessible components.

[Flowbite Svelte](https://flowbite-svelte.com/) is more opinionated, and comes with a lot of components you can use. Some components seem to use native elements making the design look less cohesive, and I would prefer if the examples used TypeScript but it's simple to use.

```html:example.svelte showLineNumbers
<script lang="ts">
	import { Select, Label } from 'flowbite-svelte'

	let selected: string

	const fruits = [
		{ value: '🍎', name: 'Apple' },
		{ value: '🍌', name: 'Banana' },
		{ value: '🍊', name: 'Orange' },
		{ value: '🍐', name: 'Pear' },
	]
</script>

<Label>
	Select a fruit
	<Select items={fruits} bind:value={selected} />
</Label>
```

[Skeleton UI](https://www.skeleton.dev/) is a UI toolkit for Svelte and comes with premade components and utilities. I would love to see more component variety but it has great docs, themes including a theme generator, and a Figma design kit.

```html:example.svelte showLineNumbers
<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton'
</script>

<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
```

[shadcn-svelte](https://www.shadcn-svelte.com/) is an unofficial Svelte port of [shadcn/ui](https://ui.shadcn.com/) and it's unlike any other UI library because it's not a package, but a collection of reusable components that you can copy and paste, or use the CLI to add to your apps where the styles are decoupled from the implementation making it minimal.

```html:example.svelte showLineNumbers
<script lang="ts">
	import * as Select from '$lib/components/ui/select'

	const fruits = [
		{ value: '🍎', label: 'Apple' },
		{ value: '🍌', label: 'Banana' },
		{ value: '🍊', label: 'Orange' },
		{ value: '🍐', label: 'Pear' },
	]
</script>

<Select.Root>
	<Select.Trigger class="w-[180px]">
		<Select.Value placeholder="Select a fruit" />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			{#each fruits as fruit}
				<Select.Item value={fruit.value} label={fruit.label}>
					{fruit.label}
				</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
</Select.Root>
```

## Bootstrap Inspired Libraries

Svelte UI libraries using Bootstrap design:

- [Sveltestrap](https://sveltestrap.js.org/)
- [AgnosUI](https://amadeusitgroup.github.io/AgnosUI/latest/)

## Material Design Inspired Libraries

Svelte UI libraries using Material Design:

- [Smelte](https://smeltejs.com/)
- [Svelte Material UI](https://sveltematerialui.com/)

## Framework Agnostic Libraries

These are some lovely framework agnostic UI libraries:

- [Open Props](https://open-props.style/) (like Tailwind but uses CSS variables)
- [Pico](https://picocss.com/) (CSS)
- [Preline](https://preline.co/) (Tailwind CSS)
- [Shoelace](https://shoelace.style/) (web components)
- [daisyUI](https://daisyui.com/) (Tailwind CSS)

## Other UI/UX Libraries

Interesting Svelte UI libraries that have potential, or don't fit a specific category:

- [Attractions](https://illright.github.io/attractions/)
- [Carbon Components](https://carbon-components-svelte.onrender.com/)
- [Grail UI](https://grail-ui.vercel.app/)
- [Kahi UI](https://kahi-ui.nbn.dev/)
- [STWUI](https://stwui.vercel.app/)
- [Svelte Atoms](https://svelte-atoms.web.app/)
- [Svelte Headless UI](https://svelte-headlessui.goss.io/)
- [SvelteUI](https://svelteui.dev/)
- [Svelte UX](https://svelte-ux.techniq.dev/)
- [YeSvelte](https://www.yesvelte.com/)
