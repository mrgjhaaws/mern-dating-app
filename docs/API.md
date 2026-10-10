# API Reference

Base URL: `http://localhost:5000` (local) · `https://your-api.onrender.com` (production)

| Method | Endpoint | Description | Success |
|---|---|---|---|
| GET | `/` | Health check | `200` `{ message }` |
| GET | `/api/profiles` | All profiles, newest first | `200` array |
| GET | `/api/profiles/:id` | One profile | `200` object |
| POST | `/api/profiles` | Create profile | `201` created profile |
| PUT | `/api/profiles/:id` | Update fields sent | `200` `{ message, profile }` |
| DELETE | `/api/profiles/:id` | Delete profile | `200` `{ message, profile }` |

## POST body
```json
{
  "name": "Priya",
  "age": 25,
  "photo": "https://i.pravatar.cc/400x500?img=44",
  "bio": "Love traveling and meeting new people!",
  "interests": ["Travel", "Music", "Food"]
}
```
`interests` may also be a comma-separated string (`"Travel, Music"`).

## Errors
| Status | Meaning |
|---|---|
| 400 | Missing required fields, validation error or invalid id |
| 404 | Profile not found |
| 500 | Server / database error |

## curl examples
```bash
curl http://localhost:5000/api/profiles
curl -X POST http://localhost:5000/api/profiles -H "Content-Type: application/json" \
  -d '{"name":"Priya","age":25,"photo":"https://i.pravatar.cc/400x500?img=44"}'
curl -X PUT http://localhost:5000/api/profiles/<id> -H "Content-Type: application/json" -d '{"age":26}'
curl -X DELETE http://localhost:5000/api/profiles/<id>
```
