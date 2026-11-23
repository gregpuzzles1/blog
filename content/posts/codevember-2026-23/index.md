---
title: "Codevember-2026/23"
date: 2026-11-23T08:00:00-07:00
author: "Greg Christian"
description: "For Codevember Day 23, I used ChatGPT and Three.js to create Magma Pulse, an interactive 3D mountain experience."
summary: "A Codevember Day 23 experiment: waking a mountain's underground magma chambers."
tags: ["Codevember", "Magma", "AI-assisted coding", "Three.js", "Interactive experience"]
featureimage: "magma-pulse-featured.png"
images: ["magma-pulse-featured.png"]
showTaxonomies: true
showSummary: true
---

Today is day 23 of the Codevember challenge. Codevember is a coding challenge where people build small projects based on a word or theme for each day in November. I am following [@thespite](https://x.com/thespite) (Jaume Sanchez Elias) on X. He generated an unofficial prompt list for every day. [Jaume’s post](https://x.com/thespite/status/2116974998212772095?a=Ja7aa-sznyd9T6J_JNo&s=46) Today’s day 23 prompt is:

{{< keyword >}}magma{{< /keyword >}}

This is the prompt I started with and gave to ChatGPT Work mode on my iPhone.

{{< alert icon="code" >}}

Theme for the day:

{{< keyword >}}magma{{< /keyword >}}

Create a complete, polished web experience for Day 23 of the Codevember challenge.

Word of the day: magma

Title: Magma Pulse

On-screen instruction: Tap the glow.

Use Three.js, WebGL, HTML, CSS, and JavaScript. Build a fully 3D, interactive, responsive, and accessible experience with a minimal UI. Players should be able to jump in immediately.

### SCENE

Build a miniature mountain as a 3D cutaway. Show jagged layers of dark stone, fractures that wind through the rock, and three magma chambers at different depths. Model the mountain, chambers, and fractures as 3D geometry so their depth and shape are visible as the player orbits. Keep all molten rock underground.

Open at an angled view that shows both the cutaway face and the thickness of the mountain. One small chamber is already glowing, casting warm orange light onto nearby stone. Keep the other chambers in shadow until the player reveals them.

### INTERACTION

The objective is to wake the mountain by activating three chambers. Use the same simple action at every step.

1. Tap the first glowing chamber. A bright pulse travels along a jagged fracture, turns a corner, and reveals the second chamber.
2. Tap the second chamber. The pulse splits. One branch lights a broad seam in the rock. The other disappears behind a ridge and emerges deeper inside, revealing the largest chamber, the heart of the mountain.
3. Tap the heart. A final pulse travels back through every path the player uncovered, lighting up the whole underground network. Let the light settle into a soft glow so the player can orbit and see how everything connects.

Keep activated chambers softly lit. Give the next chamber a clear outline so it’s easy to spot. Let players pause as long as they like between taps. Make the traveling light the centerpiece by showing it race down narrow cracks and fan out through wide seams.

### ORBITAL CAMERA

Enable 360° horizontal orbit and vertical tilt from the start, including during the three-chamber sequence. Let players drag with one finger or a mouse to orbit and use arrow keys when the scene has keyboard focus. Limit vertical tilt and camera distance to keep the camera clear of the rock.

Distinguish a tap from a drag so starting an orbit on a chamber doesn’t activate it. Keep the camera where the player leaves it. If rock hides the next chamber or it moves offscreen, show a small “Find the glow” button that restores a clear view of it without changing progress.

### UI, ACCESSIBILITY, AND SOUND

- Keep the UI to the title, the one-line instruction, a compact sound toggle, and contextual controls. Show a small Replay button after the finale.
- Make every chamber playable with touch, mouse, and keyboard. Provide a clearly named HTML control for the active chamber, with a generous target, visible keyboard focus, and Enter or Space activation.
- Use shape or outline as well as color to identify the next chamber. Announce newly revealed chambers and the finale through a polite screen-reader status message.
- Respect prefers-reduced-motion. Replace fast pulses with gentle fades, remove camera inertia, and make “Find the glow” reposition the view immediately.
- Start muted. With sound enabled, give each chamber a soft, low thump and the heart a deeper tone. Make the experience fully understandable with sound off.
- Keep the starting chamber and essential controls easy to reach on narrow phones in portrait orientation as well as on desktop.

### DELIVERY

Deliver the complete runnable project and a short README with local setup and deployment instructions for a GitHub Pages /23/ subfolder. Verify the full sequence, orbit controls, “Find the glow,” and replay using touch, mouse, and keyboard. Check the portrait layout and reduced-motion mode.

{{< /alert >}}

I used GPT Sol 6.2 - High again. Three.js was used. The page is interactive, responsive and accessible. I gave the prompt to ChatGPT and it churned for about 15 to 20 minutes. I did about four iterations. Visually it looks great. Realistically you can get the picture of magma. I like having ChatGPT help me with my prompts. I want a more minimal UI experience. Anyway, I had fun with this Day. Keep exploring!

Check out the build here: [Codevember Day 23 ~ magma](https://gregpuzzles1.github.io/codevember-2026/23/)
