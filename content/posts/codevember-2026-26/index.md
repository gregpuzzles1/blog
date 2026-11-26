---
title: "Codevember-2026/26"
date: 2026-11-26T08:00:00-07:00
author: "Greg Christian"
description: "For Codevember Day 26, I used ChatGPT and Three.js to create Spore Alignment, an interactive anamorphic experience."
summary: "A Codevember Day 26 experiment: finding a hidden word in a cloud of fungal filaments and spores."
tags: ["Codevember", "Anamorph", "AI-assisted coding", "Three.js", "Interactive experience"]
featureimage: "spore-alignment-featured.png"
images: ["spore-alignment-featured.png"]
showTaxonomies: true
showSummary: true
---

Today is day 26 of the Codevember challenge. Codevember is a coding challenge where people build small projects based on a word or theme for each day in November. I am following [@thespite](https://x.com/thespite) (Jaume Sanchez Elias) on X. He generated an unofficial prompt list for every day. [Jaume’s post](https://x.com/thespite/status/2116974998212772095?a=Ja7aa-sznyd9T6J_JNo&s=46) Today’s day 26 prompt is:

{{< keyword >}}anamorph{{< /keyword >}}

I had ChatGPT help me write this prompt after discussing my ideas:

{{< alert icon="code" >}}

Theme for the day:

{{< keyword >}}anamorph{{< /keyword >}}

Build a complete interactive 3D web experience for Codevember 2026, Day 26.

Keyword — anamorph

Title — Spore Alignment

Opening instruction — “Drag to find the word.”

### CONCEPT

Create a browser-based optical toy using Three.js and WebGL. Open on a loose, floating tangle of pale fungal filaments and tiny blue spores against a deep blue-black background. As visitors orbit the cloud, nearby fragments drift across their view faster than distant ones. From one precise viewpoint, the same fragments line up to spell ANAMORPH. Keep orbiting and the word breaks apart again.

### THE ANAMORPHIC EFFECT

Start with ANAMORPH laid out in bold, readable type on a virtual plane. Divide each letter’s strokes into smaller pieces. Give the pieces tapered edges and branch-like details so they resemble fungal hyphae when scattered. Vary the depth within each letter so entire letters rarely remain recognizable from the opening view.

Choose a reveal position for a perspective camera. For each piece, project a ray from that camera through the piece’s intended position in the word. Move the piece forward or backward along that ray and scale it in proportion to its distance from the camera. From the reveal position, the pieces should reassemble into a continuous, legible word. Elsewhere, parallax should pull the letterforms apart.

Keep the letter fragments fixed in 3D space throughout the experience. The camera’s movement creates the reveal. Let a few surrounding spores drift gently and use an optional lightweight shader for soft blue highlights. Keep the area around the word clear enough for the reveal to read at a glance.

### INTERACTION

- Start about 35 degrees off the reveal angle, with the cloud centered in the frame.
- Support mouse drag, one-finger touch drag, and arrow-key orbiting when the exhibit has focus.
- Add a small alignment indicator that brightens as the visitor approaches the reveal viewpoint.
- Include a Reveal button that moves the camera directly to the intended viewpoint.
- Include a Play/Pause button for an optional guided orbit. Let it linger at the readable angle before continuing, and pause it as soon as the visitor takes control. Start in manual mode.

### DESIGN AND ACCESSIBILITY

Keep the interface minimal. Show the title, the opening instruction, the alignment indicator, and the two buttons. Give the artwork most of the screen.

Make the experience responsive on phones, tablets, and desktops. Test both portrait and landscape layouts, and make sure the full word fits comfortably on a narrow screen.

Use labeled buttons, generous touch targets, visible keyboard focus, and high-contrast interface text. Respect prefers-reduced-motion by disabling decorative spore movement and making Reveal jump directly to the target view. Provide a text description of the illusion and a way to read the hidden word if WebGL is unavailable or the visitor uses a screen reader.

The finished experience should feel like a small discovery. On opening, the scene reads as a fungal cloud. At the reveal angle, ANAMORPH is clear enough to read immediately. A small move away brings the cloud back into view.

{{< /alert >}}

After Googling anamorph, I discovered that the word means the asexual reproduction of a fungus. It can also mean amorphic image or optical effects involving intentional perspective or axis distortion. I tried a couple of things with GPT Sol 6.2 - High, and came up with this page (see link below) - the Anamorph discovery. The page is interactive and responsive. I gave it the prompt in ChatGPT Work mode on my iPhone. I had fun with this on Thanksgiving Day. Keep exploring!

<br><br>Check out the build here: [Codevember Day 26 ~ anamorph](https://gregpuzzles1.github.io/codevember-2026/26/)
