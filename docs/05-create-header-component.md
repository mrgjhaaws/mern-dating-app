# 05/15 — Create the Dating App Header Component

> **Goal:** Build a responsive header with logo and navigation links.

## What you will learn
- Create a reusable `Header` component
- Display the app logo and title
- Add navigation links using **React Router**
- Style the header with CSS and make it responsive

## Final header
`❤ MERN Dating` — **Discover · Matches · Profile** — user avatar

## Steps

### 1. Install React Router (needed for `<Link>`)
```bash
cd client
npm install react-router-dom
```
and wrap the app with `<BrowserRouter>` in `main.jsx`:
```jsx
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter><App /></BrowserRouter>
);
```
> The infographic does not show this step but without it `Link` throws an error.

### 2. Create the files
```
client/src/components/Header/Header.jsx
client/src/components/Header/Header.css
```

### 3. `Header.jsx`
```jsx
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="logo">
      <span className="heart">❤</span>
      <h2>MERN Dating</h2>
    </div>
    <nav className="nav-links">
      <Link to="/">Discover</Link>
      <Link to="/matches">Matches</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    <div className="user"><img src="/avatar.png" alt="User" /></div>
  </div>
);
export default Header;
```
> **In this repository** we use `NavLink` (highlights the active page) and a hamburger button for mobile (from infographic 14). Open `client/src/components/Header/Header.jsx`.

### 4. `Header.css` (core rules)
```css
.header { display:flex; justify-content:space-between; align-items:center;
  padding:15px 30px; background:#fff; box-shadow:0 2px 6px rgba(0,0,0,.1); }
.logo { display:flex; align-items:center; gap:10px; font-weight:bold; }
.heart { color:#ff4b74; font-size:28px; }
.nav-links a { margin:0 15px; text-decoration:none; color:#333; font-weight:500; }
.nav-links a:hover { color:#ff4b74; }
.user img { width:40px; height:40px; border-radius:50%; object-fit:cover; }
```

### 5. Use the Header in `App.jsx`
```jsx
import Header from './components/Header/Header';
function App() {
  return (
    <div className="app">
      <Header />
      {/* Other components or routes */}
    </div>
  );
}
```

### 6. Run and test
```bash
npm run dev      # open http://localhost:5173
```

### 7. Responsive view
On small screens (`max-width: 700px`) the navigation collapses behind a ☰ button (see the `@media` block in `Header.css`).

## Key takeaway
A reusable Header with logo, navigation links and user avatar, used across all pages.

➡️ **Next:** [06 — Design the Profile Cards component](06-design-profile-cards.md)
