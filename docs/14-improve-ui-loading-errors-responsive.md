# 14/15 — Improve UI Styling, Loading States, Error Handling and Responsive Design

> **Goal:** Make the app beautiful, friendly and mobile responsive.

## What you will learn
- Style the app (Tailwind CSS or plain CSS)
- Add loading states and error messages
- Make the layout responsive (mobile, tablet, desktop)
- Add smooth animations and transitions

## 1. Styling approach
The infographic uses **Tailwind CSS**. This repository uses **plain CSS** so the project works with zero extra setup. Both give the same result; below is how to add Tailwind if you want it.

### Optional: Tailwind CSS with Vite
> The infographic’s `npx tailwindcss init` belongs to Tailwind v3. With the current Tailwind v4 use the Vite plugin:
```bash
npm install tailwindcss @tailwindcss/vite
```
`vite.config.js`:
```js
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ plugins: [react(), tailwindcss()] });
```
`src/styles/global.css` (first line): `@import "tailwindcss";`
Then use classes such as `className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50"`.

## 2. Main layout
`App.jsx` renders `<Header />` and a centered `<main className="container">` with the routes. Background is a pink→purple gradient (`.app` in `styles/global.css`).

## 3. Sticky, responsive header
`position: sticky; top: 0; backdrop-filter: blur(8px)`, plus a ☰ hamburger menu under 700px (`Header.css`).

## 4. Beautiful profile cards
Rounded corners, shadow, `hover` lift/scale, interest “pills” (tags).

## 5. Loading state — `components/Status/Status.jsx`
```jsx
export const Loader = ({ text = 'Loading Profiles...' }) => (
  <div className="status"><div className="spinner" /><p>{text}</p></div>
);
```
Shown while `loading === true`.

## 6. Error handling with Retry
```jsx
try {
  const res = await getProfiles();
  setProfiles(res.data);
} catch (err) {
  setError('Failed to fetch profiles. Is the backend running?');
}
```
`ErrorBox` shows the message and a **Retry** button that calls the fetch function again.

## 7. Responsive design
| Screen | Behaviour |
|---|---|
| Mobile (≤ 480–700px) | Hamburger menu, smaller buttons, single column |
| Tablet | Grid with 2–3 columns |
| Desktop | `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))` |

Test it with Chrome DevTools → *Toggle device toolbar* (Ctrl+Shift+M).

## 8. Animations and transitions
- `transition: transform 0.2s` + `:hover { transform: scale(1.1) }` on buttons
- `@keyframes spin` for the loading spinner
- Card lift on hover

## Key takeaway
The app now looks professional: styled, with loading and error states, responsive on all devices.

➡️ **Next:** [15 — Deploy](15-deploy-and-make-it-live.md)
