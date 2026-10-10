# 07/15 — Create the Swipe Buttons Component

> **Goal:** Add **Dislike ✕**, **Super Like ★** and **Like ♥** buttons below the profile card.

## Steps

### 1. Create the files
```
client/src/components/SwipeButtons/SwipeButtons.jsx
client/src/components/SwipeButtons/SwipeButtons.css
```

### 2. `SwipeButtons.jsx`
```jsx
const SwipeButtons = ({ onSwipe }) => (
  <div className="swipe-buttons">
    <button className="btn dislike"  onClick={() => onSwipe('dislike')}>✕</button>
    <button className="btn superlike" onClick={() => onSwipe('superlike')}>★</button>
    <button className="btn like"     onClick={() => onSwipe('like')}>♥</button>
  </div>
);
```
> The infographic uses Font Awesome icons (`<i className="fas fa-heart">`). That needs the Font Awesome CSS to be loaded, so this project uses plain Unicode symbols (✕ ★ ♥) — no extra dependency.

### 3. CSS highlights
- Round buttons: `width/height: 60px; border-radius: 50%`
- Colours: dislike `#ff4b5c`, super like `#2f8cff`, like `#28c76f`
- `.btn:hover { transform: scale(1.1); }` for the animation

### 4. Use it inside `Card`
```jsx
const Card = ({ profile, onSwipe }) => (
  <div className="card-wrapper">
    <div className="card"> ... </div>
    {onSwipe && <SwipeButtons onSwipe={onSwipe} />}
  </div>
);
```

### 5. Handle the click (temporary alert)
```jsx
const handleSwipe = (type) => alert(`You clicked ${type}`);
<Card profile={profile} onSwipe={handleSwipe} />
```
In the final app (`pages/Discover.jsx`) a like/super-like adds the profile to **Matches** and the next card appears.

### 6. Test
Click each button and hover over them to see the animation. On phones (≤480px) the buttons get slightly smaller.

## Key takeaway
A reusable SwipeButtons component with click events and hover effects, placed under the profile card.

➡️ **Next:** [08 — Node.js and Express backend](08-setup-nodejs-express-backend.md)
