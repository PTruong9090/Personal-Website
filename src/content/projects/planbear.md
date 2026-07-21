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

## The problem

I built PlanBear because I lost an afternoon to this exact task. Planning a
UCLA degree means holding a lot in your head at once - roughly sixteen
quarters, your major's course sequence, GE requirements, prerequisite
chains, and the fact that not every course runs every quarter. The
official tools tell you *what* you need but not *when* to take it. I
remember sitting at my desk for around four hours, bouncing back and forth
between catalog pages to research which courses were worth taking, trying
to hold a coherent multi-year structure in my head with nowhere good to
lay it out.

PlanBear answers the question I was stuck on that afternoon: across those
sixteen quarters, what do I take, and when? It's a drag-and-drop board over
the full course catalog, not a general study-planning app - the scope is
narrow on purpose.

(The name is a small joke: UCLA's mascot is the Bruin, but "Bruin" is the
university's to use, not mine - so, a bear that helps you plan. PlanBear.)

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

The catalog isn't downloadable - UCLA's registrar site is a
JavaScript-rendered app with no public API - so the data came from a
three-phase Playwright crawl. Phase one enumerates every subject area from
the catalog landing page; phase two paginates through each subject to
collect every course link; phase three visits each course page and pulls
subject, title, course ID, and units.

The messy part was that the site is built with generated CSS class names -
selectors like `.css-1bzya3n-styled--StyledFlexItemSubheading.e1ixoanv1` -
so there are no stable hooks to grab. Every field extraction is a brittle
locator wrapped in a fallback that writes `"N/A"` instead of crashing the
run when a selector misses.

The other constraint was load: the registrar rate-limits sustained
scraping, so the crawler is built to go easy on it rather than hammer it -
capped concurrency, a randomized 1-3 second delay between requests, and
blocked image loads to cut bandwidth. The piece that mattered most was full
resumability: it writes progress to disk after every batch and, on
restart, skips every link it already captured (anything with a real course
ID rather than `"N/A"`), so an interruption costs a pause instead of the
whole dataset. End to end, the crawl took around two hours.

At import, the one transform worth naming: course IDs arrive as a single
string like `"COM SCI 31"`, split into a subject code and course number on
the last space, then bulk-inserted with a unique `(subject_code,
course_number)` constraint so re-running the import can't create
duplicates. The 15,154 figure is a direct count of what landed in the
table - 196 subject areas in all - not an estimate.

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

- The planner places courses freely - it doesn't model prerequisites or
  major/GE requirements, so it won't tell you a plan is *invalid*, only
  hold the plan you build. It's a layout tool, not a degree audit; the
  course records themselves carry no prerequisite or requirement data yet.
- Units are stored as strings, so there's no automatic per-quarter unit
  total or "you're overloaded this term" check.
- The catalog is a one-time snapshot; nothing refreshes it automatically.
  The offering tracker above was the unfinished attempt at solving that.
- Guest and account plans don't merge (above).
- The scraper depends on UCLA's current generated CSS classes and would
  break if they change their frontend.
- No load testing has been done; traffic has been minimal since launch.

## What's next

I'm not actively developing PlanBear right now - it does the job I built it
for. If I picked it back up, the first thing I'd build is prerequisite and
requirement modeling: giving courses real prerequisite relationships and
encoding major/GE requirements so the planner can validate a plan instead
of just storing it - the difference between a drag-and-drop board and
something that can tell a student "this ordering won't work." The code
already half-starts two other pieces that would follow: finishing the
course-offering tracker (schema and poller exist, only the HTML parser is
stubbed) and a guest-to-account merge so signing up stops discarding a
plan built in guest mode.
