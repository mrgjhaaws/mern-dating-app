# 11/15 — Build the API Route to Add New Dating Profiles (POST)

> **Goal:** `POST /api/profiles` — validate data and save a new profile in MongoDB.

```
Frontend --POST /api/profiles--> Express (validate & save) --> MongoDB
         <-- JSON (saved profile) --
```

## Steps

### 1. Model check
`models/Profile.js` must include `name`, `age`, `photo` (required) plus `bio`, `interests`, `createdAt` (see doc 10).

### 2. The POST route (`routes/profileRoutes.js`)
```js
router.post('/', async (req, res) => {
  try {
    const { name, age, photo, bio, interests } = req.body;

    if (!name || !age || !photo) {
      return res.status(400).json({ message: 'Name, age and photo are required' });
    }

    const newProfile = new Profile({ name, age, photo, bio: bio || '', interests: interests || [] });
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```
> The infographic code shows `router.post('r', …)` and `bio: bio || '',` split across lines — typos from the image. The correct path is `'/'`.
> In this repository the route also converts a comma-separated string into an array and returns **400** for Mongoose validation errors.

### 3. `index.js`
Needs `app.use(express.json())` (to read the JSON body) and `app.use('/api/profiles', profileRoutes)`.

### 4. Test with Postman
- Method **POST**, URL `http://localhost:5000/api/profiles`
- Body → raw → **JSON**:
```json
{
  "name": "Priya",
  "age": 25,
  "photo": "https://i.pravatar.cc/400x500?img=44",
  "bio": "Love traveling and meeting new people!",
  "interests": ["Travel", "Music", "Food"]
}
```
- Expected: **201 Created** with `_id` and `createdAt`.

### 5. Test from a frontend form (optional)
`client/src/components/AddProfile/AddProfile.jsx` posts to this route and shows *“Profile added successfully!”*.

### 6. Check in MongoDB Atlas
Browse Collections → database → `profiles` → the new document is there.

### 7. Common errors
| Error | Fix |
|---|---|
| 400 Bad Request | Missing required fields |
| 500 Server Error | Check the MongoDB connection |
| Validation error | Correct data types (age must be a number) |
| CORS error | Make sure `app.use(cors())` is enabled |

## Key takeaway
Users can now create profiles through the API; data is validated and stored.

➡️ **Next:** [12 — PUT and DELETE](12-update-delete-put-delete-routes.md)
