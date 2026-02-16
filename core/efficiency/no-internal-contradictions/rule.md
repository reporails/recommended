---
id: RRAILS:E:0004
slug: no-internal-contradictions
title: No Internal Contradictions
category: efficiency
type: semantic
level: L3
backed_by:
- awesome-copilot-meta-instructions
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.E.0004.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.E.0004.semantic-evaluation
  type: semantic
  severity: medium
  name: semantic-evaluation
question: Does this instruction file contain directives that contradict each 
  other?
criteria:
- No two directives prescribe opposite actions on the same object
- Context-dependent guidance (different rules for different file types) is not 
  counted as contradiction
- Contradictions between sections (Style vs API Patterns) are flagged
choices:
- value: pass
  label: Passes
- value: fail
  label: Fails
pass_value: pass
---

# No Internal Contradictions

Instruction files SHOULD NOT contain contradictory directives in different sections, because agents resolve contradictions unpredictably — sometimes following the last instruction, sometimes the most emphatic one, sometimes neither

## Pass / Fail

### Pass

~~~~markdown
## Style

- Use named exports for all modules

## API Patterns

- Export API route handlers as named exports

(Consistent — both sections agree on named exports)
~~~~

### Fail

~~~~markdown
(File does not exist at expected path)
~~~~

## Limitations

Distinguishing real contradictions from context-dependent guidance requires semantic understanding. 'Use default exports for React components' and 'use named exports for utility modules' is not a contradiction — it is context-scoping. M/D pre-reduction extracts directive pairs with opposing verbs on the same object, but the semantic gate must confirm whether the conflict is real or contextual.
