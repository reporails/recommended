## Error Handling

```javascript
const express = require('express');
app.get('/user/:id', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});
```

(Project uses Python/FastAPI — example is JavaScript/Express)