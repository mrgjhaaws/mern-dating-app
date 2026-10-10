# 12/15 — Update and Delete Dating Profiles (PUT and DELETE)

> **Goal:** Add routes to update and remove profiles in MongoDB.

```
PUT    /api/profiles/:id  → update profile  → returns updated profile
DELETE /api/profiles/:id  → delete profile  → returns success message
```

## PUT — update a profile
```js
router.put('/:id', async (req, res) => {
  try {
    const { name, age, photo, bio, interests } = req.body;
    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      { name, age, photo, bio, interests },
      { new: true, runValidators: true }
    );
    if (!updatedProfile) return res.status(404).json({ message: 'Profile not found' });
    res.json({ message: 'Profile updated successfully', profile: updatedProfile });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```
- `{ new: true }` → return the **updated** document
- `{ runValidators: true }` → apply schema rules on updates

## DELETE — remove a profile
```js
router.delete('/:id', async (req, res) => {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(req.params.id);
    if (!deletedProfile) return res.status(404).json({ message: 'Profile not found' });
    res.json({ message: 'Profile deleted successfully', profile: deletedProfile });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
```

## Improvements in this repository
- Only the fields that are **sent** are updated (a partial PUT does not erase other fields).
- An invalid id like `abc` returns **400 Invalid profile id** instead of crashing.
- The schema uses `timestamps` so `updatedAt` appears in responses.

## `index.js`
Same as before: `app.use('/api/profiles', profileRoutes);` and MongoDB connected.

## Test with Postman
| Request | URL | Body | Result |
|---|---|---|---|
| PUT | `/api/profiles/{id}` | raw JSON with new fields | 200 OK + `Profile updated successfully` |
| DELETE | `/api/profiles/{id}` | none | 200 OK + `Profile deleted successfully` |

Copy the `{id}` from the `_id` field of a GET response.

## Verify in Atlas
Open the `profiles` collection — the document is changed or gone.

## Common errors
| Error | Fix |
|---|---|
| 404 Not Found | Check that the profile id exists |
| 400 Bad Request | Validate input data |
| 500 Server Error | Check MongoDB connection and logs |
| CORS Error | Make sure CORS is enabled |
| Validation Error | Correct data types and required fields |

## Key takeaway
The backend now supports full CRUD: **C**reate (POST), **R**ead (GET), **U**pdate (PUT), **D**elete (DELETE).

➡️ **Next:** [13 — Connect React to the API](13-connect-react-frontend-to-backend.md)
