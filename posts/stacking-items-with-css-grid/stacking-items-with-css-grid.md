---
title: Stacking Items With CSS Grid
description: Use CSS Grid instead of position absolute to stack items on top of each other.
slug: stacking-items-with-css-grid
published: '2024-03-03'
category: css
---

Use CSS Grid instead of position absolute to stack items on top of each other.

```html:html showLineNumbers
<div class="stack">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

```css:css showLineNumbers
.stack {
  display: grid;
  place-content: center;

  > * {
    grid-area: 1 / 1;
  }
}
```

Using the `grid-area` CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) the grid item starts at the first grid line of the grid row (`grid-row-start: 1`) and the first grid line of the grid column (`grid-column-start: 1`).

Since the end lines for both rows and columns are not specified, they default to `auto`, which means the item will span one row, and one column from its starting position.
