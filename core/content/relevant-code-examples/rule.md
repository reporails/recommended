---
id: RRAILS:C:0008
slug: relevant-code-examples
title: Relevant Code Examples
category: content
type: semantic
level: L3
backed_by:
- awesome-copilot-meta-instructions
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.C.0008.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.C.0008.semantic-evaluation
  type: semantic
  severity: medium
  name: semantic-evaluation
question: Do the code examples in this instruction file use the project's actual
  patterns and frameworks?
criteria:
- Code examples import from the project's actual framework (not a different one)
- Naming conventions in examples match the project's style
- Error handling patterns in examples match how the project handles errors
- Examples are representative of how code is actually written in this project
choices:
- value: pass
  label: Passes
- value: fail
  label: Fails
pass_value: pass
---

# Relevant Code Examples

Code examples in instruction files SHOULD use the project's actual patterns (import style, error handling, naming conventions, framework idioms) rather than generic or foreign patterns, because agents treat examples as the strongest signal for how to write code in this project

## Pass / Fail

### Pass

~~~~markdown
## Error Handling

```python
from fastapi import HTTPException

 async def get_user(user_id: str) -> User:
    user = await db.users.find_one(user_id)
     if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return User(**user)
```

(Example uses the project's actual framework, patterns, and conventions)
~~~~

### Fail

~~~~markdown
## Error Handling

```python
from flask import abort

 def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        abort(404)
    return user
```

(Project uses FastAPI, not Flask — agent will generate Flask-style code in a FastAPI project)
~~~~

## Limitations

M/D chain extracts code blocks and identifies language and framework imports. Comparing against project patterns requires sampling actual codebase files — the semantic gate evaluates whether the example is representative. Projects in early stages may not have established patterns yet.
