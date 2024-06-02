---
title: test
description: test
slug: test
published: '2024-04-28'
category: svelte
draft: true
---

<script>
  import Counter from './counter.svelte'
</script>

## Table of Contents

## Components

You can use components inside Markdown.

<Counter />

## Code

```html:example showLineNumbers
<script>
  let count = $state(0)
</script>

<button onclick={() => count++}>
  {count}
</button>
```
