---
title: Using Functions From Another Svelte Component
description: How to use functions from a child component inside a parent Svelte component.
slug: using-functions-from-another-svelte-component
published: '2024-02-10'
category: svelte
---

## Table Of Contents

## Export The Function

If you want to use a function from another Svelte component, export the function, and then you can bind the component in the parent.

```html:video.svelte showLineNumbers
<script>
  let { src, ...props } = $props()
  let videoEl

	export function play() {
		videoEl.play()
	}

	export function pause() {
		videoEl.pause()
	}
</script>

<video bind:this={videoEl} {...props}>
	<source {src} type="video/mp4">
</video>
```

## Bind The Component

Bind the component using Svelte's `bind:` directive to get a reference to the component after which you can use the exported functions.

```html:app.svelte showLineNumbers
<script>
  import Video from './video.svelte'

  let videoComponent
</script>

<Video bind:this={videoComponent} src="video.mp4" controls />

<button onclick="{() => videoComponent.play()}">
  Play
</button>

<button onclick="{() => videoComponent.pause()}">
  Stop
</button>
```
