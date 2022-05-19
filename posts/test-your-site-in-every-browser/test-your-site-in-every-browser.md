---
title: Testing Your Site In Every Browser
description: Learn how to test your site in every browser including Safari on Linux, macOS, Windows.
slug: test-your-site-in-every-browser
published: 2022-5-20
category: category
series: false
draft: true
---

# Make Your Site Look Great In Every Browser

## Table of Contents

## The Browser Engine

In this post you're going to learn how to check your site look great in every major browser including Chrome, Firefox and Safari regardless if you're using Linux, macOS or Windows.

If you look at the [browser market share worldwide](https://gs.statcounter.com/) Chrome is leading at **64%** while Safari has close to **20%** and Firefox **4%** of the market share.

You might ask "But what about the other browsers?" and the reason we only talk about these browsers is because they're the most popular ones with their own [browser engine](https://en.wikipedia.org/wiki/Browser_engine) (the browser engine is responsible for rendering the page on your screen).

Most browsers such as [Brave](https://brave.com/) and [Microsoft Edge](https://www.microsoft.com/en-us/edge) among others are [Chromium](<https://en.wikipedia.org/wiki/Chromium_(web_browser)>)-based — the same browser that [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome) uses meaning they are the same in that regard:

- Chrome uses [Blink](<https://en.wikipedia.org/wiki/Blink_(browser_engine)>) developed as part of the Chromium project as a fork of WebKit
- Firefox uses [Gecko](<https://en.wikipedia.org/wiki/Gecko_(software)>) developed by [Mozilla](https://en.wikipedia.org/wiki/Mozilla)
- Safari uses [WebKit](https://en.wikipedia.org/wiki/WebKit) developed by [Apple](https://en.wikipedia.org/wiki/Apple_Inc.)

This explains why we test for these browsers but the problem is that only Chrome and Firefox are available on all platforms.

Safari is only available for [macOS](https://en.wikipedia.org/wiki/MacOS) which means you're out of luck if you're a Linux or Windows and your client is going to be upset their site doesn't look great on their shiny Mac — so what can you do?

## Cross-Platform Browser Testing

If you're a Linux user you're in luck because you can use a WebKit based browser such as [Epiphany](https://wiki.gnome.org/Apps/Web) and it works great.

Windows on the other hand doesn't have any WebKit based browser you can use as far as I'm aware of, so you would have to use [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/) to use Epiphany — otherwise you would have to run macOS inside a virtual machine which is out of the question for most people.

There's also paid services you can use to test how your site looks in different browsers but there has to be a better way.

## Using Playwright

[Playwright](https://playwright.dev/) is used for testing your frontend but it also has the ability to test every browser — after I realized this a light bulb turned on in my head.

This works because Playwright ships a binary for every browser including Chromium, Firefox and WebKit using the open source builds.

These binaries are located in your operating system cache:

- `%USERPROFILE%\AppData\Local\ms-playwright` on Windows
- `~/Library/Caches/ms-playwright` on macOS
- `~/.cache/ms-playwright` on Linux

Here is how to set up up Playwright.

1\. Initialize a project inside an empty repository.

```shell:terminal
npm init -y
```

> 🐿️ The `-y` flag skips the questions.

2\. Install `@playwright/test` as a development dependency.

```shell:terminal
npm i -D @playwright/test
```

3\. Install the default browsers.

```shell:terminal
npx playwright install
```

4\. The [Playwright CLI](https://playwright.dev/docs/test-cli) has some interesting options we can use like `--headed` and `--browser=webkit` to specify the browser so we can add these as **scripts** to `package.json`.

```json:package.json
{
  "scripts": {
    "test:chrome": "pnpx playwright test --headed --browser=chromium",
    "test:firefox": "pnpx playwright test --headed --browser=firefox",
    "test:safari": "pnpx playwright test --headed --browser=webkit"
  },
  "devDependencies": {
    "@playwright/test": "^1.22.1"
  }
}
```

5\. Add a test to specify what page to visit and pause the browser so we can look and inspect the page.

```ts:tests/browser.test.ts
import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('http://localhost:3000/')

  // pause page
  await page.pause()
})
```

6\. Run the test using one of the scripts.

```shell:terminal
npm run test:webkit
```

That's it! 🎉

You don't have to have those awkward moments anymore hunting someone down with a Mac to test your site and your client is going to be happy.

## Issues With Linux

This method works great if you're using Ubuntu as that's the only supported Linux distribution by Playwright because it uses `sudo apt-get` to install the browser dependencies.

I use an Arch based distribution and even knowing what packages it wants I couldn't find them to make it work for WebKit, so let me know if you figure it out.

```shell:terminal
npm run test:webkit
```

```shell:terminal
  browserType.launch:
  
  Host system is missing dependencies to run browsers.
  Missing libraries:
    libpcre.so.3
    libicui18n.so.66
    libicuuc.so.66
    libwebp.so.6
    libenchant.so.1
    libffi.so.
```

Thanks for reading! 🏄️
