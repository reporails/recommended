# API Error Handling

NEVER return raw exception messages to API clients. ALWAYS wrap errors in structured responses.

## Good

```python
return JsonResponse({"error": "Invalid request", "code": "VALIDATION_ERROR"}, status=400)
```

## Bad

```python
return JsonResponse({"error": str(e)}, status=500)
```
