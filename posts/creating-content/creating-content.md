---
title: How I Make Educational Content For YouTube
description: Learn how to make any recorded content from tutorials to presentations look and sound great.
slug: creating-content
published: '2023-07-28'
category: general
---

{% youtube id="ksFhXV3rH3Y" title="Make Your Content Look And Sound Great" %}

## Table of Contents

## Creating Content

From creating educational content to recording a presentation, you probably want it to look and sound great without spending hours becoming a video and audio engineer.

I'm going to show you the simple workflow I use to make videos for YouTube with some tips along the way, like what inexpensive type of microphone to get and how to make your presentation look and sound great.

Everything I use is **free** and **cross-platform** (I use Linux by the way) and you can take what you learned and apply it to your workflow regardless what software you're using.

**This isn't a tutorial** on how to use the software I mention but it should save you hours of research.

## Tools Of The Trade

These are the tools I use:

- [OBS](https://obsproject.com/) (recording)
- [Audacity](https://www.audacityteam.org/) (audio)
- [Kdenlive](https://kdenlive.org/en/) (editing)
- [FFmpeg](https://ffmpeg.org/) (optional)

You can use [DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/) and replace Audacity and Kdenlive — I can't use DaVinci Resolve on Linux because the free version doesn't support the most used video format on the planet. 🤦

I included an **updated section** on using OBS **audio filters** for processing audio which replaced Audacity for me and **improved** the audio since I wrote the post.

## Plan Out Your Content

Before you do anything, **plan out your content**.

A post is great for SEO and accessibility but foremost it's more for you to put your thoughts together and see how things flow instead of finding that out during recording which saves you a lot of time and helps you fact-check yourself.

If you're confident about the concept you're presenting then a script is fine, but I encourage you to write a post and publish it because it's more accessible in general and feeds the AI giving you a better response in the future.

For writing I use a simple Markdown file inside my editor because there isn't a lot to distract you, but I also love Obsidian for writing.

If you don't know how to start, write down the concepts you want to explain — this exposes what topics depend on each other and creates an outline to fill in the blanks later.

I prefer to dump my brain on the page and let the prose flow before I tidy things up.

## You Don't Need A Fancy Microphone

Almost every professional uses the [Shure SM7B](https://www.shure.com/en-US/products/microphones/sm7b?variant=SM7B) microphone which is reflected in the price costing around **$400** dollars, but you don't need an expensive microphone.

{% img src="shure.webp" alt="Shure SM7B" %}

There's also a hidden cost because these professional microphones require phantom power using an XLR connector, meaning you have to also pay for an audio interface.

{% img src="interface.webp" alt="Audio interface" %}

You can't just get an expensive microphone and plug it in, expecting you're going to sound amazing, if you don't know what you're doing.

For this reason I recommend you get an inexpensive USB dynamic microphone in the **$50-$100** range because you have to be close and it won't pick up outside noise. It's the same type of microphone as the Shure SM7B, but keep in mind not every microphone is equal — do your research and listen to how it sounds before you purchase it.

You can get a great deal and pick up a microphone bundle with a microphone arm and a pop filter. **Avoid having the microphone stand on your desk** because it might pick up desk vibrations and using a microphone arm makes it easier to move around.

You can even get away with a decent headset microphone after you clean up the audio in Audacity.

**You want less friction as possible** when it comes to making content because you're not going to feel motivated if you have to always fight your setup.

## Recording Your Screen

You might have heard about OBS when it comes to live streaming but it's also a great screen recording software.

{% img src="obs-1.webp" alt="OBS" %}

OBS has this concept of **scenes** where you can have multiple different layouts you can transition between using a keyboard shortcut — for example I have different scenes with overlays for recording windows side by side, recording a single window, and the third layout that records the entire desktop.

The settings aren't that important to be honest, so don't overthink it but here is what I use.

{% img src="obs-2.webp" alt="OBS" %}

Under the **output** tab I set:

- Audio bitrate to 320 kbps (the highest possible)
- Recording quality set to "High Quality, Medium File Size"
- Recording format is set to "MPEG-4 (.mp4)" because that's what YouTube likes

{% img src="obs-3.webp" alt="OBS" %}

Under the **video** tab I set:

- I use 1920x1080 as the base and output resolution
- 30 FPS because you don't need more for tutorials since there's not a lot of motion and keeps the size down

That's it! I don't care about anything else but you might want to set up some hotkeys if you want and if you have problems with colors you might want to go inside the **advanced** and play with the **color format**.

{% img src="obs-4.webp" alt="OBS" %}

One problem I have when recording video is that the colors look washed out, but that's easily fixed by bumping the saturation in Kdenlive to match what you see.

As for the workflow I prefer to break longer videos into parts and edit it together, because it makes it more manageable and no one is going to notice.

This approach has other benefits like avoiding an hour of recording being ruined because OBS crashed and then complaining on Twitter because you decided to flip a coin.

Even if you use **.mkv** to record your video because OBS can use it to recover from a crash — you have to convert it to another format later and it's not worth it.

Trust me on this one and plan out your content in advance and break it into parts if you have to — even if things go wrong you only have to record the last part.

## Audio Is More Important Than Video

Audio is more important than anything else because you could record at **720p** with **30 fps** and no one would notice, but having bad audio is the worst.

You might think of bad audio as sound caused by a cheap microphone, but it's more subtle like static noise in the background to uneven audio levels, which an expensive microphone isn't going to fix for you.

You can use **OBS audio filters** to apply audio effects which make an inexpensive microphone sound premium and you can use [VSTs](https://www.wikiwand.com/en/Virtual_Studio_Technology) for more effects. You can also separate your audio sources and pipe your audio with the effects to other apps.

{% img src="audio-filters.webp" alt="OBS audio filters" %}

Every microphone and voice is different, but here is an informative YouTube video where you can learn how to apply OBS audio effects and adjust them for your setup.

{% youtube id="G1VzeT9t24Y" title="Make Any Mic Sound Expensive In OBS" %}

You can use Audacity if you're using something else to record, or you already have footage that needs work to be done with this method I used before.

I drag the **mp4** file directly into Audacity to apply some effects after which I export it as an **mp3** file at 320 kbps.

Here are the effects I use in order:

- Noise reduction (for removing noise)
- Filter Curve EQ (change the volume of some frequencies)
- Normalize (makes everything sound the same volume)
- Compressor (makes the volume even)

Note that you have to adjust these effects to your voice but there's a lot of great videos on YouTube on how to do it.

{% youtube id="dQCB72S64L4" title="How To Make Your Voice Sound Better in Audacity" %}

The Audacity user interface is painful because you always have to navigate menus for repeated tasks which is why I set up a recording macro in Audacity to automate it.

{% video src="macro.mp4" %}

You can learn how to set up a macro in Audacity on YouTube.

{% youtube id="BIkEaFFQfEY" title="How To Create Macros In Audacity" %}

**Use headphones** during the editing process unless you have great studio monitors because it might sound fine over your speakers which can hide the problems.

I don't listen to the entire recording in Audacity but only apply the effects and check if things sound okay — most of the time I do another noise reduction pass before I export the audio.

## Editing Your Video

When it comes to basic video editing you mostly do the same couple of actions like cuts and transitions.

Whatever video editor you use **learn the shortcuts** to be more productive.

{% video src="editing.mp4" %}

This is what I do before I start editing:

- Drag the recording and audio into Kdenlive (it's going to recognize the dimensions and framerate)
- Drop the recording into the timeline
- Ungroup the video and audio from the recording
- Replace the audio and align the tracks
- Group everything together

**Skip replacing the audio** if you used OBS to apply audio effects.

This is entering some obsessive-compulsive behavior and you don't have to do it, but I also mute sounds I don't like such as sharp inhales which no one is even going to notice.

You might be tempted to cut out breaths but leave them in because it gives the viewer pause to process the information — if you listen to a song you can hear the singer breathe which is intentional.

{% video src="video.mp4" %}

You can use **guides** in Kdenlive to create timestamps you can later export for YouTube under **Timeline > Guides > Export Guides**.

## Stitching Videos With FFmpeg

You can use a GUI tool like [Avidemux](https://avidemux.sourceforge.net/) to do this, but I use [FFmpeg](https://ffmpeg.org/) to stitch videos together without re-encoding them.

This loops over videos in a directory and outputs a `videos.txt` file used to pass to FFmpeg.

```shell:terminal
# pipe videos into a file
for f in *.mp4; do  echo(1) "file '$f'" >> videos.txt; done
```

Using FFmpeg we can pass it a list of videos to stitch together into one video.

```shell:terminal
# stitch videos without re-encoding
ffmpeg -f concat -safe 0 -i videos.txt -c copy recording.mp4
```

I do this because it's easier to edit one video than multiple ones.

## Don't Overthink It

You're always going to be the harshest critic of your work because you can see the imperfections.

Start creating because it's the only way to learn what works and it's a more rewarding creative process compared to what you might be used to doing.

The worst you can do is nothing.
