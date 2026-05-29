---
title: "Open Pi Mobile App: First Look"
date: 2026-05-29T09:30:00-06:00
author: "Greg Christian"
description: "A first look at Open Pi, a new mobile app by Artem Svitelskyi for monitoring and connecting to Raspberry Pi devices on your LAN."
summary: "I tested the new Open Pi mobile app with my Raspberry Pi 5 and found a strong terminal experience, useful monitoring tools, and promising potential once early bugs are resolved."
tags: ["Raspberry Pi 5", "Open Pi", "Mobile App", "SSH", "Linux", "Homelab", "First Look"]
featureimage: "feature-open-pi.png"
showTaxonomies: true
showSummary: true
---

I recently downloaded the new Raspberry Pi app called Open Pi, built by Artem Svitelskyi.

I had the app scan my LAN, and it found my running Pi 5 right away. After a small login bug, which I emailed Artem about, he replied quickly and asked for additional details. I was then able to log in and get a quick overview of the app.

One thing I really liked was the terminal interface. I was able to run one of my Python programs, and I also used nano to write a new program directly from the app.

The app shows the SSH service, which is the only one I currently have running. It also lists many other services, including Docker, OpenClaw, Mosquitto, and more. Open Pi will monitor a service if it finds it running, but it will not install, configure, start, stop, or manage services for you.

Open Pi also lets you monitor CPU load, temperature, memory, and disk usage, control GPIO pins, and browse or add to your filesystem hierarchy.

This mobile app has a much better terminal than Raspberry Pi Connect in my experience, but it does not provide remote access beyond your LAN. I will continue using VNC Viewer and Windows PowerShell to work with my Pi devices.

Open Pi is unique because it is one of the first apps that can connect you with your Pi from a mobile device in this way. After a few bugs are worked out, Open Pi has the potential to be very useful.

As one of the first people to test drive this new app, I am excited to see where it goes next.
