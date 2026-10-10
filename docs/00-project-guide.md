# Project Guide — MERN Dating App

## 1. Architecture
```
┌────────────────┐  HTTP (Axios)   ┌─────────────────────┐  Mongoose   ┌───────────────┐
│ React (Vite)   │ ─────────────▶ │ Express / Node.js   │ ──────────▶ │ MongoDB Atlas │
│ client/        │ ◀───────────── │ server/             │ ◀────────── │ profiles      │
└────────────────┘     JSON        └─────────────────────┘             └───────────────┘
```

## 2. Data model — `Profile`
| Field | Type | Notes |
|---|---|---|
| `name` | String | required |
| `age` | Number | required, min 18 |
| `photo` | String | required, image URL |
| `bio` | String | optional |
| `interests` | [String] | optional |
| `createdAt` | Date | default now |
| `updatedAt` | Date | automatic |

## 3. Frontend map
| File | Infographic | Role |
|---|---|---|
| `components/Header` | 05, 14 | Logo, nav (NavLink), hamburger menu |
| `components/Card` | 06 | Photo + name, age + interests |
| `components/SwipeButtons` | 07 | Dislike / Super like / Like |
| `components/Profiles` | 13 | Fetch & grid, loading/error/retry |
| `components/ProfileCard` | 13 | Edit and Delete |
| `components/AddProfile` | 13 | Form → POST |
| `components/Status` | 14 | Loader and ErrorBox |
| `pages/Discover` | 06, 07, 13 | Swipe deck using real data |
| `pages/Matches` | extra | Liked profiles (localStorage) |
| `services/api.js` | 13 | Axios functions |

## 4. Backend map
| File | Infographic | Role |
|---|---|---|
| `index.js` | 08, 09 | Express app, CORS, MongoDB connection |
| `models/Profile.js` | 10 | Mongoose schema |
| `routes/profileRoutes.js` | 10, 11, 12 | GET / POST / PUT / DELETE |
| `seed.js` | 10 | Sample data |

## 5. Environment variables
**server/.env** — `PORT`, `MONGODB_URI`, `FRONTEND_URL`, `NODE_ENV`
**client/.env** — `VITE_API_URL` (e.g. `http://localhost:5000/api`)

## 6. Differences from the infographics (deliberate)
| Infographic says | This project does | Why |
|---|---|---|
| Frontend on `localhost:3000` | `localhost:5173` | Vite default |
| Firebase `public: build` | `dist` | Vite output folder |
| Heroku backend (01, 08) | Render (as in 15) | Heroku has no free tier |
| `source.unsplash.com` photos | `i.pravatar.cc` | Unsplash Source is discontinued |
| Font Awesome icons | Unicode ✕ ★ ♥ | No extra dependency |
| Tailwind (14) | Plain CSS (+ optional Tailwind guide) | Zero setup, Tailwind v4 changed its install |
| Typos in code images (`router.post('r'`, `setLaading`, `.then()`) | Fixed | Working code |
| Backend folder `mern-dating-backend` | `server/` | Matches doc 02 |

## 7. Suggested learning path
1. Read docs 01–02, set up tools
2. Follow 04–07 to build the UI with dummy data
3. Follow 08–12 to build and test the API (Postman or the VS Code REST Client)
4. Follow 13–14 to connect and polish
5. Follow 15 to deploy

## 8. Ideas to extend
- Authentication (JWT) and user accounts
- Real swipe animations (drag with a gesture library)
- Mutual matches and chat (Socket.io)
- Image upload (Cloudinary), search and filters
