# Portfolio Redesign - Design Brief

Status: DRAFT - awaiting Phuc's approval before any implementation.
Date: 2026-07-18
Decision record: every choice below was made explicitly during the 2026-07-18
grill-me session. Evidence source for all project claims:
`~/career-ai/master/evidence-audit.md` and `career-master-document.md`.

---

## 1. Portfolio objective

Present Phuc Truong as a strong early-career full-stack software engineer who
builds and operates real systems. The site must let an engineering
interviewer find enough depth to ask meaningful questions, pass a
20-30 second recruiter scan at the surface layer, and contain zero claims
that cannot be defended live in an interview.

## 2. Target audience

Priority order (decided):
1. Software engineers evaluating technical depth.
2. Hiring managers evaluating ownership and judgment.
3. Recruiters scanning the surface layer.
Mobile visitors are a constraint on all three, not a separate audience.

## 3. Core narrative

"An engineer who runs real systems on hardware he owns." The homelab is the
generative core: PlanBear is served from it, the anomaly detector monitors
its own telemetry, VisionX will protect the home it sits in. Full-stack is
the stated role target; the homelab is the differentiator woven through
everything, not the headline identity.

## 4. Visual direction

Direction A ("Systems Dashboard, inspired-by") with two hybrid elements:

- Dashboard-inspired visual language, NOT a simulation. No fake terminal,
  no fake Grafana chrome. Real artifacts (topology diagram, Grafana
  screenshots, honest metrics) inside a clean site.
- Editorial body typography (from Direction B): case-study body text is
  optimized for long-form reading. Monospace is restricted to metadata,
  labels, dates, and metrics - never body text.
- Per-case-study changelog block (from Direction D): a short dated list of
  real milestones inside each case study. No site-wide feed, no blog.

