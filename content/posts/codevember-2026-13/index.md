---
title: "Codevember-2026/13"
date: 2026-11-13T08:00:00-07:00
author: "Greg Christian"
description: "A Codevember Day 13 experiment: using Three.js to create an interactive garden labyrinth with a winding stone path, a bench, and a walking visitor."
summary: "For Codevember Day 13, I used Three.js to create a circular garden labyrinth with a visitor who walks to the center and back."
tags: ["Codevember", "Labyrinth", "AI-assisted coding", "Three.js"]
featureimage: "feature-labyrinth.png"
showTaxonomies: true
showSummary: true
---

I decided to take part in the Codevember challenge. Codevember is a coding challenge where people build small projects based on a word or theme for each day in November. I am following [@thespite](https://x.com/thespite) (Jaume Sanchez Elias) on X. He generated an unofficial prompt list for every day. [Jaume’s post](https://x.com/thespite/status/2116974998212772095?a=Ja7aa-sznyd9T6J_JNo&s=46) Today’s day 13 prompt is:

{{< keyword >}}labyrinth{{< /keyword >}}

This is the prompt I started with and gave to Copilot in VS Code:

{{< alert icon="code" >}}
Theme for the day: labyrinth

Use three.js to represent plants, trees, grass, and the bench in the garden. Also, use three.js to create a human being that is walking along the labyrinth. Imagine a garden with a winding stone path. You enter at the edge, and the path loops around the center several times before bringing you to a bench in the middle. When you’re ready to leave, you turn around and follow the same path back. Make this interactive and responsive in the browser. That’s a labyrinth.
{{< /alert >}}

I was able to create a simple one-page website with a circular labyrinth using Three.js. The page is interactive and responsive. There is a little man who walks into the center of the labyrinth and sits down on a bench. He then walks back out to the edge of the labyrinth.

Check out the build here: [Codevember Day 13 - labyrinth](https://gregpuzzles1.github.io/codevember-2026/13/)
