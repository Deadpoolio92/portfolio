# Portfolio German Localization Glossary (`de-glossary.md`)

> **Canonical Reference** for the `/de/` mirror of Karol Jasztal's AI Systems Engineering & Operations Portfolio.  
> **Voice:** Mode 1 — *Authentic Operator (Klartext)*: Direct, punchy, senior builder German.  
> **Address:** 1st-person *"Ich"* (narrator) · Direct **"du"** (reader address in UI, callouts, and prompts).

---

## 1. Core Rules

1. **Translate:** All prose, headings, card teasers, HUD/KPI labels, table headers/descriptions, callouts, navigation UI, and embedded production prompts (`PROMPT_01`–`PROMPT_0N`).
2. **Keep Verbatim (Never Translate):**
   - Code blocks, regexes, CLI commands, and terminal logs.
   - JSON/YAML schema **field keys** (translate only the human descriptions/comments).
   - Verified numbers, percentages, currencies, and metrics (`40h → 7h`, `-82.5%`, `1,320h`, `11,000+`).
   - Brand & product names (`Google Ads`, `HubSpot`, `Asana`, `Figma`, `Linear`, `GitHub Pages`).
3. **Typography & Layout Guardrails:**
   - Keep `<h1>` headlines concise so they never wrap onto a 4th line on desktop (`max-width: 1140px`).
   - Keep HUD cell labels and `.mini-kpi-grid` labels short (1–2 words) so boxes stay aligned.

---

## 2. UI & Navigation Terms

| English | German (Canonical) | Notes |
| :--- | :--- | :--- |
| Case Studies Hub | Fallstudien-Übersicht | Top nav breadcrumb on `de/index.html` |
| Portfolio Overview | Portfolio-Übersicht | Top nav back link on case studies |
| Production Case Studies | Produktive Fallstudien | Hub section 01 title |
| View Case Study | Fallstudie ansehen | Primary card CTA |
| Coming Soon | Demnächst | Roadmap WIP cards |
| Toggle Light/Dark Theme | Hell-/Dunkel-Modus umschalten | Theme button title/aria-label |
| Switch to English | Auf Englisch wechseln | Language button title on `/de/` pages |
| Download PDF | PDF herunterladen | Header/card action |
| Download Markdown | Markdown herunterladen | Header action |
| Copy Markdown to clipboard | Markdown in Zwischenablage kopieren | Header action |
| Copied! | Kopiert! | Tooltip feedback |
| Copy failed | Kopieren fehlgeschlagen | Tooltip error |

---

## 3. Keep in English (DACH Tech & Ops Standard)

These terms are standard in German senior tech/ops teams and stay English (with German articles/inflections where needed):

- **Zero-Trust**
- **Linter** / **Regex-Linter**
- **Prompt** / **Prompt-Bank**
- **Pipeline**
- **Webhook**
- **RevOps** (*Revenue Operations*)
- **Human-in-the-Loop (HITL)**
- **Single Source of Truth**
- **Schema** / **Datenvertrag** (*Data Contract*)
- **Workflow**
- **Compliance**
- **ROI**
- **Negative Keywords** *(DACH SEA standard)*
- **Responsive Search Ads (RSAs)** *(DACH SEA standard)*
- **Harness / Harnesses** *(e.g., Agenten-Harnesses)*
- **Exit Code** *(e.g., Exit Code 2)*
- **Denylist**
- **Primitives / Produktions-Primitives**
- **Upstream-Drift**
- **Token-Burn**
- **Subagent** *(Pl. Subagenten)*
- **Tool-Stripping** *(physisches Tool-Stripping)*
- **Creative-Assets** / **Creative-Ops**

---

## 4. Translated Domain & Operator Terms (Mode 1 *Klartext*)

| English | German (Canonical) | Context / Notes |
| :--- | :--- | :--- |
| Grunt Work | Routinekram / Fleißarbeit | Informal operator punch; avoid stiff *"manuelle Tätigkeiten"* |
| AI Copy Slop / Slop | KI-Einheitsbrei / KI-Müll | Direct-response tone |
| Sanity Check | Plausibilitätscheck | Keep crisp |
| Cycle Time | Durchlaufzeit | HUD / KPI label |
| Annual ROI | Jahres-ROI | HUD / KPI label |
| Time Saved | Zeitersparnis | KPI sub-label |
| Audited Turnaround | Geprüfte Durchlaufzeit | HUD sub-label |
| State Machine (FSM) | Zustandsautomat (FSM) | Technical architecture |
| Out-of-Band OS Firewall | Out-of-Band-OS-Firewall | Security architecture |
| Decision Trade-Offs | Architektur-Trade-offs | Section title |
| Retrospective & Principles | Retrospektive & Prinzipien | Section title |
| Operational Dossiers | Operative Fallstudien | Eyebrow / subtitle |
| Production Proof | Praxisbeweise / Beweise aus dem Produktivbetrieb | Avoid literal *"Produktive Beweise"* |
| Throughput | Durchsatz | KPI label |
| Capacity Saved | Kapazität | KPI label |
| Latency | Latenz | KPI label |
| Single-Intent Ad Groups | Single-Intent-Anzeigengruppen | Paid search structure |
| Payroll | Lohnkosten *(Prose)* / Payroll *(compact HUD)* | |
| Landing Page | Landingpage | One word in German |
| Compounded (Drugs) | individuell hergestellte (compounded) Präparate / Compounded Drugs | Healthcare Compliance context |
| Speed-to-Lead | Speed-to-Lead / Reaktionszeit auf Leads | Keep `Speed-to-Lead` in DACH RevOps/Sales context |
| Call Cadence | Anrufkadenz | Avoid unadapted *"Cadences"* |
| Self-Disclosure (Real Estate) | Selbstauskunft / Käufer-Selbstauskunft | Real estate qualification |
| Mortgage Consultant | Finanzierungspartner / externer Finanzierungsberater | External financing handoff |
| Statutory Review Buffer | gesetzliche Prüffrist / 17-Tage-Prüffrist | Notary contract review window |
| Modal Fatigue | Modal-Hopping / Tab- und Modal-Hopping | CRM UI friction |
