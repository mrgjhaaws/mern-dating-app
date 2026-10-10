# 06/15 — Design the Dating Profile Cards Component

> **Goal:** Create attractive user profile cards to display dating profiles.

## What you will learn
- Create a reusable `Card` component
- Show photo, name, age and interests
- Style it like a dating app card
- Use dummy data (temporary)
- Make it responsive
- Prepare for swipe buttons (next step)

## Steps

### 1. Create the files
```
client/src/components/Card/Card.jsx
client/src/components/Card/Card.css
```

### 2. `Card.jsx`
```jsx
import React from 'react';
import './Card.css';

const Card = ({ profile }) => (
  <div className="card">
    <img src={profile.photo} alt={profile.name} className="card-img" />
    <div className="card-info">
      <h3 className="card-name">{profile.name}, {profile.age}</h3>
      <p className="card-details">{profile.interests.join(' | ')}</p>
    </div>
  </div>
);
export default Card;
```

### 3. `Card.css` (key ideas)
- `.card` — width 100%, max-width 320px, height 400px, rounded corners, `overflow: hidden`, `position: relative`, shadow
- `.card:hover` — `transform: scale(1.03)`
- `.card-img` — `object-fit: cover` so any photo fills the card
- `.card-info` — `position: absolute; bottom: 0` with a dark `linear-gradient` so white text stays readable

### 4. Test with dummy data (in `App.jsx`)
```jsx
const profiles = [
  { id: 1, name: 'Emma', age: 24, photo: 'https://i.pravatar.cc/400x500?img=47', interests: ['Travel','Music','Food'] },
  { id: 2, name: 'Sophia', age: 22, photo: 'https://i.pravatar.cc/400x500?img=45', interests: ['Photography','Coffee','Nature'] },
];
{profiles.map((p) => <Card key={p.id} profile={p} />)}
```
> The infographic uses `source.unsplash.com` URLs. That service has been **shut down**, so use `pravatar.cc` or any image URL you own.

### 5. Result
`npm run dev` → open <http://localhost:5173> and you see the profile cards.

## Files in this project
`client/src/components/Card/Card.jsx`, `Card.css`. The Card also shows a graceful fallback picture when an image URL is broken (`onImageError` in `utils/helpers.js`).

## Key takeaway
The Card component is reusable and responsive; it is used in the next step to add swipe buttons.

➡️ **Next:** [07 — Swipe Buttons](07-create-swipe-buttons.md)
