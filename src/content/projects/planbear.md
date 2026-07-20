---
title: PlanBear
description: A degree-planning platform for UCLA students - a drag-and-drop 16-quarter roadmap over a 15k-course catalog, deployed and operated end to end.
status: live
dates: December 2025 - present
repo: https://github.com/PTruong9090/University-Degree-Planner
live: https://planbear.io
tech:
  - React
  - Vite
  - Tailwind CSS
  - '@dnd-kit'
  - Node.js
  - Express
  - Sequelize
  - PostgreSQL
  - JWT
  - Cloudflare Turnstile
metrics:
  - value: '15,154'
    label: Course records imported
  - value: '196'
    label: Subject areas
  - value: '6 / 15 min'
    label: Auth attempts allowed per IP
  - value: '3 / 15 min'
    label: Contact-form submissions per IP
changelog:
  - date: '2025-12-11'
    text: Sustained development begins (repo existed since Dec 2024, but this is where real work starts)
  - date: '2025-12-23'
    text: Full UCLA course catalog scraped and imported - 15,154 records
  - date: '2025-12-24'
    text: Deployed to AWS (Elastic Beanstalk, RDS)
  - date: '2025-12-30'
    text: Signup/login implemented; a collaborator's login-page prototype merged, later fully rebuilt
  - date: '2026-03-21'
    text: Rate limiting added to auth endpoints
  - date: '2026-03-29'
    text: Cloudflare Turnstile added to login, signup, and the contact form
  - date: '2026-03-31'
    text: Password reset implemented
  - date: '2026-05-16'
    text: Fixed a routing bug letting logged-in users still reach signup/login
---

> **Draft status:** this page is built entirely from verified evidence -
> commit history, code, and the existing evidence audit. The sections
> below marked *[your input]* are placeholders for the personal framing
> only Phuc can supply - why this problem, what was hard about it in his
> own words - and should be treated as pending review, not final copy.

## The problem

*[your input: what's actually painful about planning a UCLA degree by
hand - what did you use before this, spreadsheet or paper, and where did
it fall short?]*

PlanBear exists to answer a specific, recurring question for UCLA
students: across sixteen quarters and dozens of major/GE requirements,
what do I take, and when? It's a drag-and-drop planner over the full
course catalog, not a general study-planning app - the scope is narrow on
purpose.

## My role

Effectively solo. A collaborator (17 commits) prototyped an early login
page; that page was removed and rebuilt from scratch, so no surviving
frontend code is theirs. The remaining 86 commits - the planner, the
backend, the security work, the deployment, and the migration off AWS -
are mine.

## Architecture

The stack: a React/Vite/Tailwind frontend (drag-and-drop via `@dnd-kit`)
talking to an Express/Sequelize API backed by PostgreSQL. The app itself
runs on self-hosted infrastructure - see the [homelab
writeup](/homelab) - reached through a Cloudflare Tunnel, so nothing is
port-forwarded. The database is a Supabase-hosted PostgreSQL instance,
kept separate from the app's hosting deliberately (below).

## Engineering decisions

