---
title: "Codevember-2026/20"
date: 2026-11-20T08:00:00-07:00
author: "Greg Christian"
description: "For Codevember Day 20, I used ChatGPT to create an interactive Three.js experience exploring a tiny garden inside a cocoon."
summary: "A Codevember Day 20 experiment: discovering a glowing nighttime garden inside a silk cocoon."
tags: ["Codevember", "Cocoon", "AI-assisted coding", "Three.js", "Interactive experience"]
featureimage: "cocoon-featured.png"
images: ["cocoon-featured.png"]
showTaxonomies: true
showSummary: true
---

Today is day 20 of the Codevember challenge. Codevember is a coding challenge where people build small projects based on a word or theme for each day in November. I am following [@thespite](https://x.com/thespite) (Jaume Sanchez Elias) on X. He generated an unofficial prompt list for every day. [Jaume’s post](https://x.com/thespite/status/2116974998212772095?a=Ja7aa-sznyd9T6J_JNo&s=46) Today’s day 20 prompt is:

{{< keyword >}}cocoon{{< /keyword >}}

I had ChatGPT help me with a few ideas, then I choose one and had it write a prompt for that idea. This is the prompt I started with and gave to the ChatGPT mobile app on my iPhone.

{{< alert icon="code" >}}

Theme for the day:

{{< keyword >}}cocoon{{< /keyword >}}

Create a complete, polished web experience for Codevember Day 20 with the theme “Cocoon.”

Title: “A Little Light Within”

Subtitle: “A tiny world inside a cocoon.”

Use Three.js, HTML, CSS, and JavaScript to build an interactive, responsive 3D experience. Visitors discover a secret nighttime garden inside a hanging silk cocoon, with fireflies drifting between plants as its central feature. Keep the UI minimal. Let the world fill the screen and make exploration feel natural.

### Scene and atmosphere

Begin outside a cocoon suspended from a slender branch at dusk. It sways gently, with a faint blue-green glow shining through its silk. Use a softly blurred forest background with subtle floating pollen. Show a small invitation: “Step closer.” When the visitor clicks or taps the cocoon, smoothly move the camera closer and make the silk shell facing the camera translucent, revealing the miniature garden inside. Keep enough of the cocoon visible to clearly frame and enclose the world. Inside, include:
- A small moss-covered landscape with stones.
- Delicate ferns, curled leaves, stems, and flowers at different heights.
- A few softly glowing mushrooms.
- A small reflective pool.
- Fine silk threads arching overhead.
- Fireflies wandering between the plants.

Use deep twilight blues, moss greens, pearly silk, and warm golden firefly light. Keep the plants mostly dark so moving fireflies gradually reveal details. The mood should be peaceful, magical, and alive. Design the cocoon and garden as complete 3D environments that look convincing from every viewing angle.

### Firefly movement

Make the fireflies look and behave like tiny insects carrying warm lights, rather than generic floating dots. Give each firefly a different flight path, speed, and glow rhythm. Use smooth, organic wandering with gentle changes in direction. Some should pass behind leaves, hover near flowers, or briefly land on stems before flying again. Use restrained glow effects and subtle lighting tricks to illuminate nearby details without creating an expensive light source for every insect.

### Garden interactions

1. Attract fireflies:  In “Attract fireflies” mode, hold the mouse button or press and hold a finger within the garden. Nearby fireflies gently gather around that location. When released, they gradually resume wandering.
2. Send a spark:  In “Explore” mode, a quick click or tap on an empty part of the garden sends one nearby firefly toward that location.
3. Wake a flower:  Clicking or tapping a closed flower attracts a firefly. When it lands, the petals slowly open and the flower’s center glows softly.
4. Light a mushroom:  Clicking or tapping a mushroom briefly brightens it and releases a few drifting luminous spores.
5. Touch the water:  Clicking or tapping the pool creates gentle expanding ripples.
6. Reveal the silk:  Fireflies passing near the cocoon wall briefly reveal its fine woven texture.

Provide “View cocoon” and “Explore inside” actions in the collapsible menu so visitors can move between the outside and inside views.

### Camera controls — all scenes

Provide interactive camera controls in every scene, including the outside cocoon view, the interior garden, and any intermediate exploration views. Use Three.js OrbitControls to support:
- Full 360-degree horizontal orbital rotation around the scene’s focal point.
- Vertical orbiting to view the scene from above and below.
- Camera panning up, down, left, and right.
- Zooming in and out.
- Smooth damping for natural movement.

Panning must move the camera and its orbit target together. Use screen-space panning so up, down, left, and right remain intuitive from any viewing angle.

**Desktop controls:**
- Left-click and drag to orbit.
- Right-click and drag to pan up, down, left, or right.
- Mouse wheel or trackpad scrolling to zoom.
- Suppress the browser context menu only over the interactive canvas.

**Mobile and tablet controls:**
- Drag with one finger to orbit.
- Drag with two fingers to pan.
- Pinch with two fingers to zoom.

Inside the collapsible menu, provide compact, accessible controls for:
- Panning up, down, left, and right.
- Zooming in and out.
- Resetting the camera to the current scene’s default view.

Support holding a directional or zoom control for continuous movement. Stop movement on release, pointer cancellation, or loss of focus. Keep the panel open while its controls are being used. Allow unrestricted horizontal rotation without azimuth limits. Permit a broad vertical orbit range, stopping just short of the poles to prevent camera flipping. Set sensible zoom and pan boundaries for each scene so visitors can explore freely without losing the garden or passing through solid objects. Do not assume OrbitControls provides collision detection; implement any necessary constraints separately. Make silk surfaces facing the camera fade or become translucent as needed so the cocoon does not block exploration of the interior from different angles. When switching between outside and inside views, smoothly transition both the camera position and the OrbitControls target. Temporarily pause manual camera input during the transition, then restore it immediately afterward. Make reset view available from the menu in every scene.

### Prevent camera and garden interaction conflicts

Provide an “Explore” / “Attract fireflies” mode toggle inside the collapsible menu. Explore mode is the default:
- Enable orbiting, panning, and zooming.
- Quick clicks and taps activate garden objects or send a firefly toward an empty location.
- Distinguish clicks and taps from camera drags using a movement threshold.
- Camera drags and multi-touch gestures must never trigger garden interactions.

**Attract fireflies mode:**
- Holding the mouse button or one finger within the garden gathers nearby fireflies.
- Disable one-pointer orbiting while this mode is active.
- Keep two-finger pan and pinch-to-zoom available.
- End attraction when a multi-touch camera gesture begins.
- Keep the menu’s camera controls available.

Exclude all interface buttons and overlays from scene picking. Show a brief, device-appropriate hint when the interaction mode changes, then fade it away.

### Sound and minimal interface

Let the 3D world fill the screen. Keep the interface quiet, unobtrusive, and minimal.
- Show the title and subtitle briefly on arrival, then gently fade them away.
- Display a short interaction hint on first use, then dismiss it after the visitor interacts.
- Keep only two small controls persistently visible: sound and a menu button.
- Place all other controls in one compact, collapsible panel:
- Explore / Attract fireflies mode.
- Inside/outside view.
- Camera panning and zoom.
- Reset view.
- Restart.
- A short controls guide.
- Close the panel when the visitor resumes interacting with the 3D scene. Do not close it while its own controls are being used.
- Use subtle translucent backgrounds, simple icons, and restrained typography.
- Give icon buttons accessible labels and descriptive tooltips.
- Keep touch targets comfortably sized, even when the visible icons are small.
- Avoid permanent instruction bars, dashboards, decorative interface cards, and unnecessary text.
- Preserve all camera controls, accessibility features, and garden interactions. Make them available through gestures, keyboard controls, or the collapsible panel.

Include optional soft nighttime ambience and delicate musical tones for flower and mushroom interactions. Start with sound off. Begin audio only after a user gesture. Restart must reset the garden and camera without reloading the page. The garden should hold the visitor’s attention; the interface should appear only when needed.

### Responsive design and accessibility

Support desktop, tablet, and mobile in portrait and landscape orientations. Adjust camera framing, zoom limits, and interface placement so the cocoon and garden remain visible on narrow screens. Handle screen orientation changes without resetting the visitor’s progress. Respect mobile safe areas so controls remain clear of notches and home indicators. Use comfortably sized touch controls. Prevent gestures on the 3D canvas from accidentally scrolling the page, while allowing normal scrolling inside the menu when needed. Use accessible HTML buttons with descriptive labels and visible keyboard focus. Ensure hidden or faded interface elements cannot accidentally intercept input or receive keyboard focus. Allow the menu to be opened with the keyboard and closed with Escape. Return focus appropriately when it closes. Provide keyboard-accessible controls for:
- Camera panning, zooming, and resetting.
- Attracting fireflies with a toggle, without requiring a sustained pointer hold.
- Waking a flower without requiring precise pointer input.

**Respect prefers-reduced-motion:**
- Reduce cocoon swaying, particles, and firefly flight speed.
- Disable camera inertia and automatic camera movement.
- Replace animated view transitions with immediate view changes.
- Preserve all user-controlled exploration and garden interactions.

Avoid flashing lights and abrupt brightness changes.

### Technical requirements

- Use Three.js with ES modules and pin the dependency version.
- Import OrbitControls from the same Three.js version.
- Prefer procedural geometry, generated textures, and original assets so the project works without paid models or external art and audio downloads.
- Implement accurate pointer picking and believable interaction targets in the 3D garden.
- Map firefly attraction and empty-space clicks to a stable, bounded location within the garden using an appropriate raycasting surface.
- Handle resizing and screen orientation changes.
- Cap rendering pixel ratio and scale visual effects for mobile performance.
- Reuse geometry and materials where practical.
- Keep glow effects subtle and avoid excessive dynamic lights.
- Include a friendly fallback message if WebGL is unavailable.
- Make asset paths work when deployed in a GitHub Pages subfolder such as /codevember-2026/20/.
- If working within an existing repository, follow its structure and preserve other days’ projects and deployment configuration.

### Deliverables

Provide the complete runnable project, organized into clear files, with brief instructions for running locally and deploying to GitHub Pages. Verify that:
- All garden interactions work.
- Full 360-degree horizontal orbiting works in every scene.
- Vertical orbiting, directional panning, and zooming work in every scene.
- Camera movement does not accidentally trigger garden interactions.
- Desktop and touch controls work correctly.
- The layout remains usable on narrow mobile screens.
- The interface stays minimal, with only sound and menu controls persistently visible.
- The collapsible menu and its keyboard navigation work.
- Reset, restart, sound, and scene-switching controls work.
- Reduced-motion preferences are respected.

Prioritize a beautiful, cohesive scene and working interactions over adding extra features. The finished experience should feel like a tiny living garden worth lingering in. Keep the focus on the cocoon, plants, and fireflies. No moth emergence sequence is needed.

{{< /alert >}}

I know, it’s a rather lengthy prompt but I was very surprised that it only took ChatGPT Sol 6.2 - High, 20 minutes to come up with an extraordinary result. All of this was done on my iPhone. All I had to do was copy the zip files onto my laptop working directory. I don’t know how many tokens or dollars and cents it used, but I don’t think it was many. Much more cost effective than Claude Sonnet 5.5 thru VS Code on my laptop. I am just really thrilled with the results. Keep exploring! It pays off.

Check out the build here: [Codevember Day 20 ~ cocoon](https://gregpuzzles1.github.io/codevember-2026/20/)
