---
title: "Codevember-2026/25"
date: 2026-11-25T08:00:00-07:00
author: "Greg Christian"
description: "For Codevember Day 25, I used ChatGPT and Three.js to create The Three Gossips, an interactive desert scene revealed through fog."
summary: "A Codevember Day 25 experiment: lifting a veil of fog from Utah's Three Gossips."
tags: ["Codevember", "Veil", "AI-assisted coding", "Three.js", "Interactive experience"]
featureimage: "three-gossips-featured.png"
images: ["three-gossips-featured.png"]
showTaxonomies: true
showSummary: true
---

Today is day 25 of the Codevember challenge. Codevember is a coding challenge where people build small projects based on a word or theme for each day in November. I am following [@thespite](https://x.com/thespite) (Jaume Sanchez Elias) on X. He generated an unofficial prompt list for every day. [Jaume’s post](https://x.com/thespite/status/2116974998212772095?a=Ja7aa-sznyd9T6J_JNo&s=46) Today’s day 25 prompt is:

{{< keyword >}}veil{{< /keyword >}}

This is the prompt I gave ChatGPT Work mode:

{{< alert icon="code" >}}

Theme for the day:

{{< keyword >}}veil{{< /keyword >}}

Build a complete interactive 3D web experience for Codevember 2026, Day 25.

Word of the day — veil

Title — The Three Gossips

Opening instruction — “Tap or click the fog to reveal the Three Gossips.”

### THE SCENE

Recreate Utah’s Three Gossips as a fully three-dimensional sandstone formation using Three.js and WebGL. Use the attached photo, IMG_7567.jpeg, as the visual reference. Match the opening camera angle to the photo’s low, front-facing view.

Make the formation recognizable by its silhouette. Give the left tower a small, tilted cap perched on a narrow neck, the middle tower a broad, blocky cap, and the right tower a wide, rounded cap. Include the shorter rock shoulder between the middle and right towers. Add warm orange sandstone, vertical cracks, subtle layers, and a shared rocky base. Frame the formation with low desert cliffs and a clear blue sky. Give the rocks depth and detail on all sides so they hold up as the camera moves around them.

### THE VEIL

On arrival, a dense bank of pale fog hides the three towers. Let a little foreground sandstone and blue sky remain visible around its edges. Build the fog in 3D world space so it wraps around the formation and shows depth as the camera moves.

A single click or tap anywhere on the visible fog triggers the full reveal. Start the clearing near the point of contact, then have the opening spread through the cloud. Let the fog thin and drift sideways in soft wisps over about two to three seconds, revealing the warm sandstone as it clears. Keep the camera where the visitor left it. Once the fog clears, keep the view open until the visitor chooses “Restore fog.”

### ORBIT AND INPUT

Use Three.js OrbitControls centered on the formation. Let visitors drag or swipe to orbit a full 360 degrees, tilt up and down, and zoom with a mouse wheel or pinch gesture. Set camera limits that keep the camera above ground and prevent it from passing through the rocks. Distinguish a tap from a drag so orbiting does not accidentally clear the fog.

Keep the entire formation comfortably framed on first load in portrait and landscape, including small phones. Preserve the scene’s proportions when the viewport resizes or the device rotates.

### ACCESSIBILITY AND MINIMAL UI

Let the scene fill the viewport. Show the title and one short instruction on arrival. Make the reveal instruction a native, focusable button so Enter and Space trigger the same reveal as a tap on the fog. After the reveal, replace the instruction with a small “Restore fog” button. Keep both controls readable against the scene and give them visible focus indicators.

Allow keyboard visitors to focus the scene, orbit with the arrow keys, and zoom with + and −. Give the scene an accessible description and announce when the formation is revealed. Honor prefers-reduced-motion by stopping ambient fog drift and making the reveal immediate. If WebGL is unavailable, show the reference photo and a short text description of the formation.

The experience should feel like standing in the desert as a passing veil lifts. Let the change from cool, soft fog to sunlit sandstone be the main event, then give visitors time to explore the rocks from any side.

{{< /alert >}}

I used GPT Sol 6.2 - High again. Three.js was used. The page is interactive and responsive. I gave it the prompt in ChatGPT on my iPhone and it churned for thirteen minutes or so. Visually it looks great. Realistically you can get the picture of veil. There are still a few more days left in November, I am excited to try the next challenge. Keep exploring!

<br><br>Check out the build here: [Codevember Day 25 ~ veil](https://gregpuzzles1.github.io/codevember-2026/25/)
