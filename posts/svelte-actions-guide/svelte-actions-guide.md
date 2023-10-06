---
title: The Ultimate Svelte Actions Guide
description: Svelte actions are the most underrated and powerful Svelte feature which sets it apart from other JavaScript frameworks.
slug: svelte-actions-guide
published: '2023-10-06'
category: svelte
draft: true
---

## Table of Contents

## What Are Svelte Actions?

[Svelte actions](https://svelte.dev/docs/svelte-action) are just regular JavaScript functions that are called when an element is created, and give you a reference to the element itself, so you can attach any behavior to that element using regular JavaScript.

```html:example.svelte showLineNumbers
<script lang="ts">
	function greet(element: HTMLElement) {
		// logs when element is created
		console.log('hi')

    // do whatever you want
    element.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: 'forwards',
    })

		return {
			destroy() {
				// logs when element is removed
				console.log('bye')
			}
		}
	}

	let show = false
</script>

<input bind:checked={show} type="checkbox" />

{#if show}
	<div use:greet>
		Action
	</div>
{/if}
```

You can optionally return a `destroy` method after the element is removed for cleanup, and an `update` method for updating the parameters.

```html:example.svelte showLineNumbers
<script lang="ts">
	function greet(element: HTMLElement, content: string) {
    // ...
		return {
			update(content: string) {
				// the value of content has changed
				console.log({ content })
			},
		}
	}

	let content = ''
	let show = false
</script>

<!-- bind input value to `content` -->
<input bind:checked={show} type="checkbox" />

<!-- run `update` when `content` updates  -->
<div use:greet={content}>
	Action
</div>
```

You can also dispatch [custom events](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) using Svelte actions.

```html:.example.svelte showLineNumbers
<script lang="ts">
	function greet(element: HTMLElement) {
		const greetEvent = new CustomEvent('greet', { detail: 'hi' })
		element.dispatchEvent(greetEvent)
	}

	function handleGreet(event) {
		console.log(event.detail) // "hi"
	}
</script>

<div
  on:greet={handleGreet}
  use:greet
>
	Action
</div>
```

> 🐿️ The order is important if you want to dispatch the event when the element is created. You have to add the `on:greet` event listener first, and then use the `use:greet` action.

You can use Svelte actions for anything from [using JavaScript libraries in Svelte](https://joyofcode.xyz/using-javascript-libraries-in-svelte) to [Sveltifying existing JavaScript libraries](https://joyofcode.xyz/sveltify-any-javascript-library).

Svelte actions only work with JavaScript enabled, and **don't** run on the server.

Let's go over some examples first, and then I'm also going to show you how to type your actions if you're using TypeScript.

## Tooltip

```html:src/routes/tooltip/+page.svelte showLineNumbers
<script lang="ts">
  import tippy, { type Props } from 'tippy.js'
  import 'tippy.js/dist/tippy.css'

  type Options = Partial<Props>

  let content = 'Tooltip'

  function tooltip(element: HTMLElement, options: Options) {
    const tooltip = tippy(element, options)

    return {
      update(options: Options) {
        tooltip.setProps(options)
      },
      destroy() {
        tooltip.destroy()
      },
    }
  }
</script>

<input bind:value={content} />

<button use:tooltip={{ content }}>Hover</button>
```

## Modal

```html:src/routes/modal/+page.svelte showLineNumbers
<script lang="ts">
  import { scale } from 'svelte/transition'
  import type { Action } from 'svelte/action'

  interface Attributes {
    'on:outside'?: (event: CustomEvent) => void
  }
  type clickOutsideAction = Action<HTMLElement, any, Attributes>

  let open = false

  function openModal() {
    open = true
  }

  function closeModal() {
    open = false
  }

  const clickOutside: clickOutsideAction = (element) => {
    function handleClick(event: MouseEvent) {
      const targetEl = event.target as HTMLElement

      if (element && !element.contains(targetEl)) {
        const clickOutsideEvent = new CustomEvent('outside')
        element.dispatchEvent(clickOutsideEvent)
      }
    }

    document.addEventListener('click', handleClick, true)

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true)
      },
    }
  }
</script>

{#if open}
  <div class="background">
    <div
			class="modal"
			on:outside={closeModal}
			use:clickOutside
			transition:scale
		>
      <h2>Modal</h2>
      <p>What's up?</p>
    </div>
  </div>
{/if}

<button on:click={openModal}>
	Open
</button>

<style>
  .background {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;

    & .modal {
      width: 400px;
      min-height: 300px;
      padding: 2rem;
      background-color: hsl(200 10% 10% / 80%);
      backdrop-filter: blur(20px);
      border: 1px solid hsl(200 10% 12%);
      border-radius: 8px;
      box-shadow: 1px 1px 10px hsl(0 0% 0% / 20%);

      & p {
        margin-top: 1rem;
      }
    }
  }
</style>
```

## Motion

```html:src/routes/motion/+page.svelte showLineNumbers
<script lang="ts">
  import { animate, stagger, type AnimationOptions, type AnimationControls } from 'motion'
  import type { Action } from 'svelte/action'

  type Options = {
    options: AnimationOptions
    action: ({ animation }: { animation: AnimationControls }) => void
  }
  interface Attributes {
    'on:finished'?: (event: CustomEvent) => void
  }
  type TextAction = Action<HTMLElement, Options, Attributes>

  const text: TextAction = (element, { options, action }) => {
    // remove whitespace and split letters
    const letters = element.innerText.trim().split('')

    // remove any text
    element.innerHTML = ''

    // create an element for every letter
    letters.forEach((letter) => {
      element.innerHTML += `
        <span class="letter">
          ${letter}
        </span>
      `
    })

    // animate the letters
    const animation = animate(
      [...element.children],
      {
        color: 'orangered',
        y: [0, 30, -60, 0],
        rotate: 360,
      },
      { duration: 0.3, delay: stagger(0.1), ...options }
    )

    // invoke callback
    action({ animation })

    // dispatch event when animation is finished
    animation.finished.then(() => {
      element.dispatchEvent(new CustomEvent('finished'))
    })
  }

  let controls: AnimationControls
  let time = 0

  $: if (controls) {
    controls.currentTime = time
  }
</script>

<h1
  on:finished={() => console.log('finished')}
  use:text={{
    options: { duration: 2 },
    action({ animation }) {
      animation.stop()
      controls = animation
    },
  }}
>
  Svelte
</h1>

{#if controls}
  <input
    bind:value={time}
    type="range"
    min={0}
    max={controls.duration + 0.6}
    step={0.01}
  />
{/if}
```

## Forms

```html:src/routes/forms/+page.svelte showLineNumbers
<script lang="ts">
  type Submit = (params: SubmitParams) => void
  type SubmitParams = {
    formElement: HTMLFormElement
    formData: FormData
  }

  function enhance(formEl: HTMLFormElement, submit: Submit) {
    async function handleSubmit(e: SubmitEvent) {
      // prevent default form submit
      e.preventDefault()

      // get the submitted form data
      const data = new FormData(formEl)

      // hit the endpoint at forms/+page.server.ts
      const response = await fetch(formEl.action, {
        method: formEl.method,
        body: data,
      })

      // get the response as JSON
      console.log(await response.json())

      // invoke callback
      submit({ formElement: formEl, formData: data })
    }

    // add event listener
    formEl.addEventListener('submit', handleSubmit)

    return {
      destroy() {
        // cleanup
        formEl.removeEventListener('submit', handleSubmit)
      },
    }
  }
</script>

<form
  method="POST"
  use:enhance={({ formElement, formData }) => {
    console.log(formElement, formData)
  }}
>
  <input name="value" type="text" />
  <button>Submit</button>
</form>

<style>
  form {
    display: grid;
    gap: 1rem;
  }
</style>
```

## Examples