Theme: dark-only. Near-black background (not pure #000), one accent color
in the green/amber "operational" family, semantic status colors used only
in status chips. WCAG AA contrast minimum everywhere.

## 5. Site map

```
/                     Home
/projects/planbear    Case study (flagship)
/projects/anomaly     Case study
/projects/visionx     Case study (in development)
/homelab              Case study / infrastructure page
/about                About
```

Footer on every page: resume PDF, mailto, GitHub, LinkedIn. No Instagram.
No Experience page (resume PDF carries work history). No blog/writing/notes
section. Contact is mailto + GitHub + LinkedIn only - no contact form.

## 6. Page hierarchy

### Home
First viewport: name, positioning line ("Full-stack engineer who builds and
operates his own infrastructure" or equivalent), primary links.
Then: clickable homelab topology SVG (the hero). Then: four featured
project cards with status chips, in this order:
1. PlanBear - LIVE
2. Homelab Anomaly Detection - PAUSED / WORKING MVP (June 2026)
3. VisionX - IN DEVELOPMENT
4. Homelab Infrastructure - ONGOING
Then: one-line "other projects" list (BruinGrub, KnowYourTimes, The Miracle
Project - name, one sentence, repo link, nothing else).

Cut entirely from the site (decided, integrity-driven):
- Smart Magic Mirror (never built - evidence audit: not safe to claim).
- Clinical Note Restructuring Tool (Phuc's own assessment: weak, no
  personal meaning; stays live at its URL if an interviewer asks).

### Case studies (template)
Shared skeleton, sections vary per project (see section 8). Every case
study has: status chip + date, changelog block, links (repo and live URL
where applicable), and a Limitations or Current-scope section.

### About
Short. Two personal hooks only: photography and barista - each with at
least one concrete specific detail (see Content needed). Phuc's own photos
are the only photographic imagery allowed on the site.

## 7. Honesty rules (non-negotiable, decided)

- Publish limitations and status labels. Framing: factual status, not
  self-deprecation ("PAUSED - WORKING MVP · JUNE 2026", not "abandoned").
- PlanBear user counts appear nowhere (3 signups is not a public metric;
  omitting a metric is honest, inventing one is not). "Live and operated
  by me" is the claim - no traffic claims.
- VisionX: implemented vs designed is visibly separated (per-component
  status labels). "Built" language only for what runs today.
- Anomaly detection: all metrics carry the "synthetic anomalies only"
  caveat inline, not in a footnote.
- Every published claim must trace to `evidence-audit.md`. Items marked
  [VERIFY] there (e.g. Grafana-to-Discord alerting) are not published
  until verified.

## 8. Case-study strategy (Phase 5 decisions)

### PlanBear (flagship)
Sections: Problem / My role (effectively solo; a collaborator's early
login-page prototype was removed and rebuilt) / Architecture with diagram
(React-Vite-Tailwind SPA, Express + Sequelize + PostgreSQL on Supabase,
served from the homelab behind Cloudflare) / Data pipeline (Playwright
scrape, 15,154 courses, 196 subject areas) / Engineering decisions
(JWT-in-HttpOnly-cookie vs header tokens; guest-mode localStorage data
model and the merge question; offering-snapshot tables) / Security
(Turnstile, Helmet, CORS, rate limiting, bcrypt) / Operations (AWS
Elastic Beanstalk-S3-RDS origin, cost-driven migration to self-hosting,
told matter-of-factly; nightly pg_dump backups to NAS, restore-listing
verified) / Screenshots / Changelog / Status: LIVE / Links: repo +
planbear.io.

### Homelab Anomaly Detection
Sections: Motivation / Ownership framing ("adapted Striim Labs' TranAD
prototype" - fork honesty preserved) / Pipeline architecture (Prometheus
query_range export, preprocessing, TranAD, FastAPI /score, exporter back
into Prometheus, Grafana dashboard) / Results with caveats (F1 0.8485,
precision 0.9333, recall 0.7778, ROC/AUC 0.8876 - synthetic injected
anomalies, single machine, 4 features, ~2 weeks of telemetry) / Known
limitations (weak CPU-spike detection, threshold recalibration needed) /
Planned vs implemented (Kafka/Spark/baselines explicitly labeled
not-implemented) / Grafana screenshots / Changelog / Status: PAUSED -
WORKING MVP (June 2026) / Link: repo.

### VisionX
Sections: Motivation (built for his own home and family - the personal
story leads) / Implemented today (camera CRUD, stream keys, go2rtc
RTSP-to-WebRTC live streaming, FastAPI + SQLAlchemy/Alembic + PostgreSQL,
React dashboard, health checks) / Designed, not yet built (ONVIF
ingestion, frame-diff motion pre-filter, server-side YOLO gating, RAM
pre/post-roll buffer, retention job) - each with a status label /
Architecture-in-progress diagram / Changelog / Status: IN DEVELOPMENT /
Link: repo.

### Homelab Infrastructure
Sections: Topology (the hero SVG lives here in full, annotated) / Hardware
(ThinkCentre Micro i7-7500T; Unraid NAS, IronWolf Pro 18TB parity array) /
Networking (Cloudflare + Tailscale + Caddy, HTTPS without port
forwarding) / Monitoring (Prometheus, node exporter, Grafana) / What runs
on it (cross-links: PlanBear serving, anomaly telemetry source, VisionX
target, PlanBear backups) / Changelog / Status: ONGOING.

## 9. Component inventory

- Top nav (text links, no hamburger if avoidable at mobile widths)
- Status chip (LIVE / IN DEVELOPMENT / PAUSED - WORKING MVP / ONGOING /
  DESIGNED / IMPLEMENTED)
- Project card (title, chip, one-liner, tech line)
- Topology SVG (clickable nodes -> case studies; distinct mobile variant).
  Node inventory captured from live `docker ps`/configs on 2026-07-18:
  - External: Cloudflare Tunnels (outbound-only ingress - this is the
    concrete mechanism behind "HTTPS without port forwarding"), Tailscale
    tailnet, Supabase (PlanBear production PostgreSQL).
  - media-server (ThinkCentre mini PC): PlanBear backend + cloudflared;
    TranAD scoring API + anomaly exporter; Prometheus + Grafana +
    node-exporter; Nextcloud stack (+ its cloudflared); Jellyfin media
    stack (collapsed - see discretion rules); Caddy; Homepage dashboard.
  - Unraid NAS: 18TB parity array, NFS exports (media, nextcloud,
    backups), node-exporter (scraped by Prometheus over Tailscale - a
    highlighted detail in the homelab case study).
  - Flows: nightly 3AM pg_dump cron -> NFS -> NAS; Prometheus -> NAS via
    tailnet; TranAD -> exporter -> Prometheus -> Grafana.
  - VisionX: drawn as an IN DEVELOPMENT node (not yet deployed).
  Discretion rules (decided): media stack renders as a single "Jellyfin
  media stack" node - qBittorrent, Sonarr/Radarr/Prowlarr, FlareSolverr,
  and the VPN container are omitted from all published material. No
  internal or Tailscale IPs published anywhere - hostnames and service
  names only. Nextcloud and Homepage are included.
- Changelog block (dated entries, monospace dates)
- Case-study prose layout (editorial measure, ~65-75ch)
- Architecture diagram frame (consistent style across case studies)
- Screenshot frame (real UI/Grafana captures)
- Metrics row (value + inline caveat)
- One-liner project list
- Footer (resume PDF, mailto, GitHub, LinkedIn)

## 10. Responsive behavior

- Mobile-first CSS; no horizontal scroll at 360px.
- Topology SVG: desktop = wide interactive diagram; mobile = simplified
  vertical variant or ordered list fallback. Touch targets >= 44px.
- Tables/diagrams/code scroll inside their own container, never the page.

## 11. Accessibility requirements

- Semantic HTML landmarks; one h1 per page; heading order strict.
- Topology nodes are real links, keyboard-focusable, visible focus rings.
- All images have meaningful alt text; diagrams get text equivalents.
- WCAG AA contrast on the dark palette (verify every text/bg pair).
- `prefers-reduced-motion` respected; no motion-required information.

## 12. Animation guidelines

Minimal. Allowed: hover/focus transitions, subtle topology node highlight.
Forbidden: scroll-jacking, entrance animations on text, GSAP (dependency
dropped entirely), anything that delays content visibility.

## 13. Performance goals

- Near-zero client JS (Astro static; the topology is SVG + links, no
  framework islands unless a real need appears).
- Lighthouse >= 95 on all four categories, mobile emulation.
- Images: AVIF/WebP via Astro's image pipeline; screenshots lazy-loaded.
- Fonts: max two families (one text, one mono), self-hosted, subset;
  system-stack fallback acceptable.
- No third-party requests at runtime.

## 14. SEO and metadata

- Per-page title + meta description; canonical URLs on phuctruong.dev.
- Open Graph + Twitter card tags; one default OG image (topology-derived).
- `@astrojs/sitemap`, robots.txt.
- JSON-LD Person schema on Home.

## 15. Technology decisions (researched 2026-07-18)

- Astro (current major, pinned), static output only - no SSR adapter.
- Content collections: case studies and changelog entries as
  Markdown/MDX with typed frontmatter (status, dates, links, tech).
- Tailwind CSS (Phuc already fluent from PlanBear).
- Integrations: Tailwind + sitemap only. No UI framework islands by
  default. Bootstrap, GSAP, sass, react, react-dom removed.
- Deploy: Cloudflare (existing wrangler setup) at phuctruong.dev.
  The portfolio never moves to the homelab (availability decision).
- Old site preserved on a branch before any changes.

## 16. Division of labor (decided)

- Claude builds: Astro scaffold, design tokens, layout, components
  (chips, changelog, cards, nav, footer), case-study template, topology
  SVG interaction + responsive mechanics.
- Phuc builds: the About page end-to-end (Claude reviews, does not
  rewrite); the topology's node layout sketch (his hardware, his map).
- Phuc writes case-study first drafts; Claude edits for structure and
  audits every claim against evidence-audit.md.
- Review-not-replace applies to everything Phuc implements.

## 17. Content still needed from Phuc

1. Case-study first drafts: PlanBear, anomaly detection, VisionX, homelab.
2. ~~Topology sketch~~ DONE 2026-07-18 - captured from live docker ps,
   Caddyfile, prometheus.yml, tailscale status, crontab, and NFS mounts
   (see component inventory).
3. Screenshots - PARTIALLY DONE 2026-07-18, received and stored in
   `docs/assets/screenshots/`: planbear-landing, planbear-planner,
   visionx-dashboard, grafana-raw-features. Outstanding issues before
   any of these publish:
   - visionx-dashboard: stat tiles show placeholder data ("6 cameras
     recording", storage totals, mock activity feed) that contradicts
     the 1/1 cameras-online tile and the "recording not yet built"
     boundary. Recapture with real values only, or crop to the live-view
     region. Also shows a live bedroom feed - swap to a non-private
     camera angle before publishing.
   - planbear-planner: catalog badge reads "15143 results" but the
     resume/brief claim is 15,154 records. Reconcile the discrepancy
     (likely filtered rows) before either number publishes.
   - Still wanted: the anomaly-detection Grafana view showing model
     scores/threshold (raw-features panel alone doesn't show the ML
     output), captured after the discrepancy check.
4. Photography: 2-4 of his own photos for About; one concrete detail
   (camera/place/habit) for the photography hook.
5. Barista hook: one concrete specific detail.
6. Grafana-to-Discord alerting: user re-confirmed working 2026-07-18, so
   the site may claim it. Still wanted for interview prep (not blocking):
   the alert rule's threshold/condition, and a screenshot of a real
   Discord alert message as an evidence artifact for the case study.
7. Optional but high-value: one PlanBear bug he personally debugged,
   reconstructed for the PlanBear changelog/decisions section (candidates
   in git history: Turnstile fix, auth bug, guest-vs-login routing state).

## 18. Implementation phases

1. **Preserve + scaffold:** branch `legacy-site` from main; new Astro
   project, tokens, base layout, fonts, dark palette. (Claude)
2. **Design system:** chips, cards, changelog, footer, nav, prose styles.
   (Claude)
3. **Home:** hero, topology SVG mechanics from Phuc's sketch, featured
   cards, one-liner list. (Claude + Phuc's sketch)
4. **Case-study template + PlanBear:** Phuc drafts, Claude edits/audits,
   template built against real content. (Both)
5. **Remaining case studies:** anomaly, VisionX, homelab. (Both)
6. **About:** Phuc implements; Claude reviews. (Phuc)
7. **Hardening:** a11y pass, Lighthouse, SEO/meta, OG image, deploy.
   (Claude)

Each phase ends with Phuc's review before the next begins.

## 19. Acceptance criteria

- [ ] Every claim on the site traces to evidence-audit.md; zero invented
      metrics; no [VERIFY]-flagged claim published.
- [ ] Smart Mirror and Clinical Note absent; VisionX implemented/designed
      split visible; anomaly metrics carry inline caveats.
- [ ] Recruiter test: identity, role target, and flagship project
      apprehensible in 20 seconds on Home without scrolling past the
      first two viewports.
- [ ] Engineer test: each case study contains at least three concrete
      engineering decisions with rationale.
- [ ] Lighthouse >= 95 x4 (mobile); no horizontal scroll at 360px.
- [ ] Topology navigable by keyboard and touch; WCAG AA contrast passes.
- [ ] Old site recoverable from `legacy-site` branch.
- [ ] Case-study updates require editing only a Markdown file.
