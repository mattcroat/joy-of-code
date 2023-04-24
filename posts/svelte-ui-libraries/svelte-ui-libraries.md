---
title: List Of Svelte UI Libraries
description: I tried every Svelte UI library, so you don't have to.
slug: svelte-ui-libraries
published: '2022-12-11'
category: svelte
---

{% youtube id="O0mNU0maItY" title="List Of Svelte UI Libraries" %}

## Table of Contents

## Pico.css

[Pico.css](https://picocss.com/) is a minimal CSS framework with emphasis on semantic HTML and is framework agnostic. It quickly became my favorite UI library for Svelte because it's simple and elegant.

The pros are that it makes your site look gorgeous and it's easy to theme thanks to CSS variables and includes a light and dark mode but the cons include having to implement logic yourself and it doesn't have a lot of components since it's minimal.

Here's an example of a modal.

```html:+page.svelte showLineNumbers
<script lang="ts">
  // ...
</script>

<dialog open>
  <article>
    <h3>Title</h3>
    <p>Are you sure?</p>

    <footer>
      <button>Close</button>
    </footer>
  </article>
</dialog>
```

## Headless UI

[Headless UI](https://svelte-headlessui.goss.io/docs) is probably my favorite way of using UI components because it just gives you unstyled components and complete freedom how to style them and is mostly concerned about the logic and accessibility.

The pros is that you have complete freedom over styling but the cons are that you have to style things yourself which you might not want to do.

Here's an example of a modal.

```html:+page.svelte showLineNumbers
<script lang="ts">
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from '@rgossiaux/svelte-headlessui'

  let isOpen = true
</script>

<Dialog open={isOpen} on:close={() => (isOpen = false)}>
  <DialogOverlay />

  <DialogTitle>Title</DialogTitle>
  <DialogDescription>Description</DialogDescription>

  <p>Are you sure?</p>

  <button on:click={() => (isOpen = false)}>Yes</button>
  <button on:click={() => (isOpen = false)}>Cancel</button>
</Dialog>
```

## Material UI

[SMUI](https://sveltematerialui.com/) is a great Material UI library for Svelte if you're looking for something to get the work done.

The pros is that it has a lot of components but cons might be the use of Material Design that doesn't look great in my opinion and it's weird you have to install each component you want to use.

Here's an example of a modal.

```html:+page.svelte showLineNumbers
<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog'
  import Button, { Label } from '@smui/button'

  let isOpen = false
</script>

<Dialog bind:open>
  <Title>Title</Title>
  <Content>Content</Content>
  <Actions>
    <Button>
      <Label>No</Label>
    </Button>
    <Button>
      <Label>Yes</Label>
    </Button>
  </Actions>
</Dialog>

<Button on:click={() => (isOpen = true)}>
  <Label>Open</Label>
</Button>
```

## Carbon Components Svelte

[Carbon Components Svelte](https://carbon-components-svelte.onrender.com/) is a UI library based on IBM's [Carbon Design System](https://www.carbondesignsystem.com/)

The pros are that it has a lot of components but the cons are is that it's not the best looking and it's not easy to customize.

Here's an example of a modal.

```html:+page.svelte showLineNumbers
<script lang="ts">
  import {
    ComposedModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Checkbox,
  } from 'carbon-components-svelte'

  let checked = false
</script>

<ComposedModal open>
  <ModalHeader label="Label" title="Title" />
  <ModalBody hasForm>
    <Checkbox labelText="Text" bind:checked />
  </ModalBody>
  <ModalFooter primaryButtonText="Yes" primaryButtonDisabled={!checked} />
</ComposedModal>
```

## Svelte UI

[Svelte UI](https://www.svelteui.org/) is based on [Mantine](https://mantine.dev/) and it's a decent UI library.

The pros are that it has a lot of component and looks decent but the cons are that the API is not as nice and screams React having to wrap your app inside a provider.

Here's an example of a modal.

```html:+page.svelte showLineNumbers
<script>
  import { Modal, Group, Button } from '@svelteuidev/core'

  let opened = false
</script>

<Modal {opened} on:close={closeModal} title="Title">
  <!-- ... -->
</Modal>

<Group position="center">
  <Button on:click={() => (opened = true)}>Open</Button>
</Group>
```

## Attractions

[Attractions](https://illright.github.io/attractions/) is a gorgeous UI library for Svelte.

The pros is the gorgeous design and components to pick from but the cons are that it only works with Sass which is a shame.

Here's an example of a modal.

```html:+page.svelte showLineNumbers
<script lang="ts">
  import { Button, Dialog, Modal } from 'attractions'

  let isOpen = false
</script>

<Button on:click={() => isOpen = true}>Open</Button>

<Modal bind:open={isOpen} let:closeCallback>
  <Dialog
    title="Title"
    danger
  >
    <div slot="title-icon">
    <AlertTriangleIcon size="25" />
    </div>
    <p>Are you sure you want to exit?</p>
    <Button>Yes</Button>
  </Dialog>
</Modal>
```

## daisyUI

[daisyUI](https://daisyui.com/) is a framework agnostic UI library based on Tailwind CSS.

The pros is that it's popular and has a lot of components but the cons is having to implement the component logic yourself.

Here's an example of a modal.

```html:+page.svelte showLineNumbers
<script lang="ts">
  // ...
</script>

<label for="my-modal" class="btn">Open</label>
<input type="checkbox" id="my-modal" class="modal-toggle" />

<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Title</h3>
    <p class="py-4">Are you sure?</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yes</label>
    </div>
  </div>
</div>
```

## Flowbite-Svelte

[Flowbite-Svelte](https://flowbite-svelte.com/) is another UI component library based on Tailwind CSS but made for Svelte.

The pros is that it looks great and has a lot of components but the con is that it the Svelte integrations seems like an afterthought.

```html:+page.svelte showLineNumbers
<script>
  import { Button, Modal } from 'flowbite-svelte'

  let isOpen = false
</script>

<Button on:click={() => isOpen = true}>Open</Button>

<Modal bind:open={isOpen} size="xs" autoclose>
  <div class="text-center">
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure?</h3>
      <Button color="red" class="mr-2">Yes</Button>
      <Button color='alternative'>Cancel</Button>
  </div>
</Modal>
```

## Skeleton

[Skeleton](https://www.skeleton.dev/) is another UI library for Svelte based on Tailwind CSS and one that's most promising and under active development.

The pros is that it has great docs and components but cons are that some of the themes have contrast issues but it's a work in progress.

Here's an example of a modal.

```html:+page.svelte showLineNumbers
// +layout.svelte
<script lang="ts">
  import { Modal } from '@skeletonlabs/skeleton'
</script>

<Modal />

// +page.svelte
<script lang="ts">
  import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton'

  function triggerConfirm(): void {
    const confirm: ModalSettings = {
      type: 'confirm',
      title: 'Title',
      body: 'Are you sure?',
      response: (response: boolean) => console.log('response:', response),
    }

    modalStore.trigger(confirm)
  }
</script>

<button on:click={triggerConfirm}>Open</button>
```

## Honorable Mentions

Here are some framework agnostic UI libraries that deserve a honorable mention:

- [AgnosticUI](https://www.agnosticui.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Bulma](https://bulma.io/)
- [BeerCSS](https://www.beercss.com/)
