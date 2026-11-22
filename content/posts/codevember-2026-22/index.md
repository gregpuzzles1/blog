---
title: "Codevember-2026/22"
date: 2026-11-22T08:00:00-07:00
author: "Greg Christian"
description: "For Codevember Day 22, I used ChatGPT and Three.js to create Canyon Chimes, an interactive desert canyon inspired by echoes."
summary: "A Codevember Day 22 experiment: exploring a sandstone canyon that answers with musical chimes."
tags: ["Codevember", "Echo", "AI-assisted coding", "Three.js", "Interactive experience"]
featureimage: "canyon-chimes-featured.png"
images: ["canyon-chimes-featured.png"]
showTaxonomies: true
showSummary: true
---

Today is day 22 of the Codevember challenge. Codevember is a coding challenge where people build small projects based on a word or theme for each day in November. I am following [@thespite](https://x.com/thespite) (Jaume Sanchez Elias) on X. He generated an unofficial prompt list for every day. [Jaume’s post](https://x.com/thespite/status/2116974998212772095?a=Ja7aa-sznyd9T6J_JNo&s=46) Today’s day 22 prompt is:

{{< keyword >}}echo{{< /keyword >}}

This is the prompt I started with and gave to ChatGPT on my iPhone:

{{< alert icon="code" >}}

Theme for the day:

{{< keyword >}}echo{{< /keyword >}}

Create a complete, polished interactive 3D web experience for Codevember with the theme “Echo.”

Title: “Canyon Chimes”

Subtitle: “Touch the stone. Hear the canyon answer.”

### CONCEPT

Build a small, explorable desert canyon inspired by Canyonlands National Park in Utah. Visitors touch or click the canyon walls to produce musical chimes that echo through the landscape.

Use Three.js with WebGL, HTML, CSS, and JavaScript. Create actual 3D geometry with depth, perspective, lighting, and spatial interaction.

### LANDSCAPE AND ATMOSPHERE

Surround the visitor with layered sandstone cliffs, weathered rock formations, narrow passages, and a sandy canyon floor. Include recognizable desert details such as scattered stones, sparse shrubs, and distant mesas.

Use warm terracotta, burnt orange, sandstone gold, and muted purple shadows. Set the scene in late-afternoon light, with a clear sky, soft atmospheric haze, and convincing shadows.

Make the canyon feel intimate enough to explore while preserving a sense of height and distance. Use procedural geometry and materials where practical. Avoid requiring paid assets or external API keys.

### INTERACTION AND SOUND

Allow visitors to click, tap, or touch canyon walls to play soft, resonant musical chimes.

Use raycasting to identify the exact point touched on the 3D surface. Briefly illuminate that location with a subtle ripple that follows or sits against the rock surface. Animate smaller, fading ripples at nearby locations to suggest the echo traveling through the canyon.

Generate sound using the Web Audio API. Unlock audio after the visitor’s first deliberate interaction and handle browser audio restrictions gracefully.

Make different wall locations produce different notes from a harmonious pentatonic scale, so casual exploration sounds musical. Let height influence pitch, and let different rock areas have subtly different timbres.

Each chime should have:

- A gentle attack and a clear, bell-like tone.
- Several progressively quieter echoes.
- Reverb that suggests an open stone canyon.
- Stereo positioning based on the struck location relative to the camera.
- Smooth volume envelopes without clicks or harsh peaks.

Let the surrounding canyon geometry influence echo timing or character where practical. An artistic approximation is sufficient; full acoustic simulation is unnecessary.

Allow overlapping chimes, with sensible limits on simultaneous voices, feedback, and output volume.

### CAMERA AND EXPLORATION

Provide full 360-degree horizontal camera rotation, plus looking up and down.

Also allow the camera to move forward, backward, left, right, up, and down. Clearly distinguish camera movement from camera rotation.

Support:

- Desktop: drag to look around; WASD or arrow keys to move; Q/E to move down/up.
- Touch devices: drag to look around and use compact, accessible movement controls.
- Keyboard: a way to rotate the view and trigger chimes without a mouse.

Distinguish a tap or click from a drag so rotating the camera does not accidentally play notes. Support normal touchscreen use without requiring hover.

Keep movement smooth and comfortable. Prevent the camera from passing through canyon walls or beneath the ground. Include a reset-view button.

### MINIMAL UI

Let the canyon fill the screen.

Show the title and a brief instruction initially:

“Touch the canyon walls to make them sing.”

Keep persistent controls small and unobtrusive:

- Sound on/off.
- Volume.
- Reset view.
- A collapsible help panel containing controls and accessibility options.

Make any touch movement controls visually restrained but large enough to use comfortably. Keep all controls usable on small screens and around mobile safe areas.

### ACCESSIBILITY

Use semantic HTML for the interface, visible keyboard focus, descriptive accessible names, and sufficient contrast.

Make every interface control keyboard accessible. Provide a keyboard interaction mode that lets visitors aim at a wall with a subtle center reticle and press Enter or Space to play a chime.

Provide an accessible alternative outside the 3D canvas: a small set of labeled buttons that play representative canyon chimes.

Show a subtle visual response whenever a sound plays so the interaction remains meaningful with audio muted.

Respect prefers-reduced-motion by reducing decorative animation and disabling automatic camera movement. Avoid flashing effects, camera shake, and unexpected sound.

Include concise instructions for keyboard and touch controls. Do not claim that the visual 3D environment is fully accessible to screen readers; make the interface and alternative sound interaction accessible.

### RESPONSIVENESS AND PERFORMANCE

Adapt to desktop, tablet, and phone screens, including orientation changes.

Use efficient geometry, shared materials, limited draw calls, and a capped device pixel ratio. Scale visual quality appropriately for mobile devices.

Handle window resizing correctly. Clean up unused audio nodes and resources.

Provide a clear, helpful fallback if WebGL is unavailable and handle audio initialization failures gracefully.

### IMPLEMENTATION AND DELIVERABLES

Deliver a complete working project, including all source files and a brief README with setup instructions and controls.

Use a straightforward project structure and a consistent Three.js version. If dependencies or a build step are needed, include the package configuration and exact commands.

Organize the code clearly around canyon generation, camera controls, interaction, audio, and interface behavior.

Implement all core features rather than leaving placeholders or TODOs. Verify desktop and touch interactions, keyboard controls, audio activation, resizing, and camera boundaries.

Prioritize these three qualities:

1. A convincing, fully 3D sandstone canyon.
2. Beautiful chimes with clearly audible, fading echoes.
3. Comfortable exploration with a minimal, accessible interface.

Make reasonable implementation decisions and finish the project without asking for routine clarification.

{{< /alert >}}

I used GPT Sol 6.2 - High again. Three.js was used. The page is interactive and responsive. I gave it the prompt in ChatGPT (work mode ~ no CODEX or anything), and it churned for about 20 minutes.

Inspiration for today’s theme:

Dick Wilson and my Dad, Jerry Christian used to explore the Canyonlands in Utah on their motorcycles. They have many great stories they have shared. One of them is a place on the Slickrock Bike Trail called Echo Point. My Dad took me there one time. It’s pretty cool, you stand above a small canyon and shout down into it and get quite an echo back. It was a really neat experience.

Here’s more about Dick Wilson and the Slickrock Bike Trail:

{{< youtubeLite id="W-y7hPNWU94" params="start=23" >}}

I want a more minimal UI experience. Anyway, I had fun with this Day. Keep exploring!

Check out the build here: [Codevember Day 22 ~ echo](https://gregpuzzles1.github.io/codevember-2026/22/)
