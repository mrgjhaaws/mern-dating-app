# 13/15 — Connect the React Frontend to the Backend API

> **Goal:** Fetch, add, update and delete profiles from React using **Axios**.

```
React (localhost:5173) --HTTP GET/POST/PUT/DELETE--> Express (localhost:5000) --> MongoDB
```
> The infographic writes `localhost:3000` (Create React App). With **Vite** the frontend runs on **5173**.

## Steps

### 1. Install Axios
```bash
cd client
npm install axios
```
Why Axios? Easy to use · works with async/await · parses JSON automatically · better error handling.

### 2. API service — `src/services/api.js`
```js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const getProfiles   = () => API.get('/profiles');
export const addProfile    = (data) => API.post('/profiles', data);
export const updateProfile = (id, data) => API.put(`/profiles/${id}`, data);
export const deleteProfile = (id) => API.delete(`/profiles/${id}`);
```
`import.meta.env.VITE_API_URL` lets you change the backend URL for production (doc 15).

### 3. Fetch and display profiles — `components/Profiles/Profiles.jsx`
Uses `useState` for `profiles`, `loading`, `error` and `useEffect` to call `getProfiles()` once when the component loads. Renders a `ProfileCard` for each profile.

### 4. Add a profile — `components/AddProfile/AddProfile.jsx`
A form (name, age, photo URL, bio, interests) → on submit calls `addProfile`, splits interests by comma and shows a success/error message.

### 5. Update and delete — `components/ProfileCard/ProfileCard.jsx`
- **Delete** → `window.confirm` → `deleteProfile(id)` → remove the card from the list
- **Edit** → inline form → `updateProfile(id, data)` → replace the card in the list

### 6. Pages and routes
| Route | Page | Purpose |
|---|---|---|
| `/` | `Discover` | Swipe cards (Card + SwipeButtons) with real data |
| `/matches` | `Matches` | Profiles you liked |
| `/profiles` | `Manage` | Grid with Edit / Delete |
| `/add` | `Add` | Add Profile form |

### 7. Run everything
```bash
# Terminal 1
cd server && npm run dev
# Terminal 2
cd client && npm run dev
```
Open <http://localhost:5173>.

### 8. Common issues
| Problem | Solution |
|---|---|
| CORS error | Enable CORS in the backend (`app.use(cors())`) |
| Network error | Check that the backend is running |
| Empty data | Verify the MongoDB connection / run `npm run seed` |
| Form not working | Check API URL and request body |
| Image not loading | Use a valid image URL (fallback picture is shown) |

## Key takeaway
Frontend and backend now work together — full CRUD from the browser.

➡️ **Next:** [14 — Improve UI](14-improve-ui-loading-errors-responsive.md)
