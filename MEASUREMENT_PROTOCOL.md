# Measurement Protocol — Task-Agnostic

## Purpose
Validate that every prototype meets **provably efficient** claims:
- Predicted performance (GOMS/KLM/Fitts) matches measured within ±15%
- Efficiency gain vs baseline ≥ target (or vs theoretical minimum when no baseline exists)

---

## 1. Define the Task (per season)

Each season picks **one repeatable task** with:
- Clear start/end state
- Identical input data across runs
- Single success criterion

| Season | Example Task |
|--------|--------------|
| S1 | Create S/R/O map from 10 highlights on a page |
| S2 | Merge 3 maps, find transitive closure, export markdown |
| S3 | Execute 5 DSL commands via tactile panel |

**Template:**
```
TASK_ID: S1-MAP-10
DESCRIPTION: Create S/R/O map from 10 highlights
INPUT: 10 predefined highlights on test page (fixed URLs)
SUCCESS: Map rendered with 10 nodes, correct S/R/O/domain
```

---

## 2. Baseline Strategy (Two Cases)

### Case A: Existing Workflow Exists
**When:** User currently does this task manually (copy-paste, UI clicks, keyboard)
**Protocol:** 5 runs of current workflow → record metrics

### Case B: No Existing Tool (First-of-Kind)
**When:** Task is novel, no tool exists (e.g., S1 map creation from highlights)
**Protocol:** 
1. **Theoretical minimum** — KLM model of *ideal* workflow (what expert would do with perfect tool)
2. **Proxy baseline** — nearest adjacent workflow (e.g., "create mindmap in Obsidian" or "annotate in Zotero")
3. **Target** — Set absolute performance target from KLM ideal (not relative gain)

**Decision rule:**
```
IF existing_workflow_exists:
    baseline = measure_existing(5 runs)
    target_gain = 30%  # relative to baseline
ELSE:
    theoretical_min = KLM_ideal_workflow()
    proxy_baseline = measure_adjacent_workflow(5 runs)
    target = theoretical_min * 1.3  # allow 30% overhead
```

---

## 3. Metrics to Capture (Per Run)

| Metric | Unit | Capture Method |
|--------|------|----------------|
| `time_s` | seconds | `date +%s.%N` start/end |
| `keystrokes_klm` | KLM ops | Manual KLM decomposition (K=0.2s, P=1.1s, H=0.4s, M=1.35s) |
| `clicks` | count | Screen recording review |
| `mouse_moves` | count | Screen recording review |
| `mode_switches` | count | Window/tab/mode transitions |
| `errors` | count | Undo, retry, correction actions |
| `cognitive_pauses` | count | Visible pauses >2s (mark in video) |

**Per-run log line:**
```
RUN | season | task_id | run_n | time_s | klm_ops | clicks | moves | mode_switches | errors | pauses | notes
```

---

## 3.1 KLM Operators Reference

| Op | Symbol | Time | Description |
|----|--------|------|-------------|
| Keystroke | K | 0.20s | Single key press (incl. modifier) |
| Point | P | 1.10s | Mouse to target (Fitts: distance/size) |
| Homing | H | 0.40s | Hand move keyboard↔mouse |
| Mental | M | 1.35s | Cognitive step (decide, recall, verify) |
| System | R | variable | System response (measure separately) |

**KLM prediction formula:**
```
predicted_time = Σ(K×0.20 + P×1.10 + H×0.40 + M×1.35) + Σ(R_system)
```

---

## 4. Experimental Procedure

### Phase 0: Task Definition (before any code)
1. Write `TASK_ID`, `DESCRIPTION`, `INPUT`, `SUCCESS`
2. Choose baseline strategy (Case A or B)
3. Write KLM model for **ideal workflow** (theoretical minimum)

### Phase 1: Baseline (if Case A) or Proxy/Theoretical (if Case B)
- 5 runs, same input data, randomised order
- Record all metrics in JOURNAL.md
- Compute mean ± SD

### Phase 2: Build + KLM Model for New Interface
- Decompose new workflow into KLM operators
- Write predicted_time

### Phase 3: Intervention Measurement
- 5 runs with new tool, same input data
- Same metrics captured
- Compute mean ± SD

