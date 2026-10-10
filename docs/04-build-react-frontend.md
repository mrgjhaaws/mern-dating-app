# 04/15 — Build the React Frontend

> **Goal:** Create a new React application and set up the basic structure for the Dating App frontend.

## Prerequisites
Node.js · npm · VS Code · the `mern-dating-app` project folder

## Steps

### 1. Go to the client folder
```bash
cd mern-dating-app/client
```

### 2. Create the React app with Vite (recommended)
```bash
npm create vite@latest .
```
When prompted choose: project name `.` (current folder) → framework **React** → variant **JavaScript**.

### 3. Install dependencies and start the dev server
```bash
npm install
npm run dev
```
The terminal shows a local URL: **<http://localhost:5173>**.

### 4. View the default app
You will see the default **Vite + React** welcome page.

### 5. Clean up unnecessary files
| File | Action |
|---|---|
| `src/assets` | delete |
| `src/App.css` | delete |
| `src/index.css` | delete |
| `logo.svg` | delete |
| `App.jsx`, `main.jsx` | **keep** (we modify them) |
| `.eslintrc.cjs` | optional |
| `index.html`, `package.json`, `vite.config.js`, `.gitignore` | keep |

### 6. Create a better folder structure
```
client/src
├── components   → reusable UI (Header, Cards)
├── pages        → different pages (Home)
├── styles       → CSS files
├── utils        → helper functions (e.g. API calls)
├── App.jsx
└── main.jsx
```
(In this project we also use a `services` folder for API calls — see infographic 13.)

### 7. Update `App.jsx` with a simple heading
```jsx
function App() {
  return (
    <div className="app">
      <h1>MERN Dating App</h1>
      <p>React frontend is ready!</p>
    </div>
  );
}
export default App;
```

### 8. Check the output
Save the file; the browser shows **"MERN Dating App – React frontend is ready!"**.

## Files in this project
`client/index.html`, `client/vite.config.js`, `client/package.json`, `client/src/main.jsx`, `client/src/App.jsx`

> 💡 The finished `App.jsx` in this repository is larger because it already contains the routes from later infographics.

## Key takeaway
We created a React app with Vite, cleaned it, set up folders for the dating app, and the dev server is running.

➡️ **Next:** [05 — Create the Header component](05-create-header-component.md)
