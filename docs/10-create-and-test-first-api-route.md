# 10/15 — Create and Test the First API Route

> **Goal:** `GET /api/profiles` — return all dating profiles from MongoDB.

```
Frontend --GET /api/profiles--> Express route --Profile.find()--> MongoDB
         <---- JSON ----------                <---- array ------
```

## Steps

### 1. Profile model — `server/models/Profile.js`
```js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  photo: { type: String, required: true },
  bio: { type: String },
  interests: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Profile', profileSchema);
```
(The repository version also trims the name and requires age ≥ 18.)

### 2. Route — `server/routes/profileRoutes.js`
```js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ createdAt: -1 });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
module.exports = router;
```

### 3. Connect the route in `index.js`
```js
const profileRoutes = require('./routes/profileRoutes');
app.use('/api/profiles', profileRoutes);
```

### 4. Add sample data (optional) — `server/seed.js`
```bash
npm run seed       # prints: Sample profiles added!
```
The seed script deletes old profiles and inserts 8 samples.

### 5. Test in the browser
```bash
npm start
```
Open <http://localhost:5000/api/profiles> → you see a JSON array.

### 6. Test with Postman (alternative)
`GET http://localhost:5000/api/profiles` → **Send** → check the response.

### 7. Expected terminal output
```
✅ Connected to MongoDB
Server running on port 5000
Sample profiles added!   (only for the seed script)
```

## Key takeaway
First working API: Profile model + GET route + connected in `index.js`, tested in browser/Postman.

➡️ **Next:** [11 — POST route](11-build-post-route-add-profiles.md)
