---
title: Create Beautiful Presentations With Svelte
description: Learn how to create beautiful presentations with Svelte using the HTML presentation framework Reveal.js and Tailwind CSS.
slug: beautiful-presentations-with-svelte
published: '2023-06-09'
category: svelte
---

{% youtube id="67lqa5kTQkA" title="Create Beautiful Presentations With Svelte" %}

## Table of Contents

## Everyone Loves Making Presentations

No one likes making boring presentations and learning an unfamiliar tool at the same time but what if you could use technologies you know and love like HTML, CSS and JavaScript?

{% embed src="https://stackblitz.com/github/joysofcode/svelte-deck?ctl=1&embed=1&file=src/routes/+page.svelte&hideExplorer=1&hideNavigation=1&view=preview&title=Svelte Deck" title="Svelte Deck" %}

You might need to **enable cookies** for the example but the code is also available on [GitHub](https://github.com/joysofcode/svelte-deck).

You're going to learn how to make beautiful looking presentations in Svelte with minimal effort using the HTML presentation framework [Reveal.js](https://revealjs.com/) and [Tailwind CSS](https://tailwindcss.com/).

> 🐿️ You've probably heard about [Slides.com](https://slides.com/) which uses the open source HTML presentation framework Reveal.js made by the same creator.

I know Tailwind might not be everyone's cup of tea but I picked Tailwind on purpose because it makes styling slides fast but it's not required in which case you can skip it.

I want you to be able to customize everything but not have to make a lot of decisions.

## SvelteKit And Tailwind Setup

I'm using `pnpm` as the package manager and I'm going to set up a **skeleton** SvelteKit project with TypeScript (optional) including ESLint and Prettier for code formatting.

```shell:terminal
pnpm create svelte
```

```shell:terminal
┌  Welcome to SvelteKit!
│
◇  Where should we create your project?
│    (hit Enter to use current directory)
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting
│
└  Your project is ready!
```

After it's done install the dependencies.

```shell:terminal
pnpm i
```

Use the `svelte-add` package to add Tailwind CSS.

```shell:terminal
pnpx svelte-add tailwindcss
```

Install Reveal.js including the optional types and fonts.

```shell:terminal showLineNumbers
pnpm i reveal.js @types/reveal.js @fontsource/manrope @fontsource/jetbrains-mono
```

Start the development server.

```shell:terminal
pnpm run dev
```

That's it! 😄

## Creating The Slide Deck

Before I do anything I'm going to disable server-side rendering in SvelteKit because it's going to cause problems and we don't need it for a single page application.

```ts:src/routes/+page.ts showLineNumbers
export const ssr = false
```

> 🐿️ You could use the Vite CLI to set up a regular Svelte project but I always use SvelteKit in case I change my mind.

Inside `+page.svelte` I'm going to import a `<Slides />` component and global styles.

```html:src/routes/+page.svelte showLineNumbers
<script lang="ts">
	import Slides from '$lib/deck/slides.svelte'
	import '../app.postcss'
</script>

<svelte:head>
	<title>Presentation</title>
</svelte:head>

<Slides />
```

The styles include some [CSS variables for theming from Reveal.js](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/exposer.scss) and styles to make the code blocks look nicer.

```css:src/app.postcss showLineNumbers
/*
	CSS Variables For Theming
	https://github.com/hakimel/reveal.js/blob/master/css/theme/template/exposer.scss
*/

@import '@fontsource/manrope';
@import '@fontsource/jetbrains-mono';

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
	--r-main-font: 'Manrope';
	--r-heading-font: 'Manrope';
	--r-code-font: 'JetBrains Mono';
	--r-link-color: aqua;
	--r-link-color-hover: aqua;
}

.hljs {
	background: none;
}

.hljs-title,
.hljs-keyword {
	font-weight: normal;
}

.reveal pre,
.reveal code {
	overflow: hidden !important;
}

.reveal pre {
	box-shadow: none;
}
```

Inside the `<Slides />` component initialize Reveal.js.

```html:src/lib/decks/slides.svelte showLineNumbers
<script lang="ts">
	import { onMount } from 'svelte'

	import Reveal from 'reveal.js'
	import Highlight from 'reveal.js/plugin/highlight/highlight'
	import Markdown from 'reveal.js/plugin/markdown/markdown'
	import Notes from 'reveal.js/plugin/notes/notes'

	import 'reveal.js/dist/reveal.css'
	import 'reveal.js/dist/theme/black.css'
	import 'reveal.js/plugin/highlight/monokai.css'

	import Presentation from './presentation.svelte'

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true
			// controls: false,
			// progress: false
		})

		deck.initialize()
	})
</script>

<div class="reveal">
	<div class="slides">
		<Presentation />
	</div>
</div>
```

I'm using the highlight, markdown and speaker notes plugin from Reveal.js but [you can find more plugins in their documentation](https://revealjs.com/plugins/).

You can use other [included Reveal.js themes](https://revealjs.com/themes/) and change the syntax highlighter theme. Reveal.js uses [highlight.js](https://highlightjs.org/) and there's a lot of [options to choose from for syntax highligting](https://highlightjs.org/static/demo/).

I encourage you to read the [Reveal.js docs](https://revealjs.com/) to know what you can customize but here is a basic idea how you do slides.

```html:example.html showLineNumbers
<div class="reveal">
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
  </div>
</div>
```

It can't be any simpler.

One of the best features of Reveal.js is [auto-animate](https://revealjs.com/auto-animate/) which automatically animates elements across slides using the [FLIP animation technique](https://aerotwist.com/blog/flip-your-animations/).

```html:example.html showLineNumbers
<section data-auto-animate>
  <p>Auto-Animate</p>
</section>

<section data-auto-animate>
  <p class="text-teal-400">Auto-Animate</p>
</section>
```

You can learn more about how Reveal.js matches elements from reading the documentation but the short version is that it looks for elements that are the same.

Because the contents of the `<p>` tag are the same Reveal.js knows it should auto-animate it but you can also specify a data attribute `data-id` id for elements that aren't the same but should be animated.

```html:example.html showLineNumbers
<section data-auto-animate>
  <div data-id="box" class="w-[200px] bg-teal-400"></div>
</section>

<section data-auto-animate>
  <div data-id="box" class="w-[400px] bg-red-400"></div>
</section>
```

I'm going to create reusable components which you can use to make a presentation inside the `<Presentation />` component.

```html:src/lib/deck/presentation.svelte showLineNumbers
<script lang="ts">
	import Slide from './slide.svelte'
	import Code from './code.svelte'
	import Markdown from './markdown.svelte'
</script>

<!-- ... -->
```

## The Slide Component

Let's start with creating the `<Slide />` component.

```html:src/lib/deck/slide.svelte showLineNumbers
<script lang="ts">
	export let id: string | null = null
	export let animate = false
	export let restart = false
</script>

<section
	data-auto-animate-id={id}
	data-auto-animate={animate || null}
	data-auto-animate-restart={restart || null}
>
	<slot />
</section>
```

- `data-auto-animate-id` attribute is useful when you want to break out of an animated slide into a new slide
- `data-auto-animate` attribute marks the slide to be animated
- `data-auto-animate-restart` option is useful if you want to break from the same group you're animating into a new slide

Using `null` is crucial otherwise the data attribute is always going to be present on the element. By saying `animate || null` we check if the prop is passed in which case the data attribute is used otherwise it's not.

With this simple `<Slide />` component you can already do a lot.

```html:src/lib/deck/presentation.svelte showLineNumbers
<script lang="ts">
	import Slide from './slide.svelte'
</script>

<Slide>Horizontal Slide</Slide>

<Slide>
	<Slide>Vertical Slide 1</Slide>
	<Slide>Vertical Slide 2</Slide>
</Slide>

<Slide animate>
	<ul>
		<li>React</li>
		<li>Solid</li>
		<li>Svelte</li>
		<li>Vue</li>
	</ul>
</Slide>

<Slide animate>
	<ul>
		<li>Svelte ❤️</li>
		<li>React</li>
		<li>Solid</li>
		<li>Vue</li>
	</ul>
</Slide>
```

How awesome is that? 😄

## The Code Component

The code component is straightforward.

```html:src/lib/deck/presentation.svelte showLineNumbers
<script lang="ts">
	export let id: string | null = null
	export let lines: string | boolean | null = null
	export let noescape = false
</script>

<pre data-id={id || null}>
  <code
    data-trim
    data-line-numbers={lines || null}
    data-noescape={noescape || null}
  >
    <slot />
  </code>
</pre>
```

- `data-id` attribute is used again to mark the code that needs to be animated
- `data-trim` attribute removes whitespace around the code
- `data-line-numbers` toggles lines numbers and you can also pass a string to highlight the code
- `data-noescape` attribute is useful if you don't want to escape HTML characters (this might be redundant in Svelte's case)

Here is how you can use the `<Code />` component to animate a code block.

```html:src/lib/deck/presentation.svelte showLineNumbers
<script lang="ts">
	import Code from './code.svelte'
</script>

<Slide animate>
	<Code id="code" lines>
		{`
			function love() {}
	 `}
	</Code>
</Slide>

<Slide animate>
	<Code id="code" lines="2|1-3">
		{`
			function love() {
				console.log('Svelte')
			}
	 `}
	</Code>
</Slide>
```

The first line of code is shown in the first slide and then in the second slide the change is made and `lines="2|1-3"` means the second line should be highlighted and then lines 1-3 should be highlighted.

> 🐿️ The curly brackets are required to prevent Svelte from interpreting the code.

That's it! 😄

## The Markdown Component

You might want to author your slides with Markdown and you can use HTML and Markdown in your slides and even write the entire presentation using an external Markdown file.

These should be two separate components to be honest but I've decided to be crafty and use an `external` prop to decide which component to render.

```html:src/lib/deck/markdown.svelte showLineNumbers
<script lang="ts">
	export let name = 'example.md'
	export let external = false
</script>

{#if external}
	<section data-markdown={name} />
{:else}
	<section data-markdown>
		<div data-template>
			<slot />
		</div>
	</section>
{/if}
```

Here is how you can use the `<Markdown />` component.

```html:src/lib/deck/presentation.svelte showLineNumbers
<script lang="ts">
	import Markdown from './markdown.svelte'
</script>

<Markdown>
	{`
		## Markdown ❤️
		You can use **HTML** or **Markdown** for slides.
	`}
</Markdown>

<Markdown name="example.md" external />
```

The `example.md` file is located in `static/example.md`.

````md:example.md showLineNumbers
## Slide 1

You can write the entire presentation in Markdown using an external Markdown file.

---

## Slide 2

```js [2|1-3]
function love() {
	console.log('Svelte')
}
```
````

You can always find more information in the Reveal.js documentation and just because I've done it this way doesn't mean you have to.

## Speaker Notes Component

Speaker notes are only visible to you and they're useful to include notes for the slide and to prepare you for the next slide.

```html:src/lib/deck/notes.svelte showLineNumbers
<aside class="notes">
	<slot />
</aside>
```

You can include a node inside your slide.

```html:src/lib/deck/presentation.svelte showLineNumbers
<script lang="ts">
	import Slide from './slide.svelte'
	import Code from './code.svelte'
	import Markdown from './markdown.svelte'
	import Notes from './notes.svelte'
</script>

<Slide>
	<!-- ... -->

	<Notes>
		<b>Avoid eye contact.</b>
	</Notes>
</Slide>
```

You can activate speaker notes by pressing the <kbd>S</kbd> key on your keyboard.

> 🐿️ Another useful shortcut is the <kbd>Escape</kbd> key that shows a bird's-eye view of your slides.

That's it! 😄

There's beauty in expressing complex thoughts through visuals and I hope you end up loving making slides from now on and tailor it to your needs.