### Phase 4: Validation
| Check | Pass Criteria |
|-------|---------------|
| Model accuracy | `measured_mean / predicted ∈ [0.85, 1.15]` |
| Efficiency (Case A) | `intervention_mean ≤ 0.7 × baseline_mean` |
| Efficiency (Case B) | `intervention_mean ≤ 1.3 × theoretical_min` |
| Consistency | `SD_intervention ≤ SD_baseline` (or ≤ 15% of mean) |
| Error rate | `error_rate_intervention ≤ error_rate_baseline` |

---

## 5. JOURNAL.md Entry Format

```
YYYY-MM-DD | RUN | season | task_id | run | phase | time_s | klm_ops | clicks | moves | mode_sw | errors | pauses | notes
2026-09-15 | RUN | S1 | S1-MAP-10 | 1 | baseline | 142 | 89 | 12 | 8 | 3 | 1 | 2 | copy-paste to Obsidian
2026-09-15 | RUN | S1 | S1-MAP-10 | 2 | baseline | 138 | 87 | 11 | 7 | 3 | 0 | 1 |
2026-09-20 | RUN | S1 | S1-MAP-10 | 1 | intervention | 92 | 54 | 4 | 3 | 1 | 0 | 0 | Chrome ext v0.3
```

---

## 6. Validation Report Template (End of Season)

```markdown
# Season N Validation Report

## Task
- TASK_ID: S1-MAP-10
- Description: Create S/R/O map from 10 highlights
- Baseline strategy: [Case A: existing / Case B: theoretical+proxy]

## KLM Model (Ideal / New Interface)
| Operator | Count | Time |
|----------|-------|------|
| K | 45 | 9.0s |
| P | 8 | 8.8s |
| H | 6 | 2.4s |
| M | 12 | 16.2s |
| **Predicted** | | **36.4s** |

## Results (n=5)

| Phase | time_s (mean±SD) | klm_ops (mean±SD) | clicks | mode_sw | errors |
|-------|------------------|-------------------|--------|---------|--------|
| Baseline / Proxy | 140 ± 4 | 88 ± 2 | 12 | 2.8 | 0.4 |
| Intervention | 92 ± 6 | 54 ± 3 | 4 | 0.6 | 0.2 |

## Validation
- Model accuracy: 92/89 = 1.03 ✅ (within 0.85–1.15)
- Efficiency gain: 34% ✅ (≥30% Case A / ≤1.3×theoretical Case B)
- SD reduced: 6 vs 4 ✅
- Errors stable: 0.2 vs 0.4 ✅

## Verdict
✅ Season complete — metrics within bounds
```

---

## 7. Quick Reference Card

```
BEFORE SEASON:
  ☐ Define TASK_ID, INPUT, SUCCESS
  ☐ Choose Case A (existing) or Case B (novel)
  ☐ Write KLM ideal model (theoretical_min)

BASELINE (Case A):
  ☐ 5 runs current workflow
  ☐ Record all metrics in JOURNAL.md
  ☐ Compute mean ± SD

BASELINE (Case B):
  ☐ 5 runs proxy workflow (adjacent task)
  ☐ Record theoretical_min from KLM ideal
  ☐ Set target = theoretical_min × 1.3

BUILD:
  ☐ Write KLM model for new interface
  ☐ Predict time, ops

INTERVENTION:
  ☐ 5 runs new tool, same input
  ☐ Record all metrics

VALIDATE:
  ☐ measured/predicted ∈ [0.85, 1.15]
  ☐ Gain ≥ target (30% Case A / 1.3×theoretical Case B)
  ☐ SD intervention ≤ SD baseline
  ☐ Errors not increased
  ☐ Write validation report
```

---

## 8. Edge Cases

| Situation | Handling |
|-----------|----------|
| No proxy workflow exists | Use theoretical_min only; target = theoretical_min × 1.5 (generous) |
| High variance (SD > 20% mean) | Increase runs to 10; investigate outliers |
| Model consistently over-predicts | Add missing M operators (mental steps often omitted) |
| Tool not ready for 5 full runs | Measure sub-tasks; aggregate via GOMS composition |
| Physical interface (S3) | Add Fitts law for P (encoder/button distance, size); measure movement time separately |

---

*Version: 1.0 | Task-agnostic | Supports Case A (existing) and Case B (novel tool)*