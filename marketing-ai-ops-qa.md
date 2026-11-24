---
slug: marketing-ai-ops-qa
target_profiles: [ops, ai]
title: "15 Creative Contractors, 70–100 Assets a Week, Zero Leaks: How I Built the Marketing QA Machine for Fast-Moving Telehealth"
summary: "Ran creative operations and the sole regulatory quality gate for a high-growth telehealth startup delivering 70–100 weekly creative assets across a 15-person distributed contractor team under strict healthcare advertising compliance. Inherited scattered Google Drive folders, stale pricing across 40 actively managed landing pages (audited from a 100-page legacy sprawl), and constant legal ping-pong. Built a master pricing Google Sheet paired with a custom Claude pricing skill (pricing), created an Asana task orchestrator (pm-asana) that automatically provisions Drive folders and brief docs, reorganized the marketing Drive with a custom search and filing skill (google-drive-filer-creatives), and engineered an automated marketing-to-engineering handoff skill (linear-dev-handoff) with deep bidirectional cross-linking to Figma. Personally reviewed 70–100 assets/week across static ads, video audio, captions, and responsive landing pages with 100% human-in-the-loop sign-off, maintaining 0 FDA violations and executing a zero-downtime migration of 500 active tasks from Linear to Asana following a 5-week foundation runway with zero dropped deliverables. Live case study: https://deadpoolio92.github.io/portfolio/marketing-ai-ops-qa.html"
star:
  situation: "The telehealth startup was rapidly scaling its telehealth patient acquisition across compounded Glucagon-Like Peptide-1 (GLP-1) weight-management treatments. A 15-person distributed team of freelance video editors, copywriters, designers, and web developers pumped out 70–100 new creative assets every week across video ads, static banners, landing pages, and User-Generated Content (UGC). Because telehealth advertising is strictly regulated by the Food and Drug Administration (FDA) and state medical boards, an unapproved weight-loss promise, a missing risk disclaimer, or an outdated price on a landing page risked immediate ad account bans and severe regulatory warning letters. The operational reality behind the scenes was chaotic: the marketing Google Drive was a disoriented labyrinth of unmapped folders, developers and copywriters had no single source of truth for pricing, legal was a bottleneck for routine copy checks, and team members burned hours hunting down asset briefs across disconnected tools."
  task: "Establish a deterministic, high-velocity creative operations pipeline and quality control gate that could handle 70–100 weekly assets, eliminate cross-tool friction, wipe out pricing errors across 40 actively managed landing pages (from 100 live pages), maintain zero dropped deliverables across a 500-task migration from Linear to Asana, and serve as the sole quality gatekeeper with 100% human-in-the-loop sign-off to ensure zero healthcare compliance defects reached live ad channels."
  action: "Engineered a single-source operating system anchored by custom Claude skills and structured toolchain integration. First, established a master Google Sheet as the single source of truth for all telehealth product pricing and built a custom Claude pricing skill (pricing) so copywriters, designers, and devs could query live, accurate pricing in seconds. Second, took a stale, incomplete regulatory Claude skill and completely overhauled it into an active first-pass compliance engine that flagged unapproved health claims and missing disclaimers before human review. Third, mapped and restructured the entire marketing Google Drive from zero, documented migration redirects, and built a custom Claude Drive routing skill (google-drive-filer-creatives) to find assets and guide new file uploads. Fourth, built pm-asana to couple Asana with Google Drive so creating tasks automatically provisioned structured Drive folders and brief templates, and built linear-dev-handoff to package finished marketing assets into self-contained Linear engineering issues with Figma links, Brief docs, and CTA targets. Fifth, operated as the sole pre-deployment QA gatekeeper, personally vetting 70–100 assets per week—including scrubbing video dialogue, spoken audio, on-screen captions, and running a systematic 6-viewport matrix across 40 actively managed landing pages daily."
  result: "Maintained a 100% compliance track record with 0 FDA warning letters, zero ad account suspensions, and 0 pricing discrepancies across all published marketing assets. Reduced creative setup and folder provisioning time from 30 minutes to under 2 minutes per project, unlocked 15 hours per week of recovered team bandwidth, migrated 500 active tasks from Linear to Asana with 0 dropped deliverables, and audited 100 live landing pages to decommission 60 stale, risk-prone historical variants while centralizing repeated claims, customer milestones, and review counts into single-source components across the 40 active pages."
  reflection: "In regulated high-velocity marketing ops, AI automation is an incredible accelerator for file routing, task setup, and first-line pattern matching—but it can never replace human accountability. Setting up a master pricing sheet and clean folder taxonomy before building the Claude skills was the key: automating a messy process just scales the mess faster. By pairing autonomous backend scaffolding with a non-negotiable 100% human-in-the-loop sign-off on medical claims, we achieved enterprise-grade compliance at startup speed. Live case study: https://deadpoolio92.github.io/portfolio/marketing-ai-ops-qa.html"
metrics:
  - key: "Weekly Creative Output"
    value: "70–100 Assets/wk"
  - key: "Compliance Violations"
    value: "0 Violations"
  - key: "QA Gatekeeper Protocol"
    value: "100% Human Gate"
  - key: "Migration Deliverables Dropped"
    value: "0 Dropped (500 Tasks)"
  - key: "Admin Grunt Work Saved"
    value: "15 hrs/wk"
  - key: "Responsive QA Matrix"
    value: "40 Active Pages (6 Viewports)"
tags: [marketing-ai-ops-qa, creative-ops, healthcare-compliance, quality-assurance, claude-skills, asana, figma, telehealth, workflow-automation, systems-architecture]
---

# 15 Creative Contractors, 70–100 Assets a Week, Zero Leaks: How I Built the Marketing QA Machine for Fast-Moving Telehealth
## Engineering a Zero-Defect Quality Control Gate, Custom Claude Skills, and Single-Source Toolchains for Regulated Patient Acquisition

**Author:** Karol Jasztal — Head of Operations & Systems Leader  
**Domain:** Marketing Operations, Applied AI Systems, Healthcare Regulatory QA  
**Primary Impact:** 70–100 Weekly Assets Coordinated · 0 FDA Violations · 500 Tasks Migrated with Zero Loss  
**Operating Standard:** 100% Human-in-the-Loop Sign-Off on Healthcare Claims & Spoken Video Audio  

---

## Executive Transformation Summary

- **Baseline Bottleneck:** Rapidly scaling telehealth patient acquisition for compounded Glucagon-Like Peptide-1 (GLP-1) weight treatments meant managing a 15-person distributed contractor team (video editors, copywriters, static designers, web developers) delivering 70–100 creative assets weekly. The backend was pure friction: the marketing Google Drive was a chaotic maze of unorganized folders, developers and copywriters had no central source of truth for pricing, legal was swamped with routine copy checks, and landing page pricing was hardcoded across dozens of separate pages. In healthcare, an unapproved medical promise or outdated price can trigger severe Food and Drug Administration (FDA) warning letters and immediate ad account shutdowns.
- **Engineered Architecture:** Built a single-source creative operations engine powered by custom Claude skills and tight cross-tool integration. Established a master pricing Google Sheet and deployed `pricing` for instant, accurate copy generation. Overhauled a stale regulatory Claude skill into an active first-line pre-screening gate. Reorganized the marketing Drive, built `google-drive-filer-creatives`, deployed `pm-asana` for automated project folder/brief provisioning, and implemented `linear-dev-handoff` alongside bidirectional cross-linking across Figma, Asana, and Google Drive.
- **Audited ROI:** Operated as the sole QA gatekeeper personally vetting 70–100 assets weekly across video dialogue, on-screen captions, static ads, and a 6-viewport responsive landing page matrix with 100% human-in-the-loop sign-off. Achieved a perfect 0-defect compliance record with zero FDA warning letters and zero pricing errors. Migrated 500 active tasks from Linear to Asana with zero dropped deliverables, recovered 15 hours per week of wasted team admin time, and retired ~20 high-risk, legacy landing pages.

---

## § 01. Architecture, Pipeline Blueprint & Weekly Cadence

### 1.1 In-Media-Res Crisis: High-Velocity Creative Scaling vs. Healthcare Compliance

When you are scaling direct-to-consumer patient acquisition in telehealth, velocity is oxygen. But when that telehealth offering involves compounded Glucagon-Like Peptide-1 (GLP-1) prescription medicine, one false move in an advertisement is an operational disaster.

At a high-growth telehealth startup, a 15-person distributed contractor team was tasked with pumping out **70 to 100 new creative assets every single week**:
* **Direct-Response Video Ads:** Hook variations, split-screen explainers, and customer journey videos.
* **User-Generated Content (UGC):** Real-person testimonials, unboxing reels, and doctor interview snippets.
* **Static Ad Creatives:** High-CTR display banners, comparison charts, and Instagram story cards.
* **Conversion Landing Pages:** 20+ active landers running advertorial, quiz-funnel, and direct-checkout flows.

The stakes could not have been higher. Under Food and Drug Administration (FDA) regulations and Federal Trade Commission (FTC) guidelines, telehealth advertising for compounded medication is heavily scrutinized. Advertisers are strictly forbidden from making unapproved therapeutic claims, promising specific pounds of weight loss in fixed timeframes, omitting compound medication risk disclosures, or quoting out-of-date pricing. A single non-compliant asset slipping past review could trigger an FDA warning letter, payment gateway holds, or immediate suspension of high-spend ad accounts.

Yet the operational backbone was cracking under the weight of this creative volume:
1. **The Google Drive Labyrinth:** Creative files, raw UGC reels, and PSD exports were scattered across dozens of unorganized, randomly named subfolders. Team members burned up to 30 minutes per task just hunting down briefs, logos, and raw footage.
2. **Pricing Disconnects:** Developers, designers, copywriters, and leadership had no single source of truth for subscription tiers, initial consult fees, and medication dosages. Prices were being updated in Slack threads and copy-pasted from memory, leading to dangerous pricing mismatches across live ads and checkout pages.
3. **Legal Ping-Pong Bottleneck:** Routine copy variations sat in legal review queues for days, stalling high-velocity campaign launches because there was no standardized pre-screening tool for basic regulatory checks.
4. **Toolchain Blind Spots:** Tasks lived in Linear, briefs were drafted in Google Docs, and designs were built in Figma—with zero cross-linking between them. Feedback was lost in Slack DMs, and nobody knew which Figma artboard belonged to which project management task.

```
Baseline Pipeline Bottleneck (70–100 Assets/Week):
[Creative Brief] ──> [Scattered Drive Assets] ──> [Guessing at Pricing] ──> [Stale Legal Check] ──> [Unverified Live Release]
       │                        │                           │                         │                          │
  Lost Context           30 Min Hunting               Stale Prices              Days of Lag             Risk of FDA Penalty
```

---

### 1.2 Non-Negotiable Operational Constraints

To scale creative throughput without increasing compliance risk or expanding management headcount, I established four non-negotiable operational boundaries:

