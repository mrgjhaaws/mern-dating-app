# 03/15 — Configure Firebase Hosting

> **Goal:** Create a Firebase project and set up hosting for the React frontend.

## Prerequisites
Google account · Node.js + npm installed · VS Code installed · Internet connection

## What you will learn
- Create a Firebase project with your Google account
- Enable Firebase Hosting for the React frontend
- Install and configure the Firebase CLI
- Deploy a test React app and get a live URL

## Steps

### 1. Open the Firebase console
Open <https://firebase.google.com> → click **Go to console** (top-right).

### 2. Add a new project
Click **Add project** → enter a name (e.g. `mern-dating-app`) → **Continue**.

### 3. Project settings
(Optional) disable Google Analytics → **Create project**.

### 4. Enable Hosting
Left menu → **Build → Hosting** → **Get started**.

### 5. Install the Firebase CLI
```bash
npm install -g firebase-tools
firebase --version      # e.g. 13.4.0
```

### 6. Log in
```bash
firebase login
```
Allow Firebase to collect CLI usage info (optional) and sign in with Google. You should see *"Success! Logged in as …"*.

### 7. Initialize hosting inside the frontend folder
```bash
cd mern-dating-app/client
firebase init
```
Choose these options:

| Question | Answer |
|---|---|
| Features | **Hosting** |
| Project | **Use an existing project** → `mern-dating-app` |
| Public directory | `build` *(see note below)* |
| Single-page app | **Yes** |
| Overwrite index.html | **No** |

> ⚠️ **Note — `build` vs `dist`:** The infographic uses `build` (the folder name for Create React App). In **Vite** (used in infographic 04) the output folder is **`dist`**. This project ships a ready `client/firebase.json` that already uses `dist`.

### 8. Deploy a test app
```bash
npm run build
firebase deploy
```
You will get a URL like `https://mern-dating-app.web.app`.

## Files in this project related to this step
- `client/firebase.json` — hosting config (public dir `dist`, SPA rewrite to `index.html`)

## Important: backend hosting differs between infographics
- Infographics 01 and 08 mention **Heroku** for the backend.
- Infographic 15 (final deployment) uses **Render** (backend) + **Vercel** (frontend).
Heroku no longer has a free tier, so use **Render** (see [doc 15](15-deploy-and-make-it-live.md)). Firebase Hosting is still a valid alternative for the frontend.

## Key takeaway
Firebase Hosting provides a fast and secure way to deploy your React frontend with a global CDN.

➡️ **Next:** [04 — Build the React frontend](04-build-react-frontend.md)
