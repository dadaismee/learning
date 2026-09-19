# learning

**Provably efficient interfaces and DSLs for researchers** — *cognetics MSc*

---

## Identity

I design **reading–writing tools and DSLs for researchers** using **cognetics**: an engineering approach that treats interaction as a science. Instead of "nice UX," I optimize for **measurable cognitive throughput**—tasks per hour, keystrokes, errors, search cost—tailored to domain-specific workflows: reading/annotating, modeling, data cleaning, writing.

---

## Curriculum: 3 Seasons → 9 Months (Jul 2026 – Jun 2027)

Each season = one validated prototype + measurement report → chapter/essay for the book.

| Season | Focus | Artifact | Validation |
|--------|-------|----------|------------|
| **S1** | Extraction + S/R/O maps | Chrome ext: highlight → `[S,R,O,domain]` → side-panel map | GOMS/KLM accuracy ±15%, **≥30% fewer keystrokes** vs manual |
| **S2** | DSL + formal modeling | Query DSL + interpreter for maps (awk/JS) | GOMS accuracy ±15%, **≥40% step reduction** vs UI |
| **S3** | Tactile cognetics | Tactile panel: encoder/buttons → DSL commands | Fitts+GOMS accuracy ±15%, **≥50% mode-switch reduction** |

**Protocol:** [`MEASUREMENT_PROTOCOL.md`](./MEASUREMENT_PROTOCOL.md) — task-agnostic, handles both existing-workflow and first-of-kind cases.

---

## Season 1 (12 нед): Extraction + S/R/O Maps

**Core skills:**
- 30 Days of JavaScript (daily)
- Scrimba Chrome Extension Course
- awk: awkexercises + Effective AWK (patterns, fields, arrays, pipelines)

**Theory (parallel):**
- Pirolli & Card — Information Foraging (scent, patch, cost)
- Raskin — Humane Interface (modelessness, visibility, consistency)
- Kirsh — Thinking with External Representations / Intelligent Use of Space
- Tversky — Spatial Thinking

**Artifact:** Chrome extension — highlight → `[S, R, O, domain]` → side-panel map (graph/tree)

**Validation (Case A — existing workflow: manual copy-paste to Obsidian):**
- Baseline: 5 runs manual map creation
- KLM model for new interface
- 5 runs with extension
- **Pass:** measured/predicted ∈ [0.85,1.15], **≥30% fewer keystrokes**, SD reduced, errors not increased

**Reading schedule:**
- Sep: Raskin (ch.1-6), 30 Days JS (days 1-15), Pirolli ch.1-4
- Oct: 30 Days JS (days 16-30), Scrimba Chrome Ext, awkexercises
- Nov: Effective AWK, prototype S1-MAP-10, validation runs

---

## Season 2 (12 нед): DSL Engineering + Formal Modeling

**Core skills:**
- SICP ch.1-4 (procedures, data abstraction, interpreters, register machines)
- Haggarty — Discrete Math for Programmers (relations, graphs, logic, proof)

**Theory:**
- Card, Moran, Newell — GOMS/KLM models (ch. on keystroke-level, throughput)
- Tufte — Envisioning Information (layers, small multiples, narrative)
- About Face — Goal-Directed Design method cards (personas, scenarios)

**Artifact:** DSL + interpreter for map queries (`find relation X between A,B`, `merge maps by subject`, `transitive closure`, `export markdown`)

**Validation (Case A — existing UI clicks):**
- Baseline: 5 runs manual UI merge/closure/export
- GOMS model for DSL workflow
- 5 runs with DSL
- **Pass:** measured/predicted ∈ [0.85,1.15], **≥40% step reduction**, DSL expresses ≥80% tasks in ≤3 lines

**Reading schedule:**
- Dec: SICP ch.1-2, Haggarty (sets, relations, graphs)
- Jan: SICP ch.3-4, Haggarty (logic, proof), GOMS model writing
- Feb: DSL + interpreter build, validation runs

---

## Season 3 (12 нед): Tactile Cognetics

**Core skills:**
- Makeability Lab Physical Computing (sensors, actuators, microcontrollers)
- Arduino/ESP32: encoder, buttons, OLED, USB/serial, MQTT

**Theory (parallel):**
- Tufte — Beautiful Evidence (evidence presentation, causality)
- "Dialogue of the Senses" — embodied interaction
- Future of Scholarly Communication (course — domain workflows)
- Kirsh — Embodied Cognition / Intelligent Use of Space

**Artifact:** Tactile panel — encoder (navigate graph), buttons (mode switch: read/annotate/query), DSL command execution

**Validation (Case B — novel, no existing tactile panel):**
- Theoretical minimum: KLM+Fitts ideal model
- Proxy baseline: 5 runs keyboard-only DSL execution
- Target = theoretical_min × 1.3
- 5 runs with tactile panel
- **Pass:** measured/predicted ∈ [0.85,1.15], intervention ≤ target, **≥50% mode-switch reduction**, ≥20 cmd/min sustained

**Reading schedule:**
- Mar: Makeability Lab projects 1-6, Tufte Beautiful Evidence
- Apr: Makeability Lab projects 7-12, panel build, Dialogue of the Senses
- May: Panel integration with DSL, validation runs, Future of Scholarly Comm course

---

## What's Cut / Deferred

| Resource | Status | Reason |
|----------|--------|--------|
| Nand2Tetris 1-12 | ❌ Drop | Systems programming ≠ cognetics. Petzold *Code* (2 wks) if mental model needed |
| Math/Algo courses (Yandex) | ❌ Drop | Covered by Haggarty + SICP |
| Bayesian/CogSci (probmods, Tenenbaum) | ❌ Drop | Only if validation task demands it |
| Ingold / Suchman / Galloway / Illich / Thoreau | ⏸️ Defer | Philosophy for book — after prototypes |

---

## Commit Convention

- `day-05: arrays, filter+map` — 30 Days JS
- `awk: frequency analysis of my texts`
- `sicp: 1.2 procedures as abstractions`
- `dsl: merge-map command`
- `physcomp: encoder debounce`

Track history: `git log --oneline -- sicp/`

---

## Daily Rhythm

| Time | Activity |
|------|----------|
| Morning (1.5-2h) | Main track code/build |
| Evening/Weekend (30-45m) | Theory reading |
| Saturday | Integration: prototype + measurement run |
| Sunday | JOURNAL.md entry + metric log |

**JOURNAL.md format:**
```
YYYY-MM-DD | RUN | season | task_id | run | phase | time_s | klm_ops | clicks | moves | mode_sw | errors | pauses | notes
```

---

## References

- [`MEASUREMENT_PROTOCOL.md`](./MEASUREMENT_PROTOCOL.md) — full validation protocol
- [`JOURNAL.md`](./JOURNAL.md) — daily log + metric log
- Book harvest: each season → chapter/essay (S1: "Extracting structure", S2: "DSLs as cognitive prostheses", S3: "Objects-to-think-with")