**Guest mode is a fallback, not a toggle.** The planner always tries the
authenticated API first. Only when that call fails - a 401 (not logged
in) or a network error (offline) - does it drop to `localStorage`, and
the UI message changes to match ("Guest mode: plans are saving to this
browser only" vs. "Offline mode"). It's a small piece of design I'm happy
with: one code path handles both "never signed up" and "server's
unreachable" without the user needing to know which one is true.

The honest gap in that design: guest and account data never merge.
Signing up doesn't pull in a guest's browser-only plan - I checked the
signup handler directly, and it has no reference to local plan data at
all. A guest who creates an account today has to rebuild their plan. That's
a real limitation, not a hidden one.

**JWT in HttpOnly cookies, not headers.** Sessions are JWTs set via
`res.cookie()` with `httpOnly: true`, rather than a token the frontend
stores and attaches to headers itself. The tradeoff is deliberate:
HttpOnly cookies aren't readable by JavaScript, which closes off a whole
class of XSS-driven token theft that header-based auth leaves open, at
the cost of needing CORS and cookie settings to be exactly right for the
frontend and API to talk across origins.

**Turnstile is enforced server-side, not just shown client-side.** The
signup and login endpoints reject the request outright if `turnstileToken`
is missing, then call Cloudflare's `siteverify` endpoint from the server
with a secret key and the requester's IP before proceeding. A request
that skips the frontend widget and hits the API directly still gets
blocked - the check isn't decorative.

**Rate limiting has real numbers behind it:** 6 auth attempts per 15
minutes per IP, 3 contact-form submissions per 15 minutes per IP, both
returning a proper "too many attempts" response instead of failing
silently.

**Helmet and CORS** are applied at the top of the Express app - standard,
but worth naming as a deliberate choice rather than an accident.

## Data pipeline

*[your input: what was messy about scraping UCLA's catalog - what broke,
what needed cleanup, how long did it take?]*

The catalog - 15,154 courses across 196 subject areas - was scraped with
Playwright and imported directly into Postgres via a seed script. That
number comes from a direct count of imported records, not an estimate.

## A feature that's scaffolded but not real: offering tracking

There's a half-built feature in this codebase worth being upfront about.
The schema has tables for tracking specific course offerings over time
(`course_offerings`, `offering_snapshots`, `user_tracked_offerings`), and
there's a polling script meant to periodically re-scrape UCLA's site to
detect changes - seats opening, times shifting. The script runs, but the
piece that actually parses UCLA's page is a stub:

```js
function placeholderParser() {
  throw new Error(
    "UCLA HTML parsing is not wired up yet. Replace placeholderParser with a real parser before enabling polling."
  );
}
```

It's never been scheduled in production and there's no frontend UI for
it. I started the infrastructure for this feature and didn't finish it -
it's not live, and the site doesn't claim it is.

## Operations

PlanBear started on AWS - Elastic Beanstalk, S3, RDS, a load balancer -
at roughly $5-10/month. With no meaningful traffic, that cost stopped
making sense, so I moved the app to my own homelab infrastructure behind
a Cloudflare Tunnel and kept the database on Supabase-hosted Postgres
(there was no user data to migrate off RDS - just schema). It's a modest,
cost-driven call, not a heroic migration story.

Backups run for real: a cron job at 3:00 AM runs `pg_dump` against the
Supabase database (matched client-tool versions to the server), writes
timestamped dumps to an NFS share on my NAS, and I've verified the dumps
are restorable via `pg_restore --list`. There's no restore-drill cadence
or retention policy yet - just a working, verified backup path.

## A bug I fixed: auth state wasn't centralized

The last commit in this repo's history is this fix, and the bug is
documented in the code itself before I removed it:

```text
Issue:
Can still hit create account if logged in and create account
button still available when logged in.
```

The root cause was that auth state lived locally in whichever component
needed it - the navbar checked `getCurrentUser()` on its own, other pages
did their own thing - so there was no single place to ask "is this user
logged in" and no way to guard a route based on the answer. A logged-in
user could still navigate straight to `/signup` or `/login`.

The fix was a proper `AuthContext`: one provider that calls
`getCurrentUser()` once, exposes `isAuth` and `loading` to the whole app,
and lets the router itself redirect - `/login`, `/signup`,
`/forgot-password`, and `/reset-password` now check `isAuth` and bounce
logged-in users back to `/` before the page even renders. It's a small
fix, but it's the kind of bug that's easy to ship (everything *works*,
it's just reachable from the wrong state) and satisfying to trace back to
a missing single source of truth.

## Current limitations

- Guest and account plans don't merge (above).
- Course-offering tracking is scaffolded, not functional (above).
- No load testing has been done; traffic has been minimal since launch.
- *[your input: anything else you'd flag if an interviewer pushed on
  what's missing?]*

## What's next

*[your input: if you picked this back up, what would you build first -
finish offering tracking, add the guest/account merge, something else?]*
