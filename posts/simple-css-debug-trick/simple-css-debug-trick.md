---
title: Simple Trick to Debug Your CSS
description: Learn how to debug your CSS using this simple trick.
slug: simple-css-debug-trick
published: 2021-10-2
category: css
---

# Simple Trick to Debug Your CSS

## Table of Contents

## Inspection Fatigue

Modern browser developer tools are extremely sophisticated and something we can't do without when working on a website from being able to check for **accessibility**, inspecting **CSS Flexbox** and **CSS Grid**, or doing **real-time changes** inside the browser.

When you're inspecting a problem, or element you're having trouble with the first thing you do is use the **inspect tool** but you can't figure out what are the styles causing it.

The cause of the problem might not be obvious, so you get into this infinite hovering over elements and losing context of where you are creating more frustration because you're not even sure where to look.

## Bird's-Eye View

It's incredibly helpful to be able to analyze the state and layout of the page when you're looking at it and requires a line of **CSS**.

{% img src="css-debug.webp" alt="Debugging CSS" %}

```css:styles.css showLineNumbers
* {
  outline: 1px solid tomato;
}
```

You can use `border` if you specify `box-sizing: border-box` but I prefer `outline` because it doesn't shift the elements on the page.

You can also add a `background` property, or use different `outline` **colors** for **nested elements**. Since the content is always inside the `<body>` tag you can start by selecting `body *` if you want.

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

Maybe you want to inspect the layout of other sites, or don't want to add this code to your project and forget to remove it (obviously not talking from experience 🤭).

You can create a **bookmarklet** that's just a regular bookmark but has **JavaScript** code you can execute on a page.

{% img src="bookmarklet.webp" alt="Bookmarklet" %}

To do so we need to wrap our code inside an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression), create the `<style>` tag and append it to the `<head>` and we also check if the element exists, so we can use the bookmark as a toggle.

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

Semicolons are required because when we add the bookmark everything is going to be on the same line.

## Conclusion

Hope you find this technique useful and can identify with more confidence what's causing the problem in your **CSS**.

Thanks for reading! 🏄‍♂️