1. **Constraint 01 (100% Human-in-the-Loop Sign-Off):** Zero autonomous publishing. AI tools and custom Claude skills could pre-screen, route files, and format data, but every single customer-facing asset (including spoken video dialogue, text captions, disclaimer legibility, and checkout terms) required my manual verification and personal sign-off before deployment.
2. **Constraint 02 (Zero Dropped Deliverables During Migration):** When migrating the company's active marketing operations from Linear to Asana, all 500 active tasks, creative dependencies, and contractor assignments had to transfer seamlessly with zero missed deadlines and zero downtime.
3. **Constraint 03 (Single Source of Truth for Pricing):** No copywriter, front-end developer, or designer was permitted to hardcode a price or discount from memory. All numbers had to originate deterministically from a single centralized data source.
4. **Constraint 04 (6-Viewport Responsive Verification):** Every landing page update had to be verified across 6 standard viewports (Desktop Large, Desktop Medium, Desktop Small, Mobile Large, Mobile Medium, Mobile Small) to ensure risk disclaimers, checkout buttons, and dosing disclosures never clipped or broke on mobile devices.

---

### 1.3 Time-Motion Study: Baseline vs. Transformed Operations

By identifying the administrative drag holding back the creative team, I deployed structured automation and single-source infrastructure. The audited time savings unlocked **15 hours per week of high-value operational bandwidth** across the organization:

| Operational Phase | Baseline Bottleneck (Legacy) | Transformed Infrastructure (Karol) | Audited Delta |
|---|---|---|---|
| **01. Brief Setup & Folder Provisioning** | 30 mins / task (manual Drive folder creation, brief template copying, permissioning) | 2 mins / task (pm-asana auto-creates Drive folders & prepped brief docs) | **-93.3%** |
| **02. Pricing Lookup & Copy Verification** | 15 mins / asset (Slack pings to finance/execs, digging through outdated landing pages) | <10 secs (pricing skill queries single-source master Google Sheet) | **-98.9%** |
| **03. Creative Asset Hunting & Context** | 20 mins / review (searching unmapped Drive folders, guessing Figma artboard versions) | Instant (google-drive-filer-creatives + Bidirectional cross-links) | **-100.0%** |
| **04. First-Pass Regulatory Pre-Screening** | 4–6 hrs / batch (manual review of routine copy by legal counsel, blocking launches) | 10 mins / batch (Overhauled Claude regulatory skill pre-screens unapproved claims) | **-95.8%** |
| **05. Pre-Deployment QA & Sign-Off** | 45 mins / page (inconsistent ad-hoc desktop checks, frequent mobile clipping defects) | 12 mins / page (Standardized 6-viewport matrix + single-source component checks) | **-73.3%** |
| **Total Administrative Drag Per Week** | **~20.5 Hours / Week** | **~5.5 Hours / Week** | **-15.0 hrs/wk** |

---

## § 02. Single-Source Infrastructure & Data Contracts

### 2.1 The Master Pricing Google Sheet: Eradicating Pricing Drift

In a subscription-based telehealth business, pricing is complex: introductory trial discounts, monthly compounded medication costs, doctor consultation fees, and multi-month supply bundles. 

Prior to this intervention, developers hardcoded pricing numbers directly into HTML landing page templates, copywriters pulled numbers from old promotional briefs, and designers guessed prices based on previous Figma files.

To permanently eradicate this risk, I created the **Master Pricing Data Contract** in Google Sheets (sanitized token `[SECURE_PRICING_MASTER_SHEET_ID]`). It served as the singular, company-wide source of truth for every active product, dosage tier, discount code, and billing frequency.

```
Master Pricing Data Topology:
[Master Pricing Google Sheet] (Owned by Ops & Finance)
       │
       ├───> pricing Claude Skill ────────> Copywriters ("Create ad copy for Semaglutide Month 1 using latest pricing")
       ├───> Centralized Web Components ──> Developers (Single-source pricing cards across 20–40 landing pages)
       └───> Asana Creative Briefs ──────> Designers (Auto-populated pricing tables for static banners)
```

### 2.2 Unabridged Data Contract: Telehealth Product & Dosage Schema

### 2.3 Centralizing Landing Page Code: 40 Manual Edits Collapsed into Single-Source Components

Beyond creating the pricing contract, I addressed the technical implementation on the web. Over time, the marketing ecosystem had accumulated over **100 live landing pages**, each hardcoding prices, FAQ answers, customer counters, and legal disclaimers directly into raw HTML and WordPress templates. Whenever pricing shifted or a disclaimer required updated legal wording, developers spent hours opening separate codebase files, making manual edits, and inevitably missing pages.

I directed front-end engineering to refactor these pages into **single-source centralized components**:
1. **Centralized Data & Social Proof Components:** Centralized not just pricing grids and FAQ accordions, but every recurring data point across the 40 active pages: patient milestone counters (e.g. *"Over 25,000 patients served"*), verified review tallies and star ratings, clinician credentials, and legal disclaimers. Updating one central component instantly synchronized across all 40 landing pages with zero risk of discrepancies or manual drift.
2. **Landing Page Portfolio Audit & Decommissioning:** Audited visitor and conversion volume across all 100 live landing pages. Discovered that 60 pages were stale, abandoned historical variants generating zero sales while exposing the company to regulatory risk. Sunsetting these legacy variants allowed operations to focus 100% of daily governance on the ~40 core active high-performing funnels.

### 2.4 The Living SOP Library & Standardized Landing Page Frameworks

To eliminate scattered rules and tribal knowledge trapped in people's heads, I established a centralized operational knowledge base that continuously codified production standards for the distributed team:
* **Living SOP Library Across Disciplines:** Authored and actively maintained comprehensive Standard Operating Procedures (SOPs) for static designers, copywriters, video editors, and QA gatekeepers. Whenever a universal rule, compliance boundary, or edge case surfaced during QA, I codified it directly into the corresponding SOP and briefed the team. New contractor onboarding became turnkey: instead of relying on informal Slack threads, new hires received complete, up-to-date operating runbooks on day one, dramatically elevating copywriting discipline and creative execution.
* **Modular Landing Page Frameworks:** Designed standardized Landing Page Frameworks (codified in Notion: `LP Framework (Long)` for TOF/MOF education-heavy funnels and `LP Framework (Short)` for high-intent BOF funnels). These frameworks established modular section hierarchies, clinical trust sequences, objection-handling blocks, and CTA placements—elevating all net-new landing pages to a consistent conversion and compliance baseline before development.

---

## § 03. Custom Claude Skills & Ecosystem Automation

### 3.1 The Production Claude Skills Architecture

Rather than buying bloated SaaS tools, I built and deployed four dedicated Claude skills that removed friction from daily creative operations:

```
Production Claude Skills Architecture:
┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│      pricing (Pricing Engine)   │   │    pm-asana (Task Creator)      │
├─────────────────────────────────┤   ├─────────────────────────────────┤
│ • Live Google Sheet connection  │   │ • Single-task Task model    │
│ • Full-dose vs microdose rules  │   │ • Auto-provisions Drive folders │
│ • Copy Notes & promo validation │   │ • Generates prepped Brief docs  │
│ • "Starting at" calculations    │   │ • Cross-links Figma & Drive     │
└─────────────────────────────────┘   └─────────────────────────────────┘
┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│ google-drive-filer-creatives    │   │      linear-dev-handoff         │
├─────────────────────────────────┤   ├─────────────────────────────────┤
│ • 1:1 Asana-to-Drive mirroring  │   │ • Self-contained Linear issues  │
│ • Instant asset location        │   │ • Extracts Figma & Brief links  │
│ • Automated file placement rules│   │ • Carries CTA targets & quiz logic│
│ • Cross-folder gathering        │   │ • Zero back-and-forth for eng   │
└─────────────────────────────────┘   └─────────────────────────────────┘
```

> [!CAUTION]
> **Confidentiality & Compliance Anonymization Notice:** The skill definitions below are authentic, full-length production architecture files deployed inside Claude. To protect employer intellectual property and comply with strict confidentiality and NDA covenants, all brand names, partner agency names, live internal Google Drive folder IDs, spreadsheet keys, team GIDs, and confidential API tokens have been sanitized into bracketed placeholders (e.g. `[SECURE_PRICING_MASTER_SHEET_ID]`). Core prompt rules, error recovery procedures, and edge-case handling are preserved verbatim.

#### Skill 01: `pricing` — Single-Source Pricing & Formulation Query Engine
*(44 lines • Full Production Specification)*  
Directly references the live Master Pricing Google Sheet (sanitized token `[SECURE_PRICING_MASTER_SHEET_ID]`). Enforces queries strictly against the "Overview" tab, respects per-product copy notes, distinguishes full-dose vs. microdose formulations, and ensures copywriters never cite outdated subscription prices.

```yaml
---
name: pricing
description: Use this skill whenever a question involves pricing, plan names, promos, savings, vial counts, billing cadence, or auto-renewal terms for any product (Semaglutide, Tirzepatide, NAD+, or any future product added to the sheet). Trigger on mentions of plan pricing, subscription cost, promo price, monthly cost, 3-month plan, auto-renewal price, or similar - even if the product name isn't explicit. Always fetch live data rather than relying on memory, since prices and promos change.
---

# Plans Overview Pricing

## Source of truth

Google Sheet: https://docs.google.com/spreadsheets/d/[SECURE_PRICING_MASTER_SHEET_ID]/edit
File ID: `[SECURE_PRICING_MASTER_SHEET_ID]`

## Steps

1. **Always fetch live content** of this file before answering — never rely on
   previously cached or remembered figures. Use the Google Drive read/fetch
   tool with the File ID above.
2. This file has two tabs: **"Overview"** and **"Comparison"**. ONLY use data
   from the **"Overview"** tab. Ignore the "Comparison" tab entirely, even if
   it appears in the fetched content.
3. Within "Overview," treat the per-product plan tables (columns like Plan
   Name, # Vials/Cycle, Regular Total, Promo Total, Auto-Renewal terms) as the
   source of truth — **not** the "Quick-Glance Comparison" section at the
   bottom of the Overview tab, which is a summary and may lag behind the
   detailed tables.
4. Pay attention to each product's **"COPY NOTES"** section (e.g. which
   promos are first-time-customer-only, which plans have no regular/crossed-
   out price, mandatory disclosures like vial strength) and apply those
   constraints to any copy or answer generated.
5. If a plan type someone asks about doesn't appear in the tables, state
   clearly that it doesn't currently exist — don't infer or estimate one.
6. **"As low as" / "Starting at" / "From" phrasing:** these always refer to
   the single lowest number available across ALL plans for that product —
   including promo prices, not just regular prices. Compare every plan's
   Regular (per month) AND Promo (per month) figures and use the lowest one
   found, regardless of whether it comes from a promo or regular column.
   (Do not exclude promo pricing when computing this figure.)
7. **Full-dose vs. microdose (Semaglutide & Tirzepatide only):** these two
   products each have a separate "Full-Dose" and "Microdose" table with
   different pricing. Default to **Full-Dose** pricing unless the user
   explicitly asks about microdosing, low-dose, or the microdose funnel.
   Never mix tables — e.g. don't pull a "lowest price" from the microdose
   table when the product/context is the standard (full-dose) offering.
   NAD+ has no full-dose/microdose distinction and is unaffected by this rule.
```

