# Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| `MongoDB Error: bad auth` | Wrong user/password in `MONGODB_URI` | Re-check the Atlas database user; URL-encode special characters |
| `MongooseServerSelectionError` | IP not allowed | Atlas → Network Access → add `0.0.0.0/0` (dev) |
| `⚠️ MONGODB_URI is not set` | Missing `server/.env` | Copy `.env.example` to `.env` |
| Frontend shows “Failed to fetch profiles” | Backend not running or wrong URL | Start the server; check `VITE_API_URL` |
| CORS error in browser | Origin not allowed | Set `FRONTEND_URL` to the exact frontend URL (no trailing slash) |
| Empty Discover page | No data | `npm run seed --prefix server` or use Add Profile |
| `Cannot GET /matches` after deploy refresh | SPA rewrite missing | Keep `client/vercel.json` / `firebase.json` |
| Env var not read in React | Missing `VITE_` prefix or no restart | Rename to `VITE_...` and restart `npm run dev` |
| Port 5000 busy (macOS) | AirPlay uses 5000 | Set `PORT=5001` and update `VITE_API_URL` |
| Render API very slow at first request | Free instance was asleep | Wait up to a minute |
