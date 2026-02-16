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
