---
title: "Codevember-2026/27"
date: 2026-11-27T08:00:00-07:00
author: "Greg Christian"
description: "For Codevember Day 27, I used ChatGPT and Three.js to create Beneath the Prairie, an interactive tour through a colorful underground burrow."
summary: "A Codevember Day 27 experiment: exploring a prairie dog colony beneath the prairie."
tags: ["Codevember", "Burrow", "AI-assisted coding", "Three.js", "Interactive experience"]
featureimage: "beneath-the-prairie-featured.png"
images: ["beneath-the-prairie-featured.png"]
showTaxonomies: true
showSummary: true
---

Today is day 27 of the Codevember challenge. Codevember is a coding challenge where people build small projects based on a word or theme for each day in November. I am following [@thespite](https://x.com/thespite) (Jaume Sanchez Elias) on X. He generated an unofficial prompt list for every day. [Jaume’s post](https://x.com/thespite/status/2116974998212772095?a=Ja7aa-sznyd9T6J_JNo&s=46) Today’s day 27 prompt is:

{{< keyword >}}burrow{{< /keyword >}}

After discussing what I had in mind with ChatGPT, this is the prompt we came up with and gave right back to ChatGPT on my iPhone:

{{< alert icon="code" >}}

Theme for the day: burrow

Build a complete, interactive 3D web experience for Codevember 2026, Day 27.

Word of the day — burrow

Title — Beneath the Prairie

Project folder — /27/

Opening button — Enter the burrow

## THE EXPERIENCE

Create a first-person camera tour through an imaginary underground world shaped like a prairie dog colony. The tour begins above ground on a realistic stretch of shortgrass prairie, descends through one burrow entrance, follows a connected network of colorful tunnels and chambers, and emerges through a different opening in the same colony.

Build the entire experience in Three.js and WebGL. Use real 3D geometry throughout so visitors can look around and see the depth, curves, and connections of the burrow.

## ABOVE GROUND

Open at prairie dog eye level. Show low grasses, scattered wildflowers, soft mounds of soil, and several burrow openings. A prairie dog stands upright near the entrance, watching the colony. A light breeze moves the grass. Let the visitor take in the scene before the tour begins.

When the visitor selects “Enter the burrow,” glide down through the opening in one continuous shot. At the rim, daylight fades and the first bands of color curve into view. Make this transition the moment the visitor discovers what’s beneath the prairie.

## UNDERGROUND

Use the layout of a prairie dog burrow as the blueprint. Build sloping passages, forks, narrow connections, rounded dens, and an uphill passage to the exit. Give the underground surfaces the finish of a colorful, inhabited sculpture. Wrap patterns around the walls, floors, and ceilings so they follow the form of each space.

Give each stop along the route a distinct look.

- The Ribbon Tunnel uses sweeping bands of cobalt, turquoise, and amber that follow the curves of the passage.
- The Lookout Chamber is a small round den lined with oversized blue and white mosaic tiles. Two side passages are visible from the junction.
- The Nursery is a tucked-away alcove with soft lilac arches, warm coral dots, and gentle lighting. Give the camera time to turn and reveal it.
- The Gathering Den is the widest room. Patterned ribs arch overhead, bright geometric designs spread across the floor, and several tunnels meet around its perimeter.
- The Exit Spiral uses green and gold chevrons to trace a gentle climb. A patch of real daylight grows at the top as the camera approaches the surface.

Make the junctions easy to read as the camera travels. At one, let visitors see a side passage reconnect farther ahead so they can recognize the burrow as a network. Use steady lighting and clear patterns that remain readable as the camera moves.

## CAMERA AND CONTROLS

Lead visitors along a continuous camera path that gently slows at bends and pauses in each major chamber. Frame the tour at prairie dog scale so tunnels feel close and the larger dens feel spacious. Keep the camera upright, with smooth turns and enough clearance to avoid clipping through walls.

Let visitors pause and look around by dragging, swiping, or using the arrow keys. Give them simple controls to resume, move to the previous or next stop, and replay the tour. Keep the interface minimal so the 3D scene fills the screen.

Support desktop and mobile in portrait and landscape. Use clearly labeled controls, visible keyboard focus, and touch-friendly buttons. Respect the visitor’s reduced-motion preference by offering stationary views at each stop with manual navigation. Provide a short text description of each stop for screen reader users.

## RETURN TO THE PRAIRIE

Let the camera rise through a second opening and adjust gradually to the daylight. Then turn back toward the original entrance. Use a recognizable landmark, such as a pale rock beside the first mound, to show how far the camera traveled underground. End with the camera still at ground level, looking across the colony, and offer “Replay tour.”

{{< /alert >}}

I used GPT Sol 6.2 - High. Three.js was used. The page is interactive and responsive. I gave the prompt to ChatGPT Work mode and it churned for fifteen minutes and thirty-three seconds. I only did one iteration. Visually it looks great. Realistically you can get the picture of a burrow. I am having fun using ChatGPT on my phone. It’s producing much better results than using GitHub Copilot in VS Code. Anyway, Happy Friday. Keep exploring!

Check out the build here: [Codevember Day 27 ~ burrow](https://gregpuzzles1.github.io/codevember-2026/27/)
