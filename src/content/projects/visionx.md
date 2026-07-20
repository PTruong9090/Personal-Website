---
title: VisionX
description: A home security system I'm building for my own house - live camera streaming and management today, an ML-driven recording pipeline in design.
status: in-development
dates: June 2026 - present
repo: https://github.com/PTruong9090/VisionX
tech:
  - FastAPI
  - SQLAlchemy
  - Alembic
  - PostgreSQL
  - go2rtc
  - React
changelog:
  - date: '2026-06-27'
    text: Project started - FastAPI/SQLAlchemy backend and React frontend scaffolded
  - date: '2026-06-30'
    text: Database models and camera CRUD routes
  - date: '2026-07-01'
    text: go2rtc added for RTSP-to-WebRTC streaming
  - date: '2026-07-05'
    text: Dashboard and cameras page working end to end
  - date: '2026-07-08'
    text: Camera edit/delete flows, dropdown and confirmation components
  - date: '2026-07-13'
    text: FastAPI service wired to register cameras with go2rtc
  - date: '2026-07-14'
    text: Live stream view working; recording architecture designed, not yet built
  - date: '2026-07-18'
    text: Login/signup frontend and auth backend started
  - date: '2026-07-19'
    text: Auth completed end to end
---

## Why I'm building this

I've been curious about computer vision for a while, and I'm interested in
embedded systems more broadly. I'm moving back home soon and wanted a real
way to monitor the property - our area has had break-ins nearby, and I
wanted something more capable than a single camera. I'd been using Wyze
cameras, but each one carries its own subscription, and a commercial
DVR-based system means being locked into someone else's hardware and
waiting on their support for problems. I already have a NAS and spare
compute sitting in the homelab, so building my own - fully customizable,
no recurring fees, and something I actually understand end to end - made
more sense than buying another closed system.

There's a second motivation: my parents work around the house a lot, and
I liked the idea of a quick way to check in - "did someone leave through
the garage" - without digging through raw footage. That's the reasoning
behind the voice-query idea below.

## What's running today

The backend is FastAPI with SQLAlchemy and Alembic migrations against
PostgreSQL: camera CRUD, user and auth CRUD, and live streaming through
go2rtc, which converts RTSP camera feeds to WebRTC for low-latency browser
viewing. A React dashboard shows live camera views and basic health
checks.

The hardest part so far hasn't been any single component - it's been
designing an MVP while the target kept moving. One concrete example:
`stream_key` started out as something users could set and edit directly.
That fell apart once I realized the same key had to stay stable across
go2rtc's internal routing and the rest of the camera configuration - if a
user could change it freely, anything referencing that stream would break.
I redesigned it so the key is system-generated and fixed once a camera is
created, which keeps every downstream piece consistent.

## The recording architecture (designed, not yet built)

This is the part I've thought through most carefully and haven't
implemented yet. The plan: each camera exposes a main stream for
recording and a lower-resolution substream for worker processing. Worker
processes watch the substream and trigger events with YOLO object
detection; when an event fires, the system keeps recording continuously
until the event ends, with a RAM-based pre-roll and post-roll buffer
around it. Finished clips move to the NAS with a one-year retention
window.

The open design question is what runs *before* YOLO. My hardware can't
run YOLO inference on every camera's stream simultaneously, so something
needs to filter out empty frames first. Two options, with a real
tradeoff: ONVIF motion events offload that filtering to the camera itself
but only work with ONVIF-compliant hardware, which would make the system
camera-specific rather than universal, which I don't want. A frame-diff
pre-filter (comparing consecutive frames for motion before bothering YOLO)
works with any camera but costs CPU I'd rather spend on inference. I
haven't picked one yet.

Buffering happens in RAM rather than on disk deliberately: constant
pre/post-roll writes would add real wear to the two 18TB hard drives
(one is the parity disk) that make up the NAS, and drive prices right now
make that wear expensive to replace.

## What "done" looks like

Recording and event detection working end to end, with events queryable
by voice - answering something like "when did someone last leave through
the garage" using stored event data. I don't expect to call this finished
after one pass; getting the detection sensitivity right (not missing real
events, not drowning in false ones) will take multiple rounds of testing
once it's running.

## Status

In development. The boundary on this page is deliberate: streaming,
camera management, and the dashboard are things I've built and can
demonstrate; the recording and event pipeline is a design I can explain
in detail but haven't shipped. That split will disappear once real clips
are recording end to end - at which point this page gets real metrics
(false-positive rate, clips per day, inference throughput) instead of a
design description.
