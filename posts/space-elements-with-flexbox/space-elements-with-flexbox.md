---
title: Space Elements With Flexbox Instead of Margin
description: Find out how using Flexbox to space elements is easier than using margin.
slug: space-elements-with-flexbox
published: '2021-8-31'
category: css
---

In your **HTML** markup you often have repeating blocks such as **lists**, **cards**, and **posts**.

```html:example.html showLineNumbers
<section>
  <h1>Samurai Movies</h1>
  <ul class="movies">
    <li class="movie">Seven Samurai</li>
    <li class="movie">Hara-Kiri</li>
    <li class="movie">Yojimbo</li>
    <li class="movie">The Sword of Doom</li>
  </ul>
</section>
```

Using `margin` can get tedious and repetitive, and you're probably going to encounter [margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) which you won't even understand is causing the problem if you never heard of it.

That being said we can reduce the amount of markup inside a **templating** system or **framework**, so it's not that big of a deal.

```js:example.js showLineNumbers
const movies = ['Seven Samurai', 'Hara-Kiri', 'Yojimbo', 'The Sword of Doom']

const moviesHtml = `
  <section>
    <h1>Samurai Movies</h1>
    <ul class="movies">
      ${movies.map(movie => `<li class="movie">${movie}</li>`).join('')}
    </ul>
  </section>
`

document.body.innerHTML = moviesHtml
```

We could set the `margin` for each `.movie` class but then it would also affect the top element.

```css:example.css showLineNumbers
.movie {
  margin-top: 1rem;
}
```

To refine the previous example we could specify to only target the **children** after the **first child** of the `.movies` class.

```css:example.css showLineNumbers
.movies > *:not(:first-child) {
  margin-top: 1rem;
}
```

We might like to **reuse** the spacing in our project but it would be tedious and hard to update it's value if we changed the spacing in the future, so we could create a **utiliy** class that can be reused across the project.

I find this to be the most reasonable approach for most people who prefer writing regular **CSS**, but can also take advantage of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and **utility** classes such as provided by [Tailwind CSS](https://tailwindcss.com/).

```css:example.css showLineNumbers
:root {
  --space: 1rem;
}

.space > *:not(:first-child) {
  margin-top: var(--space);
}
```

We can do **better**. Instead of using `margin` we can take advantage of `flexbox` and it's `gap` property that's been previously reserved for [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

At the time of writing the `gap` property is [supported across 86% of browsers](https://caniuse.com/flexbox-gap), so it works for every modern browser.

```css:example.css showLineNumbers
.movies {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

It's easier to create **utility** classes that we can reuse on every project. You can set different spacing sizes if you want.

```html:example.html showLineNumbers
<section>
  <h1>Samurai Movies</h1>
  <ul class="flex flex-col space">
    <li>Seven Samurai</li>
    <li>Hara-Kiri</li>
    <li>Yojimbo</li>
    <li>The Sword of Doom</li>
  </ul>
</section>
```

```css:example.css showLineNumbers
:root {
  --space: 1rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.space {
  gap: var(--space);
}
```

## Conclusion

Having the ability to write regular **CSS** but have a **set of constraints** from **utility** classes is a great way to achieve a consistent looking design.

By using `gap` instead of `margin` we can avoid problems such as **margin collapsing**, and make our markup less verbose.

Thanks for reading! 🏄‍♀️
