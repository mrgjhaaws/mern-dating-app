# 15/15 — Deploy the MERN Dating App and Make It Live

> **Goal:** React frontend on **Vercel**, Node.js backend on **Render**, database on **MongoDB Atlas**.

```
React (Vercel)  --HTTPS API requests-->  Node + Express (Render)  <-->  MongoDB Atlas (free tier)
https://your-app.vercel.app              https://your-api.onrender.com
```

## 1. Prepare the backend
- Project structure is clean; secrets are in environment variables (`.env` is in `.gitignore`)
- `package.json` has `"start": "node index.js"`
- CORS only allows your frontend URL — in this project set `FRONTEND_URL` (see `server/index.js`)

## 2. Push the code to GitHub
```bash
git init
git add .
git commit -m "MERN Dating App"
git remote add origin https://github.com/<you>/dating-app.git
git push -u origin main
```

## 3. Deploy the backend on Render
1. Create a Render account → **New → Web Service**
2. Connect your GitHub repository
3. **Root Directory:** `server` (because this repo contains both folders)
4. **Build command:** `npm install` · **Start command:** `npm start`
5. Add environment variables (below) → **Deploy**
6. You get `https://your-api.onrender.com`

| Variable | Value |
|---|---|
| `MONGODB_URI` | your Atlas connection string |
| `PORT` | leave unset (Render provides it) or `5000` |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://your-app.vercel.app` |

In Atlas **Network Access** keep `0.0.0.0/0` (Render free instances have changing IPs).

## 4. Deploy the frontend on Vercel
1. Create a Vercel account → **Import** the GitHub repo
2. **Root Directory:** `client` · Framework preset: **Vite (React)**
3. Environment variable: `VITE_API_URL = https://your-api.onrender.com/api`
4. **Deploy** → `https://your-app.vercel.app`

> `VITE_API_URL` must end with **/api** in this project because `services/api.js` appends `/profiles`. `client/vercel.json` makes page refreshes on `/matches`, `/add` etc. work.

## 5. Update CORS
After you know the Vercel URL, set `FRONTEND_URL` on Render to it and redeploy the backend.

## 6. Test the live app
1. Open the live URL
2. View, add, update and delete profiles
3. Check the data in MongoDB Atlas
4. Test on mobile and desktop

## 7. Optional: custom domain
Buy a domain → add it in Vercel → update DNS records as instructed → SSL is enabled automatically.

## 8. Best practices
- Keep secrets in environment variables; never commit `.env`
- Use HTTPS, enable CORS only for your frontend
- Monitor logs, keep dependencies updated
- Plan for scaling when users grow

## 9. Common issues
| Issue | Solution |
|---|---|
| App not loading | Check deployment logs |
| API not working | Verify environment variables |
| CORS error | Add the frontend URL in backend CORS (`FRONTEND_URL`) |
| Database connection error | Check `MONGODB_URI` and Atlas network access |
| Build failed | Check Node.js version and dependencies |
| White screen | Open the browser console for errors |
| Changes not reflected | Redeploy the app |

> Render free web services sleep after inactivity — the first request may take ~30–60 seconds.

## 🎉 Project completed
Frontend on Vercel · backend on Render · Atlas connected · full CRUD · responsive UI · ready for real users.
