---
title: Design For Developers
description: Learn enough visual design to be dangerous with actual tips instead of theory.
slug: design-for-developers
published: '2021-11-5'
category: design
---

## Table of Contents

## Misconception About Design

The greatest misconception about design is that you have to be **artistic** because the purpose of design is to solve problems meaning it's [utilitarian](https://en.wikipedia.org/wiki/Utilitarianism). This is why design and development have more in common than you think.

You already know what great design is when you look at it — you just don't know how to reason about it because you lack the required vocabulary.

I'm not going to bore you with theory but give you actual tips you can use and see a drastic improvement. I'm not a professional designer but this is what I learned through experience and learning from others.

## The Four Principles of Design

The goal of design is to make things **easy to understand** in a **aesthetically pleasing** way.

**Design is C.R.A.P.** which stands for **contrast**, **repetition**, **alignment** and **proximity**. Remember this [mnemonic](https://en.wikipedia.org/wiki/Mnemonic) and always ask yourself if your design meets **C.R.A.P.** standards. A lot of design principles are based from psychology such as the [gestalt principles](https://en.wikipedia.org/wiki/Principles_of_grouping) that describe how humans group similar elements and recognize patterns. These are the four principles behind great design.

## Contrast

Contrast draws **attention**.

We can achieve **contrast** through **color** and **size** of text and shapes to make elements look different. **Contrast** creates **visual hierarchy** meaning you know what is important on the page and in what order to read information.

{% img src="text-contrast.webp" alt="Text contrast" %}

Another example of **contrast** are geometric shapes in design that might seem random but aren't because everything in design has a purpose. Their main purpose is to **draw your eyes** to something while adding **visual interest** or **balance** to an area that might otherwise feel empty.

You can use **color** to increase or reduce contrast for text that isn't important or reduce **eyestrain**. You can use a shade of gray on a white background but don't do the same on a **colored** background when you're trying to **de-emphasize** text. In that case you should pick the same background color and adjust the **contrast**.

{% img src="color-contrast-bad.webp" alt="Bad text contrast" %}

Your contrast has to pass [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) (Web Content Accessibility Guidelines). There are three levels of conformance from **A**, **AA** to **AAA**.

{% img src="color-contrast-good.webp" alt="Good text contrast" %}

You can check the contrast ratio from your developer tools.

{% img src="contrast-checker.webp" alt="Contrast checker in developer tools" %}

## Repetition

Repetition creates **consistency** in your design.

Using a **consistent** style for your elements creates **rhythm** by repeating the same **font**, **size** and **color** and makes your content more readable.

{% img src="repetition.webp" alt="Repetition" %}

Maybe you've seen one of these landing pages that lets you know there's more content on the page.

{% img src="scroll-more-idiot.webp" alt="Mouse indicating scrolling" %}

A more clever use of design instead would be maybe using the line from the logo to establish **repetition**. If you look closely none of the elements are placed randomly but with purpose. We're going to talk more about this in **alignment**.

{% img src="repetition-scrolling-heading.webp" alt="Using a design element to indicate scrolling" %}

If we extend the line to the second page it would indicate to our reader there's more and make your reader curious. The number is mostly a design element and doesn't have to have meaning.

{% img src="repetition-scrolling-area.webp" alt="Using a design element to indicate scrolling" %}

The more you look at design the more you're going to pick up on these details.

## Alignment

Alignment is used to **organize information** creating order.

Design decisions should be **intentional** and not arbitrary. When elements are aligned they visually connect to each other and serve as an **anchor** for your eyes through an **invisible line** created from **alignment**.

It's never one thing that makes or breaks a design but a lot of other smaller details.

A often **mistake** you can make is to **center** everything and not have a constraint for the width of your text making it hard to read.

{% img src="alignment-bad.webp" alt="Bad alignment" %}

Look at the difference using only left align.

{% img src="alignment-good.webp" alt="Good alignment" %}

If you're using a design tool like [Figma](https://www.figma.com/) you can enable the grid. I'm using a **twelve column grid** since that's the most frequently used one. You can create the same grid using [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for your site making translating your design easy.

Let me show you the **invisible line** I mentioned earlier.

{% img src="alignment-grid.webp" alt="Alignment grid overlay" %}

You should always have a strong **horizontal** or **vertical** line because it anchors your eye. The **alignment** for the logo and navigation is also **intentional** being on the **baseline**.

This **isn't** to say that centering is bad. You can center short text but when it gets long it becomes hard to read. We're going to cover more on **typography** later.

Once you learn design fundamentals you understand how to break rules to create more interesting design. For example having everything on a grid feels rigid and boring, so a popular trend over the years is having images go outside the grid. You barely notice this but it feels more interesting and looks great because it's **intentional** and that's why design we perceive as **bad** often looks **unintentional**.

Lets look at the design of [Apple.com](https://www.apple.com/) to see how they "break the rules" of the grid in an interesting way to show more products. Because the rest of the design is on a grid and aligned perfectly it looks **intentional** and not like a mistake.

{% img src="apple-grid.webp" alt="Apple.com grid overlay" %}

## Proximity

Proximity is **grouping related things together**.

Take an example of items that are spaced **evenly** and when it's done using **proximity**.

{% img src="proximity.webp" alt="Proximity" %}

Proximity lets you brain group related information together, so it appears as **one visual unit** instead of feeling **unrelated**.

{% img src="proximity-outline.webp" alt="Outline around elements showing proximity" %}

## Layout

Before you do typography or colors use **a piece of paper** or your design tool to draw **wireframes** that are just simple boxes that represent your layout. You're going to avoid a lot of problems before you even get started.

{% img src="wireframe.webp" alt="Wireframe" %}

Another mistake is having your site look like it's made out of boxes by using a different background color for every section, so use a more subtle shade instead for separation and avoid borders.

Layout is not easily taught because it has to be practiced. If you want to create unique designs you have to look at inspiration on sites such as [Awwwards](https://www.awwwards.com/), [Behance](https://www.behance.net/) , [Dribbble](https://dribbble.com/) or [Lapa](https://www.lapa.ninja/) and learn from recreating designs. Expose yourself to great design by using a new tab extension for your browser like [Panda](https://chrome.google.com/webstore/detail/panda-5-your-favorite-web/haafibkemckmbknhfkiiniobjpgkebko).

Using a grid is going to make you realize how everything in design is **intentional**. This isn't always the case because a lot of great looking design isn't always professional design, so you're going to notice a difference between amateur and professional design.

Here is how you could be more creative with your designs. Pretend this is a landing page with a form. It's boring but then you can play with the design by adding **visual interest** and do as many layout ideas as you want.

{% img src="wireframe-landing-page.webp" alt="Landing page wireframe" %}

Don't try to make it look good but just try out random ideas. This takes less than a minute and doesn't have you commit to anything. Figure out the content first before you start designing.

## Spacing

Use the four principles of design together to create a cohesive looking design. We're going to cover more on the scale in **typography**.

{% img src="alignment-spacing.webp" alt="Alignment spacing" %}

## Typography

{% img src="typefaces.webp" alt="Typefaces" %}

Typography is important because it envokes emotion. **Serif** fonts looks elegant and associate wealth and luxury in a brand or remind you of the newspapers and books while **sans-serif** fonts look more modern and legible for large text and screens, so they're used everywhere.

Having great looking typography isn't hard with a couple of rules:

- Use a single **sans-serif** font and **weights** for contrast
- Anything below **16 pixels** and **400** for the font weight is not readable
- Skip a font weight for more **contrast** (**400, 600, 700, 900**)
- Use a **line height** between **150-180%** for text
- Don't forget to adjust the **line height** for titles
- Avoid using **absolute** color values like pure black and white as it's harsh on the eyes, so use a **shade** instead
- Add a subtle color to text to make it feel **cooler** or **warmer**
- Use one of these [Google Fonts](https://fonts.google.com/): **Inter**, **Lato**, **Montserrat**, **Open Sans**, **Poppins**, **Raleway**, **Roboto**

If the list is long go for **Inter** for a more professional font and **Montserrat** or **Poppins** for something more playful.

For the typography scale you don't need to use a [Fibonnaci number](https://en.wikipedia.org/wiki/Fibonacci_number) generator to get some divine ratio for a **cohesive** looking design. I prefer to use **multiples of eight** meaning **8px**, **16px**, **24px**, **32px**, **64px** and so on because it works so great as a base unit for typography and spacing inside a **8 point grid** system. If you're using a design tool such as **Figma** set your nudge value to **8px** to use a **8 point grid**.

You can take those same values and create [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) for your typography and spacing.

Even if I say "rules" don't take any of it as **gospel** but just constraints to help you create a **consistent** design and avoid mindless **pixel pushing**. The optimal reading length for text is around **60 characters** but I prefer to go up to **80 characters**. You can set the `max-width` of your content to `60ch` in your **CSS**. One of the most important things for legible text is **line height**. I find a great **line height** to be from **150%** to **180%** or **1.5** to **1.8** in **CSS**.

You should always test how your typography looks on real text and don't forget to adjust your title's **line height** to compensate.

{% img src="typography.webp" alt="Typography" %}

## Color

{% img src="color-wheel.webp" alt="Color wheel" %}

Most color picking sites aren't helpful because they give you five random colors you have no idea what to do with. You only need to find a **primary** color you like and from there you can find **complementary** colors that work together. If you're using **black** and **white** you're already using two colors.

You can use **shades** of one color for a **monochromatic** color scheme, so you don't even need more colors.

To find a **complementary** color is simple — just pick the color opposite the **primary** color you picked on the **color wheel**.

{% img src="color-picker.webp" alt="Color picker" %}

I like the [color picker from Canva](https://www.canva.com/colors/color-wheel/) because it's simple and you can learn more about color.

You can use the **60-30-10** color rule from interior design where **60%** is the **main** color, **30%** is the **secondary** color and **10%** is your **accent** color. Your **primary** color doesn't always have to be **60%** because you can flip the values for different sections of your site.

{% img src="color-palette.webp" alt="Color palette" %}

Because the green color has such **high contrast** it wouldn't work for the text, so we're using the green as the **accent** color.

{% img src="color-rule.webp" alt="Color rule" %}

The purple is taking around **60%** and the white is taking up **30%** while the accent color is taking up **10%** of the space.

## Conclusion

You learned enough visual design to be dangerous as a developer. If you stick to a couple of simple rules you can be confident your design is going to look great. You have the vocabulary to critique and talk about design in a more intelligent way.

If this ignited your passion for design I highly recommend reading [Refactoring UI](https://www.refactoringui.com/book) and [Design for Hackers: Reverse Engineering Beauty](https://www.amazon.com/Design-Hackers-Reverse-Engineering-Beauty/dp/1119998956).

Thanks for reading! 🏄
