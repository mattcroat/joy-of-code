---
title: Using The Svelte Context API With Stores
description: Learn when to use the Svelte context API with stores
slug: svelte-context-with-stores
published: '2023-06-02'
category: svelte
---

{% youtube id="dp-7NvLDrK4" title="Using The Svelte Context API With Stores" %}

## Table of Contents

## Introduction

In this post I'm mostly going to focus on when you should use the Svelte context API versus Svelte stores, so I assume you at least know what they are.

They might seem like they do the same thing at a glance when using a simple example but at the end of this post you're going to understand what problems they solve.

If you don't know about the [Svelte context API](https://learn.svelte.dev/tutorial/writable-stores) and [Svelte stores](https://learn.svelte.dev/tutorial/context-api) the links should take you to the Svelte tutorial.

I also have a [Svelte state management guide](https://joyofcode.xyz/svelte-state-management) you can watch or read that explains these concepts in detail.

## The Difference Between The Context API And Stores

Svelte stores in general are great for global state like a theme set by the user or notifications shared by multiple unrelated components.

```ts:example.ts showLineNumbers
import { writable } from 'svelte/store'

// reactive value
const count = writable(0)

// update the store
function updateCount() {
  count.update(currentCount => currentCount += 1)
}
```

The Context API on the other hand is meant to avoid passing data through components as props to avoid what's known as \*_prop drilling_ and the data is only available to the component and its children.

```ts:example.ts showLineNumbers
import { setContext, getContext } from 'svelte'

// sets the value in parent component
setContext('count', 0)

// access the value inside a child component
const count = getContext('count')
```

**The context isn't reactive**, so you can also pass a Svelte store inside of it.

Let's look at a problem and how it's solved using the Svelte context API with Svelte stores.

## The Problem

You have probably seen an example that uses component composition like the next example in Svelte.

```html:src/routes/+page.svelte showLineNumbers
<script lang="ts">
	import { Grandparent, Parent, Child } from '$lib/components'
</script>

<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
```

Inside the `<Grandparent />` component I have a simple count variable I update using the mouse scroll wheel.

```html:src/lib/components/grandparent.svelte showLineNumbers
<script lang="ts">
  export let count

	function updateCount(event: WheelEvent) {
		event.deltaY < 0 ? (count += 1) : (count -= 1)
	}
</script>

<div on:wheel={updateCount} class="container">
	<p>Grandparent: {count}</p>
	<slot />
</div>
```

If you want to show a value like `count` you have to pass it to every component.

```html:src/routes/+page.svelte showLineNumbers
<script lang="ts">
	import { Grandparent, Parent, Child } from '$lib/components'

  let count = 0
</script>

<Grandparent bind:count>
	<Parent {count}>
		<Child {count} />
	</Parent>
</Grandparent>
```

The `<Parent />` and `<Child />` components are identical.

```html:src/lib/components/parent.svelte showLineNumbers
<script lang="ts">
  export let count
</script>

<div class="container">
	<p>Parent: {count}</p>
	<slot />
</div>
```

```html:src/lib/components/child.svelte showLineNumbers
<script lang="ts">
  export let count
</script>

<div class="container">
	<p>Child: {count}</p>
	<slot />
</div>
```

This is already tedious but it's even worse if you want to update the value from a child component which requires passing an updater function.

## Using Svelte Stores

You might be thinking, "I'm just going to use Svelte stores" and that works but there's a problem you're not aware of yet.

```ts:src/lib/components/store.ts showLineNumbers
import { writable } from 'svelte/store'

export const count = writable(0)
```

This cleans up the code nicely.

```html:src/routes/+page.svelte showLineNumbers
<script lang="ts">
	import { Grandparent, Parent, Child } from '$lib/components'
</script>

<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
```

```html:src/lib/components/grandparent.svelte showLineNumbers
<script lang="ts">
  import { count } from './store'

	function updateCount(event: WheelEvent) {
		event.deltaY < 0 ? ($count += 1) : ($count -= 1)
	}
</script>

<div on:wheel={updateCount} class="container">
	<p>Grandparent: {$count}</p>
	<slot />
</div>
```

```html:src/lib/components/parent.svelte showLineNumbers
<script lang="ts">
    import { count } from './store'
</script>

<div class="container">
	<p>Parent: {$count}</p>
	<slot />
</div>
```

```html:src/lib/components/child.svelte showLineNumbers
<script lang="ts">
  import { count } from './store'
</script>

<div class="container">
	<p>Child: {$count}</p>
	<slot />
</div>
```

So what is the downside?

```html:src/routes/+page.svelte showLineNumbers
<script lang="ts">
	import { Grandparent, Parent, Child } from '$lib/components'
</script>

<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>

<Grandparent>
	<Parent>
		<Child />
	</Parent>
</Grandparent>
```

If you update the value in one component instance, it's going to update the value in other component instances.

Every instance of the `<Grandparent />` component and it's descendants shares the same store. 😱

You can solve this problem using the context API.

## Using The Context API

The context API is great if you only want to pass data down a component and its descendants.

Because context isn't reactive you can pass a Svelte store you can subscribe to as a value.

```ts:src/lib/components/context.ts showLineNumbers
import { writable, type Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'

type Count = number
type Context = Writable<number>

export function setCount() {
	let count = writable<Count>(0)
	setContext('count', count)
}

export function getCount() {
	return getContext<Context>('count')
}
```

Make sure you don't define the `count` store outside the `setCount` function because it's going to be shared by everyone since it's inside the same module.

The data from context is only available to the component and its descendants.

```html:src/lib/components/grandparent.svelte showLineNumbers
<script lang="ts">
	import { setCount, getCount } from './context'

  // set context
	setCount()

  // get the count
	const count = getCount('count')

	function updateCount(event: WheelEvent) {
		event.deltaY < 0 ? ($count += 1) : ($count -= 1)
	}
</script>

<div on:wheel={updateCount} class="container">
	<p>Grandparent: {$count}</p>
	<slot />
</div>
```

```html:src/lib/components/parent.svelte showLineNumbers
<script lang="ts">
	import { getCount } from './context'

	const count = getCount('count')
</script>

<div class="container">
	<p>Parent: {$count}</p>
	<slot />
</div>
```

```html:src/lib/components/child.svelte showLineNumbers
<script lang="ts">
	import { getCount } from './context'

	const count = getCount('count')
</script>

<div class="container">
	<p>Child: {$count}</p>
	<slot />
</div>
```

That's it! 😄

I hope you're more confident when to reach for a Svelte store and the Svelte Context API, or both when you need to.