#### Skill 02: `pm-asana` — Project Management & Automatic Drive Provisioning
*(468 lines • Full Production Specification)*  
Governs Asana project and task creation for the marketing team. Enforces the single-task `Task` model (Brief ToDo $\rightarrow$ Copy $\rightarrow$ Design $\rightarrow$ QA $\rightarrow$ Approved). Every created deliverable automatically provisions an identically named Google Drive folder and brief doc (`Template_Creative_Brief_v2.gdoc`), embedding bidirectional links into Asana custom fields.

```yaml
---
name: "pm-asana"
description: "Project Management for Asana — the Marketing Marketing team. Use when the user wants to: create a new Asana project (campaign or evergreen) for Marketing; create one or more tasks in an existing project; set up a full campaign in one go; parse a brain-dump or task list into Asana tasks; promote an item out of the Ideas project into real work; or backfill/create the Google Drive folder and Brief doc for a new or existing Asana task. Every task created by this skill automatically gets a matching Google Drive folder + Brief doc (named identically to the task) created and linked in. Triggers on mentions of Asana projects/tasks, campaigns, flights, briefs, copy, design, video/UGC, filing marketing work, or setting up a task's Drive folder/doc. Always preview the full plan and wait for explicit confirmation before any write."
---

# pm-asana — Project & Task Creator for Asana

Create well-structured projects and tasks in Asana for the Marketing Marketing team. Every deliverable is a **single task** that moves through its lifecycle via the `Task` status pipeline — never split into separate Brief/Copy/Design tasks. Always preview the full plan and wait for explicit confirmation before executing any write.

**Golden rule: never assume, always ask.** Ask every clarifying question needed so that nothing is ambiguous before building the plan. Do not skip questions to save time.

Every task this skill creates also gets a matching **Google Drive folder + Brief doc, created and linked automatically** — see "RULES — Automatic Google Drive folder + doc" below. This always happens; it is not something to ask permission for.

---

## PHASE 1 — Analysis (always run first)

Verify IDs fresh each session (they can change), then fetch current state:

- `asana_typeahead_search(resource_type: "team", query: "Marketing")` → confirm team GID
- `asana_get_projects_for_team(team_gid)` → existing projects, avoid duplicates
- `asana_typeahead_search(resource_type: "project_template", query: "Campaign")` → confirm template GID
- `asana_get_workspace_users` or `asana_typeahead_search(resource_type: "user")` → resolve assignees
- For an existing target project: `asana_get_project(project_id, opt_fields: "name,custom_field_settings.custom_field.name,custom_field_settings.custom_field.gid,custom_field_settings.custom_field.enum_options.name,custom_field_settings.custom_field.enum_options.gid")` and `asana_get_project_sections(project_id)`

Use this to confirm the project exists, suggest the right project, warn about near-duplicate task names, and resolve field/section/assignee GIDs.

---

## PHASE 2 — Determine creation mode

| Mode | Description |
|---|---|
| new project | Create a campaign or evergreen project (preferably from the Campaign template) |
| new task(s) | Add one or more deliverable tasks to an existing project |
| full campaign | New project + its tasks in one go |
| bulk / brain-dump | User pastes an unstructured list; map it to projects + tasks |
| promote idea | Move/recreate an item from the `Ideas` project into a real project |
| Drive backfill | Create the Drive folder + Brief doc for an **existing** task that doesn't have them yet, and link them in |

If the mode is unclear, ask.

---

## PHASE 3 — Clarify before building (NEVER ASSUME, ALWAYS ASK)

Gather **all** information needed so nothing is ambiguous. Do not cap the number of questions, and do not skip ahead because the input "seems detailed enough." If a required value is missing or guessable, ask — do not infer it.

Always confirm, at minimum:
- **Project**: which existing project, or a new one? Campaign or evergreen?
- **Format** of each deliverable (Blog, Email, Landing Page, Static Ad, Video, UGC, Social, Print) — this determines the status path.
- **Product**(s): Semaglutide (GLP-1), Tirzepatide (GLP-1/GIP), NAD+ — can be multiple.
- **Channel**(s): Meta, Google, Pinterest, TikTok, Instagram, Reddit, Email, ManyChat — can be multiple (cross-channel is normal).
- **Discipline**: Paid, Organic, Owned, SEO.
- **Awareness** stage(s) if relevant: TOF (Unaware), TOF (Problem Aware), MOF (Solution Aware), BOF (Product Aware), BOF (Most Aware).
- **Assignee** and **due date** if known.
- **Resources**: which links already exist (Design, Live). 📂 Google Drive and 📋 Brief never need to be asked about — they're always auto-created and auto-linked (see Drive rules below). ✍️ Copy is **never** auto-linked by that automation, even though the auto-created Brief doc's content may double as copy early on — if the Format's template calls for a Copy line, ask for it (or note it'll be added once the Brief doc's content is split out).

Only the team (`Marketing`), the task type (`Task`), and the Drive folder/Brief doc creation are fixed and never need to be asked.

---

## PHASE 4 — Build and preview the plan

Construct the full plan and present it before any write. The layout below is a template — replace every bracketed placeholder with the real value for this request; do not copy the placeholder text literally.

```
📋 PLAN — [short description of what's being created]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[PROJECT]  [project name, per "RULES — Naming convention"]   ([new, from Campaign template] OR [existing])
           Team: Marketing

[TASK 1]   [task name, per "RULES — Naming convention"]
           Project: [destination project name]
           Format: [one Format value] | Product: [one or more Product values] | Channel: [one or more Channel values]
           Discipline: [Discipline value] | Awareness: [Awareness value(s) if relevant, else omit]
           Starting status: Brief ToDo (auto via project Rule)
           Path: [the status path for this Format — see "RULES — The single-task model & status paths"]
           Assignee: [assignee, or "unassigned"] | Due: [date, or "none"]
           Drive: will auto-create folder "[task name]" + Brief doc "[task name]" inside it

[TASK 2]   [task name, per "RULES — Naming convention"]
           [same field lines as above, filled in for this deliverable]

[…repeat one block per deliverable…]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Note: I set name, description, fields, assignee, due date and dependencies via the
connector. A project Rule auto-converts each new task to Task at Brief ToDo —
no manual type-setting needed. Each task also gets its own Google Drive folder and
Brief doc, created automatically and linked into the task description.
Type "confirm" to create, or tell me what to adjust.
```

Never write before explicit confirmation ("confirm", "yes", "go ahead", "do it", "looks good"). If the user requests changes, update and re-show.

---

## PHASE 5 — Execute

After confirmation:

1. **Project** (if new): preferred path is the user creating it from the **Campaign** template in the Asana UI (one click) so it inherits `Task`, sections, and saved views. If the user wants it automated, `asana_create_project(name, team, default_view: "board", default_access_level)` then attach the five fields — but warn this plain project won't have the template's task type default or views until adjusted.
2. **Tasks**: `asana_create_task` per deliverable with `name`, `html_notes` (resource block first with **linked labels** — see "How the links MUST be written" in Description templates — then body), `project_id`, `custom_fields`, `assignee`, `due_on`, `followers`. At this point 📂 Google Drive (Marketing) and 📋 Brief are still plain unlinked placeholders (their links don't exist yet).
   - **Use `project_id` (singular), NOT `projects`.** Passing `projects` is silently ignored — the task gets created with no project (empty `memberships`), which also makes `custom_fields` fail with *"custom field … is not on given object"*. Always `project_id`.
   - **`custom_fields` is a JSON string** mapping field GID → option GID (single-select) or array of option GIDs (multi-select). If a create still rejects a field, create the task with `project_id` first, then `asana_update_task` to set `custom_fields` (the task is a project member by then).
3. **Drive folder + Brief doc** (automatic, every task): immediately after each task is created, run the procedure in "RULES — Automatic Google Drive folder + doc" to create the folder + doc and link them into the task via `asana_update_task` on `html_notes`.
4. **Subtasks**: `asana_create_task(parent: <task_gid>, ...)` alone creates a plain subtask with no project membership — use this for pure organizational containers (e.g. a Stage or Funnel task nested under a bigger container) that hold context/verbatim briefs but never carry Format/fields/Task status themselves. **To create a deliverable subtask that also gets the full Task treatment, pass `project_id` in the same call** — `asana_create_task(parent: <task_gid>, project_id: <project_gid>, ...)`. **Confirmed:** this makes the task both a subtask of its parent AND a full member of that project in one call, inheriting the Task Rule and accepting `custom_fields` normally — no extra step needed. Only a subtask created with `parent` alone (no `project_id`) stays outside any project and can't carry a Task status or fields until added to one in the UI. The single-task model still applies either way: most work is one subtask per deliverable, not split into separate Copy/Design tasks. Deliverable subtasks (created with `project_id`) also get their own Drive folder + Brief doc per step 3.
5. **Dependencies** (if any): `asana_set_task_dependencies` / `asana_set_task_dependents`.

**Connector limits — be honest about these in the plan, never fake them:**
- Cannot set the `Task` task type or its status via API (verified: API-created tasks come in as `custom_type: null`). **This is handled automatically by a project Rule** — *"when a task is added to this project → set task type to Task"* — which converts each new task to Task at its first status (`Brief ToDo`). **Confirmed in use: the Rule reliably fires on API-created tasks.** The Rule lives in the **Campaign template**, so every project created from the template inherits it. If a project is ever created WITHOUT the template (e.g. a plain API-created project), it won't have the Rule and tasks will stay plain — recreate the Rule in that project.
- Cannot create a project *from* a template via API (UI only).
- Cannot create sections, statuses, task types, or task templates via API.
- The Brief doc's "Ticket" link is created by uploading HTML content (with a real `<a href>`) and letting Drive convert it to a native Google Doc — do not upload plain text for this, since a raw URL pasted as plain text is not guaranteed to auto-hyperlink. **Confirmed working live** — the resulting Google Doc renders "Ticket" as a real clickable hyperlink.
- The Drive `create_file` tool's own schema marks its `mimeType` field "DEPRECATED — use contentMimeType instead," yet the tool's description also says folders and Google-native docs are created "by setting mime type to `application/vnd.google-apps.folder`/`.document`" with no other field to do that. This skill uses `mimeType` for the target file type (folder/doc) and `contentMimeType` for the uploaded content's format. **Confirmed working** for folder creation, plain-text doc creation, and the `text/html`-with-`<a href>` Ticket-link doc creation.
- The Asana task object's plain `notes` field (returned by the API after a write) always shows resource lines as label-then-raw-URL, even when `html_notes` was sent with proper `<a href>` labels — this is just the API's plain-text mirror of the rich `html_notes`, not a sign the links failed. Check the rendered task in the Asana UI (or trust a successful write) rather than treating the `notes` field's raw-URL appearance as an error.

After creation, report every item created with its Asana URL, and anything that failed and why — including each task's Drive folder link and Brief doc link.

---

## PHASE 6 — Post-run review (after every successful run)

After reporting the created items, always end with a short self-review of how the run went against this skill. The goal is continuous improvement: surface anything that drifted from what the skill describes so it can be fixed before next time.

Check, at minimum:
- **IDs:** did every GID in the REFERENCE section still resolve (team, project, template, fields, option values, Drive root)? Flag any that changed, were missing, or had to be re-fetched.
- **Connector capabilities:** did anything behave differently than the "Connector limits" note claims — e.g. the API now lets you set the task type/status, instantiate a project from a template, create sections, or reliably auto-link URLs inside a Google Doc? Flag new capabilities and newly-broken ones.
- **Fields & options:** did any Format / Product / Channel / Discipline / Awareness value not exist, get renamed, or not apply cleanly?
- **Naming & status paths:** did the naming convention or a Format's status path need a workaround or feel wrong?
- **Drive:** did the project-level Drive folder resolve cleanly for every project used? Any task where no matching project folder could be found (so the Drive step had to be skipped or routed to `_Inbox (ToSort)`)? Any naming mismatch between the created folder/doc and the task name?
- **Ambiguity:** did anything require guessing (a violation of "never assume")? If so, note the question that should have been asked.
- **Anything else** that would make the next run smoother.

Then output exactly one of:

```
✅ No changes needed in skill
```

— or —

```
⚠️ Skill adjustments needed:
- [specific, actionable change #1]
- [specific, actionable change #2]
```

Keep it brief. This review is a recommendation only — never edit the skill automatically; the user decides what to apply.

---

## RULES — Naming convention

Patterns below use bracketed placeholders. Replace each placeholder with the real value; never use the placeholder text itself as a name.

### Projects
- **Campaign:** the campaign's own name only — no product, channel, or date in the name, unless the campaign genuinely recurs (then append the recurring period).
  - Pattern: `[campaign name]`  — or `[campaign name] [recurring period]` if it repeats.
- **Evergreen:** the plain name of the ongoing production line/function.
  - Pattern: `[function name]`
- **Ideas:** the single `💡 Ideas` project. Never put product or channel in a project name — those are fields. This is what prevents project sprawl (do not create one project per channel).

### Tasks
Pattern: `[concept or funnel] - [specific asset]`
- `[concept or funnel]` = the campaign idea, funnel, or theme the deliverable belongs to.
- `[specific asset]` = the exact thing being produced, plus any identifying number/variant.
- Evergreen task with no campaign concept: use just `[descriptor]` (e.g. the topic plus the asset, or a sequence number) — no concept prefix needed.

Rules:
- Separator is ` - ` (space, hyphen, space). Never `|`, `/`, `—`, or `:`.
- **No TYPE prefix** (BRIEF/COPY/DESIGN are retired — task type + Format + status cover this).
- **No channel, product, or format in the title** — those live in fields.
- Title must be readable standalone (in a notification, without the project open).
- **This exact title is also the name of the task's Drive folder and Brief doc** (see Drive rules below) — one more reason it must be exact and final before creating.

### Hard block
If a proposed name doesn't conform, refuse and explain what to change. Never create a non-conforming name "just for now."

---

## RULES — The single-task model & status paths

One deliverable = one task = one `Task`, advancing through statuses. Which statuses a task uses depends on its **Format**:

| Format | Status path |
|---|---|
| Blog · text Social | Brief → Copy → **Copy QA** → Approved → Done *(skip Visual + Final QA)* |
| Email · Landing Page · Static Ad · image Social · Print | Brief → Copy → Copy QA → Visual → Final QA → Approved → Done |
| Video · UGC | Brief → Copy *(script)* → Copy QA *(script compliance)* → Visual *(footage + edit)* → Final QA → Approved → Done |

- `Copy` = the writing phase (copy, or **script** for video). `Visual` = production (design, or footage + edit for video).
- Copy-only formats use **Copy QA** as their single compliance gate and never enter Visual or Final QA.
- Record the intended initial status and full path in the plan, even though the API sets only the default.

---

## RULES — Fields to always set

Set every applicable field on task creation via `custom_fields` (a JSON string of `{ "<fieldGID>": <value> }`). Multi-enum values are **arrays** of option GIDs; single-enum values are a single option GID string.

Always set **Format** (drives the status path). Set **Product**, **Channel**, **Discipline**, and **Awareness** whenever known. Ask if unknown — do not guess.

**Exception — SEO/Blog tasks intentionally leave `Channel` empty** (their home is organic search / the website, which isn't a Channel option; `Discipline = SEO` covers it). Don't flag Channel as missing or ask for it on Blog/SEO work.

---

## RULES — Automatic Google Drive folder + doc

Every task this skill creates (and every task run through "Drive backfill" mode) gets a matching Google Drive folder with a Brief doc inside it, following the same project ↔ Drive mirror described in the `google-drive-filer-creatives` skill: **top-level Drive folder = Asana project name, sub-folder = Asana task name, verbatim.** This is always done automatically — never ask the user whether to do it, only report the result.

Tools used: `search_files` (find the project folder and check for an existing task folder) and `create_file` (create the folder and the doc). Drive root folder ID: `[MARKETING_DRIVE_ROOT_FOLDER_ID]` (same root as `google-drive-filer-creatives`).

### Procedure, per task (run right after the Asana task is created and its `permalink_url`/gid are known)

1. **Resolve the project's Drive folder.** `search_files` with `parentId = '[MARKETING_DRIVE_ROOT_FOLDER_ID]' and mimeType = 'application/vnd.google-apps.folder' and title = '<exact project name>'`. Cache the result per project for the rest of the run (no need to re-search per task in the same project).
   - **Not found?** Don't guess or create a new top-level project folder. Tell the user no Drive folder exists for that project, skip the Drive step for its tasks, and leave the 📂/📋 lines as unlinked placeholders per the normal template rule.
2. **Check for an existing task folder** (idempotency, needed for both new-task and Drive-backfill modes): `search_files` with `parentId = '<project folder id>' and mimeType = 'application/vnd.google-apps.folder' and title = '<exact task name>'`.
   - **Already exists?** Don't create a duplicate. Use the existing folder. Look inside it (`parentId = '<task folder id>'`) for a doc already named `<exact task name>`; if one exists, use it and don't create a second doc — just make sure both are linked into the Asana task description if they aren't already.
3. **Create the task folder** (only if step 2 found nothing): `create_file(title: "<exact task name>", parentId: "<project folder id>", mimeType: "application/vnd.google-apps.folder")`.
4. **Create the Brief doc** (only if step 2 found nothing): `create_file(title: "<exact task name>", parentId: "<task folder id from step 3>", mimeType: "application/vnd.google-apps.document", textContent: "<h1><exact task name></h1><p><a href=\"<asana task permalink_url>\">Ticket</a></p>", contentMimeType: "text/html")`. **Content must be uploaded as HTML (`contentMimeType: "text/html"`), not plain text** — Drive converts the HTML into a native Google Doc on creation, which is what turns the Asana link into a real clickable hyperlink instead of pasting a raw URL. (Note: `<p>` is fine here — this HTML goes to Drive's own converter, not Asana; Asana's own `<p>` restriction, below, does not apply to this call.) The doc's first line is its own title (as a heading) and the second line is the word **"Ticket"**, hyperlinked to the Asana task's `permalink_url` — never display the raw URL as visible text. This doc is where the brief and/or copywriting for the task lives — one doc serves both purposes unless the team later splits copy into its own doc.
5. **Get shareable links** for the folder and the doc (the file objects returned by `create_file`/`search_files` carry the Drive URL — use it directly; do not construct URLs by hand).
6. **Link into Asana.** Update the task's `html_notes` via `asana_update_task`, replacing the plain-label placeholders with linked labels, per "How the links MUST be written":
   - `📂 Google Drive (Marketing)` → the task folder link.
   - `📋 Brief` → the Brief doc link.
   - Leave every other resource line (`🎨 Design`, `✍️ Copy`/`Script`, `🌐 Live`) exactly as-is — this automation never touches those.

### Notes
- **Names must match exactly, character-for-character** — the Drive folder, the Drive doc, and the Asana task title are always identical. If the task is later renamed in Asana, rename the folder and doc to match (not automatic — flag it if you notice a mismatch).
- **Drive backfill mode** runs the same procedure (steps 1–6) against an existing task: read its current `html_notes`/`notes` first so you don't clobber other resource lines, and skip creation for any folder/doc step 2 finds already exists.
- **Dual-homed tasks** (in two Asana projects, per `google-drive-filer-creatives`) get their Drive folder placed under the more specific/strategic project, same as that skill's rule — don't create a second copy of the folder under the other project.
- **`_`-prefixed shared folders** (`_Asset Library`, `_Brand and Compliance`, etc.) are never a target of this automation — it only ever creates task-named folders inside a project folder.

---

## REFERENCE — Live IDs (verify fresh each session)

```
Workspace (company.com):  [WORKSPACE_GID]
Marketing team:            [MARKETING_TEAM_GID]
Ideas project:             [IDEAS_PROJECT_GID]
Campaign template:         [CAMPAIGN_TEMPLATE_GID]
Task type:                 Task  (set in UI; API cannot assign it)
Google Drive root folder:  [MARKETING_DRIVE_ROOT_FOLDER_ID]
```

### Custom fields & option GIDs

**Channel** — `[FIELD_GID_CHANNEL]` (multi_enum)
| Option | GID |
|---|---|
| Meta | [GID_CH_META] |
| Google | [GID_CH_GOOGLE] |
| Pinterest | [GID_CH_PINTEREST] |
| TikTok | [GID_CH_TIKTOK] |
| Instagram | [GID_CH_INSTAGRAM] |
| Reddit | [GID_CH_REDDIT] |
| Email | [GID_CH_EMAIL] |
| SMS | [GID_CH_SMS] |
| ManyChat | [GID_CH_MANYCHAT] |

**Product** — `[FIELD_GID_PRODUCT]` (multi_enum)
| Option | GID |
|---|---|
| Semaglutide (GLP-1) | [GID_PROD_SEMA] |
| Tirzepatide (GLP-1/GIP) | [GID_PROD_TIRZ] |
| NAD+ | [GID_PROD_NAD] |
| Sermorelin | [GID_PROD_SERM] |

**Discipline** — `[FIELD_GID_DISCIPLINE]` (enum)
| Option | GID |
|---|---|
| Paid | [GID_DISC_PAID] |
| Organic | [GID_DISC_ORGANIC] |
| Owned | [GID_DISC_OWNED] |
| SEO | [GID_DISC_SEO] |

**Awareness** — `[FIELD_GID_AWARENESS]` (multi_enum)
| Option | GID |
|---|---|
| TOF (Unaware) | [GID_AWR_TOF_UNAWARE] |
| TOF (Problem Aware) | [GID_AWR_TOF_PROBLEM] |
| MOF (Solution Aware) | [GID_AWR_MOF_SOLUTION] |
| BOF (Product Aware) | [GID_AWR_BOF_PRODUCT] |
| BOF (Most Aware) | [GID_AWR_BOF_MOST] |

**Format** — `[FIELD_GID_FORMAT]` (enum)
| Option | GID |
|---|---|
| Blog | [GID_FMT_BLOG] |
| Email | [GID_FMT_EMAIL] |
| Landing Page | [GID_FMT_LP] |
| Static Ad | [GID_FMT_STATIC] |
| Video | [GID_FMT_VIDEO] |
| UGC | [GID_FMT_UGC] |
| Social | [GID_FMT_SOCIAL] |
| Print | [GID_FMT_PRINT] |

> **Print** = offline / physical collateral — handouts, package inserts, flyers, mailers. Route any printed deliverable here. Follows the copy + design status path.

**Example `custom_fields` string** (a Meta+Pinterest, GLP-1, Paid, TOF, Static Ad task):
```
{"[FIELD_GID_FORMAT]":"[GID_FMT_STATIC]","[FIELD_GID_PRODUCT]":["[GID_PROD_SEMA]"],"[FIELD_GID_CHANNEL]":["[GID_CH_META]","[GID_CH_PINTEREST]"],"[FIELD_GID_DISCIPLINE]":"[GID_DISC_PAID]","[FIELD_GID_AWARENESS]":["[GID_AWR_TOF_UNAWARE]"]}
```

### Task status order (for the plan / UI reference)
```
Brief ToDo · Brief In Progress · Brief Done
Copy ToDo · Copy In Progress · Copy In Review · Copy In Adjustment · Copy Done · Copy QA (incl. Compliance)
Visual ToDo · Visual In Progress · Visual In Review · Visual In Adjustment · Visual Done · Final QA (incl. Compliance)
Approved · Done · Canceled
```

---

## Description templates (resource block FIRST)

The clickable resource block goes at the very top so links are reachable the instant a task opens. **Every line the task's Format template calls for is always included — never omit a line just because the destination doesn't exist yet.** Use the ready-made block for that Format (below) exactly as written: drop in a real link wherever a URL is known, and leave every other line as its plain unlinked label. There is nothing to decide or reconstruct per task — copy the block for the Format and go.

**📂 Google Drive (Marketing) and 📋 Brief are populated automatically** by the procedure in "RULES — Automatic Google Drive folder + doc" right after task creation — write the initial `html_notes` with them as plain placeholders (per the templates below), then the Drive step immediately follows up with `asana_update_task` to turn them into real links. Never skip writing the placeholder lines up front just because you know they'll be filled in a moment later.

### How the links MUST be written (do not skip this)

**The label text itself is the hyperlink. The URL is never shown as visible text.**

- ✅ Correct: the words **Google Drive (Marketing)** are clickable and point to the URL.
- ❌ Wrong: `📂 Google Drive (Marketing): https://drive.google.com/...` (raw URL printed next to the label).
- ❌ Wrong: emoji + label as plain text with the link sitting separately.

To achieve this you **must** write the description with the **`html_notes`** parameter (NOT the plain `notes` parameter — plain text only auto-links a raw URL, which is the wrong look). Each resource line is an `<li>` whose emoji is followed by an `<a>` whose *visible text is the label*:

```html
<body>
<ul>
<li>🌐 <a href="https://…">Live</a></li>
<li>📂 <a href="https://drive.google.com/…">Google Drive (Marketing)</a></li>
<li>🎨 <a href="https://figma.com/…">Design</a></li>
<li>✍️ <a href="https://docs.google.com/…">Copy</a></li>
<li>📋 <a href="https://docs.google.com/…">Brief</a></li>
<li>💰 <a href="https://docs.google.com/spreadsheets/d/[SECURE_PRICING_MASTER_SHEET_ID]/edit?gid=[PRICING_TAB_GID]#gid=[PRICING_TAB_GID]">Pricing</a></li>
</ul>
<h2>Objective</h2>
One sentence describing the objective goes here as plain text — do NOT wrap it in a &lt;p&gt; tag.
</body>
```

**Asana `html_notes` is strict XML — follow these rules or the call fails with "XML is invalid":**
- Single root `<body>…</body>`, well-formed and properly closed.
- **Allowed tags only:** `<body> <h1> <h2> <ol> <ul> <li> <strong> <em> <u> <s> <code> <pre> <blockquote> <a> <hr/> <img>`.
- **NOT allowed — confirmed to hard-fail the call with "XML is invalid":** `<p>`, `<br>`/`<br/>`, `<b>`, `<i>`. **Never use `<p>` for body text** (e.g. the sentence under `<h2>Objective</h2>` or `<h2>Details</h2>`) — write that text as a plain text node directly under `<body>`, right after the heading, with no wrapping tag. Use `<ul>/<li>` for the resource list and `<h2>` for section headings; never use `<br/>` for line breaks.
- Only `<a>` may carry attributes (`href`). Any attribute on another element is rejected.
- **Every resource line in the Format's template (see the ready-made blocks below) is always included, on every task of that Format, with no exceptions and no case-by-case judgment calls.** If a URL is known, wrap the label in `<a href="...">`. If not, leave it as plain emoji + label text with no `<a>` wrapping (e.g. `✍️ Copy`, `🌐 Live`) — a visible placeholder ready to become a link the instant the doc/file/page exists. Never omit a template line because "it doesn't exist yet" — that's exactly what the unlinked placeholder is for. The only line that's never left unlinked is 💰 Pricing, since it always has the same fixed, already-known URL. 📂 Google Drive (Marketing) and 📋 Brief are effectively never left unlinked either, since the automatic Drive step fills them in immediately after task creation.

> If you ever fall back to plain `notes` (e.g. no links at all), that's fine for link-free text — but the moment a resource has a URL, use `html_notes` with linked labels.

**FIXED ORDER — do not reorder.** Resource lines must ALWAYS appear top-to-bottom in exactly the order below, no matter which links a task has or what order they appeared in the source. Omit any line that doesn't apply, but never move a line above its position here. (Common mistake to avoid: putting Brief or Copy at the top — Brief is second-to-last, Copy/Script sits above Brief.)

**Resource vocabulary (canonical order — each label is the clickable link):**
```
🌐 Live
📂 Google Drive (Marketing)
🎨 Design
✍️ Copy (or ✍️ Script)
📋 Brief
💰 Pricing  → always links to https://docs.google.com/spreadsheets/d/[SECURE_PRICING_MASTER_SHEET_ID]/edit?gid=[PRICING_TAB_GID]#gid=[PRICING_TAB_GID]
```

Each `🔖 Label` below is a **linked label** (emoji + `<a href>` whose visible text is the label) emitted via `html_notes` per the rule above — never a bare URL.

### Blog (Format = Blog)
Use this block verbatim — every line included, unlinked except Pricing:
```html
<ul>
<li>🌐 Live</li>
<li>📂 Google Drive (Marketing)</li>
<li>✍️ Copy</li>
<li>📋 Brief</li>
<li>💰 <a href="https://docs.google.com/spreadsheets/d/[SECURE_PRICING_MASTER_SHEET_ID]/edit?gid=[PRICING_TAB_GID]#gid=[PRICING_TAB_GID]">Pricing</a></li>
</ul>
```
Follow with `<h2>Objective</h2>` (one sentence, as a plain text node — no `<p>` — describing what this article is and the search/topic goal) then `<h2>Details</h2>` (more detail if available, also plain text). As each destination is created, replace that line's plain label with `<a href="...">label</a>` — the rest of the block doesn't change.

### Copy + Design (Format = Email / Landing Page / Static Ad / image Social / Print)
Use this block verbatim — every line included, unlinked except Pricing:
```html
<ul>
<li>🌐 Live</li>
<li>📂 Google Drive (Marketing)</li>
<li>🎨 Design</li>
<li>✍️ Copy</li>
<li>📋 Brief</li>
<li>💰 <a href="https://docs.google.com/spreadsheets/d/[SECURE_PRICING_MASTER_SHEET_ID]/edit?gid=[PRICING_TAB_GID]#gid=[PRICING_TAB_GID]">Pricing</a></li>
</ul>
```
Follow with `<h2>Objective</h2>` (one sentence, as a plain text node — no `<p>` — describing what this asset is and why it exists) then `<h2>Details</h2>` (more detail if available, also plain text). Link each label in-place as its destination is created.

**Special case — Landing Page framework reference:** When Format = Landing Page, add a line in `<h2>Details</h2>` (not the resource block — the right link depends on the Awareness field, which is multi-select, so picking it can need a judgment call rather than being a clean always-linkable resource) pointing to the matching framework:
- Awareness includes TOF and/or MOF → link 💻 [LP Framework (Long)](https://app.notion.com/p/[SECURE_NOTION_LP_FRAMEWORK_LONG_ID])
- Awareness is BOF only → link 💻 [LP Framework (Short)](https://app.notion.com/p/[SECURE_NOTION_LP_FRAMEWORK_SHORT_ID])
- If Awareness spans both TOF/MOF and BOF, default to the Long framework (it covers more ground) and note why in Details.

### Video / UGC (Format = Video / UGC)
Use this block verbatim — every line included, unlinked except Pricing:
```html
<ul>
<li>📂 Google Drive (Marketing)</li>
<li>✍️ Script</li>
<li>📋 Brief</li>
<li>💰 <a href="https://docs.google.com/spreadsheets/d/[SECURE_PRICING_MASTER_SHEET_ID]/edit?gid=[PRICING_TAB_GID]#gid=[PRICING_TAB_GID]">Pricing</a></li>
</ul>
```
Follow with `<h2>Objective</h2>` (one sentence, as a plain text node — no `<p>` — describing what this video is and the platform/placement) then `<h2>More Details</h2>` (more detail if available, also plain text). Link each label in-place as its destination is created.

---

## Bulk / brain-dump mode

1. Read the full input; identify every distinct deliverable.
2. Map each to a project + a single task with a conforming name and a Format.
3. Flag anything ambiguous with ❓ and ask before executing (never assume).
4. Present the complete plan in the Phase 4 format; wait for confirmation.

### Example for flaging ambiguous request
```
❓ UNCLEAR: "redo the landing page"
   → Which product? Which channel? Which campaign/project? (Format = Landing Page assumed — confirm.)
```

---

## Promote-from-Ideas mode

When an item in `💡 Ideas` is greenlit:
1. Read the idea task.
2. Confirm its destination (existing project or a new one) and all required fields.
3. Recreate it as a conforming task in the destination (or move it), carrying over resources.
4. Mark the original Ideas task `Done`/`Canceled` or note the move. Confirm before writing.
5. Create its Drive folder + Brief doc per "RULES — Automatic Google Drive folder + doc" in the destination project, same as any new task.

---

## Drive backfill mode

For an existing task that's missing its Drive folder/doc, or where the user pastes an Asana task link and asks for its Drive resources to be set up:
1. Fetch the task (`asana_get_task`) — get its exact name, project, and current `html_notes`/`notes`.
2. Run the procedure in "RULES — Automatic Google Drive folder + doc," steps 1–6, against that task.
3. Report the folder/doc links created (or reused, if they already existed).

No confirmation step is required for backfill mode beyond the user's original request — it never touches Asana fields, status, or any resource line other than 📂 Google Drive (Marketing) and 📋 Brief.

---

## Things to never do
- Never create a task or project before explicit confirmation.
- Never split one deliverable into separate Brief/Copy/Design tasks — it's one `Task`.
- Never put product, channel, or format in a project or task title — those are fields.
- Never use a TYPE prefix (BRIEF/COPY/DESIGN) in a title — retired.
- Never guess a Format, product, channel, or assignee — ask.
- Never claim the *connector* set the task type/status — the API can't; it's the project Rule that converts new tasks to Task.
- Never recreate the retired Linear labels (Type:*, Operational:*).
- Never create a campaign project per channel (no "Meta Ads" project) — channel is a field.
- Never create a duplicate Drive folder or doc for a task that already has one — always check first (see "RULES — Automatic Google Drive folder + doc," step 2).
- Never let the Drive folder/doc name drift from the exact Asana task title.
- Never skip the automatic Drive step or ask permission to run it — it always runs for every task this skill creates.
- **Never use `<p>` inside an Asana `html_notes` payload** — it hard-fails the call with "XML is invalid." Body text goes as a plain text node under `<body>`, not wrapped in `<p>`.
```

#### Skill 03: `google-drive-filer-creatives` — Asana-to-Drive 1:1 Mirror Taxonomy
*(112 lines • Full Production Taxonomy)*  
Organizes the shared marketing Drive to mirror Asana 1:1 (`Asana project -> Asana task -> identically named Drive folder`). Enables contractors to find files, route new uploads to `_Asset Library` or task folders, and gather cross-folder assets without manual hunting.

```yaml
---
name: google-drive-filer-creatives
description: >-
  THE default for any question about where a Marketing marketing file or folder lives in the shared
  Google Drive, where to put a new one, or requests to gather every file of a type from a time
  window across the Drive (e.g. "all static ads from the past 2 weeks," "every UGC video from last
  quarter"). Trigger on casual asks like "where is the brand kit?", "where do logos/fonts live?",
  "which folder has the Pinterest ads?", "where is the pricing sheet?" — and on cross-folder
  gathering requests even without a named project. The Drive mirrors Asana 1:1 (project = top
  folder, task = sub-folder, same names). Use for finding, saving, filing, or gathering any
  marketing asset: ads, LPs, UGC/video, blog articles, email/SMS, briefs, brand kit, logos, fonts,
  FDA/COA docs, NDAs, voice-overs, testimonials, funnels, pricing sheet. Lean toward using it, even
  for one-liners. Do NOT use only to write/generate content, create Asana tasks, review compliance,
  or look up live pricing. Work from the live Drive, not memory.
---

# Marketing Google Drive Filer

Three jobs, all grounded in the same mental model of the Drive: (1) **find** where an existing file
lives, (2) **place** a new file so it lands in the correct folder, and (3) **gather** every file of a
type from a time window, scattered across many folders. Jobs 1 and 2 are the common case and are
fully covered below. Job 3 is a heavier crawl-based job — read its reference file before starting one.

## The model (how the Drive is organized)

- **Top level = Asana projects.** Each Asana marketing project has one Drive folder with the exact
  same name, plus a few shared support folders whose names start with `_`.
- **Inside a project = folders named exactly like Asana tasks**, flat (no channel/status sub-layers).
  A task folder holds everything for that task.
- **`_`-prefixed folders are the exceptions** — standing/shared material that isn't a single task.
- So the path to anything is: **Asana project → Asana task → the identically-named Drive folder.**
  You reason from Asana; the Drive mirrors it.

There is a root README titled **"Where are my files?"** that explains the whole system — point
people to it for the full picture. For the full top-level folder list and the less-common edge-case
rules (funnels, testimonial-style ads, Agency, file naming, etc.), see `references/drive-map.md` —
read it whenever a Job 2 placement touches one of those cases, or whenever you need exact folder
names beyond what's inline here.

## Always work from the LIVE Drive — do not rely on a memorized tree

The structure changes as projects and tasks are added, and folders are renamed to match Asana.
**Never answer from a static map.** This applies to all three jobs. When the Google Drive connector
is available:

1. Start at the **root folder** `[MARKETING_DRIVE_ROOT_FOLDER_ID]` and list children with a `parentId = '<id>'`
   search.
2. Drill into the relevant project folder to read the **current** task-named folders and grab the
   **live folder link**.
3. When looking for something by name, search `title contains '...'`.

Return live links, never guessed ones. If the connector isn't available, say so and use the reference
list in `references/drive-map.md` as a fallback (note it may be out of date).

## Job 1 — Finding a file

1. Work out which **Asana project + task** it belongs to (ask if genuinely unclear).
2. In the live Drive, open that project folder and find the task-named folder; or search by title if
   you're not sure of the project.
3. Reply with the folder (or file) and its live link. If it isn't where it should be, check
   `_Inbox (ToSort)` and `_Archive`, and say so.

## Job 2 — Placing a file (decision logic, in order)

1. **Reusable media** not tied to one campaign (b-roll, stock imagery, voice-over, end cards, GIFs)?
   → **`_Asset Library`** (matching subfolder).
2. **Evergreen brand / legal / compliance / reference** (brand kit, logos, fonts, FDA docs, COAs,
   NDAs & release forms, playbooks, personas, naming conventions, the company pricing sheet)? →
   **`_Brand and Compliance`** (Brand Kit / FDA and Compliance / Reference Materials / Legal and
   Agreements).
3. **Otherwise it belongs to a specific Asana task** → its **project folder** → a folder **named
   exactly like the task**. If that folder doesn't exist yet, tell the user to create it (name = the
   task, verbatim) and paste the folder link onto the Asana task.
4. **Match the folder name to the Asana task exactly** (character-for-character).
5. **Dual-homed task** (in two Asana projects) → it lives under the **more specific / strategic**
   project; the other project reaches it via the Asana task link. (E.g., an email+retention task →
   Retention; an email+portal task → Patient Portal.)
6. **Can't determine confidently?** → route to **`_Inbox (ToSort)`** and say what extra info would
   place it.

Several categories have their own filing quirks — funnels, testimonials vs. testimonial-*style* ads,
content-library projects (Blog Articles, Social Media), Agency, and file-naming conventions. These are
common enough to get wrong that they're worth checking: see `references/drive-map.md` before you
finalize a Job 2 placement that touches any of those.

## Job 3 — Gathering many files across the Drive

Different shape of request: "give me every [static ad / UGC video] from the last N [days/weeks/
months]," "pull the video assets we shipped this quarter," "show me recent ad creative across
projects." Unlike Jobs 1–2, you don't know roughly where the files are — there's no folder that
collects "all static ads" across projects, so this requires crawling the Drive tree rather than a
single search.

Before starting one of these, read `references/cross-folder-listing.md` in full — it covers how to
scope the ask (asset type + time window, optionally narrowed to a named project), how to walk the
tree without missing subfolders, which folders to skip by design, and the folder-level report format
the user expects back. Don't improvise a crawl from the model above; the reference file has the
mimeType/createdTime filters and exclusion list you need to get it right.

## Reply format (Jobs 1–2)

Keep it short — a destination (or location) and a link, not an essay:

> **Put it in / Find it in:** `<full folder path>`
> **Link:** <live Drive link>
> **Why:** <one sentence>
> *(If unsure)* **Or:** `<alternative path>` — <one sentence>

If a file should be split, archived, or doesn't belong in the marketing Drive, say so plainly. If two
projects genuinely fit, ask which Asana task/project it's for rather than guessing.

(Job 3 has its own folder-level report format — see `references/cross-folder-listing.md`.)
```

#### Skill 04: `linear-dev-handoff` — Marketing-to-Engineering Handoff Engine
*(245 lines • Full Production Workflow)*  
Turns finished Asana marketing tasks into complete, self-contained Linear engineering tickets. Automatically extracts the Figma design link (`🎨 <a href="...">Design</a>`), linked Brief and Copy docs from Drive, CTA forward destinations, and quiz calculation logic so developers never need to ask back.

```yaml
---
name: linear-dev-handoff
description: "Create a Linear Engineering issue from a finished Marketing Marketing Asana task that's ready to hand off to dev. Use this skill whenever the user gives an Asana task link and says it's done/ready for dev, ready for engineering, needs a dev ticket, or wants to hand something off to engineering — even if they don't say 'Linear' by name. Also trigger on phrases like 'file this for eng', 'create the dev ticket for this', 'send this to engineering', or pasting an Asana task URL alongside any request to start engineering work. Pulls the Figma design link, campaign context, CTA destinations, and any quiz/calculation logic out of the Asana task (from its description or linked docs) so the Linear issue is self-contained and engineering never has to come back and ask for more information."
---

# linear-dev-handoff — Asana → Linear Dev Ticket Creator

Turn a finished Marketing Marketing Asana task into a single, self-contained Linear issue for
the Engineering team. The whole point of this skill is that engineering should be able to pick
up the Linear issue and build without pinging anyone — so the real work here is *reading the
Asana task carefully and completely*, not just copying a link across.

**Golden rule: if something a developer would need isn't on the Asana task, ask the user for it
— never invent it, and never ship the issue with a gap.**

---

## PHASE 1 — Pull the Asana task

The user will give you an Asana task URL. Extract the task GID from it and fetch the full task:

```
asana_get_task(task_id, opt_fields: "name,notes,html_notes,permalink_url,projects.name,projects.gid,custom_fields.name,custom_fields.display_value")
```

You need `html_notes` specifically (not just `notes`) because the resource block — where the
Figma link lives — is written as an `<a href>` inside a `<ul>`, which only shows up in
`html_notes`.

Note which project(s) the task belongs to (`Ads + LPs`, `Email Marketing`, `Website`, or
something else) — this determines what extra content you need to go find in Phase 3.

---

## PHASE 2 — Find the Figma link

The Design link lives on the 🎨 line of the task's resource block, e.g.:

```html
<li>🎨 <a href="https://figma.com/...">Design</a></li>
```

Parse `html_notes` for this line and pull the href. Two fallbacks, in order:
1. If the resource block exists but 🎨 Design has no link yet (still a bare, unlinked label),
   stop and ask the user for the Figma link — don't guess and don't proceed without it.
2. If there's no resource block at all (task wasn't built from the usual template), scan the
   full description for any `figma.com` URL. If you still can't find one, ask.

Only the link itself is needed in the Linear issue — never pull actual frames/screenshots out
of Figma for this. Engineering opens Figma directly; over-fetching design content just adds
noise.

---

## PHASE 3 — Gather the context engineering needs, by project

| Asana project | What the Linear description needs |
|---|---|
| **Ads + LPs** | Figma link + why this was built: campaign/channel context and the goal, pulled from the description **and** the linked Brief/Copy doc |
| **Website** | Same as Ads + LPs — Figma link + campaign/channel context and the goal, from the description **and** the linked Brief/Copy doc |
| **Email Marketing** | Figma link + context/goal (same sources) + **where every CTA forwards to** + **any quiz/calculation logic** |
| Anything else | Whatever the task actually contains that engineering would need — use judgment. This mapping is new and will likely need a project-specific row added later; if you hit an unfamiliar project, say so and ask the user what engineering needs for it, rather than silently improvising a format. |

**Context/goal** (all projects): don't stop at the description. Pull the initial context from the
free-text part of the description — usually under an `Objective` or `Details` heading, outside
the resource `<ul>` — but then also **open whichever doc is linked from the resource block (📋
Brief, then ✍️ Copy)** and pull in anything there that adds to the picture: the actual campaign
rationale, target audience, key message, etc. often lives in the Brief doc rather than the Asana
description itself, which is frequently just a short pointer to it. Combine both sources into
one coherent `Context` section — don't make engineering open the Brief doc themselves to
understand what they're building. Carry the actual substance across, not just a one-line label.

**CTA destinations** (Email Marketing only): check the description text first. If it's not
there, it's most commonly written inside whichever doc is linked from the resource block
(📋 Brief or ✍️ Copy) — read that doc. If you can't find CTA destinations anywhere, ask the user
rather than leaving it out — a Linear issue for an email/LP without CTA targets is exactly the
kind of gap that causes back-and-forth.

**Quiz/calculation logic** (Email Marketing, when relevant — not every task has this): check in
this order:
1. The task description itself.
2. The linked Brief doc (📋), then the linked Copy doc (✍️) from the resource block — this is
   the most common home for it.
3. If genuinely not found anywhere and the task clearly involves a quiz or calculated result,
   ask the user for it or for a link to it. Don't skip this silently — either include the actual
   logic inline, or a working link to the doc that has it. A vague "see design" is not enough.

To read a linked Google Doc, use the Drive connector's `read_file_content` against the doc's
file ID (extract it from the Drive URL).

---

## PHASE 4 — Ask for the due date

Due date is never inferred — always ask the user directly, e.g. "What due date should I set on
the Linear issue?" Accept whatever they say. If they say there isn't one ("none", "no rush", "no
due date"), just leave the Linear issue's due date empty — don't push back on this.

---

## PHASE 5 — Build the Linear issue description

**Title**: mirror the Asana task's name exactly. No prefix, no reformatting.

**Description** (Markdown, passed to `save_issue`'s `description` field): start with the
resource links, then the sections that apply for this project, then the subscriber mention at
the very end so it doesn't interrupt the technical content:

```markdown
🧑‍💻 [Asana Ticket](<asana permalink_url>)
🎨 [Figma Design](<figma url>)

## Context
<why this was built — campaign/channel and the goal, in your own words based on the task>

## CTA destinations
<Email Marketing only — one line per CTA, e.g. "Primary CTA → /checkout?plan=monthly". Omit this
whole section for other projects.>

## Calculation logic
<Email Marketing only, and only when the task involves a quiz/calculated result. Either the
logic itself, or a working link to the doc that has it, e.g. 🧮 [Calculation Logic](<doc url>).
Omit entirely if not applicable.>

## What to build
<concrete description of the deliverable, drawn from the Asana task's title and notes — enough
that someone who has never seen the campaign could start work>

---
cc @lead-engineer
```

The `@lead-engineer` mention is how subscription actually works here — Linear's connector has no
direct "add subscriber" field, but @-mentioning a user in the description auto-subscribes them.
Leave it as its own line at the bottom so it reads as a notification, not part of the spec.

Drop any section that doesn't apply (don't leave empty headings). For an unfamiliar project
(Phase 3's "anything else" row), use `Context` + `What to build` as the baseline and add whatever
else the user told you was needed.

---

## PHASE 6 — Preview, then confirm

Before creating or changing anything, show the user:

```
📋 PLAN

[LINEAR ISSUE]  <title>
                Team: Engineering | Status: Todo | Assignee: lead-dev@company.com
                Due: <date, or "none">
                ── description preview ──
                <the full description you built in Phase 5>

[ASANA UPDATE]  Adding 🧑‍💻 Linear Ticket link to the top of the resource block
                (link filled in once the Linear issue exists)

Type "confirm" to create it, or tell me what to change.
```

Wait for explicit confirmation before writing anything. If the user asks for changes, update and
re-show.

---

## PHASE 7 — Execute

1. **Create the Linear issue**:
   ```
   save_issue(
     team: "[ENGINEERING_TEAM_UUID]",   # Engineering
     title: <asana task name, verbatim>,
     description: <markdown from Phase 5>,
     state: "[TODO_STATE_UUID]",  # Todo
     assignee: "lead-dev@company.com",
     dueDate: <ISO date, or omit entirely if none given>
   )
   ```
   Leave every other field untouched — no priority, no labels, no Linear project/milestone, no
   cycle, no estimate. The user was explicit that everything beyond what's listed above stays
   empty.

2. **Write the Linear link back onto the Asana task.** Fetch the task's current `html_notes`,
   insert a new first line at the very top of the resource `<ul>` (above 🌐 Live — this line
   always goes first, before anything else in the block):
   ```html
   <li>🧑‍💻 <a href="<linear issue url>">Linear Ticket</a></li>
   ```
   then `asana_update_task(task_id, html_notes: <full reconstructed html_notes>)`. Keep every
   other line in the resource block exactly as it was — this is an insert, not a rewrite.
   Remember `html_notes` is strict XML: single root `<body>`, only the allowed tags, and only
   `<a>` may carry attributes.

---

## PHASE 8 — Report back

Give the user both links:
- The new Linear issue URL
- Confirmation that the Asana task now links to it

If anything had to be asked for in Phase 2–3 (missing Figma link, missing CTA destinations,
missing calc logic, or an unfamiliar project), call that out explicitly in the summary so the
user knows it's a genuine gap in the Asana task, not something you skipped.

---

## Reference — fixed values (verify if a call ever fails; these can change)

```
Linear team (Engineering):       [ENGINEERING_TEAM_UUID]   (key: COC)
Linear status "Todo":            [TODO_STATE_UUID]
Assignee (lead-dev):           [LEAD_DEV_UUID]
Subscriber mention (lead-engineer):     @lead-engineer   (displayName — mention in description, not a field)
```

Asana projects checked and confirmed to share the same 5 custom fields (Channel, Discipline,
Awareness, Product, Format) — none of them carry Figma/CTA/calc-logic as a structured field, so
all of that always comes from reading the description and linked docs, never from custom fields:
`Ads + LPs`, `Email Marketing`, `Website`.

Asana resource block — fixed order, this skill's line always goes first:
```
🧑‍💻 Linear Ticket   ← this skill adds this, always at the top
🌐 Live
📂 Google Drive (Agency)
📂 Google Drive (Marketing)
🎨 Design
✍️ Copy (or Script)
📋 Brief
💰 Pricing            ← always last
```

---

## Things to never do

- Never create the Linear issue or edit the Asana task before the user confirms the plan.
- Never invent a Figma link, CTA destination, or calculation logic that isn't actually on the
  task or its linked docs — ask instead.
- Never set priority, labels, a Linear project/milestone, cycle, or estimate — those stay empty.
- Never rewrite the Asana resource block wholesale — only insert the new Linear Ticket line and
  leave every other line untouched.
- Never pull Figma frames/screenshots into the issue — the link is enough.
```

---

### 3.2 Bidirectional Cross-Linking: Figma $\leftrightarrow$ Asana $\leftrightarrow$ Google Drive

The most frequent source of waste in creative operations is context switching—spending 10 minutes trying to figure out which Figma screen matches an Asana ticket.

I instituted a mandatory **Bidirectional Cross-Linking Architecture**:
* **Inside Figma:** Every visual section, artboard cluster, and video storyboard contained embedded hyperlinks pointing directly to its corresponding Asana task and Google Drive asset folder.
* **Inside Asana:** Every task ticket contained direct, one-click links to the exact Figma frame and the dedicated Google Drive deliverables folder.
* **Consolidated Figma Asset Clusters:** I created a centralized Figma master page holding reusable asset clusters (header variants, trust badges, doctor quotes, testimonial modules) so designers could grab approved components instantly instead of hunting through 20+ historical project files.

---

### 3.3 Operational Duality Panel: Scaffolding vs. Physical Guardrails

Every applied AI system in operations must clearly balance automated leverage against hard, physical constraints:

| ⚡ How Powered It Is (Autonomous Scaffolding) | 🛑 Where It Is Purposefully Limited (Physical Guardrails) |
|---|---|
| **Instant Project Provisioning:** Creating an Asana task via `pm-asana` automatically provisions Google Drive folders and brief docs in <2 seconds. | **Zero Autonomous Ad Deployment:** No AI tool has write access or API publishing credentials to Meta Ads Manager, Google Ads, or CMS production environments. |
| **Real-Time Pricing Synthesis:** `pricing` instantly pulls verified pricing from the Master Sheet to draft ad copy variations with zero manual lookup. | **100% Mandatory Human Sign-Off:** Karol personally reviews and signs off on every customer-facing asset (70–100 assets/wk) before ad operations can launch it. |
| **Automated Handoffs & File Routing:** `linear-dev-handoff` packages complete tickets for engineering; `google-drive-filer-creatives` routes files to exact folders. | **Manual Auditing of Spoken Video & Captions:** AI cannot be trusted to detect subtle audio nuance, sarcasm, or spoken medical promises in UGC; video dialogue is verified manually. |
| **First-Line Compliance Pre-Screening:** Upgraded regulatory skill pre-screens text for banned claims, saving hours of manual back-and-forth. | **Strict File Permissions:** Contractors have upload and read access confined to their active project folders, preventing accidental overwrites of master brand assets. |

---

## § 04. Deterministic QA Gates & Zero-Downtime Migration

### 4.1 The Pre-Deployment Quality Gate: 100% Human-in-the-Loop Sign-Off

While custom Claude skills handled first-pass screening and file routing, I served as the **sole pre-deployment quality gatekeeper**, reviewing **70 to 100 creative assets every week**.

Every asset followed a strict, non-negotiable inspection protocol before receiving deployment clearance:

```
Deterministic Pre-Deployment Inspection Pipeline:
[Contractor Draft] 
       │
       ▼
[Claude Skill Pre-Screen] ──── (Automated check for prohibited keywords & missing disclaimers)
       │
       ▼
[Karol Sole QA Gatekeeper]
       ├─► 1. Healthcare Compliance: Zero unapproved medical promises, mandatory compounded drug disclaimer present.
       ├─► 2. Spoken Audio & Video Captions: Manual listen to UGC dialogue; 100% match between spoken audio and captions.
       ├─► 3. Single-Source Pricing Check: Verified dollar-for-dollar against Master Pricing Google Sheet via the pricing skill.
       ├─► 4. 6-Viewport Responsive Matrix: Desktop (L/M/S) and Mobile (L/M/S) verification on landing pages.
       └─► 5. Conversion Integrity: Legible typography, correct CTA anchors, no clipped disclaimer text.
       │
       ▼
[Deployment Clearance] ───> Production Launch (Meta Ads, Google Ads, Live Web)
```

#### Detailed Rejection Battlecard: What Got Sent Back

To maintain a zero-defect record, I enforced clear rejection triggers across all creative formats:

| Category | Rejection Trigger / Defect | Remediation Action Required | Operational Frequency |
|---|---|---|---|
| **Healthcare Regulatory** | Spoken UGC creator says: *"I lost 15 lbs in 3 weeks with no diet change."* | **Immediate Rejection.** Video must be re-edited or re-recorded. Strict rule: no specific poundage claims tied to unrealistic timeframes; must emphasize lifestyle integration. | ~12% of first drafts |
| **Regulatory Disclaimers** | Static banner omits the mandatory compounded medication disclaimer or renders it in unreadable contrast (<4.5:1). | **Design Revision.** Add standardized disclaimer text block with high-contrast font meeting legibility thresholds. | ~15% of first drafts |
| **Pricing Drift** | Copywriter lists Semaglutide at *"Only $179 for your first month"* based on an old promotional brief. | **Immediate Rejection.** Run copy through `pricing`; correct price to $199 per Master Pricing Sheet. | 0% post-skill launch (down from 25%) |
| **Video Audio / Caption Drift** | Video captions say *"FDA-approved GLP-1"* while the spoken voiceover says *"Compounded GLP-1."* | **Subtitle Correction.** Compounded drugs are not FDA-approved; they are compounded in 503A/503B pharmacies. Captions must reflect exact regulatory wording. | ~8% of video assets |
| **Responsive Mobile Layout** | Landing page CTA button or legal footnote overlaps pricing grid on mobile screens (375px viewport). | **Front-End Fix.** Adjust CSS flexbox wrap and padding to ensure 100% readability across all 6 viewports. | ~10% of landing pages |

---

### 4.2 The 6-Viewport Responsive QA Protocol

Because over 75% of telehealth patient acquisition traffic originates from mobile devices, desktop-only QA is an operational failure. I instituted a systematic **6-viewport responsive testing matrix** executed across 20+ active landing pages daily:

```
The 6-Viewport Responsive Matrix:
┌─────────────────────────────────┬─────────────────────────────────┬─────────────────────────────────┐
│     Desktop Large (1440px)      │     Desktop Medium (1280px)     │     Desktop Small (1024px)      │
│  Full wide-screen layout check  │    Standard laptop resolution   │   Small desktop / tablet landscape│
├─────────────────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│      Mobile Large (428px)       │      Mobile Medium (390px)      │      Mobile Small (375px)       │
│     iPhone Pro Max / Android    │    Standard iPhone 14/15/16     │   Compact mobile / iPhone SE    │
└─────────────────────────────────┴─────────────────────────────────┴─────────────────────────────────┘
```

1. **Desktop Large (1440px):** Verifies hero visual composition, maximum container widths, and multi-column comparison tables.
2. **Desktop Medium (1280px):** Standard laptop baseline; confirms header navigation, floating CTA bars, and FAQ toggles.
3. **Desktop Small (1024px):** Tablet landscape / small laptop break; ensures multi-column layouts gracefully transition without horizontal scrollbars.
4. **Mobile Large (428px):** Modern flagship smartphones; validates sticky checkout footers, form field heights, and font scaling.
5. **Mobile Medium (390px):** The core consumer mobile baseline; validates that tap targets exceed 44x44px and pricing cards do not truncate.
6. **Mobile Small (375px):** The stress-test viewport; ensures legal disclaimers, compounded medication disclosures, and dosage selectors remain fully legible without clipping.

---

### 4.3 Zero-Downtime Migration: 500 Tasks from Linear to Asana

As the creative and marketing team expanded, leadership mandated a full operational migration from Linear (which was engineering-centric) to Asana (which supported visual marketing boards, custom approval workflows, and client-friendly timeline views).

Migrating an active marketing team with **500 active tasks, ongoing creative sprints, and tight ad delivery deadlines** is high-risk. A single dropped brief or missed deadline can halt an ad campaign spending thousands of dollars per day.

I executed the migration with a **Zero-Downtime Cutover Strategy**:
1. **5-Week Foundation Runway Before Migration:** Recognized that migrating into an unstructured environment would only accelerate disorder. Dedicated five deliberate weeks to foundational clean-up: restructuring the entire marketing Google Drive, establishing the Master Pricing Sheet, building the Claude skill suite, and codifying team SOPs before touching active work.
2. **Zero-Downtime Dual-Live Execution:** Both Linear and Asana remained 100% live and operational throughout the cutover. Assisted by Claude, I migrated 500 active tasks into Asana with complete metadata, dependencies, and Drive brief links.
3. **Visual Redirects & Bidirectional Pointers:** To prevent contractors from mistakenly continuing work in deprecated tickets, every migrated Linear issue was branded with prominent visual indicators (e.g. 🔄 / ➡️ `MIGRATED TO ASANA`) containing direct hyperlinks jumping to the active Asana counterpart.
4. **Contractor Enablement & Shadowing:** Authored step-by-step SOPs for the 15 distributed contractors. Shadowed the incoming Project Manager through daily operations, had him shadow my review cycles, and verified operational independence before final handoff.
5. **The Result:** Transferred all **500 active tasks with zero dropped deliverables**, zero missed ad launch deadlines, and complete team adoption on day one.

---

## § 05. Evaluated Alternatives & Trade-Offs

When engineering high-velocity operations, choosing what *not* to build is just as critical as choosing what to build. Below is the 3-column diagnostic matrix evaluating the technical and operational trade-offs made across the pipeline:

| Architecture Decision | Evaluated Alternatives | Why Chosen Over Alternative | Real-World Trade-Off Accepted |
|---|---|---|---|
| **Data Contract Architecture** | Enterprise PIM / DAM software vs. Master Pricing Google Sheet + `pricing` | **Master Google Sheet + `pricing`:** Deployed in 2 hours with zero software licensing costs. Enabled immediate natural-language querying for the entire team without teaching contractors complex new software. | Required strict cell-locking, version protection, and read-only access for contractors to prevent accidental schema corruption, routing all structural catalog updates through Ops. |
| **Regulatory QA Verification** | Fully automated AI ad publishing vs. 100% Human-in-the-Loop Sign-Off | **100% Human-in-the-Loop Gate:** In healthcare telehealth, an FDA warning letter can shut down a business. AI cannot detect nuanced video sarcasm or evaluate regulatory tone. Human review was non-negotiable. | Accepted that Karol remained a personal review bottleneck (70–100 assets/week), requiring structured daily QA time blocks to prevent launch delays. |
| **Toolchain Interconnection** | Disconnected Slack pings vs. Bidirectional Cross-Linking (Figma $\leftrightarrow$ Asana $\leftrightarrow$ Drive) | **Bidirectional Cross-Linking:** Embedded hyperlinks eliminated context switching, file hunting, and lost briefs. Team members could jump from a design frame directly to the task ticket in one click. | Required strict onboarding discipline: contractors had to be coached and audited to ensure they pasted links into task fields during every submission. |
| **Landing Page Maintenance** | Hardcoded page edits vs. Centralized Single-Source Reusable Components | **Centralized Components:** Centralized recurring data components across 40 actively managed landing pages (audited from 100 live pages) so pricing, customer milestone counters ("Over 25,000 patients served"), review tallies, and legal disclaimers updated once in master code and propagated across all live landers simultaneously. | Demanded an intensive upfront engineering collaboration to refactor legacy code across 40 pages and decommission 60 stale pages before operational savings materialized. |
| **Regulatory Tooling Strategy** | Relying exclusively on expensive external legal counsel vs. Overhauling Internal Claude Skill | **Overhauled Claude Skill as First-Line Filter:** Kept legal counsel for edge cases while empowering copywriters to catch 95% of basic compliance errors before submission. | Required constant prompt maintenance: whenever FDA policy or company medical guidelines shifted, the Claude system prompt had to be manually updated. |
| **Project Management Stack** | Staying on engineering-focused Linear vs. Migrating 500 Tasks to Marketing Asana | **Zero-Downtime Migration to Asana:** Asana provided visual Kanban approval boards, native guest permissions for freelance creators, and customizable intake forms. | Required an upfront 5-week operational runway cleaning Drive taxonomy and standardizing pricing before migrating 500 active tasks, ensuring a pristine target environment rather than rushing a cutover. |

---

## § 06. Retrospective & Senior Operator Lessons

### 6.1 Clean Data Architecture Must Precede Automation

The most common failure in modern marketing operations is attempting to automate a broken process. When teams experience creative chaos, leadership often rushes to buy expensive AI copywriting tools or Digital Asset Management (DAM) platforms.

If I had built the Claude skills on top of the messy Google Drive and chaotic pricing spreadsheets, the AI would have hallucinated conflicting prices and pointed contractors to obsolete asset folders. **Fixing the data architecture was the essential foundation:**
1. Cleaning and reorganizing the Google Drive into an intuitive, documented hierarchy.
2. Establishing a single master Google Sheet for pricing truth.
3. Centralizing duplicated landing page code into single-source components.

Only after the foundational data contracts were clean did the Claude skills become force multipliers. Automation applied to clean architecture creates velocity; automation applied to messy data creates automated chaos.

---

### 6.2 The Power of "Invisible" Tooling for Distributed Contractors

Freelance creative contractors (video editors, copywriters, UGC creators) work across multiple client accounts. If you force them to adopt complex, friction-heavy software or navigate 10-step administrative checklists, they will bypass the process, submit unvetted files in Slack DMs, and introduce defects.

By embedding the automation into tools they already used—Claude, Google Drive, Asana, Linear, and Figma—the process became virtually invisible:
* Copywriters didn't need to read a 40-page compliance manual; they ran drafts through the updated Claude skill and queried `pricing` for instant feedback.
* Designers didn't need to hunt through Drive; they clicked the link embedded directly inside their Figma frame.
* Project managers didn't need to manually set up project directories; `pm-asana` handled folder and brief creation in the background.
* Developers received self-contained Linear tickets via `linear-dev-handoff` with zero missing links or specs.

When you make the right way the easiest way, compliance stops being a chore and becomes the natural path of least resistance.

---

### 6.3 AI Accelerates Execution; Humans Own Accountability

In regulated industries like telehealth, fintech, and legal services, autonomous AI deployment is a liability. The greatest value of applied AI in creative operations is not replacing human judgment, but eliminating the administrative sludge that surrounds human judgment.

By letting Claude skills handle folder provisioning, brief document formatting, pricing retrieval, and first-line compliance pre-screening, I saved **15 hours per week of team grunt work**. That recovered time was directly reinvested where it mattered most: **meticulous, human-in-the-loop QA on spoken video dialogues, patient claims, and responsive mobile layouts.**

The result was a high-velocity marketing engine shipping 70–100 assets a week with startup speed, zero regulatory defects, and enterprise-grade reliability.
