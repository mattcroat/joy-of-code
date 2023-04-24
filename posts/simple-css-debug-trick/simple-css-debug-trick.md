---
title: Simple Trick to Debug Your CSS
description: Learn how to debug CSS using this simple trick.
slug: simple-css-debug-trick
published: '2021-10-2'
category: css
---

{% youtube id="5nrMpCWkncc" title="Debug Your CSS" %}

## Table of Contents

## Inspection Fatigue

Despite sophisticated developer tools debugging CSS feels painful and taxing on your mental health.

The **inspect tool** is great but sometimes it's even hard finding the element causing the problem.

You get into this infinite "hovering" state looking for the troublemaker and losing focus of what you were even looking for.

## Using Outline

It would be helpful if you could look at the layout of the page to understand what's going on.

{% img src="css-debug.webp" alt="Debugging CSS" %}

```css:styles.css showLineNumbers
* {
  outline: 1px solid tomato;
}
```

You can use `border` if you specify `box-sizing: border-box` but I prefer `outline` because it doesn't shift the elements on the page.

You can also add a `background` property, or use different `outline` **colors** for **nested elements**.

Since the content is always inside the `<body>` tag you can start by selecting `body *` if you want.

```css:example.css showLineNumbers
/* the first element is <html> */
* {
  outline: 1px solid tomato;
}

/* the second nested element is <body> */
* * {
  outline: 1px solid black;
}

/* the third nested element is after <body> */
* * * {
  outline: 1px solid white;
}
```

## Creating a Bookmarklet

You could leave the previous code in your project on accident which isn't a great look (not talking from experience 🤭).

You can create a **bookmarklet** that's just a regular bookmark that runs **JavaScript** on the page.

{% img src="bookmarklet.webp" alt="Bookmarklet" %}

This works by using an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression).

I'm going to create a `<style>` tag and append it to the `<head>` and check if the element exists to remove it.

```js:bookmarklet showLineNumbers
javascript: (function () {
  const headElement = document.head;
  const styleElement = document.createElement('style');
  styleElement.setAttribute('debug-css', '');
  styleElement.innerText = '* { outline: 1px solid tomato; }';

  const debugElement = headElement.querySelector('[debug-css]');
  if (debugElement) return debugElement.remove();

  headElement.append(styleElement);
})();
```

**Semicolons are required** because your code is going to be on the same line.

I hope this was useful and it helps you debug your CSS and find out what's causing the problem.

Thanks for reading! 🏄‍♂️
