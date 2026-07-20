---
title: Homelab Infrastructure
description: A self-hosted Docker/Linux stack on hardware I own and run - the NAS and mini PC that everything else on this site is served from.
status: ongoing
dates: 2025 - present
tech:
  - Docker
  - Linux
  - Unraid
  - Cloudflare Tunnels
  - Tailscale
  - Caddy
  - Prometheus
  - Grafana
changelog:
  - date: '2025'
    text: First self-hosted service - Nextcloud on a Raspberry Pi 5 with a 1TB SSD
  - date: '2025'
    text: Outgrew the Pi; built a mini PC + Unraid NAS setup instead of buying prebuilt
  - date: '2026'
    text: Cloudflare Tunnels replace port forwarding for all public services
  - date: '2026'
    text: Tailscale added for private admin access; VLAN segmentation added
  - date: '2026'
    text: Prometheus and Grafana monitoring stack deployed
  - date: '2026-05'
    text: PlanBear moved from AWS to this stack
  - date: '2026-06'
    text: Anomaly-detection pipeline attached, scoring the media server's own telemetry
---

## Where this started

The first thing I self-hosted was Nextcloud, and the reason was mundane:
I was tired of emailing files to myself to move them between my phone,
laptop, and desktop. I started on a Raspberry Pi 5 with a 1TB SSD, which
worked until I thought about the access pattern - syncing files multiple
times a day is a lot of reads and writes for one SSD, and adding a real
hard drive with redundancy to a Pi isn't practical; it wasn't built for
that.

## Hardware

I picked the Pi originally because it was cheap and I wanted to learn
embedded systems and basic networking - switches, cabling, that kind of
thing. Once I hit its limits, I looked at buying a prebuilt NAS or a
dedicated DAS, but decided against it: with a commercial box you're stuck
on the vendor's software and waiting on their support when something goes
wrong. After a lot of reading, I built my own instead - a mini PC (a used
ThinkCentre) alongside an Unraid NAS with an 18TB parity array. Unraid was
the easiest to get running, and the parity setup protects the array
against a single drive failing without losing the data on it.

## Networking

PlanBear and the other public services run through Cloudflare Tunnels -
outbound-only connections from my server to Cloudflare, so nothing needs
a port forwarded on my router and the server's actual address is never
exposed to the internet. That matters mainly against the constant
background noise of bots scanning for open ports; a tunnel just isn't
there to find.

For anything more sensitive - the admin dashboards, SSH - I use Tailscale
instead of exposing it even through a tunnel. It requires being
authenticated into my private network before those services are reachable
at all.

I also run a VLAN to separate my regular client devices (laptop, desktop,
phone) from the homelab network. The reasoning is containment: if a
desktop gets compromised, network segmentation means it can't reach the
server just because it's on the same Wi-Fi.

## What monitoring has actually shown me

Grafana dashboards track CPU, memory, and network across the stack, and
they've been genuinely useful for understanding real bottlenecks - not
just abstractly. Watching something like a transcoded video stream, I can
see CPU spike immediately, because the server has to encode the video
into a format the requesting device can play; that encoding step is what
limits it to only one or two simultaneous transcoded streams before CPU
becomes the bottleneck.

## What it costs, what it taught me

The setup doesn't draw much power day to day, but it wasn't cheap to
build - around $1,500 total, with the hard drives being the largest
single cost. What it's given me back is a level of hands-on networking
knowledge coursework didn't: how HTTP requests actually move across the
network, how ARP resolves addresses at the switch level, how VLANs
segment and protect a network, and how to wire many separate
machines and services into one system that behaves as a whole. I'm a
hands-on learner, and running infrastructure I'm responsible for keeping
up has done more for that understanding than any class.

## What runs here

This machine is the thing behind three other projects on this site:
[PlanBear](/projects/planbear) is served from it through a Cloudflare
Tunnel, the [anomaly-detection pipeline](/projects/anomaly) scores its
own telemetry, and [VisionX](/projects/visionx) will run on it once
recording is built. The full map of what's running where is on the
[home page](/).
