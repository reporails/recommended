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
