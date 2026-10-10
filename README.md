# ❤ MERN Dating App

A swipe-style dating web app built with **MongoDB, Express.js, React (Vite) and Node.js**, based on the 15-part infographic series *“Project 1 – MERN Dating App”*.

## Features
- Swipe cards (Like ❤ / Super Like ★ / Dislike ✕) with real data
- Matches page (saved in the browser)
- Full CRUD for profiles: add, edit, delete (REST API + MongoDB)
- Loading spinner, error messages with Retry, responsive layout

## Project structure
```
mern-dating-app/
├── client/                 React + Vite frontend
│   └── src/
│       ├── components/     Header, Card, SwipeButtons, ProfileCard, Profiles, AddProfile, Status
│       ├── pages/          Discover, Matches, Manage, Add
│       ├── services/api.js Axios API functions
│       ├── styles/ utils/
├── server/                 Node + Express backend
│   ├── models/Profile.js
│   ├── routes/profileRoutes.js
│   ├── index.js            server entry
│   └── seed.js             sample data
├── docs/                   Documentation (see below)
└── .vscode/                Tasks, debug config, recommended extensions
```

## Quick start
**Requirements:** Node.js LTS and a free MongoDB Atlas cluster ([doc 09](docs/09-connect-mongodb-atlas.md)).

```bash
# 1. Install dependencies (or run the VS Code task "Install all dependencies")
npm install --prefix server
npm install --prefix client

# 2. Configure environment variables
cp server/.env.example server/.env      # then put your MONGODB_URI inside
cp client/.env.example client/.env

# 3. (Optional) add sample profiles
npm run seed --prefix server

# 4. Start both apps (two terminals)
npm run dev --prefix server             # http://localhost:5000
npm run dev --prefix client             # http://localhost:5173
```
In VS Code: **Terminal → Run Task → “Run full app (backend + frontend)”**.

## Documentation
**Project-wise**
- [Project guide & architecture](docs/00-project-guide.md)
- [API reference](docs/API.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)

**Infographic-wise (learning order)**
| # | Topic |
|---|---|
| 01 | [Project overview and final application](docs/01-project-overview-and-final-application.md) |
| 02 | [Set up the development environment](docs/02-setup-development-environment.md) |
| 03 | [Configure Firebase Hosting](docs/03-configure-firebase-hosting.md) |
| 04 | [Build the React frontend](docs/04-build-react-frontend.md) |
| 05 | [Create the Header component](docs/05-create-header-component.md) |
| 06 | [Design the Profile Cards](docs/06-design-profile-cards.md) |
| 07 | [Create the Swipe Buttons](docs/07-create-swipe-buttons.md) |
| 08 | [Node.js & Express backend](docs/08-setup-nodejs-express-backend.md) |
| 09 | [Connect MongoDB Atlas](docs/09-connect-mongodb-atlas.md) |
| 10 | [Create and test the first API route](docs/10-create-and-test-first-api-route.md) |
| 11 | [POST route – add profiles](docs/11-build-post-route-add-profiles.md) |
| 12 | [PUT and DELETE routes](docs/12-update-delete-put-delete-routes.md) |
| 13 | [Connect React to the backend](docs/13-connect-react-frontend-to-backend.md) |
| 14 | [UI, loading, errors, responsive](docs/14-improve-ui-loading-errors-responsive.md) |
| 15 | [Deploy and make it live](docs/15-deploy-and-make-it-live.md) |
